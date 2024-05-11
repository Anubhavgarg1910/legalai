import React, { useState } from "react";
import Banner from "./Banner";
import axios from "axios";

const VirtualAssistant = () => {
  const [summary, setSummary] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const [formData, setFormData] = useState({
    text: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://newbackendlegal.onrender.com/assistant",
        formData
      );
      // setIsDisabled(true);
      console.log("Response from Flask API:", response.data);
      setSummary(response?.data?.summary);
    } catch (error) {
      console.error("Error sending data to Flask API:", error);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      text: value,
    });
  };
  console.log({ summary });

  return (
    <div>
      <Banner showAppointment={false} />
      <div
        className="lg:h-full lg:max-h-800 
    "
      >
        <div className="flex flex-col items-center justify-center h-full mb-8 pt-[100px] ">
          <div className="flex mb-4 gap-x-[60px] p-5 ">
            {/* <input
          type="file"
          onChange={handleFileChange}
          className="form-control"
        /> */}
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

          {/* <textarea
      className="  w-full max-w-md h-[250px] p-2 border border-gray-300 rounded mb-[40px]"
    >
      {summary && <div>{summary}</div>}
    </textarea> */}
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistant;
