import getActionTypes from "./action-types";
import {ThunkDispatch} from "redux-thunk";
import { AnyAction } from "redux";
import AppAPI from "../../api/app-api";
import { INC_VOTE, HIDE_STORY } from "../../utility/helper";

const tempActionTypes = getActionTypes();

const getNewsDetailsData = (pageNumber:number) => async (dispatch:ThunkDispatch<{},{},AnyAction>,getState:any) => {
    return AppAPI.getNewsDetailsData(pageNumber).then(response =>{
        if(response){
            dispatch({
                type:tempActionTypes.GET_NEWS_DETAILS,
                payload:response
            }) 
        }      
    }).catch((err:any)=>{
        console.log(err);
    })
}
const setUpVoteCount = (pageNumber:number,storyId:number,newData:any) => async (dispatch:ThunkDispatch<{},{},AnyAction>,getState:any) => {
    return AppAPI.updateNewsDetailsData(pageNumber,storyId,INC_VOTE,newData).then(response =>{
        if(response){
            dispatch({
                type:tempActionTypes.GET_NEWS_DETAILS,
                payload:response
            }) 
        }      
    }).catch((err:any)=>{
        console.log(err);
    })
}
const hideStoryItem = (pageNumber:number,storyId:number,newData:any) => async (dispatch:ThunkDispatch<{},{},AnyAction>,getState:any) => {
    return AppAPI.updateNewsDetailsData(pageNumber,storyId,HIDE_STORY,newData).then(response =>{
        if(response){
            dispatch({
                type:tempActionTypes.GET_NEWS_DETAILS,
                payload:response
            }) 
        }      
    }).catch((err:any)=>{
        console.log(err);
    })
}
const setCurrentAppStatus = (data:string) =>{
    return {
        type:tempActionTypes.SET_CURRENT_APP_STATUS,
        payload:data
    }
}
const setCurrentPageNumber = (pageNumber:number) =>{
    return {
        type:tempActionTypes.SET_CURRENT_PAGE_NUMBER,
        payload:pageNumber
    }
}

export { getNewsDetailsData,setUpVoteCount,setCurrentAppStatus,setCurrentPageNumber,hideStoryItem};
