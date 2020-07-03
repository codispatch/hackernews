import getActionTypes from "./action-types";
import {ThunkDispatch} from "redux-thunk";
import { AnyAction } from "redux";
import AppAPI from "../../api/app-api";

const tempActionTypes = getActionTypes();

const getNewsDetailsData = (pageNumber:number) => async (dispatch:ThunkDispatch<{},{},AnyAction>,getState:any) => {
    return AppAPI.getNewsDetailsData(pageNumber).then(response =>{
        if(response && response.data){
            dispatch({
                type:tempActionTypes.GET_NEWS_DETAILS,
                payload:response.data.data.hits
            }) 
        }      
    }).catch((err:any)=>{
        
    })
}
const setUpVoteCount = (data:any) =>{
    return {
        type:tempActionTypes.GET_NEWS_DETAILS,
        payload:data
    }
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
export { getNewsDetailsData,setUpVoteCount,setCurrentAppStatus,setCurrentPageNumber};
