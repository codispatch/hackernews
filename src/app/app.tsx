import React from "react";
import * as qs from "query-string";

import NewsDetails, { Column } from "../components/news-details/news-details";
import Pagination from "../components/pagination/pagination";
import TimelineChart from "../components/timeline-chart/timeline-chart";

import "./app.scss";

const parsedQueryString = qs.parse(window.location.search);

export interface AppProps {
  currentAppStatus?: string,
  setCurrentAppStatus?: any,
  currentPageNumber?: number,
  setCurrentPageNumber?: any,
  getNewsDetailsData?: any,
  newsDetailsData?: any
}
export interface AppState { }

class App extends React.Component<AppProps, AppState> {

  renderNewDetails(rowData: any) {

    const timeAgoText = (dateTime: any) => {

      let seconds = Math.floor((new Date().getTime() - new Date(dateTime).getTime()) / 1000);
      let interval = Math.floor(seconds / 31536000);

      if (interval > 1) { return interval + " years"; }
      interval = Math.floor(seconds / 2592000);

      if (interval > 1) { return interval + " months"; }
      interval = Math.floor(seconds / 86400);

      if (interval > 1) { return interval + " days"; }
      interval = Math.floor(seconds / 3600);

      if (interval > 1) { return interval + " hours"; }
      interval = Math.floor(seconds / 60);

      if (interval > 1) { return interval + " minutes"; }

      return Math.floor(seconds) + " seconds";
    }

    return (<div><span className="story-title"><a href={rowData["url"]} >{rowData["title"]}</a></span> <span className="story-link">({rowData["url"] ? rowData["url"].split("/")[2].replace("www.", "") : ""})</span> by <span className="story-author">{rowData["author"]}</span> <span className="story-time-ago">({timeAgoText(rowData["created_at"]) + " ago"})</span> [<span className="story-hide-option">hide</span>]</div>);
  }
  renderVoteCount(rowData: any) {
    return (<div>{rowData["points"]}</div>);
  }
  renderUpVote(rowData: any) {
    return (<div className="story-up-vote"></div>);
  }

  renderHeader() {
    return (<header className="app-header">
      <div className="app-header-image"><img src="../images/y18.gif" alt="Hacker News" width="20px" height="20px" /></div>
      <div className="app-header-text">Hacker News</div>
    </header>);
  }

  renderSection() {
    return (<section className="app-section">
      <NewsDetails data={this.props.newsDetailsData}  showColumnHeader={true} {...this.props}>
        <Column name="num_comments" align="center" width={10} displayName="Comments" ></Column>
        <Column name="age" align="center" displayName="VoteCount" width={10} customRenderer={this.renderVoteCount}></Column>
        <Column name="company" align="center" displayName="UpVote" width={10} customRenderer={this.renderUpVote}></Column>
        <Column name="title" displayName="News Details" width={70} customRenderer={this.renderNewDetails}></Column>
      </NewsDetails>
      <Pagination {...this.props}></Pagination>
      <TimelineChart></TimelineChart>
    </section>);
  }

  renderFooter() {
    return (<footer className="app-footer">Hacker News</footer>);
  }

  renderApp() {
    return (<div>
      {this.renderHeader()}
      {this.renderSection()}
      {this.renderFooter()}
    </div>);
  }

  initializeApp() {
    if (typeof (parsedQueryString["page"]) !== "undefined") {
      this.props.setCurrentPageNumber(Number(parsedQueryString["page"]));
    } else {
      this.props.setCurrentPageNumber(1);
    }
    // set the next app status - Here I am setting it as APP_RUNNING //
    this.props.setCurrentAppStatus("APP_RUNNING");
  }

  renderLoading() {
    return (<div>Loading ...</div>);
  }

  renderBasedOnAppStatus(currentAppStatus: any) {
    switch (currentAppStatus) {
      case "APP_INITIALIZE": this.initializeApp(); break;
      case "APP_RUNNING": return this.renderApp();

      default: return this.renderLoading();
    }
    return;
  }

  render() {
    return (<div className="app-component">{this.renderBasedOnAppStatus(this.props.currentAppStatus)}</div>);
  }
}
export default App;