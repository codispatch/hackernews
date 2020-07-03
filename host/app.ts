import express from 'express';
import  * as config from './config/config';
import {appRouter} from './api/api-routes';

class App {
    public express:any;
    public apiBasehref:string;

    constructor(apiBaseRef:string){
        this.apiBasehref = apiBaseRef;
        this.express = express();

        this.express.use((req:any,res:any,next:any)=>{
            console.log('Processing req - '+req.url);
            next();
        });

        this.mountRoutes(this.express,this.apiBasehref);
    }

    private mountRoutes(app:any,apiBasehref:string){
        app.use(apiBasehref+'/v1/',appRouter);
    }

}
export default new App(config.API_BASEREF).express;