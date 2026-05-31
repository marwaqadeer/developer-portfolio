function Skills() {
    const skills = [
        {
            name: "HTML",
            level: 90,
            fact: "Foundation of websites"
        },
        {
            name: "CSS",
            level: 85,
            fact: "Make websites beautiful"
        },
        {
            name: "JavaScript",
            level: 80,
            fact: "Adds interactivity"
        },
        {
            name: "React",
            level: 75,
            fact: "My favorite framework"
        }
    ];

    return (
        <section className="skills">
            <h2>My Skills</h2>

            {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill"
                  title={skill.fact}
                >
                    <p>{skill.name}</p>

                    <div className="progress-bar">
                        <div
                          className="progress"
                          style={{
                            width: `${skill.level}%`,
                          }}
                        ></div>
                    </div>
                  </div>
            ))}
        </section>
    );
}

export default Skills;