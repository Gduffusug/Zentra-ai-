<div className="cards">

  {[
    {
      icon:"🤖",
      title:"AI Chat",
      desc:"Chat with powerful AI.",
      active:true
    },

    {
      icon:"📝",
      title:"Resume Builder",
      desc:"Create ATS-friendly resumes."
    },

    {
      icon:"📄",
      title:"PDF Tools",
      desc:"Merge, split and convert PDFs."
    },

    {
      icon:"🔳",
      title:"QR Generator",
      desc:"Generate beautiful QR codes."
    },

    {
      icon:"🔑",
      title:"Password Generator",
      desc:"Create secure passwords."
    },

    {
      icon:"📝",
      title:"Text Tools",
      desc:"Useful writing utilities."
    },

    {
      icon:"🖼️",
      title:"Image Converter",
      desc:"Convert image formats."
    },

    {
      icon:"🗜️",
      title:"Image Compressor",
      desc:"Compress images instantly."
    },

    {
      icon:"🎂",
      title:"Age Calculator",
      desc:"Calculate your exact age."
    },

    {
      icon:"💰",
      title:"EMI Calculator",
      desc:"Calculate monthly EMI."
    },

    {
      icon:"🧾",
      title:"GST Calculator",
      desc:"GST calculations made easy."
    },

    {
      icon:"📊",
      title:"Word Counter",
      desc:"Count words and characters."
    },

    {
      icon:"📧",
      title:"AI Email Writer",
      desc:"Generate professional emails."
    },

    {
      icon:"📄",
      title:"AI Summarizer",
      desc:"Summarize long documents."
    },

    {
      icon:"🌍",
      title:"AI Translator",
      desc:"Translate into multiple languages."
    }

  ].map((tool,index)=>(

    <div

      key={index}

      className={`card ${tool.active ? "active-card" : ""}`}

      onClick={()=>{
        if(tool.title==="AI Chat"){
          navigate("/chat");
        }
      }}

    >

      <div className="emoji">

        {tool.icon}

      </div>

      <h3>

        {tool.title}

      </h3>

      <p>

        {tool.desc}

      </p>

      {!tool.active && (

        <span className="coming-soon">

          Coming Soon

        </span>

      )}

    </div>

  ))}

</div>
