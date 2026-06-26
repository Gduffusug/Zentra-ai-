export default function Pricing(){

return(

<section className="pricing">

<h2>Choose Your Plan</h2>

<p className="pricing-sub">
Unlock the full power of Zentra AI
</p>


<div className="price-grid">


<div className="price-card">

<h3>Free</h3>

<h1>$0</h1>

<p>
• Basic AI tools<br/>
• Limited generations<br/>
• Community access
</p>

<button>
Start Free
</button>

</div>



<div className="price-card premium">

<div className="badge">
Popular
</div>

<h3>Pro</h3>

<h1>$9<span>/mo</span></h1>

<p>
• Unlimited AI tools<br/>
• Faster AI responses<br/>
• Premium features
</p>

<button>
Upgrade
</button>

</div>


</div>

</section>

)

}
