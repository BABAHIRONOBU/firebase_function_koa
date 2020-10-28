import { ParameterizedContext, DefaultState } from 'koa';
import { FirebaseReqType } from '../helpers/type';
import { messageService } from '../services';

const { getMessages, createMessage } = messageService;

async function getMessagesCtrl(ctx: ParameterizedContext<DefaultState, FirebaseReqType>) {
  const messages = await getMessages();

  ctx.body = messages;
}

async function createMessageCtrl(ctx: ParameterizedContext<DefaultState, FirebaseReqType>) {
  const { title, body } = ctx.req.body as { title: string, body: string };

  const createdMessage = await createMessage(title, body);

  ctx.body = createdMessage;
}

// async function updateMessageCtrl(ctx: RouterContext) {

// }

// async function deleteMessageCtrl(ctx: RouterContext) {

// }

export default {
  getMessagesCtrl,
  createMessageCtrl,
  // updateMessageCtrl,
  // deleteMessageCtrl,
};