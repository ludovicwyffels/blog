import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as _ from 'lodash';
import * as React from 'react';
import { PageContext } from '../../templates/post';

import style from './postCard.module.scss'

export interface PostCardProps {
  post: PageContext;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const tags = [];
  for (let i = 0; i < post.frontmatter.tags.length && i < 2; i++) {
    tags.push(post.frontmatter.tags[i]);
  }

  return (
    <article className={`${style.container} post-card ${post.frontmatter.image ? '' : 'no-image'}`}>
      {post.frontmatter.image && (
        <Link className={`post-card-image-link ${style.PostCardImageLink}`} to={post.fields.slug}>
          <div className={`post-card-image ${style.PostCardImage}`}>
            {post.frontmatter.image &&
              post.frontmatter.image.childImageSharp &&
              post.frontmatter.image.childImageSharp.fluid && (
                <Img
                  alt={`${post.frontmatter.title} cover image`}
                  style={{ height: '100%' }}
                  fluid={post.frontmatter.image.childImageSharp.fluid}
                />
              )}
          </div>
        </Link>
      )}

      {/*className={`post-card-image ${style.PostCardImage}`}*/}

      <div className={`post-card-content ${style.PostCardContent}`}>
        <Link className={style.PostCardContentLink} to={post.fields.slug}>
          <header className={style.PostCardHeader}>
            {tags && (
                <span className={style.PostCardTags}>
                  {tags.map((tag, i) => {
                    return (<span key={i}>#{tag} </span>)
                  })}
                </span>
            )}
            <h2 className={style.PostCardTitle}>{post.frontmatter.title}</h2>
          </header>
          <section className={style.PostCardExcerpt}>
            <p>{post.excerpt}</p>
          </section>
        </Link>
        <footer className={style.PostCardMeta}>
          <ul className={style.AuthorList}>
            <li className={style.AuthorListItem}>
              <div className={style.AuthorNameTooltip}>
                {post.frontmatter.author.name}
              </div>
              <Link
                className={style.StaticAvatar}
                to={`/author/${_.kebabCase(post.frontmatter.author.id)}/`}
              >
                <img
                  className={style.AuthorProfileImage}
                  src={post.frontmatter.author.avatar.children[0].fixed.src}
                  alt={post.frontmatter.author.id}
                />
              </Link>
            </li>
          </ul>
          <span className={style.ReadingTime}>{post.timeToRead} min read</span>
        </footer>
      </div>
    </article>
  );
};

export default PostCard;
