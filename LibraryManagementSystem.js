
        
           
        let id=3
        let mid=3
        //add books
        async function Add(){
            
        const Title=document.getElementById("title").value.toLowerCase()
        const Author=document.getElementById("author").value.toLowerCase()
        const Genre=document.getElementById("genre").value.toLowerCase()
        const Year=document.getElementById("year").value
        const Available=document.getElementById("available").value
         
        const Error1=document.getElementById("error")
             
            
            let book={
                id:id,
                title: Title,
                author: Author,
                genre: Genre,
                publishedYear: Year,
                available: Available
            }
            if(Title.length<4 || Author.length<5 || Genre.length<5 || Year.length!==4){
                Error1.innerHTML=""
                const p=document.createElement("p")
                p.innerText="Please enter valid Book data."
                Error1.appendChild(p)
                return
            }
            let display=await fetch("https://library-2795b-default-rtdb.asia-southeast1.firebasedatabase.app/books.json")
            let data=await display.json()
            let arr= data ? Object.entries(data).map(([id, books])=>({id, ...books})) : []
            let exist=arr.find((ele)=> ele.title===Title)
            if (exist) {
            let p = document.createElement("p");
            p.innerText = `${Title} already exists!`;
            Error1.innerHTML = "";
            Error1.appendChild(p);
            return; 
            }
            let res=await fetch("https://library-2795b-default-rtdb.asia-southeast1.firebasedatabase.app/books.json",{
                method:'POST',
                headers:{
                    "Content-Type":'application/json',
                },
                body:JSON.stringify(book)
            })
            id++
            
            document.getElementById("title").value=""
            document.getElementById("author").value=""
            document.getElementById("genre").value=""
            document.getElementById("year").value=
            document.getElementById("available").value=""
        }
        //add members
         async function Member(){
            const Name=document.getElementById("name").value.toLowerCase()
            const Date=document.getElementById("date").value
            const Status=document.getElementById("active").value
            const Error2=document.getElementById("error1")
            
            let Member={
                id:mid,
                name:Name,
                membershipDate: Date,
                active: Status
            }
            if(Name.length<4 || Status.length<4){
                Error2.innerHTML=""
                const p=document.createElement("p")
                p.innerText="Please enter valid Member data."
                Error2.appendChild(p)
                return
            }
            let display=await fetch("https://library-2795b-default-rtdb.asia-southeast1.firebasedatabase.app/members.json")
            let data=await display.json()
            let arr= data ? Object.entries(data).map(([id, member])=>({id, ...member})) : []
            let exist=arr.find((ele)=> ele.name===Name)
            if (exist) {
            let p = document.createElement("p");
            p.innerText = `${Name} already exists!`;
            Error1.innerHTML = "";
            Error1.appendChild(p);
            return; 
            }
            let res=await fetch("https://library-2795b-default-rtdb.asia-southeast1.firebasedatabase.app/members.json",{
                method:'POST',
                headers:{
                    "Content-Type":'application/json',
                },
                body:JSON.stringify(Member)
            })
            id++
            
            document.getElementById("name").value=""
            document.getElementById("date").value=""
            document.getElementById("active").value=""
        }