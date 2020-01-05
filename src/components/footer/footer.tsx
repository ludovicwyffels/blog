import { Link } from 'gatsby';
import * as React from 'react';

import config from '../../website-config';

import style from './footer.module.scss';
// tslint:disable no-import-side-effect

import '../../styles/shared.module.scss'
// tslint:enable: no-import-side-effect

const Footer: React.FC = () => {
  return (
    <footer className={`outer, ${style.siteFooter}`}>
      <div className={`inner, ${style.content}`}>
        <section className="copyright">
          <Link to="/">{config.title}</Link> &copy; {new Date().getFullYear()}{' '}
          {config.footer && (
            <Link to="/">
              | {config.title} {config.footer}
            </Link>
          )}
        </section>
        <nav>
          <Link to="/">Latest Posts</Link>
          {config.facebook && (
            <a href={config.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          )}
          {config.twitter && (
            <a href={config.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          )}
          {config.github && (
            <a href={config.github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          )}
          {config.gitlab && (
            <a href={config.gitlab} target="_blank" rel="noopener noreferrer">
              GitLab
            </a>
          )}

          {/* <a href="https://ghost.org" target="_blank" rel="noopener noreferrer">
            Ghost
          </a> */}

          {/* <a href="/rss.xml">RSS</a> */}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
