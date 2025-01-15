import React, { useState } from "react";
import { useEffect } from "react";

const ServicesNav = () => {
  const [activeService, setActiveService] = useState("ARMED SECURITY GUARDS");

  const services = [
    { name: "ARMED SECURITY GUARDS", link: "/armed-security-guards" },
    { name: "FIRE WATCH", link: "/fire-watch" },
    { name: "FOOT, BIKE AND GOLF PATROL", link: "/foot-bike-and-golf-patrol" },
    { name: "PATROL DIVISION", link: "/patrol-division" },
    { name: "STANDING GUARD", link: "/standing-guard" },
    { name: "UNARMED SECURITY GUARDS", link: "/unarmed-security-guards" },
    { name: "LIVE VIDEO SECURITY", link: "/live-video-security" },
  ];

  const industries = [
    {
      name: "DISPENSARY SECURITY SERVICES",
      link: "/dispensary-security-services",
    },
    {
      name: "APARTMENTS AND CONDOMINIUM SECURITY",
      link: "/apartments-and-condominium-security",
    },
    { name: "ASSISTED LIVING SECURITY", link: "/assisted-living-security" },
    {
      name: "GATED COMMUNITY AND HOA SECURITY",
      link: "/gated-community-and-hoa-security",
    },
    { name: "HOUSES OF WORSHIP SECURITY", link: "/houses-of-worship-security" },
    { name: "HOTELS SECURITY SERVICE", link: "/hotels-security-service" },
    {
      name: "CULTURAL PROPERTIES SECURITY",
      link: "/cultural-properties-security",
    },
    { name: "WAREHOUSE SECURITY", link: "/warehouse-security" },
    {
      name: "UTILITY AGENCY SECURITY SERVICES",
      link: "/industries/utility-agency-security-services",
    },
    { name: "CEMETERY SECURITY", link: "/cemetery-security" },
    {
      name: "PRIVATE HOME SECURITY SERVICES",
      link: "/private-home-security-services",
    },
    { name: "EVENTS SECURITY SERVICES", link: "/events-security-services" },
    {
      name: "VACANT PROPERTIES SECURITY SERVICES",
      link: "/vacant-properties-security-services",
    },
    {
      name: "TRAIN STATIONS AND BUS TERMINAL SECURITY",
      link: "/train-stations-and-bus-terminal-security",
    },
    { name: "AUTO DEALERSHIP SECURITY", link: "/auto-dealership-security" },
    {
      name: "FARMS AND AGRICULTURE PROPERTIES SECURITY",
      link: "/farms-and-agriculture-properties-security",
    },
    {
      name: "TOURNAMENT & SPORT EVENT SECURITY",
      link: "/tournament-and-sport-event-security",
    },
    {
      name: "COLLEGES UNIVERSITIES AND SCHOOLS SECURITY GUARD SERVICES",
      link: "/colleges-universities-and-schools-security-guard-services",
    },
    { name: "PUBLIC SPACES SECURITY", link: "/public-spaces-security" },
    { name: "ENTERTAINMENT SECURITY", link: "/entertainment-security" },
    {
      name: "FINANCIAL BANK SECURITY SERVICES",
      link: "/financial-bank-security-services",
    },
    { name: "AIRPORT SECURITY SERVICES", link: "/airport-security-services" },
    {
      name: "CONSTRUCTION SITE SECURITY SERVICES",
      link: "/construction-site-security-services",
    },
    {
      name: "GOVERNMENT FACILITY SECURITY",
      link: "/government-facility-security",
    },
    { name: "SOLAR FARM SECURITY", link: "/solar-farm-security" },
    {
      name: "HIGH RISE BUILDING SECURITY",
      link: "/high-rise-building-security",
    },
    {
      name: "RECEPTION & LOBBY DESK AREA SECURITY",
      link: "/reception-and-lobby-desk-area-security",
    },
    { name: "RESTAURANT SECURITY", link: "/restaurant-security" },
    { name: "SHOPPING CENTER SECURITY", link: "/shopping-center-security" },
    {
      name: "DATA CENTERS AND TECH COMPANIES SECURITY",
      link: "/industries/data-centers-and-tech-companies-security",
    },
    { name: "DOCKS AND MARINA SECURITY", link: "/docks-and-marina-security" },
    { name: "MANUFACTURING SECURITY", link: "/manufacturing-security" },
    { name: "PARKING LOT SECURITY", link: "/parking-lot-security" },
    {
      name: "HEALTHCARE AND HOSPITAL SECURITY",
      link: "/healthcare-and-hospital-security",
    },
    {
      name: "TRANSPORTATION, LOGISTICS SECURITY",
      link: "/transportation-logistics-security",
    },
    {
      name: "PHARMACEUTICAL MANUFACTURING FACILITIES SECURITY",
      link: "/pharmaceutical-manufacturing-facilities-security",
    },
    {
      name: "THEME PARKS SECURITY GUARD SERVICES",
      link: "/theme-parks-security-guard-services",
    },
  ];
  useEffect(() => {
    const path = window.location.pathname;
    const currentService = [...services, ...industries].find(
      (item) => item.link === path
    );
    if (currentService) {
      setActiveService(currentService.name);
    }
  }, []);
  const handleClick = (name) => {
    setActiveService(name);
  };

  return (
    <div className="p-8">
      {/* Services Section */}
      <h2 className="text-2xl font-bold text-[#003366] mb-6">SERVICES</h2>
      <div className="relative">
        <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-[#003366]" />
        {services.map((service, index) => (
          <div key={index} className="flex items-center mb-6 relative group">
            <div
              className={`w-4 h-4 rounded-full transition-colors duration-200
                ${
                  activeService === service.name
                    ? "bg-blue-600"
                    : "bg-white border-2 border-[#003366] group-hover:border-blue-400"
                }
                z-10`}
            />
            <a
              href={service.link}
              onClick={(e) => {
                handleClick(service.name);
              }}
              className={`ml-6 transition-colors duration-200
                ${
                  activeService === service.name
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 hover:text-blue-600"
                }`}
            >
              {service.name}
            </a>
          </div>
        ))}
      </div>

      {/* Industries Section */}
      <h2 className="text-2xl font-bold text-[#003366] mt-12 mb-6">
        INDUSTRIES
      </h2>
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
          {industries.map((industry, index) => (
            <div key={index} className="flex items-center mb-6 relative group">
              <div
                className={`w-4 h-4 rounded-full transition-colors duration-200
                  ${
                    activeService === industry.name
                      ? "bg-blue-600"
                      : "bg-white border-2 border-[#003366] group-hover:border-blue-400"
                  }
                  z-10`}
              />
              <a
                href={industry.link}
                onClick={(e) => {
                  handleClick(industry.name);
                }}
                className={`ml-6 transition-colors duration-200
                  ${
                    activeService === industry.name
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
              >
                {industry.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesNav;
