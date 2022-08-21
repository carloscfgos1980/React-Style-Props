import React from "react"

/*
function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}
*/

// Same as above but then we have to change <img src={props.imgUrl}/> for <img src={props.contact.imgUrl} />. Since we created an object to pass the data.
function ContactCard(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl} />
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard