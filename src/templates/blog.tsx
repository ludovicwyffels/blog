import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import PostCard from '../components/PostCard';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import {
  inner,
  outer,
  PostFeed,
  PostFeedRaise,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteMain,
  SiteTitle,
} from '../styles/shared';
import { PageContext } from '../templates/post';

const HomePosts = css`
  .newer-posts, .older-posts {
    position: absolute;
    display: inline-block;
    padding: 0 15px;
    border: #ddd 1px dashed;
    text-decoration: none;
    transition: border .3s ease;
  }
  .newer-posts {
    left: 0;
  }
  .older-posts {
    right: 0;
  }
  .page-number {
    display: inline-block;
    padding: 2px 0;
    min-width: 100px;
  }

  .pagination {
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: 1rem auto;
    font-size: 1.3rem;
    color: #9eabb3;
    text-align: center;
  }
  .pagination a {
    color: #9eabb3;
    transition: all .2s ease;
  }

  @media (max-width: 500px) {
    .hide {
      display: none;
    }
  }


  @media (min-width: 795px) {
    .post-card:nth-of-type(6n + 1):not(.no-image) {
      flex: 1 1 100%;
      flex-direction: row;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      border-radius: 5px 0 0 5px;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content {
      flex: 0 1 357px;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) h2 {
      font-size: 2.6rem;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) p {
      font-size: 1.8rem;
      line-height: 1.55em;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content-link {
      padding: 30px 40px 0;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-meta {
      padding: 0 40px 30px;
    }
  }
`;

interface PageTemplateProps {
  data: {
    logo: {
      childImageSharp: {
        fixed: any;
      };
    };
    header: {
      childImageSharp: {
        fluid: any;
      };
    };
    allMarkdownRemark: {
      edges: {
        node: PageContext;
      }[];
    };
  },
  pageContext: {
    currentPage: number,
    isCreatedByStatefulCreatePages: boolean,
    limit: number,
    numPages: number,
    skip: number
  }
}

const PageTemplate: React.FunctionComponent<PageTemplateProps> = props => {
  // const { pageContext } = props;
  // const limit = pageContext.limit;
  // const skip = pageContext.skip;

  const { currentPage, numPages, limit, skip } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  const width = props.data.header.childImageSharp.fluid.sizes.split(', ')[1].split('px')[0];
  const height = String(Number(width) / props.data.header.childImageSharp.fluid.aspectRatio);
  return (
    <IndexLayout css={HomePosts}>
      <Helmet>
        <html lang={config.lang} />
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl} />
        <meta
          property="og:image"
          content={config.siteUrl + props.data.header.childImageSharp.fluid.src}
        />
        {config.facebook && <meta property="article:publisher" content={config.facebook} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.siteUrl} />
        <meta
          name="twitter:image"
          content={config.siteUrl + props.data.header.childImageSharp.fluid.src}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />
      </Helmet>
      <Wrapper>
        <header
          css={[outer, SiteHeader]}
          style={{
            backgroundImage: `url('${props.data.header.childImageSharp.fluid.src}')`,
          }}
        >
          <div css={inner}>
            <SiteHeaderContent>
              <SiteTitle>
                {
                  config.title
                }
              </SiteTitle>
              <SiteDescription>{config.description}</SiteDescription>
            </SiteHeaderContent>
            <SiteNav isHome={true} />
          </div>
        </header>
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <div css={[PostFeed, PostFeedRaise]}>
              {props.data.allMarkdownRemark.edges.map(post => {
                // filter out drafts in production
                return (
                  (post.node.frontmatter.draft !== true ||
                    process.env.NODE_ENV !== 'production') && (
                    <PostCard key={post.node.fields.slug} post={post.node} />
                  )
                );
              })}
            </div>
            <nav class="pagination" role="navigation">
              {!isFirst && (
                <Link to={prevPage} rel="prev" class="newer-posts">
                  ← <span class="hide">Previous Page</span>
                </Link>
              )}
              <span class="page-number">
                <span class="hide">
                  Page {currentPage}/{numPages}
                </span>
              </span>
              {!isLast && (
                <Link to={nextPage} rel="next" class="older-posts">
                  <span class="hide">Next Page</span> →
                </Link>
              )}
            </nav>
          </div>
        </main>
        {props.children}
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($limit: Int, $skip: Int) {
    logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    header: file(relativePath: { eq: "img/blog-cover.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { draft: { ne: true } } },
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            subtitle
            date
            tags
            draft
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
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
          excerpt
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;
