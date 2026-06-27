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
role:"user",
body:JSON.stringify({
model:"openai/gpt-oss-120b",
messages:[
{
role:"system",
content:"You are Zentra AI. Always answer clearly using bullet points, numbered lists, headings and short paragraphs when needed. Format answers like ChatGPT."
},
{
role:"user",
content:message
}
]
})
})
}
);

const data = await response.json();

console.log(data);

res.status(200).json({
reply:data.choices[0].message.content
});


}catch(error){

console.log(error);

res.status(500).json({
reply:"Groq Error: "+error.message
});

}

}
