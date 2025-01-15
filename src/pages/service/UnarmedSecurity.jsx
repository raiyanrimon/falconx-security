import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/Banner.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";
import ServicesNav from "../../components/ServicesNav";
import image1 from "../../assets/images/02-5-1-2.webp";
import image2 from "../../assets/images/03-2-1-2-1024x819.webp";

import sideImg from "../../assets/images/01-4-5.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import icon1 from "../../assets/images/01-4.svg";
import icon2 from "../../assets/images/02-4.svg";
import icon3 from "../../assets/images/03-4.svg";
import icon4 from "../../assets/images/04-4.svg";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";
import SEO from "../../components/shared/Seo";

const UnarmedSecurity = () => {
  const unarmedGuardsFeatures = [
    {
      icon: icon1,
      title: "Adaptable Unarmed Security Guards",
      description:
        "The unarmed security guards at FalconX Security Services are adaptable in various work cultures. Our flexibility ensures effective protection for businesses, events, and homes in dynamic environments.",
    },
    {
      icon: icon2,
      title: "24-Hour Unarmed Security Guards",
      description:
        "At FalconX Security Services, our 24/7 unarmed security guards ensure continuous protection for businesses and events. With exceptional dedication, we provide a reliable shield to maintain safety day and night.",
    },
    {
      icon: icon3,
      title: "Customer-Focused Support",
      description:
        "Our unarmed security guards prioritize the safety and well-being of customers. We offer compassionate and supportive assistance, ensuring individuals feel secure and attended during emergency circumstances.",
    },
    {
      icon: icon4,
      title: "Knowledgeable Unarmed Security Guards",
      description:
        "Our knowledgeable unarmed security guards bring expertise to safeguard your premises. With in-depth training, we excel in identifying and addressing security concerns, ensuring a safe and secure environment.",
    },
  ];

  return (
    <div>
      <SEO
        title="UNARMED SECURITY GUARDS - Best Security Guard Service California"
        description="FalconX Security Services provides discreet and effective unarmed security guards in Los Angeles. Our highly trained professionals offer customized solutions to protect your assets and ensure safety across various industries."
      />
      <Banner
        title="UNARMED SECURITY GUARDS"
        backgroundImage={bgImage}
        bgclass="bg-right"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <ServicesNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              Discreet and Effective Unarmed Security Guards Company in Los
              Angeles
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services, a trusted security service provider in
              Los Angeles, is committed to deliver discreet and effective
              unarmed security services with a vision to protect the lives of
              people and assets. Our highly trained unarmed security guards are
              committed to professionalism, customized solutions, and client
              satisfaction.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              We have the expertise to handle various security challenges,
              satisfying the needs of our customers by ensuring the safety of
              their valuable assets. Our unarmed security guard services
              safeguard various industries such as corporate offices, retail
              establishments, residential complexes, educational institutions,
              healthcare facilities, and event venues. We ensure that our
              security guards undergo extensive training to gain experience in
              their related fields. Our security guards stay up-to-date with the
              latest security protocols and technologies to provide you with the
              utmost protection.
            </p>
            <h3 className="text-2xl font-semibold text-[#003366]  my-3 text-justify leading-[27px]">
              You may hire our unarmed security guards if:
            </h3>
            <ul className="list-disc list-inside md:px-7  text-gray-800 my-3 text-justify leading-[27px]">
              {[
                "You are running a profitable business with a lot of foot traffic.",
                "You are organizing a business event and do not want to danger the lives of people.",
                "You need security guards for insurance purposes.",
                "You are managing an active construction site.",
                "You are an owner of a high-risk business.",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Working with our unarmed security guards, at FalconX Security
              Services, reduces the chances of the occurrence of any potential
              crime. If you are looking for the best unarmed security guard
              services in Los Angeles, contact us{" "}
              <a href="tel:866-500-2050" className="text-blue-600 font-bold">
                (866-500-2050)
              </a>{" "}
              and provide safety and insurance against potential harm.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10 p-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-xl md:text-4xl font-semibold font-noto text-[#003366]">
              Ensuring Your Safety with Vigilance
            </h1>

            <p className="text-gray-600 leading-relaxed">
              At FalconX Security Services, our unarmed security guards play a
              crucial role in safeguarding designated areas and properties. Our
              security guards are positioned at a fixed location like at entry
              points or patrol an area to ensure that it is secure and safe.
            </p>

            <p className="text-gray-600 leading-relaxed">
              In addition to this, our unarmed security guards are highly
              trained to perform a variety of tasks, including:
              <ul className="list-disc list-inside text-gray-700 px-2 space-y-1">
                <li>
                  Effectively monitoring security cameras and other systems for
                  enhanced surveillance.
                </li>
                <li>Checking IDs and bags of people entering the area.</li>
                <li>
                  Regularly patrol the area to identify the presence of any
                  unauthorized person.
                </li>
                <li>Quickly respond to alarms or any emergencies.</li>
                <li>
                  Efficiently handle minor incidents or disturbances, such as
                  disputes or trespassing.
                </li>
              </ul>
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our unarmed security guards do not carry weapons but are
              well-trained in basic self-defense techniques and emergency
              response procedures. So, you do not need to worry about the safety
              of your premises and people.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img src={sideImg} alt="Security Guard" />
          </div>
        </div>
      </div>
      <Quote
        text1="Unarmed, Unbeatable! We ensure maximum safety and"
        text2="peace of mind to safeguard your premises."
      />
      <Slider
        title="Responsibilities of Unarmed Security Guards"
        text="At FalconX Security Services, our unarmed security guards in Los Angeles ensure safety with continuous vigilance, access control, and expert response with experience and passion."
      />
      <Advantage
        title="Advantages of Hiring Unarmed Security Guards"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="text-xl md:text-3xl text-[#003366] font-bold  px-4">
            Why Do I Need FalconX Security Services in Los Angeles?
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              FalconX Security Services in Los Angeles is the best unarmed
              security guard provider company to ensure your safety. We
              recognize the unique security requirements of each client,
              customizing our services to meet your specific needs. With a
              wealth of experience and high-quality expertise, our unarmed
              security guards ensure the highest level of protection for your
              office, construction site, or event.
            </p>
            <p>
              Choosing FalconX Security Services provides your representation
              with utmost professionalism, ensuring the safety and security of
              your assets and property by our unarmed security guards, even in
              multiple locations. Our unarmed security services are synonymous
              with reliability and training. Equipped with the latest
              technology, our guards are always prepared to handle any
              situation, having undergone training in emergency response, first
              aid, and effective techniques.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={unarmedGuardsFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default UnarmedSecurity;
