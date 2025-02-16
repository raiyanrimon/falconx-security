import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-16-1.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-15.webp";
import image2 from "../../assets/images/03-14-1024x819.webp";

import sideImg from "../../assets/images/01-5.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import icon1 from "../../assets/images/01-16.svg";
import icon2 from "../../assets/images/02-15.svg";
import icon3 from "../../assets/images/03-15.svg";
import icon4 from "../../assets/images/04-15.svg";
import SEO from "../../components/shared/Seo";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const Riverside = () => {
  const riversideSecurityFeatures = [
    {
      icon: icon1,
      title: "Strategic Location",
      description:
        "Riverside County, in Southern California, is strategically positioned for easy access to Los Angeles and San Diego, making it a hub of opportunities in a stunning setting.",
    },
    {
      icon: icon2,
      title: "Vibrant Environment",
      description:
        "We use PatrolLIVE Administration, which sends our safety officer's live area and execution quickly to you.",
    },
    {
      icon: icon3,
      title: "Customized Security Plans",
      description:
        "FalconX Security Services offers tailored security solutions to ensure the safety of people, assets, employees, and their properties in Riverside.",
    },
    {
      icon: icon4,
      title: "Comprehensive Protection",
      description:
        "With a focus on risk prevention, rule enforcement, and active reporting, the security guards at FalconX Security Services ensure your safety and peace of mind.",
    },
  ];
  const cities = [
    {
      left: [
        "Rubidoux",
        "Sunnyslope",
        "Pedley",
        "Woodcrest",
        "Highgrove",
        "Glen Avon",
        "Grand Terrace",
        "Mira Loma",
      ],
      right: [
        "Bloomington",
        "March Air Force Base",
        "Home Gardens",
        "Norco",
        "Moreno Valley",
        "Colton",
        "Fontana",
        "Mead Valley",
      ],
    },
    {
      left: [
        "Loma Linda",
        "El Cerrito",
        "Rialto",
        "Corona",
        "San Bernardino",
        "Redlands",
        "Muscoy",
        "Good Hope",
      ],
      right: [
        "Perris",
        "Rancho Cucamonga",
        "Highland",
        "Ontario",
        "Mentone",
        "Chino",
        "Upland",
        "Nuevo",
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="RIVERSIDE COUNTY - Best Security Guard Service Company"
        description="FalconX Security Services is an accredited security guard company in Riverside, CA, providing reliable, highly trained security solutions for residents and businesses. Our guards are experts in addressing local security concerns, ensuring safety across Riverside County with adaptable and professional services."
      />
      <Banner
        title="TRUSTED SECURITY GUARD SERVICES IN RIVERSIDE, CA"
        backgroundImage={bgImage}
        bgclass="bg-right"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-2xl mb-6 text-[#003366] md:text-3xl">
              FalconX Security Services: Accredited Security Guard Company in
              Riverside, CA
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Riverside, California is close to beautiful beaches and mountains
              with various renowned universities and amazing restaurants. Like
              other cities in California, the cost of living in Riverside is
              higher but it is cheaper than Los Angeles or San Diego. Riverside
              County, California expands its region in diverse areas covering
              cities such as Riverside, Moreno Valley, and Palm Springs.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              The region has a strong emergency services setup due to its
              exposure to natural disasters like wildfires. Economic factors
              influence social issues in areas facing economic challenges. Crime
              rates in Riverside County vary between urban and rural areas, with
              the county having a relatively high crime rate of 40 per 1000
              residents. Violence and property crime are common security
              concerns, with the southwest area being statistically safer than
              other parts, while the southeast side ranks as the least safe.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              At FalconX Security Services, our highly trained security guards
              possess a deep understanding of the area, potential risks, and
              specific needs. We ensure a heightened level of expertise in
              safeguarding the community in Riverside County, CA, ultimately
              leading to effective and reliable security solutions. Our highly
              dedicated, professional, and rigorously trained security guards
              are adaptable to providing security services in Riverside County
              as per the current situation.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              The security guards at FalconX Security Services specialize in
              providing customized security services to meet the unique security
              concerns of each client in Riverside County. Whether you require
              security for a commercial facility, a residential property, or a
              special event, our knowledgeable and adaptable security guards are
              dedicated to creating unique security strategies that minimize the
              possibilities of specific concerns and risks.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              We offer a comprehensive range of services such as private
              security, access control systems, crisis management, and prompt
              response times. With 24/7 security in Riverside County, we give
              the assurance to our clients that their assets, personnel, and
              premises remain secure at all times.
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
                Why Choose FalconX Security Services in Riverside County?
              </h1>

              <p className="text-gray-600 leading-relaxed">
                In today’s ever-evolving world, defending your property demands
                a new class of security services. FalconX Security Services
                stands out as a leader in the security industry offering safety
                programs tailored to modern challenges. We believe in deploying
                top-notch security guards and advanced technology to keep you
                ahead of risks. Our commitment to excellence sets us apart, with
                continuous improvement, rigorous training, and generous
                performance incentives for our employees.
              </p>

              <p className="text-gray-600 leading-relaxed">
                There is no other security guard company in Riverside County,
                California quite like FalconX Security Services. Continuous
                improvement in our security services is one of our core values.
                Our security guards believe in setting heightened security
                service levels than anyone else in the industry. We prioritize
                listening to your unique needs, crafting programs that fit your
                community or organization. With us, you not only get a visible
                deterrent to criminal behavior but also the assurance of the
                most qualified security personnel to safeguard against theft,
                vandalism, and other security threats in Riverside.
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
        title="RIVERSIDE COUNTY CITIES"
        description="We provide security guards services to many cities and neighborhood in Riverside County."
        cities={cities}
      />
      <Quote text1="FalconX Security Services – A Company You Can Feel Secure With!" />
      <Slider
        title="Responsibilities of Security Guards in Riverside County"
        text="FalconX Security Services is committed to providing the utmost safety to the people of Riverside County with highly professional security guards."
      />
      <Advantage
        title="Benefits of Hiring Security Guards in Riverside County"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20 my-7">
        <div>
          <h2 className="text-2xl  py-4 text-center md:text-left md:py-0 md:text-3xl text-[#003366] font-bold  px-4">
            High-Quality Security Guard Services Riverside County
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              Riverside County, located in Southern California, is not only
              stunning but strategically positioned for easy access to Los
              Angeles and San Diego. Boasting sunny skies, a flourishing medical
              school, and the Naval Surface Warfare Center, Riverside County is
              a vibrant part of the SoCal scene. With one of the fastest-growing
              populations in California, Riverside County thrives with
              opportunities. However, many security firms here lack customized
              security plans tailored to client operations. That is where
              FalconX Security Services stands out. We specialize in
              personalized security plans, ensuring our clients’ success and
              efficiency. Supported by our real-time guard reporting system, our
              security services in Riverside are monitored round the clock by
              our expert Dispatch Center and dedicated operations team, offering
              both armed and unarmed guards for comprehensive protection.
            </p>
            <p>
              Our licensed security guards excel in safeguarding construction
              sites, residential areas, and commercial spaces, including gated
              communities with access controls. We focus on risk prevention,
              enforcing rules, maintaining order, and actively reporting
              maintenance and security issues to ensure your safety.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={riversideSecurityFeatures} />
      <AreasWeServe text="FalconX Security Services takes great pride in providing professional security services to safeguard various industries in California." />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default Riverside;
