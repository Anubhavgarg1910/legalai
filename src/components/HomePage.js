import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Testimonials from "./Testimonials";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import BackToTopBtn from "./BackToTopBtn";

const HomePage = () => {
  return (
    <div>
      <Banner showAppointment={true} />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default HomePage;
