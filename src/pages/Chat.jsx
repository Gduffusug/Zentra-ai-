import { useState } from "react";

function Chat(){

const [text,setText]=useState("");

return (
<div>
<h1>Zentra AI 🤖</h1>

<input
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Type"
/>

</div>
)

}

export default Chat;
