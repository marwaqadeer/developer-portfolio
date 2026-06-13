import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import FeedbackWall from "../components/FeedbackWall";

function ContactPage() {

    useEffect(() => {
        document.title = "Contact | Marwa Qadeer";
    }, []);
    return (
        <section>
          <ContactForm />
          <FeedbackWall />
        </section>
    );
}

export default ContactPage;