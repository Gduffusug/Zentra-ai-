import { useState } from "react";

function Chat() {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {

    try {

      setReply("Thinking...");

      const res = await fetch("/api/chat", {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          message: message
        })
      });

      const data = await res.json();

      setReply(data.reply);

    } catch(error){

      setReply("Error connecting AI");

    }

  };


  return (

    <div className="chat-container">

      <h1>Zentra AI 🤖</h1>

      <div className="chat-box">
        {reply}
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

  );

}


export default Chat;
