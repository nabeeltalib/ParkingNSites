import React, { useState } from "react";
import Admin from "../../assets/admin.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

export default function Adminpage() {
  const [selectedResources, setSelectedResources] = useState([]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (resource) => {
    setSelectedResources((prevSelected) =>
      prevSelected.includes(resource)
        ? prevSelected.filter((item) => item !== resource)
        : [...prevSelected, resource]
    );
  };

  const resources = [
    "Turning Dashboard",
    "Executive Dashboard",
    "Ambassador Dashboard",
    "Community Resources",
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-200 relative">
        <div className="w-full py-4 bg-gray-200">
          <h2 className="px-5 text-customBlue font-bold">ParkingNSites</h2>
          <hr className="border-gray-300 mt-3" />
        </div>

        <div className="px-4 sm:px-6 py-4">
          <div className="flex flex-col  lg:flex-row  ">
            {/* Image Section */}
            <div className="flex justify-center lg:w-1/2 ">
              <img
                src={Admin} // Replace with your image URL or import
                alt="Admin"
                className="w-full  h-auto rounded-s-xl"
              />
            </div>

            {/* Form Section */}
            <div className="px-6 sm:px-8 py-6 bg-white shadow-xl lg:w-1/2 rounded-e-xl">
              <h1 className="font-bold text-xl text-center text-gray-800">
                Admin Portal
              </h1>
              <hr className="my-4 border-gray-300" />

              <h6 className="font-semibold text-center text-gray-700 mb-4">
                Select user to give rights
              </h6>

              {/* Search or Select */}
              <div className="flex flex-col sm:flex-row justify-evenly  gap-2 sm:gap-8">
                <p className="font-semibold text-center sm:text-left">Search</p>
                <p className="block sm:hidden text-center">OR</p>
                <p className="font-semibold text-center sm:text-right">
                  Select
                </p>
              </div>

              {/* Search and Select Inputs */}
              <div className="flex flex-col sm:flex-row  justify-center items-center gap-4 mt-4">
                <div className="relative bg-white shadow-lg w-full sm:w-auto text-center">
                  <input
                    className="rounded py-2 px-2 pr-24 focus:outline-none focus:border-blue-500 w-full sm:w-auto"
                    placeholder="Steve_Smith@gmail.com"
                  />
                  <button className="absolute right-3 top-1/2 p-2 transform -translate-y-1/2 bg-customBlue px-4 rounded text-sm text-white font-semibold">
                    Search
                  </button>
                </div>

                <p className="text-gray-500 sm:hidden">OR</p>

                <div className="relative bg-white shadow-lg w-full sm:w-auto">
                  <select className="w-full py-2 pl-3 pr-9 rounded focus:outline-none focus:border-blue-500 min-w-[200px]">
                    <option value="" disabled hidden>
                      Ste_Smi@gmail.com
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>

              <hr className="my-4 border-gray-300" />

              {/* Resources */}
              <p className="font-bold text-md">Select Resources</p>

              {/* Resources List */}
              {resources.map((resource, idx) => (
                <div key={idx} className="mt-6 flex gap-4 items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-customBlue"
                    id={`resource-${idx}`}
                    checked={selectedResources.includes(resource)}
                    onChange={() => handleCheckboxChange(resource)}
                  />
                  <label
                    htmlFor={`resource-${idx}`}
                    className={`w-full h-12 sm:h-8 bg-white shadow-xl rounded-lg px-6 text-sm font-bold py-2 ${
                      selectedResources.includes(resource)
                        ? "text-green-500 bg-gray-100"
                        : "text-customBlue"
                    }`}
                  >
                    {resource}
                  </label>
                </div>
              ))}

              {/* Assign Button */}
              <div className="flex justify-end mt-6">
                <button className="bg-customBlue rounded-lg px-6 py-2 text-white">
                  Assign
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
