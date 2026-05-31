import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects({ projects }) {

    const [filter, setFilter] = useState("All");

    const filteredProjects =
       filter === "All"
           ? projects
           : projects.filter(project =>
              project.techStack.includes(filter)
           );

    return (
        <section className="projects">

            <h2>My Projects</h2>

            <div className="filter-buttons">

                <button 
                   onClick={() => setFilter("All")}
                >
                    All
                </button>

                <button 
                   onClick={() => setFilter("React")}
                >
                    React
                </button>

                <button 
                   onClick={() => setFilter("JavaScript")}
                >
                    JavaScript
                </button>

            </div>

            <div className="project-grid">
                {filteredProjects.map((project) => (
                    <ProjectCard 
                       key={project.id} 
                       project={project} 
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects; 