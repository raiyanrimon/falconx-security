import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-60.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-6-2.webp";
import image2 from "../../assets/images/03-4-2-1024x819.webp";

import sideImg from "../../assets/images/01-4-19.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import icon1 from "../../assets/images/01-24.svg";
import icon2 from "../../assets/images/02-23.svg";
import icon3 from "../../assets/images/03-23.svg";
import icon4 from "../../assets/images/04-23.svg";
import SEO from "../../components/shared/Seo";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const Stockton = () => {
  const securityFeatures = [
    {
      icon: icon1,
      title: "Pre-Screened Guards",
      description:
        "We hire only the best, ensuring our unarmed and armed security guards meet high standards with the utmost dedication and professionalism.",
    },
    {
      icon: icon2,
      title: "Custom-Tailored Services",
      description:
        "Our security services are customized to suit the unique needs of your business with a vision to ensure the maximum safety of your assets.",
    },
    {
      icon: icon3,
      title: "Advanced Security Vehicles",
      description:
        "Our marked and unmarked vehicles are equipped with GPS systems, enhancing our security capabilities.",
    },
    {
      icon: icon4,
      title: "24/7 Support Team",
      description:
        "You can experience a safe and productive work environment with our skilled security guards, regular quality inspections, and a 24/7 contact center.",
    },
  ];

  const cities = [
    {
      left: [
        "August",
        "Kennedy",
        "Country Club",
        "Taft Mosswood",
        "Garden Acres",
        "Lincoln Village",
        "French Camp",
        "Morada",
      ],
      right: [
        "Lathrop",
        "Manteca",
        "Lodi",
        "Linden",
        "Woodbridge",
        "Lockeford",
        "Tracy",
        "Discovery Bay",
      ],
    },
    {
      left: [
        "Ripon",
        "Collierville",
        "Mountain House",
        "Bethel Island",
        "Escalon",
        "Thornton",
        "Byron",
        "Galt",
      ],
      right: [
        "Knightsen",
        "Salida",
        "Dogtown",
        "Del Rio",
        "Walnut Grove",
        "Oakley",
        "Herald",
        "Brentwood",
      ],
    },
  ];

  return (
    <div>
      <SEO title="STOCKTON - Best Security Guard Service California" />
      <Banner
        title="SECURITY GUARD COMPANY IN STOCKTON"
        backgroundImage={bgImage}
        bgclass="bg-right"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              Protecting Stockton's Treasures: Enhancing Security with FalconX
              Security Services
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Stockton, with its scenic charm and vibrant tourism scene, boasts
              numerous attractions that draw visitors from far and wide. From
              the picturesque waterfront to the historic downtown area, Stockton
              offers a wealth of beauty and cultural experiences. However,
              alongside its allure, the city faces security concerns like theft,
              burglary, and vandalism that threaten its treasures.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Tourist hotspots such as the Haggin Museum, Stockton Marina, and
              Victory Park are not immune to these risks. Ensuring the safety
              and protection of these landmarks is crucial to preserving
              Stockton’s appeal and reputation as a tourist destination.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services is a well-known security guard services
              company headquartered in Los Angeles. With our expertly trained
              security personnel, we provide a vital layer of protection for
              Stockton’s attractions. Whether it is patrolling the waterfront,
              monitoring surveillance systems at museums, or safeguarding public
              parks, FalconX Security Services offers comprehensive security
              solutions tailored to the unique needs of Stockton’s tourist
              spots.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              By partnering with us, Stockton can enhance security measures and
              safeguard its beauty and cultural heritage from the threat of
              crime. With our presence, locals and visitors can enjoy the
              county’s attractions with peace of mind, knowing that they are
              protected by dedicated professionals.
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
                Do I Need Security Guard Services in Stockton?
              </h1>

              <p className="text-gray-600 leading-relaxed">
                Stockton, renowned for its scenic attractions and vibrant
                tourism, also grapples with security challenges. In recent
                years, the city has seen fluctuating crime rates. For example,
                in 2020, there were 3,982 reported incidents of property crime
                and 678 incidents of violent crime.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Beyond traditional crime, Stockton also faces risks like fire
                outbreaks in apartments, forced break-ins of cars, and also in
                vacant properties. These incidents underscore the need for
                comprehensive security measures.
              </p>
              <p className="text-gray-600 leading-relaxed">
                FalconX Security Services offers tailored solutions to address
                Stockton’s security needs. With our expertly trained personnel,
                we can patrol residential areas, monitor surveillance systems,
                and respond swiftly to security threats.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated and knowledgeable security guards enhance safety
                for property owners, businessmen, employees, and assets in
                Stockton, protecting against prevalent security risks. With us,
                enjoy peace of mind knowing your property is safeguarded by top
                security.
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
        title="STOCKTON CITIES"
        description="We provide private security guard services to many cities and neighborhood in Stockton, California"
        cities={cities}
      />
      <Quote text1="FalconX Security Services – A Company You Can Feel Secure With!" />
      <Slider
        title="Responsibilities of Security Guards in Stockton"
        text="FalconX Security Services is committed to providing the utmost safety to the people of Stockton with highly professional security guards."
      />
      <Advantage
        title="Benefits Of Choosing Security Services In Stockton"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="text-xl md:text-3xl text-[#003366] font-bold  px-4">
            FalconX Security Services – Your Specialists in Stockton Security
            Solutions
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              Businesses, regardless of size, face constant internal and
              external threats. FalconX Security Services, a trusted security
              company, mitigates risks, prevents theft, and maintains a safe
              environment in Stockton. Our highly professional, licensed armed
              and unarmed security guard services are tailored to meet client
              needs. Adapting to evolving technology and threat landscapes, we
              ensure your safety and security at all times. FalconX Security
              Services excels as specialists in top-notch security guard
              services in Stockton, prioritizing the protection of your assets
              with a dedicated team of well-trained professionals.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={securityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default Stockton;
