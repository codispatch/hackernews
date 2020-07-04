import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import BaseAPI, { axiosInstance } from './base-api';

describe('BaseApi Component', () => {

    it('Should render without errors when data is provided', () => {
        new BaseAPI().handleError = jest.fn().mockReturnValueOnce(Promise.reject(new Error("Base Api exception")));
        expect(new BaseAPI().handleError(new Error("Base Api exception thrown"), "")).toBeUndefined() // returns empty - prints the error
    });

    it('Should test for axiosInstance function', () => {
        expect(axiosInstance).toBeDefined()
    });

    it('Should test for axiosInstance config function', () => {
        jest.mock('axios', () => {
            return {
                interceptors: {
                    request: { use: jest.fn(), eject: jest.fn() },
                    response: { use: jest.fn(), eject: jest.fn() },
                },
            };
        });
        expect(axiosInstance.interceptors.request.use).toHaveLength(2);
    });

});