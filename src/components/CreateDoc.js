import React, { useState } from "react";
import Banner from "./Banner";

const FormKeys = {
  date: "date",
  landlordName: "landlordName",
  landlordAddress: "landlordAddress",
  tenantName: "tenantName",
  tenantAddress: "tenantAddress",
  landlordAddress: "landlordAddress",
  rent: "rent",
};

const CreateDoc = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [rentalOpen, setRentalOpen] = useState(false);
  const [myTemplate, setMyTemplate] = useState(false);
  const [formData, setFormData] = useState({});

  const onRentalAgreement = () => {
    setRentalOpen(true);
  };

  const setData = (key, val) => {
    const tempData = { ...formData };
    tempData[key] = val;
    setFormData(tempData);
  };
  const handleSubmit = () => {
    console.log(formData);
    setRentalOpen(false);
    setMyTemplate(true);
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
                <span>Date</span>
                <input
                  value={formData[FormKeys.date]}
                  onChange={(e) => {
                    setData([FormKeys.date], e.target.value);
                  }}
                />
              </div>
              <div>
                <span>LandLord Name</span>
                <input
                  value={formData[FormKeys.landlordName]}
                  onChange={(e) => {
                    setData([FormKeys.landlordName], e.target.value);
                  }}
                />
              </div>
              <div>
                <span>Landlord Address</span>
                <input
                  value={formData[FormKeys.landlordAddress]}
                  onChange={(e) => {
                    setData([FormKeys.landlordAddress], e.target.value);
                  }}
                />
              </div>
              <div>
                <span>Tenant Name</span>
                <input
                  value={formData[FormKeys.tenantName]}
                  onChange={(e) => {
                    setData([FormKeys.tenantName], e.target.value);
                  }}
                />
              </div>
              <div>
                <span>Tenant Address</span>
                <input
                  value={formData[FormKeys.tenantAddress]}
                  onChange={(e) => {
                    setData([FormKeys.tenantAddress], e.target.value);
                  }}
                />
              </div>
              <div>
                <span>Rent</span>
                <input
                  value={formData[FormKeys.rent]}
                  onChange={(e) => {
                    setData([FormKeys.rent], e.target.value);
                  }}
                />
              </div>

              <div onClick={handleSubmit}>Submit</div>
            </div>
          )}

          {myTemplate && formData && (
            <div>
              This Rental Agreement is made and entered into on {formData?.date}
              , by and between: Landlord:
              {formData?.landlordName}, residing at
              {formData?.landlordAddress} and Tenant: {formData?.tenantName},
              residing at {formData?.tenantAddress}Property: The Landlord agrees to rent to
              the Tenant the premises located at {formData?.landlordAddress} for
              residential purposes only. Term: The term of this Agreement shall
              begin on {formData?.date} and shall continue on a month-to-month
              basis until terminated as provided herein. Rent: The Tenant shall
              pay to the Landlord a monthly rent of {formData?.rent} to be paid
              on the 5th of each month. Maintenance: The Landlord shall be
              responsible for maintaining the Property in a habitable condition
              and shall make any necessary repairs promptly. Termination: Either
              party may terminate this Agreement upon giving written notice to
              the other party at least 30 days prior to the intended date of
              termination. Governing Law: This Agreement shall be governed by
              and construed in accordance with the laws of India. Entire
              Agreement: This Agreement constitutes the entire understanding and
              agreement between the parties with respect to the subject matter
              hereof and supersedes all prior agreements and understandings. IN
              WITNESS WHEREOF, the parties hereto have executed this Agreement
              as of the date first above written.
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
