import { DefaultState } from 'koa';
import Router from 'koa-router';
import { FirebaseReqType } from '../helpers/type';
import messageRouter from './message.route';

const apiRouter = new Router<DefaultState, FirebaseReqType>();

apiRouter.use('/messages', messageRouter.routes());

export default apiRouter;