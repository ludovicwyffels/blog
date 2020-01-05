// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';

import config from '../../../website-config';
import Facebook from '../../icons/facebook';
import Twitter from '../../icons/twitter';
import Github from '../../icons/github';
import SubscribeModal from '../../subscribe/subscribeOverlay';
import SiteNavLogo from '../siteNavLogo/siteNavLogo';

import style from './sitenav.module.scss';
import sharedStyle from '../../../styles/shared.module.scss'

interface SiteNavProps {
  isHome?: boolean;
}

class SiteNav extends React.Component<SiteNavProps> {
  subscribe = React.createRef<SubscribeModal>();

  openModal = () => {
    if (this.subscribe.current) {
      this.subscribe.current.open();
    }
  };

  render() {
    const { isHome = false } = this.props;
    return (
      <nav className={`${isHome && style.HomeNavRaise} ${style.container}`}>
        <div className={style.SiteNavLeft}>
          {!isHome && <SiteNavLogo />}
          <ul className={style.NavStyles} role="menu">
            {/* TODO: mark current nav item - add class nav-current */}
            <li role="menuitem">
              <Link to="/">Home</Link>
            </li>
            <li role="menuitem">
              <Link to="/tags/node-js/">Node.js</Link>
            </li>
            <li role="menuitem">
              <Link to="/tags/dev-ops/">DevOps</Link>
            </li>
            <li role="menuitem">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className={style.SiteNavRight}>
          <div className={style.SocialLinks}>
            {config.facebook && (
              <a
                className={sharedStyle.SocialLink}
                href={config.facebook}
                target="_blank"
                title="Facebook"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            )}
            {config.twitter && (
              <a
                className={sharedStyle.SocialLink}
                href={config.twitter}
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            )}
            {config.github && (
              <a
                className={sharedStyle.SocialLink}
                href={config.github}
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            )}
          </div>
          {config.showSubscribe && (
            <a className={style.SubscribeButton} onClick={this.openModal}>
              Subscribe
            </a>
          )}
          {config.showSubscribe && <SubscribeModal ref={this.subscribe} />}
        </div>
      </nav>
    );
  }
}

export default SiteNav;
