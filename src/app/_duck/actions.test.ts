import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import appApi from '../../api/app-api';
import * as actions from "../_duck/actions";
configure({ adapter: new Adapter() });

describe('actions Component', () => {

    it('Should test for getNewsDetailsData function - success scenario', () => {
        const dispatch = jest.fn();
        const getState = jest.fn().mockImplementationOnce(()=>{
            return {
                data:[] // mock response data
            }
        });
        appApi.getNewsDetailsData = jest.fn().mockReturnValueOnce(Promise.resolve({
            data:[] // mock response data
        }));
        actions.getNewsDetailsData(2)(dispatch,getState);
        expect(appApi.getNewsDetailsData).toBeCalled();
    });

    it('Should test for getNewsDetailsData function - failure scenario', () => {
        const dispatch = jest.fn();
        const getState = jest.fn().mockImplementationOnce(()=>{
            return {
                data:[] // mock response data
            }
        });
        appApi.getNewsDetailsData = jest.fn().mockReturnValueOnce(Promise.reject({
            data:[] // mock response data
        }));
        actions.getNewsDetailsData(1)(dispatch,getState);
        expect(appApi.getNewsDetailsData).toBeCalled();
    });

    it('Should test for setUpVoteCount function - success scenario', () => {
        const dispatch = jest.fn();
        const getState = jest.fn().mockImplementationOnce(()=>{
            return {
                data:[] 
            }
        });
        appApi.updateNewsDetailsData = jest.fn().mockReturnValueOnce(Promise.resolve({
            data:[] 
        }));
        actions.setUpVoteCount(2,1211,122)(dispatch,getState);
        expect(appApi.updateNewsDetailsData).toBeCalled();
    });

    it('Should test for setUpVoteCount function - failure scenario', () => {
        const dispatch = jest.fn();
        const getState = jest.fn().mockImplementationOnce(()=>{
            return {
                data:[] 
            }
        });
        appApi.updateNewsDetailsData = jest.fn().mockReturnValueOnce(Promise.reject({
            data:[] 
        }));
        actions.setUpVoteCount(2,1211,122)(dispatch,getState);
        expect(appApi.updateNewsDetailsData).toBeCalled();
    });

    it('Should test for hideStoryItem function - success scenario', () => {
        const dispatch = jest.fn();
        const getState = jest.fn().mockImplementationOnce(()=>{
            return {
                data:[] 
            }
        });
        appApi.updateNewsDetailsData = jest.fn().mockReturnValueOnce(Promise.resolve({
            data:[] 
        }));
        actions.hideStoryItem(2,1213,true)(dispatch,getState);
        expect(appApi.updateNewsDetailsData).toBeCalled();
    });

    it('Should test for hideStoryItem function - failure scenario', () => {
        const dispatch = jest.fn();
        const getState = jest.fn().mockImplementationOnce(()=>{
            return {
                data:[] 
            }
        });
        appApi.updateNewsDetailsData = jest.fn().mockReturnValueOnce(Promise.reject({
            data:[] 
        }));
        actions.hideStoryItem(2,1213,true)(dispatch,getState);
        expect(appApi.updateNewsDetailsData).toBeCalled();
    });


   


});