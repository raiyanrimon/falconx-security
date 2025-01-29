import img1 from "../assets/images/svg/01-2.svg";
import img2 from "../assets/images/svg/02-1.svg";
import img3 from "../assets/images/svg/03-1.svg";
import img4 from "../assets/images/svg/04-1.svg";
import img5 from "../assets/images/svg/05-1.svg";

const Features = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Main Title */}
      <h1 className="sm:text-4xl text-2xl font-noto font-semibold text-[#003366] text-center mb-12">
        TOP RATED SECURITY SERVICES COMPANY IN LOS ANGELES
      </h1>

      {/* Top Row - 3 Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* Card 1 */}
        <div className="border border-black shadow-lg p-5 rounded text-center">
          <div className="flex justify-center mb-6">
            <img src={img1} alt="" className="max-w-[90px]" />
          </div>
          <h2 className="text-2xl font-bold mb-4 min-h-10">
            Years of Expertise in the Security Industry
          </h2>
          <p className="text-gray-700">
            Founded in 2023, our Military Veterans team gives assurance to
            safeguard your well-being and assets in Los Angeles and beyond.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-black shadow-lg p-5 rounded text-center">
          <div className="flex justify-center mb-6">
            <img src={img2} alt="" className="max-w-[90px]" />
          </div>
          <h2 className="text-2xl font-bold mb-4 min-h-16">
            Quick Emergency Response Time
          </h2>
          <p className="text-gray-700">
            Our experienced security guards are adaptable to emergency and panic
            situations and plan the course of action immediately to safeguard
            people in Los Angeles and other counties.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-black shadow-lg p-5 rounded text-center ">
          <div className="flex justify-center mb-6">
            <img src={img3} alt="" className="max-w-[90px]" />
          </div>
          <h2 className="text-2xl font-bold mb-4 min-h-16">
            Customer-Focused Safety
          </h2>
          <p className="text-gray-700">
            We provide professional security guard services with well-trained
            guards, ensuring round-the-clock safety for your valuable assets.
          </p>
        </div>
      </div>

      {/* Bottom Row - 2 Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Card 4 */}
        <div className="border border-black shadow-lg p-5 rounded text-center">
          <div className="flex justify-center mb-6">
            <img src={img4} alt="" className="max-w-[90px]" />
          </div>
          <h2 className="text-2xl font-bold mb-4 min-h-16">
            Building Strong Relationships with Customers
          </h2>
          <p className="text-gray-700">
            FalconX Security Services prioritizes protecting lives and
            properties in Los Angeles and across California. Trust us for
            comprehensive, affordable security solutions, ensuring peace of
            mind.
          </p>
        </div>

        {/* Card 5 */}
        <div className="border border-black shadow-lg p-5 rounded text-center">
          <div className="flex justify-center mb-6">
            <img src={img5} alt="" className="max-w-[90px]" />
          </div>
          <h2 className="text-2xl font-bold mb-4 min-h-16">
            Adapt to Emergency Situations
          </h2>
          <p className="text-gray-700">
            We are the best security guard agency and dedicated to delivering
            highly qualified, adaptable security guards. Whether it's your
            business, community, or residence, count on our guards for safety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
