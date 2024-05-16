import React from "react";

const BusinessContract = ({ businessContractData }) => {
  return (
    <div>
      This Business Contract is made and entered into on{" "}
      {businessContractData?.date}, by and between:{" "}
      {businessContractData?.partyA}, a {businessContractData?.businessType}
      organized and existing under the laws of India, with its principal place
      of business located at {businessContractData?.addressPartyA} , and{" "}
      {businessContractData?.partyB}, a {businessContractData?.businessType}{" "}
      organized and existing under the laws of India, with its principal place
      of business located at {businessContractData?.addressPartyB}. 1. Purpose
      of Contract: The purpose of this Contract is to establish the terms and
      conditions under which Party A and Party B will engage in business
      activities together. 2. Scope of Work: {businessContractData?.partyA}{" "}
      agrees to provide {businessContractData?.businessDesc} to{" "}
      {businessContractData?.partyB}, and agrees to
      {businessContractData?.payment} for the services/products provided. 3.
      Term and Termination: This Contract shall commence on{" "}
      {businessContractData?.date} and shall continue until{" "}
      {businessContractData?.endingDate}. Either party may terminate this
      Contract upon 2 month's written notice to the other party. 4. Payment
      Terms: {businessContractData?.partyB} shall pay{" "}
      {businessContractData?.partyA} the agreed-upon amount of{" "}
      {businessContractData?.payment} for the services/products provided.
      Payment shall be made and shall be due on {businessContractData?.dueDate}.
      5. Confidentiality: Both parties agree to maintain the confidentiality of
      any proprietary or confidential information disclosed during the term of
      this Contract.
    </div>
  );
};

export default BusinessContract;
