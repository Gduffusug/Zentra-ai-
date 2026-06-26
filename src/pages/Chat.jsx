import { useState } from "react";

function Chat(){

const [message,setMessage] = useState("");
const [reply,setReply] = useState("");

const sendMessage = async () => {

setReply("AI is thinking...");

const res = await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message: message
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
value={message}
placeholder="Type your message..."
onChange={(e)=>setMessage(e.target.value)}
/>


<button onClick={sendMessage}>
Send
</button>


</div>
);

}

export default Chat;
