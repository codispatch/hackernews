import getActionTypes from "./action-types";
import { combineReducers } from 'redux';


const tempActionTypes = getActionTypes();

export const getNewsDetailsDataReducer = (state: any = [], action: any) => {
    if (action.type === tempActionTypes.GET_NEWS_DETAILS) {
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
    newsDetailsData:getNewsDetailsDataReducer,
    test: testReducer
});

export type AppState = ReturnType<typeof appReducer>;
export default appReducer;