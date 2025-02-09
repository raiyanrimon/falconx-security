import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-20.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-11.webp";
import image2 from "../../assets/images/03-10-1024x819.webp";

import sideImg from "../../assets/images/01-4-13.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import SEO from "../../components/shared/Seo";
import Quote from "../../components/shared/Quote";
import icon1 from "../../assets/images/01-17.svg";
import icon2 from "../../assets/images/02-16.svg";
import icon3 from "../../assets/images/03-16.svg";
import icon4 from "../../assets/images/04-16.svg";
import Ready from "../../components/shared/Ready";

const Sacramento = () => {
  const sacramentoSecurityFeatures = [
    {
      icon: icon1,
      title: "CCTV Installation",
      description:
        "Enhance safety with our cutting-edge CCTV systems and access control services in Sacramento, securing residents and visitors with advanced surveillance technology. Our security guards are well-trained in accessing the latest technology.",
    },
    {
      icon: icon2,
      title: "Alarm Systems",
      description:
        "Keep your property safe with our range of security options, including reliable alarm systems designed to provide added protection and peace of mind. This ensures 24/7 safety of the premises.",
    },
    {
      icon: icon3,
      title: "Access Control",
      description:
        "Our security guards monitor access points, ensuring only authorized personnel enter your property. Rigorous identification checks guarantee a secure environment for residents and visitors alike.",
    },
    {
      icon: icon4,
      title: "Incident Response",
      description:
        "Trained for swift action, our security guards respond to incidents promptly. In case of emergencies, we are equipped to contact the appropriate authorities, ensuring a quick and effective resolution.",
    },
  ];
  const cities = [
    {
      left: [
        "West Sacramento",
        "Parkway",
        "Arden-Arcade",
        "Rosemon",
        "La Riviera",
        "Florin",
        "Rio Linda",
        "Elverta",
      ],
      right: [
        "Carmichael",
        "North Highlands",
        "Foothill Farms",
        "Rancho Cordova",
        "Vineyard",
        "Laguna",
        "Antelope",
        "Fair Oaks",
      ],
    },
    {
      left: [
        "Davis",
        "Elk Grove",
        "Gold River",
        "Citrus Heights",
        "Orangevale",
        "Roseville",
        "Woodland",
        "Wilton",
      ],
      right: [
        "Folsom",
        "Rocklin",
        "Dixon",
        "Granite Bay",
        "Rancho Murieta",
        "Loomis",
        "El Dorado Hills",
        "Walnut Grove",
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="SACRAMENTO - Best Security Guard Service Company"
        description="FalconX Security Services provides top-notch, reliable security guard solutions in Sacramento County. From armed and unarmed security to personalized escort services, we ensure the safety of businesses, schools, hotels, and more. Serving areas like Antelope, Elk Grove, and Citrus Heights, our expert guards are committed to safeguarding your assets and premises."
      />
      <Banner
        title="SECURITY GUARD COMPANY IN SACRAMENTO"
        backgroundImage={bgImage}
        bgclass="bg-left"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-2xl mb-6 text-[#003366] md:text-3xl">
              Quality Security Guard Services from FalconX Security Services in
              Sacramento County
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Sacramento, a city rich in history and diversity, faces evolving
              security challenges as it continues to grow. FalconX Security
              Services is your trusted partner in addressing these challenges.
              Whether safeguarding corporate offices, schools, stores, or
              residential areas, we have the expertise to meet Sacramento’s
              unique security needs.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              We cater to diverse needs, ensuring 100% customer satisfaction for
              businesses and individuals. Thorough screenings precede the
              enrolment of our guards, offering both armed and unarmed security
              services based on client preferences. Our aim is to provide
              exceptional security, whether inside or outside your location.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Recognizing unique security expectations, we tailor services to
              match business goals. Our commitment extends to creating the
              safest work environment. For those working late, we offer escort
              services to ensure safe journeys from the office to the parking
              area. FalconX Security Services is your reliable partner for
              personalized, top-tier security solutions in Sacramento.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services is available for you in Sacramento
              County, covering areas like Antelope, Courtland, Carmichael, Elk
              Grove, Citrus Heights, Fair Oaks, Elverta, Folsom, and more. Our
              clients span diverse industries, from retail stores, schools, and
              hotels to shopping malls, resorts, construction firms, and oil
              companies (and other energy providers).
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
                Why Should You Choose FalconX Security Services in Sacramento?
              </h1>

              <p className="text-gray-600 leading-relaxed">
                When it comes to hiring security guards in Sacramento County,
                FalconX Security Services stands out as the premier choice. Our
                commitment to your safety and satisfaction sets us apart.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Firstly, we specialize in providing a diverse range of security
                services, from corporate security to construction site security,
                residential and hospital site security, mobile patrol services,
                and expertly trained VIP bodyguards. Our comprehensive offerings
                ensure that we have the expertise to meet your specific security
                needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Secondly, our dedication to excellence is evident in our
                continuous training programs for our security guards. Under the
                supervision of industry experts, our guards stay updated on the
                latest laws and regulations, ensuring they are well-prepared and
                compliant.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Thirdly, FalconX Security Services believes in providing
                top-tier security that is accessible to all. Our services are
                not only comprehensive but also affordable, making high-quality
                security solutions within reach for businesses and individuals
                alike.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lastly, our customer-centric approach means that your
                satisfaction is our priority. When you choose FalconX Security
                Services, you are choosing a partner committed to delivering
                exceptional security services tailored to your specific
                requirements in Sacramento County. Trust us for security
                solutions that go above and beyond your expectations.
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
        title="SACRAMENTO CITIES"
        description="We provide private security guards services to many cities and towns near Sacramento, California"
        cities={cities}
      />
      <Quote text1="FalconX Security Services – A Company You Can Feel Secure With!" />
      <Slider
        title="Responsibilities of Security Guards in Sacramento"
        text="FalconX Security Services is committed to providing the utmost safety to the people of Sacramento County with highly professional security guards."
      />
      <Advantage
        title="Benefits of Hiring Security Guards in Sacramento, California"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20 my-7">
        <div>
          <h2 className="text-2xl  py-4 text-center md:text-left md:py-0 md:text-3xl text-[#003366] font-bold  px-4">
            Securing Sacramento: FalconX Security Services, Your Trusted City
            Shield
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              FalconX Security Services is one of the renowned security guard
              service providers in Sacramento County. Headquartered in Los
              Angeles, we provide exceptional and high-quality security services
              at affordable prices. Whatever your security concerns, our highly
              trained security guards customize the security plans to suit your
              needs and budget.
            </p>
            <p>
              With extensive experience in the security industry, we have become
              a well-known name in Sacramento. Our reputation is built on
              delivering top-notch security services tailored to our clients’
              requirements and budgets. Beyond our services, our team consists
              of highly qualified security professionals prepared to handle any
              unforeseen situations and ensure the protection of you and your
              property. You can choose FalconX Security Services for a reliable
              and experienced partner in meeting Sacramento’s diverse security
              demands.
            </p>
            <p>Apart from our major security services, our guards also offer security services in Sacramento County, which are:</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={sacramentoSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default Sacramento;
