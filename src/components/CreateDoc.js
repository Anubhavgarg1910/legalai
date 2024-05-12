import React, { useState,useRef,useEffect } from "react";
import Footer from "../components/Footer"
import Banner from "./Banner";
import rentalImg from "../assets/img/rental image.jpg"




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
  const scrollToForm = useRef(null);

  useEffect(() => {
    if (rentalOpen && scrollToForm.current) {
      scrollToForm.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [rentalOpen]); 

  const onRentalAgreement = () => {
    

    setRentalOpen(true);
    setMyTemplate(false);
    
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
        <div className="flex flex-col items-center mt-[150px]  mb-8 last:mb-0 lg:mb-0 justify-center ">
          <button className='text-2xl mb-2 font-primary font-bold text-primary hover:text-accent-hover ' onClick={onRentalAgreement}>Rental Agreement</button>
          <p className=' max-w-[332px] lg:max-w-[350px] text-center'>Make home,shop etc. rental agreement in seconds by just filling a form</p>

          <button className='text-2xl mb-[20px] font-primary font-bold mt-[50px]  text-primary hover:text-accent-hover '>Loan Agreement</button>
          <p className=' max-w-[332px] lg:max-w-[350px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum</p>

          <button className='text-2xl mb-2 font-primary font-bold mt-[50px]  text-primary hover:text-accent-hover '>Employment Agreement</button>
           <p className=' max-w-[332px] lg:max-w-[350px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum</p>
           
          <button className='text-2xl font-primary font-bold mt-[50px]  text-primary hover:text-accent-hover '>Business Agreement</button>
          <p className=' max-w-[332px] lg:max-w-[350px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum</p>
          </div>


          <div className=" flex flex-row justify-center mt-[200px] mb-[100px]">
          {rentalOpen && (
            <div ref={scrollToForm} className="  bg-primary p-[74px] rounded-sm w-[700px] ">
              <div className="py-3">
               
                <input className="form-control " placeholder="Date"
                  value={formData[FormKeys.date]}
                  onChange={(e) => {
                    setData([FormKeys.date], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                
                <input className="form-control"
                placeholder="LandLord Name"
                  value={formData[FormKeys.landlordName]}
                  onChange={(e) => {
                    setData([FormKeys.landlordName], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                
                <input className="form-control p-2" placeholder="Landlord Address"
                  value={formData[FormKeys.landlordAddress]}
                  onChange={(e) => {
                    setData([FormKeys.landlordAddress], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                
                <input className="form-control p-2" placeholder="Tenant Name"
                  value={formData[FormKeys.tenantName]}
                  onChange={(e) => {
                    setData([FormKeys.tenantName], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                
                <input className="form-control " placeholder="Tenant Address"
                  value={formData[FormKeys.tenantAddress]}
                  onChange={(e) => {
                    setData([FormKeys.tenantAddress], e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                
                <input className="form-control " placeholder="Rent"
                  value={formData[FormKeys.rent]}
                  onChange={(e) => {
                    setData([FormKeys.rent], e.target.value);
                  }}
                />
              </div>
              <div className=" pt-6">
              <button className="btn bg-accent hover:bg-accent-hover transition-all  " onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          )}
          {myTemplate && formData && (
            <div className="w-[900px]">
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
          </div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default CreateDoc;
