document.getElementById("parent").addEventListener("click",()=>{
    alert("Parent Div Clicked!-Capturing")
},true)
document.getElementById("child").addEventListener("click",()=>{
    alert("Child Div Clicked!-Capturing ")
},true)
document.getElementById("gchild").addEventListener("click",()=>{
    alert("GrandChild Div Clicked!-Capturing")
},true)

document.getElementById("parBtn").addEventListener("click",()=>{
    alert("Parent Button clicked!-Bubbling")
})
document.getElementById("chilBtn").addEventListener("click",()=>{
    alert("Child Button clicked!-Bubbling")
})
document.getElementById("gcBtn").addEventListener("click",(e)=>{
    e.stopPropagation
    alert("GrandChild Button clicked!-Bubbling")
})
