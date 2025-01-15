import bg from "../assets/images/Group-7140-1.webp";

const AboutContent = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto my-10 ">
        <h2 className="text-[#003366] text-center  font-bold md:text-4xl text-xl ">
          Take the First Step Towards a Safer Tomorrow with FalconX Security
          Services
        </h2>
        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className="mt-4 md:p-7 rounded-xl"
        >
          <p className="text-gray-700 text-lg p-8">
            The mission of FalconX Security Services is to deliver high-quality
            and professional security guard services to individuals, businesses,
            and organizations across California. We are dedicated to providing
            top-tier security, whether it’s unarmed or armed, fire-watch, foot,
            bike, or golf cart patrol security. Our goal is to craft effective
            security plans that provide the safety of our valued customers.
          </p>
          <div className="px-8">
            <p className="text-xl text-gray-800 mb-3">
              To accomplish this mission and ensure our clients’ peace of mind,
              we focus on the following key principles:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 px-5 ">
              <li>Operating efficiently</li>
              <li>Understanding specific security needs</li>
              <li>Responding promptly</li>
              <li>Establishing long-term relationships with clients</li>
            </ul>
          </div>

          {/* Vision Section */}
          <div className="p-9">
            <div class="border-t border-dashed border-gray-400 my-4"></div>

            <h2 className="md:text-3xl text-xl font-bold text-[#003366] text-center mb-6">
              Our Vision – Protecting People, Assets, and Properties in
              California
            </h2>
            <div class="border-t border-dashed border-gray-400 my-4"></div>

            <p className="text-gray-700 text-lg">
              At FalconX Security Services, our vision is to emerge as
              California’s premier security service provider by continually
              enhancing our offerings with cutting-edge solutions and refining
              our guards’ skills to ensure unparalleled professionalism. Driven
              by an unwavering commitment to customer satisfaction, we strive to
              forge enduring relationships built on trust and reliability,
              setting new standards of excellence in the industry and ensuring
              your safety and peace of mind.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F4F4] py-5 ">
        <div className="max-w-6xl mx-auto space-y-4 ">
          <h2 className="text-[#003366] text-center font-semibold text-[2.5rem]">
            OUR HISTORY
          </h2>
          <p className="text-gray-700 text-lg px-7">
            FalconX Security Services emerged in 2023, born from the collective
            expertise of a group of Military Veterans who recognized the
            paramount importance of safety and security in everyday life. With a
            deep-rooted commitment to preserving peace of mind, our founding
            members set out on a mission to provide comprehensive security
            solutions across California.
          </p>
          <p className="text-gray-700 text-lg px-7">
            From the outset, our focus has been on excellence, integrity, and
            unwavering professionalism. We understand that security needs vary
            widely, from bustling city streets to remote rural communities, and
            we are dedicated to meeting those needs with tailored, reliable
            services. Through continuous training and a proactive approach to
            evolving threats, we have established ourselves as a trusted partner
            in safeguarding lives, assets, and properties.
          </p>
          <p className="text-gray-700 text-lg px-7">
            As we continue to grow and evolve, FalconX Security Services remains
            steadfast in our dedication to the safety and well-being of our
            clients. With a commitment to innovation and customer satisfaction,
            we look forward to serving California communities for years to come,
            ensuring that everyone can enjoy the peace of mind that comes from
            knowing they are in capable hands.
          </p>
          <div className="bg-[#003366] text-white md:p-6 p-5">
            <p className="text-xl md:px-16 ">
              Our headquarters is in Los Angeles where we administer our
              exceptional services to provide peace of mind to our esteemed
              customers. At FalconX Security Services, our security guards can
              bring the military expertise to ensure the 24-hour safety of our
              clients in California.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
