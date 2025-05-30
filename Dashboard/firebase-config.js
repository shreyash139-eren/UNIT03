
   
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

 

  const firebaseConfig = {
    apiKey: "AIzaSyBaZ0oZeS8bnoGWDvgSdjDnF7xGoSxeX4c",
    authDomain: "fakestore-dashboard.firebaseapp.com",
    projectId: "fakestore-dashboard",
    storageBucket: "fakestore-dashboard.firebasestorage.app", 
    messagingSenderId: "248628330706",
    appId: "1:248628330706:web:f79ddfb4d76dc5f7482d0b",
    measurementId: "G-3274PT3M77"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getFirestore(app)
