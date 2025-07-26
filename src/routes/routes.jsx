import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Home from "../pages/Home";
import Faq from "../pages/Faq";
import Service from "../pages/Service";
import Blog from "../pages/Blog";
import SingleBlog from "../pages/SingleBlog";
import ContactUs from "../pages/ContactUs";
import Industries from "../pages/Industries";
import Career from "../pages/Career";

import ArmedSecurity from "../pages/service/ArmedSecurity";
import FireWatch from "../pages/service/FireWatch";

import FootBike from "../pages/service/FootBike";

import VideoSecurity from "../pages/service/VideoSecurity";
import Patrol from "../pages/service/Patrol";
import Standing from "../pages/service/Standing";
import UnarmedSecurity from "../pages/service/UnarmedSecurity";
import AirportSecurityServices from "../pages/industries/AirportSecurityServices";
import DataCenter from "../pages/industries/DataCenter";
import Dispensary from "../pages/industries/Dispensary";
import Financial from "../pages/industries/Financial";
import Government from "../pages/industries/Government";
import HealthCare from "../pages/industries/Healthcare";
import HighRise from "../pages/industries/HighRise";
import Reception from "../pages/industries/Reception";
import Shopping from "../pages/industries/Shopping";
import AutoDealership from "../pages/industries/AutoDealership";
import College from "../pages/industries/College";
import Entertainment from "../pages/industries/Entertainment";
import Event from "../pages/industries/Event";
import Tournament from "../pages/industries/Tournament";
import Apartment from "../pages/industries/Apartment";
import Assisted from "../pages/industries/Assisted";
import Gated from "../pages/industries/Gated";
import Private from "../pages/industries/Private";
import Vacant from "../pages/industries/Vacant";
import Construction from "../pages/industries/Construction";
import Docks from "../pages/industries/Docks";
import Manufacturing from "../pages/industries/Manufacturing";
import Parking from "../pages/industries/Parking";
import Pharmaceutical from "../pages/industries/Pharmaceutical";
import Solar from "../pages/industries/Solar";
import Cultural from "../pages/industries/Cultural";
import Transportation from "../pages/industries/Transportation";
import Utility from "../pages/industries/Utility";
import Warehouse from "../pages/industries/Warehouse";
import Farms from "../pages/industries/Farms";
import Cemetery from "../pages/industries/Cemetery";
import Worship from "../pages/industries/Worship";
import Hotels from "../pages/industries/Hotels";
import Public from "../pages/industries/Public";
import Restaurant from "../pages/industries/Restaurant";
import Theme from "../pages/industries/Theme";
import Train from "../pages/industries/Train";
import Ventura from "../pages/service-areas/Ventura";
import Bakersfield from "../pages/service-areas/Bakersfield";
import Fresno from "../pages/service-areas/Fresno";
import LosAngeles from "../pages/service-areas/LosAngeles";
import NewportBeach from "../pages/service-areas/NewportBeach";
import OrangeCounty from "../pages/service-areas/OrangeCounty";
import PalmSprings from "../pages/service-areas/PalmSprings";
import Riverside from "../pages/service-areas/Riverside";
import Sacramento from "../pages/service-areas/Sacramento";
import SanBernardino from "../pages/service-areas/SanBernardino";
import SanDiego from "../pages/service-areas/SanDiego";
import SanFrancisco from "../pages/service-areas/SanFrancisco";
import SantaBarbara from "../pages/service-areas/SantaBarbara";
import SantaClara from "../pages/service-areas/SantaClara";
import SouthernCalifornia from "../pages/service-areas/SouthernCalifornia";
import Stockton from "../pages/service-areas/Stockton";
import Temecula from "../pages/service-areas/Temecula";
import Training from "../pages/Training";
import ErrorPage from "../components/ErrorPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";

