import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-15-2.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-9.webp";
import image2 from "../../assets/images/03-8-1024x819.webp";

import sideImg from "../../assets/images/01-4-10.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import icon1 from "../../assets/images/01-12.svg";
import icon2 from "../../assets/images/02-12.svg";
import icon3 from "../../assets/images/03-12.svg";
import icon4 from "../../assets/images/04-12.svg";
import SEO from "../../components/shared/Seo";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const NewportBeach = () => {
  const newportBeachSecurityFeatures = [
    {
      icon: icon1,
      title: "Experienced Professionals",
      description:
        "FalconX Security Services boasts a team of seasoned experts, ensuring reliable protection with a wealth of experience in handling diverse security challenges in Newport Beach.",
    },
    {
      icon: icon2,
      title: "Comprehensive Solutions",
      description:
        "Our security services extend beyond crime prevention, providing a holistic approach that fosters a secure and welcoming environment, contributing to the community's overall well-being.",
    },
    {
      icon: icon3,
      title: "Local Expertise",
      description:
        "With a deep understanding of Newport Beach's unique dynamics, we tailor security strategies that address the specific safety concerns of the community, ensuring effective and localized protection.",
    },
    {
      icon: icon4,
      title: "Community-Centric Approach",
      description:
        "Beyond guarding against crime, FalconX Security Services actively contributes to creating a sense of community and comfort, making Newport Beach not just secure but also a cherished and vibrant destination.",
    },
  ];
  const cities = [
    {
      left: [
        "Costa Mesa",
        "Huntington Beach",
        "San Joaquin Hills",
        "Fountain Valley",
        "Midway City",
        "Santa Ana",
        "Laguna Beach",
        "Tustin",
      ],
      right: [
        "Westminster",
        "Garden Grove",
        "Laguna Woods",
        "Aliso Viejo",
        "Orange",
        "North Tustin",
        "Seal Beach",
        "Stanton",
      ],
    },
    {
      left: [
        "Laguna Hills",
        "Lake Forest",
        "Laguna Niguel",
        "Rossmoor",
        "Mission Viejo",
        "Anaheim",
        "Cypress",
        "Villa Park",
      ],
      right: [
        "Los Alamitos",
        "Foothill Ranch",
        "Hawaiian Gardens",
        "Dana Point",
        "La Palma",
        "Ladera Ranch",
        "Fullerton",
        "Las Flores",
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="NEWPORT BEACH - Best Security Guard Service Company"
        description="FalconX Security Services provides reliable security guard services in Newport Beach, ensuring the safety of businesses, residents, and properties. We offer comprehensive protection for offices, retail stores, hotels, medical facilities, and more."
      />
      <Banner
        title="NEWPORT BEACH SECURITY GUARD COMPANY"
        backgroundImage={bgImage}
        bgclass="bg-right"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-2xl mb-6 text-[#003366] md:text-3xl">
              Reliable Security Guard Services in Newport Beach
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Newport Beach is a coastal city in Southern Orange County,
              California, USA, with a population of around 85,000. People love
              Newport Beach for its great swimming spots and sandy beaches. In
              the past, Newport Harbor used to be a hub for maritime activities,
              but nowadays, it is mainly a place for recreation. Balboa Island
              is a popular spot, attracting visitors with its scenic waterfront
              path and convenient ferry access to shops and restaurants. With
              the increase in population, the occurrence of robberies,
              burglaries, assault, and other crimes also increase.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Newport Beach has seen close to around 2076 property crimes and
              188 violent crimes. To ensure the safety of individuals and
              business owners, FalconX Security Services offers comprehensive
              security guard services in Newport Beach and the nearby areas of
              Huntington Beach. We cover everything from corporate offices and
              retail stores to hotels, banks, medical facilities, and more. Our
              services extend to various property types, including construction
              sites, schools, religious institutions, and warehouses, both in
              Newport Beach and beyond.
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
                FalconX Security Services: The Best Security Guard Company in
                Newport Beach
              </h1>

              <p className="text-gray-600 leading-relaxed">
                Are you in need of security guards in Newport Beach? At FalconX
                Security Services, our security guards play a crucial role in
                keeping your place safe from theft and other harmful incidents.
                We aim to make sure that the areas around your business or home
                are secure. Our highly trained security guards can handle
                emergencies, offer support, and even apprehend criminals if
                necessary.
              </p>

              <p className="text-gray-600 leading-relaxed">
                FalconX Security Services is truly one of the leading security
                guard companies nationwide. In Newport Beach, it serves as a
                go-to for international corporations and private institutions
                seeking top-notch security services. There are several reasons
                why individuals choose us. One key factor is our distinctive
                security plan, which blends traditional law enforcement with
                24-hour security. This powerful combination allows us to offer
                the most comprehensive security service, setting us apart from
                others locally and globally.
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
        title="Areas of Newport Beach"
        description="We provide private security guard services to many cities and neighborhood in areas of Newport Beach."
        cities={cities}
      />
      <Quote text1="SHARE YOUR NEEDS WITH US. WE'RE HERE TO LISTEN AND COLLABORATE TO ENSURE YOUR COMPLETE SATISFACTION" />
      <Slider
        title="Responsibilities of Security Guards in Newport Beach"
        text="FalconX Security Services is committed to providing the utmost safety to the people of Newport Beach city with highly professional security guards."
      />
      <Advantage
        title="Advantages of Hiring Security Guards in Newport Beach"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20 my-7">
        <div>
          <h2 className="text-2xl  py-4 text-center md:text-left md:py-0 md:text-3xl text-[#003366] font-bold  px-4">
            Why Choose FalconX Security Services in Newport Beach?
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              Newport Beach witness robberies, assaults, violent crimes, theft,
              property crimes, vehicle theft, and burglaries. With an alarming
              2263 reported crimes per 100,000 people, choosing FalconX Security
              Services as the leading security guard company headquartered in
              Los Angeles minimizes the occurrence of crimes in Newport Beach.
              Choosing us is not only a decision; it is a commitment to safety
              and peace of mind. Our proactive approach and unwavering
              dedication act as a shield against the tide of criminal
              activities, ensuring that Newport Beach remains a haven for its
              residents and visitors.
            </p>
            <p>
              Our security guards are a promise of safeguarding the essence of
              Newport Beach. With a track record of reliability, our guards
              bring professionalism and expertise, creating a seamless blend of
              protection. Our security measures not only deter criminal
              activities but also contribute to the vibrant and secure
              atmosphere that makes Newport Beach a cherished destination.
              Choose FalconX Security Services to redefine security – not just
              as a service but as a transformative experience for Newport Beach
              and its residents.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={newportBeachSecurityFeatures} />
      <AreasWeServe text="FalconX Security Services takes great pride in delivering professional security guard services to various industries in Newport Beach." />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default NewportBeach;
