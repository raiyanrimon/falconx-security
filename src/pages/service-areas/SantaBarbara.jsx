import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-57.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-6-3.webp";
import image2 from "../../assets/images/03-4-3-1024x819.webp";

import sideImg from "../../assets/images/01-4-17.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import SEO from "../../components/shared/Seo";
import icon1 from "../../assets/images/01-21.svg";
import icon2 from "../../assets/images/02-20.svg";
import icon3 from "../../assets/images/03-20.svg";
import icon4 from "../../assets/images/04-20.svg";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const SantaBarbara = () => {
  const santaBarbaraSecurityFeatures = [
    {
      icon: icon1,
      title: "Licensing and Insurance",
      description:
        "Our company is fully licensed and insured, ensuring your peace of mind. In the unlikely event of accidents or damage, you will feel secure with FalconX Security Services in Santa Barbara.",
    },
    {
      icon: icon2,
      title: "Experience and Reputation",
      description:
        "With a robust track record, our solid reputation is built on years of delivering quality security services. Our unarmed, armed, and standing guards safeguard your premises with full professionalism.",
    },
    {
      icon: icon3,
      title: "Range of Services",
      description:
        "Tailoring to your needs, we offer diverse security services, from event security to residential community protection. Our trained team is fully equipped with the latest technological equipment to safeguard Santa Barbara.",
    },
    {
      icon: icon4,
      title: "Training and Qualifications",
      description:
        "Committed to excellence, our highly trained and qualified security personnel undergo strict hiring and training processes. You can rest assured that our security guards are the best in Santa Barbara.",
    },
  ];
  const cities = [
    {
      left: [
        "Mission Canyon",
        "Montecito",
        "Summerland",
        "Goleta",
        "Toro Canyon",
        "Isla Vista",
        "Carpinteria",
        "Oak View",
      ],
      right: [
        "Mira Monte",
        "Meiners Oaks",
        "Ventura",
        "Santa Ynez",
        "Ojai",
        "Solvang",
        "Vandenberg Village",
        "Los Olivos",
      ],
    },
    {
      left: [
        "Oxnard Shores",
        "Buellton",
        "Channel Islands Beach",
        "Saticoy",
        "El Rio",
        "Oxnard",
        "Port Hueneme",
        "Santa Paula",
      ],
      right: [
        "Los Alamos",
        "Camarillo",
        "Pine Mountain Club",
        "Fillmore",
        "Lompoc",
        "Mission Hills",
        "Casa Conejo",
        "Maricopa",
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="SANTA BARBARA - Best Security Guard Service Company"
        description="FalconX Security Services offers trusted security solutions in Santa Barbara, CA, safeguarding businesses, residents, and visitors. Our range of services includes access control, vehicle patrolling, and both armed and unarmed security guards to ensure safety while preserving the city’s charm."
      />
      <Banner
        title="SECURITY GUARD SERVICES IN SANTA BARBARA"
        backgroundImage={bgImage}
        bgclass="bg-right"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-2xl mb-6 text-[#003366] md:text-3xl">
              Safeguarding Santa Barbara: FalconX Security Services, Your
              Trusted Security Companion
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services proudly serves as the trusted security
              service provider in Santa Barbara, California. Situated along the
              central coast, Santa Barbara is renowned for its natural beauty,
              cultural richness, and thriving business community. Popular
              landmarks like State Street and Santa Barbara Harbor showcase the
              city’s robust business presence, and FalconX Security Services is
              dedicated to safeguarding these vibrant areas.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              As the go-to security company in Santa Barbara, CA, we offer a
              comprehensive range of services, including access control, vehicle
              patrolling security, unarmed security, and armed security guards.
              Our mission is to uphold safety for residents, visitors, and
              businesses throughout the community.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Our security guards are not just highly trained; they are also
              deeply rooted in the values and culture of Santa Barbara. We
              prioritize seamlessly integrating security into the local
              environment, preserving the city’s unique charm while prioritizing
              safety. You can choose us for your security needs in Santa
              Barbara, CA, and experience the difference!
            </p>
          </div>
        </div>
      </div>
      <ServiceList />
      <div className="bg-[#F4F4F4] md:py-16 py-5">
        <div className="max-w-6xl mx-auto my-10 p-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-2xl md:text-left text-center md:text-4xl font-semibold font-noto text-[#003366]">
                Ensure Safety in Santa Barbara County with Our Trusted Security
                Guard Services
              </h1>

              <p className="text-gray-600 leading-relaxed">
                Our security guards act as lifeguards, providing protection and
                assurance during challenging situations like riots or shootings.
                People find comfort in the visible presence of guards. At
                FalconX Security Services, our Santa Barbara County security
                guard services impart a robust sense of security in businesses,
                hotels, hospitals, and shopping malls. With years of industry
                experience, our guards are not only seasoned but also dynamic,
                professional, and deeply committed to their roles.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Beyond serving offices and residences, we extend personalized
                services for construction sites and private events such as
                weddings and corporate parties. Our expertise includes event
                security, featuring adept professionals safeguarding VIP guests.
                Whether it is a short-term on-call requirement, patrolling, or
                personalized guard services, we are here to ensure the safety
                and security of Santa Barbara County.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative">
              <img src={sideImg} alt="Security Guard" />
            </div>
          </div>
        </div>
      </div>
      <Cities
        title="Santa Barbara Counties"
        description="We provide private security guard services to many cities and neighborhoods in Santa Barbara, California."
        cities={cities}
      />
      <Quote text1="SHARE YOUR NEEDS WITH US. WE'RE HERE TO LISTEN AND COLLABORATE TO ENSURE YOUR COMPLETE SATISFACTION" />
      <Slider
        title="Responsibilities of Security Guards in Santa Barbara"
        text="FalconX Security Services is committed to providing the utmost safety to the people of Santa Barbara County with highly professional security guards."
      />
      <Advantage
        title="Benefits of Hiring Security Guards in Santa Barbara"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20 my-7">
        <div>
          <h2 className="text-2xl  py-4 text-center md:text-left md:py-0 md:text-3xl text-[#003366] font-bold  px-4">
            Why Choose FalconX Security Services in Santa Barbara?
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              Choosing FalconX Security Services for safeguarding Santa Barbara
              ensures a vigilant shield against potential threats. Our
              commitment to safety goes beyond protection; it is a dedication to
              the community’s peace of mind. With a team of trained
              professionals, we tailor our security solutions to the unique
              needs of Santa Barbara, encompassing businesses, residences, and
              events.
            </p>
            <p>
              We stand out for our comprehensive approach, combining advanced
              surveillance technology with a community-centric mindset. Whether
              securing corporate offices or providing executive protection, our
              services are designed to adapt to the evolving security landscape
              of Santa Barbara. You can live a peaceful life knowing that
              FalconX Security Services prioritizes your safety, offering
              reliable protection for the vibrant and diverse community of Santa
              Barbara.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={santaBarbaraSecurityFeatures} />
      <AreasWeServe text="FalconX Security Services proudly offers professional security guard services in Santa Barbara to safeguard large enterprises, retail industries, residences, and event areas." />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default SantaBarbara;
