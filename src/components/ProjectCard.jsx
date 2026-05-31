import { useState } from "react";
import TechBadge from "./TechBadge";

function ProjectCard({ project }) {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="project-card">
            
            {project.featured && (
                <span className="featured-badge">Featured</span>
            )}

            <img src={project.image} alt={project.name} />

            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <button onClick={() =>
                setShowDetails(!showDetails)
            }
            >
                {showDetails
                    ? "Hide Details"
                    : "view Details"}
            </button>

            {showDetails && (
                <div className="project-details">
                    <p>
                        Technologies Used:
                    </p>

                    <div className="tech-container">
                        {project.techStack.map(
                            (tech, index) => (
                                <TechBadge 
                                   key={index}
                                   tech={tech}
                                />
                            )
                        )}
                    </div>
                </div>
            )}

            <a
               href={project.link}
               target="_blank"
               rel="noreferrer"
            >
                View Project
            </a>

        </div>
    );
}

export default ProjectCard; 