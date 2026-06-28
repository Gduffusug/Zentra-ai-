export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {

    const { message } = req.body;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
        },

        body: JSON.stringify({

          model: "llama-3.3-70b-versatile",

          messages: [
            {
              role:"system",
              content:
              `
              You are Zentra AI 🤖✨

              Rules:
              - Reply like ChatGPT
              - Use emojis naturally
              - Use clean formatting
              - Use bullet points
              - Reply in Hinglish
              - Be helpful and professional
              `
            },

            {
              role:"user",
              content: message
            }
          ]

        })
      }
    );


    const data = await response.json();


    return res.status(200).json({

      reply:data.choices[0].message.content

    });


  } catch(error){

    console.log(error);

    return res.status(500).json({

      error:error.message

    });

  }

}
