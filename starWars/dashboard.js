import { auth, db } from "./firebase-config.js";
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


let currPage=1
let itemsPerPage=6
let total=1
document.addEventListener("DOMContentLoaded",async()=>{
    const UserName=document.getElementById("userName")

    let currentUser=null

    onAuthStateChanged(auth,async(user)=>{
        if(user){
            currentUser=user

            const userDoc=await getDoc(doc(db, "users", user.uid))
            if(userDoc.exists()){
                const name=userDoc.data().name

                UserName.innerText=name
            }
        }else{
            window.location.href="index.html"
        }
    })

    let array=[]
    async function fetchCharacters(){
        try {
            let res=await fetch("https://akabab.github.io/starwars-api/api/all.json")
            let data=await res.json()
            array=[...data]
         total=Math.ceil(array.length/6)

            showData(currPage)

        } catch (error) {
            let container=document.getElementById("container")
            container.innerHTML=""
            container.innerText=error.message
        }
    }


    
    function showData(page){
        let container=document.getElementById("container")
        container.innerHTML=""

        let start=(page-1)*itemsPerPage
        let end=page*itemsPerPage
        let pageItems=array.slice(start,end)
        pageItems.forEach((ele)=>{
            let card=document.createElement("div")
            
            let link=document.createElement("a")
            link.href="details.html"
            link.innerText="More Details"
            link.addEventListener("click",()=>{
                localStorage.setItem("id",ele.id)
            })

            card.innerHTML=`
            <img src="${ele.image}" alt="${ele.name}">
            <p>Name : ${ele.name}</p>
            <p>Species : ${ele.species}</p>
            <p>Gender : ${ele.gender}</p>`

            card.append(link)
        container.appendChild(card)
        })
    }
    function updatePage(newPage){
        if(newPage<1 || newPage>total){
            return
        }
        currPage=newPage
        showData(currPage)
    }

    let prev=document.getElementById("prev")
    prev.addEventListener("click",()=>{
        updatePage(currPage-1)
    })

    let next=document.getElementById("next")
    next.addEventListener("click",()=>{
        updatePage(currPage+1)
    })


    const Randombtn = document.getElementById("random");
    Randombtn.addEventListener("click", async () => {
      window.location.href = "random.html";
    });

    function themeSelector() {
        const theme = document.getElementById("theme").value;
        document.querySelector("body").style.backgroundColor = theme;
        showData(currPage);
      }

      document.getElementById("theme").addEventListener("change", themeSelector);

    const logoutBtn=document.getElementById("logout-btn")
    if(logoutBtn){
        logoutBtn.addEventListener("click",async()=>{
            await signOut(auth)
            window.location.href="index.html"
        })
    }
    fetchCharacters()
})


const clock = document.getElementById("time");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
setInterval(() => {
  const date = new Date();
  const day = date.getDay();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekDay = days[date.getDay()];
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();

  clock.innerText = `${hour}:${minute}:${second} - ${weekDay} - ${
    day + 1
  } ${month} ${year}`;
}, 1000);




