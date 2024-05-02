import React, { useState } from "react";
import Banner from "./Banner";

const CreateDoc = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [rentalOpen, setRentalOpen] = useState(false);

  const onRentalAgreement = () => {
    console.log("xyz");
    setRentalOpen(true);
  };

  return (
    <div>
      <Banner showAppointment={false} />
      <div>
        <div
          style={{
            backgroundColor: "red",

            // height: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "5%",
          }}
        >
          <button onClick={onRentalAgreement}>Rental Agreement</button>
          {rentalOpen && (
            <div>
              <div>
                <span>Name 1</span>
                <input/>
              </div>
              <div>
                <input/>
              </div>
              <div>
                <input/>
              </div>
              <div>
                <input/>
              </div>
            </div>
          )}

          <button>Loan Agreement</button>
          <button>Employment Agreement</button>
          <button>Business Agreement</button>
        </div>
      </div>
    </div>
  );
};

export default CreateDoc;
