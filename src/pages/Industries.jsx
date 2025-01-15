import banner from "../assets/images/INDUSTRIES-banner-1.jpg.webp";
import Banner from "../components/shared/Banner";
import bg from "../assets/images/Group-7140-1.webp";
import SecurityAd from "../components/SecurityAd";
import FAQContact from "../components/FAQContact";
import SEO from "../components/shared/Seo";

const Industries = () => {
  return (
    <div>
      <SEO title="INDUSTRIES - Best Security Guard Service California" />
      <Banner backgroundImage={banner} title="INDUSTRIES" bgclass="bg-left" />
      <div className="max-w-7xl mx-auto  py-10">
        {/* Main Title */}
        <h1 className="md:text-center text-[#003366] text-xl md:text-5xl p-3 font-semibold mb-8 ">
          FalconX Security Services: Customized Security Solutions for Every
          Industry
        </h1>

        {/* Content Box */}
        <div className="bg-[#003366] text-white p-5 md:px-20 md:py-10  rounded-lg">
          {/* Main Paragraph */}
          <p className="text-xl mb-8 leading-relaxed">
            FalconX Security Services takes pride in protecting a wide range of
            industries with our professional security services. Our well-trained
            security guards understand that different sectors have unique
            security concerns. We provide customized and affordable security
            plans to businesses and organizations in California.
          </p>

          {/* Italic Quote */}
          <p className="text-xl text-center italic">
            With a commitment to excellence and a deep understanding of industry
            intricacies, we protect people, assets, and properties.
          </p>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="md:my-12 py-20"
      ></div>
      <FAQContact />
      <SecurityAd />
    </div>
  );
};

export default Industries;
