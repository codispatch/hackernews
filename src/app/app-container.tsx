import React from "react";
import { connect } from "react-redux";
import App from "./app";
import {setCurrentAppStatus,setCurrentPageNumber,getNewsDetailsData} from "./_duck/actions";

export interface AppContainerProps { }
export interface AppContainerState { }

class AppContainer extends React.Component<AppContainerProps, AppContainerState> {

    render() {
        return (<App {...this.props}/>)
    }
}
const mapStateToProps = (state:any,ownProps:any) =>{
    const AppData = state.app;

    return {
        currentAppStatus:AppData.currentAppStatus,
        currentPageNumber:AppData.currentPageNumber,
        newsDetailsData:AppData.newsDetailsData
    }
}
export default connect(
    mapStateToProps,
    {
        setCurrentAppStatus,
        setCurrentPageNumber,
        getNewsDetailsData
    }
)(AppContainer);