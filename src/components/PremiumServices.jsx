import bg from "../assets/images/Group-7140-1.webp";

const PremiumServices = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="md:text-4xl text-2xl font-noto font-semibold text-[#003366] text-center mb-8">
          PREMIUM SECURITY GUARDS SERVICES FOR ANY INDUSTRY
        </h1>

        <div className="space-y-6 text-gray-600 leading-[27px]">
          <p>
            FalconX Security Services takes pride in being the best security
            agency by safeguarding a wide variety of industries with our
            professional security guard services. We understand that different
            industries have unique security needs, and our experienced security
            guards showcase their expertise to meet our customers' specific
            requirements. With a commitment to excellence and the challenges
            associated with different industries, we offer comprehensive
            security solutions in California, aiming to provide safety and peace
            of mind for businesses and organizations across various sectors.
          </p>

          <p>
            At FalconX Security Services, our mission is to provide
            knowledgeable, licensed, and adaptable security guards to safeguard
            the people, assets, and properties of individuals residing in Los
            Angeles County or anywhere else in California. We take pride in
            serving various industries, maintaining an unwavering dedication to
            trust, confidence, and premium security guard services throughout
            Los Angeles. Whatever your industry, we possess the expertise and
            commitment to protect what matters most to you.
          </p>

          <p>
            Our security capabilities and management efficiency enable us to be
            adaptable and scalable with the security plans that we customize and
            offer to our clients. During consultations, our specialized security
            experts analyze your unique security requirements and offer a
            customized plan tailored to your property. We prioritize
            individualized security over one-size-fits-all solutions, providing
            you with the perfect fit for your specific needs.
          </p>

          <p>
            Contact us at{" "}
            <a href="tel:866-500-2050" className="text-blue-600 font-bold">
              (866-500-2050)
            </a>{" "}
            for security services in California across the following industries:
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumServices;
