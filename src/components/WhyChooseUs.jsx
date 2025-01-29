import { useState, useEffect } from "react";

const testimonials = [
  "Fully licensed, insured, and bonded guards.",
  "24/7 emergency response team.",
  "Experienced military veterans.",
  "Customized security solutions.",
  "Comprehensive training programs.",
  "State-of-the-art security technology.",
];

export default function WhyChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500); // Animation duration
  };

  const handleDotClick = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="my-16">
      {/* Why Choose Us */}
      <div className="bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto  sm:py-10 lg:py-20 py-8 mb-8">
          <h2 className="text-[#083264] text-2xl px-1 md:text-[35px] font-noto font-semibold text-center mb-10">
            WHY SHOULD YOU CHOOSE FALCONX SECURITY SERVICES IN LOS ANGELES?
          </h2>

          {/* Slider */}
          <div className="text-center relative">
            <div
              className={`text-xl text-gray-700 transition-all duration-500 transform ${
                isAnimating
                  ? "opacity-0 translate-x-[-50px]"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {testimonials[currentSlide]}
            </div>
            <div className="flex justify-center gap-2 mt-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-[#083264]" : "bg-gray-300"
                  }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
