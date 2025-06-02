
let characters=[]
let CurrPage = 1
let itemsPerPage = 6;
let total=1
async function fetchData(){
try {
 let Page=1
for(let i=0;i<42;i++){
let res=await fetch(`https://rickandmortyapi.com/api/character?page=${Page}`)
let data=await res.json()
data=data.results
characters.push(...data)
Page++
}
total=Math.ceil(characters.length/itemsPerPage)
showData(CurrPage)
document.getElementById("loading").style.display="none"

}
catch (error) {
console.log(error.message)
}

}


function showData(page){
let container=document.getElementById("container")
container.innerHTML=""

let start=(page-1)*itemsPerPage
let end=page*itemsPerPage
let pageItems=characters.slice(start,end)

pageItems.forEach((ele)=>{
    console.log(ele)
    let card=document.createElement("div")
    card.innerHTML=` <img src="${ele.image}" alt="${ele.name}">
                    <p>Name : ${ele.name}</p>
                    <p>Species : ${ele.species}</p>
                    <p>Status : ${ele.status}</p>
                     <a href="${"unique.html"}">More Details</a>
                    `

    container.appendChild(card)
})
}

function updatePage(newPage){
if(newPage<1 || newPage>total){
    return
}
CurrPage=newPage
showData(CurrPage)
}

let prev=document.getElementById("prev").addEventListener("click",()=>{
updatePage(CurrPage-1)
})

let next=document.getElementById("next").addEventListener("click",()=>{
updatePage(CurrPage+1)
})

fetchData()


