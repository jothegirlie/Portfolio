import React from "react"
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"

export default function App(){

  return(
<>
<Header/>
<section className="Profile">
<Home/>
<About/>
<Projects/>
<Contact/>
</section>
</>

  )
}