export default async function handler(req,res){

try{

const {message}=req.body;


const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[
{
text:message
}
]
}
]
})
}
);


const data = await response.json();

console.log(data);


if(!data.candidates){
return res.status(200).json({
reply:"Gemini Error: "+JSON.stringify(data)
});
}


return res.status(200).json({
reply:data.candidates[0].content.parts[0].text
});


}catch(error){

return res.status(500).json({
reply:error.message
});

}

}
