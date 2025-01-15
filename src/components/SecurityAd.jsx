import React, { useState } from "react";
import ModalForm from "./ModalForm";

const SecurityAd = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#C7C7C7]">
      <div className="max-w-6xl mx-auto md:flex justify-between items-center md:py-12 p-5">
        <div className="text-left ">
          <p className="text-xl md:text-3xl font-noto text-[#003366] ">
            Feeling Unsafe in California?
          </p>
          <h1 className=" text-2xl md:text-3xl font-noto font-bold text-[#003366] ">
            Hire Ex-Military Personnel from FalconX
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold font-noto text-[#003366] ">
            Security Services and Invest in Your Safety.
          </h1>
        </div>
        <button
          className="bg-[#003366] text-white font-sans w-full md:w-auto px-10 py-4 mt-3 rounded font-medium hover:bg-black transition-colors"
          onClick={() => setIsOpen(true)}
        >
          MAKE AN APPOINTMENT
        </button>
        <ModalForm isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default SecurityAd;
