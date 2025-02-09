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
        console.log("Form submitted successfully!");
      } else {
        console.error("Error submitting form:", await response.json());
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-[#003366] rounded-lg shadow-lg p-4 sm:p-6 md:px-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl text-white font-bold mb-2 font-noto sm:mb-3 md:mb-4 text-center lg:text-left">
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
              <div className="flex justify-center items-center ">
                <button
                  type="submit"
                  className="w-full  sm:w-auto px-10 py-3 bg-gray-500 uppercase hover:bg-white hover:text-[#003366] text-white font-bold  transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Testimonials Section */}
          <div className="w-full flex justify-center items-center lg:w-1/2 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="max-w-3xl mx-auto"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-[#F4F4F4] shadow-lg rounded-lg md:p-6 flex flex-col items-center justify-center relative">
                    {/* Google Logo in Place of Image */}
                    <div className="relative w-20 h-20 mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                      <svg viewBox="0 0 48 48">
                        <title>Google Logo</title>
                        <clipPath id="g">
                          <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                        </clipPath>
                        <g class="colors" clip-path="url(#g)">
                          <path fill="#FBBC05" d="M0 37V11l17 13z" />
                          <path
                            fill="#EA4335"
                            d="M0 11l17 13 7-6.1L48 14V0H0z"
                          />
                          <path
                            fill="#34A853"
                            d="M0 37l30-23 7.9 1L48 0v48H0z"
                          />
                          <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                        </g>
                      </svg>
                    </div>

                    {/* Testimonial Content */}
                    <div className="text-center">
                      <div className="text-gray-700 font-bold font-noto">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-sm mb-4">
                        {testimonial.date}
                      </div>
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9 .38" />
                          </svg>
                        ))}
                      </div>

                      {/* Full Testimonial Text */}
                      <p className="text-gray-600 italic">{testimonial.text}</p>
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
