import React from "react";
import Image from "../../assets/image.png";

const AppLinksPortal = () => {
  const appLinks = ["App Link 1", "App Link 2", "App Link 3", "App Link 4"];

  return (
    <>
      <div className="min-h-screen bg-gray-200 relative">
        <div className="w-full py-4 ">
          <h2 className="px-5 text-customBlue font-bold text-center sm:text-left">
            Confidential Tester Portal
          </h2>
          <hr className="border-gray-300 mt-3" />
        </div>
        <div className=" flex justify-center items-center p-4">
          <div className="flex flex-col sm:flex-row items-stretch justify-center rounded-xl overflow-hidden">
            {/* Left Section - Image and Branding */}
            <div className="flex justify-center items-center sm:w-1/4 lg:w-1/1 p-0">
              <img
                src={Image}
                alt="image"
                className="w-full h-full object-center rounded-s-xl"
              />
            </div>

            {/* Right Section - App Links */}
            <div className="sm:w-1/1 lg:w-1/3 p-6 bg-white rounded-e-xl">
              <h2 className="text-gray-800 text-xl font-bold mb-6 text-center lg:text-left">
                Find Our Latest App Links
              </h2>

              {/* App Links */}
              <div className="space-y-4">
                {appLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md"
                  >
                    <span className="text-gray-700 font-semibold">{link}</span>
                    <button className="bg-customBlue text-white font-semibold px-4 py-2 rounded-lg shadow-md">
                      Open
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLinksPortal;
