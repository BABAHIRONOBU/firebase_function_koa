import { DefaultState } from 'koa';
import Router from 'koa-router';
import { FirebaseReqType } from '../helpers/type';
import { messageController } from '../controllers';

const messageRouter = new Router<DefaultState, FirebaseReqType>();
const { getMessagesCtrl, createMessageCtrl } = messageController;

messageRouter.get('/', getMessagesCtrl);
messageRouter.post('/', createMessageCtrl);

export default messageRouter;