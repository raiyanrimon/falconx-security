import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-58.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-6-1.webp";
import image2 from "../../assets/images/03-4-1-1024x819.webp";

import sideImg from "../../assets/images/01-4-18.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import SEO from "../../components/shared/Seo";
import icon1 from "../../assets/images/01-22.svg";
import icon2 from "../../assets/images/02-21.svg";
import icon3 from "../../assets/images/03-21.svg";
import icon4 from "../../assets/images/04-21.svg";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const SantaClara = () => {
  const santaClaraSecurityFeatures = [
    {
      icon: icon1,
      title: "Tech Hub Safeguarding",
      description:
        "With Santa Clara's status as a tech hub, security services play a vital role in protecting intellectual property, data, and personnel for technology-based businesses in the region.",
    },
    {
      icon: icon2,
      title: "Community-Centric Approach",
      description:
        "FalconX Security Services in Santa Clara prioritizes a community-centric approach, working closely with local businesses, residents, and authorities to create a united front in ensuring overall safety.",
    },
    {
      icon: icon3,
      title: "Professional Vigilance",
      description:
        "FalconX Security Services plays a crucial role in safeguarding Santa Clara. Trained security guards respond promptly to emergencies, offering support and ensuring a protected environment.",
    },
    {
      icon: icon4,
      title: "Comprehensive Protection",
      description:
        "Whether upgrading surveillance or seeking executive protection, Santa Clara residents find peace with FalconX Security Services’ diverse solutions, ensuring safety in this dynamic and innovative city.",
    },
  ];
  const cities = [
    {
      left: [
        "Burbank",
        "Buena Vista",
        "San Jose",
        "Sunnyvale",
        "Campbell",
        "Cupertino",
        "Milpitas",
        "Milpitas",
      ],
      right: [
        "Cambrian Park",
        "Alum Rock",
        "Saratoga",
        "Mountain View",
        "East Foothills",
        "Seven Trees",
        "Loyola",
        "Monte Sereno",
      ],
    },
    {
      left: [
        "Los Gatos",
        "Los Altos",
        "Los Altos Hills",
        "Palo Alto",
        "Stanford",
        "East Palo Alto",
        "Newark",
        "Lexington Hills",
      ],
      right: [
        "Fremont",
        "Ladera",
        "Menlo Park",
        "West Menlo Park",
        "Atherton",
        "Portola Valley",
        "North Fair Oaks",
        "Union City",
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="SANTA CLARA - Best Security Guard Service California"
        description="FalconX Security Services provides top-tier security solutions in Santa Clara County, safeguarding businesses, residents, and institutions. With a focus on personalized security, our trained and experienced security guards ensure a safe environment for all, from Silicon Valley to Willow Glen and beyond."
      />
      <Banner
        title="SECURITY GUARD COMPANY IN SANTA CLARA"
        backgroundImage={bgImage}
        bgclass="bg-left"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              FalconX Security Services: Best Security Guard Services in Santa
              Clara
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Santa Clara County, home to approximately 1.9 million residents,
              is renowned as the heart of Silicon Valley. Its population thrives
              amidst technological innovation, boasting the headquarters of tech
              giants like Apple, Google, and Facebook. This dynamic county has
              diversity, culture, and opportunity, attracting professionals and
              entrepreneurs worldwide. Its vibrant communities, thriving
              economy, and world-class educational institutions, including
              Stanford University, contribute to its global recognition. Santa
              Clara County stands as a beacon of progress, embodying the spirit
              of innovation and the pursuit of excellence.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services is one of the renowned security service
              providers in Santa Clara County. Our commitment revolves around
              delivering high-quality security guard services tailored to the
              unique needs of the Santa Clara County area. We proudly extend our
              unique security services to Santa Clara County, ensuring safety
              and protection for businesses, residents, and various
              establishments in the vibrant communities within the county.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Whether you are running your business in Silicon Valley, Willow
              Glen, Silver Creek, Almaden Valley, Los Gatos, Cupertino, Morgan
              Hill, or West San jose, our team comprises a large pool of
              well-trained, experienced, and professional security guards. They
              comprehend the significance of security for your business,
              creating a safe environment for employees and visitors alike.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Before deploying our guards, we conduct thorough research and site
              tours of businesses, hospitals, or residential areas to determine
              the necessary security levels. Detailed discussions with clients
              help us understand their specific needs, whether it is a physical
              presence or remote patrol via CCTV. Our ultimate aim is to ensure
              customer satisfaction while aligning with their goals and business
              objectives.
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
                What can You Expect from our Santa Clara security guard
                services?
              </h1>

              <p className="text-gray-600 leading-relaxed">
                Expect top-notch security solutions from FalconX Security
                Services in Santa Clara. Our trained guards ensure safety with
                patrols, surveillance monitoring, and prompt response to
                incidents. Whether for events, businesses, or residential areas,
                we offer customizable security packages tailored to your
                specific needs, providing peace of mind and protection.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our commitment includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 py-3 px-2 space-y-2">
                <li>Round-the-clock service availability.</li>
                <li>
                  Trained, armed, and experienced security guards ensuring
                  client safety.
                </li>
                <li>
                  Both armed and unarmed guards for business, office, and event
                  security, including VIP bodyguard and patrolling services.
                </li>
                <li>
                  Rigorous background checks and thorough training to deliver
                  only the best guards.
                </li>
                <li>Customized security services tailored to client needs.</li>
                <li>Competitive industry rates.</li>
                <li>
                  Emergency and on-call security guard services available on
                  demand.
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="relative">
              <img src={sideImg} alt="Security Guard" />
            </div>
          </div>
        </div>
      </div>
      <Cities
        title="Santa Clara Counties"
        description="We provide private security guard services to many cities and neighborhoods in Santa Clara, California."
        cities={cities}
      />
      <Quote
        text1="SHARE YOUR NEEDS WITH US. WE'RE HERE TO LISTEN AND"
        text2="COLLABORATE TO ENSURE YOUR COMPLETE SATISFACTION"
      />
      <Slider
        title="Responsibilities of Security Guards in Santa Clara"
        text="FalconX Security Services is committed to providing the utmost safety to the people of Santa Clara County with highly professional security guards."
      />
      <Advantage
        title="Benefits of Hiring Security Guards in Santa Clara"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="text-xl md:text-3xl text-[#003366] font-bold  px-4">
            Ensuring Safety in Santa Clara: Customized Security Solutions for
            Every Need
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              Located in Silicon Valley, Santa Clara, named after Saint Claire
              of Assisi, is home to the oldest higher education institution in
              California—Santa Clara University—and hosts tech giants like
              Intel. Residents enjoy attractions like the Intel Museum,
              California’s Great America, and watching the 49ers play at Levi’s
              Stadium.
            </p>
            <p>
              FalconX Security Services caters to diverse needs, whether you are
              a retail owner upgrading security or a tech company requiring
              executive protection. Our professionals offer tailored security
              solutions that align with your company’s unique needs and budget.
            </p>
            <p>
              FalconX Security Services plays a crucial role in safeguarding
              locations from potential threats. Whether it is preventing
              robberies or ensuring safe pathways for your business or home, our
              well-trained security guards respond to emergencies, provide
              support, and even apprehend dangerous individuals, prioritizing
              the safety and protection of your space.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={santaClaraSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default SantaClara;
