import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import bakersfield from "../../assets/images/bakersfield-300x200.webp";
import fresno from "../../assets/images/fresno-300x200.webp";
import losAngeles from "../../assets/images/los-angles-300x200.webp";
import newportBeach from "../../assets/images/new-port-beach-300x200.webp";
import orangeCounty from "../../assets/images/orange-county-2-300x200.webp";
import palmSprings from "../../assets/images/palm-springs-1-300x200.webp";
import riverside from "../../assets/images/riverside-1-300x200.webp";
import sacramento from "../../assets/images/sacramento-300x200.webp";
import sanBernardino from "../../assets/images/san-bernandinho-300x200.webp";
import sanDiego from "../../assets/images/san-diego-3-300x200.webp";
import sanFrancisco from "../../assets/images/fresno-300x200.webp";
import santaBarbara from "../../assets/images/santa-barbara-1-300x200.webp";
import santaClara from "../../assets/images/santa-clara-1-300x200.webp";
import southernCalifornia from "../../assets/images/southern-california-300x200.webp";
import stockton from "../../assets/images/stockton-1-300x200.webp";
import temecula from "../../assets/images/temecula-1-300x200.webp";
import ventura from "../../assets/images/ventura-2-300x200.webp";
import { Link } from "react-router-dom";

const AreasWeServe = () => {
  const areas = [
    { name: "BAKERSFIELD", image: bakersfield, path: "/bakersfield" },
    { name: "FRESNO", image: fresno, path: "/fresno-county-security-guards" },
    {
      name: "LOS ANGELES",
      image: losAngeles,
      path: "/los-angeles-security-guards",
    },
    {
      name: "NEWPORT BEACH",
      image: newportBeach,
      path: "/service-areas/security-guard-newportbeach",
    },
    { name: "ORANGE COUNTY", image: orangeCounty, path: "/orange-county" },
    {
      name: "PALM SPRINGS",
      image: palmSprings,
      path: "/palm-springs-security-guards",
    },
    {
      name: "RIVERSIDE",
      image: riverside,
      path: "/security-guard-riverside-county",
    },
    {
      name: "SACRAMENTO",
      image: sacramento,
      path: "/sacramento-security-guards",
    },
    { name: "SAN BERNARDINO", image: sanBernardino, path: "/san-bernardino" },
    { name: "SAN DIEGO", image: sanDiego, path: "/san-diego-security-guards" },
    {
      name: "SAN FRANCISCO",
      image: sanFrancisco,
      path: "/service-areas/san-francisco",
    },
    {
      name: "SANTA BARBARA",
      image: santaBarbara,
      path: "/service-areas/security-guard-santa-barbara",
    },
    {
      name: "SANTA CLARA",
      image: santaClara,
      path: "/service-areas/security-guard-santa-clara",
    },
    {
      name: "SOUTHERN CALIFORNIA",
      image: southernCalifornia,
      path: "/southern-california",
    },
    { name: "STOCKTON", image: stockton, path: "/stockton" },
    { name: "TEMECULA", image: temecula, path: "/temecula-security-guards" },
    {
      name: "VENTURA",
      image: ventura,
      path: "/service-areas/ventura-county-security-guards",
    },
  ];

  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4 md:py-16 py-7">
        <h1 className="md:text-4xl text-[24px] font-semibold font-noto text-center text-[#003366] mb-8">
          AREAS WE SERVE
        </h1>
        <p className="text-center mb-16 mx-auto">
          FalconX Security Services takes great pride in offering the services
          of our dedicated Security guards in various regions across California.
        </p>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            {areas.map((area, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <Link
                      to={`${area.path}`}
                      className="text-xl font-bold mb-2"
                    >
                      {area.name}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AreasWeServe;
