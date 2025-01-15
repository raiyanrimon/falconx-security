const Cities = ({ title, description, cities }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:my-10">
      <h1 className="md:text-4xl text-xl font-bold font-noto  text-center text-[#003366] mb-4">
        {title}
      </h1>

      <p className="text-center text-gray-600 mb-8">{description}</p>

      <div className="grid md:grid-cols-2 gap-6 my-10">
        {cities.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="bg-white px-5 md:px-16 hover:bg-[#003366] hover:text-white rounded-lg font-medium   py-5 shadow-lg transition-shadow duration-300 shadow-gray-400"
          >
            <div className="grid grid-cols-2 gap-2">
              <div>
                {section.left.map((city) => (
                  <div
                    key={city}
                    className="flex items-center  gap-3 mb-2 group cursor-pointer"
                  >
                    <span className=" font-medium transition-transform duration-200 group-hover:translate-x-0.5">
                      ›
                    </span>
                    <span className=" transition-colors duration-200">
                      {city}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                {section.right.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-3 mb-2 group cursor-pointer"
                  >
                    <span className=" font-medium transition-transform duration-200 group-hover:translate-x-0.5">
                      ›
                    </span>
                    <span className="  transition-colors duration-200">
                      {city}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cities;
