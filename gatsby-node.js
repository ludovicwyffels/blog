const path = require('path');
const _ = require('lodash');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.
  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout, primaryTag } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}/`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || '',
      });

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || '',
      });

      createNodeField({
        node,
        name: 'primaryTag',
        value: primaryTag || '',
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // create a redirection
  createRedirect({
    fromPath: `/2019-03-01-s3-direct-browser-upload`,
    toPath: `/aws-s3-secure-direct-upload`,
    isPermanent: true,
    statusCode: 200,
  })

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: ASC }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            excerpt
            timeToRead
            frontmatter {
              title
              subtitle
              tags
              category
              date
              draft
              image {
                childImageSharp {
                  fluid(maxWidth: 3720) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
              author {
                id
                bio
                avatar {
                  children {
                    ... on ImageSharp {
                      fixed(quality: 90) {
                        src
                      }
                    }
                  }
                }
              }
            }
            fields {
              layout
              slug
            }
          }
        }
      }
      allAuthorYaml {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error(result.errors);
  }

  // Create post pages
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(({ node }, index) => {
    const { slug, layout } = node.fields;
    const prev = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `layout` frontmatter in the Markdown.
      //
      // Feel free to set any `layout` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `post`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${layout || 'post'}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug,
        prev,
        next,
        primaryTag: node.frontmatter.tags ? node.frontmatter.tags[0] : '',
        primaryCategory: node.frontmatter.category ? node.frontmatter.category[0] : '',
      },
    });
  });

  // Create blog-list pages
  const postsPerPage = 9;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((item, index) => {
    createPage({
      path: index === 0 ? `/` : `/page/${index + 1}`,
      component: path.resolve('./src/templates/blog.tsx'),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })

  // Create tag pages
  const tagTemplate = path.resolve('./src/templates/tags.tsx');
  const tags = _.uniq(
    _.flatten(
      result.data.allMarkdownRemark.edges.map(edge => {
        return _.castArray(_.get(edge, 'node.frontmatter.tags', []));
      }),
    ),
  );
  tags.forEach(tag => {
    // Pagination
    graphql(`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { tags: { in: ["${tag}"] }, draft: { ne: true } } }
        ) {
          totalCount
        }
      }
    `).then((resultTag) => {
      const numPages = Math.ceil(resultTag.data.allMarkdownRemark.totalCount / postsPerPage);
      Array.from({ length: numPages }).forEach((item, index) => {
        createPage({
          path: index === 0 ? `/tags/${_.kebabCase(tag)}/` : `/tags/${_.kebabCase(tag)}/page/${index + 1}`,
          component: tagTemplate,
          context: {
            tag,
            tagURL: _.kebabCase(tag),
            limit: postsPerPage,
            skip: index * postsPerPage,
            numPages,
            currentPage: index + 1,
          },
        })
      })
    });
  });

  // Create category pages
  const categoryTemplate = path.resolve('./src/templates/category.tsx');
  const categories = _.uniq(
    _.flatten(
      result.data.allMarkdownRemark.edges.map(edge => {
        return _.castArray(_.get(edge, 'node.frontmatter.category', []));
      }),
    ),
  );
  categories.forEach(category => {
    // Pagination
    graphql(`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { category: { in: ["${category}"] }, draft: { ne: true } } }
        ) {
          totalCount
        }
      }
    `).then((resultCategory) => {
      const numPages = Math.ceil(resultCategory.data.allMarkdownRemark.totalCount / postsPerPage);
      Array.from({ length: numPages }).forEach((item, index) => {
        createPage({
          path: index === 0 ? `/category/${_.kebabCase(category)}/` : `/category/${_.kebabCase(category)}/page/${index + 1}`,
          component: categoryTemplate,
          context: {
            category,
            tag: category,
            tagURL: _.kebabCase(categories),
            limit: postsPerPage,
            skip: index * postsPerPage,
            numPages,
            currentPage: index + 1,
          },
        })
      })
    });
  });

  // Create author pages
  const authorTemplate = path.resolve('./src/templates/author.tsx');
  result.data.allAuthorYaml.edges.forEach(edge => {
    // Pagination
    graphql(`
      query {
        authorYaml(id: { eq: "ludo" }) {
          id
        }
        allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                title,
                author {
                  id
                }
              }
            }
          }
        }
      }
    `).then((resultTag) => {
      const numPages = Math.ceil(resultTag.data.allMarkdownRemark.edges.length / postsPerPage);
      Array.from({ length: numPages }).forEach((item, index) => {
        createPage({
          path: index === 0 ? `/author/${_.kebabCase(edge.node.id)}/` : `/author/${_.kebabCase(edge.node.id)}/page/${index + 1}`,
          component: authorTemplate,
          context: {
            authorId: edge.node.id,
            limit: postsPerPage,
            skip: index * postsPerPage,
            numPages,
            currentPage: index + 1,
          },
        })
      })
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // adds sourcemaps for tsx in dev mode
  if (stage === `develop` || stage === `develop-html`) {
    actions.setWebpackConfig({
      devtool: 'eval-source-map',
    });
  }
};
