import { Link } from 'gatsby';
import * as _ from 'lodash';
import * as React from 'react';

import { AuthorProfileImage } from '../../styles/shared';
import style from './authorCard.module.scss';

export interface AuthorCardProps {
  author: any;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  return (
    <section className={style.authorCardSection}>
      {/* TODO: default avatar */}
      {/* TODO: author page url */}
      <img css={AuthorProfileImage} src={author.avatar.children[0].fixed.src} alt={author.id} />
      <section className={style.authorCardContent}>
        <div className={style.authorCardName}>
          <Link to={`/author/${_.kebabCase(author.id)}/`}>{author.name}</Link>
        </div>
        {author.bio ? (
          <p>{author.bio}</p>
        ) : (
          <p>
            Read <Link to={`/author/${_.kebabCase(author.id)}/`}>more posts</Link> by this author.
          </p>
        )}
      </section>
    </section>
  );
};

export default AuthorCard;
