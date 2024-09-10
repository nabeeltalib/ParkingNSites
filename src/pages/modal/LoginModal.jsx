import React, { useState } from "react";
import BasicButtons from "../../components/Button";
import BasicTextFields from "../../components/Input";
import Signup from "../register/SignUp";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firedb } from "../../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import toast from "react-hot-toast";

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
      setIsLoginModal(false);
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 sm:w-1/3 mt-10 p-8 rounded-lg shadow-lg">
        <div className="w-full h-full flex justify-center items-center p-4">
          <form className="w-full" onSubmit={handleLogin}>
            <div>
              <div className="flex justify-center text-[22px] mb-6 flex-col sm:flex-row">
                <h1 className="mr-1 text-blue-500">Login</h1>
                <h1 className="text-[black]">{"subtitle"}</h1>
              </div>
              <BasicTextFields
                label="Email"
                className="flex w-full"
                value={userDetails?.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                type="text"
              />
              <br />
              <BasicTextFields
                label="Password"
                type="password"
                value={userDetails?.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
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
                      setIsSignupModalOpen();
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
    </div>
  );
};

export default LoginModal;
