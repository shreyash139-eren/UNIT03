let heading=document.getElementById("heading")
heading.innerText="Welcome to the DOM World!"

let P=document.getElementsByTagName("p")
for(let i=0;i<P.length;i++){
    P[i].style.color="blue"
}

let div=document.querySelector(".container").style.backgroundColor="yellow"