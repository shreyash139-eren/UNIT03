const products = [
    { id: 1, name: "Product A", price: 50, inStock: true },
    { id: 2, name: "Product B", price: 30, inStock: false },
    { id: 3, name: "Product C", price: 70, inStock: true },
    { id: 4, name: "Product D", price: 20, inStock: false }
  ];

  let container=document.getElementById("container")
 
  for(let i=0;i<products.length;i++){
    let div=document.createElement("div")
  div.innerHTML=`<h3>${products[i].name}</h3>
                 <h4>Price: ${products[i].price}</h4>
                 <p>${products[i].inStock}</p>`
                 container.appendChild(div)
  }

  let p=document.querySelectorAll("p")
  p.forEach((ele)=>{
    if(ele.innerText==="true"){
        ele.innerText="In Stock"
        ele.parentElement.style.backgroundColor="green"
    }
    else{
        ele.innerText="Out of Stock"
        ele.parentElement.style.backgroundColor="red"
    }
  })
