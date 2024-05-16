import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Testimonials from "./Testimonials";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import BackToTopBtn from "./BackToTopBtn";
import MyFormComponent from "./MyFormComponent";

const HomePage = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log({ error });
    }
  };
  console.log({ data });
  return (
    <div>
      <span>{data?.Date}</span>

      <Banner showAppointment={true} />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
      <BackToTopBtn />
      <MyFormComponent/>
    </div>
  );
};

export default HomePage;
