import { graphql, Link } from 'gatsby';
import * as React from 'react';

import SiteNavLogo from '../components/header/siteNavLogo/siteNavLogo';
import PostCard from '../components/postCard/postCard';
import Wrapper from '../components/wrapper/wrapper';
import IndexLayout from '../layouts';
import { inner, outer, PostFeed, SiteHeader } from '../styles/shared';
import { PageContext } from '../templates/post';

import style from './404.module.scss';

interface NotFoundTemplateProps {
  data: {
    allMarkdownRemark: {
      totalCount: number;
      edges: {
        node: PageContext;
      }[];
    };
  };
}

const NotFoundPage: React.FC<NotFoundTemplateProps> = props => {
  const { edges } = props.data.allMarkdownRemark;

  return (
    <IndexLayout>
      <Wrapper>
        <header css={[SiteHeader, outer]}>
          <div className="inner">
            <nav className={style.siteNavCenter}>
              <SiteNavLogo />
            </nav>
          </div>
        </header>
        <main id="site-main" className={style.errorTemplate} css={outer}>
          <div css={inner}>
            <section style={{ textAlign: 'center' }}>
              <h1 className={style.errorCode}>404</h1>
              <p className={style.errorDescription}>Page not found</p>
              <Link className={style.errorLink} to="">
                Go to the front page →
              </Link>
            </section>
          </div>
        </main>
        <aside css={outer}>
          <div css={inner}>
            <div css={PostFeed}>
              {edges.map(({ node }) => (
                <PostCard key={node.fields.slug} post={node} />
              ))}
            </div>
          </div>
        </aside>
      </Wrapper>
    </IndexLayout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date
            tags
            category
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              name
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
