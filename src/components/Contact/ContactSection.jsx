import "./ContactSection.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactSection = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9je0nph', 'template_hh9aiod', form.current, 'zwdFIjwOvLU2Migi-')
            .then( (result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }


    return (
        <div className={"contact-container"} id={"contact"}>
            <h1>Want to know more?</h1>
            <div className={"wrapper"}>
                <form ref={form} onSubmit={sendEmail}>

                    <div className={"field"}>
                        <input type="text" name="user_name"
                               placeholder={"Who are you?"}
                        />
                        <label>Name</label>
                    </div>
                    <div className={"field"}>
                        <input type="text" name="user_email"
                               placeholder={"name@domain.com"}
                        />
                        <label>Email</label>
                    </div>
                    <div className={"field"}>
                        <textarea id="msg" rows="4" name="message"
                                  placeholder={"Your message"}
                        />
                        <label>Message</label>
                    </div>
                    <div className={"test"}><input type="submit" value="Send" /></div>


                </form>
            </div>
        </div>
    )
}