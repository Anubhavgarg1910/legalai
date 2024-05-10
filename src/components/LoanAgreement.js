import React from "react";

const LoanAgreement = ({ loanAgreementData }) => {
  return (
    <div>
      LOAN AGREEMENT This Loan Agreement ("Agreement") is made and entered into
      on [Date], by and between: Lender: [Lender's Full Name] Address: [Lender's
      Address] and Borrower: [Borrower's Full Name] Address: [Borrower's
      Address] Loan Amount: The Lender agrees to lend the Borrower the sum of
      [Loan Amount] ("Loan"). Interest Rate: The Loan shall accrue interest at
      the rate of [Interest Rate]% per annum, calculated on the outstanding
      principal balance. Term: The term of the Loan shall commence on [Start
      Date] and shall continue for a period of [Loan Term] months, beginning on
      [Start Date] and ending on [End Date]. Repayment: The Borrower agrees to
      repay the Loan in [Number of Installments] equal monthly installments of
      [Installment Amount], beginning on [First Installment Date], with the
      final installment due on [Final Installment Date]. Each installment shall
      be paid to the Lender at the address provided above. Late Payment: In the
      event of late payment, the Borrower shall be liable to pay a late fee of
      [Late Fee Amount] for each day the payment is overdue. Security: The
      Borrower shall provide the Lender with [Security/Collateral] as security
      for the repayment of the Loan. The Security/Collateral shall be
      [Description of Security/Collateral]. Prepayment: The Borrower may prepay
      the Loan, in whole or in part, at any time without penalty. Default: If
      the Borrower fails to make any payment when due, or breaches any other
      provision of this Agreement, the Loan shall be deemed to be in default and
      the Lender may pursue any legal remedies available to enforce payment.
      Governing Law: This Agreement shall be governed by and construed in
      accordance with the laws of the state of [State]. Entire Agreement: This
      Agreement constitutes the entire agreement between the parties and
      supersedes all prior agreements and understandings, whether written or
      oral, relating to the subject matter herein. IN WITNESS WHEREOF, the
      parties hereto have executed this Agreement as of the date first above
      written.
    </div>
  );
};

export default LoanAgreement;
