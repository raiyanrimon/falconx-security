import { useEffect } from "react";

const Tidio = () => {
  useEffect(() => {
    // Check if the Tidio script is already added to prevent duplicate script tags
    if (!document.getElementById("tidio-script")) {
      const script = document.createElement("script");
      script.src = "//code.tidio.co/miphxpggiohudxb7spcqz9udpvfvxort.js";
      script.async = true;
      script.id = "tidio-script";
      document.body.appendChild(script);
    }
  }, []);

  return null; // No need to render anything, as Tidio chat will be displayed
};

export default Tidio;
