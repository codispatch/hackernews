import axios from "axios";
import { API_BASE_PATH, API_TIMEOUT  } from './../config/config';

export const axiosInstance = axios.create({
    baseURL: API_BASE_PATH,
    timeout: API_TIMEOUT,
});
axiosInstance.interceptors.request.use(function (config) {
    config.headers = { ...config.headers, auth_token: '' };
    // you can also do other modification in config
    return config;
 }, function (error) {
    return Promise.reject(error);
});

export default class BaseAPI {
   
    handleError(error:Error,origin:string){
        console.log(origin+' '+error)
    }


}
