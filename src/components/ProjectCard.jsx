import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import TechBadge from "./TechBadge";
import FavoritesContext from "../context/FavoritesContext";

function ProjectCard({ project }) {

    const [showDetails, setShowDetails] = useState(false);

    const { favorites, setFavorites } = useContext(FavoritesContext);

    const toggleFavorite = () => {
        if (favorites.includes(project.id)) {
            setFavorites(
                favorites.filter(id => id !== project.id)
            );
        } else {
            setFavorites([
                ...favorites,
                project.id
            ]);
        }
    };

    return (
        <div className="project-card">
            
            {project.featured && (
                <span className="featured-badge">
                    {project.featured ? "Featured" : "Project"}
                </span>
            )}

            <img 
               src={project.image || "https://via.placeholder.com/400"} 
               alt={project.name}
            />

            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <button onClick={() =>
                setShowDetails(!showDetails)
            }
            >
                {showDetails
                    ? "Hide Details"
                    : "View Details"}
            </button>

            <button onClick={toggleFavorite}>
                {favorites.includes(project.id)
                  ? "⭐ Favorited"
                  : "⭐ Favorite"
                }
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

                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{
                                width: project.featured ? "90%" : "60%"
                            }}
                        />
                </div>
            </div>
            )}

            <Link to={`/projects/${project.id}`}>
                View Project
            </Link>

            <a
               href={project.link}
               target="_blank"
               rel="noreferrer"
            >
                View Code
            </a>

        </div>
    );
}

export default ProjectCard; 