import React, { useState } from "react";

import Swal from 'sweetalert2'

const ModalForm = ({ isOpen, closeModal }) => {

  const [formData, setFormData] = useState({
    company_name: "",
    name: "",
    email: "",
    phone: "",
    service: "",
    guards_needed: "",
    facility_type: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://blog.falconxsecurity.com//wp-json/msp/v1/service",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setFormData({
          company_name: "",
          name: "",
          email: "",
          phone: "",
          service: "",
          guards_needed: "",
          facility_type: "",
          city: "",
          message: "",
        });
    
        window.location.href = "/thank-you";
      } else {
        Swal.fire({
          title: "Response Submission Failed",
          text: "Please try again later",
          icon: "error"
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black   bg-opacity-50 flex justify-center items-center z-50">
          <div className="border-l-[#005DBA] border-t-[#005DBA] border-[10px] border-r-black border-b-black ">
            <div className="bg-white w-full max-w-xl  shadow-lg p-6 relative  ">
              <button
                className="absolute top-3 right-3  hover:text-gray-700 font-bold"
                onClick={closeModal}
              >
                ✕
              </button>
              <h2 className="text-lg font-semibold text-center text-gray-800 mb-6">
                Service Request Form
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Company Name"
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                  <div className="flex gap-4">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md p-2"
                    >
                      <option value="" disabled>
                        Select Services
                      </option>
                      <option value="armed-guard">Armed Guard</option>
                      <option value="standing-guard">Standing Guard</option>
                      <option value="unarmed-guard">Unarmed Guard</option>
                      <option value="vehicle-patrol">Vehicle Patrol</option>
                    </select>
                    <input
                      type="number"
                      name="guards_needed"
                      placeholder="How many Guards needed?"
                      value={formData.guards_needed}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div className="flex gap-4">
                    <select
                      name="facility_type"
                      value={formData.facility_type}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md p-2"
                    >
                      <option value="" disabled>
                        Type of Facility
                      </option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="public">Public</option>
                    </select>
                    <input
                      type="text"
                      name="city"
                      placeholder="Which City Do You Need Service"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  ></textarea>
                </div>
                <div className="flex justify-center items-center text-center">
                  <button
                    type="submit"
                    className="w-full md:w-auto font-bold uppercase  bg-gray-500 hover:bg-[#003666] text-white  px-9 py-3 mt-4"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
