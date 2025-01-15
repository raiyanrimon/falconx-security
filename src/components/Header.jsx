import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp, FaPhone, FaX } from "react-icons/fa6";
import { CgChevronDown, CgChevronRight, CgMail, CgMenu } from "react-icons/cg";
import logo from "../assets/images/falcon2.png.webp";
import ModalForm from "./ModalForm";
import img247 from "../assets/images/247.svg";
import { MdMail } from "react-icons/md";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  return (
    <header>
      <div id="top" className="bg-[#083264] text-white">
        <div className="bg-[#D6D8DD] h-1"></div>
        {/* Top Bar */}
        <div className="bg-[#083264] relative grid  grid-cols-[30%_70%] items-center ">
          <div className="bg-[#083264]"> </div>

          {/* Content container */}
          <div className="container mx-auto  relative bg-[#D6D8DD]">
            <div className="lg:absolute content-[''] w-0 h-0 lg:border-t-[50px] lg:border-l-[54px] lg:border-t-transparent lg:border-l-[#083264] left-0 top-0"></div>
            {/* Responsive wrapper */}
            <div className="flex flex-col sm:flex-row justify-between items-center px-10 py-2 lg:px-24 lg:pr-36 space-y-2 sm:space-y-0">
              {/* Social icons - wrap on small screens */}
              <div className="hidden md:flex  justify-center gap-2 sm:gap-4">
                <a
                  href="https://www.facebook.com/falconxsecuritiy"
                  className="bg-[#3b5998] p-2 rounded hover:opacity-90"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/FalconXsecurity"
                  className="bg-blue-400 p-2 rounded hover:opacity-90"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/falconxsecurity/"
                  className="bg-[#0077b5] p-2 rounded hover:opacity-90"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/falconxsecurityservices"
                  className="bg-[#E4405F] p-2 rounded hover:opacity-90"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              {/* Navigation links */}
              <div className="flex items-center font-bold space-x-2 sm:space-x-4 text-sm">
                <a
                  href="/careers"
                  className="text-gray-800 hover:text-white whitespace-nowrap"
                >
                  Join Team
                </a>
                <span className="text-gray-400">|</span>
                <a href="/blog" className="text-gray-800 hover:text-white">
                  Blog
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="/contact-us"
                  className="text-gray-800 hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto ">
          <div className="text-white py-4 px-4">
            <div className=" grid grid-cols-[35%_65%]   gap-4">
              <Link to="/" className="text-2xl font-bold">
                <img
                  src={logo}
                  alt="FalconX Logo"
                  className=" md:w-auto w-32 md:h-24"
                />
              </Link>

              <div className="flex flex-wrap md:flex-nowrap justify-between">
                <div className="text-sm lg:flex hidden items-center gap-2">
                  <img src={img247} alt="" className="max-w-[40px] " />
                  <div className="lg:text-lg">
                    <p className="font-noto font-semibold text-[16px]">
                      Your Safety, Our Priority
                    </p>
                    <p className="font-noto font-semibold text-[16px]">
                      Available 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-center ">
                  <a href="tel:8665002050">
                    <FaPhone className=" md:w-16 md:h-8" />{" "}
                  </a>
                  <div className="lg:text-lg">
                    <p className="text-sm hidden lg:block font-open font-semibold">
                      <a href="tel:8665002050">CALL US</a>
                    </p>
                    <p className="text-xs md:text-base  font-semibold">
                      <a href="tel:8665002050" className="text-gray-400">
                        866-500-2050
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center ">
                  <a href="mailto:info@falconxsecurity.com">
                    <CgMail className=" md:w-16 md:h-8" />{" "}
                  </a>
                  <div className="lg:text-lg">
                    <p className="text-sm hidden lg:block font-open font-semibold">
                      <a href="mailto:info@falconxsecurity.com">MAIL US</a>
                    </p>
                    <p className="text-xs md:text-base  font-semibold">
                      <a
                        href="mailto:info@falconxsecurity.com"
                        className="text-gray-400"
                      >
                        info@falconxsecurity.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <nav className="bg-white relative">
          <div className="container mx-auto px-1.5">
            <div className="flex flex-row-reverse lg:flex-row  justify-between items-center py-2">
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
                {Object.entries(navItems)?.map(([key, section]) => (
                  <div
                    key={key}
                    className="relative group border-t-[3px] border-transparent hover:border-black transition-colors"
                    onMouseEnter={() => setActiveDropdown(key)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="flex items-center   gap-1 ">
                      <Link
                        to={section.path}
                        className="hover:text-gray-500  font-sans-pro py-2 font-semibold text-[15px]"
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
                        className="absolute left-0 mt-0 w-48  bg-white border border-gray-200 shadow-lg rounded-md z-50"
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
                                  className="relative group/sub   "
                                >
                                  <Link
                                    to={item.path}
                                    className="flex justify-between px-4   hover:text-gray-500 border-b border-gray-300 last:border-none font-sans-pro  py-2 font-semibold text-[15px]"
                                    onClick={handleLinkClick}
                                  >
                                    {item.title}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          ) : (
                            section.items?.map((item, index) => (
                              <div key={index} className="relative group/sub  ">
                                <Link
                                  to={item.path}
                                  className="flex justify-between px-4 font-sans-pro  hover:text-gray-500 border-b border-gray-300 last:border-none py-2 font-semibold text-[15px]"
                                  onClick={handleLinkClick}
                                >
                                  {item.title}
                                  {item.subitems && (
                                    <CgChevronRight className="h-5 w-5 hover:text-gray-500 inline" />
                                  )}
                                </Link>

                                {item.subitems && (
                                  <div className="absolute left-full top-0 w-48 h-64 overflow-y-scroll bg-white border border-gray-300 shadow-lg rounded-md hidden group-hover/sub:block">
                                    {item.subitems.map((subitem, subIndex) => (
                                      <Link
                                        key={subIndex}
                                        to={subitem.path}
                                        className="block px-4  capitalize text-sm hover:text-gray-500 border-b border-gray-300 last:border-none font-sans-pro py-2 font-semibold text-[15px]"
                                        onClick={handleLinkClick}
                                      >
                                        {subitem.title}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
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
      <div className="fixed bottom-4 left-4 flex flex-col gap-2 z-50">
        <button
          onClick={scrollToTop}
          className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 " />
        </button>

        <a
          href="tel:866-500-2050"
          className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors duration-300"
          aria-label="Call us"
        >
          <FaPhone className="w-5 h-5 text-white" />
        </a>

        <a
          href="mailto:info@falconxsecurity.com"
          className="bg-gray-500 text-white p-3 rounded-full hover:bg-gray-600 transition-colors duration-300"
          aria-label="Email us"
        >
          <MdMail className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
}
