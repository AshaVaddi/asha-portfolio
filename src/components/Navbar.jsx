export default function Navbar(){

return(

<nav className="flex justify-between p-6 bg-white shadow">

<h1 className="text-xl font-bold">
Asha Portfolio
</h1>

<div className="flex gap-6">

<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>

</div>

</nav>

)

}