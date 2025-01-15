const ContactBanner = ({ image, text, heading }) => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white border shadow-2xl ">
      <div className="flex justify-center mb-6 relative">
        <div className="absolute w-16 h-16 bg-blue-100 rounded-full shadow-2xl flex items-center justify-center mt-[-4rem]">
          <img src={image} alt="" />
        </div>
      </div>

      <div className="text-center space-y-4">
        <h1 className="font-semibold text-3xl text-[#003366]">{heading}</h1>
        <p className="text-gray-700 text-lg">{text}</p>

        <div className="w-24 h-1 bg-[#003366] mx-auto mt-4"></div>
      </div>
    </div>
  );
};

export default ContactBanner;
