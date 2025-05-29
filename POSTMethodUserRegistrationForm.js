async function Register(){
    try {  
    const Name=document.getElementById("name").value
    const Email=document.getElementById("email").value
    const Password=document.getElementById("password").value
    const MessageField=document.getElementById("message")

    MessageField.innerHTML=""

        if(Name.length===0){
            document.getElementById("name").style.border="2px solid red"
            let p=document.createElement("p")
            p.innerText=`Please enter valid name.`
            MessageField.innerHTML=""
            MessageField.appendChild(p)
            return;
        }
        if(Email.length<6){
            document.getElementById("email").style.border="2px solid red"
            let p=document.createElement("p")
            p.innerText=`Please enter valid email.`
            MessageField.innerHTML=""
            MessageField.appendChild(p)
            return;
        }
        if(Password.length<8){
            document.getElementById("password").style.border="2px solid red"
            let p=document.createElement("p")
            p.innerText=`Password must be 8 characters long.`
            MessageField.innerHTML=""
            MessageField.appendChild(p)
            return;
        }
        let user={
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value
        }

        let data=await fetch("https://mockapiuser-default-rtdb.asia-southeast1.firebasedatabase.app/user.json")
        let ever=await data.json()
        let usersArray=Object.entries(ever).map(([id, users])=>({id, ...users}))
        
        let existingUser = usersArray.find((ele) => ele.email === Email);

        if (existingUser) {
          let p = document.createElement("p");
          p.innerText = `${Email} already exists!`;
          MessageField.innerHTML = "";
          MessageField.appendChild(p);
          return; 
        }
    

        let res=await fetch("https://mockapiuser-default-rtdb.asia-southeast1.firebasedatabase.app/user.json",{
            method:'POST',
            headers:{
                "Content-Type":'application/json',
            },
            body : JSON.stringify(user)
    
        })

        let p=document.createElement("p")
        p.innerText=`User : ${Name} Registration successful!`
        MessageField.appendChild(p)


         document.getElementById("name").value=""
         document.getElementById("email").value=""
         document.getElementById("password").value=""


    } catch (error) {
        const MessageField=document.getElementById("message")
        let p=document.createElement("p")
        p.innerText=`${error} Registration Unsuccessful!`
        MessageField.appendChild(p)
    }
}