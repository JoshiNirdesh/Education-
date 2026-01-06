import React from 'react'
import "./contact.css"
import msg_icon from "../../assets/msg-icon.png"

import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a messaage <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional services to our University community. </p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contact@nirdesh.dev</li>
                    <li><img src={phone_icon} alt="" />+977 9741735099</li>
                    <li><img src={location_icon} alt="" />Dhungedhara Nursery Chowk <br />Kathmandu Nepal</li>
                </ul>
            </div>

        </div>
    )
}

export default Contact
