
let div=document.getElementById("container")

function Add(){
    let p=document.createElement("p")
    p.innerText="This is a new paragraph."
    div.appendChild(p)
}

function remove(){
    let p=document.getElementsByTagName("p")
    if(div.children.length>0){
        div.removeChild(p[div.children.length-1])
    }
    else{
        alert("Nothing to delete!")
    }
}
