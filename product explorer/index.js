let arr = [];
const itemsPerPage = 8;
let total = 1;
let currPage = 1;
let timer;

async function fetchData() {

  const loading = document.getElementById("loading");
  const container = document.getElementById("container");

  loading.style.display = "block";
  container.innerHTML = "";

  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    arr = data;
    total = Math.ceil(arr.length / itemsPerPage);
    displayData(currPage);
  } catch (error) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    const p = document.createElement("p");
    p.innerText = error.message;
    container.appendChild(p);
  }
  finally {
    loading.style.display = "none";
  }
}

function displayData(page) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  let start = (page - 1) * itemsPerPage;
  let end = page * itemsPerPage;
  let PageItems = arr.slice(start, end);

  PageItems.forEach((ele) => {
    const div = document.createElement("div");
    div.innerHTML = `<img src="${ele.image}" alt="${ele.title}">
                        <h3>Title : ${ele.title}</h3>
                        <p>Category : ${ele.category}</p>
                        <p>Price : ${ele.price}</p>`;

    container.appendChild(div);
  });
}

function updatePage(newPage) {
  if (newPage < 1 || newPage > total) {
    return;
  }
  currPage = newPage;
  document.getElementById("prev").innerText=currPage-1 || "Prev"
  document.getElementById("curr").innerText=currPage ||1
  document.getElementById("next").innerText=currPage+1 || "Next"
  displayData(currPage);
}

let prev = document.getElementById("prev");
prev.addEventListener("click", () => {
  updatePage(currPage - 1);
});
let next = document.getElementById("next");
next.addEventListener("click", () => {
  updatePage(currPage + 1);
});


document.getElementById("sort").addEventListener("change",()=>{
  const container=document.getElementById("container")
  container.innerHTML=""
  const query=document.getElementById("sort").value
  const sorted=arr.sort((a,b)=>{
    if(query==="asc"){
      return a.price-b.price
    }
    else if(query==="dsc"){
      return b.price-a.price
    }
    else if(query==="alpha"){
      return a.title.localeCompare(b.title)
    }
  })
  
  sorted.forEach((ele)=>{
    const div=document.createElement("div")
    div.innerHTML=`<img src="${ele.image}" alt="${ele.title}">
                        <h3>Title : ${ele.title}</h3>
                        <p>Category : ${ele.category}</p>
                        <p>Price : ${ele.price}</p>`

      container.appendChild(div)
  })
  displayData(currPage)
})

document.getElementById("filter").addEventListener("change",()=>{
  const container=document.getElementById("container")
  container.innerHTML=""
  const query=document.getElementById("filter").value
  const filtered=arr.filter((ele)=>{
    return ele.category===query
  })

  filtered.forEach((ele)=>{
    const div=document.createElement("div")
    div.innerHTML=`<img src="${ele.image}" alt="${ele.title}">
                        <h3>Title : ${ele.title}</h3>
                        <p>Category : ${ele.category}</p>
                        <p>Price : ${ele.price}</p>`

      container.appendChild(div)
  })
})

document.getElementById("search").addEventListener("input",()=>{
  const query=document.getElementById("search").value.toLowerCase()

  clearTimeout(timer)

  timer=setTimeout(()=>{
    const container=document.getElementById("container")
  container.innerHTML=""
  const sorted=arr.filter((ele)=>{
    return ele.title.toLowerCase().includes(query)
  })
  sorted.forEach((ele)=>{
    const div=document.createElement("div")
    div.innerHTML=`<img src="${ele.image}" alt="${ele.title}">
                        <h3>Title : ${ele.title}</h3>
                        <p>Category : ${ele.category}</p>
                        <p>Price : ${ele.price}</p>`

      container.appendChild(div)

  })
  currPage = 1;
  total = Math.ceil(displayArr.length / itemsPerPage);
  displayData(currPage);
  },1000)

})