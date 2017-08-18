const functions = require('firebase-functions');
const createUser = require('./create_user');
const requestOtp = require('./request-one-time-password');
const admin = require('firebase-admin');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const serviceAccount = require("./service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-e888e.firebaseio.com"
});


exports.createUser = functions.https.onRequest(createUser)
exports.requestOtp = functions.https.onRequest(requestOtp)