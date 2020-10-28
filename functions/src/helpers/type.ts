import { IncomingMessage } from 'http';

export type FirebaseReqType = {
  req: IncomingMessage & { body: any }; /* eslint-disable-line */
}