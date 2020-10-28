import Koa from 'koa';
import cors from '@koa/cors';
import { logger } from './middlewares';
import apiRouter from './routes';

function createApp(env: 'dev' | 'prod') {
  console.log(`${env} mode`);

  const app = new Koa();

  app.use(cors());

  // logger
  app.use(logger.logReqInfo);
  app.use(logger.logResponseTime);
  app.use(logger.setState);

  app.use(apiRouter.routes());
  app.use(apiRouter.allowedMethods());

  return app;
}

export default createApp;