import AreasWeServe from "../components/shared/AreasWeServe";
import BlogsList from "../components/BlogsList";
import FAQContact from "../components/FAQContact";
import Features from "../components/Features";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import PremiumServices from "../components/PremiumServices";
import SecurityAd from "../components/SecurityAd";
import SecurityCompany from "../components/SecurityCompany";
import SecurityFeatures from "../components/SecurityFeatures";
import ServiceList from "../components/shared/ServiceList";
import StaticCounter from "../components/StaticCounter";
import TestimonialsSlider from "../components/TestimonialsSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import Advantage from "../components/shared/Advantage";
import SEO from "../components/shared/Seo";

const Home = () => {
  return (
    <div>
      <SEO title="Best Security Guard Service California" />
      <Hero />
      <MainContent />
      <SecurityFeatures />
      <WhyChooseUs />
      <ServiceList />
      <SecurityCompany />
      <Features />
      <PremiumServices />
      <AreasWeServe />
      <FAQContact />
      <TestimonialsSlider />
      <StaticCounter />
      <BlogsList />
      <SecurityAd />
    </div>
  );
};

export default Home;
