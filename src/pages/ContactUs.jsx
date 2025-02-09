import Banner from "../components/shared/Banner";
import bg from "../assets/images/CONTACT-US-banner.jpg.webp";
import ContactSection from "../components/ContactSection";
import SEO from "../components/shared/Seo";

const ContactUs = () => {
  return (
    <div className="md:mb-48">
      <SEO
        title="Contact Us - Best Security Guard Service Company"
        description="Contact FalconX Security Services at 11150 W Olympic Blvd, Suite 1050, Los Angeles, CA 90064. Call us anytime at 866-500-2050 or email Info@falconxsecurity.com for customized security plans and 24/7 support. Your safety is our priority!"
      />
      <Banner
        title="CONTACT US"
        text="866-500-2050"
        backgroundImage={bg}
        bgclass="bg-right"
      />
      <ContactSection />
      <div className="map-container w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.1831254118692!2d-118.44374081913564!3d34.03917334923911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8cee7a8540338815%3A0x79e89c8bfaafe52e!2sFalconX%20Security%20Services!5e0!3m2!1sen!2sbd!4v1739118635354!5m2!1sen!2sbd"
            width="100%"
            height="350"
            style={{ border: "0" }}
            className={`rounded-[0.5rem] `}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
  );
};

export default ContactUs;
