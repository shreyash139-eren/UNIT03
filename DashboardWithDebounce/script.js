let arr = [
  "Liam",
  "Noah",
  "Oliver",
  "Theodore",
  "James",
  "Henry",
  "Mateo",
  "Elijah",
  "Lucas",
  "William",
  "Benjamin",
  "Levi",
  "Ezra",
  "Sebastian",
  "Jack",
  "Daniel",
  "Samuel",
  "Michael",
  "Ethan",
  "Asher",
  "John",
  "Hudson",
  "Luca",
  "Leo",
  "Elias",
  "Owen",
  "Alexander",
  "Dylan",
  "Santiago",
  "Julian",
  "David",
  "Joseph",
  "Matthew",
  "Luke",
  "Jackson",
  "Maverick",
  "Miles",
  "Wyatt",
  "Thomas",
  "Isaac",
  "Jacob",
  "Mason",
  "Gabriel",
  "Anthony",
  "Carter",
  "Logan",
  "Aiden",
  "Grayson",
  "Caleb",
  "Cooper",
  "Charles",
  "Roman",
  "Josiah",
  "Ezekiel",
  "Thiago",
  "Isaiah",
  "Joshua",
  "Wesley",
  "Jayden",
  "Bennett",
  "Christopher",
  "Nathan",
  "Angel",
  "Nolan",
  "Waylon",
  "Cameron",
  "Brooks",
  "Andrew",
  "Beau",
  "Weston",
  "Rowan",
  "Adrian",
  "Lincoln",
  "Enzo",
  "Ian",
  "Kai",
  "Christian",
  "Axel",
  "Aaron",
  "Theo",
  "Silas",
  "Walker",
  "Jonathan",
  "Leonardo",
  "Everett",
  "Micah",
  "Ryan",
  "August",
  "Gael",
  "Robert",
  "Jose",
  "Eli",
  "Jeremiah",
  "Luka",
  "Amir",
  "Jaxon",
  "Parker",
  "Colton",
  "Myles",
  "Adam",
  "Atlas",
  "Xavier",
  "Easton",
  "Jordan",
  "Arthur",
  "Landon",
  "Austin",
  "Dominic",
  "Adriel",
  "Damian",
  "Vincent",
  "River",
  "Emiliano",
  "Jace",
  "Archer",
  "Lorenzo",
  "Jameson",
  "Nicholas",
  "Emmett",
  "Milo",
  "Harrison",
  "Giovanni",
  "Carson",
  "George",
  "Kayden",
  "Jonah",
  "Greyson",
  "Hunter",
  "Graham",
  "Luis",
  "Declan",
  "Sawyer",
  "Jasper",
  "Ryder",
  "Carlos",
  "Connor",
  "Juan",
  "Matteo",
  "Dawson",
  "Calvin",
  "Leon",
  "Dean",
  "Evan",
  "Nathaniel",
  "Diego",
  "Arlo",
  "Bryson",
  "Jason",
  "Malachi",
  "Elliot",
  "Zion",
  "Emilio",
  "Ivan",
  "Hayden",
  "Stetson",
  "Jude",
  "Legend",
  "Matias",
  "Callum",
  "Hayes",
  "Jett",
  "Cole",
  "Elliott",
  "Jesus",
  "Ace",
  "Beckett",
  "Alan",
  "Beckham",
  "Jayce",
  "Braxton",
  "Jaxson",
  "Amari",
  "Chase",
  "Rhett",
  "Max",
  "Charlie",
  "Felix",
  "Kingston",
  "Judah",
  "Antonio",
  "Emmanuel",
  "Maxwell",
  "Ryker",
  "Alejandro",
  "Nicolas",
  "Barrett",
  "Jesse",
  "Ashton",
  "Miguel",
  "Brayden",
  "Tyler",
  "Peter",
  "Camden",
  "Zachary",
  "Tatum",
  "Kevin",
  "Andres",
  "Finn",
  "Justin",
  "Tucker",
  "Bentley",
  "Zayden",
  "Messiah",
  "Abraham",
  "Alex",
  "Adonis",
  "Kaiden",
  "Timothy",
  "Knox",
  "Tate",
  "Caden",
  "Ayden",
  "Nico",
  "Victor",
  "Maddox",
  "Xander",
  "Oscar",
  "Colter",
  "Joel",
  "Abel",
  "Patrick",
  "Rafael",
  "Griffin",
  "Brody",
  "Jaziel",
  "Rory",
  "Eithan",
  "Edward",
  "Riley",
  "Brandon",
  "Milan",
  "Richard",
  "Malakai",
  "Ismael",
  "Kyrie",
  "Louis",
  "Elian",
  "Kairo",
  "Cohen",
  "Nash",
  "Grant",
  "Callan",
  "Dallas",
  "Harvey",
  "Muhammad",
  "Mark",
  "Javier",
  "Karter",
  "Zayn",
  "Crew",
  "Eric",
  "Simon",
  "Aziel",
  "Cyrus",
  "Gavin",
  "Marcus",
  "Ronan",
  "Derek",
  "Avery",
  "Omar",
  "Lane",
  "Warren",
  "Lennox",
  "Paul",
  "Blake",
  "Jeremy",
  "Tristan",
  "Lukas",
  "Steven",
  "Emerson",
  "Walter",
  "Cade",
  "Ellis",
  "Otto",
  "Phoenix",
  "Colt",
  "Atticus",
  "Kaleb",
  "Israel",
  "Tobias",
  "Holden",
  "Saint",
  "Romeo",
  "Kenneth",
  "Jorge",
  "Angelo",
  "Remington",
  "Paxton",
  "Cody",
  "Finley",
  "Kayson",
  "Koa",
  "Kash",
  "Josue",
  "Ares",
  "Hendrix",
  "Bryce",
  "Maximiliano",
  "Zyaire",
  "Reid",
];

