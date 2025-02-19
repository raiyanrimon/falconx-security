import Header from "./components/Header";

import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Google Analytics
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-W98N0WRKEB";
    document.head.appendChild(gaScript);

    const gaInit = document.createElement("script");
    gaInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-W98N0WRKEB');
    `;
    document.head.appendChild(gaInit);

    // Outreach Genius
    const ogScript = document.createElement("script");
    ogScript.async = true;
    ogScript.src = "https://cdn.outreachgenius.ai/wrapper/1.0/wrapper.js?pid=1gezjxzKxipGAKoxd1Qx";
    document.head.appendChild(ogScript);
  }, []);
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
