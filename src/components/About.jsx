import { useState } from "react";

function About () {
    const [showMore, setShowMore] = useState(false);

    const [emoji, setEmoji] = useState("😊");

    const hobbies = [
        "Reading books",
        "Learning new technologies",
        "Watching documentaries",
        "Traveling",
        "Photography",
    ];

    return (
        <section className="about" id="about">
            <h2>About Me</h2>

            <p>I am a BBA student who is also interested in learning coding. I enjoy exploring how websites and applications are built and I am currently improving my skills in frontend development. My goal is to become more confident in programming and build modern, responsive web applications using React.</p>

            {/* Avatar Reaction Section */}
            <div className="avatar-section">
                <h3>{emoji}</h3>

                <button onClick={() => setEmoji("😊")}>
                    Happy
                </button>

                <button onClick={() => setEmoji("😎")}>
                    Cool
                </button>

                <button onClick={() => setEmoji("🤩")}>
                    Excited 
                </button>
            </div>

            <h3>My Hobbies</h3>

            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>

            {showMore && (
                <p className="extra-text">
                    I love exploring new programming technologies and improving my problem-solving skills through projects and practice.
                </p>
            )}

            <button onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show Less" : "Show More"}
            </button>
        </section>
    );
}

export default About; 