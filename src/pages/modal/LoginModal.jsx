import React, { useState } from "react";
import BasicButtons from "../../components/Button";
import BasicTextFields from "../../components/Input";
import Signup from "../register/SignUp";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firedb } from "../../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import toast from "react-hot-toast";
import Image from "../../assets/admin.png";

const LoginModal = ({ setIsSignupModalOpen, setIsLoginModal }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userDetails.email || !userDetails.password) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userDetails?.email,
        userDetails?.password
      );

      const userUid = userCredential?.user?.uid;
      const q = query(collection(firedb, "Users"), where("uid", "==", userUid));

      const querySnapshot = await getDocs(q);
      let user;
      querySnapshot.forEach((doc) => (user = doc.data()));
      localStorage.setItem("Users", JSON.stringify(user));
      toast.success("Login Successfully");
      navigate(`/resources-portal/${userUid}`);
      setLoading(false);
      setUserDetails("");
    } catch (error) {
      console.error("Login error:", error); // Debugging
      toast.error("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
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
            <div className="px-4 sm:px-12 py-6 sm:w-1/1 lg:w-1/3 sm:bg-white  bg-gray-200 flex flex-col rounded-s-xl justify-center">
              {/* Content Section */}
              <div className="flex justify-center bg-white space-x-3 rounded-xl  ">
                <h1 className="font-bold text-xl  py-4  text-center sm:text-2xl text-gray-800">
                  Log In To Your Account
                </h1>
              </div>

              {/* First Input with Button */}
              <div className="flex flex-col sm:flex-row bg-white px-6 py-6 rounded-xl items-center gap-4 mt-10">
                <form className="w-full" onSubmit={handleLogin}>
                  <div>
                    <BasicTextFields
                      label="Email"
                      className="flex w-full"
                      value={userDetails?.email}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          email: e.target.value,
                        })
                      }
                      type="text"
                    />
                    <br />
                    <BasicTextFields
                      label="Password"
                      type="password"
                      value={userDetails?.password}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          password: e.target.value,
                        })
                      }
                    />

                    <br />
                    <BasicButtons
                      variant="contained"
                      label="Login"
                      className="flex w-full"
                      onClick={handleLogin}
                    />
                    <br />
                    <div>
                      {/* Content where you want the signup link */}
                      <div className="flex items-center justify-center">
                        <p className="text-center text-gray-400 text-xs">
                          If You Have No Account!
                        </p>
                        <p
                          onClick={() => {
                            navigate("/Signup");
                          }}
                          className="text-blue-400 underline ml-2 cursor-pointer"
                        >
                          SignUp
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Image Section */}
            <div className="flex justify-center  items-center sm:w-1/3 lg:w-1/1 p-0">
              <img
                src={Image}
                alt="Admin"
                className="w-full h-full object-center rounded-e-xl " // Adjust image for portrait mode
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
