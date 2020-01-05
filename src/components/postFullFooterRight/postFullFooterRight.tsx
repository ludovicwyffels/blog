import { Link } from 'gatsby';
import * as _ from 'lodash';
import * as React from 'react';

import style from './postFullFooterRight.module.scss';

export interface PostFullFooterRightProps {
  authorId: string;
}

const PostFullFooterRight: React.FC<PostFullFooterRightProps> = props => (
  <div className={style.container}>
    <Link className={style.authorCardButton} to={`/author/${_.kebabCase(props.authorId)}/`}>
      Read More
    </Link>
  </div>
);

export default PostFullFooterRight;
