import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-55.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-5-3.webp";
import image2 from "../../assets/images/03-2-3-1024x819.webp";

import sideImg from "../../assets/images/01-4-15.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import SEO from "../../components/shared/Seo";
import icon1 from "../../assets/images/01-19.svg";
import icon2 from "../../assets/images/02-18.svg";
import icon3 from "../../assets/images/03-18.svg";
import icon4 from "../../assets/images/04-18.svg";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const SanDiego = () => {
  const sanDiegoSecurityFeatures = [
    {
      icon: icon1,
      title: "Rigorously Trained Security Guards",
      description:
        "FalconX Security Services ensures its guards undergo comprehensive training to handle various security scenarios, providing you with a highly skilled and reliable security team.",
    },
    {
      icon: icon2,
      title: "Owned and Operated by Military Veterans",
      description:
        "You can trust a security service founded and operated by military veterans who bring discipline, expertise, and dedication to ensuring your safety.",
    },
    {
      icon: icon3,
      title: "Regular On-Site Inspections",
      description:
        "FalconX Security Services conducts regular on-site inspections to maintain the highest security standards and address potential issues quickly.",
    },
    {
      icon: icon4,
      title: "Customized Security Services",
      description:
        "Customizing security solutions to your specific needs, we prioritize a personalized approach, providing the flexibility required for your safety requirements in San Diego.",
    },
  ];
  const cities = [
    {
      left: [
        "Coronado",
        "National City",
        "Chula Vista",
        "Lemon Grove",
        "Bonita",
        "La Mesa",
        "La Presa",
        "Spring Valley",
      ],
      right: [
        "Imperial Beach",
        "La Jolla",
        "El Cajon",
        "Rancho San Diego",
        "Santee",
        "Bostonia",
        "Tijuana",
        "Winter Gardens",
      ],
    },
    {
      left: [
        "Granite Hills",
        "Jamul",
        "Eucalyptus Hills",
        "Lakeside",
        "Crest",
        "Del Mar",
        "Poway",
        "Fairbanks Ranch",
      ],
      right: [
        "Solana Beach",
        "Harbison Canyon",
        "Rancho Santa Fe",
        "Encinitas",
        "Alpine",
        "Rosarito",
        "Ramona",
        "Escondido",
      ],
    },
  ];

  return (
    <div>
      <SEO title="SAN DIEGO - Best Security Guard Service California" />
      <Banner
        title="TRUSTED SECURITY EXPERTS IN SAN DIEGO"
        backgroundImage={bgImage}
        bgclass="bg-left"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              Professional Security Guard Services Company in San Diego
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services is the best security guard services
              company in San Diego. Our professional security guards offer 24/7
              reliable security services that minimize the occurrence of threats
              and crimes. We pride ourselves on safeguarding people’s lives,
              assets, and properties by providing BSIS-licensed security guards.
              Whether you need vehicle patrol services, live video monitoring
              services, foot, bike, and golf cart services for your
              neighborhood, business, or organization, you will receive the best
              protection from FalconX Security Services you deserve in San
              Diego.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              San Diego County, California’s second largest and the United
              States eighth largest, encompasses 18 incorporated cities and
              various charming neighborhoods. This city has beautiful weather,
              sandy beaches, and tourist destinations like Legoland, Zoo Safari
              Park, and SeaWorld. It is known worldwide as one of the best
              tourist destinations where tourists relax and rejuvenate their
              vacations.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              With San Diego’s charming landscape and a rise in population,
              there is a need to protect personal space and assets. FalconX
              Security Services takes great pride in safeguarding people,
              businesses, and their assets at affordable prices. We establish a
              strong presence in your personal or retail space, our security
              guards always remain attentive to offer maximum security.
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
              <h1 className="text-xl md:text-4xl font-semibold font-noto text-[#003366]">
                Security Services Offered in San Diego County
              </h1>

              <p className="text-gray-600 leading-relaxed">
                FalconX Security Services provides the best security services in
                San Diego County. Whether you are looking for vehicle security
                patrolling, comprehensive remote patrol, and live video
                surveillance through CCTV cameras, we provide safety to your
                home and business. You can hire professional security guards and
                surveillance military personnel who will work day and night to
                ensure the safety of your family members and employees.
              </p>

              <p className="text-gray-600 leading-relaxed">
                You will need our unparalleled security services in San Diego
                for the following sectors:
              </p>
              <ul className="list-disc list-inside text-gray-700 px-2 space-y-1">
                <li>Event Security</li>
                <li>Retail Security</li>
                <li>Construction Site Security</li>
                <li>Medical and Corporate Building Security</li>
                <li>Parking Lot Patrolling</li>
                <li>Residential Building Security, and more</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Working tirelessly day and night with dedication and
                professionalism, our security guards are tasked with monitoring
                and securing customers’ assets. We consistently identify any
                potential threats and minimize the risk of mishaps occurring in
                San Diego.
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
        title="SAN DIEGO CITIES"
        description="We provide security guards services to many cities and neighborhood in San Diego County."
        cities={cities}
      />
      <Quote text1="FalconX Security Services – A Company You Can Feel Secure With!" />
      <Slider
        title="Responsibilities of Security Guards in San Diego"
        text="FalconX Security Services is committed to providing the utmost safety to the people of San Diego with highly professional security guards."
      />
      <Advantage
        title="Advantages of Hiring Security Guards In San Diego"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="text-xl md:text-3xl text-[#003366] font-bold  px-4">
            Why Should You Choose FalconX Security Services for Your Safety in
            San Diego?
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              FalconX Security Services provides you with the flexibility you
              need to accomplish your security needs. Our highly trained
              security guards provide customized security services regardless of
              whether you are running a business or a private organization in
              San Diego County. We stay updated on evolving security
              technologies and regularly enhance our skills to tackle industry
              challenges effectively.
            </p>
            <p>
              By partnering with FalconX Security Services, you will get a
              dedicated security companion that is committed to safeguarding
              your assets, employees, and clients at all times. In addition to
              this, we provide security risk management and consulting support,
              ensuring maximum protection in San Diego.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={sanDiegoSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default SanDiego;
