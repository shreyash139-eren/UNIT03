
let Alert=false
let nextClick=0
let prevClick=0
let images=[]
let CurrPage=1,itemsPerPage=1
let total;
async function Image(){
    try {
        let container=document.getElementById("container")
             container.innerHTML=""
        let res=await fetch("https://picsum.photos/v2/list")
            images=await res.json()

            total=Math.ceil(images.length/itemsPerPage)
showImage(CurrPage)
    } catch (error) {
         let container=document.getElementById("container")
             container.innerHTML=error.message
    }
}

let start=CurrPage

function showImage(page){
    let container=document.getElementById("container")
    container.innerHTML=""

    let start=(page-1)*itemsPerPage
    let end=page*itemsPerPage
    let pageitems=images.slice(start,end)
    
    pageitems.forEach((ele)=>{
        let img=document.createElement("img")
        img.src=ele.download_url
        container.appendChild(img)
    })

}

function updatePage(newPage){
    
    if(newPage<1 || newPage>total){
        return
    }
    CurrPage=newPage
    setTimeout(()=>{
        showImage(CurrPage)
        if((nextClick===3 && !Alert)|| (prevClick===3 && !Alert)){
            alert("Chill chill, loading it!!")
            Alert=true
        }
    },1000)
    Alert=false
}
    

let prev=document.getElementById("prev").addEventListener("click",()=>{
    updatePage(CurrPage-1)
    prevClick++
})
let next=document.getElementById("next").addEventListener("click",()=>{
    updatePage(CurrPage+1)
    nextClick++
})

