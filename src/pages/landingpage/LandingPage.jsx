import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bgimage.jpg";
import SplashScreen from "../../components/Splash_Screen";
import Admin from "../../assets/image.png";
import LoginModal from "../modal/LoginModal";
import Signup from "../register/SignUp";

const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isLoginModal, setIsLoginModal] = useState(false);

  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleSignupModalOpen = (e) => {
    // e.preventDefault();
    setIsLoginModal(false);
    setIsSignupModalOpen(true);
    console.log(isSignupModalOpen);
  };

  const handleSignupModalClose = () => {
    setIsSignupModalOpen(false);
  };

  const handleOpen = () => {
    setIsLoginModal(true);
  };

  const handleClose = () => {
    setIsLoginModal(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust this value to change the preloader duration

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <div className="bg-gray-200">
            <div className="w-full py-4 px-4 sm:px-12">
              <h2 className="text-customBlue font-bold text-lg sm:text-2xl">
                Resource Portal
              </h2>
              <hr className="border-gray-300 mt-3" />
            </div>

            <div className="px-4 sm:px-12 py-4 min-h-screen  flex  flex-col">
              <div className="flex flex-col sm:flex-row items-stretch justify-center rounded-xl overflow-hidden">
                {/* Image Section */}
                <div className="flex justify-center  items-center sm:w-1/4 lg:w-1/1 p-0">
                  <img
                    src={Admin}
                    alt="Admin"
                    className="w-full h-full object-center rounded-s-xl " // Adjust image for portrait mode
                  />
                </div>

                {/* Content Section */}
                <div className="px-4 sm:px-12 py-6 sm:w-1/1 lg:w-1/2 bg-white flex flex-col rounded-e-xl justify-center">
                  <div className="flex justify-between space-x-3 items-center ">
                    <h1 className="font-bold text-xl sm:text-2xl text-gray-800">
                      Resources Available
                    </h1>

                    <a href="/about.html">
                      <button className="bg-customBlue px-4 sm:px-6 md:px-8 rounded-md text-xs sm:text-sm md:text-base text-white font-semibold py-1 sm:py-2 md:py-3">
                        About Us
                      </button>
                    </a>
                  </div>
                  <hr className="my-4 border-gray-300" />

                  {/* First Input with Button */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                    <div className="relative bg-white shadow-lg w-full p-3 rounded-2xl flex items-center">
                      <input
                        className="rounded py-3 px-2 pr-12 md:pr-36 lg:pr-48 focus:outline-none focus:border-blue-500 w-full"
                        placeholder="Company Opportunities"
                      />
                      <button
                        onClick={() => navigate("/company-opportunities")}
                        className="absolute right-1 sm:right-3 top-1/2 transform -translate-y-1/2 bg-customBlue px-4 sm:px-6 md:px-8 rounded-md text-xs sm:text-sm md:text-base text-white font-semibold py-1 sm:py-2 md:py-3"
                      >
                        Open
                      </button>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex mt-4 gap-4 items-center">
                    <p className="text-gray-400">Status:</p>
                    <p className="text-customDark font-bold text-sm sm:text-base">
                      Vercal Deploy
                    </p>
                  </div>

                  {/* Second Input with Button */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                    <div className="relative bg-white shadow-lg w-full p-3 rounded-2xl flex items-center">
                      <input
                        className="rounded py-3 px-2 pr-12 md:pr-36 lg:pr-48 focus:outline-none focus:border-blue-500 w-full"
                        placeholder="Company Resources"
                      />
                      <button
                        onClick={() => navigate("/Signup")}
                        className="absolute right-1 sm:right-3 top-1/2 transform -translate-y-1/2 bg-customBlue px-4 sm:px-6 md:px-8 rounded-md text-xs sm:text-sm md:text-base text-white font-semibold py-1 sm:py-2 md:py-3"
                      >
                        Open
                      </button>
                      {isLoginModal && (
                        <LoginModal
                          setIsSignupModalOpen={handleSignupModalOpen}
                          setIsLoginModal={setIsLoginModal}
                        />
                      )}
                      {isSignupModalOpen && (
                        <span className="z-20">
                          <Signup
                            Close={setIsSignupModalOpen}
                            setIsLoginModal={setIsLoginModal}
                          />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Error Status */}
                  <div className="flex mt-4 gap-4 items-center">
                    <p className="text-gray-400">Status:</p>
                    <p className="text-customDark font-bold text-sm sm:text-base">
                      Exist With Error
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LandingPage;
