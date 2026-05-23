import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="project-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects; 