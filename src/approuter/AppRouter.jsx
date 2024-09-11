import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import AdminPage from "../pages/admin/AdminPage";
import LandingPage from "../pages/landingpage/LandingPage";
import CompanyResources from "../pages/companyresources/CompanyResources";
import SplashScreen from "../components/Splash_Screen";
import ResourcesPortal from "../pages/resourceportal/ResourcesPortal";
import AppLinksPortal from "../pages/testerportal/TestPortal";
import Signup from "../pages/register/SignUp";
import LoginModal from "../pages/modal/LoginModal";
import { Toaster } from "react-hot-toast";
import NoPage from "../pages/nopage/NoPage";
// import About from "../pages/aboutus";

const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   // Check if the splash screen has been shown before
  //   const splashShown = localStorage.getItem("splashShown");

  //   if (splashShown) {
  //     setIsLoading(false); // No splash screen if it was shown before
  //   } else {
  //     // Show splash screen for the first time
  //     setIsLoading(true);

  //     // Simulate loading/splash screen duration with a timeout
  //     const timer = setTimeout(() => {
  //       setIsLoading(false); // Hide the splash screen after timeout
  //       localStorage.setItem("splashShown", "true"); // Mark splash screen as shown
  //     }, 3000); // Adjust duration as needed (3 seconds here)

  //     // Clean up the timer
  //     return () => clearTimeout(timer);
  //   }

  //   // Clear localStorage when the tab or browser is closed
  //   const handleUnload = () => {
  //     localStorage.clear(); // Optionally clear the splash status on tab close
  //   };

  //   // Add event listener to clear localStorage on page unload
  //   window.addEventListener("unload", handleUnload);

  //   // Clean up event listener when component unmounts
  //   return () => {
  //     window.removeEventListener("unload", handleUnload);
  //   };
  // }, []);

  const routes = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/*",
      element: <NoPage />,
    },
    {
      path: "/company-opportunities",
      element: <CompanyResources />,
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
    {
      path: "/resources-portal/:id",
      element: <ResourcesPortal />,
    },
    {
      path: "/test-portal",
      element: <AppLinksPortal />,
    },
    {
      path: "/login",
      element: <LoginModal />,
    },
    {
      path: "/Signup",
      element: <Signup />,
    },
    ,
  ]);

  return (
    <>
      <Toaster />
      {isLoading ? <SplashScreen /> : routes}
    </>
  );
  // return routes;
};

export default AppRouter;
