import { useState } from "react";

export default function Chat() {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  async function sendMessage(){

    try {

      const res = await fetch("/api/chat", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          message
        })
      });

      const data = await res.json();

      setReply(data.reply);

    } catch(error){

      setReply("Error aa gaya");

    }

  }


  return (

    <div className="chat-page">

      <h1>Zentra AI Chat 🤖</h1>

      <p>{reply}</p>


      <input
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
      placeholder="Ask anything..."
      />


      <button onClick={sendMessage}>
        Send
      </button>


    </div>

  );

}
