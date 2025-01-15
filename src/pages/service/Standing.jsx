import bgImage from "../../assets/images/Banner-5.jpg.webp";
import Banner from "../../components/shared/Banner";
import bg from "../../assets/images/Group-7140-1.webp";
import ServicesNav from "../../components/ServicesNav";
import sideImg from "../../assets/images/01-4-4.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import image1 from "../../assets/images/02-5-2.webp";
import image2 from "../../assets/images/03-2-2-1024x819.webp";
import FeaturesComponent from "../../components/shared/FeaturesComponent";

import Slider from "../../components/shared/Slider";

import icon1 from "../../assets/images/01-8.svg";
import icon2 from "../../assets/images/02-8.svg";
import icon3 from "../../assets/images/03-8.svg";
import icon4 from "../../assets/images/04-8.svg";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";
import SEO from "../../components/shared/Seo";

const Standing = () => {
  const standingGuardsFeatures = [
    {
      icon: icon1,
      title: "Expertise and Knowledge",
      description:
        "We deliver round-the-clock professional security, ensuring safety for businesses and individuals. Our knowledgeable and experienced standing guards are adept at crowd control, ensuring smooth operations, and imparting a sense of safety for all.",
    },
    {
      icon: icon2,
      title: "Customized Security Solutions",
      description:
        "We provide customized security solutions to address your specific needs, ensuring a personalized approach for maximum protection. Our commitment is to deliver reliable and effective security measures.",
    },
    {
      icon: icon3,
      title: "Proactive Risk Management",
      description:
        "Identifying potential threats before they escalate is crucial to maintaining a secure environment. Our professional standing guards are adept at analyzing and mitigating risks, ensuring the safety of individuals and the protection of assets with ease.",
    },
    {
      icon: icon4,
      title: "Cost-Effective Security",
      description:
        "FalconX Security Services offers affordable and reliable security solutions for your peace of mind. Our cost-effective services ensure the safety of your property, employees, and customers without compromising quality or effectiveness.",
    },
  ];
  return (
    <div>
      <SEO title="STANDING GUARD - Best Security Guard Service California" />
      <Banner
        title="STANDING SECURITY GUARD SERVICES"
        backgroundImage={bgImage}
        bgclass="bg-left"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <ServicesNav />
          <div className="mt-7 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              Best Standing Guards in California - Protecting People, Assets,
              and Property
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[25px]">
              FalconX Security Services is a leading provider of exceptional
              standing security services in California, catering to businesses
              of all sizes. Our standing guard security service ensures a
              visible and proactive presence to prevent criminal activities,
              safeguarding your property, assets, and employees. We understand
              the different security concerns of each of our customers and work
              closely with you to create a customized security plan to meet your
              specific requirements.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[25px]">
              At FalconX Security Services, our standing security guards offer
              flexible scheduling options to visit your location at your
              convenience. We work effortlessly to provide maximum security to
              our customers not only in Los Angeles County but also in all
              regions of California. Our standing guards ensure the safety of
              your property and assets day and night without compromising on our
              services.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[25px]">
              Whether you are looking for short-term security services or a
              long-term security plan, the standing guards at FalconX Security
              Services provide the utmost security in California that people
              deserve. Our goal is to ensure that your employees, property, and
              assets are protected, and our commitment to exceptional customer
              service means that you can always find us at your service when you
              need us the most.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[25px]">
              At FalconX Security Services, our professional standing guards
              provide security services for:
            </p>

            <ul className="list-disc list-inside  md:px-7  text-gray-800 mb-6">
              {[
                "Shopping centers and malls",
                "Corporate buildings",
                "Concert and sports venues",
                "Apartments and condominiums",
                "Highly secured medical labs",
                "Equipment yards",
                "Parking lots",
                "Construction sites, and more",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className=" text-gray-800 my-3 text-justify leading-[25px]">
              Our well-trained standing guards are available for temporary,
              permanent, and emergency services across all regions of
              California. We regularly supervise our guards on-site through
              mobile supervisors and also use a computerized security guard
              control system to track their movements, with a vision to provide
              you with maximum security.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10 p-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-xl md:text-4xl font-semibold font-noto text-[#003366]">
              Licensed Standing Guards in California: Your Assurance of
              Excellence
            </h1>

            <p className="text-gray-600 leading-relaxed">
              With crime rates on the rise in California, the role of security
              guards has become indispensable across various domains, from
              safeguarding celebrities or VIPs at events or concerts to
              restricting entry to highly secured research labs. Elevate the
              security of your property or assets by reaching out to our
              security experts at (866-500-2050). Our standing security guards
              work tirelessly day and night to ensure the safety of our
              customers across all regions of California.
            </p>

            <p className="text-gray-600 leading-relaxed">
              At FalconX Security Services, we take immense pride in delivering
              top-tier deterrence and safety, particularly during high-crime
              hours and in vulnerable areas. Our knowledgeable and experienced
              standing security guards are renowned for:
            </p>
            <ul className="list-disc list-inside  md:px-7  text-gray-800 mb-6">
              {[
                "World-Class Customer Service",
                "Punctuality",
                "Thorough Protection Strategies",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img src={sideImg} alt="Security Guard" />
          </div>
        </div>
      </div>
      <Quote
        text1="Protection You Can Trust – Leading Provider of Specialized"
        text2="Standing Security Guards in California."
      />
      <Slider
        title="Responsibilities of Standing Security Guards"
        text="FalconX Security Services are exceptionally productive in fulfilling their responsibilities at client’s premises."
      />
      <Advantage
        title="Advantages of Hiring Standing Security Guards"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="text-xl md:text-3xl text-[#003366] font-bold  px-4">
            How FalconX Security Services Can Benefit Your Business?
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              FalconX Security Services takes great pride in ensuring the safety
              and well-being of your business in Los Angeles County and
              throughout California. Our standing security guards play a crucial
              role in safeguarding your premises, assets, and employees,
              offering a range of benefits customized to meet your specific
              needs.
            </p>
            <p>
              Our standing security guards are selected on the basis of their
              skills, knowledge, and experience, undergoing thorough background
              checks and comprehensive training programs to provide their
              reliability and professionalism. With FalconX Security Services,
              you can trust that your business is protected by experienced and
              well-prepared military personnel.
            </p>
            <p>
              We are committed to providing personalized security solutions.
              Whether you operate in a commercial, industrial, or residential
              sector, our standing security guards adapt to the unique
              requirements of your business. Our well-trained and experienced
              standing security guards perform exceptional tasks.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={standingGuardsFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default Standing;
