import React from "react";

function NoPage() {
  return (
    <div className="bg-blue-100">
      <div className="flex justify-center  items-center min-h-screen">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOHlWWdPR4t674eG13SbbqQTXir-igcWSHsPAzMn2g99BBsS6Dsi4AC44D60swqfF7mM&usqp=CAU"
          alt="Responsive Image"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default NoPage;

{
  /* <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
  <div className="bg-white w-full max-w-lg relative mt-10 p-8 rounded-lg shadow-lg">
    <button
      onClick={() => setIsLoginModal(false)}
      className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
      aria-label="Close"
    >
      &times;
    </button>
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
//             {/* Content where you want the signup link */
}
//             <div className="flex items-center justify-center">
//               <p className="text-center text-gray-400 text-xs">
//                 If You Have No Account!
//               </p>
//               <p
//                 onClick={() => {
//                   setIsSignupModalOpen();
//                 }}
//                 className="text-blue-400 underline ml-2 cursor-pointer"
//               >
//                 SignUp
//               </p>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>;
//  */}

{
  /* <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 py-6">
  <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-lg text-center">
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
        label="Password"
        value={userDetails?.password}
        onChange={(e) =>
          setUserDetails({ ...userDetails, password: e.target.value })
        }
        type="password"
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
</div>; */
}
