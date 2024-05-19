import React from "react";

const BusinessContract = ({ businessContractData }) => {
  return (
    <div>
      This Business Contract is made and entered into on{" "}
      {businessContractData?.date}
      <br />
      by and between: <br />
      {businessContractData?.partyA}, a {businessContractData?.businessType}
      organized and existing under the laws of India, with its principal place
      of business located at {businessContractData?.addressPartyA}
      <br /> {businessContractData?.partyB}, a{" "}
      {businessContractData?.businessType} organized and existing under the laws
      of India, with its principal place of business located at{" "}
      {businessContractData?.addressPartyB}.
      <br /> 1. Purpose of Contract: The purpose of this Contract is to
      establish the terms and conditions under which Party A and Party B will
      engage in business activities together.
      <br />
      2. Scope of Work: {businessContractData?.partyA} agrees to provide{" "}
      {businessContractData?.businessDesc} to {businessContractData?.partyB},
      and agrees to
      {businessContractData?.payment} for the services/products provided.
      <br />
      3. Term and Termination: This Contract shall commence on{" "}
      {businessContractData?.date} and shall continue until{" "}
      {businessContractData?.endingDate}. Either party may terminate this
      Contract upon 2 month's written notice to the other party.
      <br />
      4. Payment Terms: {businessContractData?.partyB} shall pay{" "}
      {businessContractData?.partyA} the agreed-upon amount of{" "}
      {businessContractData?.payment} for the services/products provided.
      Payment shall be made and shall be due on {businessContractData?.dueDate}.
      <br />
      5. Confidentiality: Both parties agree to maintain the confidentiality of
      any proprietary or confidential information disclosed during the term of
      this Contract.
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        <span>Signature Party A</span>
        <span>Signature Party B</span>
      </div>
    </div>
  );
};

export default BusinessContract;
