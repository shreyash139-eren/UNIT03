async function addUser(){
    let users={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value
    }
    let res=await fetch("https://userdatabase-4784c-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",{
        method:'POST',
        headers:{
            "Content-Type":'application/json',
        },
        body : JSON.stringify(users)

    })
    document.getElementById("name").value=""
    document.getElementById("email").value=""


fetchUsers()
}

async function fetchUsers(){
    try {
        let res= await fetch("https://userdatabase-4784c-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
        let data= await res.json()
        let list = document.getElementById("data")
        list.innerHTML=`<tr>
                        <th>Name</th>
                        <th>Email</th>
                        </tr>`

        let usersArray=Object.entries(data).map(([id, users])=>({id, ...users}))
        
        usersArray.forEach((user)=>{
            let row=document.createElement("tr")
            row.innerHTML=`<td>${user.name}</td>
                    <td>${user.email}</td>`
        list.appendChild(row)
        })
    } catch (error) {
        console.log(error,"Please try again later.")
    }
}
fetchUsers()