import React, { useEffect, useRef } from "react";
import anime from "animejs";
import forDesktop from "../assets/parkinglogo.mp4";
import forMobile from "../assets/parkinglogosm.mp4";

const SplashScreen = ({ finishLoading }) => {
  const videoRefLg = useRef(null);
  const videoRefSm = useRef(null);

  useEffect(() => {
    const videoElementLg = videoRefLg.current;
    const videoElementSm = videoRefSm.current;

    const handleVideoEnd = () => {
      finishLoading(); // Calls parent component function to finish loading
    };

    if (videoElementLg) {
      videoElementLg.addEventListener("ended", handleVideoEnd);
    }
    if (videoElementSm) {
      videoElementSm.addEventListener("ended", handleVideoEnd);
    }

    // Using anime.js to add animations
    anime
      .timeline()
      .add({
        targets: videoRefLg.current,
        delay: 0,
        duration: videoElementLg ? videoElementLg.duration * 1000 : 1000,
        easing: "easeInOutExpo",
      })
      .add({
        targets: videoRefSm.current,
        delay: 0,
        duration: videoElementSm ? videoElementSm.duration * 1000 : 1000,
        easing: "easeInOutExpo",
      });

    // Cleanup event listeners when the component unmounts
    return () => {
      if (videoElementLg) {
        videoElementLg.removeEventListener("ended", handleVideoEnd);
      }
      if (videoElementSm) {
        videoElementSm.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [finishLoading]);

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        {/* Large Screen Video */}
        <video
          ref={videoRefLg}
          src={forDesktop}
          autoPlay
          muted
          style={{ top: "-5" }}
          className="object-cover h-full w-full hidden  lg:block"
        />
        {/* Small Screen Video */}
        <video
          ref={videoRefSm}
          src={forMobile}
          autoPlay
          muted
          className="object-cover h-full w-full lg:hidden   "
        />
      </div>
    </div>
  );
};

export default SplashScreen;
