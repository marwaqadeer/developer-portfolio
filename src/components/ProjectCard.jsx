import TechBadge from "./TechBadge";

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            {project.featured && (
                <span className="featured-badge">Featured</span>
            )}

            <img src={project.image} alt={project.name} />

            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <div className="tech-container">
                {project.techStack.map((tech, index) => (
                    <TechBadge key={index} tech={tech} />
                ))}
            </div>

            <a href={project.link} target="_blank" rel="noreferrer">
                View Project
            </a>
        </div>
    );
}

export default ProjectCard; 