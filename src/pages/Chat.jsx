import { useState } from "react";

export default function Chat(){

const [message,setMessage]=useState("");
const [reply,setReply]=useState("");

async function sendMessage(){

setReply("AI is thinking...");

const res = await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message
})
});


const data = await res.json();

setReply(data.reply);

}


return(
<div className="chat-page">

<h1>Zentra AI Chat 🤖</h1>

<p>{reply}</p>

<input
placeholder="Ask anything..."
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<button onClick={sendMessage}>
Send
</button>

</div>
)

}
