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

        </div>
    );
}

export default ProjectDetails;