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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the splash screen has been shown before
    const splashShown = localStorage.getItem("splashShown");

    if (splashShown) {
      setIsLoading(false);
    } else {
      // Show the splash screen for the first time
      setIsLoading(true);
      // Set a timeout to simulate loading or splash screen duration
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("splashShown", "true"); // Mark splash screen as shown
      }, 5000); // Adjust this duration as needed

      // Clean up the timer
      return () => clearTimeout(timer);
    }

    // Function to clear localStorage when the tab or browser is closed
    const handleUnload = () => {
      localStorage.clear();
    };

    // Add event listener for page unload
    window.addEventListener("unload", handleUnload);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("unload", handleUnload);
    };
  }, []);

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
