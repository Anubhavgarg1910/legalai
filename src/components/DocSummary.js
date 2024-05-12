import React, { useState } from "react";
import Banner from "./Banner";
import axios from "axios";

const DocSummary = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const [formData, setFormData] = useState({
    text: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://newbackendlegal.onrender.com/analyse",
        formData
      );
      // setFormData({
      //   text: "",
      // });
      setIsDisabled(true);

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

  return (
    <div>
      <Banner showAppointment={false} />
      <div
        className="lg:h-full lg:max-h-800 
      "
      >
        <div className="flex flex-col items-center justify-center h-full mb-8 pt-[100px] ">
          <div className="flex flex-col mb-4 gap-x-[60px] p-5 w-full justify-center items-center">
            {/* <input
            type="file"
            onChange={handleFileChange}
            className="form-control"
          /> */}
            <textarea
              value={formData.text}
              onChange={handleInputChange}
              className="  w-[1100px] h-[150px] p-2 border rounded-md border-gray-300 border-spacing-x-10  mb-[40px]"
            ></textarea>
            <button
              // onClick={handleSubmit}
              onClick={handleSubmit}
              disabled={isDisabled}
              className="btn bg-primary hover:bg-primary-hover  rounded-md transition-all w-[300px]"
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

export default DocSummary;
