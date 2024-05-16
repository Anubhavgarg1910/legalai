import React, { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Banner from "./Banner";
import RentalAgreement from "./RentalAgreement";
import { FormKeys } from "../constants/constants";
import { LoanKeys } from "../constants/constants";
import { BusinessKeys } from "../constants/constants";
import { EmpKeys } from "../constants/constants";

const CreateDoc = () => {
  const [rentalOpen, setRentalOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [empOpen, setEmpOpen] = useState(false);
  const [myTemplate, setMyTemplate] = useState(false);
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
    // setMyTemplate(false);
  };
  const onBusinessAgreement = () => {
    setBusinessOpen(true);
    // setMyTemplate(false);
  };
  const onEmployAgreement = () => {
    setEmpOpen(true);
    // setMyTemplate(false);
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
    console.log(formData);
    setRentalOpen(false);
    setMyTemplate(true);
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

        <div className=" flex flex-row justify-center mt-[200px] mb-[100px]">
          {rentalOpen && (
            <div className="  bg-primary p-[74px] w-[700px] rounded-3xl">
              <div className="py-3">
                <input
                  className="form-control"
                  placeholder="Date"
                  value={formData[FormKeys.date]}
                  onChange={(e) => {
                    setData([FormKeys.date], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control"
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
                  className="form-control "
                  placeholder="Tenant Address"
                  value={formData[FormKeys.tenantAddress]}
                  onChange={(e) => {
                    setData([FormKeys.tenantAddress], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  className="form-control "
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
          {}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateDoc;
