
async function Random(){
    try {
        const container=document.getElementById("random")
        container.innerHTML=""
        const id=Math.floor(Math.random()*800)
        const res=await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data=await res.json()
        
        const card=document.createElement("div")
        card.innerHTML=` <img src="${data.image}" alt="${data.name}">
                        <p>Name : ${data.name}</p>
                        <p>Status : ${data.status}</p>
                        <p>Species : ${data.species}</p>
                        <p>Type : ${data.type || "Null"}</p>
                        <p>Gender : ${data.gender}</p>
                        <p>Origin Location : ${data.origin.name}</p>
                        <p>Current Location : ${data.location.name}</p>
                        <p>Episode apperances : ${data.episode.length}</p>
                        <p>Character's Endpoint : <a href="${data.url}">${data.url}</a></p>
                        <p>Created : ${data.created}</p>`

        container.appendChild(card)

        
    } catch (error) {
        const container=document.getElementById("random")
        const p=document.createElement("p")
        p.innerText=error.message
        container.appendChild(p)
    }
}

const clock=document.getElementById("time")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"];
setInterval(() => {
    const date=new Date
    const day=date.getDay()
    const month=months[date.getMonth()]
    const year=date.getFullYear()
    const weekDay=days[date.getDay()]
    const second=date.getSeconds()
    const minute=date.getMinutes()
    const hour=date.getHours()

    clock.innerText=`${hour}:${minute}:${second} - ${weekDay} - ${day+1} ${month} ${year}`

}, 1000);
