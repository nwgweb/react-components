import React from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination: React.FC<ReactPaginateProps> = ({
  pageCount,
  onPageChange,
  pageRangeDisplayed,
  marginPagesDisplayed,
  forcePage,
}) => (
  <ReactPaginate
    previousLabel={'Prev'}
    nextClassName={styles.next}
    previousClassName={styles.prev}
    pageClassName={styles.li}
    pageLinkClassName={styles.link}
    pageCount={pageCount}
    pageRangeDisplayed={pageRangeDisplayed}
    marginPagesDisplayed={marginPagesDisplayed}
    onPageChange={onPageChange}
    breakClassName={styles.break}
    breakLinkClassName={styles.link}
    containerClassName={styles.container}
    nextLinkClassName={styles.link}
    previousLinkClassName={styles.link}
    activeClassName={styles.selected}
    forcePage={forcePage}
    disabledClassName={styles.disabled}
  ></ReactPaginate>
);

export default Pagination;
