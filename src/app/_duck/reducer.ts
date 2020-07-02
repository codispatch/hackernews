import { combineReducers } from 'redux';

export const testReducer = (state={}, action: any) => {
   if(action.type === "COOL"){
       return action.payload;
   }
   return state;
}

const appReducer = combineReducers({
    test:testReducer
});

export type AppState = ReturnType<typeof appReducer>;
export default appReducer;