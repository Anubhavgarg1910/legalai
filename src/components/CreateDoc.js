import React, { useState } from "react";
import Banner from "./Banner";

const CreateDoc = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };


  return (
    <div>
      <Banner showAppointment={false} />
      <div
        className="lg:h-full lg:max-h-800
        bg-gradient-to-t from-[#e0c8ac] to-[#f8f3ec]"
      >
        <div>
          <div>
            <input type="file" onChange={handleFileChange} />
            {/* <button onClick={handleSubmit}>Generate Summary</button> */}
            {summary && <div>{summary}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDoc;
