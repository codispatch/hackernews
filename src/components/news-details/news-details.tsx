import React from "react";
import "./news-details.scss";

export interface NewsDetailsProps {
  data?: any,
  showColumnHeader?:boolean,
  children: any,
}
export interface NewsDetailsState { }

class NewsDetails extends React.Component<NewsDetailsProps, NewsDetailsState> {
  static defaultProps: NewsDetailsProps;
  getTextAlignment(align:any){
    let textAlign = "left";
    switch(align){
      case "center":textAlign = align; break;
      case "left": textAlign = align; break;
      case "right": textAlign = align; break;
    }
    return "text-"+textAlign;
  }
  renderTableHeader() {
    if (this.props.children && this.props.children.length && this.props.children.length > 0 && this.props.showColumnHeader === true) {
      return (<thead className="thead"><tr>
        {this.props.children.map((column: any, index: number) => {
          return (<th key={index} className={this.getTextAlignment(column.props.align)}>{column.props.displayName}</th>)
        })}
      </tr></thead>);
    }
    return (<thead className="thead"></thead>);
  }
  renderTableBody() {
    if (this.props.data && this.props.data.length && this.props.data.length > 0 && this.props.children && this.props.children.length && this.props.children.length > 0) {
      return (<tbody className="tbody">
        {this.props.data.map((row: any, i: number) => {
          if (row) {
            return (<tr key={i}>
              {this.props.children.map((col: any, j: number) => {
                return (<td key={j} className={"td "+this.getTextAlignment(col.props.align)} >{col.props.customRenderer?col.props.customRenderer(row):row[col.props.name]}</td>)
              })}
            </tr>);
          } else {
            return (<tr key={i} ></tr>);
          }
        })}
      </tbody>);
    }
    return (<tbody className="tbody"></tbody>);
  }
  renderTable() {
    return (<table className="table">
      {this.renderTableHeader()}
      {this.renderTableBody()}
    </table>);
  }
  render() {
    return (
      <div className="news-details-component">
        {this.renderTable()}
      </div>
    );
  }
}
NewsDetails.defaultProps = {
  data: [],
  children: [],
}
export interface ColumnProps {
  name: string,
  displayName?: string,
  align?:string,
  customRenderer?:(rowData:any)=>JSX.Element
}
export interface ColumnState {

}
export class Column extends React.Component<ColumnProps, ColumnState>{
  render() {
    return (<div>{this.props.children}</div>);
  }
}
export default NewsDetails;
