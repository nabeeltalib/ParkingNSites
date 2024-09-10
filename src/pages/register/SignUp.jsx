import React, { useState } from "react";
import BasicTextFields from "../../components/Input";
import BasicButtons from "../../components/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { auth, firedb } from "../../firebase/firebaseConfig";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 py-6">
      <div className="bg-white p-8 rounded-lg shadow-lg relative  max-w-lg text-center">
        <button
          onClick={() => Close(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          &times;
        </button>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center text-lg mb-6">
            <h1 className="text-blue-500 mr-2">{"title"}</h1>
            <h2 className="text-black">{"subtitle"}</h2>
          </div>
          <BasicTextFields
            required="required"
            label="Email"
            value={userDetails?.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
          />

          <BasicTextFields
            required="required"
            label="Confirm Password"
            value={userDetails?.confirmPassword}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                confirmPassword: e.target.value,
              })
            }
            type="password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <BasicTextFields
            required="required"
            label="Password"
            value={userDetails?.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            type="password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* {isError && <p className="text-red-500 text-sm mb-4">{"isError"}</p>} */}
          <BasicButtons
            label="Sign Up"
            variant="contained"
            className="flex w-full"
            onClick={handleSignup}
          />
          <p className="mt-6 text-gray-500 text-xs">
            Already have an account?
            <button
              type="button"
              onClick={() => {
                Close(false);
                setIsLoginModal(true);
              }}
              className="text-blue-500 hover:underline ml-1"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Modal;
