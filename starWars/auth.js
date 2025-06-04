import { auth, db } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginbtn = document.getElementById("login-btn");
  const registerbtn = document.getElementById("register-btn");

  if (loginbtn) {
    loginbtn.addEventListener("click", async () => {
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
      try {
        await signInWithEmailAndPassword(auth, email, password);

        window.open("dashboard.html", "_self")
        alert("Some Characters may not have their picture!!")
      } catch (error) {
        const Message = document.getElementById("login-mes");
        Message.innerText = error.message;
      }
    });
  }

  if (registerbtn) {
    registerbtn.addEventListener("click", async () => {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await setDoc(doc(db, "users", userCredentials.user.uid), {
          name,
          email,
        });

        alert("Registration Successful! Please log in.");
        console.log(2);
        window.location.href = "index.html";
      } catch (error) {
        const Message = document.getElementById("reg-mes");
        Message.innerText = error.message;
      }
    });
  }
});
