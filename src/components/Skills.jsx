import {portfolioData} from "../data/portfolioData"

export default function Skills(){

const skills=portfolioData.skills

return(

<section id="skills" className="p-12 bg-gray-100">

<h2 className="text-3xl font-bold mb-8 text-center">
Skills
</h2>

<div className="grid md:grid-cols-3 gap-6">

<div className="card">
<h3 className="font-bold">Languages</h3>
<p>{skills.languages.join(", ")}</p>
</div>

<div className="card">
<h3 className="font-bold">Frameworks</h3>
<p>{skills.frameworks.join(", ")}</p>
</div>

<div className="card">
<h3 className="font-bold">Tools</h3>
<p>{skills.tools.join(", ")}</p>
</div>

</div>

</section>

)

}