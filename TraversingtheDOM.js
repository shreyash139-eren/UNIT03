let div=document.getElementById("container")
let li=document.getElementById("item2")

li.addEventListener("click",()=>{
    let items=document.querySelectorAll("li")
    let content=''
    items.forEach((ele,i)=>{
        content+=ele.innerText+"\n"
        if(i != 1){
            console.log(ele.innerText)
        }
    })
    alert(content)

})