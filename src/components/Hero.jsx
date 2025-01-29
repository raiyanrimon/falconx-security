import video from "../assets/video/banner-video-final2.mp4";
import poster from "../assets/images/Banner-Video-01_1.jpeg.webp";
export default function Hero() {
  return (
    <div className="relative lg:h-[530px] h-[320px] md:h-[400px] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        poster={poster}
        onError={(e) => console.error("Video failed to load:", e)}
      >
        {/* Fallback Message */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex items-center  justify-center py-3 md:p-4">
        <div className="text-center max-w-6xl mx-auto text-white px-0.5">
          <h2 className="md:text-[18px] text-[12px]  lg:mt-7 lg:mb-5 font-rubik px-2 sm:tracking-[3px] ">
            FALCONX SECURITY SERVICES: EXPERIENCED SECURITY PROFESSIONALS AT
            YOUR SERVICE
          </h2>
          <h1 className="text-lg lg:mx-[50px] md:text-[45px] p-3  text-center font-medium mb-7 font-rubik md:leading-[48px]  ">
            SECURITY GUARD SERVICES COMPANY IN CALIFORNIA
          </h1>

          <div className="md:pt-7 text-white md:mb-7">
            <div className="flex flex-col text-[14px] md:text-lg lg:text-[25px] lg:flex-row justify-evenly lg:px-[70px] font-light lg:mt-28 lg:gap-4 text-center">
              <p className="font-rubik font-light">Rapid Emergency Response</p>

              <p className="font-rubik font-light">
                <span className="hidden lg:inline">• </span>Available 24/7
              </p>

              <p className="font-rubik font-light">
                <span className="hidden lg:inline">• </span>
                Customized Security Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
