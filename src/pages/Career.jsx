import EmploymentForm from "../components/EmploymentForm";
import Banner from "../components/shared/Banner";
import bgImage from "../assets/images/CAREERS-banner.jpg.webp";
import image from "../assets/images/7032310.png";
import SEO from "../components/shared/Seo";
const Career = () => {
  return (
    <div>
      <SEO title="Careers - Best Security Guard Service California" />
      <Banner title="CAREERS" backgroundImage={bgImage} bgclass="bg-right" />
      <div className="bg-[#7C7C7C] py-16">
        <div className="max-w-6xl mx-auto flex items-center">
          <img src={image} alt="" />
          <div className="text-white space-y-4 text-justify">
            <h2 className="font-noto font-medium text-2xl">
              About Working at FalconX Security Services
            </h2>
            <p>
              At FalconX Security Services, we are actively seeking highly
              qualified individuals to join our team of security professionals.
              We provide diverse career opportunities for those committed to
              delivering top-notch service and ensuring customer satisfaction.
              Qualifications for a security position at FalconX Security
              Services include:
            </p>

            <ul className="list-disc list-inside py-3 px-2 space-y-2">
              <li>High school diploma or equivalent</li>
              <li>Valid security guard card or the ability to obtain one</li>
              <li>Minimum age of 18</li>
              <li>Clean criminal record</li>
              <li>Excellent communication and customer service skills</li>
              <li>Ability to stay composed under pressure</li>
              <li>Basic computer proficiency</li>
              <li>Capability to stand for a long time</li>
            </ul>

            <p className="font-semibold text-lg">
              Our career options for security professionals encompass roles such
              as:
            </p>
            <ul className="list-disc list-inside py-3 px-2 space-y-2">
              <li>
                <span className="font-bold">
                  Armed and Unarmed security guards:{" "}
                </span>
                Deter potential criminals and enhance property protection.
              </li>
              <li>
                <span className="font-bold">CCTV operator: </span>Efficiently
                monitor CCTV systems and swiftly respond to incidents.
              </li>
              <li>
                <span className="font-bold">Access control officer: </span>
                Ensure only authorized personnel access the property.
              </li>
              <li>
                <span className="font-bold">Mobile patrol guard: </span>Conduct
                routine patrols to deter criminal activity.
              </li>
              <li>
                <span className="font-bold">Incident response guard: </span>
                Handle emergencies and contact authorities when needed.
              </li>
            </ul>
            <p>
              We provide competitive compensation, benefits, and opportunities
              for career growth. If you are passionate about providing top-tier
              security services, you can submit the form for consideration at
              FalconX Security Services.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <EmploymentForm />
    </div>
  );
};

export default Career;
