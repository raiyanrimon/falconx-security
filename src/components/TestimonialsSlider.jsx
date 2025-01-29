import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import bg from "../assets/images/Group-7140-1.webp";

const TestimonialsSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Farid Popal",
      date: "2024-03-25",
      rating: 5,
      text: "I highly recommend FalconX Security Services. Their team comprises extensively trained professionals who are dedicated to ensuring client and customer satisfaction. They offer cost-effective solutions without compromising reliability. With round-the-clock availability, they are always prepared and responsive.",
    },
    {
      id: 2,
      name: "Ikram Mtz",
      date: "2024-04-05",
      rating: 5,
      text: "Exceptionally professional and prompt service, they exceeded my expectations and went the extra mile during my emergency situation. I cannot recommend them highly enough. Don't settle for anything less than the best. Thank you for everything, and we will definitely be using your services again.",
    },
    {
      id: 3,
      name: "Jizzelle",
      date: "2024-04-21",
      rating: 5,
      text: "We hired FalconX Security Services for two separate occasions. The first was for my annual event called Shimmy Shakedown. It's a dance production that includes workshops, a Competition Show, and Gala Show. We were very impressed by their professionalism and effectiveness. Their team ensured a seamless event from start to finish and allowed our guests to enjoy the event without any concerns.",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="md:py-16 py-5"
    >
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="md:text-4xl text-2xl font-bold text-blue-900 text-center mb-4">
          READ OUR TESTIMONIALS
        </h2>
        <p className="text-gray-600 text-center md:mb-16 max-w-3xl mx-auto">
          For Over 1 Year, FalconX Security Services Has Been Protecting
          Businesses, Employees, Local Communities, and Loved Ones
        </p>

        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="max-w-3xl mx-auto"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-[#F4F4F4] shadow-lg rounded-lg p-6 flex flex-col items-center justify-center relative transition-transform transform hover:-translate-y-1">
                  {/* Google Logo in Place of Image */}
                  <div className="relative w-20 h-20 mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <title>Google Logo</title>
                      <clipPath id="g">
                        <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2c-11.8 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22c0-1.3-.2-2.7-.5-4z" />
                      </clipPath>
                      <g clipPath="url(#g)">
                        <path fill="#FBBC05" d="M0 37V11l17 13z" />
                        <path fill="#EA4335" d="M0 11l17 13l7-6.1L48 14V0H0z" />
                        <path fill="#34A853" d="M0 37l30-23l7.9 1L48 0v48H0z" />
                        <path fill="#4285F4" d="M48 48L17 24l-4-3l35-10z" />
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
                          viewBox="0 0 24 24"
                        >
                          {/* Star Shape */}
                          <path d="M12 .587l3.668 7.568L24 9.187l-6 5.848L19.335 24l-7.335-3.847L4.665 24l1.335-8.965L0 9.187l7.332-.032z" />
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

        {/* Google Rating */}
        <div className="text-center mt-12 md:flex items-center justify-center gap-x-2">
          <span className="font-bold">Google </span>
          <span> Rating score:</span>
          <span className="font-bold"> 5.0</span> of
          <span className="font-bold"> 3 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
