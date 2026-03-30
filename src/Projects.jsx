import prj from "./prj"

export default function Projects(){
    
    
    return(
<>
    <h1 id="Projects">Projects<span>.</span></h1>
<section className="ProjectFiles">
{prj.map(project => (
    <div className="project">  
    <i className={project.cls}></i>
    <h1>{project.name}</h1>
    <a href={project.link}><i className={project.next}></i></a>
    </div>
))}


</section>


</>
    )
}