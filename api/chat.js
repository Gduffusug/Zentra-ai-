import ReactMarkdown from "react-markdown";
npm install react-markdown
export default async function handler(req,res){

try{

const {message} = req.body;


const response = await fetch(
"https://api.groq.com/openai/v1/chat/completions",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":`Bearer ${process.env.GROQ_API_KEY}`
},

body:JSON.stringify({

model:"llama-3.1-8b-instant",

messages:[

{
role:"system",

content:`

You are Zentra AI 🤖✨

Rules:
- Always reply like ChatGPT.
- Use emojis naturally 😊
- Make answers clean and easy to read.
- Use bullet points when explaining.
- Use numbered lists for steps.
- Never use markdown symbols like ## or **.
- Never use HTML tags.
- Keep answers professional but friendly.
- If user asks for ideas, give clear sections.
- If user asks coding questions, explain simply.
- Reply in Hinglish unless user uses English.

Example format:

🚀 Idea:

1. Point one
2. Point two

✅ Benefits:
• Fast
• Easy
• Useful

`

},

{
role:"user",
content:message
}

]

})

});


const data = await response.json();


console.log(data);


if(!data.choices){

return res.status(500).json({
reply:"AI response nahi mila 😅"
});

}


res.status(200).json({

reply:data.choices[0].message.content

});


}

catch(error){

console.log(error);

res.status(500).json({

reply:"Server error 😔"

});

}

}
