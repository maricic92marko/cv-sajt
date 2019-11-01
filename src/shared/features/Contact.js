import React from 'react'
import FetchApi from '../api';

export default function Contact() {

    function handleClick(){

        let Firstname = document.getElementById('fName').value
        let Lastname = document.getElementById('lName').value
        let email = document.getElementById('eMail').value
        let message = document.getElementById('Message').value

        let eMail={
            Firstname: Firstname,
            Lastname: Lastname,
            email: email,
            message: message,
      }

        FetchApi('POST', 'http://localhost:3000/send-message',{
            eMail:eMail
    }).then(json =>{
      if (json.errors) {
        alert('something went wrong!')
      }      
        alert('Message sent.')
        document.location.href ='/'

    })
    }

    return (
        <div id='Contact' className="Contact">
            <p>Contact Me!</p>
            <div className="contactForm">
                <p>First name</p>
                <input id="fName" className="fName"></input>
                <p>Last name</p>
                <input id="lName" className="lName"></input>
                <p>Email</p>
                <input id="eMail" className="eMail"></input>
                <p>Message</p>
                <textarea id="Message" className="Message"></textarea>
                <button onClick={handleClick}>Send message</button>
            </div>
        </div>
    )
}
