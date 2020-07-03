import getActionTypes from "./action-types";
import { combineReducers } from 'redux';


const tempActionTypes = getActionTypes();

export const getNewsDetailsDataReducer = (state: any = [], action: any) => {
    if (action.type === tempActionTypes.GET_NEWS_DETAILS) {
        return action.payload;
    }
    return state;
}
export const setCurrentAppStatusReducer = (state: any = "APP_INITIALIZE", action: any) => {
    if (action.type === tempActionTypes.SET_CURRENT_APP_STATUS) {
        return action.payload;
    }
    return state;
}
export const setCurrentPageNumberReducer = (state: any = 1, action: any) => {
    if (action.type === tempActionTypes.SET_CURRENT_PAGE_NUMBER) {
        return action.payload;
    }
    return state;
}
export const testReducer = (state = {}, action: any) => {
    if (action.type === "COOL") {
        return action.payload;
    }
    return state;
}

const appReducer = combineReducers({
    currentAppStatus:setCurrentAppStatusReducer,
    currentPageNumber:setCurrentPageNumberReducer,
    newsDetailsData:getNewsDetailsDataReducer,
    test: testReducer
});

export type AppState = ReturnType<typeof appReducer>;
export default appReducer;