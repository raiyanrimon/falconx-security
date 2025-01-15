import Banner from "../components/shared/Banner";
import image from "../assets/images/banner-1.jpg";
import AboutContent from "../components/AboutContent";
import CoreValues from "../components/CoreValues";
import SEO from "../components/shared/Seo";

const About = () => {
  return (
    <div>
      <SEO title="About Us - Best Security Guard Service California" />
      <Banner title="ABOUT US" backgroundImage={image} bgclass="bg-left" />
      <AboutContent />
      <CoreValues />
    </div>
  );
};

export default About;
