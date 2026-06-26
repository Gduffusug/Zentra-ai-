import { useState } from "react";


export default function Chat(){

const [message,setMessage] = useState("");

const [messages,setMessages] = useState([]);


function sendMessage(){

if(!message) return;


setMessages([
...messages,
{
text:message,
user:true
}
]);


setMessage("");

}


return(

<div className="chat-page">


<h1>Zentra AI Chat 🤖</h1>


<div className="chat-box">


{messages.map((msg,index)=>(

<p key={index}>

{msg.text}

</p>

))}


</div>


<div className="chat-input">


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Ask anything..."

/>


<button onClick={sendMessage}>
Send
</button>


</div>


</div>

)

}
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {

  if(req.method !== "POST"){
    return res.status(405).json({error:"Method not allowed"});
  }

  const {message} = req.body;

  const model = genAI.getGenerativeModel({
    model:"gemini-1.5-flash"
  });

  const result = await model.generateContent(message);

  const reply = result.response.text();

  res.json({
    reply
  });
}
