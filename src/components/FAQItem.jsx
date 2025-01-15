import { useState } from "react";

import { FaChevronDown } from "react-icons/fa6";

const FAQItems = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-2">
      <button
        onClick={onClick}
        className="w-full p-4 text-left bg-[#003366] text-white transition-colors duration-200 flex space-x-2 items-center"
      >
        {" "}
        <FaChevronDown
          className={`transform transition-transform duration-200 font-bold ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
        />
        <span className="md:text-lg font-semibold">{question}</span>
      </button>
      {isOpen && (
        <div className="p-4  border border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQItem = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question:
        "What kind of Security Services does FalconX Security Services offer?",
      answer:
        "At FalconX Security Services, we specialize in a wide array of security services tailored to meet your specific needs. Our offerings include Armed Security Guards, Unarmed Security Guards, Vehicle Patrol Security Guards, and Standing Guards. Additionally, we provide Live Video Security Services, Foot, Bike, and Golf Patrol Services, as well as Fire Watch Services.",
    },
    {
      question: "Do Your Security Guards Undergo Background Checks?",
      answer:
        "At FalconX Security Services, we ensure that all our security guards undergo thorough background checks, including reference verifications and database screenings. We are meticulous in our hiring process because we understand the importance of the individuals who represent our name and business. Moreover, we prioritize the safety of your business, home, or premises.",
    },
    {
      question:
        "Can I Hire Security Guards For Short-Term Or One-Time Event Functions?",
      answer:
        "FalconX Security Services offers exceptional security solutions for short-term events at affordable prices. We customize our services to meet the unique needs of each client in Los Angeles, regardless of the duration.",
    },
    {
      question: "What Types Of Industries Or Clients Do You Typically Serve?",
      answer:
        "We serve a diverse range of industries in Los Angeles County as well as all regions of California, including corporate, residential, retail, healthcare, event management, construction sites, government facilities, and educational institutions, as well as locations where there is a risk of danger.",
    },
    {
      question:
        "How Does Falconx Security Services Ensure The Reliability Of Its Guards?",
      answer:
        "FalconX Security Services ensures the reliability of its guards through an extensive selection process, including background checks, extensive training, and ongoing professional development. We prioritize hiring experienced and well-trained security guards to maintain the highest standards of security for our clients.",
    },
    {
      question:
        "What measures does FalconX Security Services take to adapt security services to specific client needs?",
      answer:
        "At FalconX Security Services, we understand that each client has unique security requirements. Our security services are highly customizable, allowing us to tailor solutions to the specific needs and challenges faced by clients in various industries across Los Angeles.",
    },
    {
      question:
        "Is FalconX Security Services equipped to handle emergency situations?",
      answer:
        "Yes, our security guards undergo extensive training, including emergency response protocols. FalconX Security Services is well-prepared to handle various emergency situations, ensuring a prompt and effective response to unforeseen events that may pose a threat to your business or property.",
    },
    {
      question: "Do you provide technology-integrated security solutions?",
      answer:
        "FalconX Security Services leverages cutting-edge technology to enhance our security services. From advanced surveillance systems to live video monitoring, we incorporate technology solutions that provide an extra layer of protection for our clients in California.",
    },
    {
      question:
        "Can FalconX Security Services offer consultation services to assess the security needs of a new client?",
      answer:
        "Absolutely. We understand that determining security needs can be challenging. FalconX Security Services offers consultation services to assess and understand the unique security requirements of potential clients in California. This ensures that our clients receive tailored and effective security solutions.",
    },
  ];

  return (
    <div className="bg-[#F4F4F4] py-12 mb-16 md:px-10">
      <div className="max-w-6xl mx-auto p-4 ">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#003366]">
          FalconX SECURITY SERVICES FAQ'S
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-1">
          <div className="space-y-2 bg-[#F4F4F4]">
            {faqData.map((faq, index) => (
              <FAQItems
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
