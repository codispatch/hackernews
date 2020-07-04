import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import getActionTypes from "./action-types";
import {getNewsDetailsDataReducer,setCurrentAppStatusReducer,setCurrentPageNumberReducer,testReducer} from "./reducers";
const tempActionTypes = getActionTypes();

describe('Reducer Component', () => {

  it('should test for getNewsDetailsDataReducer', () => {
    expect(getNewsDetailsDataReducer([],{type:tempActionTypes.GET_NEWS_DETAILS,payload:[]})).toEqual([]);
  });

  it('should test for setCurrentAppStatusReducer', () => {
    expect(setCurrentAppStatusReducer("APP_INITIALIZE",{type:tempActionTypes.SET_CURRENT_APP_STATUS,payload:"APP_RUNNING"})).toEqual("APP_RUNNING");
  });

  it('should test for setCurrentPageNumberReducer', () => {
    expect(setCurrentPageNumberReducer(1,{type:tempActionTypes.SET_CURRENT_PAGE_NUMBER,payload:2})).toEqual(2);
  });

  it('should test for testReducer', () => {
    expect(testReducer({},{type:"COOL",payload:"TEST"})).toEqual("TEST");
  });

});