import icon1 from "../../assets/images/03-90.svg";
import icon2 from "../../assets/images/01-90.svg";
import icon3 from "../../assets/images/02-90.svg";
import icon4 from "../../assets/images/04-90.svg";
import icon5 from "../../assets/images/05-90.svg";
import icon6 from "../../assets/images/06-90.svg";
import icon7 from "../../assets/images/07-90.svg";
import icon8 from "../../assets/images/08-90.svg";

const Advantage = ({ title, image }) => {
  return (
    <div className="bg-[#F4F4F4] py-10 px-2 md:px-6 md:py-16 w-full">
      <h1 className="text-2xl md:text-[31px] font-noto font-semibold text-[#003366] text-center mb-12">
        {title}
      </h1>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          {/* Each Advantage Item */}
          {[
            {
              icon: icon1,
              text: "FREE CONSULTATION",
            },
            {
              icon: icon2,
              text: "EXTENSIVELY TRAINED AND EXPERIENCED GUARDS",
            },
            {
              icon: icon3,
              text: "24-HOUR SURVEILLANCE",
            },
            {
              icon: icon4,
              text: "HIGH-TECH SECURITY WITH ADVANCED EQUIPMENT",
            },
            {
              icon: icon5,
              text: "QUICK RESPONSE IN EMERGENCY SITUATIONS",
            },
            {
              icon: icon6,
              text: "FLEXIBLE IN WORKING IN HIGH-RISKS AREAS",
            },
            {
              icon: icon7,
              text: "CUSTOMER SERVICE FOCUS",
            },
            {
              icon: icon8,
              text: "PREDICTABLE COSTS WITH NO SURPRISE OVERTIME CHARGES (EXCEPT MAJOR HOLIDAYS)",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 md:flex-row flex-col "
            >
              {" "}
              {/* Set a fixed height */}
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                <img src={item.icon} alt="" className="w-[90px]" />
              </div>
              <span className="text-[#003366] font-noto font-semibold text-center md:text-left flex-grow">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div className="md:w-1/2">
          <img
            src={image}
            alt="Security Guard Professional"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantage;
