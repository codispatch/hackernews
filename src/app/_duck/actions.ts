import getActionTypes from "./action-types";
import {ThunkDispatch} from "redux-thunk";
import { AnyAction } from "redux";
import AppAPI from "../../api/app-api";

const tempActionTypes = getActionTypes();

const getNewsDetailsData = () => async (dispatch:ThunkDispatch<{},{},AnyAction>,getState:any) => {
    return AppAPI.getNewsDetailsData().then(response =>{
        //console.log(response.data[0].hits)
        if(response && response.data[0]){
            dispatch({
                type:tempActionTypes.GET_NEWS_DETAILS,
                payload:response.data[0].hits
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
export { getNewsDetailsData,setUpVoteCount};
