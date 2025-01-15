import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/Banner-9.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";
import ServicesNav from "../../components/ServicesNav";
import image1 from "../../assets/images/02-8.webp";
import image2 from "../../assets/images/03-7-1024x819.webp";

import sideImg from "../../assets/images/01-4-2.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import Quote from "../../components/shared/Quote";

import Ready from "../../components/shared/Ready";
import SEO from "../../components/shared/Seo";

import icon1 from "../../assets/images/01-5.svg";
import icon2 from "../../assets/images/02-5.svg";
import icon3 from "../../assets/images/03-5.svg";
import icon4 from "../../assets/images/04-5.svg";

const FootBike = () => {
  const patrollingFeatures = [
    {
      icon: icon1,
      title: "Transparent and Efficient Patrolling",
      description:
        "FalconX Security Services ensures transparent and efficient patrolling in Los Angeles with highly trained guards. Our commitment to accountability and vigilance promotes safety and peace of mind for our valuable customers.",
    },
    {
      icon: icon2,
      title: "Technology Driven Patrolling",
      description:
        "Our patrolling in Los Angeles is technology-driven, employing walkie-talkies, GPS-enabled bikes, and golf carts for efficient communication and monitoring, ensuring a secure and responsive environment.",
    },
    {
      icon: icon3,
      title: "Detex Systems to Record Patrol Audits",
      description:
        "FalconX Security Services implements Detex systems for precise patrol audits during foot, bike, and golf cart patrols in Los Angeles. Our technology ensures on-time documentation for maximum security.",
    },
    {
      icon: icon4,
      title: "Reliable and Affordable Guards",
      description:
        "Our patrolling guards undergo rigorous training to effectively deter and respond to security threats. Secure your property with our dependable, knowledgeable, and cost-effective foot, bike, and golf cart patrol guards in Los Angeles.",
    },
  ];

  return (
    <div>
      <SEO title="FOOT, BIKE AND GOLF PATROL - Best Security Guard Service California" />
      <Banner
        title="FOOT, BIKE AND GOLF CART PATROL"
        backgroundImage={bgImage}
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <ServicesNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              How Foot, Bike, Golf Cart and Patrol Services Protect Your
              Property in Los Angeles
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              If your business or neighborhood is dealing with issues like
              unwanted vehicles, graffiti, or even neighborhood kids causing
              chaos, you might be interested in random patrol checks by an
              experienced security guard. At FalconX Security Services, our
              security experts will analyze your problems and create a
              preventative security plan for you. Our foot, bike, and golf cart
              patrol guards are extensively trained in patrolling your property
              and neighborhood areas in Los Angeles and identifying any
              suspicious activity or security breaches. We will be happy to give
              you safety and peace of mind in Los Angeles by providing the best
              foot, bike, and golf cart patrol services at affordable prices.
            </p>

            <h3 className="text-2xl font-semibold text-[#003366]  my-3 text-justify leading-[27px]">
              Tasks Associated with Foot, Bike, and Golf Cart Patrol Guards in
              Los Angeles
            </h3>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              At FalconX Security Services, you can always remain satisfied with
              the services provided by our professional security guards in Los
              Angeles. If you still have doubts, you can check various tasks
              that our foot, bike, and golf cart patrol guards effectively
              accomplish to protect you and your property:
            </p>
            <h3 className="text-2xl font-semibold text-[#003366]  my-3 text-justify leading-[27px]">
              Foot Patrol Services
            </h3>

            <ul className="list-disc list-inside md:px-7  text-gray-800 mb-6">
              {[
                "Our foot patrol guards make a specified number of visits each day.",
                "We check the whole property for our customers’ satisfaction.",
                "Our security guards regularly monitor windows, doors, locks, loading docks, and illegally parked vehicles.",
                "Ensure the security of the office spaces, monitor that the file cabinets are locked, and check the appliances are turned off.",
                "We constantly check smoke detectors, ceiling fans, and lights.",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold text-[#003366]  my-3 text-justify leading-[27px]">
              Bike Patrol Services
            </h3>

            <ul className="list-disc list-inside md:px-7  text-gray-800 mb-6">
              {[
                "Riding the property in Los Angeles in random patterns.",
                "Covering the property with bike patrolling in areas that are not accessible to vehicles.",
                "Patrolling the parking lot with a bike.",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold text-[#003366]  my-3 text-justify leading-[27px]">
              Golf Cart Patrol Services
            </h3>

            <ul className="list-disc list-inside md:px-7  text-gray-800 mb-6">
              {[
                "Visible rounds in a marked golf cart.",
                "Patrolling your property as well as parking lots.",
                "Checking the property by driving the golf cart in random patterns.",
                "Regularly scheduled community monitoring programs.",
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
            <h1 className="text-xl md:text-4xl font-semibold font-noto text-[#003366]">
              Do I Need Foot, Bike, and Golf Cart Patrol Guards in Los Angeles?
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Living in a bustling city like Los Angeles presents unique
              security challenges. FalconX Security Services understands the
              distinct needs of residents and businesses, offering specialized
              Foot, Bike, and Golf Cart Patrol Guards to enhance safety across
              Los Angeles.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Foot patrols are ideal for navigating crowded areas, ensuring a
              visible and approachable security presence. Bike patrols offer
              increased mobility, efficiently covering larger areas. Golf cart
              patrols are perfect for expansive locations, providing quick
              response and flexibility.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These patrols play a crucial role in reducing criminal activity,
              responding promptly to incidents, and maintaining a secure
              environment. Whether you’re a business owner concerned about
              property security or a resident prioritizing neighborhood safety,
              FalconX Security Services is the best choice for foot, bike, and
              golf cart patrol services in Los Angeles to meet your specific
              needs.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img src={sideImg} alt="Security Guard" />
          </div>
        </div>
      </div>
      <Quote
        text1="Call Us (866-500-2050) Today – We Provide Free On-site"
        text2="Consultations for Foot, Bike, and Golf Cart Patrol Services "
      />
      <Slider
        title="Responsibilities of Foot, Bike, and Golf Cart Patrol Guards"
        text="At FalconX Security Services, our Foot, Bike, and Golf Cart Patrol guards are passionate about fulfilling their responsibilities at the client’s premises."
      />
      <Advantage
        title="Benefits of Hiring Foot, Bike, and Golf Cart Patrol Guards"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="text-xl md:text-3xl text-[#003366] font-bold  px-4">
            Why Choose FalconX Security Services for Your Safety in Los Angeles?
          </h2>
          <div className="space-y-5 p-3 text-gray-800 text-justify leading-[25px]">
            <p>
              When it comes to ensuring safety in Los Angeles, FalconX Security
              Services takes great pride in providing top-tier foot, bike, and
              golf cart patrol security services. Our commitment to delivering
              excellence is evident in the services offered by our Foot, Bike,
              and Golf Cart Patrol Guards. With extensive training, our guards
              are highly skilled and experienced in safeguarding lives and
              properties in Los Angeles.
            </p>
            <p>
              Our foot, bike, and golf cart patrol guards enhance safety and
              security at various locations, including parking lots, golf
              courses, condominiums, gated neighborhoods, and more. We are
              equipped to address a range of security concerns in diverse
              environments, ensuring peace of mind for our clients.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={patrollingFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default FootBike;
