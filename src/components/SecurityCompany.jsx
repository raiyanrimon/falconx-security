import image from "../assets/images/04-3.webp";
import bg from "../assets/images/Group-7140-1.webp";

const SecurityCompany = () => {
  return (
    <div className="min-h-screen  px-2 bg-[#f4f4f4]">
      <div className="max-w-6xl mx-auto md:px-4 px-2 py-8">
        <h1 className="sm:text-4xl text-2xl font-bold text-[#003366] text-center mb-6">
          ARE YOU STILL SEARCHING FOR THE BEST SECURITY GUARD COMPANY IN LOS
          ANGELES?
        </h1>

        <p className="text-gray-700 text-lg mb-12  max-w-5xl mx-auto">
          In an insecure environment, constant threats endanger you and your
          loved ones. Safeguard your family, business, or property with Los
          Angeles' premier security guard provider company. Whether in Los
          Angeles County or across California, FalconX Security Services offers
          dependable, experienced, and knowledgeable security guard services
          tailored to your needs.
        </p>

        {/* Main Content Grid */}
        <div
          className="grid md:grid-cols-2 gap-8 items-start bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* Left Column - Image */}
          <div>
            <img
              src={image}
              alt="Security team members"
              className="w-full rounded-lg"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 mt-8 ">
            <div className="text-gray-700">
              <p className="mb-4">
                Our security guard services company provides exceptional
                security services statewide, staffed by well-trained, highly
                experienced security guards. From armed and unarmed guards to
                fire watch services and onsite patrols with patrol vehicles, we
                offer comprehensive security solutions. Our team comprises
                dedicated Military Veterans committed to protecting businesses
                and organizations across California.
              </p>
            </div>

            <div className="border-t border-gray-400 pt-6">
              <p className="text-gray-700 mb-4">
                Established in 2023 by a former Military Veteran, FalconX
                Security Services has rapidly expanded nationwide. Our
                experienced team undergoes extensive training to meet our high
                standards of innovation, professionalism, and dedication. Trust
                in FalconX Security Services for value and peace of mind, backed
                by our commitment to exceptional service.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="my-6">
          <p className="text-gray-700">
            As one of Los Angeles' most trusted security guard companies, we
            prioritize safety and satisfaction for both public and private
            sector clients. Our goal is to complete customer satisfaction
            through proactive service, continuous improvement, and rapid
            response.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityCompany;
