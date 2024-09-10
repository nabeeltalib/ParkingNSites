"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import SplashScreen from "@/components/Splash/SplashScreen";
import { usePathname } from "next/navigation";

export default function RootLayout({children}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isHome && !localStorage.getItem("splashShown")) {
      setIsLoading(true);
      localStorage.setItem("splashShown", "true"); // Set flag in localStorage
    }
  }, [isHome]);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  return (
    <>
        {isLoading && isHome ? (
            <SplashScreen finishLoading={handleFinishLoading} />
        ) : (
            children
        )}
        </>
  );
}
