import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-56.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-5-4.webp";
import image2 from "../../assets/images/03-2-4-1024x819.webp";

import sideImg from "../../assets/images/01-webp-19.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import SEO from "../../components/shared/Seo";
import icon1 from "../../assets/images/01-20.svg";
import icon2 from "../../assets/images/02-19.svg";
import icon3 from "../../assets/images/03-19.svg";
import icon4 from "../../assets/images/04-19.svg";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const SanFrancisco = () => {
  const sanFranciscoSecurityFeatures = [
    {
      icon: icon1,
      title: "Retail Security",
      description:
        "Safeguard your business in San Francisco County with FalconX Security Services. Our tailored retail security plans protect shoppers, employees, and assets, ensuring a secure shopping environment for everyone.",
    },
    {
      icon: icon2,
      title: "Corporate Security",
      description:
        "Elevate your corporate security in San Francisco County with us. Our unmatched measures ensure the confidentiality and integrity of your business activities, fostering a safe and secure workplace environment.",
    },
    {
      icon: icon3,
      title: "Personal Security",
      description:
        "Trust us for comprehensive personal security in San Francisco County. Whether you need VIP protection, private bodyguards, or residential security, we have got you covered with our expert services.",
    },
    {
      icon: icon4,
      title: "Events Security",
      description:
        "Ensure the success of your events in San Francisco County with FalconX Security Services. Our professional team provides top-notch security to make your gatherings safe and memorable.",
    },
  ];
  const cities = [
    {
      left: [
        "Daly City",
        "Brisbane",
        "Sausalito",
        "Broadmoor",
        "Tiburon",
        "Colma",
        "Belvedere",
        "Marin City",
      ],
      right: [
        "Emeryville",
        "South San Francisco",
        "Oakland",
        "Alameda",
        "Strawberry",
        "San Bruno",
        "Albany",
        "Berkeley",
      ],
    },
    {
      left: [
        "Piedmont",
        "Mill Valley",
        "El Cerrito",
        "Pacifica",
        "Richmond",
        "Corte Madera",
        "Kensington",
        "Millbrae",
      ],
      right: [
        "Larkspur",
        "North Richmond",
        "East Richmond Heights",
        "Burlingame",
        "San Pablo",
        "Rollingwood",
        "Hillsborough",
        "Kentfield",
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="SAN FRANCISCO - Best Security Guard Service Company"
        description="FalconX Security Services provides trained and efficient security guard services in San Francisco County, offering 24/7 protection for businesses and employees. Our experienced, BSIS-licensed guards ensure your assets are safeguarded with expertise in on-site security and VIP protection."
      />
      <Banner
        title="SECURITY GUARD COMPANIES IN SAN FRANCISCO"
        backgroundImage={bgImage}
        bgclass="bg-right"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-2xl mb-6 text-[#003366] md:text-3xl">
              Trained and Efficient Security Guard Services in San Francisco
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              San Francisco County, with a population of around 870,000
              residents, is celebrated for its iconic landmarks, cultural
              diversity, and progressive values. Renowned as the “City by the
              Bay,” it charms visitors with attractions like the Golden Gate
              Bridge, Alcatraz Island, and vibrant neighborhoods like Chinatown
              and Haight-Ashbury. This cosmopolitan hub serves as a global
              center for technology, innovation, and entrepreneurship, hosting
              tech giants like Twitter, Uber, and Airbnb. San Francisco’s rich
              history, stunning architecture, and liberal atmosphere make it a
              magnet for tourists, artists, and dreamers alike, solidifying its
              status as one of the world’s most iconic cities.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services is the top security guards company in
              San Francisco County, dedicated to keeping your business and
              employees safe. At FalconX Security Services, our experienced and
              trained security guards are here to provide 24×7 protection. We
              offer affordable services that provide peace of mind, ensuring
              your business assets and employees are in expert hands.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Our security team possesses years of expertise in handling various
              security tasks like on-site private security and VIP armed guard
              private executive protection. We prioritize smooth collaboration
              with our clients, making the process hassle-free.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Our knowledgeable and well-trained security guards, with
              backgrounds in police departments, armed forces, and special
              government units, are professionally uniformed and dedicated
              towards their job. Choosing our services ensures you are under the
              protection of military experts, providing you with a sense of
              security and confidence as you live in San Francisco County.
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
                Why Should You Hire Security Guards In San Francisco?
              </h1>

              <p className="text-gray-600 leading-relaxed">
                Are you looking for a security guard in San Francisco?
                Headquartered in Los Angeles, FalconX Security Services offers
                the best security guard services in San Francisco. We provide
                24-hour private security services across the Bay Area, including
                Palo Alto, San Jose, Mountain View, Sunnyvale, Santa Clara,
                Menlo Park, and more.
              </p>

              <p className="text-gray-600 leading-relaxed">
                FalconX Security Services is your one-stop destination for
                reliable, affordable, and local security guards. Rated the
                premier security provider in the San Francisco Bay Area, we
                offer a range of services, from armed and unarmed guards to
                executive protection and mobile patrols with fully equipped
                vehicles. All our guards have a clean background and undergo a
                rigorous background check during their selection. Our security
                guards in San Francisco are trained enough to take effective
                measures in case there are some alarming activities noticed.
                Protect your business with us by choosing our customized
                security services, tailored to fit your needs and budget
                affordably.
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
        title="SAN FRANCISCO CITIES"
        description="We provide security guards services to many cities and neighborhood in San Francisco."
        cities={cities}
      />
      <Quote text1="FalconX Security Services – A Company You Can Feel Secure With!" />
      <Slider
        title="Here are some of our fundamental responsibilities"
        text="FalconX Security Services are exceptionally productive in fulfilling their responsibilities at client’s premises."
      />
      <Advantage
        title="Benefits Of Hiring Security Services In San Francisco"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20 my-7">
        <div>
          <h2 className="text-2xl  py-4 text-center md:text-left md:py-0 md:text-3xl text-[#003366] font-bold  px-4">
            FalconX Security Services Prioritizes Your Safety in San Francisco
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              At FalconX Security Services, your safety is our top priority. We
              understand the importance of feeling secure, whether you are
              running a business, attending an event, or seeking personal
              protection. Our dedicated team is committed to providing tailored
              security solutions to meet your specific needs.
            </p>
            <p>
              For businesses, we offer specialized retail and corporate security
              plans designed to safeguard your premises, employees, and assets.
              Personal security is our expertise, with VIP protection, private
              bodyguards, and residential security services tailored to your
              peace of mind. When it comes to events, our professional and
              knowledgeable security guards ensure a secure environment,
              contributing to the success of your gatherings.
            </p>
            <p>
              You can live your life with peace in San Francisco knowing that
              FalconX Security Services is here for you, delivering unparalleled
              safety measures that prioritize your well-being in every aspect of
              life.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={sanFranciscoSecurityFeatures} />
      <AreasWeServe text="FalconX Security Services Proudly Serves Various Industries, Providing Exemplary Professional Security Guard Services In San Francisco." />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default SanFrancisco;
