import React from "react";
import { connect } from "react-redux";
import App from "./app";
import {getNewsDetailsData} from "./_duck/actions";

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
        newsDetailsData:AppData.newsDetailsData
    }
}
export default connect(
    mapStateToProps,
    {
        getNewsDetailsData
    }
)(AppContainer);