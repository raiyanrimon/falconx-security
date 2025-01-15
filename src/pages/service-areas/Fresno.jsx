import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-14-1.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-12.webp";
import image2 from "../../assets/images/03-11-1024x819.webp";

import sideImg from "../../assets/images/01-4-8.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import icon1 from "../../assets/images/01-10.svg";
import icon2 from "../../assets/images/02-10.svg";
import icon3 from "../../assets/images/03-10.svg";
import icon4 from "../../assets/images/04-10.svg";
import SEO from "../../components/shared/Seo";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const Fresno = () => {
  const fresnoSecurityFeatures = [
    {
      icon: icon1,
      title: "Certified Security Guards",
      description:
        "At FalconX Security Services, our guards are certified, ensuring they deliver top-notch services with proper training.",
    },
    {
      icon: icon2,
      title: "On-Time Services",
      description:
        "Our professional and dedicated security guards are consistent and on time in providing quick safety services in Fresno.",
    },
    {
      icon: icon3,
      title: "Licensed and Insured Guards",
      description:
        "Secured with Licensing and Insurance! Our guards, covered against harm, ensure a fraud-free environment for your safety and peace of mind.",
    },
    {
      icon: icon4,
      title: "Experienced Professionals",
      description:
        "Our experienced and skilled team excels in delivering reliable security services based on years of expertise.",
    },
  ];
  const cities = [
    {
      left: [
        "Sunnyside",
        "Tarpey Village",
        "West Park",
        "Clovis",
        "Easton",
        "Fowler",
        "Del Rey",
        "Sanger",
      ],
      right: [
        "Biola",
        "Caruthers",
        "Selma",
        "Kerman",
        "Parlier",
        "Minkler",
        "Parkwood",
        "Parksdale",
      ],
    },
    {
      left: [
        "Kingsburg",
        "Reedley",
        "Madera",
        "Laton",
        "Riverdale",
        "Madera Acres",
        "San Joaquin",
        "Dinuba",
      ],
      right: [
        "Lucerne",
        "London CA",
        "Orange Cove",
        "Auberry",
        "Squaw Valley",
        "Hanford",
        "Armona",
        "Orosi",
      ],
    },
  ];

  return (
    <div>
      <SEO title="FRESNO- Best Security Guard Service California" />
      <Banner
        title="SECURITY GUARD SERVICES IN FRESNO COUNTY, CA"
        backgroundImage={bgImage}
        bgclass="bg-right"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              Security Guard Services in Fresno County: The Need of the Hour
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Fresno, located in California’s San Joaquin Valley, is renowned
              for attractions like Forestiere Underground Gardens, trails in
              Woodward Park, and Fresno Chaffee Zoo. The population increased
              from 134,000 in 1960 to 428,000 in 2020, making Fresno the
              fifth-most populous city in California. Unfortunately, Fresno has
              witnessed a substantial rise in violent crime, echoing trends seen
              in other major cities nationwide. In 2020 alone, there was a 71%
              increase in shootings and a 64% increase in stabbings, posing
              significant challenges for local law enforcement.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              With such high numbers in violence, the demand for security guard
              services in Fresno is at an all-time high. To ensure the safety
              and peace of mind of residents and community members, FalconX
              Security Services provides a visible deterrent to criminals,
              thereby offering professional protection for assets and
              significantly reducing the risk of crimes. Whether opting for
              armed or unarmed guard services in Fresno, our highly trained
              personnel are equipped to prevent criminal activities. Among the
              plethora of security guard companies, FalconX Security Services
              stands out as a trusted name in Fresno. We prioritize our clients
              by crafting customized security plans tailored to their specific
              needs. Backed by a 24/7 dispatch team, dedicated operations team,
              and skilled security guards, we have emerged as the premier
              security provider for hotels, residential communities, educational
              facilities, and businesses throughout Fresno County.
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
                Effective and Reliable Security Guard Services in Fresno County
              </h1>

              <p className="text-gray-600 leading-relaxed">
                Living in the bustling city of Fresno, California, with its
                large population and diverse industries, demands a heightened
                focus on safety. FalconX Security Services emerges as a leader,
                addressing the crucial need for reliable security in Fresno
                County. With a population exceeding 428,000, the city witnesses
                the complexities of urban life, necessitating vigilant
                protection for businesses, educational institutions, and
                communities.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We stand out by providing effective security solutions tailored
                to the unique demands of Fresno County. Whether safeguarding
                bustling event venues, securing construction sites, or ensuring
                the safety of residential communities, we cover a broad
                spectrum. The city’s dynamic nature, ranging from retail hubs to
                healthcare facilities, benefits from our vigilant presence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In the over-populous city, where security is considered a
                crucial factor, FalconX Security Services is the trusted partner
                committed to delivering peace of mind and safeguarding the
                diverse landscapes of this thriving community. Our skilled
                security personnel undergo rigorous training to handle the
                multifaceted challenges of the area. From providing security at
                major events to ensuring the safety of VIPs and executives, our
                comprehensive approach covers the varied security needs of the
                city.
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
        title="FRESNO COUNTY CITIES"
        description="We provide private security guard services to many cities and neighborhood in Fresno County."
        cities={cities}
      />
      <Quote text1="FalconX Security Services – A Company You Can Feel Secure With!" />
      <Slider
        title="Responsibilities of Security Guards in Fresno"
        text="FalconX Security Services is committed to providing the utmost safety to the people of Fresno County with highly professional security guards."
      />
      <Advantage
        title="Advantages of Hiring Security Guards in Fresno County"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="text-xl md:text-3xl text-[#003366] font-bold  px-4">
            Why Choose FalconX Security Services for Fresno?
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              FalconX Security Services is one of the top names in the Fresno
              security industry providing comprehensive security services beyond
              just deploying security guards. The focus on alertness,
              dedication, and years of industry experience reflect a dedication
              to client safety. Our dedicated team understands the unique
              security needs of Fresno County, covering areas like Clovis,
              Firebaugh, Fowler, Orange Coe, Reedley, Coalinga, and Mendota.
              Apart from these areas, we also serve Selma, Parlier, Kerman,
              Kingsburg, Sanger, Huron, and San Joaquin.
            </p>
            <p>
              We offer more than just security – we provide peace of mind to our
              valuable customers in Fresno. Our security guards undergo rigorous
              training, ensuring readiness for diverse security challenges.
              Whether safeguarding residential neighborhoods, bustling business
              districts, or organizing events, we tailor our services to your
              specific needs. We are your local partner devoted to ensuring the
              safety of customers, students, and employees. With a customized
              approach to security, we stand as the trusted choice for Fresno,
              striving to make every corner of the city a secure haven.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={fresnoSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default Fresno;
