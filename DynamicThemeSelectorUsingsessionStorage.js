
let theme=document.getElementById("theme")
let saved=JSON.parse(sessionStorage.getItem("theme"))
if(saved){
    theme.value=saved
}
theme.addEventListener("change",()=>{
    let Select=theme.value
    document.body.style.backgroundColor=Select
    sessionStorage.setItem("theme",JSON.stringify(theme))
})