import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-22.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";
import ServicesNav from "../../components/ServicesNav";
import image1 from "../../assets/images/02-27.webp";
import image2 from "../../assets/images/03-26-1024x819.webp";

import sideImg from "../../assets/images/01-webp-11.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import SEO from "../../components/shared/Seo";
import icon1 from "../../assets/images/01-111.svg";
import icon2 from "../../assets/images/02-111.svg";
import icon3 from "../../assets/images/03-111.svg";
import icon4 from "../../assets/images/04-111.svg";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const Event = () => {
  const eventSecurityFeatures = [
    {
      icon: icon1,
      title: "Risk Evaluation",
      description:
        "FalconX Security Services meticulously assesses risks, identifying valuable items and potential vulnerabilities to guide strategic security arrangements. This proactive approach ensures the safeguarding of your assets and the success of your events.",
    },
    {
      icon: icon2,
      title: "Identification System",
      description:
        "For event safety, FalconX suggests using an ID scanner connected to a database to ensure that only trusted individuals gain access and prevent unauthorized entry. It is an intelligent way to enhance security at your events.",
    },
    {
      icon: icon3,
      title: "Alarms",
      description:
        "Essential for events, various alarms, including sensor and intrusion alarms, play a pivotal role. FalconX Security Services tailors alarm solutions based on event scale, with monitored alarms preferred for significant occasions.",
    },
    {
      icon: icon4,
      title: "Preventing Theft",
      description:
        "While safeguarding everything poses a challenge, FalconX Security Services simplifies the task with strategic measures, saving time and money. As crime rates rise, the presence of our security guards becomes increasingly crucial in preventing offenses.",
    },
  ];
  return (
    <div>
      <SEO title="EVENT SECURITY SERVICES - FALCONX SECURITY" />
      <Banner
        title="PRIVATE EVENT SECURITY GUARDS SERVICES"
        backgroundImage={bgImage}
        bgclass="bg-right"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <ServicesNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              FalconX Event Security: Safeguarding Your Event with Expertise
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              When organizing large corporate events, concerts, or speeches,
              meticulous security planning is essential. These events, being
              public in nature, carry a heightened risk of incidents and
              criminal activity due to their accessibility. Opting for FalconX
              Security Services ensures a smooth and secure experience for your
              significant event. Our specialized event security guards initiate
              security measures by assessing risks and identifying potential
              threats. They conduct thorough inspections of the venue to
              identify any vulnerabilities and assess the surrounding area to
              ensure no potential threats are overlooked. Our top priorities are
              the efficiency of your event and the safety of attendees.
            </p>
            <h3 className="md:text-2xl text-lg font-semibold text-[#003366]  my-3 text-justify leading-[27px]">
              Your Trusted Partner for Event Safety and Protection
            </h3>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Are concerns about event security keeping you up at night? At
              FalconX Security Services, we are committed to ensuring the safety
              of your business, merchandise, and employees.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              We employ various methods to enhance event security, including:
            </p>
            <ul className="list-disc list-inside text-justify  text-gray-700 px-2 space-y-1">
              <li>
                <span className="font-bold">Greeting Services: </span>Welcoming
                clients, visitors, employees, contractors, and vendors, our
                security guards conduct thorough entry checks to enhance overall
                event security.
              </li>
              <li>
                <span className="font-bold">CCTV Monitoring: </span>Vigilant
                monitoring of IP-based CCTV cameras.
              </li>
              <li>
                <span className="font-bold">Access Control: </span>Efficient
                management of entry for clients, visitors, employees, vehicles,
                and deliveries.
              </li>
              <li>
                <span className="font-bold">Premises Patrol: </span>Regular
                patrols to enforce event rules.
              </li>
              <li>
                <span className="font-bold">Parking Lot Oversight: </span>
                Ensuring compliance with parking regulations.
              </li>
              <li>
                <span className="font-bold">Immediate Danger Response: </span>
                Swiftly addressing vulnerabilities and potential threats.
              </li>
              <li>
                <span className="font-bold">Proactive Issue Alerts: </span>
                Prompt reporting of potential issues to management/clients.
              </li>
              <li>
                <span className="font-bold">Incident Reporting: </span>Thorough
                documentation of incidents.
              </li>
              <li>
                <span className="font-bold">Legal Compliance: </span>Adherence
                to Federal, State, and Local laws and regulations.
              </li>
              <li>
                <span className="font-bold">Hazard Reporting: </span>Reporting
                illegal activities and hazards to management.
              </li>
            </ul>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Partnering with FalconX Security Services not only reduces the
              risk of crime at your event but also ensures an unparalleled level
              of safety. Connect with our dedicated team now for the ultimate
              protection against potential harm
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10 p-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="md:text-4xl text-xl font-semibold font-noto text-[#003366]">
              Customized Security for Your Event's Success with FalconX Security
              Services
            </h1>

            <p className="text-gray-600 leading-relaxed text-justify">
              We recognize that every event is different, with unique security
              needs. That’s why we collaborate closely with you to understand
              your requirements and create a tailored event security plan
              aligned with your objectives. At FalconX Security Services, our
              security guards and staff seamlessly blend into your event,
              providing the implementation of security measures without
              impacting the overall experience. Whether a small private
              gathering or a large-scale event, our team is committed to
              providing top-notch security solutions that surpass your
              expectations.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img src={sideImg} alt="Security Guard" />
          </div>
        </div>
      </div>
      <Quote
        text1="Make your event secure with FalconX Security Services."
        text2="Reach out to us today for skilled event security guards-your"
        text3="reliable allies in safety and protection."
      />
      <Slider
        title="Responsibilities of Event Security Guards in California"
        text="At FalconX Security Services, we excel in fulfilling our duties efficiently at our clients' events."
      />
      <Advantage
        title="Advantages of Hiring Event Security Guards in California"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="md:text-3xl text-xl text-[#003366] font-bold  px-4">
            Ensuring Robust Security for Your Events with Advanced Solutions
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              In response to a surge in building thefts during events, FalconX
              Security Services emphasizes the critical need for robust
              security. As events grow in scale, ensuring a secure environment
              demands efficient security services and cutting-edge technology.
              We are dedicated to delivering top-notch security services across
              California. Whether unarmed or armed, we focus on efficiency,
              understanding specific needs, quick response, and building lasting
              client relationships. Our vision is to lead the security service
              industry in California by continually enhancing our offerings with
              the latest solutions and maintaining a commitment to customer
              satisfaction.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={eventSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default Event;
