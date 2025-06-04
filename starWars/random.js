async function RandomFetch(){
    try {
        let container=document.getElementById("container")
        container.innerHTML=""
    let id=Math.floor(Math.random()*70)

    let res=await fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
    let data=await res.json()
    console.log(data)

    const card=document.createElement("div")
    card.innerHTML=`<img src="${data.image}" alt="">
                    <p>Name : ${data.name}</p>
                    <p>Gender : ${data.gender}</p>
                    <p>Species : ${data.species}</p>
                    <p>Homeworld : ${data.homeworld}</p>
                    <p>Affiliation : ${data.affiliations}</p>
                    <p>Height : ${data.heigth}</p>
                    <p>Mass : ${data.mass}</p>
                    <p>Eye color : ${data.eyeColor || data.sensorColor}</p>
                    <p>Hair color : ${data.hairColor || "Bald" }</p>
                    <p>Skin color : ${data.skinColor || "No Skin" }</p>`

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
