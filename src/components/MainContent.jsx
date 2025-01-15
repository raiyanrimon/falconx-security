import security from "../assets/images/Website-Copy-copy-1024x1024.png.webp";

export default function MainContent() {
  return (
    <div className="max-w-7xl mx-auto mb-40 mt-12 py-4 px-4 md:px-10 relative">
      <div className="grid  lg:grid-cols-[60%_40%] gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-[#083264] font-noto text-xl md:text-4xl font-semibold sm:text-3xl">
            FALCONX SECURITY SERVICES: SECURITY GUARD SERVICES COMPANY
          </h1>

          <p className="text-gray-700 text-base  text-justify leading-[27px]">
            At FalconX Security Services, we pride ourselves on being the
            premier security guard services company in Los Angeles. Our team
            comprises experienced Military Veterans who understand the
            significance of living in a peaceful environment. With professionals
            possessing extensive knowledge in security services, we bring
            military expertise to deliver high-quality, customized security
            solutions tailored to meet the unique needs of our clients. Our
            commitment to excellence is deeply ingrained in the disciplined
            backgrounds of our team members, who have undergone rigorous
            military and law enforcement training in the security sector.
          </p>

          <p className="text-gray-700 text-base  text-justify leading-[27px]">
            This solid foundation enables us to provide top-tier security
            services even in emergency and panic situations. At FalconX Security
            Services, our seasoned security guards recognize the critical
            importance of safeguarding people and their properties. That's why
            each member of our team undergoes comprehensive training, equipping
            them with the skills and knowledge to effectively handle any
            situation. Whether it involves protecting commercial properties,
            events, or individuals, our well-trained security guards carry out
            each task in Los Angeles County or anywhere else in California with
            the utmost dedication and professionalism.
          </p>
        </div>

        <div className=" lg:absolute -right-[390px] -bottom-[190px] ">
          <img
            src={security}
            alt="Security Professional"
            className="w-full lg:w-[60%] animate-fade-left "
          />
        </div>
      </div>
    </div>
  );
}
