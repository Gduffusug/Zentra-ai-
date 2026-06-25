export default function Tools(){

  const tools = [
    "AI Chat",
    "AI Writer",
    "AI Image",
    "AI Resume",
    "AI Summary",
    "AI Study Helper"
  ];


  return (

    <section className="tools">

      <h2>
        Powerful AI Tools
      </h2>


      <div className="tool-grid">

        {tools.map((tool,index)=>(

          <div className="tool-card" key={index}>

            <h3>{tool}</h3>

            <p>
              Create faster with Zentra AI
            </p>

          </div>

        ))}

      </div>

    </section>

  )

}
