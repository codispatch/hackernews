import BaseAPI, { axiosInstance } from "./base-api";
import util from "../utility/helper";
 class AppAPI extends BaseAPI {

    public getNewsDetailsData = async(pageNumber:number) => {
        let response:any = null;
        try {
            response = await axiosInstance.get(`/hackernews/api/v1/getNewsDetails?pageNumber=${pageNumber}`,{});
            response = util.getLocalStorageObject(response);
        }catch(error){
            this.handleError(error,"")
        }
        return response;
    }

    public updateNewsDetailsData = async(pageNumber:number,storyId:number,operation:string,newData:any) => {
        let response:any = null;
        try {
            util.setLocalStorageObject(storyId,operation,newData);    
            response = await axiosInstance.get(`/hackernews/api/v1/getNewsDetails?pageNumber=${pageNumber}`,{});
            response = util.getLocalStorageObject(response);
        }catch(error){
            this.handleError(error,"")
        }
        return response;
    }
}
export default new AppAPI();