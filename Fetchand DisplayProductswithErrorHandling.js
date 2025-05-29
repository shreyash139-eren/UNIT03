let container=document.getElementById("container")

    async function Products(){
        try {
            let response= await fetch("https://fakestoreapi.com/products")
            let data= await response.json()

            data.forEach((ele)=>{
                let div=document.createElement("div")
                div.innerHTML=` <h3>${ele.title}</h3>
                                <img src="${ele.image}" alt="">
                                <p>Price : ${ele.price}</p>
                                <button>View Details</button>`
                                container.appendChild(div)
            })
            

        } catch (error) {
            let body=document.getElementById("body")
            let div=document.createElement("div")
            div.innerHTML=`<h2>Failed to fetch products. Please try again later : ${error}</h2>`
            body.appendChild(div)
        }
    }