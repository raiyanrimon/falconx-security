import Banner from "../components/shared/Banner";
import bg from "../assets/images/CONTACT-US-banner.jpg.webp";
import ContactSection from "../components/ContactSection";
import SEO from "../components/shared/Seo";

const ContactUs = () => {
  return (
    <div className="md:mb-48">
      <SEO
        title="Contact Us - Best Security Guard Service California"
        description="Contact FalconX Security Services at 11150 W Olympic Blvd, Suite 1050, Los Angeles, CA 90064. Call us anytime at 866-500-2050 or email Info@falconxsecurity.com for customized security plans and 24/7 support. Your safety is our priority!"
      />
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
