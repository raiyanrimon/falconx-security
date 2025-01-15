import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-2.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";
import ServicesNav from "../../components/ServicesNav";
import image1 from "../../assets/images/02-25-1024x819.webp";
import image2 from "../../assets/images/03-24-1024x819.webp";

import sideImg from "../../assets/images/01-webp-3-1024x819.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import SEO from "../../components/shared/Seo";

import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

import icon1 from "../../assets/images/01-101.svg";
import icon2 from "../../assets/images/02-101.svg";
import icon3 from "../../assets/images/03-101.svg";
import icon4 from "../../assets/images/04-101.svg";

const AirportSecurityServices = () => {
  const airportSecurityFeatures = [
    {
      icon: icon1,
      title: "Perimeter Security",
      description:
        "We employ cutting-edge technology and highly trained military personnel to secure airport perimeters, preventing unauthorized access of individuals carrying banned objects and enhancing overall airport safety.",
    },
    {
      icon: icon2,
      title: "Access Control",
      description:
        "With our experienced airport security guards, airports benefit from robust access control systems, ensuring that only authorized personnel can enter specific areas, minimizing security risks, and maintaining a secure environment.",
    },
    {
      icon: icon3,
      title: "Employee Inspections",
      description:
        "Our airport security guards prioritize employee inspections to ensure that airport staff adhere to security protocols. Regular inspections help identify and address potential security threats, creating a safer work environment at the airport.",
    },
    {
      icon: icon4,
      title: "Vehicle Inspections",
      description:
        "We conduct thorough vehicle inspections, employing advanced techniques and equipment to detect potential security risks. This proactive approach enhances the safety of the airport and minimizes the risk of unauthorized access of individuals or the occurrence of threats.",
    },
  ];
  return (
    <div>
      <SEO title="AIRPORT SECURITY SERVICES - FALCONX SECURITY" />
      <Banner
        title="PREMIER AIRPORT SECURITY SERVICES"
        backgroundImage={bgImage}
        bgclass={"bg-right"}
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <ServicesNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              Security for Airports: Keeping Passengers, Assets, and Crews Safe
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services plays a crucial role in ensuring the
              safety and timely operation of thousands of flights arriving and
              departing from airports across all regions of California. Whether
              screening passengers and cargo or safeguarding hangars and
              terminals, our highly trained airport security guards work closely
              with airport authorities to maintain the highest standards of
              safety and customer service for the public.
            </p>

            <h3 className="text-2xl font-semibold text-[#003366]  my-3 text-justify leading-[27px]">
              Best Airport and Airside Security Services in California
            </h3>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services offers comprehensive security solutions,
              including guards and screening services, ensuring peace of mind
              for you, your employees, and your customers during transportation.
              Whether you are looking to ensure the safety of your airport,
              aircraft, or control airside access, we prioritize your security
              with a customer-centric approach.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              At FalconX Security Services, our airport security guards have the
              responsibility to ensure passengers’ safety and prevent potential
              threats. These tasks cover several areas, including:
            </p>
            <p className="text-gray-600 leading-[25px]">
              In addition to this, our unarmed security guards are highly
              trained to perform a variety of tasks, including:
              <ul className="list-disc list-inside text-gray-700 py-3 px-2 space-y-2">
                <li className="font-bold">Passenger pre-board screening</li>
                <p>
                  Our airport security guards thoroughly screen passengers at
                  security checkpoints before boarding. This process includes
                  metal detectors and body scanners to prohibit the entry of
                  banned items and objects.
                </p>
                <li className="font-bold">Baggage screening</li>
                <p>
                  All checked-in baggage of passengers is screened by our
                  experienced airport security guards using explosive detection
                  systems and advanced X-ray machines to ensure the safety of
                  passengers traveling in airplanes.
                </p>
                <li className="font-bold">Surveillance systems</li>
                <p>
                  Our airport security guards use high-tech surveillance systems
                  like CCTV cameras to monitor all areas of the airport and
                  identify any security breaches or potential threats.
                </p>
                <li className="font-bold">Regular and effective patrolling</li>
                <p>
                  At FalconX Security Services, our well-trained airport
                  security guards prevent the entry of unauthorized individuals
                  into restricted areas of the airport through regular vehicle
                  and foot, bike, and golf cart patrolling.
                </p>
                <li className="font-bold">Emergency response planning</li>
                <p>
                  Our airport security guards are trained to handle any
                  emergency incident by quickly evacuating passengers and crews
                  without causing chaos.
                </p>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10 p-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="md:text-4xl text-xl font-semibold font-noto text-[#003366]">
              Ensuring Airport Safety: The Need for Professional Security
              Services in Los Angeles
            </h1>

            <p className="text-gray-600 leading-relaxed">
              With the rise in airport accidents and threats in Los Angeles
              International Airport (LAX), Hollywood Burbank Airport, Long Beach
              Airport, and Van Nuys Airport, passengers are now more inclined to
              prioritize safety measures, such as stringent security screenings,
              thorough baggage checks, and adherence to airport protocols,
              ensuring a heightened sense of security during travel. At FalconX
              Security Services, we take airport security seriously. Our highly
              professional airport security guards are well-trained in
              accomplishing the following services:
            </p>

            <ul className="list-disc list-inside text-gray-700 px-2 space-y-1">
              <li>Passengers’ check-in</li>
              <li>Pre-departure screening of passengers and crews</li>
              <li>Baggage screening</li>
              <li>Terminal security</li>
              <li>Screening of loading and unloading cargo</li>
              <li>Hangar protection</li>
              <li>Cargo escort</li>
            </ul>

            <p className="text-gray-600 leading-relaxed">
              FalconX Security Services implements a passenger-focused approach
              to prioritize the comfort, safety, and satisfaction of passengers.
              We create a positive journey for passengers so that they will
              travel with safety and peace of mind.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img src={sideImg} alt="Security Guard" />
          </div>
        </div>
      </div>
      <Quote
        text1="FalconX Security Services ensures that passengers travel by"
        text2="air with the highest level of safety."
      />
      <Slider
        title="Responsibilities of Airport Security Guards in California"
        text="FalconX Security Services are exceptionally productive in fulfilling their responsibilities at client’s premises."
      />
      <Advantage
        title="Advantages of Hiring For Airport Security Guards in California"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 my-5 md:my-20">
        <div>
          <h2 className="text-xl md:text-3xl text-[#003366] font-bold  px-4">
            Navigating Airports with Security Assistance
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              Airports are bustling environments where travelers often require
              assistance with directions upon arrival. Security guards play a
              pivotal role in providing this guidance, ensuring visitors reach
              their destinations smoothly and efficiently. In times of
              emergency, the presence of airport security guards offers
              reassurance and facilitates swift and effective response
              protocols.
            </p>
            <p>
              Additionally, the visible presence of uniformed security guards
              serves as a deterrent against theft and other criminal activities
              within airport premises, contributing to a safer and more secure
              environment for passengers and staff alike.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={airportSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default AirportSecurityServices;
