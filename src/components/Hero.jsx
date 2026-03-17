import {motion} from "framer-motion"
import {portfolioData} from "../data/portfolioData"

export default function Hero(){

return(

<section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 to-pink-500 text-white">

<motion.h1
initial={{opacity:0,y:-50}}
animate={{opacity:1,y:0}}
className="text-5xl font-bold"
>

{portfolioData.name}

</motion.h1>

<p className="text-xl mt-4">
{portfolioData.title}
</p>

</section>

)

}