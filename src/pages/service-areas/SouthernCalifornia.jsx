import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-59.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-6-4.webp";
import image2 from "../../assets/images/03-4-4-1024x819.webp";

import sideImg from "../../assets/images/01-5-1.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import icon1 from "../../assets/images/01-23.svg";
import icon2 from "../../assets/images/02-22.svg";
import icon3 from "../../assets/images/03-22.svg";
import icon4 from "../../assets/images/04-22.svg";
import SEO from "../../components/shared/Seo";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const SouthernCalifornia = () => {
  const falconXSecurityFeatures = [
    {
      icon: icon1,
      title: "Prevention of Crime",
      description:
        "FalconX Security Services employs proactive measures to deter criminal activities, safeguarding communities and businesses from potential threats.",
    },
    {
      icon: icon2,
      title: "Immediate Response Time",
      description:
        "With a commitment to rapid response, our security personnel ensure swift and effective interventions, minimizing the impact of security incidents.",
    },
    {
      icon: icon3,
      title: "Ensuring Peaceful Living",
      description:
        "Residents and businesses enjoy peacefulness under our supervision, as our security services create a secure environment essential to peaceful living and operation.",
    },
    {
      icon: icon4,
      title: "Adaptive in High-Risk Areas",
      description:
        "FalconX Security Services adapts to challenges in high-risk areas, using strategic approaches and advanced technology to maintain security in diverse and demanding environments.",
    },
  ];
  const cities = [
    {
      left: [
        "Anaheim",
        "Los Angeles",
        "Orange",
        "San Diego",
        "Long Beach",
        "Santa Ana",
        "Riverside",
        "Chula Vista",
      ],
      right: [
        "Irvine",
        "San Bernardino",
        "Oxnard",
        "Fontana",
        "Moreno Valley",
        "Glendale",
        "Huntington Beach",
        "Santa Clarita",
      ],
    },
    {
      left: [
        "Imperial",
        "Santa Barbara",
        "Garden Grove",
        "Oceanside",
        "Rancho Cucamonga",
        "Ontario",
        "Lancaster",
        "Palmdale",
      ],
      right: [
        "Corona",
        "Torrance",
        "Escondido",
        "Pasadena",
        "Fullerton",
        "Simi Valley",
        "Costa Mesa",
        "Ventura",
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="SOUTHERN CALIFORNIA - Best Security Guard Service California"
        description="FalconX Security Services offers trusted and reliable security solutions across Southern California, with a team of highly trained professionals providing 24/7 protection for residential, commercial, and public spaces. Backed by military veteran leadership, we ensure safety, minimize risks, and foster peace of mind."
      />
      <Banner
        title="SECURITY SERVICES IN SOUTHERN CALIFORNIA"
        backgroundImage={bgImage}
        bgclass="bg-left"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              Guardians of Security: Ensuring Safety and Peace of Mind in
              Southern California
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services is a leading provider of professional
              security guard services in Southern California. We provide a
              crucial layer of protection and peace of mind to all industries
              operating across the regions of Southern California. Our highly
              trained security guards are experts in their field and play a
              vital role in maintaining a safe and peaceful environment for
              people to live in. Beyond our physical presence, we serve as the
              first line of defense against potential threats. Our security
              guard services in Southern California help prevent criminal
              activity, minimize risks, and effectively manage crises, whether
              safeguarding residential areas, business establishments,
              educational institutions, or public events.
            </p>
            <h3 className="text-2xl font-semibold text-[#003366]  my-3 text-justify leading-[27px]">
              Here are some of the qualities that make our security guards so
              reliable:
            </h3>
            <ul className="list-decimal text-gray-700 py-3 px-2 space-y-2">
              <li>
                <span className="font-bold">Experienced Team: </span>FalconX
                Security Services brings together a team of seasoned
                professionals with extensive experience in the security
                industry, ensuring a high level of expertise.
              </li>
              <li>
                <span className="font-bold">24/7 Availability: </span>Security
                concerns can arise at any time. FalconX Security Services
                ensures round-the-clock availability, providing peace of mind
                with prompt and responsive services.
              </li>
              <li>
                <span className="font-bold">Military Veteran Ownership: </span>
                Our company is owned and operated by Military Veterans, bringing
                a disciplined and strategic approach to security services.
              </li>
            </ul>
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
                Do I Need Security Services in Southern California?
              </h1>

              <p className="text-gray-600 leading-relaxed">
                With crime rates on the rise and the threat danger rate
                increasing in Southern California, the need for reliable
                security services becomes crucial. FalconX Security Services is
                your trusted partner in addressing these challenges with ease.
                Whether you are a business owner, resident, or organizer of
                events in Southern California, the heightened risk demands a
                proactive approach to security.
              </p>

              <p className="text-gray-600 leading-relaxed">
                At FalconX Security Services, our security guards adapt
                seamlessly to the challenges of high-risk areas, employing a
                combination of strategic approaches and cutting-edge technology.
                Our comprehensive approach encompasses crime prevention, rapid
                response, and adaptability, making us a trusted partner in
                ensuring a secure and thriving environment for communities and
                businesses alike. In the face of escalating threats, FalconX
                Security Services stands as a reliable shield, offering peace of
                mind and a sense of security to communities in Southern
                California. Choosing us is not just a practical decision; it is
                an investment in ensuring safety and protection in the evolving
                landscape of Southern California.{" "}
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
        title="SOUTHERN CALIFORNIA COUNTIES"
        description="We provide security services to many counties across Southern California."
        cities={cities}
      />
      <Quote text1="FalconX Security Services – A Company You Can Feel Secure With!" />
      <Slider
        title="Responsibilities of Security Guards in Southern California"
        text="FalconX Security Services is committed to providing the utmost safety to the people of Southern California with highly professional security guards."
      />
      <Advantage
        title="Advantages of Hiring Security Guards In Southern California"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="text-xl md:text-3xl text-[#003366] font-bold  px-4">
            Safety Beyond Boundaries: FalconX Security Services in Action
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              In the dynamic landscape of Southern California, FalconX Security
              Services is considered as a reliable guardian, ensuring safety
              beyond boundaries. Our commitment to preventing crime goes beyond
              the conventional, employing proactive strategies that serve as a
              deterrent to potential threats. What sets us apart is our
              immediate response time – a crucial element in swiftly addressing
              security concerns and minimizing their impact. We extend our
              protective umbrella to create an atmosphere of peaceful living,
              fostering security not just for businesses but also for
              residential communities. With us, safety is not just a service but
              a commitment to safeguarding lives and assets in Southern
              California.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={falconXSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default SouthernCalifornia;
