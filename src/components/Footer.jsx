import { Link } from "react-router-dom";
import logo from "../assets/images/falcon2.png.webp";
import calsaga from "../assets/images/calsaga-logo.webp";
import yelp from "../assets/images/yelp.webp";
import googleReviews from "../assets/images/Google-Reviews-SVG-Icon.svg";
import bbb from "../assets/images/AB-seal-horz.svg.svg";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white md:py-16 py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="space-y-4">
          <img src={logo} alt="FalconX Security Services" className="mb-4" />
          <p className="text-sm">
            © {year} All Rights Reserved by FalconX Security Services, Inc.
          </p>
          <p className="text-sm">
            Unauthorized reproduction of the FalconX Security Services, Inc.
            website or any of its content is strictly prohibited and will be
            subject to legal action.
          </p>
          <div className="flex flex-wrap  gap-2 sm:gap-4">
            <a
              href="https://www.facebook.com/falconxsecuritiy"
              className="bg-[#3b5998] p-2 rounded hover:opacity-90"
              target="_blank"
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
              className="bg-gray-400 p-2 rounded hover:opacity-90 flex items-center"
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
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-12">CONTACT INFO</h3>
          <div className="space-y-2">
            <div className="flex  items-center gap-2">
              <FiHome className="w-10 h-8" />
              <div>
                <p>11150 W Olympic Blvd,</p>
                <p>Suite 1050</p>
                <p>Los Angeles, CA 90064</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="w-10 h-8" />
              <p>866-500-2050</p>
            </div>
            <div className="flex items-center gap-2">
              <CgMail className="w-10 h-8" />
              <p>Info@falconxsecurity.com</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-10">PAGE LINKS</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact </Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/careers">Career </Link>
            </li>
            <li>PPO#121915</li>
          </ul>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-5 ">
            <img src={bbb} alt="BBB" className="w-[200px]" />
            <img src={calsaga} alt="CALSAGA" className="w-[200px]" />
            <img
              src={googleReviews}
              alt="Google Reviews"
              className="w-[200px]"
            />
            <a href="https://www.yelp.com/biz/falconx-security-services-los-angeles-2 ">
              <img src={yelp} alt="Yelp" className="w-[200px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
