  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyD9C53xO22-ahpY9QCtQTr289MVumFaQIM",
    authDomain: "starwarswiki-88ce3.firebaseapp.com",
    projectId: "starwarswiki-88ce3",
    storageBucket: "starwarswiki-88ce3.firebasestorage.app",
    messagingSenderId: "377098614304",
    appId: "1:377098614304:web:c2e25698f72eb5dc53ee45",
    measurementId: "G-4XCR62M45J"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
