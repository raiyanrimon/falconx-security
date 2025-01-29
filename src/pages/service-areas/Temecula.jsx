import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-18.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-7-2.webp";
import image2 from "../../assets/images/03-5-2-1024x819.webp";

import sideImg from "../../assets/images/01-4-20.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import SEO from "../../components/shared/Seo";
import icon1 from "../../assets/images/01-25.svg";
import icon2 from "../../assets/images/02-24.svg";
import icon3 from "../../assets/images/03-24.svg";
import icon4 from "../../assets/images/04-24.svg";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";
const Temecula = () => {
  const temeculaSecurityFeatures = [
    {
      icon: icon1,
      title: "Experienced Team",
      description:
        "FalconX Security Services brings a wealth of experience to safeguard Temecula, with a skilled team adept at handling various security challenges and ensuring the community's safety.",
    },
    {
      icon: icon2,
      title: "Comprehensive Protection",
      description:
        "Whether it is residential security or business safety, we offer diverse solutions tailored to your needs, providing complete and reliable protection for the people of Temecula.",
    },
    {
      icon: icon3,
      title: "Adaptable and Ready",
      description:
        "Our security guards are prepared for any situation, ensuring the security of Temecula is never compromised. From executive protection to nightly patrols, we adapt to meet the unique needs of the community.",
    },
    {
      icon: icon4,
      title: "Dedication and Professionalism",
      description:
        "FalconX Security Services is committed to excellence. We approach different aspects of security as interconnected, ensuring your safety needs are met with utmost dedication, professionalism, and expertise.",
    },
  ];
  const cities = [
    {
      left: [
        "Murrieta Hot Springs",
        "Murrieta",
        "Rainbow",
        "Fallbrook",
        "Wildomar",
        "Sedco Hills",
        "Bonsall",
        "Canyon Lake",
      ],
      right: [
        "Lakeland Village",
        "Sun City",
        "Winchester",
        "Camp Pendleton North",
        "Quail Valley",
        "Lake Elsinore",
        "Menifee",
        "Menifee",
      ],
    },
    {
      left: [
        "Homeland",
        "Green Acres",
        "Romoland",
        "Hidden Meadows",
        "Good Hope",
        "Valley Center",
        "Hemet",
        "Perris",
      ],
      right: [
        "East Hemet",
        "Vista",
        "Nuevo",
        "Camp Pendleton South",
        "San Jacinto",
        "Valle Vista",
        "Lakeview",
        "San Marcos",
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="TEMECULA - Best Security Guard Service Company"
        description="FalconX Security Services offers tailored security solutions for Temecula, California, ensuring the safety of wineries, resorts, golf courses, and more. Our professional guards provide affordable services for both short-term and long-term needs, from event security to routine patrols. We help maintain peace of mind with expert protection for both residents and businesses."
      />
      <Banner
        title="SECURITY GUARD SERVICES IN TEMECULA"
        backgroundImage={bgImage}
        bgclass="bg-left"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-2xl mb-6 text-[#003366] md:text-3xl">
              Effective and Reliable Security Services in Temecula
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Temecula, located in southwestern Riverside County, California, is
              a vibrant city with a population of 110,003, according to the 2020
              census. Known for its tourist appeal, the city boasts attractions
              like Temecula Valley Wine Country, Old Town Temecula, the Balloon
              & Wine Festival, and the International Film Festival. Its economic
              landscape is shaped by championship golf courses and resort
              accommodations. Situated around 58 miles north of downtown San
              Diego and 85 miles southeast of downtown Los Angeles, Temecula
              serves as the southwestern anchor of the Inland Empire region.
              Despite its closer proximity to San Diego, it is considered part
              of the Greater Los Angeles area.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              In Temecula, the crime rate is around 23.87 incidents per 1,000
              residents in a typical year. People who live in Temecula generally
              consider the east part of the city as they believe that this is
              the safest part to live. Your likelihood of experiencing crime is
              higher, about 1 in 16, in the southwest neighborhoods. Meanwhile,
              it drops to 1 in 64 in the eastern part of the city.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services provides tailored security guard
              services designed to cater to the unique requirements of
              Temecula’s wineries, polo clubs, golf courses, resorts, and spas.
              Our professional guards offer competitive pricing for one-time
              events, short-term, and long-term assignments. Entrust our guards
              with tasks like keeping out solicitors, recording visitor traffic,
              checking belongings, accepting shipments, directing traffic,
              patrolling large areas, and responding to alarms. Beyond
              hospitality and recreation, we customize services for diverse
              clients. Contact us (866-500-2050) for a free consultation; we
              will help you determine the best security solutions for your
              location, needs, and budget.
            </p>
          </div>
        </div>
      </div>
      <ServiceList />
      <div className="bg-[#F4F4F4] md:py-16 py-5">
        <div className="max-w-6xl mx-auto my-10 p-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-2xl md:text-left text-center md:text-4xl font-semibold font-noto text-[#003366]">
                Do I Need Security Services in Temecula?
              </h1>

              <p className="text-gray-600 leading-relaxed">
                Temecula is home to many popular events such as the Temecula
                Valley International Film Festival, the Temecula Farmers Market,
                and the Temecula Valley Balloon & Wine Festival. In order to
                ensure the safety of all attendees, FalconX Security Services
                are always available 24/7 to make the events a grand success.
              </p>

              <p className="text-gray-600 leading-relaxed">
                In addition to this, with Temecula’s thriving wine industry,
                businesses and events face constant pressure to maintain
                security and safety for visitors. At FalconX Security Services,
                our security guards are equipped with both Unarmed and Armed
                guards, can deter criminal activity, and protect property,
                providing a secure environment. With a proven track record in
                quality security services, our professionally trained security
                guards offer a range of options, including Unarmed Guards, Armed
                Guards, and Patrol Vehicles, contributing to the safety and
                protection of businesses and events in Temecula.
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
        title="Areas of Temecula"
        description="We provide private security guard services to many cities and neighborhood in areas of Temecula."
        cities={cities}
      />
      <Quote text1="FalconX Security Services – A Company You Can Feel Secure With!" />
      <Slider
        title="Responsibilities of Security Guards in Temecula"
        text="FalconX Security Services is committed to providing the utmost safety to the people of Temecula with highly professional security guards."
      />
      <Advantage
        title="Advantages of Hiring Security Guards in Temecula"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20 my-7">
        <div>
          <h2 className="text-2xl  py-4 text-center md:text-left md:py-0 md:text-3xl text-[#003366] font-bold  px-4">
            Why Choose FalconX Security Services in Temecula?
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              With an increase in crime rates across the globe, we recognize the
              importance of top-notch security services. At FalconX Security
              Services, our focus is on building a safer tomorrow. What sets us
              apart is our commitment to meeting the specific needs of each
              client.
            </p>
            <p>
              We are not just about making big promises; we ensure they are
              fulfilled. Our dedicated team works around the clock to provide
              the best services. Day or night, you can reach out for assistance
              anytime. If you are in Temecula and in search of security
              services, then your search ends here. We offer customized security
              packages based on your unique requirements, delivering peace of
              mind.
            </p>
            <p>
              Whether you need security for your home or business, whether it is
              executive protection or nighttime patrols, our security guards
              have the skills to fulfil your requirements. Regardless of the
              challenges, our guards are ready to handle them. We make sure to
              meet all your security needs with utmost dedication, expertise,
              and professionalism.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={temeculaSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default Temecula;
