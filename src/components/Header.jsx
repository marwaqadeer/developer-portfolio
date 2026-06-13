import { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Header({message}) {
    const quotes = [
        "Code is like humor. When you have to explain it, it’s bad.",
        "Success is built one line of code at a time.",
        "Every great developer starts as a beginner.",
    ];

    const [randomQuote] = useState (() => {
        return quotes[
            Math.floor(
                Math.random() * quotes.length
            )
        ];
    });

    return (
        <header className="header" id="home">

            <h1>
                <Typewriter 
                   options={{
                    strings: [
                        "Hello, I'm Marwa 👋",
                        "Frontend Developer",
                        "React Learner"
                    ],
                    autoStart: true,
                    loop: true,
                   }}
                />
            </h1>

            <p>{message}</p>

            <p className="hero-subtitle">
                React Developer passionate about building
                responsive, accessible, and user-friendly
                web applications.
            </p>

            <blockquote>
                "{randomQuote}"
            </blockquote>

            <div className="hero-buttons">

                <Link to="/projects">
                    View Projects
                </Link>

                <Link to="/contact">
                    Let's Connect
                </Link>

            </div>
            
        </header>
    );
}

export default Header;