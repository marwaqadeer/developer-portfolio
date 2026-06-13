import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ProjectUpdates from "./components/ProjectUpdates";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

function App() {
  
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {

      const total = 
        document.documentElement.scrollHeight - 
        window.innerHeight;

      const current = window.scrollY;

      const percent = 
          (current / total) * 100;
        
        setScroll(percent);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const projects = [
    {
      id: 1,
      name: "Freelance Invoice App",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600",
      description: "A responsive invoice management app for freelancers to manage clients and invoices.",
      link: "https://github.com/marwaqadeer/freelance-invoice-app",
      techStack: ["HTML", "CSS", "JavaScript"],
      status: "featured",
    },
    {
      id: 2, 
      name: "Weather Dashboard",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=600",
      description: "A weather application using API integration to display live weather updates.",
      link: "https://github.com/marwaqadeer/weather-dashboard",
      techStack: ["React", "CSS", "API"],
      status: "completed",
    },
    {
      id: 3, 
      name: "Task Manager",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=600",
      description: "A productivity app for managing daily tasks and improving organization.",
      link: "https://github.com/marwaqadeer/task-manager",
      techStack: ["React", "JavaScript", "CSS"],
      status: "progress",
    },
  ];

  return (
    <div>

      <div 
        className="scroll-bar"
        style={{
          width: `${scroll}%`
        }}
    />
    
      <Navbar />

      <ThemeToggle />
      
    <main>
      <Routes>
        
        <Route 
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route 
          path="/projects"
          element={
            <ProjectsPage
              projects={projects}
            />
          }
        />

        <Route 
          path="/projects/:id"
          element={
            <ProjectDetails
              projects={projects}
            />
          }
        />

        <Route 
          path="/contact"
          element={<ContactPage />}
        />

        <Route 
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </main>

      <ProjectUpdates />

      <Footer />
      
    </div>
  );
}

export default App; 