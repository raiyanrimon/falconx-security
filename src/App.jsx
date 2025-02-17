import Header from "./components/Header";

import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
