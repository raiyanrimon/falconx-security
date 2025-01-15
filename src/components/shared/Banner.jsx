const Banner = ({ title, text, backgroundImage, bgclass, video }) => {
  return (
    <div className="relative w-full h-[200px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover  lg:bg-center bg-no-repeat ${bgclass} `}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        onError={(e) => console.error("Video failed to load:", e)}
      >
        {/* Fallback Message */}
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className=" text-white relative max-w-7xl mx-auto h-full flex-col flex items-center justify-center">
        <h1 className=" text-xl md:text-5xl font-bold text-center font-rubik tracking-wider [text-shadow:_3px_0_0_#000] ">
          {title}
        </h1>{" "}
        <br />
        <h1 className="text-xl md:text-5xl font-bold tracking-wider">{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
