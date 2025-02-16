import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import { Link } from "react-router-dom";

const AreasWeServe = ({text}) => {
  const areas = [
    { name: "BAKERSFIELD", image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739698849/bakersfield-300x200_tzqlxw.webp", path: "/bakersfield" },
    { name: "FRESNO", image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699242/freshno-300x200_sedmcc.webp", path: "/fresno-county-security-guards" },
    {
      name: "LOS ANGELES",
      image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699309/los-angles-300x200_rkmhe4.webp",
      path: "/los-angeles-security-guards",
    },
    {
      name: "NEWPORT BEACH",
      image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699335/new-port-beach-300x200_lz9zzp.webp",
      path: "/service-areas/security-guard-newportbeach",
    },
    { name: "ORANGE COUNTY", image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699360/orange-county-2-300x200_m1fbc8.webp", path: "/orange-county" },
    {
      name: "PALM SPRINGS",
      image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699380/palm-springs-1-300x200_ywkm8s.webp",
      path: "/palm-springs-security-guards",
    },
    {
      name: "RIVERSIDE",
      image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699401/riverside-1-300x200_fztkvp.webp",
      path: "/security-guard-riverside-county",
    },
    {
      name: "SACRAMENTO",
      image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699424/sacramento-300x200_nxtrnf.webp",
      path: "/sacramento-security-guards",
    },
    { name: "SAN BERNARDINO", image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699521/san-bernandinho-300x200_z50jfl.webp", path: "/san-bernardino" },
    { name: "SAN DIEGO", image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699461/san-diego-3-300x200_jfgmiz.webp", path: "/san-diego-security-guards" },
    {
      name: "SAN FRANCISCO",
      image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699242/fresno-300x200_moyhcx.webp",
      path: "/service-areas/san-francisco",
    },
    {
      name: "SANTA BARBARA",
      image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699461/santa-barbara-1-300x200_kef3ku.webp",
      path: "/service-areas/security-guard-santa-barbara",
    },
    {
      name: "SANTA CLARA",
      image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699462/santa-clara-1-300x200_ectkz4.webp",
      path: "/service-areas/security-guard-santa-clara",
    },
    {
      name: "SOUTHERN CALIFORNIA",
      image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699548/southern-california-300x200_skgl9i.webp",
      path: "/southern-california",
    },
    { name: "STOCKTON", image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699571/stockton-1-300x200_zjxzs8.webp", path: "/stockton" },
    { name: "TEMECULA", image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699593/temecula-1-300x200_ae9jxx.webp", path: "/temecula-security-guards" },
    {
      name: "VENTURA",
      image: "https://res.cloudinary.com/dohsydnc3/image/upload/v1739699613/ventura-2-300x200_klyqzv.webp",
      path: "/service-areas/ventura-county-security-guards",
    },
  ];

  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4 md:py-16 py-7">
        <h1 className="md:text-4xl text-[24px] font-semibold font-noto text-center text-[#003366] mb-8">
          AREAS WE SERVE
        </h1>
        <p className="text-center mb-10 mx-auto">
          {text}
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
                    <h3 className="text-lg font-semibold font-noto mb-2">
                      {area.name} </h3>
                    <Link
                      to={`${area.path}`}
                      className="hover:text-blue-500 font-medium"
                    >
                      Read More
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
