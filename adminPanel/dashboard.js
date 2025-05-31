import { auth, db } from "../adminPanel/firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
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

document.addEventListener("DOMContentLoaded", async () => {
  const logoutBtn = document.getElementById("logout-btn");
  const addProd = document.getElementById("add");
  const container = document.getElementById("container");

  if (addProd) {
    addProd.addEventListener("click", async () => {
      const title = document.getElementById("title").value;
      const price = document.getElementById("price").value;
      const image = document.getElementById("imageUrl").value;

      if (title.length < 5 || isNaN(price) || price <= 0 || image.length < 10) {
        alert("Please enter valid Product data.");
        return;
      }

      try {
        await addDoc(collection(db, "products"), {
          title,
          price,
          image,
        });
        alert("Product added");

        document.getElementById("title").value = "";
        document.getElementById("price").value = "";
        document.getElementById("imageUrl").value = "";
      } catch (error) {
        alert(error.message);
      }
    });
  }

  //fetch user name
  let currentUser = null;
  onAuthStateChanged(auth, async (user) => {
    currentUser = user;

    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      const role = userDoc.data().role;
      const name = userDoc.data().name;
      loadProducts(role, name);
      if (role === "admin") {
        document.getElementById("adminName").innerText = name;
      } else {
        document.getElementById("userName").innerText = name;
      }
    }
  });

  async function loadProducts(role, user) {
    container.innerHTML = "";
    const productRef = collection(db, "products");

    const querySnap = await getDocs(productRef);

    querySnap.forEach((doc) => {
      const productData = doc.data();
      displayProducts(doc.id, productData, user.uid, role);
    });
  }

  //display products
  function displayProducts(id, data, userId, role) {
    const prodDiv = document.createElement("div");
    if (role === "user") {
      prodDiv.innerHTML = `<img src="${data.image}">
                      <p>${data.title}</p>
                      <p>Price : ₹${data.price}</p>`;

      container.appendChild(prodDiv);
    } else if (role === "admin") {
      prodDiv.innerHTML = `<img src="${data.image}">
                      <p>${data.title}</p>
                      <p>Price : ₹${data.price}</p>`;

      const edit = document.createElement("button");
      edit.innerText = "Edit";
      edit.classList.add("edit-btn");

      edit.onclick = () => {
        const titleInput = document.createElement("input");
        titleInput.value = data.title;
        const priceInput = document.createElement("input");
        priceInput.type = "number";
        priceInput.value = data.price;

        const saveBtn = document.createElement("button");
        saveBtn.innerText = "Save";

        saveBtn.onclick = async () => {
          const updatedTitle = titleInput.value.trim();
          const updatedPrice = parseFloat(priceInput.value);

          if (
            updatedTitle.length < 5 ||
            isNaN(updatedPrice) ||
            updatedPrice <= 0
          ) {
            alert("Please enter a valid title and price.");
            return;
          }

          try {
            await setDoc(doc(db, "products", id), {
              ...data,
              title: updatedTitle,
              price: updatedPrice,
            });
            alert("Product updated.");
          } catch (error) {
            alert("Update failed: " + error.message);
          }
        };

        prodDiv.innerHTML = `
    <img src="${data.image}">`;

        prodDiv.appendChild(titleInput);
        prodDiv.appendChild(priceInput);
        prodDiv.appendChild(saveBtn);
      };

      const Delete = document.createElement("button");
      Delete.innerText = "Delete";
      Delete.classList.add("delete-btn");

      Delete.onclick = async () => {
        const confirmDelete = confirm(
          "Are you sure you want to delete this product?"
        );
        if (confirmDelete) {
          try {
            await deleteDoc(doc(db, "products", id));
            alert("Product deleted.");
          } catch (error) {
            alert("Delete failed: " + error.message);
          }
        }
      };

      prodDiv.appendChild(edit);
      prodDiv.appendChild(Delete);

      prodDiv.appendChild(Delete);

      container.appendChild(prodDiv);
    }
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await signOut(auth);
      location.replace("login.html");
    });
  }
});
