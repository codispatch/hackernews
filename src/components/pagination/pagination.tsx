import React from "react";
import "./pagination.scss";

export interface PaginationProps { }
export interface PaginationState { }

class Pagination extends React.Component<PaginationProps, PaginationState> {
  render() {
    return (
      <div className="pagination-component">
        <div className="prev"><a href="http://www.previous.com">Previous</a></div>|<div className="next"><a href="http://www.next.com">Next</a></div>
      </div>
    );
  }
}
export default Pagination;