import * as React from 'react';
import style from './postFullFooter.module.scss'

const PostFullFooter: React.FC = props => (
  <footer className={style.container}>{props.children}</footer>
);

export default PostFullFooter;
