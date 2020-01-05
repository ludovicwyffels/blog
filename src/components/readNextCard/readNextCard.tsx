import { Link, StaticQuery, graphql } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
import * as _ from 'lodash';

import InfinityIcon from '../icons/infinity';
import config from '../../website-config';

import style from './readNextCard.module.scss'

export interface ReadNextCardStylesProps {
  coverImage: string;
}

const ReadNextCardStyles = styled.article<ReadNextCardStylesProps>`
  background-image: url(${props => props.coverImage});
`;

export interface ReadNextProps {
  tags: string[];
  relatedPosts: {
    totalCount: number;
    edges: {
      node: {
        timeToRead: number;
        frontmatter: {
          title: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
}

export interface ReadNextQuery {
  header: {
    childImageSharp: {
      fluid: any;
    };
  };
}

const ReadNextCard: React.FC<ReadNextProps> = props => {
  return (
    <StaticQuery
      query={graphql`
        query ReadNextQuery {
          header: file(relativePath: { eq: "img/blog-cover.jpg" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      // tslint:disable-next-line:react-this-binding-issue
      render={({ header }: ReadNextQuery) => (
        <ReadNextCardStyles
          coverImage={header.childImageSharp.fluid.src}
          className={style.container}
        >
          <header className={style.ReadNextCardHeader}>
            <small className={style.ReadNextCardHeaderSitetitle}>&mdash; {config.title} &mdash;</small>
            <h3 className={style.ReadNextCardHeaderTitle}>
              <Link to={`/tags/${_.kebabCase(props.tags[0])}/`}>{props.tags[0]}</Link>
            </h3>
          </header>
          <div className={style.ReadNextDivider}>
            <InfinityIcon />
          </div>
          <div className={style.ReadNextCardContent}>
            <ul>
              {props.relatedPosts.edges.map(n => {
                return (
                  <li key={n.node.frontmatter.title}>
                    <Link to={n.node.fields.slug}>{n.node.frontmatter.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <footer className={style.ReadNextCardFooter}>
            <Link to={`/tags/${_.kebabCase(props.tags[0])}/`}>
              {props.relatedPosts.totalCount > 1 &&
                `See all ${props.relatedPosts.totalCount} posts`}
              {props.relatedPosts.totalCount === 1 && '1 post'}
              {props.relatedPosts.totalCount === 0 && 'No posts'} →
            </Link>
          </footer>
        </ReadNextCardStyles>
      )}
    />
  );
};

export default ReadNextCard;
