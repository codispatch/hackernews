import axios from 'axios';
import * as config from '../config/config';

export class appService {
    
    getNewsDetailsData = async(pageNumber:Number)=>{
        let response:any;
        let api_url = config.API_BASEREF+config.API_RELATIVE_PATH;
        if(typeof (pageNumber) !== "undefined"){ api_url=api_url+`?page=${Number(pageNumber)}` } else { api_url= api_url+'?page=1'; }
        
        try{
            response = await axios.get(api_url,{ headers:{ "Accept": "application/json", "Content-Type": "application/json" } });
            JSON.stringify(response);
        } catch(error){
        }

        return response;
    }

}