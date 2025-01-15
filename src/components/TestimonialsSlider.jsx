import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialsSlider = () => {
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

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white py-16 relative">
      {/* Background diagonal shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute transform -skew-y-6 bg-gray-50 w-full h-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
          READ OUR TESTIMONIALS
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          For Over 1 Years, FalconX Security Services Has Been Protecting
          Businesses, Employees, Local Communities, and Loved Ones
        </p>

        {/* Testimonial Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="max-w-3xl mx-auto"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="text-center px-8 pb-12">
                  <div className="mb-6 relative">
                    <div className="relative inline-block">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mx-auto mb-2"
                      />
                      {/* Google Logo Badge */}
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
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
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-gray-700 font-medium">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm mb-4">
                      {testimonial.date}
                    </div>

                    {/* Star Rating */}
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
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 italic">{testimonial.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Google Rating */}
        <div className="text-center mt-12 md:flex items-center justify-center gap-2">
          <div className="flex justify-center items-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
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
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </div>
          <span>rating score: </span>
          <span className="font-bold">5.0</span> of 5, based on{" "}
          <span className="font-bold">3 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
