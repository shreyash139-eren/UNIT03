
let Tasks=0
let Complete=0
let incomp=0
let complete=document.getElementById("complete")
let incomplete=document.getElementById("incomplete")
let count=document.getElementById("total")
let compl=document.getElementById("comp")
let incom=document.getElementById("incomp")

function updateCounter(){
    count.innerText=`Tasks: ${Tasks}`
    compl.innerText=`Completed: ${Complete}`
    incom.innerText=`Incomplete: ${Tasks-Complete}`
}

function Add(){
    let input=document.getElementById("add").value
    let li=document.createElement("li")
    let button=document.createElement("button")
    let check=document.createElement("input")
    check.type="checkbox"
    button.innerText="Delete"
    li.innerText=input
    li.append(check,button)
    if(input.length>0){
    incomplete.appendChild(li)
    Tasks++

    updateCounter()
    }

    button.addEventListener('click',()=>{
        Tasks--
        li.remove()
        
    updateCounter()
    })

    check.addEventListener("change",()=>{
        if(check.checked){
            Complete++
            complete.appendChild(li)
            
        }
        else if(!check.checked){
            Complete--
            incomplete.appendChild(li)
        }

    updateCounter()
    })
}
 function sorting(){
    let sor=document.getElementById("sort")
    sor.sort((a,b)=>{
        a.innerText.localeCompare(b.innerText)
    })
    }
   