import { Route, Routes } from "react-router-dom";
import "./App.scss";

// import Particles from "react-particles";
// import { loadFull } from "tsparticles";

import About from "./containers/about";
import Home from "./containers/home";
import Contact from "./containers/contact";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Navbar from "./components/navBar";

// import particles from "./utils.js/particles";
// import { useCallback } from "react";




const App = () => {
// const handleInit = useCallback( async (main) =>{
//   await loadFull(main)
// }, [])

  return (
    <div className="App">

      {/* particles js */}
     
      {/* <Particles id="particles" options={{
    background: {
        color: {
            value: "#1d1d1d",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "var(--selected-theme-main-color)",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}
} init={handleInit} />
       */}

      {/* navbar */}
      <Navbar/>

      {/* main page content */}

      <div className="App__main-page-content">
      <Routes>
        {/* can used component instead of element */}
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
