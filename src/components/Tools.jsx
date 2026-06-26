const tools = [
  {
    name: "AI Chat",
    desc: "Chat with advanced AI assistant",
    image: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
  },
  {
    name: "AI Writer",
    desc: "Create content faster with AI",
    image: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
  },
  {
    name: "AI Image",
    desc: "Generate amazing AI images",
    image: "https://cdn-icons-png.flaticon.com/512/11498/11498758.png"
  },
  {
    name: "AI Resume",
    desc: "Build professional resumes",
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png"
  },
  {
    name: "AI Summary",
    desc: "Summarize anything instantly",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  }
];


export default function Tools(){

return(
<section className="tools">

<h2>Powerful AI Tools</h2>

<div className="tool-grid">

{tools.map((tool,index)=>(

<div className="tool-card" key={index}>

<img src={tool.image}/>

<div>
<h3>{tool.name}</h3>
<p>{tool.desc}</p>
</div>

</div>

))}

</div>

</section>
)

}
