import { useEffect } from "react";
import Projects from "../components/Projects";

function ProjectsPage({ projects }) {

    useEffect(() => {
        document.title = "Projects | Marwa Qadeer";
    }, []);
    
    return <Projects projects={projects} />;
}

export default ProjectsPage;