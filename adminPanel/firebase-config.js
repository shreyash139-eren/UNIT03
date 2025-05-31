
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

  

  
  const firebaseConfig = {
    apiKey: "AIzaSyDaG2v-r6QGZOWZHCM_wAYLOkIsZOxQaC0",
    authDomain: "adminpanelecom-72407.firebaseapp.com",
    projectId: "adminpanelecom-72407",
    storageBucket: "adminpanelecom-72407.firebasestorage.app",
    messagingSenderId: "952421965173",
    appId: "1:952421965173:web:aa8ce23ac6b2a14d85073c",
    measurementId: "G-672CR56K48"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getFirestore(app)

