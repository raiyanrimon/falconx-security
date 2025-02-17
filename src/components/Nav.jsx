import { useState } from "react";
import { Link } from "react-router-dom";
import {  FaX } from "react-icons/fa6";
import { CgChevronDown, CgChevronRight,  CgMenu } from "react-icons/cg";
import ModalForm from "./ModalForm";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState(null);
    const handleLinkClick = () => {
      setIsMenuOpen(false);
      setActiveDropdown(null);
      setActiveMobileSubDropdown(null);
    };
    const navItems = {
        home: {
          title: "HOME",
          path: "/",
        },
        services: {
          title: "SERVICES",
          path: "/service",
          items: [
            {
              title: "Armed Security Guards",
              path: "/armed-security-guards",
            },
            { title: "Fire Watch", path: "/fire-watch" },
            {
              title: "Foot, Bike, And Golf Patrol",
              path: "/foot-bike-and-golf-patrol",
            },
            { title: "Live Video Security", path: "/live-video-security" },
            { title: "Patrol Division", path: "/patrol-division" },
            { title: "Standing Guard", path: "/standing-guard" },
            {
              title: "Unarmed Security Guards",
              path: "/unarmed-security-guards",
            },
          ],
        },
    
        industries: {
          title: "INDUSTRIES",
          path: "/industries",
          items: [
            {
              title: "COMMERCIAL",
              path: "#",
              subitems: [
                {
                  title: "Airport Security Services",
                  path: "/airport-security-services",
                },
                {
                  title: "Data Centers and Tech Companies Security",
                  path: "/industries/data-centers-and-tech-companies-security",
                },
                {
                  title: "Dispensary Security Services",
                  path: "/dispensary-security-services",
                },
                {
                  title: "Financial Bank Security Services",
                  path: "/financial-bank-security-services",
                },
                {
                  title: "Government Facility Security",
                  path: "/government-facility-security",
                },
                {
                  title: "Healthcare and Hospital Security",
                  path: "/healthcare-and-hospital-security",
                },
                {
                  title: "High Rise Building Security",
                  path: "/high-rise-building-security",
                },
                {
                  title: "Reception & Lobby Desk Area Security",
                  path: "/reception-and-lobby-desk-area-security",
                },
                {
                  title: "Shopping Center Security",
                  path: "/shopping-center-security",
                },
                {
                  title: "Auto Dealership Security",
                  path: "/auto-dealership-security",
                },
                {
                  title:
                    "Colleges Universities and Schools Security Guard Services",
                  path: "/colleges-universities-and-schools-security-guard-services",
                },
                {
                  title: "Entertainment Security",
                  path: "/entertainment-security",
                },
                {
                  title: "Events Security Services",
                  path: "/events-security-services",
                },
              ],
            },
            {
              title: "RESIDENTIAL",
              path: "#",
              subitems: [
                {
                  title: "Apartments and Condominium Security",
                  path: "/apartments-and-condominium-security",
                },
                {
                  title: "Assisted Living Security",
                  path: "/assisted-living-security",
                },
                {
                  title: "Gated Community and HOA Security",
                  path: "/gated-community-and-hoa-security",
                },
                {
                  title: "Private Home Security Services",
                  path: "/private-home-security-services",
                },
                {
                  title: "Vacant Properties Security Services",
    
                  path: "/vacant-properties-security-services",
                },
              ],
            },
            {
              title: "INDUSTRIAL",
              path: "#",
              subitems: [
                {
                  title: "Construction Site Security Services",
                  path: "/construction-site-security-services",
                },
                {
                  title: "Docks and Marina Security",
                  path: "/docks-and-marina-security",
                },
                {
                  title: "Manufacturing Security",
                  path: "/manufacturing-security",
                },
                {
                  title: "Parking Lot Security",
                  link: "",
                  path: "/parking-lot-security",
                },
                {
                  title: "Pharmaceutical Manufacturing Facilities Security",
                  path: "/pharmaceutical-manufacturing-facilities-security",
                },
                {
                  title: "Solar Farm Security",
                  path: "/solar-farm-security",
                },
                {
                  title: "Transportation, Logistics Security",
                  path: "/transporation-logistics-security",
                },
                {
                  title: "Utility Agency Security Services",
                  path: "/industries/utility-agency-security-services",
                },
                {
                  title: "Warehouse Security",
                  path: "/warehouse-security",
                },
                {
                  title: "Farms and Agriculture Properties Security",
                  path: "/farms-and-agriculture-properties-security",
                },
              ],
            },
            {
              title: "PUBLIC PLACES",
              path: "#",
              subitems: [
                {
                  title: "Cemetery Security",
                  path: "/cemetery-security",
                },
                {
                  title: "Houses of Worship Security",
                  path: "/houses-of-worship-security",
                },
                {
                  title: "Hotels Security Service",
                  path: "/hotels-security-service",
                },
                {
                  title: "Public Spaces Security",
                  path: "/public-spaces-security",
                },
                {
                  title: "Restaurant Security",
                  path: "/restaurant-security",
                },
                {
                  title: "Theme Parks Security Guard Services",
                  path: "/theme-parks-security-guard-services",
                },
                {
                  title: "Train Stations and Bus Terminal Security",
                  path: "/train-stations-and-bus-terminal-security",
                },
                {
                  title: "Cultural Properties Security",
                  path: "/cultural-properties-security",
                },
                {
                  title: "Tournament & Sport Event Security",
                  path: "/tournament-and-sport-event-security",
                },
              ],
            },
          ],
        },
        serviceAreas: {
          title: "SERVICE AREAS",
          path: "#",
          items: [
            { title: "Bakersfield", path: "/bakersfield" },
            { title: "Fresno", path: "/fresno-county-security-guards" },
            { title: "Los Angeles", path: "/los-angeles-security-guards" },
            {
              title: "Newport Beach",
              path: "/service-areas/security-guard-newportbeach",
            },
            { title: "Orange County", path: "/orange-county" },
            { title: "Palm Springs", path: "/palm-springs-security-guards" },
            { title: "Riverside", path: "/security-guard-riverside-county" },
            { title: "Sacramento", path: "/sacramento-security-guards" },
            { title: "San Bernardino", path: "/san-bernardino" },
            { title: "San Diego", path: "/san-diego-security-guards" },
            { title: "San Francisco", path: "/service-areas/san-francisco" },
            {
              title: "Santa Barbara",
              path: "/service-areas/security-guard-santa-barbara",
            },
            {
              title: "Santa Clara",
              path: "/service-areas/security-guard-santa-clara",
            },
            {
              title: "Southern California",
              path: "/southern-california",
            },
            { title: "Stockton", path: "/stockton" },
            { title: "Temecula", path: "/temecula-security-guards" },
            {
              title: "Ventura",
              path: "/service-areas/ventura-county-security-guards",
            },
          ],
        },
    
        company: {
          title: "COMPANY",
          path: "#",
          items: [
            { title: "About Us", path: "/about-us" },
            { title: "FAQ", path: "/faq" },
            { title: "Training", path: "/training" },
          ],
        },
      };
    return <div className="sticky top-0 z-50 bg-white container mx-auto">
         <div className="max-w-6xl mx-auto">
        <nav className="bg-white relative">
          <div className="container mx-auto px-1.5">
            <div className="flex flex-row-reverse lg:flex-row justify-between items-center py-2">
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaX size={24} /> : <CgMenu size={24} />}
              </button>

              <div
                className={`
            ${isMenuOpen ? "flex" : "hidden"}
            lg:flex flex-col lg:flex-row absolute lg:relative
            top-full left-0 w-full lg:w-auto
            bg-white lg:bg-transparent
            shadow-lg lg:shadow-none
            z-50 lg:z-auto
            p-4 lg:p-0
            gap-4 lg:gap-8
          `}
              >
                {Object.entries(navItems)?.map(([key, section]) => {
                  // Check if any subitem is active
                  const isActive =
                    location.pathname === section.path ||
                    section.items?.some(
                      (item) =>
                        location.pathname === item.path ||
                        item.subitems?.some(
                          (subitem) => location.pathname === subitem.path
                        )
                    );

                  return (
                    <div
                      key={key}
                      className="relative group border-t-[3px] border-transparent hover:border-black transition-colors"
                      onMouseEnter={() => setActiveDropdown(key)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="flex items-center gap-1">
                        <Link
                          to={section.path}
                          className={`hover:text-gray-500 font-sans-pro py-2 font-semibold text-[15px] ${
                            isActive ? "text-gray-400" : ""
                          }`}
                          onClick={handleLinkClick}
                        >
                          {section.title}
                        </Link>
                        {section.items && (
                          <button className="p-1 hover:bg-gray-100 rounded-full">
                            <CgChevronDown className="h-4 w-4 text-gray-600" />
                          </button>
                        )}
                      </div>

                      {activeDropdown === key && (
                        <div
                          className="absolute left-0 mt-0 md:w-52 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-50"
                          style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            WebkitOverflowScrolling: "touch",
                            "&::-webkit-scrollbar": {
                              display: "none",
                            },
                          }}
                        >
                          <div>
                            {section.items?.length > 7 ? (
                              <div className="overflow-y-scroll h-64">
                                {section.items?.map((item, index) => (
                                  <div
                                    key={index}
                                    className="relative group/sub"
                                  >
                                    <Link
                                      to={item.path}
                                      className={`flex justify-between px-4 hover:text-gray-500 border-b border-gray-300 last:border-none font-sans-pro py-2 font-semibold text-[15px] ${
                                        location.pathname === item.path
                                          ? "text-gray-400"
                                          : ""
                                      }`}
                                      onClick={handleLinkClick}
                                    >
                                      {item.title}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              section.items?.map((item, index) => (
                                <div key={index} className="relative group/sub">
                                  <Link
                                    to={item.path}
                                    className={`flex justify-between px-4 font-sans-pro hover:text-gray-500 border-b border-gray-300 last:border-none py-2 font-semibold text-[15px] ${
                                      location.pathname === item.path
                                        ? "text-gray-400"
                                        : ""
                                    }`}
                                    onClick={handleLinkClick}
                                  >
                                    {item.title}
                                    {item.subitems && (
                                      <CgChevronRight
                                        className={`h-5 w-5 transition-transform duration-200 ${
                                          activeMobileSubDropdown === index
                                            ? "rotate-90"
                                            : ""
                                        }`}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          setActiveMobileSubDropdown(
                                            activeMobileSubDropdown === index
                                              ? null
                                              : index
                                          );
                                        }}
                                      />
                                    )}
                                  </Link>

                                  {item.subitems && (
                                    <div className="absolute left-full top-0 w-36 md:w-52 h-64 overflow-y-scroll bg-white border border-gray-300 shadow-lg rounded-md hidden group-hover/sub:block">
                                      {item.subitems.map(
                                        (subitem, subIndex) => (
                                          <Link
                                            key={subIndex}
                                            to={subitem.path}
                                            className="block px-4 capitalize text-sm hover:text-gray-500 border-b border-gray-300 last:border-none font-sans-pro py-2 font-semibold text-[15px]"
                                            onClick={handleLinkClick}
                                          >
                                            {subitem.title}
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                className="bg-[#003366] text-white md:w-auto px-2 md:px-10 py-4 rounded font-semibold hover:bg-black transition-colors"
                onClick={() => setIsOpen(true)}
              >
                GET FREE CONSULTATION
              </button>
              <ModalForm isOpen={isOpen} closeModal={() => setIsOpen(false)} />
            </div>
          </div>
        </nav>
      </div>
    </div>
}

