import { useState } from "react";
import { CgMail } from "react-icons/cg";

import { FaAddressCard, FaClock, FaPhone } from "react-icons/fa6";

import Swal from "sweetalert2";

const ContactSection = ({
  address = "11150 W Olympic Blvd, Suite 1050 Los Angeles, CA 90064",
  phone = "866-500-2050",
  email = "Info@falconxsecurity.com",
}) => {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!formData.name || !formData.email || !formData.message) {
          setError(true);
          return;
        }
        setError(false);
    
        try {
          const response = await fetch(
            "https://blog.falconxsecurity.com//wp-json/msp/v1/contact",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );
    
          if (!response.ok) {
            throw new Error("Failed to send message.");
          }
    
          setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
          });
         
         
          window.location.href = "/thank-you";
        } catch (error) {
          Swal.fire({
            title: "Message Submission Failed",
            text: "Please try again later",
            icon: "error"
          });
        }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8 my-12">
      {/* Left Section - Contact Info */}
      <div className="md:w-1/2 font-bold">
        <h2 className="text-gray-600 text-2xl mb-2">Get in Touch</h2>
        <h1 className="text-[#003366] text-4xl font-bold mb-4">
          For Premier Security!
        </h1>
        <p className="text-gray-600 mb-8">
          Have security concerns? We'll create customized plans to maximize your
          safety and peace of mind.
        </p>

        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaAddressCard className="w-6 h-6 text-[#003366] mt-1" />
            <span className="text-gray-600">{address}</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="w-6 h-6 text-[#003366]" />
            <span className="text-gray-600">Call Now : {phone}</span>
          </div>

          <div className="flex items-center gap-4">
            <CgMail className="w-6 h-6 text-[#003366]" />
            <span className="text-gray-600">{email}</span>
          </div>

          <div className="flex items-center gap-4">
            <FaClock className="w-6 h-6 text-[#003366]" />
            <span className="text-gray-600">Available 24/7</span>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="md:w-1/2">
        <form onSubmit={handleSubmit} className="bg-[#003366] p-8 rounded-lg">
          <div className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-300 pb-2 focus:outline-none focus:border-white"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-300 pb-2 focus:outline-none focus:border-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-300 pb-2 focus:outline-none focus:border-white"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-300 pb-2 focus:outline-none focus:border-white"
            />

            <input
              type="text"
              name="message"
              placeholder="Question / Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-300 pb-2 focus:outline-none focus:border-white"
            />

            <button
              type="submit"
              className="w-full font-bold bg-gray-400 text-white py-3 rounded hover:bg-white hover:text-[#003366] transition-colors"
            >
              SEND
            </button>

            <p className="text-center text-white">
              or Call Now{" "}
              <a href={`tel:${phone}`} className="font-bold">
                {phone}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
