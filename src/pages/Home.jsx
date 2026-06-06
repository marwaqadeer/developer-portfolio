import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";

function Home() {
    return (
        <>
          <Header 
            message="Welcome to my developer portfolio built with React!"
          />

          <Profile 
            name="Marwa Qadeer"
            title="BBA Student & Aspiring Fronted Developer"
            bio="Learning React and fronted development."
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
          />

          <Skills />
        </>
    );
}

export default Home;
