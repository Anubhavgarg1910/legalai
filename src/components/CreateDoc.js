import React, { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Banner from "./Banner";
import RentalAgreement from "./RentalAgreement";
import { FormKeys } from "../constants/constants";
import { LoanKeys } from "../constants/constants";
import { BusinessKeys } from "../constants/constants";
import { EmpKeys } from "../constants/constants";
import LoanAgreement from "./LoanAgreement";
import EmployementContract from "./EmployementContract";
import BusinessContract from "./BusinessContract";

const CreateDoc = () => {
  const [rentalOpen, setRentalOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [empOpen, setEmpOpen] = useState(false);
  const [myTemplate, setMyTemplate] = useState(false);
  const [myTemplate2, setMyTemplate2] = useState(false);
  const [myTemplate3, setMyTemplate3] = useState(false);
  const [myTemplate4, setMyTemplate4] = useState(false);
  const [formData, setFormData] = useState({});
  const [loanData, setLoanData] = useState({});
  const [businessData, setBusinessData] = useState({});
  const [empData, setEmpData] = useState({});
  const scrollToForm = useRef(null);

  useEffect(() => {
    if (rentalOpen && scrollToForm.current) {
      scrollToForm.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [rentalOpen]);

  const onRentalAgreement = () => {
    setRentalOpen(true);
    setMyTemplate(false);
  };
  const onLoanAgreement = () => {
    setLoanOpen(true);
    setMyTemplate(false);
  };
  const onBusinessAgreement = () => {
    setBusinessOpen(true);
    setMyTemplate(false);
  };
  const onEmployAgreement = () => {
    setEmpOpen(true);
    setMyTemplate(false);
  };

  const setData = (key, val) => {
    const tempData = { ...formData };
    tempData[key] = val;
    setFormData(tempData);
  };
  const setLData = (key, val) => {
    const tempData = { ...loanData };
    tempData[key] = val;
    setLoanData(tempData);
  };
  const setBData = (key, val) => {
    const tempData = { ...businessData };
    tempData[key] = val;
    setBusinessData(tempData);
  };
  const setEData = (key, val) => {
    const tempData = { ...empData };
    tempData[key] = val;
    setEmpData(tempData);
  };
  const handleSubmit = () => {
    setRentalOpen(false);
    setMyTemplate(true);
  };
  const handleSubmit2 = () => {
    setLoanOpen(false);
    setMyTemplate2(true);
  };
  const handleSubmit3 = () => {
    setEmpOpen(false);
    setMyTemplate3(true);
  };
  const handleSubmit4 = () => {
    setBusinessOpen(false);
    setMyTemplate4(true);
  };

  return (
    <div>
      <Banner showAppointment={false} />
      <div>
        <div className="flex flex-col items-center mt-[150px]  mb-8 last:mb-0 lg:mb-0 justify-center ">
          <button
            className="text-2xl mb-2 font-primary font-bold text-primary hover:text-accent-hover "
            onClick={onRentalAgreement}
          >
            Rental Agreement
          </button>
          <p className=" max-w-[332px] lg:max-w-[350px] text-center">
            Easily draft custom rental agreements tailored to your needs using
            our intuitive online tool.
          </p>

          <button
            onClick={onLoanAgreement}
            className="text-2xl mb-[20px] font-primary font-bold mt-[50px]  text-primary hover:text-accent-hover "
          >
            Loan Agreement
          </button>
          <p className=" max-w-[332px] lg:max-w-[350px] text-center">
            Craft personalized loan agreements effortlessly with our
            user-friendly online platform.
          </p>

          <button
            onClick={onEmployAgreement}
            className="text-2xl mb-2 font-primary font-bold mt-[50px]  text-primary hover:text-accent-hover "
          >
            Employment Agreement
          </button>
          <p className=" max-w-[332px] lg:max-w-[350px] text-center">
            Streamline the hiring process with our platform, generating detailed
            employment agreements with ease.
          </p>

          <button
            ref={scrollToForm}
            onClick={onBusinessAgreement}
            className="text-2xl font-primary font-bold mt-[50px]  text-primary hover:text-accent-hover "
          >
            Business Agreement
          </button>
          <p className=" max-w-[332px] lg:max-w-[350px] text-center">
            Accelerate business deals with our platform, generating
            comprehensive business agreements effortlessly.
          </p>
        </div>

        <div className=" flex flex-row justify-center mb-[100px]">
          {rentalOpen && (
            <div className="  bg-primary p-[74px] w-[700px] rounded-3xl">
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Date"
                  value={formData[FormKeys.date]}
                  onChange={(e) => {
                    setData([FormKeys.date], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="LandLord Name"
                  value={formData[FormKeys.landlordName]}
                  onChange={(e) => {
                    setData([FormKeys.landlordName], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Landlord Address"
                  value={formData[FormKeys.landlordAddress]}
                  onChange={(e) => {
                    setData([FormKeys.landlordAddress], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Tenant Name"
                  value={formData[FormKeys.tenantName]}
                  onChange={(e) => {
                    setData([FormKeys.tenantName], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2 "
                  placeholder="Tenant Address"
                  value={formData[FormKeys.tenantAddress]}
                  onChange={(e) => {
                    setData([FormKeys.tenantAddress], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2 "
                  placeholder="Rent"
                  value={formData[FormKeys.rent]}
                  onChange={(e) => {
                    setData([FormKeys.rent], e.target.value);
                  }}
                />
              </div>
              <div className=" pt-6">
                <button
                  className="btn bg-accent hover:bg-accent-hover transition-all  "
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {myTemplate && formData && (
            <div className="w-[900px] p-6 border-double border-4 border-black">
              <RentalAgreement rentalAgreementData={formData} />
            </div>
          )}
        </div>
        <div className=" flex flex-row justify-center  mb-[100px]">
          {loanOpen && (
            <div className="  bg-primary p-[74px] w-[700px] rounded-3xl">
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Date"
                  value={loanData[LoanKeys.date]}
                  onChange={(e) => {
                    setLData([LoanKeys.date], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Lender Name"
                  value={loanData[LoanKeys.lenderName]}
                  onChange={(e) => {
                    setLData([LoanKeys.lenderName], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Lender Address"
                  value={loanData[LoanKeys.lenderAddress]}
                  onChange={(e) => {
                    setLData([LoanKeys.lenderAddress], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Borrower Name"
                  value={loanData[LoanKeys.borrowerName]}
                  onChange={(e) => {
                    setLData([LoanKeys.borrowerName], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Borrower Address"
                  value={loanData[LoanKeys.borrowerAddress]}
                  onChange={(e) => {
                    setLData([LoanKeys.borrowerAddress], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2 "
                  placeholder="Loan Amount"
                  value={loanData[LoanKeys.loanAmount]}
                  onChange={(e) => {
                    setLData([LoanKeys.loanAmount], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2 "
                  placeholder="Interest Rate"
                  value={loanData[LoanKeys.interestRate]}
                  onChange={(e) => {
                    setLData([LoanKeys.interestRate], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2 "
                  placeholder="Start Date"
                  value={loanData[LoanKeys.startDate]}
                  onChange={(e) => {
                    setLData([LoanKeys.startDate], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2 "
                  placeholder="End Date"
                  value={loanData[LoanKeys.endDate]}
                  onChange={(e) => {
                    setLData([LoanKeys.endDate], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2 "
                  placeholder="Installment Amount"
                  value={loanData[LoanKeys.installmentAmount]}
                  onChange={(e) => {
                    setLData([LoanKeys.installmentAmount], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2 "
                  placeholder="First Installment Date"
                  value={loanData[LoanKeys.firstInstallmentDate]}
                  onChange={(e) => {
                    setLData([LoanKeys.firstInstallmentDate], e.target.value);
                  }}
                />
              </div>

              <div className=" pt-6">
                <button
                  className="btn bg-accent hover:bg-accent-hover transition-all  "
                  onClick={handleSubmit2}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {myTemplate2 && loanData && (
            <div className="w-[900px] p-6 border-double border-4 border-black">
              <LoanAgreement loanAgreementData={loanData} />
            </div>
          )}

          {empOpen && (
            <div className="  bg-primary p-[74px] w-[700px] rounded-3xl">
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Date"
                  value={empData[EmpKeys.date]}
                  onChange={(e) => {
                    setEData([EmpKeys.date], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Employer Name"
                  value={empData[EmpKeys.employerName]}
                  onChange={(e) => {
                    setEData([EmpKeys.employerName], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Employer Address"
                  value={empData[EmpKeys.employerAddress]}
                  onChange={(e) => {
                    setEData([EmpKeys.employerAddress], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Employee Name"
                  value={empData[EmpKeys.employeeName]}
                  onChange={(e) => {
                    setEData([EmpKeys.employeeName], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Employee Address"
                  value={empData[EmpKeys.employeeAddress]}
                  onChange={(e) => {
                    setEData([EmpKeys.employeeAddress], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Start Date"
                  value={empData[EmpKeys.startDate]}
                  onChange={(e) => {
                    setEData([EmpKeys.startDate], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="End Date"
                  value={empData[EmpKeys.endDate]}
                  onChange={(e) => {
                    setEData([EmpKeys.endDate], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Payment Frequency"
                  value={empData[EmpKeys.paymentFreq]}
                  onChange={(e) => {
                    setEData([EmpKeys.paymentFreq], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Employee Benefits"
                  value={empData[EmpKeys.empBenefits]}
                  onChange={(e) => {
                    setEData([EmpKeys.empBenefits], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Job Title"
                  value={empData[EmpKeys.jobTitle]}
                  onChange={(e) => {
                    setEData([EmpKeys.jobTitle], e.target.value);
                  }}
                />
              </div>

              <div className=" pt-6">
                <button
                  className="btn bg-accent hover:bg-accent-hover transition-all  "
                  onClick={handleSubmit3}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {myTemplate3 && empData && (
            <div className="w-[900px] p-6 border-double border-4 border-black">
              <EmployementContract employementContractData={empData} />
            </div>
          )}
          {businessOpen && (
            <div className="  bg-primary p-[74px] w-[700px] rounded-3xl">
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Date"
                  value={businessData[BusinessKeys.date]}
                  onChange={(e) => {
                    setBData([BusinessKeys.date], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Party A"
                  value={businessData[BusinessKeys.partyA]}
                  onChange={(e) => {
                    setBData([BusinessKeys.partyA], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Business Type"
                  value={businessData[BusinessKeys.businessType]}
                  onChange={(e) => {
                    setBData([BusinessKeys.businessType], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Address Party A"
                  value={businessData[BusinessKeys.addressPartyA]}
                  onChange={(e) => {
                    setBData([BusinessKeys.addressPartyA], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Party B"
                  value={businessData[BusinessKeys.partyB]}
                  onChange={(e) => {
                    setBData([BusinessKeys.partyB], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Address Party B"
                  value={businessData[BusinessKeys.addressPartyB]}
                  onChange={(e) => {
                    setBData([BusinessKeys.addressPartyB], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Business Description"
                  value={businessData[BusinessKeys.businessDesc]}
                  onChange={(e) => {
                    setBData([BusinessKeys.businessDesc], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Payment"
                  value={businessData[BusinessKeys.payment]}
                  onChange={(e) => {
                    setBData([BusinessKeys.payment], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Ending Date"
                  value={businessData[BusinessKeys.endingDate]}
                  onChange={(e) => {
                    setBData([BusinessKeys.endingDate], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control p-2"
                  placeholder="Due Date"
                  value={businessData[BusinessKeys.dueDate]}
                  onChange={(e) => {
                    setBData([BusinessKeys.dueDate], e.target.value);
                  }}
                />
              </div>
              <div className=" pt-6">
                <button
                  className="btn bg-accent hover:bg-accent-hover transition-all  "
                  onClick={handleSubmit4}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {myTemplate4 && businessData && (
            <div className="w-[900px] p-6 border-double border-4 border-black">
              <BusinessContract businessContractData={businessData} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateDoc;
