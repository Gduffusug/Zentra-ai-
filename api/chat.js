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

model:"openai/gpt-oss-120b",

messages:[

{
role:"system",
content:
`
You are Zentra AI.

Rules:
- Give clear answers
- Use bullet points when useful
- Use numbered steps for guides
- Use headings when needed
- Keep answers clean and easy to read
- Reply like a premium AI assistant
`
},

{
role:"user",
content:message
}

]

})

}
);


const data = await response.json();


if(!data.choices){

return res.status(500).json({
reply:"AI response error"
});

}


res.status(200).json({

reply:data.choices[0].message.content

});


}

catch(error){

res.status(500).json({

reply:"Groq Error: "+error.message

});

}

}
