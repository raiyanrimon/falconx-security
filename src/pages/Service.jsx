import Banner from "../components/shared/Banner";
import service from "../assets/images/SERVICES-banner.jpg.webp";
import SecurityAd from "../components/SecurityAd";
import FAQContact from "../components/FAQContact";
import AreasWeServe from "../components/shared/AreasWeServe";
import bg from "../assets/images/Group-7140-1.webp";
import ServiceList from "../components/shared/ServiceList";
import SEO from "../components/shared/Seo";
const Service = () => {
  return (
    <div>
      <SEO title="Services - Best Security Guard Service California" />
      <Banner title="SERVICES" backgroundImage={service} bgclass="bg-left" />
      <div className="max-w-6xl mx-auto my-16 ">
        <h2 className="text-[#003366] md:text-4xl font-noto text-center font-semibold ">
          Professional Security Guard Services in California
        </h2>
        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className="mt-4 md:px-12 md:py-8 rounded-xl"
        >
          <p className="text-gray-700 text-lg px-8 py-2">
            With extensive experience spanning various regions of California,
            FalconX Security Services has established itself as a premier
            provider of top-notch security solutions. Our primary objective is
            to ensure the safety and protection of individuals, businesses,
            organizations, employees, and assets, all while minimizing any
            potential collateral damage.
          </p>

          <p className="text-gray-700 text-lg px-8 py-2">
            Our team comprises highly trained, licensed, and knowledgeable
            security guards who are adept at securing a wide range of businesses
            and events. From foot patrols to bike and golf cart patrols, live
            video security services to vehicle security patrol services, and
            fire watch services, we offer a comprehensive suite of security
            solutions tailored to meet the diverse needs of our clients.
          </p>

          <p className="text-gray-700 text-lg px-8 py-2">
            With extensive experience spanning various regions of California,
            FalconX Security Services has established itself as a premier
            provider of top-notch security solutions. Our primary objective is
            to ensure the safety and protection of individuals, businesses,
            organizations, employees, and assets, all while minimizing any
            potential collateral damage.
          </p>
          <p className="text-gray-700 text-lg px-8 py-2">
            At FalconX Security Services, we are committed to delivering
            excellence in security, safeguarding what matters most to our
            clients with professionalism, efficiency, and unwavering dedication.
          </p>
        </div>
      </div>
      <ServiceList />

      <AreasWeServe />
      <FAQContact />
      <SecurityAd />
    </div>
  );
};

export default Service;
