export default function EmploymentForm() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-2xl uppercase text-[#003366] font-semibold font-noto text-center mb-16">
        Employment Application Form
      </h1>
      <form className="space-y-6">
        {/* 1. First Name */}
        <div>
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
          />
        </div>

        {/* 2. Age and Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Age</label>
            <select
              id="age"
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
              id="gender"
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
              id="phoneNumber"
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            />
          </div>
        </div>

        {/* 4. Address */}
        <div>
          <label className="block font-semibold mb-2">Address</label>
          <input
            type="text"
            id="address"
            className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
          />
        </div>

        {/* 5. City, State, Zip Code */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold mb-2">City</label>
            <input
              type="text"
              id="city"
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">State</label>
            <input
              type="text"
              id="state"
              className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Zip Code</label>
            <input
              type="text"
              id="zipcode"
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
            id="qualification"
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
                  className="mr-1 h-3 w-3 focus:ring-1 focus:ring-[#90A9BA]"
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="no"
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
                  name="experience"
                  value="yes"
                  className="mr-1 h-3 w-3 focus:ring-1 focus:ring-[#90A9BA]"
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="no"
                  className="mr-1 h-3 w-3 focus:ring-1 focus:ring-[#90A9BA]"
                />{" "}
                No
              </label>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="no"
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
            id="position"
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
              id="workStatus"
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
              id="partTime"
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
                  <input type="checkbox" value={day} className="mr-2 h-4 w-4" />{" "}
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
                    value={shift}
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
              id="knowledge"
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
              id="objection"
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
            id="medicalCondition "
            className="w-full h-10 border border-gray-300 p-2 focus:ring-1 focus:ring-[#90A9BA]"
          />
        </div>

        {/* 13. Time to Reach */}
        <div>
          <label className="block font-medium mb-2">
            Which Shift do you prefer to work ?
          </label>
          <div className=" flex flex-wrap gap-2">
            {["Morning", "Afternoon", "Evening", "Anytime"].map((time) => (
              <label key={time} className="flex items-center">
                <input type="checkbox" value={time} className="mr-2 h-4 w-4" />{" "}
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
            id="position"
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
