import { FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import military from "../assets/images/02.svg";
import guard from "../assets/images/03.svg";
import guard24 from "../assets/images/04.svg";
import license from "../assets/images/05.svg";
import short from "../assets/images/06.svg";
import medal from "../assets/images/01-1.svg";

const features = [
  {
    image: medal,
    title: "Owned and Operated by Military Veterans",
    description:
      "Owned and operated by Military Veterans, FalconX Security Services ensures disciplined leadership and a commitment to excellence in delivering high-quality security services.",
  },
  {
    image: military,
    title: "Personalized Security Solutions",
    description:
      "FalconX Security Services creates customized security plans to meet your unique security concerns, providing comprehensive protection for your property, assets, and personnel.",
  },
  {
    image: guard,
    title: "Experienced and Well-Trained Guards",
    description:
      "Guards undergo rigorous training and possess extensive experience, offering a professional and competent security presence. Their backgrounds are thoroughly checked at the interview.",
  },
  {
    image: guard24,
    title: "Round-the-clock Dispatch Services",
    description:
      "Our knowledgeable and experienced security guards offer 24/7 dispatch services to handle any situation promptly, ensuring constant vigilance and rapid response to security concerns.",
  },
  {
    image: license,
    title: "Licensed, Insured, and Bonded",
    description:
      "At FalconX Security Services, our well-trained security guards are fully licensed and insured, with bonding for comprehensive coverage. The insurance policy covers property damage, bodily injury, and more.",
  },
  {
    image: short,
    title: "Short Term Security Services",
    description:
      "FalconX Security Services offers short-term security services and allows our valuable customers to experience our exceptional security services without committing to long-term contracts.",
  },
];

export default function SecurityFeatures() {
  return (
    <section>
      <div className="bg-[#C7C7C7] py-12 mb-16 px-10">
        <div className="max-w-7xl mx-auto md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <h1 className="text-[#083264] text-xl sm:text-3xl md:text-4xl font-semibold font-noto mb-8 md:mb-0">
              Safety Matters to Us! Ensure Your Safety with Our Reliable
              Security Guards Across All Regions of California
            </h1>
            <div className="space-y-1.5">
              <a
                href="tel:866-500-2050"
                className="flex items-center justify-center text-xl gap-2 bg-[#083264] text-white font-bold px-8 py-4 rounded"
              >
                <FaPhone /> 866-500-2050
              </a>
              <a
                href="mailto:info@falconxsecurity.com"
                className="flex items-center justify-center gap-2 bg-[#083264] text-xl text-white py-4 font-bold px-2 rounded"
              >
                <CgMail /> info@falconxsecurity.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="sm:text-center mb-16">
          <h2 className="text-[#083264] text-xl sm:text-4xl  font-bold mb-4">
            SECURE YOUR BUSINESS AND PROPERTY WITH FALCONX SECURITY SERVICES
          </h2>
          <p className="text-gray-600 text-[16px] font-bold">
            Your Security, Our Commitment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => {
            return (
              <div key={feature.title} className="text-center">
                <div className="bg-white rounded-full hover:border-black border-transparent border-[4px] w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <img src={feature.image} alt="" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
