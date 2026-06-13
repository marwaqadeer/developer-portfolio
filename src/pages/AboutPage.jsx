import { useEffect } from "react";
import About from "../components/About";

function AboutPage() {

    useEffect(() => {
        document.title = "About | Marwa Qadeer";
    }, []);

    return <About />;
}

export default AboutPage;