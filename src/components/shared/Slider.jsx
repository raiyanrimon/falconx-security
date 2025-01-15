import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import camera from "../../assets/images/01-2-1.svg";
import prompt from "../../assets/images/02-2.svg";
import inspection from "../../assets/images/03-2.svg";
import access from "../../assets/images/04-2.svg";
import advance from "../../assets/images/05-2.svg";
import incident from "../../assets/images/07.svg";
import relation from "../../assets/images/08.svg";
import patrol from "../../assets/images/09.svg";
import property from "../../assets/images/10.svg";

const Slider = ({ title, text }) => {
  const slides = [
    {
      icon: camera,
      title: "Continuous Vigilance",
      description:
        "Guards maintain constant watch to identify potential threats, ensuring a secure environment",
    },
    {
      icon: prompt,
      title: "Prompt Response",
      description:
        "Swift actions in emergencies, such as alarms or suspicious activities, to minimize risks and enhance safety.",
    },
    {
      icon: inspection,
      title: "Regular Inspection",
      description:
        "Our Vehicle security patrol guards conduct routine site checks to identify and address potential security risks promptly.",
    },
    {
      icon: access,
      title: "Access Control",
      description:
        "Monitoring and managing site access to prevent unauthorized entry and enhance overall security.",
    },
    {
      icon: advance,
      title: "Advanced Technology Use",
      description:
        "Utilizing cutting-edge technology for enhanced surveillance and quick response to potential threats.",
    },
    {
      icon: incident,
      title: "Incident Reporting",
      description:
        "Timely and detailed reporting of incidents, aiding in further analysis and improvement of security measures.",
    },
    {
      icon: relation,
      title: "Public Relations",
      description:
        "Establishing positive relations with the public to enhance cooperation and community safety.",
    },
    {
      icon: patrol,
      title: "Patrol Coordination",
      description:
        "Collaborating with on-site management and other security personnel for effective patrol coordination.",
    },
    {
      icon: property,
      title: "Property Protection",
      description:
        "Vigilant efforts to protect property from potential theft, vandalism, or other security threats.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-10 px-4 py-8 text-center">
      <h1 className="text-xl md:text-[31px] font-semibold text-[#003366] font-noto text-center mb-6">
        {title}
      </h1>
      <p className="text-gray-600 font-noto text-lg text-center mb-6">{text}</p>

      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white px-3 rounded-lg shadow-lg flex flex-col min-h-[210px]">
                <div className="flex justify-center mb-4">
                  <img src={slide.icon} alt="" className="w-20 h-20" />
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold font-noto text-center h-16">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 font-medium text-xs text-center">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
