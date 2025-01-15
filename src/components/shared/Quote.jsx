import { useState } from "react";

import ContactModal from "./ContactModal";

const Quote = ({ text1, text2, text3 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#C7C7C7]">
      <div className="max-w-6xl mx-auto md:flex justify-between items-center md:py-12 p-4">
        <div className="text-left ">
          <h1 className=" text-lg md:text-3xl font-noto font-semibold text-[#003366] ">
            {text1}
          </h1>
          <h1 className="text-lg md:text-3xl font-semibold font-noto text-[#003366] ">
            {text2}
          </h1>
          <h1 className="text-lg md:text-3xl font-semibold font-noto text-[#003366] ">
            {text3}
          </h1>
        </div>
        <button
          className="bg-[#003366] text-white  w-full md:w-auto my-5 md:my-0 px-7 py-3 font-roboto rounded font-medium hover:bg-black transition-colors"
          onClick={() => openModal(true)}
        >
          GET A QUOTE
        </button>
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Quote;
