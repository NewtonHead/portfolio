import EmailForm from "./EmailForm/EmailForm"

function Contact() {
    return (
        <section id="contact" className="oxford-blue-background">
            <h2 className="almond text-centered bold">Or you can send me an email</h2>
            <EmailForm />
        </section>
    )
}

export default Contact