import { graphql, Link } from 'gatsby';
import React from 'react';

import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import Pagination from '../components/pagination/Pagination';
import PostCard from '../components/PostCard';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
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
import { PageContext } from './post';
import Helmet from 'react-helmet';
import config from '../website-config';

interface TagTemplateProps {
  pathContext: {
    slug: string;
  };
  pageContext: {
    tag: string;
    tagURL: String;
    currentPage: number;
    isCreatedByStatefulCreatePages: boolean;
    limit: number;
    numPages: number;
    skip: number;
  };
  data: {
    allTagYaml: {
      edges: {
        node: {
          id: string;
          description: string;
          image?: {
            childImageSharp: {
              fluid: any;
            };
          };
        };
      }[];
    };
    allMarkdownRemark: {
      totalCount: number;
      edges: {
        node: PageContext;
      }[];
    };
  };
}

const Tags: React.FunctionComponent<TagTemplateProps> = props => {
  const { tagURL } = props.pageContext
  const tag = props.pageContext.tag;
  const { edges, totalCount } = props.data.allMarkdownRemark;
  const tagData = props.data.allTagYaml.edges.find(
    n => n.node.id.toLowerCase() === tag.toLowerCase(),
  );

  return (
    <IndexLayout>
      <Helmet>
        <html lang={config.lang} />
        <title>
          {tag} - {config.siteTitle}
        </title>
        <meta
          name="description"
          content={tagData && tagData.node ? tagData.node.description : ''}
        />
        <meta property="og:site_name" content={config.siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${tag} - ${config.siteTitle}`} />
        <meta property="og:url" content={config.siteUrl + props.pathContext.slug} />
        {config.facebook && <meta property="article:publisher" content={config.facebook} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${tag} - ${config.siteTitle}`} />
        <meta name="twitter:url" content={config.siteUrl + props.pathContext.slug} />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
      </Helmet>
      <Wrapper>
        <header
          className={`${tagData && tagData.node.image ? '' : 'no-cover'}`}
          css={[outer, SiteHeader]}
          style={{
            backgroundImage:
              tagData && tagData.node.image
                ? `url('${tagData.node.image.childImageSharp.fluid.src}')`
                : '',
          }}
        >
          <div css={inner}>
            <SiteNav isHome={false} />
            <SiteHeaderContent>
              <SiteTitle>{tag}</SiteTitle>
              <SiteDescription>
                {tagData && tagData.node.description ? (
                  tagData.node.description
                ) : (
                  <>
                    A collection of {totalCount > 1 && `${totalCount} posts`}
                    {totalCount === 1 && `1 post`}
                    {totalCount === 0 && `No posts`}
                  </>
                )}
              </SiteDescription>
            </SiteHeaderContent>
          </div>
        </header>
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <div css={[PostFeed, PostFeedRaise]}>
              {edges.map(({ node }) => (
                <PostCard key={node.fields.slug} post={node} />
              ))}
            </div>
            <Pagination pageContext={props.pageContext} baseURL={`/tags/${tagURL}/`} />
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String, $limit: Int, $skip: Int) {
    allTagYaml {
      edges {
        node {
          id
          description
          image {
            childImageSharp {
              fluid(maxWidth: 3720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
      limit: $limit,
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            subtitle
            tags
            date
            image {
              childImageSharp {
                fluid(maxWidth: 1240) {
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
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;
