import React from "react";
import PropTypes from 'prop-types';

const Pagination = ({ pageSize, itemsCount, currentPage, onPageClick } ) => {

  const pageNumbers = [...Array(Math.ceil(itemsCount / pageSize)).keys()].map(
    (i) => i + 1
  );

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" href="#cap" onClick={() => onPageClick(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageSize = PropTypes.number.isRequired,
  itemsCount = PropTypes.number.isRequired,
  currentPage = PropTypes.number.isRequired,
  onPageClick = PropTypes.func.isRequired
};
export default Pagination;
