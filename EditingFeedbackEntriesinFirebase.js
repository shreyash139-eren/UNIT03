
        
    async function Add(){
        try {
            let feedback={
                UserName:document.getElementById("user").value.toLowerCase(),
                feedback:document.getElementById("Feedback").value.toLowerCase()
            }

            if(document.getElementById("user").value.length>0 && document.getElementById("Feedback").value.length>0){
                let res=await fetch("https://feedbackdatabase-f242f-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(feedback)
            })
            }
    
            let List=document.getElementById("list")
            List.innerHTML=""
            let message=document.createElement("p")
            
            if(document.getElementById("user").value.length>0 && document.getElementById("Feedback").value.length>0){
                 message.innerText=`Feedback successfully submited.`
                List.appendChild(message)
            }
            else{
                message.innerText=`Please enter your UserName and Feedback to submit.`
                List.appendChild(message)
            }


            document.getElementById("user").value=""
            document.getElementById("Feedback").value=""
        } catch (error) {
            let List=document.getElementById("list")
            let message=document.createElement("p")
            message.innerText=`${error} : Error, Feedback not submited!`
            List.appendChild(message)
        }
    }
    
    async function Edit(){
        let List=document.getElementById("list")
            let message=document.createElement("p")
            List.innerHTML=""
                let nameField=document.getElementById("user").value
                let feedField=document.getElementById("Feedback").value
        let res=await fetch("https://feedbackdatabase-f242f-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json")
        let data=await res.json()

       let feedArray=Object.entries(data).map(([UserName, feedback])=>({UserName, ...feedback}))
       console.log(feedArray)
       feedArray.forEach((ele)=>{
        message.innerText=""
        if(ele.UserName===nameField){
            let feedField=document.getElementById("Feedback").value=ele.feedback
        }
       })
    
            
    }

    async function SaveChanges(){
        try {
            let feedback={
                UserName:document.getElementById("user").value.toLowerCase(),
                feedback:document.getElementById("Feedback").value.toLowerCase()
            }

            if(document.getElementById("user").value.length>0 && document.getElementById("Feedback").value.length>0){
                let res=await fetch("https://feedbackdatabase-f242f-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json",{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(feedback)
            })
            }
            let List=document.getElementById("list")
            List.innerHTML=""
            let message=document.createElement("p")
            
            if(document.getElementById("user").value.length>0 && document.getElementById("Feedback").value.length>0){
                 message.innerText=`UserName:${document.getElementById("user").value}
                                    FeedBack: ${document.getElementById("Feedback").value}`
                List.appendChild(message)
            }
            else{
                message.innerText=`Please enter your UserName to edit your feedback.`
                List.appendChild(message)
            }


            document.getElementById("user").value=""
            document.getElementById("Feedback").value=""
        } catch (error) {
            
        }
    }