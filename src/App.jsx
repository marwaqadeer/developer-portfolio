import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const welcomeMessage = "Welcome to my developer portfolio built with React!";

  const profileData = {
    name: "Marwa Qadeer",
    title: "BBA Student & Aspiring Frontend Developer",
    bio: "I enjoy building responsive and user-friendly websites using modern web technologies. I am passionate about learning new skills and improving my development abilities every day.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  };

  const projects = [
    {
      id: 1,
      name: "Freelance Invoice App",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600",
      description: "A responsive invoice management app for freelancers to manage clients and invoices.",
      link: "https://github.com/marwaqadeer/freelance-invoice-app",
      techStack: ["HTML", "CSS", "JavaScript"],
      featured: true,
    },
    {
      id: 2, 
      name: "Weather Dashboard",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=600",
      description: "A weather application using API integration to display live weather updates.",
      link: "https://github.com/marwaqadeer/weather-dashboard",
      techStack: ["React", "CSS", "API"],
      featured: false,
    },
    {
      id: 3, 
      name: "Task Manager",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=600",
      description: "A productivity app for managing daily tasks and improving organization.",
      link: "https://github.com/marwaqadeer/task-manager",
      techStack: ["React", "JavaScript", "CSS"],
      featured: true,
    },
  ];

  return (
    <div>
      <Navbar />

      <Header message={"Welcome to my portfolio"} />

      <Profile 
      name={profileData.name}
      title={profileData.title}
      bio={profileData.bio}
      image={profileData.image}
      />

      <About />

      <Projects projects={projects} />

      <Footer />
    </div>
  );
}

export default App; 