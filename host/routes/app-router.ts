import { Router,Request, Response, NextFunction } from "express";
import * as config from '../config/config';


export class  appRouter {
    public router:Router;
    private static instance: appRouter;
    public _appService:any;

    private constructor(){
        this.router = Router();
        this.init();
    }

    public get appService(){
        return this._appService;
    }
    public set appService(appServiceIntance:any){
        this._appService = appServiceIntance;
    }
    public static getInstance = () => {
        if(!appRouter.instance){
            appRouter.instance = new appRouter();
            appRouter.instance.init();
        }
        return appRouter.instance;
    }

    init(){
       this.router.get('/getNewsDetails',this.getNewsDetails);
    }

    getNewsDetails = async (req:Request,res:Response,next:NextFunction) => {
        let output_data = {};
        try {
            output_data = await this._appService.getNewsDetailsData();
        } catch(err){

        }
        return res.status(200).json(output_data);
    };
}
