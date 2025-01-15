import FAQContact from "./components/FAQContact";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import SecurityCompany from "./components/SecurityCompany";
import SecurityFeatures from "./components/SecurityFeatures";
import TestimonialsSlider from "./components/TestimonialsSlider";
import WhyChooseUs from "./components/WhyChooseUs";
import StaticCounter from "./components/StaticCounter";
import Footer from "./components/Footer";
import AreasWeServe from "./components/shared/AreasWeServe";
import BlogsList from "./components/BlogsList";
import SecurityAd from "./components/SecurityAd";
import PremiumServices from "./components/PremiumServices";
import ServicesNav from "./components/ServicesNav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
