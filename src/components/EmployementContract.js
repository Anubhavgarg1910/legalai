import React from "react";

const EmployementContract = ({ employementContractData }) => {
  return (
    <div>
      This Employment Contract is made and entered into on{" "}
      {employementContractData?.date}
      <br />
      by and between: <br />
      Employer: {employementContractData?.employerName} residing at{" "}
      {employementContractData?.employerAddress}
      <br />
      Employee: {employementContractData?.employeeName} residing at{" "}
      {employementContractData?.employeeAddress}
      <br />
      Position: The Employer agrees to employ the Employee in the position of{" "}
      {employementContractData?.jobTitle}.
      <br />
      Commencement Date: The employment shall commence on{" "}
      {employementContractData?.startDate}.
      <br />
      Term: The initial term of employment shall be for a period of 6 months,
      beginning on {employementContractData?.startDate} and ending on
      {employementContractData?.endDate}. The employment may be terminated
      earlier in accordance with the provisions of this Contract.
      <br />
      Salary: The Employee shall be paid a salary of{" "}
      {employementContractData?.salaryAmount} per month payable{" "}
      {employementContractData?.paymentFreq}
      in arrears, subject to applicable deductions and withholdings. Benefits:
      The Employee shall be entitled to {employementContractData?.empBenefits},
      including but not limited to [Health Insurance, Retirement Plan, Paid Time
      Off, etc.].
      <br />
      Duties and Responsibilities: The Employee shall perform the duties and
      responsibilities associated with the position of{" "}
      {employementContractData?.jobTitle}, as outlined in the job description
      provided by the Employer.
      <br />
      Confidentiality: During the term of employment and thereafter, the
      Employee shall not disclose any confidential information belonging to the
      Employer, including but not limited to trade secrets, customer
      information, and proprietary business information.
      <br />
      Non-Compete: The Employee agrees not to engage in any employment,
      consulting, or business activities that compete with the Employer's
      business during the term of employment and for a period of 1 year
      following the termination of employment.
      <br />
      Termination: This Contract may be terminated by either party upon 2
      month's written notice to the other party. The Employer reserves the right
      to terminate the employment for cause, including but not limited to
      misconduct, poor performance, or violation of company policies.
      <br />
      Governing Law: This Contract shall be governed by and construed in
      accordance with the laws of the state of India. Entire Agreement: This
      Contract constitutes the entire agreement between the parties and
      supersedes all prior agreements and understandings, whether written or
      oral, relating to the subject matter herein. IN WITNESS WHEREOF, the
      parties hereto have executed this Contract as of the date first above
      written.
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        <span>Signature Employer</span>
        <span>Signature Employee</span>
      </div>
    </div>
  );
};

export default EmployementContract;
