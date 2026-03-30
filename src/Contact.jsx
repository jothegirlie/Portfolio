import cts from "./contact"

export default function Contact(){


    return(
<>
<h1 id="Contact">Contact<span>.</span></h1>
<section className="Contacts">
{cts.map(contact => (
    <div className="ctc">
<i className={contact.icon}></i>
<h3>{contact.name}</h3>
<a href={contact.link}><i className={contact.open} id="open"></i></a>
    </div>
))}

</section>

</>


    )
}