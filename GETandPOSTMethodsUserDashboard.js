async function Add(){
    const Name=document.getElementById("name").value
    const Email=document.getElementById("email").value
    let p=document.createElement("p")
    const list=document.getElementById("list")
    list.innerHTML=""
    const Error=document.getElementById("error")
    Error.innerHTML=""

    if(Name.length<1 || Email.length<6){
      let p = document.createElement("p");
      p.innerText = `Enter valid name and email.`;
      Error.innerHTML = "";
      Error.appendChild(p);
      return;
    }
    let obj={
      name:Name,
      email:Email
    }


    let display=await fetch("https://userdashboard-a0403-default-rtdb.asia-southeast1.firebasedatabase.app/Dashboard.json")
    let data=await display.json()
    let arr= data ? Object.entries(data).map(([id, users])=>({id, ...users})) : []

    let exist=arr.find((ele)=> ele.email===Email)

    if (exist) {
      let p = document.createElement("p");
      p.innerText = `${Email} already exists!`;
      Error.innerHTML = "";
      Error.appendChild(p);
      return; 
    }
    let newArr=Object.entries(data).map(([id, users])=>({id, ...users}))
   newArr.forEach((user)=>{
      console.log(user.email)
      let p=document.createElement("p")
          p.innerText=`Name : ${user.name}  
                       Email : ${user.email}`
          list.appendChild(p)
    })

    let res=await fetch("https://userdashboard-a0403-default-rtdb.asia-southeast1.firebasedatabase.app/Dashboard.json",{
      method:"POST",
      headers:{
        "Content-Type":'application/json',
      },
      body:JSON.stringify(obj)
    })
    document.getElementById("name").value=""
    document.getElementById("email").value=""

    

  }