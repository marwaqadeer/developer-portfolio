import { useEffect, useState } from "react";

function ProjectUpdates() {
    const [updates, setUpdates] =
    useState([
        "Portfolio launched"
    ]);

    useEffect(() => {
        const interval =
        setInterval(() => {
            setUpdates((prev) => [
                ...prev.slice(-9),
                `Update received at ${new Date().toLocaleTimeString()}`
            ]);
        }, 15000);

        return () =>
            clearInterval(interval);
    }, []);

    return (
        <section className="updates">
            <h2>Project Updates</h2>

            <ul>
                {updates.map(
                    (update, index) => (
                        <li key={index}>
                            {update}
                        </li>
                    )
                )}
            </ul>
        </section>
    );
}

export default ProjectUpdates;