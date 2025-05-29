
function Add(){
    let ul=document.querySelector("#list")
    let li=document.createElement("li")
    li.innerText="New Item"
    ul.appendChild(li)

    let total=document.getElementsByTagName("li")
    for(let i=3;i<total.length;i++){
        if(i%2===0){
            total[i].style.color="blue"
            total[i].style.fontWeight="bold"
        }
        else{
            total[i].style.color="red"
            total[i].style.fontStyle="italic"
        }
    }
}
