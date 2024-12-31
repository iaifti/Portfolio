import React from "react";
// import Header from './components/Header';
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Tran from "./components/transition";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tools from "./components/tools";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      {/* <Tran /> */}
      <Projects />
      <Experiences />
      {/* <Tools /> */}
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
