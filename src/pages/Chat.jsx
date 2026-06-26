import { useState } from "react";
import { useState } from "react";

function Chat(){

const [message,setMessage]=useState("");
const [reply,setReply]=useState("");

const sendMessage = async()=>{

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

};


return (
<div className="chat-container">

<h1>Zentra AI 🤖</h1>

<div className="chat-box">
{reply}
</div>


<input
placeholder="Message..."
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<button onClick={sendMessage}>
Send
</button>


</div>
);

}

export default Chat;
