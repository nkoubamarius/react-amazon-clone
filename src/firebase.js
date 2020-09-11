import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjlrK3jQZHVogCSQB1ZDKWZROX1YPPrvY",
  authDomain: "newagent-1-b2692.firebaseapp.com",
  databaseURL: "https://newagent-1-b2692.firebaseio.com",
  projectId: "newagent-1-b2692",
  storageBucket: "newagent-1-b2692.appspot.com",
  messagingSenderId: "249730505253",
  appId: "1:249730505253:web:1e3f856c6438b6e1a33dcc"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db, auth};