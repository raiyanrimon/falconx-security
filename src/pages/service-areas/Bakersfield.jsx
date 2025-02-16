import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-3-1.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-7.webp";
import image2 from "../../assets/images/03-6-1024x819.webp";

import sideImg from "../../assets/images/01-4-7.webp";
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
import icon1 from "../../assets/images/01-9.svg";
import icon2 from "../../assets/images/02-9.svg";
import icon3 from "../../assets/images/03-9.svg";
import icon4 from "../../assets/images/04-9.svg";
import Ready from "../../components/shared/Ready";

const Bakersfield = () => {
  const bakersfieldSecurityFeatures = [
    {
      icon: icon1,
      title: "Expertise that Counts",
      description:
        "You can trust our seasoned security professionals in Bakersfield County, CA. With a wealth of experience, our skilled guards are trained to handle diverse situations, ensuring confidence in your security measures.",
    },
    {
      icon: icon2,
      title: "Cutting-Edge Technology",
      description:
        "Stay vigilant against threats with our cutting-edge security tech. Utilizing advanced surveillance and communication tools, we employ the latest innovations to ensure your protection and stay one step ahead of potential threats.",
    },
    {
      icon: icon3,
      title: "Responsive Communication",
      description:
        "We recognize the significance of prompt communication in security. Our responsive team ensures that your concerns are promptly and effectively addressed, prioritizing swift communication for all security matters.",
    },
    {
      icon: icon4,
      title: "Competitive Pricing",
      description:
        "FalconX Security Services offers competitive pricing for our services, ensuring you get exceptional value without compromising on the quality of protection. Our security guards believe in quality security at an affordable price.",
    },
  ];
  const cities = [
    {
      left: [
        "Oildale",
        "Greenacres",
        "Rosedale",
        "Greenfield",
        "Lamont",
        "Weedpatch",
        "Arvin",
        "Shafter",
      ],
      right: [
        "Wasco",
        "McFarland",
        "Buttonwillow",
        "Bear Valley Springs",
        "Stallion Springs",
        "Ford City",
        "Taft",
        "Tehachapi",
      ],
    },
    {
      left: [
        "South Taft",
        "Delano",
        "Taft Heights",
        "Maricopa",
        "Bodfish",
        "Golden Hills",
        "Lake Isabella",
        "Alta Sierra",
      ],
      right: [
        "Tehachapi",
        "Pine Mountain Club",
        "Lebec",
        "Earlimart",
        "Frazier Park",
        "Wofford Heights",
        "Terra Bella",
        "Lost Hills",
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="BAKERSFIELD - Best Security Guard Service Company"
        description="Stay secure with FalconX Security Services in Bakersfield. Our highly qualified, trained security guards provide 24/7 services, including patrols, alarm monitoring, crowd control, and more, ensuring safety and reducing crime risks."
      />
      <Banner
        title="BAKERSFIELD SECURITY SERVICES"
        backgroundImage={bgImage}
        bgclass="bg-left"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-2xl mb-6 text-[#003366] md:text-3xl">
              Stay Secure and Safe with Us - Highly Qualified Security Guard
              Services in Bakersfield
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              In a recent six-month period, Bakersfield witnessed around 800
              crimes, urging business owners, schools, hospital administrators,
              restaurant owners, property managers, bank directors, and others
              to prioritize the security and safety of their assets, employees,
              and properties. FalconX Security Services is committed to
              providing excellent guard and patrol services to the residents of
              Bakersfield. Our professional and well-trained security guards
              efficiently identify suspicious activities and crimes and enforce
              laws, policies, and procedures.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              We provide 24/7 quality security guard services to Bakersfield and
              neighboring areas. Our offerings, including building lockup, alarm
              monitoring, crowd control, and parking enforcement, are not only
              cost-effective but also enhance safety and reduce the
              possibilities of crime. With extensive training and experience,
              our security guards handle crucial tasks for your organization’s
              safety, security, and operations, such as patrolling, closing the
              premises of the buildings, credential validation, and bag checks.
              These exceptional services make FalconX Security Services a
              leading security guard company in Bakersfield.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              At FalconX Security Services, you can hire the best security guard
              services in Bakersfield as our security guards are licensed and
              skilled to defend your home or business. Our security guards are
              certified to monitor properties for any suspicious activity,
              respond immediately to alarming situations, deter criminals who
              prey on communities equipped with less and negligible security
              protocols, and perform various other functions to ensure safety in
              Bakersfield.
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
                FalconX Security Services: #1 Security Guard Company in
                Bakersfield
              </h1>

              <p className="text-gray-600 leading-relaxed">
                Whether it is ensuring the safety of patrons attending events at
                the Mechanics Bank Arena or patrolling the historic streets of
                Old Town Kern, our security services cover various locations in
                Bakersfield, California.
              </p>

              <p className="text-gray-600 leading-relaxed">
                From large enterprises to small businesses, our security team at
                FalconX Security Services understands the unique security needs
                of different sectors. With a proven track record, we specialize
                in crafting customized strategies to safeguard your assets,
                ensuring a security plan that perfectly aligns with your
                residential or business requirements. We incorporate
                state-of-the-art technology into our security solutions,
                empowering the capabilities of our professional security guards.
                With CCTV monitoring and electronic access control, our
                deployments utilize the latest advancements for comprehensive
                security. You can contact us (866-500-2050) today for a FREE
                quote or consultation as per your security concerns.
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
        title="BAKERSFIELD CITIES"
        description="We provide private security guard services to many cities and neighborhood in Bakersfield, California"
        cities={cities}
      />
      <Quote text1="FalconX Security Services – A Company You Can Feel Secure With!" />
      <Slider
        title="Responsibilities of Security Guards in Bakersfield"
        text="FalconX Security Services is committed to providing the utmost safety to the people of Bakersfield County with highly professional security guards."
      />
      <Advantage
        title="Advantages of Hiring Security Guards in Bakersfield County"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20 my-7">
        <div>
          <h2 className="text-2xl  py-4 text-center md:text-left md:py-0 md:text-3xl text-[#003366] font-bold  px-4">
            Why Choose FalconX Security Services for Bakersfield Safety?
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              If you are in search of the best security guard company in
              Bakersfield, FalconX Security Services is the leading security
              guard company headquartered in Los Angeles. Our licensed and
              highly trained security personnel form the backbone of our
              operations, exceeding industry standards in their rigorous
              training. This ensures they are well-prepared to handle various
              security challenges with skill, professionalism, and integrity.
            </p>
            <p>
              From corporate functions to festivals, our security guards are
              adaptable and focused on creating a secure environment for all.
              Our professional guards undergo comprehensive training, covering
              everything from conflict resolution to emergency response,
              equipping them with the skills to navigate diverse scenarios
              effectively. You can experience the professionalism, reliability,
              and dedication that define FalconX Security Services in
              Bakersfield.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={bakersfieldSecurityFeatures} />
      <AreasWeServe text="FalconX Security Services takes great pride in delivering professional security guard services to various industries in Bakersfield." />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default Bakersfield;
