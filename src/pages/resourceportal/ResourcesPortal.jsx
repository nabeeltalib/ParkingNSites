import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Admin from "../../assets/image.png";
import LoginModal from "../modal/LoginModal";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firedb } from "../../firebase/firebaseConfig";

const ResourcesPortal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getUserData, setGetUserData] = useState([]);
  const [RenderData, setRenderData] = useState();
  const navigate = useNavigate();

  // Function to check if a user exists
  const checkUserExists = () => {
    // Replace with your actual user existence logic
    return false; // Simulate user does not exist
  };

  // Function to handle button click
  const handleButtonClick = (page) => {
    if (checkUserExists()) {
      navigate(page); // Navigate to the page if user exists
    } else {
      setIsModalOpen(true); // Show the modal if user does not exist
    }
  };

  const { id } = useParams();

  const getUser = async () => {
    const q = query(collection(firedb, "Users"), where("uid", "==", id));

    const querySnapshot = await getDocs(q);
    let user;
    querySnapshot.forEach((doc) => (user = doc.data()));
    setGetUserData([user]);
  };

  const validRoles = [
    { role: "Executive Dashboard", navigate: "/Executive Dashboard" },
    { role: "Turning Dashboard", navigate: "/Turning Dashboard" },
    { role: "Ambassador Dashboard", navigate: "/Ambassador Dashboard" },
    { role: "Admin", navigate: "/Admin" },
  ];

  useEffect(() => {
    getUser();
    if (getUserData[0]?.role === "Admin") {
      setRenderData(
        validRoles.map((item) => {
          return item;
        })
      );
    } else {
      const filteredData = getUserData?.filter((item) =>
        validRoles.some((data) => {
          return data.role === item?.role;
        })
      );
      const matchedRole = validRoles.find((data) =>
        filteredData.some((item) => data.role === item?.role)
      );

      // if (matchedRole) {
      //   // console.log("Navigate to:", matchedRole.navigate);
      // }

      setRenderData([matchedRole]);
    }
  }, [getUserData, id]);
  return (
    <>
      <div className="bg-gray-200">
        <div className="w-full py-4 bg-gray-200">
          <h2 className="px-5 text-customBlue font-bold text-center sm:text-left">
            Resource Portal
          </h2>
          <hr className="border-gray-300 mt-3" />
        </div>
        <div className="px-4 sm:px-8 py-4 min-h-screen flex flex-col">
          <div className="flex flex-col sm:flex-row items-stretch justify-center rounded-xl overflow-hidden">
            {/* Image Section */}
            <div className="flex justify-center items-center  sm:w-1/4 lg:w-1/1  p-0">
              <img
                src={Admin}
                alt="Admin"
                className="w-full h-full object-fill rounded-s-xl"
              />
            </div>

            {/* Content Section */}
            <div className="px-4 sm:px-12 py-6 sm:w-1/1 lg:w-1/2 bg-gray-300 rounded-e-xl sm:bg-white flex flex-col justify-center">
              <h1
                className="font-bold text-lg sm:text-xl text-gray-800 text-center sm:text-left
               bg-white text-black py-2  rounded-xl sm:bg-transparent sm:text-gray-800"
              >
                Resources Available
              </h1>

              <hr className="my-4 border-gray-300" />

              <div className="flex flex-col gap-4">
                {RenderData?.map((item, index) => {
                  // console.log(item);
                  return (
                    <React.Fragment key={index}>
                      {index > 0 && index % 3 === 0 && (
                        <hr className="my-4 sm:border-gray-300 border-gray-500 " />
                      )}
                      <div className="bg-white shadow-lg w-full p-4 rounded-2xl">
                        <div className="relative flex flex-col sm:flex-row items-center gap-4">
                          {/* Input */}
                          <input
                            className="rounded py-3 px-2 pr-12 md:pr-36 lg:pr-48 focus:outline-none focus:border-blue-500 w-full"
                            placeholder={item?.role ? item.role : item}
                          />
                          {/* Button */}
                          <button
                            onClick={() => navigate(item?.navigate)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-customBlue px-4 sm:px-6 md:px-8 rounded-md text-xs sm:text-sm md:text-base text-white font-semibold py-1 sm:py-2 md:py-3"
                          >
                            Open
                          </button>
                        </div>
                      </div>
                      {/* Status Display */}
                      <div className="flex mt-0 ps-3 gap-2 items-center">
                        <p className="text-gray-400 text-xs sm:text-sm">
                          Status:
                        </p>
                        <p className="text-customDark font-bold text-xs sm:text-sm">
                          Vercel Deploy
                        </p>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />} */}
    </>
  );
};

export default ResourcesPortal;
