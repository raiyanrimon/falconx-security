import { useState } from "react";
import ContactModal from "./ContactModal";

const Quote = ({ text1 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#C7C7C7]">
      <div className="max-w-6xl mx-auto grid  md:grid-cols-[80%_20%] gap-4 py-16 px-0.5">
        <div className="md:text-left text-center">
          <h1 className="text-2xl md:text-3xl font-noto font-semibold text-[#003366]">
            {text1}
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-[#003366] text-white md:w-auto my-5 md:my-0 px-7 py-3 font-roboto rounded font-medium hover:bg-black transition-colors"
            onClick={openModal}
          >
            GET A QUOTE
          </button>
          <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Quote;
