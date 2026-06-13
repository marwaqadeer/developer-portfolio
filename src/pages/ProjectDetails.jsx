import { useParams } from "react-router-dom";

function ProjectDetails({ projects }) {

    const { id } = useParams();

    const project = projects.find(
        (p) => p.id === Number(id)
    );

    if (!project) {
        return <h2>Project Not Found</h2>;
    }

    return (
        <div className="details">

            <h2>{project.name}</h2>

            <img
              src={project.image}
              alt={project.name}
              width="400"
            />

            <p>{project.description}</p>

            <h4>Tech Stack</h4>

            <ul>
                {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>

            <h4>Problem</h4>

            <p>
                Users needed an easier way to manage their workflow.
            </p>

            <h4>Solution</h4>

            <p>
                Built a responsive application using modern frontend technologies.
            </p>

            <h4>Outcome</h4>

            <p>
                Improved usability and organization.
            </p>

            <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
            >
                GitHub Repository
            </a>

        </div>
    );
}

export default ProjectDetails;