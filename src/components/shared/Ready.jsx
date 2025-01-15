import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

const Ready = () => {
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

  const testimonials = [
    {
      id: 1,
      name: "farid popal",
      date: "2024-03-25",
      rating: 5,
      text: "I highly recommend FalconX Security Services. Their team comprises extensively trained professionals who are dedicated to ensuring client and customer satisfaction. They offer cost-effective solutions without compromising reliability. With round-the-clock availability, they are always prepared and responsive.",
    },
    {
      id: 2,
      name: "Ikram Mtz",
      date: "2024-04-05",
      rating: 5,
      text: "Exceptionally professional and prompt service, they exceeded my expectations and went the extra mile during my emergency situation. I cannot recommend them highly enough. Don't settle for anything less than the best. Thank you for everything, and we will definitely be using your services again",
    },
    {
      id: 3,
      name: "Jizzelle",
      date: "2024-04-21",
      rating: 5,
      text: "We hired FalconX Security Services for two separate occasions. The first was for my annual event called Shimmy Shakedown. It's a dance production that includes workshops, a Competition Show and Gala Show. We were very impressed by their professionalism and effectiveness. Their team ensured a seamless event from start to finish and they allowed our guests to enjoy the event without any concerns. Thank you for the great communication and working with us, our guests and artists were also pleased with the assistance and safety measures.The second event was for a birthday celebration held in an upscale venue. The guards are professionally trained and made us all feel at ease. We definitely will hire FalconX for our next event.",
    },
  ];

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
        console.log("Form submitted successfully:", result);
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
        alert("Form submitted successfully!");
      } else {
        console.error("Error submitting form:", await response.json());
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-[#003366] rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2 sm:mb-3 md:mb-4 text-center lg:text-left">
              READY TO START SECURITY SERVICES?
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base text-center lg:text-left">
              Learn which types of security services match your business.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Basic Info */}
              <div className="space-y-4">
                <input
                  type="text"
                  name="company_name"
                  placeholder="Company Name"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Service and Guards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Services</option>
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
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Facility and City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  name="facility_type"
                  value={formData.facility_type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Type of Facility</option>
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
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              {/* Submit Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Testimonials Section */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              className="h-full"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-center mb-4">
                      <div className="relative">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xl sm:text-2xl text-gray-600">
                            {testimonial.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
                          <svg
                            className="w-4 h-4 sm:w-6 sm:h-6"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#4285F4"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="#34A853"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M5.84 13.93c-.25-.72-.39-1.49-.39-2.33s.14-1.61.39-2.33V6.41H2.18C1.06 7.88 0 9.99 0 12s1.06 4.12 2.18 5.59l3.66-2.85z"
                            />
                            <path
                              fill="#EA4335"
                              d="M12 4.74c1.44 0 2.68.49 3.67 1.31l2.72-2.72C16.43 1.64 14.32 0 12 0c-4.3 0-7.01 2.8-8.16 6.53l3.73 2.83c.88-2.6 3.3-4.53 6.16-4.53z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 15l-3.64 2.18.7-4.28L3 8.73l4.28-.62L10 3l1.72 4.11 4.28.62-3.06 4.17.7 4.28L10 15z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>

                    <div className="flex-grow overflow-y-auto">
                      <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-6">
                        {testimonial.text}
                      </p>
                    </div>

                    <div className="text-center mt-4">
                      <p className="font-semibold text-gray-800 capitalize text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
