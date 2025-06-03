let characters = [];
let CurrPage = 1;
let itemsPerPage = 6;
let total = 1;
document.addEventListener("DOMContentLoaded", () => {
async function fetchData() {
  try {
    let Page = 1;
    let res = await fetch(`https://rickandmortyapi.com/api/character?page=1`);
    let data = await res.json();
    let totalPages = data.info.pages;

    for (let i = 0; i < totalPages; i++) {
      let res1 = await fetch(
        `https://rickandmortyapi.com/api/character?page=${Page}`
      );
      let data1 = await res1.json();
      data1 = data1.results;
      characters.push(...data1);
      Page++;
    }
    total = Math.ceil(characters.length / itemsPerPage);
    showData(CurrPage);
    document.getElementById("loading").style.display = "none";
  } catch (error) {
    console.log(error.message);
  }
}

function showData(page) {
  let container = document.getElementById("container");
  container.innerHTML = "";

  let start = (page - 1) * itemsPerPage;
  let end = page * itemsPerPage;
  let pageItems = characters.slice(start, end);

  pageItems.forEach((ele) => {
    let card = document.createElement("div");

    let link = document.createElement("a");
    link.href = "unique.html";
    link.textContent = "More Details";
    link.addEventListener("click", () => {
      localStorage.setItem("id", ele.id);
    });

    card.innerHTML = ` <img src="${ele.image}" alt="${ele.name}">
                    <p>Name : ${ele.name}</p>
                    <p>Species : ${ele.species}</p>
                    <p>Status : ${ele.status}</p>
                    `;
    card.append(link);
    container.appendChild(card);
  });
}

function updatePage(newPage) {
  if (newPage < 1 || newPage > total) {
    return;
  }
  CurrPage = newPage;
  showData(CurrPage);
}

let prev = document.getElementById("prev")
    prev.addEventListener("click", () => {
  updatePage(CurrPage - 1);
});

let next = document.getElementById("next")
    next.addEventListener("click", () => {
  updatePage(CurrPage + 1);
});

function themeSelector() {
  const theme = document.getElementById("theme").value;
  document.querySelector("body").style.backgroundColor = theme;
  showData(CurrPage);
}

function Random(){
    const Randombtn=document.getElementById("random")
    Randombtn.addEventListener("click",async()=>{
      window.location.href="random.html"
    })
}

Random()
document.getElementById("theme").addEventListener("change", themeSelector);

fetchData();
})
const clock=document.getElementById("time")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"];
setInterval(() => {
    const date=new Date
    const day=date.getDay()
    const month=months[date.getMonth()]
    const year=date.getFullYear()
    const weekDay=days[date.getDay()]
    const second=date.getSeconds()
    const minute=date.getMinutes()
    const hour=date.getHours()

    clock.innerText=`${hour}:${minute}:${second} - ${weekDay} - ${day+1} ${month} ${year}`

}, 1000);