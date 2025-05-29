
function Add(){
    event.preventDefault();
    let task=document.getElementById("task").value
    let list =document.getElementById("list")
    let li=document.createElement("li")
    li.innerText=task

    let button=document.createElement("button")
    let button1=document.createElement("button")
    button.innerText="Completed"

    button.addEventListener("click",()=>{
        li.style.textDecorationLine="line-through"
    })

    button1.addEventListener("click",()=>{
        li.remove()
    })

    button1.innerText="Delete"
    li.append(button,button1)
    if(task.length>0){
        list.appendChild(li)
    }
    else{
        alert("Add a vlid task!")
    }
}