import { useState } from "react";

export default function Chat(){

const [message,setMessage] = useState("");
const [reply,setReply] = useState("");
const [loading,setLoading] = useState(false);


async function sendMessage(){

setLoading(true);

try{

const res = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key="+import.meta.env.VITE_GEMINI_API_KEY,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[
{
text:message
}
]
}
]
})
}
);


const data = await res.json();

setReply(data.candidates[0].content.parts[0].text);


}catch(e){

setReply("Error");

}


setLoading(false);

}



return(

<div className="chat-container">

<h1>Zentra AI 🤖</h1>


<div className="chat-box">

{loading ? "AI thinking..." : reply}

</div>


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
