import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-34.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";
import ServicesNav from "../../components/ServicesNav";
import image1 from "../../assets/images/02-37.webp";
import image2 from "../../assets/images/03-36-1024x819.webp";

import sideImg from "../../assets/images/01-webp-21.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import SEO from "../../components/shared/Seo";

import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";
import icon1 from "../../assets/images/01-125.svg";
import icon2 from "../../assets/images/02-125.svg";
import icon3 from "../../assets/images/03-125.svg";
import icon4 from "../../assets/images/04-125.svg";

const Transportation = () => {
  const shipmentSecurityFeatures = [
    {
      icon: icon1,
      title: "Arrival/Departure Management",
      description:
        "Our guards efficiently handle docking designations, shipping inventory tracking, and maintain detailed logs and reports as deliveries enter and exit your premises.",
    },
    {
      icon: icon2,
      title: "Truck Inspections",
      description:
        "Our guards inspect trucks, verify driver credentials, record tracking seal numbers, document license plate details, and regularly audit inventory in trailers during arrivals and departures.",
    },
    {
      icon: icon3,
      title: "Refrigerator Truck Inspections",
      description:
        "We monitor the refrigeration temperature in reefer trucks, log temperatures, and promptly notify you of significant or recurring discrepancies between the required and actual temperatures.",
    },
    {
      icon: icon4,
      title: "Equipment Tracking",
      description:
        "Whenever valuable equipment or machinery is moved, our guards efficiently record the items taken, the responsible party, and the return details, ensuring comprehensive tracking and accountability.",
    },
  ];
  return (
    <div>
      <SEO
        title="TRANSPORATION, LOGISTICS SECURITY - Best Security Guard Service Company"
        description="Ensure the safety and efficiency of your logistics center with FalconX Security Services. We offer both armed and unarmed security, vehicle patrols, CCTV monitoring, emergency response services, and escorted security for staff, providing comprehensive protection for all logistics operations in California."
      />
      <Banner
        title="SECURITY SOLUTIONS FOR TRANSPORT AND LOGISTICS"
        backgroundImage={bgImage}
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <ServicesNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-2xl mb-6 text-[#003366] md:text-3xl">
              Protecting Logistic Centers Through Our Effective Security Guard
              Services
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              A logistics center is a dedicated facility for various operations
              like warehousing and freight forwarding. It ensures an efficient
              flow of goods, services, and related information. Logistic centers
              have possibilities of theft, burglary, and criminal attacks.
              Owners seek reliable security guard services for protection to
              minimize the risk of such mishaps in logistic centers.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Logistics centers, with their intricate layouts and constant
              traffic, require robust security measures. The huge volume of
              inbound and outbound traffic necessitates partnering with the best
              security guard company in California. FalconX Security Services
              manages all activities happening in the facility and prohibits
              access by unauthorized individuals, products, and consignments
              effectively. It helps eliminate risk and secures the logistics
              centers from any potential threats.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services is a one-stop destination to address
              warehouse and supply chain needs effectively:
            </p>
            <ul className="list-disc list-inside text-justify  text-gray-700 px-2 space-y-1">
              <li>
                We provide both Armed and Unarmed Security Personnel for
                comprehensive logistic center security.
              </li>
              <li>
                Our vehicle patrol security service ensures high visibility and
                coverage of larger areas.
              </li>
              <li>
                CCTV Surveillance and Monitoring enhance security measures in
                logistics centers.
              </li>
              <li>
                Emergency security services are available for prompt response to
                natural disasters, burglary, and theft, with immediate police
                communication.
              </li>
              <li>
                Escorted security for staff during late hours to the parking
                lot.
              </li>
            </ul>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              With extensive industry experience, FalconX Security Services
              understands client expectations. We will be happy to protect your
              logistic centers along with transportation facilities if you are
              searching for a customized security plan in California.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10 p-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="md:text-4xl text-lg font-semibold font-noto text-[#003366]">
              Professional, Reliable, and Affordable Logistics and
              Transportation Security Services
            </h1>

            <p className="text-gray-600 leading-relaxed text-justify">
              FalconX Security Services offers exceptional and affordable
              logistics and transportation security services across all regions
              of California. Our highly trained and knowledgeable security
              guards are licensed by the Bureau of Security and Investigative
              Services (BSIS) and thoroughly prepared to handle various
              transportation and logistical security tasks, including:
            </p>
            <ul className="list-disc list-inside text-justify  text-gray-700 px-2 space-y-1">
              <li>Docking designation assistance</li>
              <li>Arrival/departure management</li>
              <li>Materials logs maintenance</li>
              <li>Truck logs & material logs</li>
              <li>Inbound and outbound truck inspection</li>
              <li>Shipping inventory tracking</li>
              <li>License plate documentation</li>
              <li>Arrival/departure log maintenance</li>
              <li>Vehicle and pallet inspection</li>
            </ul>

            <p className="text-gray-600 leading-relaxed text-justify">
              Our team ensures regular auditing of vehicles and prepares and
              maintains inventory records. Whether you are in trucking, loading
              docks, or rail yards, our management team can create a tailored
              security strategy to meet your specific needs, timeline, and
              budget.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img src={sideImg} alt="Security Guard" />
          </div>
        </div>
      </div>
      <Quote text1="FalconX Security Services – Ensure your safety with our exceptional logistics and transportation security services." />
      <Slider
        title="Responsibilities of Logistics and Transportation Security Guards"
        text="FalconX Security Services is committed to providing the utmost safety in California with highly professional logistics and transportation security guards."
      />
      <Advantage
        title="Advantages of Hiring Logistics and Transportation Security Services"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20 my-7">
        <div>
          <h2 className="md:text-3xl text-xl text-[#003366] font-bold  px-4">
            How FalconX Security Services Protect Your Business in California
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              FalconX Security Services is your reliable partner in safeguarding
              your logistics and transportation operations in California. Our
              expert security guards, licensed and trained to the highest
              standards, provide comprehensive security services tailored to the
              unique needs of your business.
            </p>
            <p>
              We understand the critical role logistics and transportation play
              in your operations, and our security solutions are designed to
              minimize risks and ensure the smooth flow of your business. Our
              commitment goes beyond traditional security measures; we
              prioritize proactive strategies, ensuring potential security
              issues are identified and addressed before they escalate. With
              FalconX Security Services, you can trust that your business is
              protected 24/7 by a dedicated team that values your safety and the
              security of your assets.
            </p>
            <p>Our highly professional and dedicated security guards perform a range of tasks, including:</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={shipmentSecurityFeatures} />
      <AreasWeServe text="FalconX security services is proud to offer professional transportation and logistics security guards in the California areas below." />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default Transportation;
