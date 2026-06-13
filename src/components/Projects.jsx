import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects({ projects }) {

    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    const filteredProjects = projects.filter((project) => {

        const matchesFilter = 
          filter === "All"
             ? true 
             : project.techStack.some(
                (tech) =>
                    tech.toLowerCase() ===
                    filter.toLowerCase()
             );

        const matchesSearch = 
          project.name
             .toLowerCase()
             .includes(search.toLowerCase());

        return matchesFilter && matchesSearch;
    });
           
    return (
        <section className="projects" id="projects">

            <h2>My Projects</h2>

            <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => 
                    setSearch(e.target.value)
                }
            />

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