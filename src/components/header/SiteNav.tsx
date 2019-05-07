// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { SocialLink } from '../../styles/shared';
import config from '../../website-config';
import Twitter from '../icons/twitter';
import Github from '../icons/github';

const HomeNavRaise = css`
  @media (min-width: 900px) {
    position: relative;
    top: -70px;
  }
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  height: 40px;
  font-size: 1.25rem;
`;

const SiteNavLeft = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  padding-bottom: 80px;
  letter-spacing: 0.5px;
  white-space: nowrap;

  -ms-overflow-scrolling: touch;

  @media (max-width: 700px) {
    margin-right: 0;
    padding-left: 4vw;
  }
`;

const NavStyles = css`
  display: flex;
  margin: 0 0 0 -12px;
  padding: 0;
  list-style: none;

  li {
    display: block;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  li a {
    display: block;
    margin: 0;
    padding: 10px 12px;
    color: #fff;
    opacity: 0.8;
  }

  li a:hover {
    text-decoration: none;
    opacity: 1;
  }
`;

const SiteNavRight = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 40px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  a:last-of-type {
    padding-right: 20px;
  }
`;

interface SiteNavProps {
  isHome?: boolean;
}

interface SiteNaveState {
  isOpen: boolean;
}

class SiteNav extends React.Component<SiteNavProps, SiteNaveState> {

  constructor(props: SiteNavProps) {
    super(props);
    this.state = { isOpen: false };
  };

  render() {
    const { isHome = false } = this.props;
    return (
      [ <nav key="site-nav" css={[isHome && HomeNavRaise, SiteNavStyles]}>
        <SiteNavLeft>
          <ul css={NavStyles} role="menu">
            {
              !isHome && <li role="menuitem">
                <Link to="/">Home</Link>
              </li>
            }
            <li role="menuitem">
              <Link to="/tags/node-js/">Node.js</Link>
            </li>
            <li role="menuitem">
              <Link to="/tags/javascript/">JavaScript</Link>
            </li>
            <li role="menuitem">
              <Link to="/tags/typescript/">TypeScript</Link>
            </li>
            <li role="menuitem">
              <Link to="/tags/dev-ops/">DevOps</Link>
            </li>

            <li role="menuitem">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </SiteNavLeft>
        <SiteNavRight>
          <SocialLinks>
            <span css={css`font-size: 1.2em;font-weight: 500;`}> Follow me </span>
            {config.twitter && (
              <a
                css={SocialLink}
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
                css={SocialLink}
                href={config.github}
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            )}
          </SocialLinks>
        </SiteNavRight>
      </nav>]
    );
  }
}

export default SiteNav;
