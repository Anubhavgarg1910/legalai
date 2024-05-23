import React from "react";

const LoanAgreement = ({ loanAgreementData }) => {
  return (
    <div
      style={{
        fontFamily: "Courier Prime, monospace",
        fontWeight: 400,
      }}
    >
      This Loan Agreement is made and entered into on {loanAgreementData?.date}{" "}
      <br />
      by and between: <br />
      Lender: {loanAgreementData?.lenderName}, residing at{" "}
      {loanAgreementData?.lenderAddress} <br />
      Borrower: {loanAgreementData?.borrowerName} residing at{" "}
      {loanAgreementData?.borrowerAddress}
      <br /> Loan Amount: The Lender agrees to lend the Borrower the sum of ₹{" "}
      {loanAgreementData?.loanAmount} ("Loan"). Interest Rate: The Loan shall
      accrue interest at the rate of {loanAgreementData?.interestRate} % per
      annum, calculated on the outstanding principal balance. Term: The term of
      the Loan shall commence on {loanAgreementData?.startDate} and shall
      continue for a period of 12 months, beginning on{" "}
      {loanAgreementData?.startDate} and ending on
      {loanAgreementData?.endDate}. Repayment: The Borrower agrees to repay the
      Loan in 12 equal monthly installments of
      {loanAgreementData?.installmentAmount}, beginning on
      {loanAgreementData?.firstInstallmentDate}, with the final installment due
      on {loanAgreementData?.firstInstallmentDate}. Each installment shall be
      paid to the Lender at the address provided above. Late Payment: In the
      event of late payment, the Borrower shall be liable to pay a late fee of ₹
      100 for each day the payment is overdue. Prepayment: The Borrower may
      prepay the Loan, in whole or in part, at any time without penalty.
      Default: If the Borrower fails to make any payment when due, or breaches
      any other provision of this Agreement, the Loan shall be deemed to be in
      default and the Lender may pursue any legal remedies available to enforce
      payment. Governing Law: This Agreement shall be governed by and construed
      in accordance with the laws of the state of Uttar Pradesh. Entire
      Agreement: This Agreement constitutes the entire agreement between the
      parties and supersedes all prior agreements and understandings, whether
      written or oral, relating to the subject matter herein. IN WITNESS WHERE
      OF, the parties here to have executed this Agreement as of the date first
      above written.
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        <span>Signature Lender</span>
        <span>Signature Borrower</span>
      </div>
    </div>
  );
};

export default LoanAgreement;
