const StaticCounter = () => {
  const stats = [
    { value: "2+", label: "Years", suffix: "" },
    { value: 70, label: "Events Served", suffix: "+" },
    { value: 150, label: "Employees", suffix: "+" },
    { value: 100, label: "Clients", suffix: "+" },
  ];

  return (
    <div className="bg-[#003366] max-w-6xl  text-white mx-auto py-8 my-10">
      <div className="container grid grid-cols-2 mx-auto md:flex flex-wrap justify-around gap-5">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className=" text-3xl md:text-5xl font-bold">
              {stat.value}
              {stat.suffix}
            </h2>
            <p className="text-[22px] mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticCounter;
