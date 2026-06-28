export default async function handler(req,res){

try{

const {message}=req.body;


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
content:
"You are Zentra AI 🤖. Reply like ChatGPT. Use emojis naturally. Reply in Hinglish unless user uses English. Keep answers clean and helpful."
},

{
role:"user",
content:message
}

]

})

});


const data = await response.json();


res.status(200).json({

reply:data.choices[0].message.content

});


}

catch(error){

console.log(error);

res.status(500).json({

reply:"Server error ❌"

});

}

}
