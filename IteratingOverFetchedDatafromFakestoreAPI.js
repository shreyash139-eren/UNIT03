let container=document.getElementById("container")
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    data.map((ele)=>{
        let div=document.createElement("div")
    div.innerHTML=`<img src="${ele.image}" alt="">
                   <h4>${ele.title}</h4>
                   <p>Price: ${ele.price}</p>`
    container.appendChild(div)
    if(+ele.price>50){
        div.style.border="1px solid yellow"
    }
    else{
        div.style.border="1px solid green"
    }
    })
    
  });

  
    
 