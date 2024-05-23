import React from "react";

const RentalAgreement = ({ rentalAgreementData }) => {
  return (
    <div
      style={{
        fontFamily: "Courier Prime, monospace",
        fontWeight: 400,
      }}
    >
      This Rental Agreement is made and entered into on{" "}
      {rentalAgreementData?.date} <br />
      by and between: <br />
      Landlord: {rentalAgreementData?.landlordName}, residing at{" "}
      {rentalAgreementData?.landlordAddress} <br />
      Tenant: {rentalAgreementData?.tenantName}, residing at{" "}
      {rentalAgreementData?.tenantAddress} <br /> Property: The Landlord agrees
      to rent to the Tenant the premises located at{" "}
      {rentalAgreementData?.landlordAddress} for residential purposes only.
      Term: The term of this Agreement shall begin on{" "}
      {rentalAgreementData?.date} and shall continue on a month-to-month basis
      until terminated as provided herein. Rent: The Tenant shall pay to the
      Landlord a monthly rent of {rentalAgreementData?.rent} to be paid on the
      5th of each month. Maintenance: The Landlord shall be responsible for
      maintaining the Property in a habitable condition and shall make any
      necessary repairs promptly. Termination: Either party may terminate this
      Agreement upon giving written notice to the other party at least 30 days
      prior to the intended date of termination. Governing Law: This Agreement
      shall be governed by and construed in accordance with the laws of India.
      Entire Agreement: This Agreement constitutes the entire understanding and
      agreement between the parties with respect to the subject matter hereof
      and supersedes all prior agreements and understandings. IN WITNESS
      WHEREOF, the parties hereto have executed this Agreement as of the date
      first above written.
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        <span>Signature Landlord</span>
        <span>Signature Tenant</span>
      </div>
    </div>
  );
};

export default RentalAgreement;
