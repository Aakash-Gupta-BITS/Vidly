import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ pageSize, itemsCount, currentPage, onPageClick }) => {
  
  const pageNumbers = [...Array(Math.ceil(itemsCount / pageSize)).keys()].map(
    (i) => i + 1
  );

  if (pageNumbers.length === 1) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <p className="page-link" onClick={() => onPageClick(page)}>
              {page}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
};
export default Pagination;
