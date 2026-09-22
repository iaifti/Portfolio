import AOS from "aos";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";
// import Header from './components/Header';
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tools from "./components/tools";
// import Carousel from "./components/carousel";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <Header /> */}
      <Hero />
      {/* <Tran /> */}
      {/* <Carousel /> */}
      <Projects />
      <Experiences />
      <Education />
      <Tools />
      <About />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
};


AOS.init();
AOS.refresh();


export default App;
