return(
<div className="chat-container">

<h1>Zentra AI 🤖</h1>

<div className="chat-box">
<p>{reply}</p>
</div>


<div className="input-area">

<input
placeholder="Message Zentra AI..."
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<button onClick={sendMessage}>
➤
</button>

</div>

</div>
)
