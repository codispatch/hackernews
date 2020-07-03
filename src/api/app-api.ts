import BaseAPI, { axiosInstance } from "./base-api";

 class AppAPI extends BaseAPI {

    public getNewsDetailsData = async(pageNumber:number) => {
        let response:any = null;
        try {
            response = await axiosInstance.get(`/hackernews/api/v1/getNewsDetails?pageNumber=${pageNumber}`,{})
        }catch(error){
            this.handleError(error,"")
        }
        return response;
    }
}
export default new AppAPI();