import React, { useState } from "react";

const FAQContact = () => {
  const [activeQuestion, setActiveQuestion] = useState("");
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
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return;
    }
    setError(false);

    try {
      // Send form data to the message API
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

      // Clear form data on success
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });

      console.log("Your message has been sent successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
      {/* FAQ Section */}
      <div>
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="border border-gray-200">
            <button
              onClick={() =>
                setActiveQuestion(activeQuestion === "q1" ? "" : "q1")
              }
              className="w-full text-left p-4 font-semibold flex justify-between items-center"
            >
              <span>
                WHAT KIND OF SECURITY SERVICES DOES FALCONX SECURITY SERVICES
                OFFER IN LOS ANGELES?
              </span>
              <span className="text-gray-500">
                {activeQuestion === "q1" ? "−" : "+"}
              </span>
            </button>
            {activeQuestion === "q1" && (
              <div className="p-4 text-gray-600">
                At FalconX Security Services, the best security agency, we
                specialize in a wide array of security services tailored to meet
                your specific needs. Our offerings include Armed Security
                Guards, Unarmed Security Guards, Vehicle Patrol Security Guards,
                and Standing Guards. Additionally, we provide Live Video
                Security Services, Foot, Bike, and Golf Patrol Services, as well
                as Fire Watch Services.
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="border border-gray-200">
            <button
              onClick={() =>
                setActiveQuestion(activeQuestion === "q2" ? "" : "q2")
              }
              className="w-full text-left p-4 font-semibold flex justify-between items-center"
            >
              <span>DO YOUR SECURITY GUARDS UNDERGO BACKGROUND CHECKS?</span>
              <span className="text-gray-500">
                {activeQuestion === "q2" ? "−" : "+"}
              </span>
            </button>
            {activeQuestion === "q2" && (
              <div className="p-4 text-gray-600">
                At FalconX Security Services, we ensure that all our security
                guards undergo thorough background checks, including reference
                verifications and database screenings. We are meticulous in our
                hiring process because we understand the importance of the
                individuals who represent our name and business. Moreover, we
                prioritize the safety of your business, home, or premises.
              </div>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="border border-gray-200">
            <button
              onClick={() =>
                setActiveQuestion(activeQuestion === "q3" ? "" : "q3")
              }
              className="w-full text-left p-4 font-semibold flex justify-between items-center"
            >
              <span>
                CAN I HIRE SECURITY GUARDS FOR SHORT-TERM OR ONE-TIME EVENT
                FUNCTIONS IN LOS ANGELES?
              </span>
              <span className="text-gray-500">
                {activeQuestion === "q3" ? "−" : "+"}
              </span>
            </button>
            {activeQuestion === "q3" && (
              <div className="p-4 text-gray-600">
                FalconX Security Services offers exceptional security solutions
                for short-term events at affordable prices. We customize our
                services to meet the unique needs of each client in Los Angeles,
                regardless of the duration.
              </div>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="border border-gray-200">
            <button
              onClick={() =>
                setActiveQuestion(activeQuestion === "q4" ? "" : "q4")
              }
              className="w-full text-left p-4 font-semibold flex justify-between items-center"
            >
              <span>
                WHAT TYPES OF INDUSTRIES OR CLIENTS DO YOU TYPICALLY SERVE IN
                LOS ANGELES?
              </span>
              <span className="text-gray-500">
                {activeQuestion === "q4" ? "−" : "+"}
              </span>
            </button>
            {activeQuestion === "q4" && (
              <div className="p-4 text-gray-600">
                We serve a diverse range of industries in Los Angeles County as
                well as all regions of California, including corporate,
                residential, retail, healthcare, event management, construction
                sites, government facilities, and educational institutions, as
                well as locations where there is a risk of danger.
              </div>
            )}
          </div>

          {/* FAQ Item 5 */}
          <div className="border border-gray-200">
            <button
              onClick={() =>
                setActiveQuestion(activeQuestion === "q5" ? "" : "q5")
              }
              className="w-full text-left p-4 font-semibold flex justify-between items-center"
            >
              <span>
                HOW DOES FALCONX SECURITY SERVICES ENSURE THE RELIABILITY OF ITS
                GUARDS?
              </span>
              <span className="text-gray-500">
                {activeQuestion === "q5" ? "−" : "+"}
              </span>
            </button>
            {activeQuestion === "q5" && (
              <div className="p-4 text-gray-600">
                FalconX Security Services ensures the reliability of its guards
                through an extensive selection process, including background
                checks, extensive training, and ongoing professional
                development. We prioritize hiring experienced and well-trained
                security guards to maintain the highest standards of security
                for our clients
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-[#003366] text-white p-7 rounded">
        <h2 className=" text-lg md:text-2xl mb-6">
          Do you have more questions or would you like to request a call back?
          Feel free to reach out using the form below, and we'll assist you
          promptly.
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 bg-transparent border-b border-white placeholder-gray-300"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-2 bg-transparent border-b border-white placeholder-gray-300"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 bg-transparent border-b border-white placeholder-gray-300"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-2 bg-transparent border-b border-white placeholder-gray-300"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <textarea
            placeholder="Question / Message"
            className="w-full p-2 bg-transparent border-b border-white placeholder-gray-300"
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

          <div className="text-center mt-4">or Call Now 866-500-2050</div>
        </form>
      </div>
    </div>
  );
};

export default FAQContact;
