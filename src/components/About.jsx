import {portfolioData} from "../data/portfolioData"

export default function About(){

return(

<section id="about" className="p-12">

<h2 className="text-3xl font-bold mb-6">
About Me
</h2>

<p>
{portfolioData.about}
</p>

</section>

)

}