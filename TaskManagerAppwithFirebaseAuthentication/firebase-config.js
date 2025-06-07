  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDuyPpZCWItb2iIWvqrpcncRxIVJUoNFCQ",
    authDomain: "taskmanager-98384.firebaseapp.com",
    projectId: "taskmanager-98384",
    storageBucket: "taskmanager-98384.firebasestorage.app",
    messagingSenderId: "236523739309",
    appId: "1:236523739309:web:ad5e71a2363216f9520e24",
    measurementId: "G-KQS80BZ6W2"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app)