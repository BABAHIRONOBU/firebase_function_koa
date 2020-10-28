import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

export default class Firebase {
  public static instance?: Firebase;
  public admin = admin;
  public functions = functions;
  public firestore: admin.firestore.Firestore;
  public storage: admin.storage.Storage;

  private constructor() {
    this.admin.initializeApp(this.functions.config().firebase);
    this.firestore = this.admin.firestore();
    this.storage = this.admin.storage();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new Firebase();
    }

    return this.instance;
  }
}