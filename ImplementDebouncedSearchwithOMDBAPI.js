
let API_KEY="b5db3ec8"
let timer;
async function SearchMovies(){
   try {
    let input=document.getElementById("search").value
    
     let res=await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`)
     let data=await res.json()
     
     let list=document.getElementById("list")
         list.innerHTML=""
     
         clearTimeout(timer)
         timer = setTimeout(()=>{
            if(data.Search){
         data.Search.forEach((movie)=>{
             let h3=document.createElement("h3")
             h3.innerText=`Title : ${movie.Title}`
             list.appendChild(h3)
         })
     }
     else{
         let h3=document.createElement("h3")
             h3.innerText=`No result found.`
             list.appendChild(h3)
     }
         },500)
   
   } catch (error) {
    let list=document.getElementById("list")
         list.innerHTML=""

         let h3=document.createElement("h3")
             h3.innerText= error.message
             list.appendChild(h3)
   }
}

