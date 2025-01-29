import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/Banner-6-1.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";
import ServicesNav from "../../components/ServicesNav";
import image1 from "../../assets/images/25-scaled.webp";
import image2 from "../../assets/images/03-image-1024x819.webp";

import sideImg from "../../assets/images/01-4.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import Ready from "../../components/shared/Ready";
import Quote from "../../components/shared/Quote";
import SEO from "../../components/shared/Seo";

import icon1 from "../../assets/images/armed-1.svg";
import icon2 from "../../assets/images/armed-2.svg";
import icon3 from "../../assets/images/armed-3.svg";
import icon4 from "../../assets/images/armed-4.svg";

const ArmedSecurity = () => {
  const features = [
    {
      icon: icon1,
      title: "Comprehensive Security Services",
      description:
        "We provide a complete range of armed security guard services specifically designed to meet your unique needs.",
    },
    {
      icon: icon2,
      title: "Experienced and Certified Guards",
      description:
        "Our armed security guards are licensed and well-trained to provide maximum protection in any situation.",
    },
    {
      icon: icon3,
      title: "State-of-the-Art Security Technology",
      description:
        "We use the latest technology and equipment to offer the best security services in Los Angeles.",
    },
    {
      icon: icon4,
      title: "24/7 Availability",
      description:
        "Our armed security services are available 24/7 whenever you need us to ensure that you are always protected.",
    },
  ];
  return (
    <div>
      <SEO
        title="ARMED SECURITY GUARDS - Best Security Guard Service Company"
        description="FalconX Security Services offers trusted armed security guard services in Los Angeles. With a team of highly trained professionals, we provide top-tier protection to ensure your safety and peace of mind."
      />

      <Banner title="ARMED SECURITY GUARDS" backgroundImage={bgImage} />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <ServicesNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-2xl mb-6 text-[#003366] md:text-3xl">
              FalconX Armed Security Guards: Your Shield for Trusted Protection
              in Los Angeles!
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services provides top-tier armed security guard
              services in Los Angeles. We are a highly professional and
              well-established security company, recognized for deploying
              trained and experienced armed security guards. Our commitment to
              professionalism has earned us a reputation as the leading armed
              security guard service provider in Los Angeles.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              We offer armed security services for:
            </p>
            <ul className="list-disc list-inside md:px-7  text-gray-800 my-3 text-justify leading-[27px]">
              {[
                "Shopping Malls",
                "Retail Stores",
                "Business Events",
                "Hotels",
                "Cruise Ships",
                "High Schools and Colleges, and many places.",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold text-[#003366]  my-3 text-justify leading-[27px]">
              Expertly Trained Armed Guards
            </h3>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              At FalconX Security Services, our team of armed security guards
              brings extensive experience in safeguarding businesses,
              individuals, and events from theft, harm, and loss in Los Angeles
              and throughout California. Our professional guards undergo
              rigorous training to effectively handle dangerous situations and
              weapons, ensuring the safety and protection of all stakeholders,
              including personnel and assets.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              We prioritize excellence in our armed security services, offering
              comprehensive protection tailored to meet the diverse needs of
              businesses in Los Angeles and beyond. With our experienced guards
              and customized security solutions, you can trust FalconX Security
              Services to prioritize your safety and peace of mind 24/7.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Key Points:
            </p>
            <ul className="list-disc list-inside md:px-7  text-gray-800 mb-6">
              {[
                "Experienced armed security guards trained to handle dangerous situations effectively.",
                "Comprehensive protection for businesses, individuals, and events.",
                "Tailored security solutions to meet the diverse needs of clients in Los Angeles and California.",
                "Prioritization of safety and peace of mind for all stakeholders.",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10 p-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-2xl md:text-left text-center md:text-4xl font-semibold font-noto text-[#003366]">
              Why Do I Need Armed Security Guards?
            </h1>

            <p className="text-gray-600 leading-relaxed">
              As Los Angeles’s population continues to grow, so do the risks of
              criminal activities in the region. At FalconX Security Services,
              we’re dedicated to safeguarding your assets and property from
              theft and damage, ensuring the protection of your investments. Our
              trained armed security guards are available 24/7 to provide
              comprehensive protection for your business, creating a peaceful
              and threat-free environment.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Consider hiring our armed security guards if:{" "}
              <ul className="list-disc list-inside text-gray-700 px-2 space-y-1">
                <li>You own a high-risk business.</li>
                <li>
                  You’re organizing a business event and prioritize everyone’s
                  safety.
                </li>
                <li>
                  You need an armed security guard for insurance purposes.
                </li>
                <li>You manage an active construction site.</li>
              </ul>
            </p>

            <p className="text-gray-600 leading-relaxed">
              Collaborating with our armed security guards at FalconX Security
              Services significantly reduces the occurrence of crimes in Los
              Angeles. For the best way to ensure your safety and protection,
              contact our armed security team today at{" "}
              <a href="tel:866-500-2050" className="text-blue-600 font-bold">
                (866-500-2050)
              </a>
              .
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img src={sideImg} alt="Security Guard" />
          </div>
        </div>
      </div>
      <Quote text1="Invest in Your Safety and Let Our Armed Security Guards Safeguard Your Business and Your Assets" />
      <Slider
        title="Responsibilities of Armed Security Guards"
        text="At FalconX Security Services, our armed security guards excel in fulfilling their duties effectively at clients' premises."
      />
      <Advantage
        title="Advantages of Opting for Armed Security Services"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20 my-7">
        <div>
          <h2 className="text-2xl  py-4 text-center md:text-left md:py-0 md:text-3xl text-[#003366] font-bold  px-4">
            Why Choose FalconX Security Services for Your Armed Security Needs
            in Los Angeles?
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              At FalconX Security Services, our experienced armed security
              guards are passionate about protecting your property and assets in
              Los Angeles. Our team of licensed and trained security guards
              brings exceptional professionalism, reliability, and 24/7
              availability.
            </p>
            <p>
              Understanding that each client is unique, we offer customized
              armed security guard services tailored to your specific needs. We
              take the time to understand your security requirements, and our
              experts craft a customized security plan to ensure maximum
              protection for your entire property and assets.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={features} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default ArmedSecurity;
