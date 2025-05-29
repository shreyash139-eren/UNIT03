function Change(){
    let color=document.getElementById("name").value
    let div=document.getElementById("container")
    
    if(div.style.backgroundColor=== "white" || color.length<=2){
        alert("Enter a valid color")
    }
    else{
        div.style.backgroundColor=color
    }
}
function update(){
    let updated=document.getElementById("text").value
    let p=document.getElementById("p")
    
    if(updated.length===0){
        alert("Please enter some text!")
    }
    else{
        p.innerText=updated
    }
}