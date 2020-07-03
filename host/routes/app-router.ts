import { Router,Request, Response, NextFunction } from "express";
export class  appRouter {
    routes:Router;
    private static instance: appRouter;
    public _appService:any;

    private constructor(){
        this.routes = Router();
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
       this.routes.get('/getNewsDetails',this.getNewsDetails);
    }

    getNewsDetails = async (req:Request,res:Response,next:NextFunction) => {
        let response:any;
        let pageNumber = req.query["pageNumber"];
        try {
            response = await this._appService.getNewsDetailsData(pageNumber);
        } catch(err){

        }
        
        return res.json({ data: response.data});
    };
}
