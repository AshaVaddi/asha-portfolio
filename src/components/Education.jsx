import {portfolioData} from "../data/portfolioData"

export default function Education(){

return(

<section className="p-12 bg-white">

<h2 className="text-3xl font-bold text-center mb-8">
Education
</h2>

<div className="grid md:grid-cols-2 gap-6">

{portfolioData.education.map((e,i)=>(

<div key={i} className="card">

<h3 className="text-xl font-bold">
{e.degree}
</h3>

<p>{e.college}</p>

<p className="text-gray-500">
{e.year}
</p>

{e.gpa && <p>GPA : {e.gpa}</p>}

{e.score && <p>Score : {e.score}</p>}

</div>

))}

</div>

</section>

)

}