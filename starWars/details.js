async function Details(){
    try {
        const container=document.getElementById("container")
        container.innerHTML=""
        let id=localStorage.getItem("id")
        
        let res=await fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
        let char=await res.json()
        
        const card=document.createElement("div")
        card.innerHTML=`<img src="${char.image}" alt="">
                    <p>Name : ${char.name}</p>
                    <p>Gender : ${char.gender}</p>
                    <p>Species : ${char.species}</p>
                    <p>Homeworld : ${char.homeworld}</p>
                    <p>Affiliation : ${char.affiliations}</p>
                    <p>Height : ${char.heigth}</p>
                    <p>Mass : ${char.mass}</p>
                    <p>Eye color : ${char.eyeColor || char.sensorColor}</p>
                    <p>Hair color : ${char.hairColor || "Bald" }</p>
                    <p>Skin color : ${char.skinColor || "No Skin" }</p>`

        container.appendChild(card)

    } catch (error) {
        const container=document.getElementById("container")
        container.innerText=error.message
    }
}

const clock = document.getElementById("time");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
setInterval(() => {
  const date = new Date();
  const day = date.getDay();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekDay = days[date.getDay()];
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();

  clock.innerText = `${hour}:${minute}:${second} - ${weekDay} - ${
    day + 1
  } ${month} ${year}`;
}, 1000);
