import { useState } from "react";

function Chat() {

const [message,setMessage] = useState("");
const [chat,setChat] = useState([]);
const [loading,setLoading] = useState(false);


async function sendMessage(){

if(!message.trim()) return;


const userMessage = message;

setChat(old=>[
...old,
{role:"user", text:userMessage}
]);

setMessage("");
setLoading(true);


try{

const res = await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:userMessage
})
});


const data = await res.json();


setChat(old=>[
...old,
{
role:"ai",
text:data.reply
}
]);


}catch(error){

setChat(old=>[
...old,
{
role:"ai",
text:"Error connecting AI"
}
]);

}


setLoading(false);

}



return(

<div className="chat-container">

<h1>
Zentra AI 🤖
</h1>


<div className="chat-box">


{
chat.map((msg,index)=>(

<div 
key={index}
className={msg.role}
>

<b>
{msg.role==="user"?"You":"Zentra"}
</b>

<p>
{msg.text}
</p>


</div>

))
}


{
loading &&

<div className="ai">
<b>Zentra</b>
<p>Thinking...</p>
</div>

}


</div>



<div className="input-area">

<input

value={message}

placeholder="Ask Zentra AI..."

onChange={(e)=>setMessage(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter")
sendMessage();

}}

/>


<button onClick={sendMessage}>
Send
</button>


</div>


</div>

)

}


export default Chat;
