import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-26.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";
import ServicesNav from "../../components/ServicesNav";
import image1 from "../../assets/images/02-19.webp";
import image2 from "../../assets/images/03-18-1024x819.webp";

import sideImg from "../../assets/images/01-webp-15.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import SEO from "../../components/shared/Seo";
import icon1 from "../../assets/images/01-121.svg";
import icon2 from "../../assets/images/02-121.svg";
import icon3 from "../../assets/images/03-121.svg";
import icon4 from "../../assets/images/04-121.svg";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const Private = () => {
  const privateResidenceSecurityFeatures = [
    {
      icon: icon1,
      title: "Experienced Guards",
      description:
        "FalconX Security Services employs trained guards familiar with California's security needs, ensuring professional protection for your private residence.",
    },
    {
      icon: icon2,
      title: "Advanced Technology",
      description:
        "Utilizing state-of-the-art CCTV and alarm systems, our security guards offer cutting-edge security solutions tailored to California's unique environment.",
    },
    {
      icon: icon3,
      title: "Personalized Plans",
      description:
        "We understand the importance of customization, crafting individualized security strategies to address specific concerns and requirements of California homeowners.",
    },
    {
      icon: icon4,
      title: "Reliable Protection",
      description:
        "With us, your home receives round-the-clock surveillance and prompt response to security threats, providing dependable protection for you and your family in California.",
    },
  ];
  return (
    <div>
      <SEO
        title="PRIVATE HOME SECURITY SERVICES - Best Security Guard Service California"
        description="Secure your home with FalconX Security Services in California. Our professional guards provide comprehensive protection against burglaries, theft, and vandalism, ensuring peace of mind for homeowners. With personalized security plans, CCTV, panic buttons, and more, we prioritize your safety 24/7."
      />
      <Banner
        title="HOME SECURITY GUARD SERVICES"
        backgroundImage={bgImage}
        bgclass="bg-right"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <ServicesNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              FalconX Security Services: Best Private Home Security Guard
              Services in California
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              In California, the need for private home security guard services
              is essential due to various factors. With high crime rates
              troubling some areas, independent homes are vulnerable to
              burglaries, theft, and vandalism. In 2020 alone, over 110,000
              burglaries were reported in California, highlighting the pressing
              need for enhanced security measures.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Moreover, safeguarding the independent homes of celebrities, VIPs,
              and businessmen is crucial for maintaining property values. Homes
              in secure neighborhoods or equipped with security systems tend to
              have higher resale values compared to those in high-crime areas,
              making security investments worthwhile for homeowners.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              California’s susceptibility to natural disasters like wildfires
              and earthquakes further underscores the importance of home
              security. Security measures not only mitigate risks during
              emergencies but also provide assistance and support to residents
              in distress.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Ensuring personal safety is another significant reason to invest
              in home security services. With over 29,000 violent crimes
              reported in California in 2020, including assaults and robberies,
              protecting independent homes becomes imperative for the safety of
              residents and their families.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services offers top-notch private security guards
              to safeguard your home from trespassers and vandals. Our guards
              are skilled in utilizing various security tools and ensuring no
              unauthorized individuals enter your property. We collaborate with
              you to create a personalized security plan tailored to your needs.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Our services include CCTV cameras, panic buttons, and electric
              fences for comprehensive protection. If you seek a secure living
              environment, contact us today to begin your journey towards a
              fear-free life. Our round-the-clock protection ensures your
              safety, and our guards are proficient in diverse security
              techniques. Having security measures in place provides homeowners
              with peace of mind, knowing their homes are protected. This sense
              of security allows residents to focus on their daily lives without
              worrying about the safety of their property and loved ones.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10 p-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="md:text-4xl text-lg font-semibold font-noto text-[#003366]">
              Do I Need Security Services for My Private Home?
            </h1>

            <p className="text-gray-600 leading-relaxed text-justify">
              Your private home’s security is a significant consideration, and
              FalconX Security Services offers compelling reasons to invest in
              professional security solutions. Safeguarding your family,
              property, and peace of mind is paramount, especially in
              residential areas where threats like burglaries, vandalism, and
              intrusions can occur. Our security services provide a proactive
              defense against such risks.
            </p>

            <p className="text-gray-600 leading-relaxed text-justify">
              Recognizing your home as a valuable asset, we prioritize its
              safety by offering tailored security solutions that operate round
              the clock. With FalconX, you gain access to skilled security
              personnel trained to handle various security threats effectively.
              Whether deterring intruders, monitoring surveillance systems, or
              responding to emergencies, our professional security guards are
              equipped to safeguard your home efficiently.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              Furthermore, we understand the importance of customization. Our
              team collaborates closely with you to develop a security plan
              tailored to your specific needs and concerns. Whether you require
              CCTV surveillance, patrol services, or access control systems, we
              ensure comprehensive protection for your home.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img src={sideImg} alt="Security Guard" />
          </div>
        </div>
      </div>
      <Quote
        text1="SHARE YOUR NEEDS WITH US. WE'RE HERE TO LISTEN AND"
        text2="COLLABORATE TO ENSURE YOUR COMPLETE SATISFACTION"
      />
      <Slider
        title="Responsibilities of Private Home Security Guards in California"
        text="FalconX Security Services is committed to providing the utmost safety to the people of California with highly professional private home security guards."
      />
      <Advantage
        title="Advantages Of Choosing Private Residential Security Services"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="md:text-3xl text-xl text-[#003366] font-bold  px-4">
            Why Choose FalconX Security Services for Private Home Security?
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              In California’s expansive landscapes, where homes embellish the
              scenic beauty, security emerges as a paramount concern. FalconX
              Security Services stands out as the leader in safeguarding your
              residence with unmatched expertise.
            </p>
            <p>
              Why should you trust us for your home’s security? Firstly, our
              guards undergo rigorous training and hold licenses, ensuring a
              professional response to all security issues. Secondly, we
              leverage cutting-edge technology, including advanced CCTV systems
              tailored to California’s security needs.
            </p>
            <p>
              Furthermore, our security guards prioritize customization by
              crafting personalized security plans to address your specific
              requirements. This approach ensures that your home receives the
              tailored protection it deserves, effectively reducing risks and
              providing peace of mind.
            </p>
            <p>
              In California, where the privacy of home living intersects with
              safety needs, FalconX Security Services serves as the protector,
              offering reliable security solutions to keep your home and loved
              ones safe under the Californian sun.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={privateResidenceSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default Private;
