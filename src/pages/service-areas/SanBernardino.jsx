import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-5-2.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-14.webp";
import image2 from "../../assets/images/03-13-1024x819.webp";

import sideImg from "../../assets/images/01-4-14.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import icon1 from "../../assets/images/01-18.svg";
import icon2 from "../../assets/images/02-17.svg";
import icon3 from "../../assets/images/03-17.svg";
import icon4 from "../../assets/images/04-17.svg";
import SEO from "../../components/shared/Seo";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const SanBernardino = () => {
  const sanBernardinoSecurityFeatures = [
    {
      icon: icon1,
      title: "100% Customer Satisfaction",
      description:
        "FalconX Security Services prioritizes customer satisfaction, ensuring that clients receive high-quality security services customised to meet their specific needs.",
    },
    {
      icon: icon2,
      title: "Highly Trained Security Guards",
      description:
        "Our security guards undergo extensive training programs, equipping them with the skills and knowledge to handle various security challenges effectively.",
    },
    {
      icon: icon3,
      title: "24/7 Surveillance",
      description:
        "FalconX Security Services provides 24/7 surveillance with dedication and professionalism, offering continuous protection and peace of mind for clients in San Bernardino.",
    },
    {
      icon: icon4,
      title: "Equipped with Technology",
      description:
        "Using advanced and high-tech technological equipment to identify any danger, our security guards stay ahead of potential threats, enhancing the overall security of our clients.",
    },
  ];
  const cities = [
    {
      left: [
        "Colton",
        "Muscoy",
        "Loma Linda",
        "Rialto",
        "Highland",
        "Grand Terrace",
        "Bloomington",
        "Highgrove",
      ],
      right: [
        "Redlands",
        "Fontana",
        "Crestline",
        "Mentone",
        "Rubidoux",
        "Sunnyslope",
        "Lake Arrowhead",
        "Moreno Valley",
      ],
    },
    {
      left: [
        "Riverside",
        "Running Springs",
        "Glen Avon",
        "Pedley",
        "March Air Force Base",
        "Yucaipa",
        "Mira Loma",
        "Calimesa",
      ],
      right: [
        "Woodcrest",
        "Rancho Cucamonga",
        "Mead Valley",
        "Norco",
        "Oak Hills",
        "Cherry Valley",
        "Upland",
        "Home Gardens",
      ],
    },
  ];

  return (
    <div>
      <SEO title="SAN BERNARDINO - Best Security Guard Service California" />
      <Banner
        title="SECURITY GUARD SERVICES IN SAN BERNARDINO"
        backgroundImage={bgImage}
        bgclass="bg-left"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              Skilled and Experienced Security Guards Services in San Bernardino
              County
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              San Bernardino County, boasting a population of over 2 million,
              stands as California’s largest county. Renowned for its diverse
              landscapes encompassing mountains, deserts, and forests, it offers
              abundant recreational opportunities. The county gained prominence
              for its role in the California Gold Rush and Route 66. Today, it
              remains a vital transportation hub and a gateway to iconic
              destinations like Joshua Tree National Park and Big Bear Lake. San
              Bernardino County’s rich history, natural beauty, and economic
              significance continue to draw residents and visitors, shaping its
              unique identity as a vibrant and multifaceted region.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services is a locally owned and operated security
              guards service provider in Los Angeles County. We have expanded
              our business to offer security services in San Bernardino County.
              Our highly professional security guards are renowned for providing
              high-quality armed and unarmed security guard services in San
              Bernardino County. With a spontaneous increase in the number of
              threat and crime cases, businesses and organizations are now
              considering it mandatory to look for professional help in order to
              protect their properties, assets, and employees. You will find
              highly professional and well-trained security guards to minimise
              the risks of danger and threats.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              We provide a flexible level of security without compromising the
              satisfaction of our customers in San Bernardino. Our security
              guards will receive a high level of training and they will
              constantly assess risk at the site areas and offer immediate
              action for the benefit of the people. We customize our security
              services to meet the specific needs of our clients while providing
              full compliance with licensing standards. You can affordably
              invest in your safety in San Bernardino County and live a peaceful
              life.
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
              <h1 className="text-xl md:text-4xl font-semibold font-noto text-[#003366]">
                Why FalconX Security Services is the Best Choice in San
                Bernardino
              </h1>

              <p className="text-gray-600 leading-relaxed">
                In San Bernardino, FalconX Security Services stands out as the
                premier provider of comprehensive security solutions. With an
                unwavering dedication to safety and unmatched excellence, we
                have earned the trust of businesses, residences, and communities
                throughout the region.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our range of services includes armed and unarmed security
                guards, vehicle patrolling, fire watch duties, and foot, bike,
                and golf cart patrols. Each guard is equipped with customized
                security plans meticulously tailored to the distinct
                requirements of our clients. Leveraging our profound knowledge
                of the local terrain, we adeptly navigate and mitigate the
                unique security challenges encountered by both residents and
                businesses in San Bernardino.
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
        title="SAN BERNARDINO CITIES"
        description="We provide security guard services to many counties across San Bernardino."
        cities={cities}
      />
      <Quote text1="FalconX Security Services – A Company You Can Feel Secure With!" />
      <Slider
        title="Responsibilities of Security Guards in San Bernardino"
        text="FalconX Security Services is committed to providing the utmost safety to the people of San Bernardino County with highly professional security guards."
      />
      <Advantage
        title="Advantages of Hiring Security Services In San Bernardino"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="text-xl md:text-3xl text-[#003366] font-bold  px-4">
            FalconX Security Services – Top Rated Security Guard Company in San
            Bernardino
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              FalconX Security Services provides a wide variety of security
              services in San Bernardino including alarm monitoring and
              patrolling sites as well as electronic access control solutions in
              order to provide safety to people rather than just property. We
              protect businesses and organizations against threats such as theft
              or kidnapping and give assurance to business owners that their
              operations continue smoothly even in the event of a natural
              disaster. Our well-trained security guards implement the latest
              technology to develop unique security plans for each scenario and
              we ensure that your loved ones live a peaceful and secure life in
              San Bernardino.
            </p>
            <p>
              The need for security guards increases in San Bernardino. Whether
              you are running large and small businesses, visiting public
              venues, or organising private parties, it is necessary to ensure
              the safety of people, celebrities, VIPs, and staff members at such
              places. As safety concerns rise, FalconX Security Services
              addresses these needs by offering expertly trained security
              professionals who specialize in safeguarding diverse environments.
              Our security solutions provide a reliable and proactive approach,
              ensuring the protection of businesses, events, and individuals in
              San Bernardino.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={sanBernardinoSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default SanBernardino;
