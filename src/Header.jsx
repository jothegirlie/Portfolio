export default function Header(){
   
   const scroolTo = (id) =>{
    document.getElementById(id).scrollIntoView({behavior:"smooth"})
   }
   
    return(
<header>
<h1>Johanna <span>/</span></h1>
<nav>
<h2 onClick={()=> scroolTo("about")}>About</h2>
<h2 onClick={()=> scroolTo("Projects")}>Projects</h2>
<h2 onClick={() => scroolTo("Contact")}>Contact</h2>
</nav>

</header>

    )
}