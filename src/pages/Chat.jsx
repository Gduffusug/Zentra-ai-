import React, { useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "../style.css";


function Chat(){

const [user,setUser] = useState(null);
const [message,setMessage] = useState("");
const [chat,setChat] = useState([]);


onAuthStateChanged(auth,(currentUser)=>{

if(currentUser){
setUser(currentUser);
}

});


const sendMessage = async()=>{

if(!message) return;


setChat([
...chat,
{
type:"user",
text:message
}
]);


setMessage("");


// temporary AI reply
setTimeout(()=>{

setChat(prev=>[
...prev,
{
type:"ai",
text:"I am Zentra AI 🤖. AI system will be connected soon."
}
]

)

},700);


}



return(

<div className="chat">


<h1>
🤖 Zentra AI Chat
</h1>


<h2>
Hello {user?.displayName || user?.email || "User"} 👋
</h2>


<div className="chatbox">


{
chat.map((item,index)=>(

<p key={index}>

<b>
{item.type==="user" ? "You: " : "AI: "}
</b>

{item.text}

</p>


))
}


</div>



<div className="input">


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Ask AI anything..."

/>


<button onClick={sendMessage}>

➤

</button>


</div>


</div>


)

}


export default Chat;
