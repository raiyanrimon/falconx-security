import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-41.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";
import ServicesNav from "../../components/ServicesNav";
import image1 from "../../assets/images/02-30.webp";
import image2 from "../../assets/images/03-29-1024x819.webp";

import sideImg from "../../assets/images/01-webp-30.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import SEO from "../../components/shared/Seo";
import icon1 from "../../assets/images/01-31.svg";
import icon2 from "../../assets/images/02-30.svg";
import icon3 from "../../assets/images/04-28.svg";
import icon4 from "../../assets/images/04-29.svg";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const Public = () => {
  const publicSpaceSecurityFeatures = [
    {
      icon: icon1,
      title: "Trained Professionals",
      description:
        "FalconX Security Services employs highly trained security guards adept at managing diverse security challenges in public spaces with professionalism and expertise.",
    },
    {
      icon: icon2,
      title: "Customized Solutions",
      description:
        "We tailor security measures to suit the specific needs of each public space, ensuring comprehensive protection and peace of mind for clients across the nation.",
    },
    {
      icon: icon3,
      title: "Proactive Approach",
      description:
        "Our security guards adopt a proactive approach to maintaining safety in public areas, effectively deterring potential threats and responding swiftly to emergencies.",
    },
    {
      icon: icon4,
      title: "Reliable Security",
      description:
        "With FalconX Security Services, clients can rely on round-the-clock protection from our dedicated team of security professionals, ensuring the highest standard of safety for public spaces in California.",
    },
  ];

  return (
    <div>
      <SEO title="PUBLIC SPACES SECURITY - Best Security Guard Service California" />
      <Banner
        title="PUBLIC PLACE SECURITY GUARD SERVICES"
        backgroundImage={bgImage}
        bgclass="bg-left"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <ServicesNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              Secure Your Peace of Mind: FalconX Security Services for Public
              Space Protection
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Public spaces, whether bustling tourist destinations or serene
              getaways, attract a diverse mix of people, including tourists,
              local residents, and visitors. Prioritizing safety in these areas
              is crucial to ensure the protection of families and property.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Owning property adjacent to public spaces, such as tourist
              destinations or beaches, may necessitate security measures. These
              spaces can attract a range of individuals, including the homeless
              and potential criminals, especially at night. Security services
              play a vital role in preventing accidents and incidents in these
              public areas.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Anticipating the actions of individuals in public spaces can be
              challenging, underscoring the need for external security
              assistance. FalconX Security Services provides peace of mind and
              ensures the safety of families and assets. With reliable 24/7
              protection services offered at affordable prices, our security
              guards can effectively safeguard loved ones and belongings.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              In today’s bustling world, public spaces serve as hubs for various
              activities, from leisurely strolls to community events. However,
              their openness and accessibility also present potential safety
              concerns for property owners. Whether it’s a park adjacent to your
              home or a popular tourist destination nearby, ensuring the safety
              of families and property is paramount.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services offers tailored solutions to address the
              security needs of property owners in public spaces. With a team of
              highly trained security guards, we provide round-the-clock
              protection to deter unwanted incidents and ensure a safe
              environment for residents and visitors alike.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              By partnering with us, property owners can rest assured that their
              loved ones and assets are in capable hands. With affordable
              pricing and reliable services, FalconX Security Services stands as
              a dependable partner in safeguarding public spaces and providing
              peace of mind to property owners.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services offers exceptional services to the
              residents and visitors of California, including:
            </p>
            <ul className="list-disc text-gray-800 my-3 text-justify leading-[27px]">
              <li>Parks and recreational areas</li>
              <li>Beaches and waterfronts</li>
              <li>Shopping malls and retail centers</li>
              <li>Entertainment venues (theaters, stadiums, concert halls)</li>
              <li>
                Public transportation hubs (bus terminals, train stations)
              </li>
              <li>Pedestrian walkways and promenades</li>
              <li>Community centers and public squares</li>
              <li>Parking lots and garages</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10 p-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="md:text-4xl text-lg font-semibold font-noto text-[#003366]">
              Why Public Spaces Security is Important?
            </h1>

            <p className="text-gray-600 leading-relaxed text-justify">
              In California, where vibrant cities and picturesque landscapes
              attract millions of visitors annually, ensuring the security of
              public spaces is crucial. With over 39.5 million residents and
              countless tourists, public areas serve as hubs for social
              gatherings, cultural events, and recreational activities.
            </p>

            <p className="text-gray-600 leading-relaxed text-justify">
              According to data from the California Department of Justice, there
              were over 1.2 million reported property crimes in the state in
              2020 alone, highlighting the need for robust security measures in
              public spaces. Additionally, incidents of violence and vandalism
              in public parks, beaches, and urban plazas underscore the
              importance of maintaining a safe environment for residents and
              visitors alike.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              Effective public space security not only deters criminal
              activities but also enhances community well-being and fosters a
              sense of safety and belonging. By investing in security solutions
              tailored to the unique needs of the state’s diverse public spaces,
              communities can ensure that everyone can enjoy these shared areas
              without fear or concern.
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
        title="Responsibilities of Public Spaces Security Guards in California"
        text="FalconX Security Services is committed to providing the utmost safety to the people with highly professional public space security guards."
      />
      <Advantage
        title="Advantages Of Opting FalconX Services For Public Space Security"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="md:text-3xl text-xl text-[#003366] font-bold  px-4">
            Why Choose FalconX Security Services for Public Spaces Safety?
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              FalconX Security Services stands out as the premier choice for
              safeguarding public spaces in California, offering top-notch
              security guards dedicated to ensuring safety and peace of mind.
            </p>
            <p>
              Our security guards are meticulously selected and rigorously
              trained to handle diverse security challenges in public spaces.
              With extensive experience and expertise, the security guards excel
              in crowd management, conflict resolution, and emergency response,
              making them invaluable assets for maintaining order and safety.
            </p>
            <p>
              Moreover, FalconX Security Services prioritizes customization,
              tailoring security solutions to suit the unique needs of each
              public space. Whether it is patrolling parks, monitoring urban
              plazas, or securing recreational areas, our guards are equipped
              with the skills and resources to provide comprehensive protection.
            </p>
            <p>
              With us, clients can trust that their public spaces are in capable
              hands. Our commitment to professionalism, reliability, and
              excellence ensures that communities across California receive the
              highest standard of safety and security, making us the ideal
              choice for safeguarding public spaces.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={publicSpaceSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default Public;
