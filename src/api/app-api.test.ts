import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import AppAPI from './app-api';
import  { axiosInstance } from './base-api';

describe('AppAPI Component', () => {

    it('Should test for getNewsDetailsData function - success scenario', () => {
        axiosInstance.get = jest.fn().mockReturnValueOnce(Promise.resolve({data:{hits:[]}}));
       AppAPI.getNewsDetailsData(2).then(result =>{
           expect(result).toEqual([]);
       })
    });

    it('Should test for getNewsDetailsData function - failure scenario', () => {
        axiosInstance.get = jest.fn().mockReturnValueOnce(Promise.reject(new Error("Internal Server Error")));
        AppAPI.handleError = jest.fn().mockImplementationOnce(()=>{ throw new Error("Internal Server Error")});

       AppAPI.getNewsDetailsData(2).then().catch(error =>{
           expect(error).toBeDefined();
           expect(AppAPI.handleError).toHaveBeenCalled();
       })
    });

    it('Should test for updateNewsDetailsData function - success scenario', () => {
        axiosInstance.get = jest.fn().mockReturnValueOnce(Promise.resolve({data:{hits:[]}}));
       AppAPI.updateNewsDetailsData(2,1122211,"INC_VOTE",121).then(result =>{
           expect(result).toEqual([]);
       })
    });

    it('Should test for updateNewsDetailsData function - failure scenario', () => {
        axiosInstance.get = jest.fn().mockReturnValueOnce(Promise.reject(new Error("Internal Server Error")));
        AppAPI.handleError = jest.fn().mockImplementationOnce(()=>{ throw new Error("Internal Server Error")});

       AppAPI.updateNewsDetailsData(2,1122211,"INC_VOTE",121).then().catch(error =>{
           expect(error).toBeDefined();
           expect(AppAPI.handleError).toHaveBeenCalled();
       })
    });


});