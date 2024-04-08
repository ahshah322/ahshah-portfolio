import { React } from "react";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/banner/Banner.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Resume from "./components/resume/Resume.jsx";
import Contact from "./components/contact/Contact.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import UseScrollToTop from "./hooks/useScrollToTop";

function App() {
  return (
    <>
      <div className="dark:bg-bodyColor-dark bg-bodyColor-light font-bodyFont">
        <Navbar />
        <div className="container mx-auto">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
          <UseScrollToTop />
        </div>
      </div>
    </>
  );
}

export default App;
