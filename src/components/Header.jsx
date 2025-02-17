
import { Link } from "react-router-dom";
import { FaArrowUp, FaPhone} from "react-icons/fa6";
import {  CgMail} from "react-icons/cg";
import logo from "../assets/images/falcon2.png.webp";

import img247 from "../assets/images/247.svg";
import { MdMail } from "react-icons/md";
import Tidio from "./Tidio";

export default function Header() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <div id="top" className="bg-[#083264] text-white">
        <div className="bg-[#D6D8DD] h-1"></div>
        {/* Top Bar */}
        <div className="bg-[#083264] relative grid  grid-cols-[30%_70%] items-center ">
          <div className="bg-[#083264]"> </div>

          {/* Content container */}
          <div className=" relative bg-[#D6D8DD]">
            <div className="lg:absolute content-[''] w-0 h-0 lg:border-t-[50px] lg:border-l-[54px] lg:border-t-transparent lg:border-l-[#083264] left-0 top-0"></div>
            {/* Responsive wrapper */}
            <div className="max-w-7xl mx-auto">
            <div className="flex flex-col  sm:flex-row justify-between items-center px-10 py-2 lg:px-24 lg:pr-36 space-y-2 sm:space-y-0">
              {/* Social icons - wrap on small screens */}
              <div className="hidden md:flex  justify-center gap-2 sm:gap-4">
                <a
                  href="https://www.facebook.com/falconxsecuritiy"
                    target="_blank"
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
                  href="https://x.com/FalconXsecurity"
                  className="bg-black p-2 rounded hover:opacity-90 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 1200 1227"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/falconxsecurity/"
                  className="bg-[#0077b5] p-2 rounded hover:opacity-90"
                    target="_blank"
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
                    target="_blank"
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

                <div className="flex items-center gap-1 ">
                  <a href="tel:8665002050">
                    <FaPhone className=" md:w-16 md:h-8" />{" "}
                  </a>
                  <div className="lg:text-lg">
                    <p className="text-sm hidden lg:block font-open font-semibold">
                      <a href="tel:8665002050">CALL US</a>
                    </p>
                    <p className="text-sm md:text-base  font-semibold">
                      <a href="tel:8665002050" className="text-gray-200">
                        866-500-2050
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 ">
                  <a href="mailto:info@falconxsecurity.com">
                    <CgMail className=" md:w-16 md:h-8" />{" "}
                  </a>
                  <div className="lg:text-lg">
                    <p className="text-sm hidden lg:block font-open font-semibold">
                      <a href="mailto:info@falconxsecurity.com">MAIL US</a>
                    </p>
                    <p className="text-sm md:text-base  font-semibold">
                      <a
                        href="mailto:info@falconxsecurity.com"
                        className="text-gray-200"
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
      <Tidio />
    </header>
  );
}
