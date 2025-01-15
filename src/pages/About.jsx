import Banner from "../components/shared/Banner";
import image from "../assets/images/banner-1.jpg";
import AboutContent from "../components/AboutContent";
import CoreValues from "../components/CoreValues";
import SEO from "../components/shared/Seo";

const About = () => {
  return (
    <div>
      <SEO
        title="About Us - Best Security Guard Service California"
        description="FalconX Security Services, founded by Military Veterans in 2023, is dedicated to safeguarding individuals, businesses, and organizations across California. Our mission is to deliver professional, tailored security services, including armed and unarmed guards, fire-watch, and patrol options. With a vision to be California’s premier security provider, we prioritize customer satisfaction, innovation, and trust, ensuring the safety of people, assets, and properties. Headquartered in Los Angeles, our highly trained guards bring military expertise to provide 24/7 peace of mind."
      />
      <Banner title="ABOUT US" backgroundImage={image} bgclass="bg-left" />
      <AboutContent />
      <CoreValues />
    </div>
  );
};

export default About;
