import armed from "../../assets/images/Armed-scurity-guards-1.svg";
import unarmed from "../../assets/images/Unarmed-scurity-guards-1.svg";
import firewatch from "../../assets/images/Fire-watch.svg";
import foot from "../../assets/images/Foot-Bike-and-Golf-Patrol-1.svg";
import live from "../../assets/images/Live-Video-Security-1.svg";
import patrol from "../../assets/images/Patrol-Services-Division-1.svg";
import standing from "../../assets/images/Standing-guards-1.svg";

const ServiceList = () => {
  return (
    <div className="py-5 md:my-20">
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="grid md:grid-cols-4 gap-5">
          <div className="mb-12 md:col-span-2 space-y-5">
            <h3 className="text-[#083264] font-noto font-extrabold text-xl  mb-2">
              FalconX Security Services
            </h3>
            <h2 className="md:text-4xl text-xl text-[#083264] font-noto font-extralight  mb-6">
              Explore Our{" "}
              <span className=" font-semibold font-noto">
                Unparalleled Services
              </span>
            </h2>
            <p className="text-justify">
              At FalconX Security Services, our vision is to be your trusted
              source for high-quality security services, driven by dedication,
              ambition, and professionalism. Our aim is to attract and keep the
              best talent in the industry, offering continuous training and
              adopting innovative technologies to provide unmatched security
              solutions.
            </p>
          </div>

          <div className="gap-8">
            <div className="bg-[#90CDF1] hover:bg-[#1C5181] hover:text-white p-8 rounded-lg transition-all duration-300 group">
              <div className="mb-4">
                <img
                  src={unarmed}
                  alt="Unarmed Security"
                  className="group-hover:filter group-hover:invert w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-semibold font-noto mb-4">
                UNARMED SECURITY GUARDS
              </h3>
              <p>
                Unarmed security guards are skilled in conflict resolution,
                surveillance, and maintaining a visible presence.
              </p>
            </div>
          </div>

          <div className="bg-[#90CDF1] hover:bg-[#1C5181] hover:text-white p-8 rounded-lg transition-all duration-300 group">
            <div className="mb-4">
              <img
                src={armed}
                alt="Armed Security"
                className="group-hover:filter group-hover:invert w-20 h-20"
              />
            </div>
            <h3 className="text-xl font-semibold font-noto mb-4">
              ARMED SECURITY GUARDS
            </h3>
            <p>
              Armed security guards, trained in weapon handling, ensure
              high-risk security with deterrence.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-5">
          {[
            {
              image: standing,
              title: "STANDING GUARDS",
              description:
                "Our standing guards are a symbol of dedication. We stand tall to safeguard our client’s well-being & assets.",
            },
            {
              image: live,
              title: "LIVE VIDEO SECURITY",
              description:
                "Our live security guards effectively monitor CCTV cameras installed on the site to provide maximum protection.",
            },
            {
              image: foot,
              title: "FOOT, BIKE, AND GOLF PATROL",
              description:
                "We provide customized foot, bike, & golf patrol services to ensure the safety of all crucial areas effectively.",
            },
            {
              image: patrol,
              title: "PATROL SERVICES DIVISION",
              description:
                "Our security guards monitor areas, contributing to the overall safety & security of the premises.",
            },
            {
              image: firewatch,
              title: "FIRE WATCH",
              description:
                "Our well-trained fire watch security guards monitor, inspect, and ensure fire safety compliance.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#90CDF1] hover:bg-[#1C5181] hover:text-white p-7 rounded-lg transition-all duration-300 group"
            >
              <div className="mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="group-hover:filter group-hover:invert w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4  font-noto lg:h-12">
                {item.title}
              </h3>
              <p className="text-base ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
