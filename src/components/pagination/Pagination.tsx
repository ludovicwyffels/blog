// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import './pagination.css';

interface PaginationProps {
  baseURL: String;
  pageContext: {
    currentPage: number;
    isCreatedByStatefulCreatePages: boolean;
    limit: number;
    numPages: number;
    skip: number;
  }
}

class SiteNav extends React.Component<PaginationProps> {

  constructor(props: PaginationProps) {
    super(props);
  };

  render() {
    const { baseURL = '/' } = this.props;
    const { currentPage, numPages, limit, skip } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? `${baseURL}` : `${baseURL}page/${currentPage - 1}`
    const nextPage = `${baseURL}page/${currentPage + 1}`

    return (
      [ <nav className="pagination" role="navigation">
          {!isFirst && (
            <Link to={prevPage} rel="prev" className="newer-posts">
              ← <span className="hide">Previous Page</span>
            </Link>
          )}
          <span className="page-number">
            <span className="hide">
              Page {currentPage}/{numPages}
            </span>
          </span>
          {!isLast && (
            <Link to={nextPage} rel="next" className="older-posts">
              <span className="hide">Next Page</span> →
            </Link>
          )}
        </nav>]
    );
  }
}

export default SiteNav;



            