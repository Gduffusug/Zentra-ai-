export default async function handler(req,res){

try{

console.log("API START");

console.log("KEY:", process.env.GROQ_API_KEY ? "FOUND" : "MISSING");


return res.status(200).json({
reply:"Backend working ✅"
});


}catch(error){

return res.status(500).json({
error:error.message
});

}

}
