import { ParameterizedContext, Next } from 'koa';

async function logReqInfo(ctx: ParameterizedContext, next: Next) {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
}

async function logResponseTime(ctx: ParameterizedContext, next: Next) {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
}

async function setState(ctx: ParameterizedContext, next: Next) {
  ctx.state.user = 'user';
  await next();
}

export default {
  logReqInfo,
  logResponseTime,
  setState,
};