import { auth, db } from "../Dashboard/firebase-config.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

import {
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("container");

  let currentUser = null;

  //check Auth state
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      currentUser = user;

      //fetch user name
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const name = userDoc.data().name;

        document.getElementById("userName").innerText = name;
      }
    } else {
      //if not logged in
      window.location.href = "login.htm";
    }

    //products load
    loadProducts();
  });

  //load products
  async function loadProducts() {
    try {
      const container = document.getElementById("container");
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);

      data.forEach((product) => {
        let div = document.createElement("div");
        div.innerHTML = `<h3>${product.title}</h3>
                        <img src="${product.image}" alt="${product.title}">
                        <p>Price : ${product.price}</p>`;

        container.appendChild(div);
      });
    } catch (error) {
      document.getElementById("error-message").innerText = error.message;
    }
  }

  const logoutBtn=document.getElementById("logout-btn")
  if(logoutBtn){
    logoutBtn.addEventListener("click", async()=>{
        await signOut(auth)
        window.open("login.html", "_self")
    })
  }

});
