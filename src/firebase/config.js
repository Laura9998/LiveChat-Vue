import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCf0nvErzcFkXvKJOf2JH2Lr4iUYxRvgmY",
    authDomain: "vue-blog-system-cab4a.firebaseapp.com",
    projectId: "vue-blog-system-cab4a",
    storageBucket: "vue-blog-system-cab4a.appspot.com",
    messagingSenderId: "573766253942",
    appId: "1:573766253942:web:ec95f444f1be4363bfce57"
  };
  firebase.initializeApp(firebaseConfig);
  let db= firebase.firestore();
  let auth= firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export{db,auth,timestamp}
