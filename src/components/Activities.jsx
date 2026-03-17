import {portfolioData} from "../data/portfolioData"

export default function Activities(){

return(

<section className="p-12 bg-white">

<h2 className="text-3xl font-bold text-center mb-8">
Activities & Achievements
</h2>

<div className="grid md:grid-cols-2 gap-6">

{portfolioData.activities.map((a,i)=>(

<div key={i} className="card">

<p>
{a}
</p>

</div>

))}

</div>

</section>

)

}