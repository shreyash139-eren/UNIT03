import { auth, db } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

// let count=0

document.addEventListener("DOMContentLoaded", async () => {
  const logoutBtn = document.getElementById("logout-btn");
  const Add = document.getElementById("add");
  const TaskList = document.getElementById("Tasks");

  let currentUser = null;

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      currentUser = user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const Id = userDoc.data().email;
        localStorage.setItem("id", Id);
      }
    } else {
      window.location.href = "index.html";
    }
  });

  if (Add) {
    Add.addEventListener("click", async () => {
      try {
        const Title = document.getElementById("title").value;
        const Description = document.getElementById("descrip").value;
        const Id = localStorage.getItem("id");

        if (Title.length < 1 || Description.length < 1) {
          alert("Please enter data to save Task!");
          return;
        }

        let task = {
          title: Title,
          description: Description,
          user: Id,
          added:new Date(),
          completed: false,
        };

        let res = await fetch(
          "https://taskmanager-98384-default-rtdb.asia-southeast1.firebasedatabase.app/task.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "applicaton/json",
            },
            body: JSON.stringify(task),
          }
        );
        alert("Task added");
        document.getElementById("title").value = "";
        document.getElementById("descrip").value = "";
        fetchTask();
      } catch (error) {
        alert("Unable to add Task");
      }
    });
  }

  async function fetchTask() {
    try {
      let res = await fetch(
        "https://taskmanager-98384-default-rtdb.asia-southeast1.firebasedatabase.app/task.json"
      );
      let data = await res.json();
      let taskArray = Object.entries(data).map(([id, task]) => ({
        id,
        ...task,
      }));
      const Id = localStorage.getItem("id");
      TaskList.innerHTML = "";
      let sorted = taskArray.filter((ele) => {
        return ele.user == Id;
      });

      sorted.forEach((ele) => {
        const div = document.createElement("div");
        div.innerHTML = `
                      <h3><u>Title : ${ele.title}</u></h3>
                      <p>Description :  ${ele.description}</p>
                      <p>Added : ${ele.added}</p>`;

        let check = document.createElement("input");
        check.type = "checkbox";
        check.checked = ele.completed || false;
        check.addEventListener("change", () =>
          toggleCompleted(ele.id, check.checked)
        );

        let edit = document.createElement("button");
        edit.innerText = "Edit";
        edit.onclick = () => Edit(ele.id);

        let Delete = document.createElement("button");
        Delete.innerText = "Delete";
        Delete.onclick = () => DeleteItem(ele.id);

        div.appendChild(check);
        div.appendChild(edit);
        div.appendChild(Delete);

        TaskList.appendChild(div);
      });

      Checked();

    } catch (error) {
      const list = document.getElementById("Tasks");
      list.innerHTML = "";
      list.innerText = error.message;
    }
  }

  fetchTask();

  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await signOut(auth);
      localStorage.clear();
      window.location.href = "index.html";
    });
  }

  async function Edit(id) {
    try {
      const res = await fetch(
        `https://taskmanager-98384-default-rtdb.asia-southeast1.firebasedatabase.app/task/${id}.json`
      );
      const data = await res.json();

      document.getElementById("title").value = data.title;
      document.getElementById("descrip").value = data.description;
      const saveBtn = document.getElementById("add");
      saveBtn.innerText = "Update";
      saveBtn.onclick = () => updataData(id);
    } catch (error) {
      alert("Unable to edit task!");
    }
  }

  async function updataData(id) {
    try {
      const Title = document.getElementById("title").value;
      const Description = document.getElementById("descrip").value;

      if (Title.length < 1 || Description.length < 1) {
        return;
      }
      const update = {
        title: Title,
        description: Description,
      };

      const res = await fetch(
        `https://taskmanager-98384-default-rtdb.asia-southeast1.firebasedatabase.app/task/${id}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(update),
        }
      );

      document.getElementById("title").value = "";
      document.getElementById("descrip").value = "";

      const submitBtn = document.getElementById("add");
      submitBtn.innerText = "Add Task";

      alert("Task updated!");
      fetchTask();
    } catch (error) {
      alert("Unable to update Task!");
    }
  }

  async function DeleteItem(id) {
    try {
      const res = await fetch(
        `https://taskmanager-98384-default-rtdb.asia-southeast1.firebasedatabase.app/task/${id}.json`,
        {
          method: "DELETE",
        }
      );
      alert("Tasl deleted!");
      fetchTask();
    } catch (error) {
      alert("Unable to delete Task!");
    }
  }

  async function toggleCompleted(id, status){
    try {
        await fetch(`https://taskmanager-98384-default-rtdb.asia-southeast1.firebasedatabase.app/task/${id}.json`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({completed:status})
        })

        Checked()

    } catch (error) {
        alert("Failed to update task completion status!")
    }
  }

  function Checked() {
    const check = document.querySelectorAll('#Tasks input[type="checkbox"]');
    let count = 0;

    check.forEach((ele) => {
      if (ele.checked) {
        count++;
      }
    });

    document.getElementById("count").innerText = count;
  }


  document.getElementById("filter").addEventListener("change", async()=>{
    const list=document.getElementById("Tasks")
    list.innerHTML=""
    const Id = localStorage.getItem("id");

    let Sort=document.getElementById("filter").value
    const res=await fetch("https://taskmanager-98384-default-rtdb.asia-southeast1.firebasedatabase.app/task.json")
    const data=await res.json()
    const arr=Object.entries(data).map(([id,task])=>({id,...task}))
    const sorted=arr.filter((ele)=>{
        if(Sort==="false" && ele.user===Id){
            return ele.completed===false
        }
        else if(Sort==="true" && ele.user===Id){
            return ele.completed===true
        }else if(Sort==="" && ele.user===Id){
          return ele
        }
    })
    sorted.forEach((ele)=>{
        const div = document.createElement("div");
        div.innerHTML = `
                      <h3><u>Title : ${ele.title}</u></h3>
                      <p>Description :  ${ele.description}</p>
                      <p>Added : ${ele.added}</p>`;

                      let check = document.createElement("input");
                      check.type = "checkbox";
                      check.checked = ele.completed || false;
                      check.addEventListener("change", () =>
                        toggleCompleted(ele.id, check.checked)
                      );

                      let edit = document.createElement("button");
                      edit.innerText = "Edit";
                      edit.onclick = () => Edit(ele.id);
              
                      let Delete = document.createElement("button");
                      Delete.innerText = "Delete";
                      Delete.onclick = () => DeleteItem(ele.id);
              
                      div.appendChild(check);
                      div.appendChild(edit);
                      div.appendChild(Delete);

        list.appendChild(div)
    })
    console.log(sorted)
  })
});
