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
    <div className="bg-[#F4F4F4] py-10  px-6 md:py-16 w-full ">
      <h1 className="text-xl md:text-[31px] font-noto font-semibold text-[#003366] text-center mb-12">
        {title}
      </h1>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <div className="md:w-1/2 space-y-2">
          {/* Consultation */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
              <img src={icon1} alt="" className="max-w-[90px]" />
            </div>
            <span className="text-blue-900 font-noto font-semibold">
              FREE CONSULTATION
            </span>
          </div>

          {/* Guards */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
              <img src={icon2} alt="" className="max-w-[90px]" />
            </div>
            <span className="text-blue-900 font-noto font-semibold">
              EXTENSIVELY TRAINED AND EXPERIENCED GUARDS
            </span>
          </div>

          {/* Surveillance */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
              <img src={icon3} alt="" className="max-w-[90px]" />
            </div>
            <span className="text-blue-900 font-noto font-semibold">
              24-HOUR SURVEILLANCE
            </span>
          </div>

          {/* High-Tech */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
              <img src={icon4} alt="" className="max-w-[90px]" />
            </div>
            <span className="text-blue-900 font-noto font-semibold">
              HIGH-TECH SECURITY WITH ADVANCED EQUIPMENT
            </span>
          </div>

          {/* Emergency */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
              <img src={icon5} alt="" className="max-w-[90px]" />
            </div>
            <span className="text-blue-900 font-noto font-semibold">
              QUICK RESPONSE IN EMERGENCY SITUATIONS
            </span>
          </div>

          {/* High-Risk Areas */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
              <img src={icon6} alt="" className="max-w-[90px]" />
            </div>
            <span className="text-blue-900 font-noto font-semibold">
              FLEXIBLE IN WORKING IN HIGH-RISKS AREAS
            </span>
          </div>

          {/* Customer Service */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
              <img src={icon7} alt="" className="max-w-[90px]" />
            </div>
            <span className="text-blue-900 font-noto font-semibold">
              CUSTOMER SERVICE FOCUS
            </span>
          </div>

          {/* Costs */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
              <img src={icon8} alt="" className="max-w-[90px]" />
            </div>
            <span className="text-blue-900 font-noto font-semibold">
              PREDICTABLE COSTS WITH NO SURPRISE OVERTIME CHARGES (EXCEPT MAJOR
              HOLIDAYS)
            </span>
          </div>
        </div>

        <div className=" md:w-1/2">
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
