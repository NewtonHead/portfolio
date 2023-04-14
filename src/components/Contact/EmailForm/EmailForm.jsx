import { useState } from "react";
import emailjs from "emailjs-com";

function EmailForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const params = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        emailjs.send(
            "service_owz79ll",
            "template_dhhhr1p",
            params,
            "YHHoetWCn1YneTOkc"
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-centered">
                <label htmlFor="name" />
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)} 
                    placeholder="What's your name?"
                    className="inputArea oxford-blue-background almond bold" />
            </div>
            <div className="flex flex-centered">
                <label htmlFor="email" />
                <input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Your email"
                    className="inputArea oxford-blue-background almond bold" />
            </div>
            <div className="flex flex-centered">
                <label htmlFor="message" />
                <textarea
                    id="message" 
                    type="text"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)} 
                    placeholder="Your message :)"
                    className="inputArea formParagraph oxford-blue-background almond bold"
                    rows="5" />
            </div>

            <button id="submitButton" className="fadeAnimation ghostButton almond xiketic-background bold" type="submit">Send Email</button>
        </form>
    )
}

export default EmailForm