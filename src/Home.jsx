import profilePic from "./profilePicture.jpg"



export default function Home(){

    return(
        <>
<main>
    <div className="profileBox">
<img src={profilePic} alt="Profile picture of the creator" />
<span className="tag">&lt;/&gt;</span>
</div>

<div className="Description">
    <h1>Hi, I'm Johanna<span>.</span></h1>
    <h1 id="Occupation">Frontend Dev</h1>
    
<div className="icons">

            <i class="devicon-html5-plain"></i>
            <i class="devicon-css3-plain"></i>  
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-figma-plain"></i>
            <i class="devicon-git-plain"></i>
            <i class="devicon-react-original"></i>
                
</div>
</div>

</main>

<div className="Tools">
    <hr />
<h3> / PROGRAMMING / DEVELOPMENT / HTML / CSS / JAVASCRIPT / REACT / FIGMA / GIT </h3>
<hr />
</div>
</>
    )
}