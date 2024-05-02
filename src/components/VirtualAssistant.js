import React, { useState } from "react";
import Banner from "./Banner";
import Chatbot from "./Chatbot";

const VirtualAssistant = () => {
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
      <div className="lg:h-full lg:max-h-800 ">
        {/* <Chatbot/> */}
      </div>
    </div>
  );
};

export default VirtualAssistant;
