import { auth, db } from "../Dashboard/firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

import {
  doc,
  getDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");

  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        //redirect to dashboard
        window.open("dashboard.html", "_self");
      } catch (error) {
        alert("Wrong credentials! Try again.")
        document.getElementById("login-message").innerText = error.message;
      }
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", async () => {
      const name = document.getElementById("name").value;
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;

      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await setDoc(doc(db, "users", userCredentials.user.uid), {
          email,
          name,
        });
        alert("Registration Successful! Please log in.")
        //redirecting to login
        window.location.href = "login.html";
      } catch (error) {
        document.getElementById("signup-message").innerText = error.message;
      }
    });
  }
});
