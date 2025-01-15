import React from "react";
import image from "../assets/images/Our-Core-values.png.webp";
import slide1 from "../assets/images/slide01.jpg";

const CoreValues = ({
  title = "Our Core Values",
  description = "FalconX Security Services is built on core values that shape our approach to provide exceptional security guard services in California. These include:",
  values = [
    "24/7 Availability",
    "Integrity",
    "Efficient Vigilance",
    "Adaptability",
  ],
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${slide1})` }}
      className="bg-[#003366] text-white md:p-20 p-6"
    >
      <div className="max-w-4xl mx-auto p-5 bg-white rounded-lg shadow-lg">
        {/* Icon Container */}
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-lg border">
            <img src={image} alt="" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold md:text-center  text-[#003366] mb-6">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-center mb-3">
          {description}
        </p>

        {/* Values List */}
        <ul className="space-y-2 mb-8 p-3">
          {values.map((value, index) => (
            <li key={index} className="text-gray-700 flex items-center">
              <span className="w-2 h-2 bg-[#003366] rounded-full mr-3"></span>
              {value}
            </li>
          ))}
        </ul>

        {/* Bottom Accent Line */}
        <div className="md:w-80 h-[2px] bg-[#003366] mx-auto"></div>
      </div>
    </div>
  );
};

export default CoreValues;
