export default function Tools(){

const tools=[
{
name:"AI Chat",
img:"https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
},
{
name:"AI Writer",
img:"https://cdn-icons-png.flaticon.com/512/906/906334.png"
},
{
name:"AI Image",
img:"https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
},
{
name:"AI Resume",
img:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
},
{
name:"AI Summary",
img:"https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
},
{
name:"AI Study",
img:"https://cdn-icons-png.flaticon.com/512/3976/3976625.png"
}
];


return(

<section className="tools">

<h2>Powerful AI Tools</h2>

<div className="tool-grid">

{tools.map((tool,index)=>(

<div className="tool-card" key={index}>

<img src={tool.img}/>

<h3>{tool.name}</h3>

<p>Create faster with Zentra AI</p>

</div>

))}

</div>

</section>

)

}
