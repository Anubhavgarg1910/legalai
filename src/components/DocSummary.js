import React, { useState } from "react";
import Banner from "./Banner";

const DocSummary = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      // const response = await axios.post(
      //   "http://localhost:5000/summarize",
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );
      setSummary("response.data.summary");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
    <Banner showAppointment={false} />
    <div
      className="lg:h-full lg:max-h-800 
      "
    >
      <div className="flex flex-col items-center justify-center h-full mb-8 pt-[100px] ">
        <div className="flex mb-4 gap-x-[60px] p-5 ">
          <input
            type="file"
            onChange={handleFileChange}
            className="form-control"
          />
          <button
            onClick={handleSubmit}
            className="btn bg-primary hover:bg-primary-hover transition-all"
          >
            Generate Summary
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
      <textarea
        className="  w-full max-w-md h-[250px] p-2 border border-gray-300 rounded mb-[40px]"
      >
        {summary && <div>{summary}</div>}
      </textarea>
      </div>
    </div>
  </div>
  );
};

export default DocSummary;
