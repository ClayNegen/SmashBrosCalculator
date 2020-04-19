const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDoVFswGMBVyamFcMAEpCo59GPcf3Etwdo",
  authDomain: "ssbfc-c9e6a.firebaseapp.com",
  databaseURL: "https://ssbfc-c9e6a.firebaseio.com",
  projectId: "ssbfc-c9e6a",
  storageBucket: "ssbfc-c9e6a.appspot.com",
  messagingSenderId: "552697867267",
  appId: "1:552697867267:web:c08d8b3f7d2ae00b25f236",
};

// Initialize Firebase and Firestore
const app = firebase.initializeApp(firebaseConfig);
var db = app.firestore();

export default db;
