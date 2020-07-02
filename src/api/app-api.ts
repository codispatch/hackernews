import BaseAPI, { axiosInstance } from "./base-api";

export default class AppAPI extends BaseAPI {

    public getData = async() => {
        let response:any = null;
        try {
            response = await axiosInstance.get('/relativePath',{})
        }catch(error){
            this.handleError(error,"")
        }
        return response;
    }
}