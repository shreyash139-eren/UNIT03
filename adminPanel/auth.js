import { auth, db } from "../adminPanel/firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  addDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginbtn = document.getElementById("login-btn");
  const signupbtn = document.getElementById("register-btn");

  if (loginbtn) {
    loginbtn.addEventListener("click", async () => {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        
        //trying
        let currentUser=null

        onAuthStateChanged(auth, async(user)=>{
     
         if(user){
           currentUser=user
           
           const userDoc=await getDoc(doc(db,"users",user.uid))
           if(userDoc.exists()){
             const role=userDoc.data().role
            
             if(role==="user"){
              window.location.href="userDashboard.html"
             }
             else if(role==="admin"){
               window.location.href="adminDashboard.html"
             }
     
           }
         }
         else{
           window.location.href="login.html"
         }
        })

      } catch (error) {
        alert("Incorrect email or password!");
        document.getElementById("loginMessage").innerText = error.message;
      }
    });
  }

  if (signupbtn) {
    signupbtn.addEventListener("click", async () => {
      const name = document.getElementById("name").value;
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;
      const role = document.getElementById("role").value;

      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await setDoc(doc(db, "users", userCredentials.user.uid), {
          email,
          name,
          role,
        });

        alert("Registration Successful! Please log in.");
        window.open("login.html", "_self");
      } catch (error) {
        document.getElementById("registerMessage").innerText = error.message;
      }
    });
  }

});
