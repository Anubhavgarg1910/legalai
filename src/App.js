import React from "react";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";

const App = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
      <BackToTopBtn />

      <div></div>
    </div>
  );
};

export default App;
