import React, { useState } from "react";
import BasicTextFields from "../../components/Input";
import BasicButtons from "../../components/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { auth, firedb } from "../../firebase/firebaseConfig";
import Image from "../../assets/admin.png";

const Modal = ({ Close, setIsLoginModal }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [userDetails, setUserDetails] = useState({
    email: "",
    confirmPassword: "",
    password: "",
    role: "user",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      !userDetails.email ||
      !userDetails.confirmPassword ||
      !userDetails.password
    ) {
      toast.error("All fields are required");
      return;
    }
    if (userDetails.password !== userDetails.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password
      );

      const userData = {
        email: users.user.email,
        uid: users.user.uid,
        role: userDetails.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      const reference = collection(firedb, "Users");
      await addDoc(reference, userData);

      toast.success("Signup Successful");
      setUserDetails({
        email: "",
        confirmPassword: "",
        password: "",
        role: "user",
      });
      Close(false);
      setIsLoginModal(true);
    } catch (error) {
      console.error(error);
      toast.error("Failed to Signup");
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
            <div className="px-4 sm:px-12 py-6 sm:w-1/1 lg:w-1/3  sm:bg-white bg-gray-200 flex flex-col rounded-s-xl justify-center">
              {/* Content Section */}
              <div className="flex justify-center bg-white rounded-xl space-x-3   ">
                <h1 className="font-bold text-xl py-6 sm:text-2xl text-gray-800">
                  Sign Up To Your Account
                </h1>
              </div>

              {/* First Input with Button */}
              <div className="flex flex-col sm:flex-row items-center bg-white px-6 py-6 rounded-xl gap-4 mt-10">
                <form className="w-full" onSubmit={handleSignup}>
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
                      label="Confirm Password"
                      type="password"
                      value={userDetails?.confirmPassword}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          confirmPassword: e.target.value,
                        })
                      }
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
                      label="SignUp"
                      className="flex w-full"
                      onClick={handleSignup}
                    />
                    <br />
                    <div>
                      {/* Content where you want the signup link */}
                      <div className="flex items-center justify-center">
                        <p className="text-center text-gray-400 text-xs">
                          Already Have An Account!
                        </p>
                        <p
                          onClick={() => {
                            navigate("/Login");
                          }}
                          className="text-blue-400 underline ml-2 cursor-pointer"
                        >
                          Login
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

export default Modal;
