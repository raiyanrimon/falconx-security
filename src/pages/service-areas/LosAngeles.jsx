import Banner from "../../components/shared/Banner";
import bgImage from "../../assets/images/banner-15-1.jpg.webp";
import bg from "../../assets/images/Group-7140-1.webp";

import image1 from "../../assets/images/02-13.webp";
import image2 from "../../assets/images/03-12-1024x819.webp";

import sideImg from "../../assets/images/01-4-9.webp";
import AreasWeServe from "../../components/shared/AreasWeServe";
import ClientLogoCarousel from "../../components/shared/ClientLogoCarousel";
import Advantage from "../../components/shared/Advantage";
import FeaturesComponent from "../../components/shared/FeaturesComponent";
import Slider from "../../components/shared/Slider";
import AreasNav from "../../components/shared/AreasNav";
import ServiceList from "../../components/shared/ServiceList";
import Cities from "../../components/shared/Cities";
import icon1 from "../../assets/images/01-11.svg";
import icon2 from "../../assets/images/02-11.svg";
import icon3 from "../../assets/images/03-11.svg";
import icon4 from "../../assets/images/04-11.svg";
import SEO from "../../components/shared/Seo";
import Quote from "../../components/shared/Quote";
import Ready from "../../components/shared/Ready";

const LosAngeles = () => {
  const losAngelesSecurityFeatures = [
    {
      icon: icon1,
      title: "Unbeatable and Attentive",
      description:
        "Our security guards always keep an eye out for anything suspicious. Being attentive and unbeatable, our security guards analyze the premises to prevent any mishappenings.",
    },
    {
      icon: icon2,
      title: "Quick and Immediate Emergency Response",
      description:
        "Our security guards in Los Angeles are adaptive in handling any emergency situation by giving first-aid services. We are always ready to contact government personnel in case of emergency.",
    },
    {
      icon: icon3,
      title: "Technology-Driven Security",
      description:
        "Our security guards are always equipped with the latest technology to keep you safe. We have surveillance-like eagle eyes that see everything by monitoring CCTV cameras.",
    },
    {
      icon: icon4,
      title: "Friendly Coordination with People",
      description:
        "Our security guards know how to coordinate with people and evacuate them quickly from high-risk areas in case any mishap occurs. This is the reason, people in Los Angeles feel secure with us.",
    },
  ];
  const cities = [
    {
      left: [
        "Agoura Hills",
        "Alhambra",
        "Arcadia",
        "Artesia",
        "Avalon",
        "Azusa",
        "Baldwin Park",
        "Bell",
        "Bell Gardens",
        "Bellflower",
        "Belvedere",
        "Beverly Hills",
        "Bradbury",
        "Calabasas",
        "Carson",
        "Cerritos",
        "Claremont",
        "Commerce, City of",
        "Compton",
        "Covina",
        "Cudahy",
        "Culver City",
        "Diamond Bar",
        "Downey",
      ],
      right: [
        "Duarte",
        "East Los Angeles",
        "East San Gabriel",
        "El Monte",
        "El Segundo",
        "Florence-Graham",
        "Gardena",
        "Glendale",
        "Hawaiian Gardens",
        "Hawthorne",
        "Hermosa Beach",
        "Hidden Hills",
        "Hollywood",
        "Huntington Park",
        "Industry, City of",
        "Inglewood",
        "Irwindale",
        "La Habra Heights",
        "La Mirada",
        "La Puente",
        "La Verne",
        "Ladera Heights",
        "Lakewood",
        "Lawndale",
      ],
    },
    {
      left: [
        "Lomita",
        "Long Beach",
        "Los Angeles",
        "Lynwood",
        "Malibu",
        "Manhattan Beach",
        "Maywood",
        "Monrovia",
        "Montebello",
        "Monterey Park",
        "North Glendale",
        "Norwalk",
        "Orange County",
        "Palmdale",
        "Palos Springs",
        "Palos Verdes Estates",
        "Pasadena",
        "Pico Rivera",
        "Pomona",
        "Rancho Palos Verdes",
        "Redondo Beach",
        "Rolling Hills",
        "Rolling Hills Estates",
        "Rosemead",
      ],
      right: [
        "San Dimas",
        "San Fernando",
        "San Gabriel",
        "San Marino",
        "Santa Clarita",
        "Santa Fe Springs",
        "Santa Monica",
        "Sierra Madre",
        "Signal Hill",
        "South Gate",
        "South Pasadena",
        "South San Gabriel",
        "Temple City",
        "Torrance",
        "Universal City",
        "Vernon",
        "Walnut",
        "Walnut Park",
        "West Covina",
        "West Hollywood",
        "Westlake Village",
        "Westmont",
        "Whittier",
        "Willowbrook",
      ],
    },
  ];

  return (
    <div>
      <SEO title="LOS ANGELES - Best Security Guard Service California" />
      <Banner
        title="SECURITY GUARD SERVICES IN LOS ANGELES"
        backgroundImage={bgImage}
        bgclass="bg-left"
      />
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[33%_67%] py-16">
          <AreasNav />
          <div className="mt-10 md:pr-10 p-4">
            <h2 className="font-noto md:pr-20  text-center font-semibold text-xl mb-6 text-[#003366] md:text-3xl">
              Reliable Security Guards In LA, California
            </h2>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Los Angeles County, home to over 10 million people, is famed for
              its diversity and cultural vibrancy. Downtown LA serves as a hub
              of commerce and entertainment, housing iconic landmarks like the
              Walt Disney Concert Hall and Staples Center. However, it grapples
              with homelessness, notably in Skid Row, where thousands reside
              without shelter. Car break-ins remain a concern across the city,
              reflecting a portion of its crime rate, which in 2020 saw 16,000
              reported incidents of property crime per 100,000 residents.
              Despite challenges, Los Angeles County perseveres as a beacon of
              opportunity and creativity.
            </p>

            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Reliability comes with trust. At FalconX Security Services, you
              get reliable security guards who can protect you whenever and
              wherever you need. Our skilled and well-trained security guards
              are ready to keep you safe with their best protection techniques!
              It’s like having an angel watching over you in Los Angeles.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              FalconX Security Services understands that trust is the foundation
              of any good relationship, especially when it comes to your safety.
              That is why we only hire the most reliable security guards, who
              are well-trained and reliable to ensure they can provide you with
              high-level protection.
            </p>
            <p className=" text-gray-800 my-3 text-justify leading-[27px]">
              Our security guards undergo rigorous training sessions, equipping
              them with a wide array of security measures and advanced
              protection techniques. Our mission is clear: to safeguard Los
              Angeles and its residents, and we spare no effort in achieving
              this goal. If you seek a team of professional security guards, all
              you need to do is reach out to us, and we will take it from there.
              You can cast aside your worries and entrust us with the security
              of your premises.
            </p>
            <h3 className="text-2xl font-semibold text-[#003366]  my-3 text-justify leading-[27px]">
              Here are some of the qualities that make our security guards so
              reliable:
            </h3>
            <ul className="list-disc list-inside text-gray-700 py-3 px-2 space-y-2">
              <li>
                <span className="font-bold">Extensive training: </span>Our
                security guards are trained in a variety of security techniques,
                including physical security, access control, and emergency
                response.
              </li>
              <li>
                <span className="font-bold">Experience: </span>We only hire
                guards by analyzing their background checks and those who have a
                proven track record of success in the security industry.
              </li>
              <li>
                <span className="font-bold">Dedication: </span>Our guards are
                committed to their jobs and take their responsibility seriously
                to safeguard your property and assets with utmost dedication and
                passion.
              </li>
              <li>
                <span className="font-bold">Integrity: </span>You can be sure
                that our guards will always act with honesty and
                professionalism.
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
                Trusted, Trained & Experienced Security Guards in Los Angeles
              </h1>

              <p className="text-gray-600 leading-relaxed">
                In a big city like Los Angeles, there are many companies
                offering security guard services. You cannot just pick any
                company randomly because it might lead to big problems. Keeping
                things safe is important and that is why FalconX Security
                Services is regarded as the top security service company in Los
                Angeles. We offer well-trained, knowledgeable, highly
                professional security guards for industrial, commercial, and
                residential customers.
              </p>

              <p className="text-gray-600 leading-relaxed">
                All our security guards undergo extensive training and
                background checks that meet your expectations. Combining
                experienced security guards with advanced technology, we ensure
                that our customers and security guards can easily communicate
                with each other in case of emergency. This makes us the top
                security guard company in Los Angeles that constantly keeps in
                touch with customers to create customized security plans as per
                their security concerns.
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
        title="LOS ANGELES CITIES"
        description="We provide private security guards services to many cities and neighborhood in Los Angeles."
        cities={cities}
      />
      <Quote
        text1="FALCONX SECURITY SERVICES PRIORITIZES YOUR SAFETY AND"
        text2="PROVIDES TAILORED EXPERT SECURITY SOLUTIONS FOR YOUR"
        text3="WELL-BEING."
      />
      <Slider
        title="Responsibilities of Our Experienced Security Guards in Los Angeles"
        text="FalconX Security Services provides well-trained Security Guards who fulfill their duty at the client’s premises responsibly."
      />
      <Advantage
        title="Benefits Of Choosing Security Guard Company In Los Angeles"
        image={image1}
      />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 md:my-20">
        <div>
          <h2 className="text-xl md:text-3xl text-[#003366] font-bold  px-4">
            Why Choose FalconX Security Services in Los Angeles?
          </h2>
          <div className="space-y-5 p-3 text-justify leading-[25px]">
            <p>
              FalconX Security Services is a team of Military Veterans who are
              highly knowledgeable and experienced in ensuring the safety of
              people and their properties in Los Angeles. We keep potential
              threats away from your home, workplace, and all the fun places you
              love in Los Angeles.
            </p>
            <p>
              So, if you want to feel safe and sound in a shining home, choose
              FalconX Security Services. We will become your shield, your
              superhero, and your friend, keeping Los Angeles a happy and fun
              place for you. With our licensed and well-trained security guards,
              you can sleep soundly and conquer every adventure, knowing you are
              protected by the best security guards in Los Angeles.
            </p>
            <p>
              There are various reasons that will attract you to choose FalconX
              Security Services in Los Angeles
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={image2} alt="" className="shadow-xl shadow-gray-300" />
        </div>
      </div>
      <FeaturesComponent features={losAngelesSecurityFeatures} />
      <AreasWeServe />
      <Ready />
      <ClientLogoCarousel />
    </div>
  );
};

export default LosAngeles;
