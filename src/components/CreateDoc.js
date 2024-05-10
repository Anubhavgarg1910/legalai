import React, { useState } from "react";
import Banner from "./Banner";
import RentalAgreement from "./RentalAgreement";

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
  const [rentalOpen, setRentalOpen] = useState(false);
  const [rentalTemplate, setRentalTemplate] = useState(false);
  const [rentalData, setRentalData] = useState({});

  const onRentalAgreement = () => {
    setRentalOpen(true);
  };

  const setData = (key, val) => {
    const tempData = { ...rentalData };
    tempData[key] = val;
    setRentalData(tempData);
  };
  const handleSubmit = () => {
    setRentalOpen(false);
    setRentalTemplate(true);
  };

  return (
    <div>
      <Banner showAppointment={false} />
      <div>
        <div
          style={{
            backgroundColor: "red",
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
                  value={rentalData[FormKeys.date]}
                  onChange={(e) => {
                    setData([FormKeys.date], e.target.value);
                  }}
                />
              </div>
              <div>
                <span>LandLord Name</span>
                <input
                  value={rentalData[FormKeys.landlordName]}
                  onChange={(e) => {
                    setData([FormKeys.landlordName], e.target.value);
                  }}
                />
              </div>
              <div>
                <span>Landlord Address</span>
                <input
                  value={rentalData[FormKeys.landlordAddress]}
                  onChange={(e) => {
                    setData([FormKeys.landlordAddress], e.target.value);
                  }}
                />
              </div>
              <div>
                <span>Tenant Name</span>
                <input
                  value={rentalData[FormKeys.tenantName]}
                  onChange={(e) => {
                    setData([FormKeys.tenantName], e.target.value);
                  }}
                />
              </div>
              <div>
                <span>Tenant Address</span>
                <input
                  value={rentalData[FormKeys.tenantAddress]}
                  onChange={(e) => {
                    setData([FormKeys.tenantAddress], e.target.value);
                  }}
                />
              </div>
              <div>
                <span>Rent</span>
                <input
                  value={rentalData[FormKeys.rent]}
                  onChange={(e) => {
                    setData([FormKeys.rent], e.target.value);
                  }}
                />
              </div>

              <div onClick={handleSubmit}>Submit</div>
            </div>
          )}

          {rentalTemplate && rentalData && (
            <RentalAgreement rentalAgreementData={rentalData} />
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
