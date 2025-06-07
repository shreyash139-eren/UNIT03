import { auth, db } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,

} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import {
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";


document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const registerBtn = document.getElementById("register-btn");


  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      try {
        await signInWithEmailAndPassword(auth, email, password);

      
        window.open("dashboard.html", "_self");
      } catch (error) {
        const Message = document.getElementById("login-mes");
        Message.innerText = error.messsage;
      }
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener("click", async () => {
      const name = document.getElementById("name").value;
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;

      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await setDoc(doc(db, "users", userCredentials.user.uid),
          {
            name,
            email,
          });
          alert("Registration successful! Please log in.")
          window.location.href="index.html"
          
      } catch (error) {
        const Message = document.getElementById("register-mes");
        Message.innerText = error.messsage;
      }
    });
  }
});
