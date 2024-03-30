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
        bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]"
      >
        <div>
          <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Generate Summary</button>
            {summary && <div>{summary}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocSummary;
