import {portfolioData} from "../data/portfolioData"

export default function Certifications(){

return(

<section className="p-12 bg-gray-100">

<h2 className="text-3xl font-bold text-center mb-8">
Certifications
</h2>

<div className="grid md:grid-cols-2 gap-6">

{portfolioData.certifications.map((c,i)=>(

<div key={i} className="card">

<p>
{c}
</p>

</div>

))}

</div>

</section>

)

}