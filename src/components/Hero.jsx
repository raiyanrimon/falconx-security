import video from "../assets/video/banner-video-final2.mp4";
import poster from "../assets/images/Banner-Video-01_1.jpeg.webp";
export default function Hero() {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
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
          <h2 className="md:text-[18px] text-[14px]  mt-7 mb-5 font-rubik sm:tracking-[3px] ">
            FALCONX SECURITY SERVICES: EXPERIENCED SECURITY PROFESSIONALS AT
            YOUR SERVICE
          </h2>
          <h1 className="text-3xl mx-[50px] md:text-[45px]  text-center font-medium mb-8 font-rubik md:leading-[48px]  ">
            SECURITY GUARD SERVICES COMPANY IN CALIFORNIA
          </h1>

          <div className="md:pt-10  text-white mb-10">
            <div className="flex flex-col md:text-[25px] lg:flex-row justify-evenly lg:px-[70px] font-light md:mt-28 md:gap-4 text-center">
              <p className="font-rubik font-light">Rapid Emergency Response</p>

              <p className="font-rubik font-light">
                <span className="hidden md:inline">• </span>Available 24/7
              </p>

              <p className="font-rubik font-light">
                <span className="hidden md:inline">• </span>
                Customized Security Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
