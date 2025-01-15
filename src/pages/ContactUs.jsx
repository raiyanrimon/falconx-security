import Banner from "../components/shared/Banner";
import bg from "../assets/images/CONTACT-US-banner.jpg.webp";
import ContactSection from "../components/ContactSection";
import SEO from "../components/shared/Seo";

const ContactUs = () => {
  return (
    <div className="md:mb-48">
      <SEO title="Contact Us - Best Security Guard Service California" />
      <Banner
        title="CONTACT US"
        text="866-500-2050"
        backgroundImage={bg}
        bgclass="bg-right"
      />
      <ContactSection />
    </div>
  );
};

export default ContactUs;
