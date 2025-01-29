import React from "react";

const FeaturesComponent = ({ features }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-2"
          >
            <div className="drop-shadow-lg hover:border-black border-[4px] border-transparent rounded-full  mb-4 transition-colors">
              <img src={feature.icon} alt={feature.title} className="w-20" />
            </div>
            <h3 className="text-2xl font-bold mb-3 md:h-28 uppercase">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesComponent;
