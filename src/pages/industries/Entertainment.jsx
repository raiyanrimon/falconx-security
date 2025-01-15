import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-11-1.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";
import ServicesNav from "../../components/ServicesNav";
import image1 from "../../assets/images/02-35.webp";
import image2 from "../../assets/images/03-34-1024x819.webp";

import sideImg from "../../assets/images/01-webp-10.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import SEO from "../../components/shared/Seo";
import icon1 from "../../assets/images/01-110.svg";
import icon2 from "../../assets/images/02-110.svg";
import icon3 from "../../assets/images/03-110.svg";
import icon4 from "../../assets/images/04-110.svg";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const Entertainment = () => {
  const filmSetSecurityFeatures = [
    {
      icon: icon1,
      title: "Privacy Protection",
      description:
        "We maintain film set privacy with vigilant patrols and strict access controls, safeguarding sensitive scenes and content, keeping them confidential and undisclosed.",
    },
    {
      icon: icon2,
      title: "Emergency Response Planning",
      description:
        "Our teams are trained in film set emergency response, ensuring swift and effective reactions to incidents like unauthorized photography or disruptions, maintaining a smooth filmmaking process.",
    },
    {
      icon: icon3,
      title: "Crowd and Fan Management",
      description:
        "For productions drawing public attention, our guards excel in managing crowds and fans. We create a controlled, secure environment around the set, ensuring a focused filmmaking atmosphere.",
    },
    {
      icon: icon4,
      title: "Perimeter Monitoring",
      description:
        "Our security guards monitor the film set perimeter closely, preventing unauthorized access and ensuring a secure environment for movie screening and production, enhancing safety and confidentiality.",
    },
  ];
  return (
    <div>
      <SEO
        title="ENTERTAINMENT SECURITY SERVICES - FALCONX SECURITY"
        description="Ensure the safety of your film production with FalconX Security Services. Our specialized security solutions, including VIP protection, access control, and crew security, are tailored to meet the unique needs of the TV and film industry in California."
      />
      <Banner
        title="SECURITY FOR ENTERTAINMENT INDUSTRY"
        backgroundImage={bgImage}
        bgclass="bg-right"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <ServicesNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              Safeguarding Cinematic Excellence with Professional Security
              Guards
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services is renowned for providing specialized
              security solutions tailored to the unique challenges faced by the
              movie and film industry. Our dedicated teams prioritize the safety
              and privacy of film productions, allowing creative professionals
              to focus on delivering cinematic excellence.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              The TV and film industries require versatile, confident, and
              discreet security personnel with multifaceted capabilities to
              ensure the safety of crew, equipment, and locations. Across
              California, our highly trained and dedicated security guards
              operate swiftly in high-risk zones and during crucial hours.
              Specializing in movie screening and production security, FalconX
              Security Services collaborates closely with your production team
              to uphold the privacy and integrity of your project, creating a
              safe and hazard-free working environment. Our security personnel
              are expert professionals committed to safeguarding your film
              production.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Our security guards exhibit utmost professionalism while
              performing various tasks, including:
            </p>
            <ul className="list-disc list-inside text-justify  text-gray-700 px-2 space-y-1">
              <li>VIP Protection</li>
              <li>Access Control</li>
              <li>Shoot Venue/Location Security</li>
              <li>Studio Protection</li>
              <li>Unit/Crew Security</li>
              <li>Traffic Management</li>
              <li>Crowd and Fan Management</li>
            </ul>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Recognizing the dynamic nature of the film industry, our movie
              screening and production security services are customized to meet
              our clients’ unique requirements. From overseeing access to
              sensitive scenes to securing on-location shoots and coordinating
              with local law enforcement, we adapt our services to ensure a safe
              and focused filmmaking environment.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10 p-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="md:text-4xl text-xl font-semibold font-noto text-[#003366]">
              Have a High-Profile Movie Cast That Needs Security in California?
            </h1>

            <p className="text-gray-600 leading-relaxed text-justify">
              When it comes to safeguarding high-profile movie casts and
              ensuring a secure filming environment in California, FalconX
              Security Services stands out as the top choice. Our movie
              screening and production security services are meticulously
              designed to cater to the unique needs of the film industry.
            </p>

            <p className="text-gray-600 leading-relaxed text-justify">
              We understand the importance of managing access control during
              sensitive scenes, providing comprehensive security for on-location
              shoots, and coordinating seamlessly with local law enforcement.
              FalconX Security Services ensures that your movie production
              proceeds smoothly, with assurance of a protected and focused
              environment.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              Our security personnel are highly trained and experienced in
              handling the dynamic challenges of the film industry. From crowd
              control during movie screenings to discreet protection for VIPs,
              our team is dedicated to maintaining the integrity and safety of
              your production.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img src={sideImg} alt="Security Guard" />
          </div>
        </div>
      </div>
      <Quote
        text1="Partner with Us for the Best Movie Screening and Production"
        text2="Security Guard Services in California."
      />
      <Slider
        title="Responsibilities of Security Guards in California"
        text="FalconX Security Services offers exceptional movie screening and production security services in California to ensure the safety of film production and screening sites."
      />
      <Advantage
        title="Benefits of Hiring For Movie Screening and Production Security Services"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="md:text-3xl text-xl text-[#003366] font-bold  px-4">
            Minimising Risks and Safeguarding Cinematic Artistry
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              In the dynamic world of filmmaking, FalconX Security Services
              stands as a reliable guardian, minimizing risks and safeguarding
              cinematic artistry through specialized movie screening and
              production security services in California. Our tailored approach
              understands the unique needs of the film industry, ensuring the
              privacy and confidentiality of sensitive scenes.
            </p>
            <p>
              Our security guards are vigilant in protecting film sets,
              implementing strict access control measures to prevent
              unauthorized access and maintain the secrecy of content. Trained
              in emergency response protocols, our teams ensure a swift and
              effective response to any incidents, preserving the filmmaking
              process.
            </p>
            <p>
              Film productions attract the attention of enthusiasts, and our
              security guards excel in crowd and fan management, creating a
              controlled and secure environment around the set. Additionally,
              our guards are proficient in perimeter monitoring, preventing
              unauthorized entry and ensuring a safe space for cinematic
              creativity to flourish.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={filmSetSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default Entertainment;
