let Alert = false;
let nextClick = 0;
let prevClick = 0;
let images = [];
let CurrPage = 1
let itemsPerPage = 1;
let total;

async function Image() {
  try {
    let container = document.getElementById("container");
    container.innerHTML = "";
    let res = await fetch("https://picsum.photos/v2/list");
    images = await res.json();
    showImage(CurrPage);
  } catch (error) {
    let container = document.getElementById("container");
    container.innerHTML = error.message;
  }
}

// let start=CurrPage

function showImage(page) {
  let container = document.getElementById("container");
  container.innerHTML = "";

  let start = (page - 1) * itemsPerPage;
  let end = page * itemsPerPage;
  let pageitems = images.slice(start, end);

  pageitems.forEach((ele) => {
    let img = document.createElement("img");
    img.src = ele.download_url;
    container.appendChild(img);
  });
}

function updatePage(newPage) {
  if (newPage < 1 || newPage > total) {
    return;
  }
  CurrPage=newPage
 
  const nextbtn= document.getElementById("next").disabled
  const prevbtn= document.getElementById("prev").disabled
  nextbtn.disabled=true
  prevbtn.disabled=true

  
  setTimeout(()=>{
    nextbtn.disabled=false
    prevbtn.disabled=false

})


  rapidClicks()
  showImage(CurrPage);

}



let clicks=[]
    function rapidClicks(){
        const now=Date.now()
        clicks.push(now)

        clicks=clicks.filter(ts => now-ts<1000)

        if(clicks.length>=3){
            alert("Chill chill, loading it!!")
            clicks=[]
        }
    }


let prev = document.getElementById("prev").addEventListener("click", () => {
  updatePage(CurrPage - 1);
});
let next = document.getElementById("next").addEventListener("click", () => {
  updatePage(CurrPage + 1);
  console.log(nextClick);
});
showImage(CurrPage);
