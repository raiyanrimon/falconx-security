import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-62.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-7-1.webp";
import image2 from "../../assets/images/03-5-1-1024x819.webp";

import sideImg from "../../assets/images/01-4-21.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import SEO from "../../components/shared/Seo";
import icon1 from "../../assets/images/01-26.svg";
import icon2 from "../../assets/images/02-25.svg";
import icon3 from "../../assets/images/03-25.svg";
import icon4 from "../../assets/images/04-25.svg";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const Ventura = () => {
  const venturaSecurityFeatures = [
    {
      icon: icon1,
      title: "Enhanced Safety and Security",
      description:
        "FalconX Security Services ensures your safety with professionally trained guards, adept at preventing threats and maintaining a secure environment in Ventura County.",
    },
    {
      icon: icon2,
      title: "Reduced Risk of Liability",
      description:
        "Our trained security guards mitigate risks, minimizing liability for businesses, events, and residential areas in Ventura to ensure the maximum safety of people and their assets.",
    },
    {
      icon: icon3,
      title: "Cost-effective Security",
      description:
        "FalconX Security Services offers cost-effective security solutions, providing top-notch protection without compromising your budget in Ventura.",
    },
    {
      icon: icon4,
      title: "Customizable Security Solutions",
      description:
        "Customized to your needs, our effective security services in Ventura offer customizable solutions to address specific requirements and ensure comprehensive safety.",
    },
  ];
  const cities = [
    {
      left: [
        "Oxnard Shores",
        "El Rio",
        "Saticoy",
        "Oak View",
        "Oxnard",
        "Channel Islands Beach",
        "Port Hueneme",
        "Mira Monte",
      ],
      right: [
        "Meiners Oaks",
        "Ojai",
        "Santa Paula",
        "Camarillo",
        "Carpinteria",
        "Toro Canyon",
        "Summerland",
        "Casa Conejo",
      ],
    },
    {
      left: [
        "Montecito",
        "Fillmore",
        "Moorpark",
        "Santa Barbara",
        "Mission Canyon",
        "Thousand Oaks",
        "Simi Valley",
        "Westlake Village",
      ],
      right: [
        "Piru",
        "Oak Park",
        "Agoura Hills",
        "Goleta",
        "Agoura",
        "Santa Susana",
        "Malibu",
        "Isla Vista",
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="VENTURA COUNTY - Best Security Guard Service California"
        description="FalconX Security Services offers tailored security solutions for Ventura County, including armed and unarmed guards, vehicle patrols, event security, and fire watch services. With 24/7 availability and innovative patrol options, we provide peace of mind to businesses, residents, and visitors across the region, ensuring safety in Ventura’s diverse landscapes and industries."
      />
      <Banner
        title="SECURITY GUARD COMPANY IN VENTURA COUNTY"
        backgroundImage={bgImage}
        bgclass="bg-right"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              Securing Ventura County: Effective Security Services by FalconX
              Security Services
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services is pleased to offer our discreet and
              effective security services to the beautiful and charming Ventura
              County region. With diverse landscapes varied industries, and
              stunning coastlines, Ventura County demands an adaptable security
              approach. Our unique security services cover armed and unarmed
              guards, efficient vehicle patrols for large properties, event
              security, and crucial fire watch services during California’s fire
              season.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              We introduce innovative patrol options like foot, bike, and golf
              cart patrols and employ advanced command center operations for
              monitoring and threat assessment. Whether it is a beachfront
              resort in Ventura, a strawberry farm in Oxnard, a tech startup in
              Thousand Oaks, or a quiet residential community in Camarillo,
              FalconX Security Services ensures the safety and security of all
              Ventura County residents, businesses, and visitors. Our 24/7
              service offers customized security solutions, providing peace of
              mind to address your unique needs.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              We offer a variety of security services including:
            </p>
            <ul className="list-disc list-inside text-gray-800 my-3 text-justify leading-[27px]">
              <li>Event Security</li>
              <li>Parking Management</li>
              <li>Armed and Unarmed Security</li>
              <li>Access Control, and more</li>
            </ul>
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
                FalconX Security Services: Trusted Security Guard Company in
                Ventura
              </h1>

              <p className="text-gray-600 leading-relaxed">
                FalconX Security Services is popularly known as the premier
                provider of professional security guard services in Ventura
                County. We prioritize your safety with dedicated and
                personalized security solutions. Whether safeguarding
                businesses, overseeing events, or securing residential areas,
                our security guards excel in preventive measures and swift
                responses. Our commitment to excellence is evident in our
                well-trained security guards, regularly updated through
                extensive training in protective services. With FalconX Security
                Services, you benefit from advanced technology, continuous
                improvement, and years of industry expertise, setting a new
                standard for security services in Ventura County. You can choose
                us as a reliable partner in ensuring a safe and secure
                environment customized to meet your unique security needs.
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
        title="VENTURA COUNTY CITIES"
        description="We provide private security guards services to many cities and neighborhood in Ventura County."
        cities={cities}
      />
      <Quote text1="FalconX Security Services – A Company You Can Feel Secure With!" />
      <Slider
        title="Responsibilities of Security Guards in Ventura"
        text="FalconX Security Services is committed to providing the utmost safety to the people of Ventura with highly professional security guards."
      />
      <Advantage
        title="Benefits Of Choosing Security Guard Company in Ventura"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="text-xl md:text-3xl text-[#003366] font-bold  px-4">
            Professionally Trained Security Guards in Ventura: The Pillars of
            Your Safety
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              In Ventura County, your safety is ensured by our professionally
              trained security guards at FalconX Security Services. Our guards
              stand as unwavering pillars of security, effectively trained to
              protect businesses, events, and residential areas. With a
              commitment to excellence, we ensure that our guards undergo
              rigorous training programs to stay updated on the latest security
              protocols. These dedicated individuals are the guardians of your
              peace of mind, emphasizing preventive measures and prompt
              responses to potential threats. Whether it is a well-established
              business, a small start-up, or a serene residential community, our
              security guards are the frontline defenders of your safety in
              Ventura. You can trust FalconX Security Services to provide the
              highest standard of security, ensuring a protected and secure
              environment for all.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={venturaSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default Ventura;
