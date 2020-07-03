import express from 'express';
import path from 'path';
import cors from 'cors';
import {json,urlencoded} from 'body-parser';
import compression from 'compression';
import  * as config from './config/config';
import {apiRouter} from './api/api-routes';

class App {
    public express:any;
    public clientApiBasehref:string;

    constructor(clientApiBasehref:string){
        this.clientApiBasehref = clientApiBasehref;
        this.express = express();
        this.express.use(cors());
        this.express.use(json());
        this.express.use(urlencoded({extended:true}));
        this.express.use(compression())
        
        
        this.express.use(express.static(path.join(__dirname, "../")));
        this.express.get("/", (req, res) => {
            res.sendFile(path.join(__dirname, "../index.html"));
        });
        
        this.express.use((req:any,res:any,next:any)=>{
            console.log('Processing req - '+req.url);
            next();
        });

        this.mountRoutes(this.express,this.clientApiBasehref);
    }

    private mountRoutes(app:any,clientApiBasehref:string){
        app.use(clientApiBasehref,apiRouter);
    }

}
export default new App(config.CLIENT_API_BASEREF).express;