function Search(){
    const query=document.getElementById("search").value.toLowerCase()
    const Suggestions=document.getElementById("sugg")
    let timer;
    Suggestions.innerHTML=""
    
    let sorted=arr.filter((ele)=>ele.toLowerCase().includes(query))
   
  if(sorted.length>0){  
    clearTimeout(timer)

       timer=setTimeout(()=>{
        sorted.forEach((ele)=>{
            if(ele.toLowerCase().includes(query)){
                clearTimeout(timer)

             
                let div=document.createElement("div")
                div.innerText=ele
        
                Suggestions.appendChild(div)
            }

        })
       },1000)
}
       showData()
}

function showData(){
    const display=document.getElementById("show")
    display.innerHTML="<h1>Matching Names</h1>"
    const query=document.getElementById("search").value.toLowerCase()
    let sorted=arr.filter((ele)=>ele.toLowerCase().includes(query))
   if(sorted.length>0){
     sorted.forEach((ele)=>{
        let p=document.createElement("p")
        p.innerText=ele
        display.appendChild(p)
    })
}else{
    let p=document.createElement("p")
        p.innerText=`No results found for ${query}!`
        display.appendChild(p)
}
}
document.getElementById("sugg").addEventListener("scroll",()=>{
  const sugg=document.getElementById("sugg")
  if(sugg.scrollTop>=200){
   if(!document.getElementById("moveToTopBtn")){
    const button=document.createElement("button")
    button.innerText="⬆️ Move to top"
    button.id="moveToTopBtn"
    

    button.addEventListener("click",()=>{
      sugg.scrollTop=0
    })
    sugg.appendChild(button)
   }
  }else{
    const exist=document.getElementById("moveToTopBtn")
    if(exist){
      sugg.removeChild(exist)
    }
  }
  
})

document.getElementById("show").addEventListener("scroll",()=>{
  const Show=document.getElementById("show")
  if(Show.scrollTop>=200){
    console.log(1)
   if(!document.getElementById("MoveToTopBtn")){
    const button=document.createElement("button")
    button.innerText="⬆️ Move to top"
    button.id="MoveToTopBtn"
    

    button.addEventListener("click",()=>{
      Show.scrollTop=0
    })
    Show.appendChild(button)
   }
  }else{
    const exist=document.getElementById("MoveToTopBtn")
    if(exist){
      Show.removeChild(exist)
    }
  }
  
})

function counter(){
  const query=document.getElementById("search").value
  const Count=document.getElementById("count")
  Count.innerText=query.length

  const query1=document.getElementById("search").value.toLowerCase()
  
  let sorted=arr.filter((ele)=>ele.toLowerCase().includes(query1))

  const SearchCount=document.getElementById("Searchcount")
  SearchCount.innerText= sorted.length
}
document.getElementById("search").addEventListener("input",counter)