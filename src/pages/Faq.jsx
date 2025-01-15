import Banner from "../components/shared/Banner";
import image from "../assets/images/banner-2.jpg";
import FAQItem from "../components/FAQItem";
import ContactBanner from "../components/shared/ContactBanner";
import image2 from "../assets/images/24-7.png.webp";
import image1 from "../assets/images/Our-Core-values.png.webp";
import SEO from "../components/shared/Seo";

const Faq = () => {
  return (
    <div>
      <SEO title="FAQ - Best Security Guard Service California" />
      <Banner title="FAQ's" backgroundImage={image} bgclass="bg-right" />
      <ContactBanner
        image={image1}
        heading="NEED ANY HELP!"
        text="We are more than happy to answer all of your questions 24/7 over the phone or email."
      />
      <FAQItem />
      <ContactBanner
        image={image2}
        text="Do you have more questions or need a quote? We're here to help! Feel free to reach out to us via email at info@falconxsecurity.com, give us a call at 866-500-2050, or chat with our 24/7 live support team by clicking the chat with Us button on the bottom right. We're ready to assist you in any way we can!"
      />
    </div>
  );
};

export default Faq;
