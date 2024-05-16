import React, { useState } from "react";
import Banner from "./Banner";
import axios from "axios";

const VirtualAssistant = () => {
  const [summary, setSummary] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const [formData, setFormData] = useState({
    query: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://assitant-ai.onrender.com/query",
        formData
      );
      // setIsDisabled(true);
      console.log("Response from Flask API:", response?.data?.response);
      setSummary(response?.data?.response);
    } catch (error) {
      console.error("Error sending data to Flask API:", error);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      query: value,
    });
  };
  console.log({ summary });

  return (
    <div>
      <Banner showAppointment={false} />
      {/* <div
        className="lg:h-full lg:max-h-800 
    "
      >
        <div className="flex flex-col items-center justify-center h-full mb-8 pt-[100px] ">
          <div className="flex mb-4 gap-x-[60px] p-5 ">
           
            <textarea
              value={formData.text}
              onChange={handleInputChange}
              className="  w-full max-w-md h-[250px] p-2 border border-gray-300 rounded mb-[40px]"
            ></textarea>
            <button
              // onClick={handleSubmit}
              onClick={handleSubmit}
              disabled={isDisabled}
              className="btn bg-primary hover:bg-primary-hover transition-all"
            >
              Generate Summary
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pb-5">
          <div>{summary && summary}</div>

        </div>
      </div> */}
      <div
        className="lg:h-full lg:max-h-800 
      "
      >
        <div className="flex flex-col items-center justify-center h-full mb-8 pt-[60px] ">
          <div className="flex flex-col mb-2 gap-x-[60px] p-5 w-full justify-center items-center">
            <div className="text-2xl mb-1 font-primary font-bold text-center">
              You can ask any question here
            </div>
            <textarea
              value={formData.text}
              onChange={handleInputChange}
              className="  w-[500px] h-[120px] p-2 border rounded-md border-gray-300 border-spacing-x-10  mb-[40px]"
            ></textarea>
            <button
              onClick={handleSubmit}
              disabled={isDisabled}
              className="btn bg-primary hover:bg-primary-hover  rounded-md transition-all w-[200px]"
            >
              Send
            </button>
          </div>
        </div>
        {summary && (
          <div className="flex flex-col items-center justify-center pb-5 mb-32">
            <div className=" w-[500px] min-h-[150px] rounded-md  p-4 border-2 border-green-200">
              {summary}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualAssistant;
