export default async function handler(req, res) {

  if(req.method !== "POST"){
    return res.status(405).json({error:"Method not allowed"});
  }

  try {

    const {message} = req.body;

    console.log("MESSAGE:", message);
    console.log("KEY:", process.env.GEMINI_API_KEY ? "YES" : "NO");


    const apiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
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


    const data = await apiResponse.json();

    console.log("GEMINI:",data);


    res.status(200).json({
      reply:data.candidates?.[0]?.content?.parts?.[0]?.text || "No reply"
    });


  } catch(error){

    console.log("ERROR:",error);

    res.status(500).json({
      reply:"Backend error"
    });

  }

}
