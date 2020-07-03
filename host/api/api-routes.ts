import { Router } from 'express';
import { appRouter } from '../routes/app-router';
import { appService } from '../services/app-service';

const apiRouter:Router = Router();

const apiRouterIntance = appRouter.getInstance();
const apiRoutes = apiRouterIntance.routes;
apiRouterIntance._appService = new appService();

apiRouter.route('v1/health').get((req,res) =>{
    return res.status(200).json({
        message:'health point is working'
    })
});
apiRouter.use('/v1',apiRoutes);

export {apiRouter}
