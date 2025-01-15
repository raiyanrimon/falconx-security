import React from "react";

const StaticCounter = () => {
  const stats = [
    { value: 1, label: "Years", suffix: "" },
    { value: 70, label: "Events Served", suffix: "+" },
    { value: 150, label: "Employees", suffix: "+" },
    { value: 100, label: "Clients", suffix: "+" },
  ];

  return (
    <div className="bg-[#003366] max-w-6xl  text-white mx-auto py-8 my-8">
      <div className="container mx-auto flex flex-wrap justify-around gap-5">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="md:text-5xl font-bold">
              {stat.value}
              {stat.suffix}
            </h2>
            <p className="md:text-lg mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticCounter;
