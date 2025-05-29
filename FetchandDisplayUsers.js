
fetch("https://jsonplaceholder.typicode.com/users")
.then((res=>res.json()))
.then((data)=>{
    let list=document.getElementById("list")
    data.forEach((ele)=>{
        console.log(ele)
        let a=document.createElement("a")
        a.innerText=ele.name
        let li=document.createElement("li")
        
        li.appendChild(a)
        list.appendChild(li)
        
        a.addEventListener("click",()=>{
            alert(ele.email)
        })
    })
})