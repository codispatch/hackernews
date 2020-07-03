import React from "react";
import "./pagination.scss";

export interface PaginationProps { currentPageNumber?:number }
export interface PaginationState { }

class Pagination extends React.Component<PaginationProps, PaginationState> {
  getPrevPageNumber(pageNum:any){
    if(pageNum && Number(pageNum) === 1){
      return Number(pageNum);
    }
    return Number(pageNum - 1);
  }
  getNextPageNumber(pageNum:any){
    if(pageNum && Number(pageNum)){
      return Number(pageNum + 1);
    }
    return 2;
  }
  render() {
    return (
      <div className="pagination-component">
        <div className="prev">Page:{Number(this.props.currentPageNumber)} | <a href={"/?page="+this.getPrevPageNumber(this.props.currentPageNumber)}>Previous</a></div>|<div className="next"><a href={"/?page="+this.getNextPageNumber(this.props.currentPageNumber)}>Next</a></div>
      </div>
    );
  }
}
export default Pagination;