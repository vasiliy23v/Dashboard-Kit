import React from "react";
import "./Pagination.scss"

interface PaginationProps {
  pageSize: number;
  onPageChange: (action: number) => void;
  currentPage: number;
  usersLength: number;
}
const _ = require("lodash");

const Pagination = ({ pageSize, onPageChange, currentPage, usersLength }: PaginationProps) => {
  const pageCount = Math.ceil(usersLength / pageSize);
  const pages: Array<number> = _.range(1, pageCount + 1);
  if (pageCount === 1) return null;
  return (
    <div className="paginate">
      <ul className="paginate-ul">
        <li>Rows per page:</li>
        <li>{pageSize}</li>
        {pages.map((page) => (
          <li
            key={page}
            className={
              "paginate-ul-li " + (page === currentPage ? "active" : "")
            }
          >
            <a href="#" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}

        <li>
          {currentPage * pageSize -
            pageSize +
            1 +
            " - " +
            (currentPage * pageSize > usersLength
              ? usersLength
              : currentPage * pageSize) +
            " of " +
            usersLength}
        </li>
        <li>
          <button
            onClick={() =>
              onPageChange(currentPage !== 1 ? currentPage - 1 : currentPage)
            }
          >
            {"<"}
          </button>
          <button
            onClick={() =>
              onPageChange(
                currentPage !== pages.length ? currentPage + 1 : currentPage
              )
            }
          >
            {">"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
