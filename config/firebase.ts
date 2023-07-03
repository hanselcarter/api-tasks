import * as admin from 'firebase-admin';

//Put your own keys
admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: ''.replace(/\\n/g, '\n'),
    projectId: '',
    clientEmail: '',
  }),
  databaseURL: '',
});

const db = admin.firestore();
export { admin, db };
