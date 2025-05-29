
        
    async function Add(){
        try {
            let feedback={
                UserName:document.getElementById("user").value,
                feedback:document.getElementById("Feedback").value
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
    