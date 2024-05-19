import React from "react";
import Header from "./Header";
import Appointment from "./Appointment";
import LawyerImage from "../assets/img/lawyer_banner.png";

const Banner = ({ showAppointment }) => {
  return (
    <section
      id="home"
      className="lg:h-full lg:max-h-800
        bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]"
    >
      <Header />
      <div
        className="container mx-auto h-full lg: flex
        pt-32"
      >
        {/* left side */}
        <div className="text-center mx-auto h-full lg:text-left px-8 md:p-0">
          <h1 className="font-primary font-black text-6xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]">
            Your Problem <br /> <span className=" text-">Our Goal.</span>
          </h1>
          <p className="max-w-sm mx-auto lg:mx-0 mb-[50px] lg:max-w-[540px]">
            Legal I uses emerging technologies like machine learning and Artificial Intelligence 
            to provide better experience to the users.
          </p>
          {/* Appointment */}
          <div className="lg:absolute mx-auto max-w-[445px] lg:mx-0">
            {showAppointment ? <Appointment /> : null}
          </div>
        </div>
        {/* Right Side */}
        <div className="hidden flex-1 lg:flex lg:flex-col items-end">
          <img src={LawyerImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
