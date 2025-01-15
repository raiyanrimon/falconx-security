import React, { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState(false);

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
      console.log("Your message has been sent successfully!");
      onClose(); // Close modal after successful submission
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="border-l-[#005DBA] border-t-[#005DBA] border-[10px] border-r-black border-b-black">
        <div className="bg-white p-2">
          <div className="bg-[#003366] w-full max-w-2xl shadow-lg p-8 relative">
            <button
              className="absolute top-3 right-3 text-white hover:text-gray-700 font-bold"
              onClick={onClose}
            >
              ✕
            </button>
            <h2 className="text-lg md:text-2xl text-white mb-6">
              Get in Touch for Premier Security! Have security concerns? We'll
              create customized plans to maximize your safety and peace of mind.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 bg-transparent border-b border-white placeholder-gray-300 text-white"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-2 bg-transparent border-b border-white placeholder-gray-300 text-white"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 bg-transparent border-b border-white placeholder-gray-300 text-white"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 bg-transparent border-b border-white placeholder-gray-300 text-white"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              <textarea
                placeholder="Question / Message"
                className="w-full p-2 bg-transparent border-b border-white placeholder-gray-300 text-white"
                rows="3"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <button
                type="submit"
                className="w-full bg-gray-400 text-white py-3 rounded font-semibold hover:bg-gray-500 transition-colors"
              >
                SEND
              </button>

              {error && (
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded">
                  One or more fields have an error. Please check and try again.
                </div>
              )}

              <div className="text-center mt-4 text-white">
                or Call Now 866-500-2050
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
