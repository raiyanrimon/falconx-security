import { useState } from "react";
export default function EmploymentForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "Under 18",
    gender: "Male",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    qualification: "",
    experience: "",
    comfortWithPatrolling: "",
    position: "Armed Security",
    workStatus: "Yes",
    partTime: "Yes",
    availableDays: [],
    shiftPreference: [],
    knowledge: "None",
    objection: "Yes",
    medicalCondition: "",
    timePreference: [],
    heardAbout: "Google",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log(formData);

    try {
      const response = await fetch(
        "https://blog.falconxsecurity.com/wp-json/msp/v1/career",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to send message: ${errorData.message || "Unknown error"}`
        );
      }

      // Optionally reset the form after submission
      setFormData({
        name: "",
        age: "Under 18",
        gender: "Male",
        phoneNumber: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        qualification: "",
        experience: "",
        comfortWithPatrolling: "",
        position: "Armed Security",
        workStatus: "Yes",
        partTime: "Yes",
        availableDays: [],
        shiftPreference: [],
        knowledge: "None",
        objection: "Yes",
        medicalCondition: "",
        timePreference: [],
        heardAbout: "Google",
      });

      console.log("Your response has been sent successfully!");
    } catch (error) {
      console.error("Error details:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    // Check if the name corresponds to an array field
    if (Array.isArray(formData[name])) {
      if (checked) {
        // Add the value if checked
        setFormData({
          ...formData,
          [name]: [...formData[name], value],
        });
      } else {
        // Remove the value if unchecked
        setFormData({
          ...formData,
          [name]: formData[name].filter((item) => item !== value),
        });
      }
    } else {
      // Handle non-array fields as usual
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-2xl uppercase text-[#003366] font-semibold font-noto text-center mb-16">
        Employment Application Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 1. First Name */}
        <div>
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
          />
        </div>

        {/* 2. Age and Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Age</label>
            <select
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            >
              <option>Under 18</option>
              <option>18-24</option>
              <option>25-34</option>
              <option>35-44</option>
              <option>45-54</option>
              <option>Over 55</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* 3. Phone Number and Email Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            />
          </div>
        </div>

        {/* 4. Address */}
        <div>
          <label className="block font-semibold mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
          />
        </div>

        {/* 5. City, State, Zip Code */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Zip Code</label>
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            />
          </div>
        </div>

        {/* 6. Highest Qualification */}
        <div>
          <label className="block font-semibold mb-2">
            What is your highest qualification?
          </label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
          />
        </div>

        {/* 7. Experience as Security Guard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">
              Do you have any experience working as a security guard?
            </label>
            <div className="flex flex-col gap-4">
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="yes"
                  checked={formData.experience === "yes"}
                  onChange={handleChange}
                  className="mr-1 h-3 w-3 focus:ring-1 focus:ring-[#90A9BA]"
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="no"
                  checked={formData.experience === "no"}
                  onChange={handleChange}
                  className="mr-1 h-3 w-3 focus:ring-1 focus:ring-[#90A9BA]"
                />{" "}
                No
              </label>
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-2">
              Are you comfortable with patrolling, standing, or sitting for long
              hours, including night shifts?
            </label>
            <div className="flex flex-col gap-4">
              <label>
                <input
                  type="radio"
                  name="comfortWithPatrolling"
                  value="yes"
                  checked={formData.comfortWithPatrolling === "yes"}
                  onChange={handleChange}
                  className="mr-1 h-3 w-3 focus:ring-1 focus:ring-[#90A9BA]"
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="comfortWithPatrolling"
                  value="no"
                  checked={formData.comfortWithPatrolling === "no"}
                  onChange={handleChange}
                  className="mr-1 h-3 w-3 focus:ring-1 focus:ring-[#90A9BA]"
                />{" "}
                No
              </label>
              <label>
                <input
                  type="radio"
                  name="comfortWithPatrolling"
                  value="maybe"
                  checked={formData.comfortWithPatrolling === "maybe"}
                  onChange={handleChange}
                  className="mr-1 h-3 w-3 focus:ring-1 focus:ring-[#90A9BA]"
                />{" "}
                Maybe
              </label>
            </div>
          </div>
        </div>

        {/* 8. Position Seeking */}
        <div>
          <label className="block font-medium mb-2">
            For which position are you seeking?
          </label>
          <select
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
          >
            <option>Armed Security</option>
            <option>Unarmed Security</option>
            <option>Standing Guard</option>
            <option>Patrol Division</option>
          </select>
        </div>

        {/* 9. Work Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">
              Are you currently working?
            </label>
            <select
              name="workStatus"
              value={formData.workStatus}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2">
              Are you willing to work part time?
            </label>
            <select
              name="partTime"
              value={formData.partTime}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/* 10. Days Available */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">
              Which days are you available to work?
            </label>
            <div className=" flex flex-wrap gap-4">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <label key={day} className="flex items-center">
                  <input
                    type="checkbox"
                    name="availableDays"
                    value={day}
                    checked={formData.availableDays.includes(day)}
                    onChange={handleChange}
                    className="mr-2 h-4 w-4"
                  />{" "}
                  {day}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-medium mb-2">
              Which Shift do you prefer to work ?
            </label>
            <div className=" flex flex-wrap gap-2">
              {["Day Shift", "Night Shift", "Graveyard Shift"].map((shift) => (
                <label key={shift} className="flex items-center">
                  <input
                    type="checkbox"
                    name="shiftPreference"
                    value={shift}
                    checked={formData.shiftPreference.includes(shift)}
                    onChange={handleChange}
                    className="mr-2 h-4 w-4"
                  />{" "}
                  {shift}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* 11. Knowledge of security */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">
              How would you measure your knowledge of a security guard’s
              paperwork?
            </label>
            <select
              name="knowledge"
              value={formData.knowledge}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            >
              <option>None</option>
              <option>Some Knowledge</option>
              <option>Moderate Knowledge</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2">
              Do you have any objections to being moved from location to
              location?
            </label>
            <select
              name="objection"
              value={formData.objection}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/* 12. Medical Condition */}
        <div>
          <label className="block font-semibold mb-2">
            Do you have any medical conditions?
          </label>
          <input
            type="text"
            name="medicalCondition"
            value={formData.medicalCondition}
            onChange={handleChange}
            className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
          />
        </div>

        {/* 13. Time to Reach */}
        <div>
          <label className="block font-medium mb-2">
            What is the best time to reach you?
          </label>
          <div className=" flex flex-wrap gap-2">
            {["Morning", "Afternoon", "Evening", "Anytime"].map((time) => (
              <label key={time} className="flex items-center">
                <input
                  type="checkbox"
                  name="timePreference"
                  value={time}
                  checked={formData.timePreference.includes(time)}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4"
                />{" "}
                {time}
              </label>
            ))}
          </div>
        </div>

        {/* 14. Hear About */}
        <div>
          <label className="block font-medium mb-2">
            How did you hear about us?
          </label>
          <select
            name="heardAbout"
            value={formData.heardAbout}
            onChange={handleChange}
            className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
          >
            <option>Google</option>
            <option>Client Referral</option>
            <option>Social Media</option>
            <option>Friend's Referral</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gray-500 font-bold text-white text-lg px-7 py-3  hover:bg-[#083264] focus:ring-2 focus:ring-blue-500"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
