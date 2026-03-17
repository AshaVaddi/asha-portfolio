import {portfolioData} from "../data/portfolioData"

export default function Projects(){

return(

<section id="projects" className="p-12">

<h2 className="text-3xl font-bold text-center mb-8">
Projects
</h2>

<div className="grid md:grid-cols-2 gap-8">

{portfolioData.projects.map((p,index)=>(

<div key={index} className="card">

<h3 className="text-xl font-bold">
{p.title}
</h3>

<p>{p.desc}</p>

<p className="text-sm text-gray-500 mt-2">
{p.tech}
</p>

</div>

))}

</div>

</section>

)

}