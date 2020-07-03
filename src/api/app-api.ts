import BaseAPI, { axiosInstance } from "./base-api";
import { data } from "../app/app";

 class AppAPI extends BaseAPI {

    public getNewsDetailsData = async() => {
        let response:any = null;
        try {
            //response = await axiosInstance.get('/relativePath',{})
            response = {data:data,status:200};
        }catch(error){
            this.handleError(error,"")
        }
        return response;
    }
}
export default new AppAPI();