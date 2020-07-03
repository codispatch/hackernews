import { Router } from 'express';
import * as config from '../config/config';

import { appRouter } from '../routes/app-router';
import { appService } from '../services/app-service';

const apiRouterIntance = appRouter.getInstance();
const apiRoutes = apiRouterIntance.router;
apiRouterIntance._appService = new appService();

const apiRouter:Router = Router();

apiRouter.use('/app',apiRoutes);

export {appRouter}
