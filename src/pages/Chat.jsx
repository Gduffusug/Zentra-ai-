import { useState } from "react";

export default function Chat(){

const [message,setMessage]=useState("");
const [reply,setReply]=useState("");

async function sendMessage(){

const res = await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:message
})
});

const data = await res.json();

setReply(data.reply);

}


return(
<div className="chat-container">

<h1>Zentra AI 🤖</h1>

<div className="chat-box">
{reply}
</div>


<div className="input-area">

<input
value={message}
placeholder="Message Zentra AI..."
onChange={(e)=>setMessage(e.target.value)}
/>


<button onClick={sendMessage}>
➤
</button>

</div>

</div>
)

}
