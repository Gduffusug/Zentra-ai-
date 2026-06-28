import { useState } from "react";
import "./Chat.css";

function Chat(){

const [message,setMessage] = useState("");
const [chat,setChat] = useState([]);
const [loading,setLoading] = useState(false);


async function sendMessage(){

if(!message.trim()) return;


const userMessage = message;


setChat(old=>[
...old,
{
role:"user",
text:userMessage
}
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
message:userText
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


}

catch{

setChat(old=>[
...old,
{
role:"ai",
text:"Connection error"
}
]);

}


setLoading(false);

}




return(

<div className="app">


<h1 className="logo">
✨ Zentra AI 🤖
</h1>


{
chat.length===0 &&

<h2 className="welcome">
Welcome to our chat ✨
</h2>

}



<div className="chat-box">


{
chat.map((msg,index)=>(

<div 
key={index}
className={msg.role}
>

<div className="name">

{
msg.role==="user"
?
"You"
:
"Zentra"
}

</div>


<p>
{msg.text}
</p>


</div>

))
}



{
loading &&

<div className="ai typing">

Zentra is thinking...

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

➤

</button>



</div>


</div>


)

}


export default Chat;
