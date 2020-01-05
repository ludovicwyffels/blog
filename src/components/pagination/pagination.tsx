import { Link } from 'gatsby';
import * as React from 'react';

import style from './pagination.module.scss';

export interface PaginationProps {
  currentPage: number;
  numPages: number;
}

interface PaginationNavItem {
  link?: string;
  index: number|string;
  current?: number|boolean;
  separator?: boolean;
}

const Pagination: React.FunctionComponent<PaginationProps> = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  const createPaginationObjects = (length: number, page: number, increment = 2) => {
    return Array.from({ length }, (_, i) => ({
      link: `/${i + increment}`,
      index: i + increment,
      current: page === i + increment,
    }));
  };

  let navItems: PaginationNavItem[] = [{
    link: `/`,
    index: 1,
    current: currentPage
  }];
  if (numPages <= 5) {
    navItems = [
      ...navItems,
      ...Array.from({ length: numPages - 1 }, (_, i) => ({
        link: `/${i + 2}`,
        index: i + 2,
        current: currentPage === i + 2,
      })),
    ];
  } else if (currentPage <= 3) {
    // If the current one is closer to the start
    navItems = [
      ...navItems,
      ...createPaginationObjects(3, currentPage),
      {
        separator: true,
        index: 'finisher-separator',
      },
      {
        link: `/${numPages}/`,
        index: numPages,
        current: false,
      },
    ];
  } else if (currentPage > numPages -3) {
    // If the current one is closer to the last one
    navItems = [
      ...navItems,
      {
        separator: true,
        index: 'finisher-separator',
      },
      ...createPaginationObjects(4, currentPage, numPages - 3),
    ];
  } else {
    navItems = [
      ...navItems,
      {
        separator: true,
        index: 'starter-separator',
      },
      ...createPaginationObjects(3, currentPage, currentPage - 1),
      {
        separator: true,
        index: 'finisher-separator',
      },
      {
        link: `/${numPages}/`,
        index: numPages,
        current: false,
      },
    ];
  }


  return (
    <nav className={style.container} role="navigation">
      <div>
        {!isFirst && (
          <Link to={prevPage} rel="prev" className={style.previous}>
            {/* << symbol */}
            {String.fromCharCode(171)}
          </Link>
        )}

        <span className="pagination-list">
          {navItems.map(item => (
            <span key={item.index}>
              {item.separator ? (
                <a className={`${style.ellipsis}`}>&hellip;</a>
              ) : (
                <Link
                  to={item.link || ''}
                  className={item.index === currentPage ? style.active : ''}
                  aria-label={`Goto page ${item.index}`}
                >
                  {item.index}
                </Link>
              )}
            </span>
          ))}
        </span>

        {!isLast && (
          <Link to={nextPage} rel="next" className={style.next}>
            {/* >> symbol */}
            {String.fromCharCode(187)}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Pagination;
