import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-4.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-10.webp";
import image2 from "../../assets/images/03-9-1024x819.webp";

import sideImg from "../../assets/images/01-4-11.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import icon1 from "../../assets/images/01-14.svg";
import icon2 from "../../assets/images/02-13.svg";
import icon3 from "../../assets/images/03-13.svg";
import icon4 from "../../assets/images/04-13.svg";
import SEO from "../../components/shared/Seo";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const OrangeCounty = () => {
  const orangeCountySecurityFeatures = [
    {
      icon: icon1,
      title: "Experience and Expertise",
      description:
        "With a rich history in the security industry, FalconX Security Services delivers unparalleled expertise to each client engagement.",
    },
    {
      icon: icon2,
      title: "Licensed and Trained Personnel",
      description:
        "Our security personnel are licensed, rigorously trained, and consistently updated on the latest security protocols and technologies.",
    },
    {
      icon: icon3,
      title: "Community Engagement",
      description:
        "As an integral part of the Orange County community, we proactively collaborate with local businesses and residents, fostering a safer and more secure environment for everyone.",
    },
    {
      icon: icon4,
      title: "24/7 Support",
      description:
        "Security issues can emerge at any time. We offer round-the-clock support to address emergencies and maintain continuous protection.",
    },
  ];
  const cities = [
    {
      left: [
        "Villa Park",
        "Santa Ana",
        "Tustin",
        "North Tustin",
        "Anaheim",
        "Garden Grove",
        "Placentia",
        "Fullerton",
      ],
      right: [
        "Yorba Linda",
        "Fountain Valley",
        "Stanton",
        "Midway City",
        "Westminster",
        "Brea",
        "Buena Park",
        "Cypress",
      ],
    },
    {
      left: [
        "La Habra",
        "La Palma",
        "Huntington Beach",
        "San Joaquin Hills",
        "Los Alamitos",
        "La Mirada",
        "Hawaiian Gardens",
        "Foothill Ranch",
      ],
      right: [
        "Cerritos",
        "La Habra Heights",
        "Rossmoor",
        "Rowland Heights",
        "Lake Forest",
        "Artesia",
        "Laguna Woods",
        "Portola Hills",
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="ORANGE COUNTY - Best Security Guard Service Company"
        description="FalconX Security Services offers skilled and trained security guards in Orange County, providing customized protection for businesses, communities, and individuals. Our expert team delivers unmatched security using the latest techniques to ensure safety across various sectors."
      />
      <Banner
        title="SECURITY GUARD COMPANY IN ORANGE COUNTY"
        backgroundImage={bgImage}
        bgclass="bg-left"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-2xl mb-6 text-[#003366] md:text-3xl">
              FalconX Security Services: Skilled and Trained Security Guards in
              Orange County
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Orange County is renowned for its high standard of living and
              generally safe environment. It is a region of diverse economic
              opportunities, spanning technology, healthcare, and tourism.
              Residents enjoy a thriving job market and a housing mix of
              single-family homes, condominiums, and apartments. Orange County
              is home to well-regarded school districts and higher education
              institutions, providing a solid educational foundation for its
              residents.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              The area is rich in cultural and recreational activities,
              including parks, beaches, theatres, and museums. Community
              engagement is fostered through vibrant neighborhood watch
              programs, contributing to enhanced safety for all.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services takes pride in being a distinguished
              security guard company in Orange County, committed to delivering
              unmatched protection for businesses, communities, and individuals.
              Supported by a team of highly trained and licensed security
              professionals, we bring unparalleled expertise to Orange County’s
              security landscape. Our security guards undergo extensive training
              on how to handle various security challenges effectively by using
              the latest techniques and strategies.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              From corporate security to events and residential protection, we
              customize our services to fit your unique needs. As a proud member
              of the Orange County community, we actively collaborate with local
              businesses and residents. Our dedication extends beyond security
              services; we aim to enhance the well-being of the community we
              proudly serve.
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
                Specialists in Providing Exceptional Security Guard Services in
                Orange County
              </h1>

              <p className="text-gray-600 leading-relaxed">
                FalconX Security Services offers the best mobile security
                patrolling services, on-site security, and VIP security services
                in Orange County, California.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our professional security guards are:
              </p>

              <ul className="list-disc list-inside text-gray-700 py-3 px-2 space-y-2">
                <li>Thoroughly trained to meet your specific requirements.</li>
                <li>
                  Crisis experts with specialized training for emergencies in
                  locations like shopping malls and schools.
                </li>
                <li>
                  Utmost professionals adhering to a strict code of conduct,
                  ensuring the comfort of people around them.
                </li>
                <li>
                  Efficient in preventing theft or robbery attempts, crucial for
                  the safety of your family and staff.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We provide comprehensive security solutions employing
                cutting-edge equipment and training techniques, ensuring a high
                level of protection for your company or event.
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
        title="ORANGE COUNTY CITIES"
        description="We provide security services to many cities and neighborhood in Orange County."
        cities={cities}
      />
      <Quote text1="FalconX Security Services – A Company You Can Feel Secure With!" />
      <Slider
        title="Responsibilities of Security Guards in Orange County"
        text="FalconX Security Services is committed to providing the utmost safety to the people of Orange County with highly professional security guards."
      />
      <Advantage
        title="Advantages of Hiring Security Guards in Orange County"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20 my-7">
        <div>
          <h2 className="text-2xl  py-4 text-center md:text-left md:py-0 md:text-3xl text-[#003366] font-bold  px-4">
            Why Choose FalconX Security Services in Orange County?
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              In the vibrant landscape of Orange County, where tourism and
              industry thrive, the area is a popular location for trade
              exhibitions, conventions, and people who are looking to immerse
              themselves in California’s lifestyle.
            </p>
            <p>
              Businesses and institutions in Orange County are well aware of the
              fact that security is a major concern in today’s world. Security
              threats can strike anywhere and at any time. FalconX Security
              Services, a leader in the security industry, our premier security
              guards’ services ensure the maximum safety of businesses of all
              sizes. Our strong reputation is built on a foundation of highly
              qualified personnel, reliable and seasoned security guards, and
              unparalleled customer service. From small enterprises to large
              corporations, we cater to the security needs of diverse sectors,
              ensuring a shield against potential threats. You can partner with
              us for a security solution that prioritizes experience,
              dependability, and client satisfaction.
            </p>
            <p>
              With a commitment to excellence, we have gained the trust of
              organizations and businesses in Orange County.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={orangeCountySecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default OrangeCounty;
