import { useState, useEffect } from "react";

const AreasNav = () => {
  const [activeService, setActiveService] = useState("Bakersfield");

  const serviceAreas = [
    { name: "Bakersfield", path: "/bakersfield" },
    { name: "Fresno", path: "/fresno-county-security-guards" },
    { name: "Los Angeles", path: "/los-angeles-security-guards" },
    {
      name: "Newport Beach",
      path: "/service-areas/security-guard-newportbeach",
    },
    { name: "Orange County", path: "/orange-county" },
    { name: "Palm Springs", path: "/palm-springs-security-guards" },
    { name: "Riverside", path: "/security-guard-riverside-county" },
    { name: "Sacramento", path: "/sacramento-security-guards" },
    { name: "San Bernardino", path: "/san-bernardino" },
    { name: "San Diego", path: "/san-diego-security-guards" },
    { name: "San Francisco", path: "/service-areas/san-francisco" },
    {
      name: "Santa Barbara",
      path: "/service-areas/security-guard-santa-barbara",
    },
    { name: "Santa Clara", path: "/service-areas/security-guard-santa-clara" },
    { name: "Southern California", path: "/southern-california" },
    { name: "Stockton", path: "/stockton" },
    { name: "Temecula", path: "/temecula-security-guards" },
    { name: "Ventura", path: "/service-areas/ventura-county-security-guards" },
  ];

  useEffect(() => {
    const path = window.location.pathname;
    const currentService = serviceAreas.find((item) => item.path === path);
    if (currentService) {
      setActiveService(currentService.name);
    }
  }, []);

  const handleClick = (name) => {
    setActiveService(name);
  };

  return (
    <div className="p-8">
      {/* Service Areas Section */}
      <h2 className="text-2xl font-bold text-[#003366] mb-6">SERVICE AREAS</h2>
      <div className="relative">
        <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-[#003366]" />
        <div
          className="max-h-[450px] overflow-y-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {serviceAreas.map((area, index) => (
            <div key={index} className="flex items-center mb-6 relative group">
              <div
                className={`w-4 h-4 rounded-full transition-colors duration-200
                  ${
                    activeService === area.name
                      ? "bg-blue-600"
                      : "bg-white border-2 border-[#003366] group-hover:border-blue-400"
                  }
                  z-10`}
              />
              <a
                href={area.path}
                onClick={(e) => {
                  handleClick(area.name);
                }}
                className={`ml-6 transition-colors duration-200 uppercase
                  ${
                    activeService === area.name
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
              >
                {area.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreasNav;