import ThankYou from "../pages/ThankYou";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "about-us", element: <About /> },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      { path: "/:slug", element: <SingleBlog /> },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "training",
        element: <Training />,
      },
      {
        path: "industries",
        element: <Industries />,
      },
      // {
      //   path: "careers",
      //   element: <Career />,
      // },
      {
        path: "thank-you",
        element: <ThankYou />,
      },
      // Services path
      {
        path: "armed-security-guards",
        element: <ArmedSecurity />,
      },
      {
        path: "service/armed-security-guards",
        element: <ArmedSecurity />,
      },
      {
        path: "fire-watch",
        element: <FireWatch />,
      },
      {
        path: "service/fire-watch",
        element: <FireWatch />,
      },
      {
        path: "foot-bike-and-golf-patrol",
        element: <FootBike />,
      },
      {
        path: "service/foot-bike-and-golf-patrol",
        element: <FootBike />,
      },
      {
        path: "live-video-security",
        element: <VideoSecurity />,
      },
      {
        path: "service/live-video-security",
        element: <VideoSecurity />,
      },
      {
        path: "service/patrol-division",
        element: <Patrol />,
      },
      {
        path: "patrol-division",
        element: <Patrol />,
      },
      {
        path: "standing-guard",
        element: <Standing />,
      },
      {
        path: "service/standing-guard",
        element: <Standing />,
      },
      {
        path: "unarmed-security-guards",
        element: <UnarmedSecurity />,
      },
      {
        path: "service/unarmed-security-guards",
        element: <UnarmedSecurity />,
      },
      //industries path
      {
        path: "airport-security-services",
        element: <AirportSecurityServices />,
      },
      {
        path: "/industries/airport-security-services",
        element: <AirportSecurityServices />,
      },
      {
        path: "data-centers-and-tech-companies-security",
        element: <DataCenter />,
      },
      {
        path: "/industries/data-centers-and-tech-companies-security",
        element: <DataCenter />,
      },
      {
        path: "dispensary-security-services",
        element: <Dispensary />,
      },
      {
        path: "/industries/dispensary-security-services",
        element: <Dispensary />,
      },
      {
        path: "financial-bank-security-services",
        element: <Financial />,
      },
      {
        path: "/industries/financial-bank-security-services",
        element: <Financial />,
      },
      {
        path: "government-facility-security",
        element: <Government />,
      },
      {
        path: "/industries/government-facility-security",
        element: <Government />,
      },
      {
        path: "healthcare-and-hospital-security",
        element: <HealthCare />,
      },
      {
        path: "/industries/healthcare-and-hospital-security",
        element: <HealthCare />,
      },
      {
        path: "high-rise-building-security",
        element: <HighRise />,
      },
      {
        path: "/industries/high-rise-building-security",
        element: <HighRise />,
      },
      {
        path: "reception-and-lobby-desk-area-security",
        element: <Reception />,
      },
      {
        path: "/industries/reception-and-lobby-desk-area-security",
        element: <Reception />,
      },
      {
        path: "shopping-center-security",
        element: <Shopping />,
      },
      {
        path: "/industries/shopping-center-security",
        element: <Shopping />,
      },
      {
        path: "auto-dealership-security",
        element: <AutoDealership />,
      },
      {
        path: "/industries/auto-dealership-security",
        element: <AutoDealership />,
      },
      {
        path: "colleges-universities-and-schools-security-guard-services",
        element: <College />,
      },
      {
        path: "/industries/colleges-universities-and-schools-security-guard-services",
        element: <College />,
      },
      {
        path: "entertainment-security",
        element: <Entertainment />,
      },
      {
        path: "/industries/entertainment-security",
        element: <Entertainment />,
      },
      {
        path: "events-security-services",
        element: <Event />,
      },
      {
        path: "/industries/events-security-services",
        element: <Event />,
      },
      {
        path: "tournament-and-sport-event-security",
        element: <Tournament />,
      },
      {
        path: "/industries/tournament-and-sport-event-security",
        element: <Tournament />,
      },
      {
        path: "apartments-and-condominium-security",
        element: <Apartment />,
      },
      {
        path: "/industries/apartments-and-condominium-security",
        element: <Apartment />,
      },
      {
        path: "assisted-living-security",
        element: <Assisted />,
      },
      {
        path: "/industries/assisted-living-security",
        element: <Assisted />,
      },
      {
        path: "gated-community-and-hoa-security",
        element: <Gated />,
      },
      {
        path: "/industries/gated-community-and-hoa-security",
        element: <Gated />,
      },
      {
        path: "private-home-security-services",
        element: <Private />,
      },
      {
        path: "/industries/private-home-security-services",
        element: <Private />,
      },
      {
        path: "vacant-properties-security-services",
        element: <Vacant />,
      },
      {
        path: "/industries/vacant-properties-security-services",
        element: <Vacant />,
      },
      {
        path: "construction-site-security-services",
        element: <Construction />,
      },
      {
        path: "/industries/construction-site-security-services",
        element: <Construction />,
      },
      {
        path: "docks-and-marina-security",
        element: <Docks />,
      },
      {
        path: "/industries/docks-and-marina-security",
        element: <Docks />,
      },
      {
        path: "manufacturing-security",
        element: <Manufacturing />,
      },
      {
        path: "/industries/manufacturing-security",
        element: <Manufacturing />,
      },
      {
        path: "parking-lot-security",
        element: <Parking />,
      },
      {
        path: "/industries/parking-lot-security",
        element: <Parking />,
      },
      {
        path: "pharmaceutical-manufacturing-facilities-security",
        element: <Pharmaceutical />,
      },
      {
        path: "/industries/pharmaceutical-manufacturing-facilities-security",
        element: <Pharmaceutical />,
      },
      {
        path: "solar-farm-security",
        element: <Solar />,
      },
      {
        path: "/industries/solar-farm-security",
        element: <Solar />,
      },
      {
        path: "transporation-logistics-security",
        element: <Transportation />,
      },
      {
        path: "/industries/transporation-logistics-security",
        element: <Transportation />,
      },
      {
        path: "utility-agency-security-services",
        element: <Utility />,
      },
      {
        path: "/industries/utility-agency-security-services",
        element: <Utility />,
      },
      {
        path: "warehouse-security",
        element: <Warehouse />,
      },
      {
        path: "/industries/warehouse-security",
        element: <Warehouse />,
      },
      {
        path: "farms-and-agriculture-properties-security",
        element: <Farms />,
      },
      {
        path: "/industries/farms-and-agriculture-properties-security",
        element: <Farms />,
      },
      {
        path: "cemetery-security",
        element: <Cemetery />,
      },
      {
        path: "/industries/cemetery-security",
        element: <Cemetery />,
      },
      {
        path: "houses-of-worship-security",
        element: <Worship />,
      },
      {
        path: "/industries/houses-of-worship-security",
        element: <Worship />,
      },
      {
        path: "hotels-security-service",
        element: <Hotels />,
      },
      {
        path: "/industries/hotels-security-service",
        element: <Hotels />,
      },
      {
        path: "public-spaces-security",
        element: <Public />,
      },
      {
        path: "/industries/public-spaces-security",
        element: <Public />,
      },
      {
        path: "restaurant-security",
        element: <Restaurant />,
      },
      {
        path: "/industries/restaurant-security",
        element: <Restaurant />,
      },
      {
        path: "theme-parks-security-guard-services",
        element: <Theme />,
      },
      {
        path: "/industries/theme-parks-security-guard-services",
        element: <Theme />,
      },
      {
        path: "train-stations-and-bus-terminal-security",
        element: <Train />,
      },
      {
        path: "/industries/train-stations-and-bus-terminal-security",
        element: <Train />,
      },
      {
        path: "cultural-properties-security",
        element: <Cultural />,
      },
      {
        path: "/industries/cultural-properties-security",
        element: <Cultural />,
      },

      // service area
      {
        path: "bakersfield",
        element: <Bakersfield />,
      },
      {
        path: "service-areas/bakersfield",
        element: <Bakersfield />,
      },
      {
        path: "fresno-county-security-guards",
        element: <Fresno />,
      },
      {
        path: "service-areas/fresno-county-security-guards",
        element: <Fresno />,
      },
      {
        path: "los-angeles-security-guards",
        element: <LosAngeles />,
      },
      {
        path: "service-areas/los-angeles-security-guards",
        element: <LosAngeles />,
      },
      {
        path: "security-guard-newportbeach",
        element: <NewportBeach />,
      },
      {
        path: "service-areas/security-guard-newportbeach",
        element: <NewportBeach />,
      },
      {
        path: "orange-county",
        element: <OrangeCounty />,
      },
      {
        path: "service-areas/orange-county",
        element: <OrangeCounty />,
      },
      {
        path: "palm-springs-security-guards",
        element: <PalmSprings />,
      },
      {
        path: "service-areas/palm-springs-security-guards",
        element: <PalmSprings />,
      },
      {
        path: "security-guard-riverside-county",
        element: <Riverside />,
      },
      {
        path: "service-areas/security-guard-riverside-county",
        element: <Riverside />,
      },
      {
        path: "sacramento-security-guards",
        element: <Sacramento />,
      },
      {
        path: "service-areas/sacramento-security-guards",
        element: <Sacramento />,
      },
      {
        path: "san-bernardino",
        element: <SanBernardino />,
      },
      {
        path: "service-areas/san-bernardino",
        element: <SanBernardino />,
      },
      {
        path: "san-diego-security-guards",
        element: <SanDiego />,
      },
      {
        path: "service-areas/san-diego-security-guards",
        element: <SanDiego />,
      },
      {
        path: "san-francisco",
        element: <SanFrancisco />,
      },
      {
        path: "service-areas/san-francisco",
        element: <SanFrancisco />,
      },
      {
        path: "security-guard-santa-barbara",
        element: <SantaBarbara />,
      },
      {
        path: "service-areas/security-guard-santa-barbara",
        element: <SantaBarbara />,
      },
      {
        path: "security-guard-santa-clara",
        element: <SantaClara />,
      },
      {
        path: "service-areas/security-guard-santa-clara",
        element: <SantaClara />,
      },
      {
        path: "southern-california",
        element: <SouthernCalifornia />,
      },
      {
        path: "service-areas/southern-california",
        element: <SouthernCalifornia />,
      },
      {
        path: "stockton",
        element: <Stockton />,
      },
      {
        path: "service-areas/stockton",
        element: <Stockton />,
      },
      {
        path: "temecula-security-guards",
        element: <Temecula />,
      },
      {
        path: "service-areas/temecula-security-guards",
        element: <Temecula />,
      },
      {
        path: "ventura-county-security-guards",
        element: <Ventura />,
      },
      {
        path: "service-areas/ventura-county-security-guards",
        element: <Ventura />,
      },
    ],
  },
]);
