import Firebase from './firebase';
import createApp from './app';

const firebase = Firebase.getInstance();

const app = createApp('dev');
const handler = app.callback();

export const api = firebase.functions.https.onRequest(handler);
