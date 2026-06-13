import { useState, useEffect } from "react";
import LivePreview from "./LivePreview";
import confetti from "canvas-confetti";

function ContactForm() {

    const [formData, setFormData] = useState(() => {
        const saved = 
        localStorage.getItem("contactForm");

        return saved
          ? JSON.parse(saved)
          : {
            name: "",
            email: "",
            message: ""
          };
    });

    const [errors, setErrors] = useState({});
    const [emailError, setEmailError] = useState("");
    const [success, setSuccess] = useState(false);

    const savedData = !!localStorage.getItem("contactForm");

    useEffect(() => {
        localStorage.setItem(
            "contactForm",
            JSON.stringify(formData)
        );
    }, [formData]);

    useEffect(() => {
        const timer =
          setTimeout(() => {
            if (
                formData.email &&
                !/^\S+@\S+\.\S+$/.test(
                    formData.email
                )
            ) {
                setEmailError(
                    "Invalid email format"
                );
            } else {
                setEmailError("");
            }
          }, 400);

          return () => 
            clearTimeout(timer);

    }, [formData.email]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:
            e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.name)
            newErrors.name = 
              "Name is required";

        if (!formData.email)
            newErrors.email =
              "Email is required";

        if (!formData.message)
            newErrors.message = 
              "Message is required";

        setErrors(newErrors);

        if (
            Object.keys(newErrors)
              .length === 0 &&
            !emailError 
        ) {

            setSuccess(true);

            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });

            localStorage.removeItem(
                "contactForm"
            );

            setFormData({
                name: "",
                email: "",
                message: ""
            });

            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        }
    };

    return (
        <section className="contact" id="contact">

            <h2>Contact Me</h2>

            <p>
                I'm open to internships, collaborations,
                and freelance opportunities.
            </p>

            {savedData && (
                <p className="saved-hint">
                    You have unsent message data saved!
                </p>
            )}

            {success && (
                <div className="success-toast">
                    Message Sent Successfully!
                </div>
            )}

            <form onSubmit={handleSubmit}>

                <label htmlFor="name">
                    Name
                </label>

                <input 
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />

                {errors.name && (
                    <p className="error">
                        {errors.name}
                    </p>
                )}

                <label htmlFor="email">
                    Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  />

                  {errors.email && (
                    <p className="error">
                        {errors.email}
                    </p>
                  )}

                  {emailError && (
                    <p className="error">
                        {emailError}
                    </p>
                  )}

                  <label htmlFor="message">
                       Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  />

                  {errors.message && (
                    <p className="error">
                        {errors.message}
                    </p>
                  )}

                  <button type="submit">
                    Send Message
                  </button>

            </form>

            <LivePreview 
                name={formData.name}
                email={formData.email}
                message={formData.message}
            />
            
        </section>
    );
}

export default ContactForm;