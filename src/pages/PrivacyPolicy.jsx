import { FiShield } from "react-icons/fi";
import Banner from "../components/shared/Banner";
import SEO from "../components/shared/Seo";
import { FaLock, FaEye, FaFileAlt, FaClock, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div>
      <SEO title="Privacy Policy - FalconX Security Services" description="Learn about how FalconX Security Services protects your privacy and handles your personal information." />
      <Banner title="PRIVACY POLICY" bgcolor="bg-[#E5EAEF]" />
      
      <div className="max-w-6xl mx-auto p-6">
      

       {/* Quick Summary Section */}
              <div className="bg-blue-50 p-6 rounded-lg mb-12 border-l-4 border-[#003366] shadow-sm max-w-6xl mx-auto my-5">
              
                <p className="text-gray-700 mb-4">
               At FalconX Security Services, we respect your privacy. We do not sell, share, or rent your personal information to anyone.

Any details you provide through our website or via text message are used only to communicate with you and provide the services you request.
                </p>
                <p className="text-gray-700">
                  If you have any questions about your information or how it’s used, contact our office at
                </p>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  
                  <a href="tel:8665002050" className="inline-flex items-center text-[#003366] font-semibold hover:underline">
                    <FaPhone size={18} className="mr-2" /> (866) 500-2050
                  </a>
                  <a href="mailto:info@falconxsecurity.com" className="inline-flex items-center text-[#003366] font-semibold hover:underline">
                    <FaEnvelope size={18} className="mr-2" /> info@falconxsecurity.com
                  </a>
                </div>
              </div>

        {/* Main Content with Cards for Each Section */}
        <div className="space-y-8">
          {/* Introduction Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-start mb-4">
              <FaFileAlt className="text-[#003366] mr-3 mt-1 flex-shrink-0" size={24} />
              <h2 className="text-2xl font-bold text-[#003366]">Introduction</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                At FalconX Security Services, accessible from https://FalconXSecurity.com, one of our main priorities is the 
                privacy of our visitors. This Privacy Policy document contains types of information that is collected and 
                recorded by FalconX Security Services and how we use it.
              </p>
              <p>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to 
                contact us through email at{" "}
                <a href="mailto:Info@falconxsecurity.com" className="text-[#003366] font-bold hover:underline">
                  Info@falconxsecurity.com
                </a>.
              </p>
              <p>
                This Privacy Policy ("Policy") explains how information about you is collected, used, and disclosed by your 
                access or use of this site or otherwise because of your interactions with us. By visiting this site directly 
                or through another site, you accept the terms and conditions of this Policy. This Policy applies to this site. 
                We are not responsible for the content or privacy practices on any website not operated by us to which this 
                site links or that links to this Site.
              </p>
            </div>
          </section>

          {/* Children's Privacy Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-start mb-4">
              <FiShield className="text-[#003366] mr-3 mt-1 flex-shrink-0" size={24} />
              <h2 className="text-2xl font-bold text-[#003366]">Children's Privacy</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                We believe it is important to provide added protection for children on the internet. We encourage parents 
                and guardians to observe, participate in, and/or monitor and guide their online activity.
              </p>
              <p>
                FalconX Security Services, Inc. is committed to safeguarding your privacy and ensuring the protection of 
                your personal information. Here is an overview of the data we may collect from you:
              </p>
              <h3 className="text-xl font-semibold text-[#003366] mt-6 mb-2">
                Data Collection for Individuals Above the Age of 13:
              </h3>
              <p>
                We do not knowingly collect any Personal Identifiable Information (PII) from children under the age of 13. 
                If you believe that your child has provided us with their PII, we urge you to contact us{" "}
                <a href="tel:866-500-2050" className="text-[#003366] font-bold hover:underline">
                  (866-500-2050)
                </a>{" "}
                immediately, and we will make every effort to promptly delete such information from our records.
              </p>
            </div>
          </section>

          {/* Information We Collect Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-start mb-4">
              <FaEye className="text-[#003366] mr-3 mt-1 flex-shrink-0" size={24} />
              <h2 className="text-2xl font-bold text-[#003366]">Information We Collect</h2>
            </div>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">Contact Forms:</h3>
                <p className="mb-3">
                  When you interact with our website or request information about FalconX Security Services, you may be 
                  required to complete online contact forms. These forms may ask for the following PII:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email address</li>
                  <li>First and last name</li>
                  <li>Address (business, service, shipping, and billing addresses)</li>
                  <li>Phone number</li>
                </ul>
                <p className="mt-3">
                  This PII is used to communicate with you regarding our services, for internal marketing purposes, and to 
                  address any issues related to your services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">Information Collected Automatically:</h3>
                <p className="mb-3">
                  When you access our website or engage in transactions with FalconX Security Services, we may automatically 
                  collect certain information, including:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-semibold text-[#003366] mb-2">Log Information:</h4>
                    <p>
                      This includes standard log files, capturing data such as IP addresses, browser type, Internet Service 
                      Provider (ISP), date and time stamps, referring/exit pages, and anonymous click data. This information 
                      is used for analyzing trends, managing the website, tracking user behavior, and collecting demographic data.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-semibold text-[#003366] mb-2">Usage Data:</h4>
                    <p>
                      Information about how you use our website, such as your device's IP address, browser type, pages 
                      visited, date and time of your visit, time spent on pages, and device identifiers.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-semibold text-[#003366] mb-2">Device Information:</h4>
                    <p>
                      Details about the device you use to access our services, including hardware model, operating system, 
                      unique device identifiers, mobile network information, and browsing behavior.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-semibold text-[#003366] mb-2">Location Information:</h4>
                    <p>
                      We may collect precise location data with your consent and approximate location information each time 
                      you access our site.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md mt-4">
                  <h4 className="font-semibold text-[#003366] mb-2">Cookies and Web Beacons:</h4>
                  <p>
                    FalconX Security Services uses cookies to enhance your browsing experience. These cookies store 
                    information about visitor preferences and pages accessed on the website. This information helps 
                    customize content based on browser type and user preferences. You have the option to turn off cookies 
                    through your browser settings. For detailed information on managing cookies with specific web browsers, 
                    please refer to the respective browser websites.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Other Information Sources Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-start mb-4">
              <FaFileAlt className="text-[#003366] mr-3 mt-1 flex-shrink-0" size={24} />
              <h2 className="text-2xl font-bold text-[#003366]">Other Information Sources</h2>
            </div>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">Information from Other Sources:</h3>
                <p>
                  We may receive data from third-party sources and may combine or link it with the information we have about 
                  you. This can include demographic information, one-of-address data from third parties, and information from 
                  social media platforms if you log in using your social media account or share content publicly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">Social Media Features:</h3>
                <p>
                  We incorporate social media features like the Facebook 'like' button or Twitter 'tweet' button on our website. 
                  These features may collect your IP address and the page you are visiting, and they may set a cookie for proper 
                  functionality. You can post your website activities on your social media profile.
                </p>
                <p>
                  Interactions with these features are subject to the privacy policy of the relevant social media provider.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">General Browsing:</h3>
                <p>
                  For both clients and non-clients, we collect anonymous data, including details about the websites you visit, 
                  device information, operating system, browser, network connection, IP address, and timestamp of your visit. 
                  If you are a client or employee, we may also collect data about how and when you access your account. This 
                  data helps us understand which website areas are most visited, allowing us to improve visitors' online 
                  experiences by offering more of the features, services, and products they prefer.
                </p>
              </div>

              <p className="mt-4">
                FalconX Security Services values your privacy and is committed to protecting your personal information. If you 
                have any questions or concerns regarding our data collection and privacy practices, please feel free to contact us{" "}
                <a href="tel:866-500-2050" className="text-[#003366] font-bold hover:underline">
                  (866-500-2050)
                </a>.
              </p>
            </div>
          </section>

          {/* PatrolLive Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">PatrolLive</h2>
            <p className="text-gray-700">
              We use PatrolLIVE, which allows our clients to collaborate with our security guards from a web portal or a mobile 
              device. Your information, including Personal Information and incident pictures, may be stored through PatrolLive 
              servers. By using the Service, you consent to PatrolLive's collection, disclosure, storage, and use of your 
              Personal Information in accordance with PatrolLive's privacy policy. For more information on PatrolLIVE, please 
              visit their website, Security Services.
            </p>
          </section>

          {/* Data Retention Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-start mb-4">
              <FaClock className="text-[#003366] mr-3 mt-1 flex-shrink-0" size={24} />
              <h2 className="text-2xl font-bold text-[#003366]">How Long We Keep Your Personal Information</h2>
            </div>
            <p className="text-gray-700">
              We retain your personal information for as long as necessary to provide the services you have requested or for 
              other essential purposes, such as complying with our legal obligations, resolving disputes, and enforcing our 
              policies.
            </p>
          </section>

          {/* California Privacy Rights Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Your California Privacy Rights</h2>
            <p className="text-gray-700">
              As a California resident, you have the right to ask us one time per year if we have shared personal information 
              with third parties for their direct marketing purposes. California law permits users who are California residents 
              to request and obtain from us once a year, free of charge, a list of the third parties to whom we have disclosed 
              their personal information (if any) for their direct marketing purposes in the prior calendar year, as well as 
              the type of personal information disclosed to those parties. As mentioned in our Policy above, we do not currently 
              share personal information with third parties for their marketing purposes.
            </p>
          </section>

          {/* Updates and Consent Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="space-y-6 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Updates to this Policy</h2>
                <p>
                  If We change or update this Privacy Policy, we will post changes and updates on the Site so that you will always 
                  be aware of what information We collect, use, and disclose. Please review this Policy from time to time so you 
                  will know if the Privacy Policy has been changed or updated.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Consent</h2>
                <p>
                  By using our website, you at this moment consent to our privacy policy and agree to its terms.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-blue-50 rounded-lg shadow-sm p-6 border-l-4 border-[#003366]">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please get in touch with us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
              <a href="tel:310-283-1999" className="flex items-center text-[#003366] font-bold hover:underline">
                <FaPhone size={20} className="mr-2" /> (310) 283-1999
              </a>
              <a href="tel:866-500-2050" className="flex items-center text-[#003366] font-bold hover:underline">
                <FaPhone size={20} className="mr-2" /> (866) 500-2050
              </a>
              <a href="mailto:Info@falconxsecurity.com" className="flex items-center text-[#003366] font-bold hover:underline">
                <FaEnvelope size={20} className="mr-2" /> Info@falconxsecurity.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;