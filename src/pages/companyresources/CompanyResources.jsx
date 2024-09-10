import React, { useState } from "react";
import imageSrc from "../../assets/image.png";

const CompanyResources = () => {
  const [isShow, setisShow] = useState(true);

  setTimeout(() => {
    setisShow(false);
  }, 3000);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative">
      {isShow ? (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-200">
          <img
            src={imageSrc}
            alt="Community Opportunities"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full p-4 bg-white">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Web 1</h1>

          <p className="mb-4 text-base sm:text-lg">
            Transforming Urban Accessibility, One Parking Spot at a Time [Link
            to About us page, Our Mission, About Us, Mission, Our Vision]
          </p>

          <p className="mb-4 text-base sm:text-lg">
            ParkingNSites is dedicated to improving accessible parking in cities
            across the nation. Our mission is to make urban areas more inclusive
            by addressing the unique challenges faced by those with mobility
            issues. Through innovative technology and community engagement, we
            are creating a future where everyone has equal access to essential
            services.
          </p>

          <p className="mb-4 text-base sm:text-lg">
            <b>Join:</b> Join:
          </p>

          <form className="flex flex-col md:flex-row flex-wrap gap-4 items-center border border-gray-500 rounded-lg px-6 py-4 sm:px-12 mb-5">
            {[
              { label: "Name", type: "text", placeholder: "Enter your name" },
              {
                label: "Email",
                type: "email",
                placeholder: "Enter your email",
              },
              {
                label: "Phone Number",
                type: "tel",
                placeholder: "Enter your phone number",
              },
              { label: "City", type: "text", placeholder: "Enter your city" },
            ].map(({ label, type, placeholder }, index) => (
              <label
                key={index}
                className="flex flex-col md:flex-row items-start w-full md:w-1/2 mb-3"
              >
                <span className="block mr-2">
                  {label}:<span className="text-red-700">*</span>
                </span>
                <input
                  type={type}
                  className="border w-full px-3 py-2"
                  required
                  placeholder={placeholder}
                />
              </label>
            ))}

            <button
              type="submit"
              className="bg-black text-white w-full md:w-auto px-6 py-2 rounded-lg hover:bg-white hover:text-black font-semibold transition duration-300"
            >
              Submit
            </button>
          </form>

          <p className="mb-4 text-base sm:text-lg">
            <b>How it works:</b>
          </p>
          <ul className="pl-5 list-disc">
            <li className="mb-1">
              Step 1: Join the ParkingNSites community by signing up for our
              POC.
            </li>
            <li className="mb-1">
              Step 2: Use our app to report your parking experiences.
            </li>
            <li className="mb-1">
              Step 3: Your feedback helps us identify and address accessibility
              gaps.
            </li>
            <li className="mb-1">
              Step 4: We use your insights to advocate for better infrastructure
              and policies.
            </li>
          </ul>

          <p className="mb-2 text-base sm:text-lg">
            <b>What Is It?</b>
          </p>
          <p className="text-base sm:text-lg">
            ParkingNSites is running an app trial to collect real-world
            experiences and feedback on accessible parking. Your participation
            will directly influence the development of better, more inclusive
            solutions for everyone.
          </p>

          <p className="mb-2 mt-4 text-base sm:text-lg">
            <b>Who Should Join?</b>
          </p>
          <ul className="pl-5 list-disc">
            <li>Individuals with mobility challenges.</li>
            <li>Caregivers and family members.</li>
            <li>Advocates for accessibility.</li>
            <li>Anyone passionate about improving urban infrastructure.</li>
            <li>Android mobile phone users (iOS coming soon)</li>
            <li>
              Residents of Atlanta, Houston, San Diego, New York, Austin,
              Birmingham, Chattanooga, and Washington D.C.
            </li>
          </ul>

          <p className="mb-4 text-base sm:text-lg">
            <b>Why Join?</b>
          </p>
          <ul className="pl-5 list-disc">
            <li>
              <b>Share Your Story:</b> Contribute your experiences to improve
              accessible parking systems.
            </li>
            <li>
              <b>Shape the Future:</b> Help design more user-friendly and
              inclusive parking solutions.
            </li>
            <li>
              <b>Make an Impact:</b> Play a key role in real-world accessibility
              advancements.
            </li>
          </ul>

          <p className="mt-8 font-bold text-lg sm:text-xl">
            Don't miss out. We need your input.
          </p>

          <p className="text-base sm:text-lg">
            Your voice is essential in creating a more accessible future. We
            need your input.
          </p>

          <p className="mt-8 font-bold text-lg sm:text-xl">FAQ</p>

          <p className="text-base sm:text-lg">
            Sign up by providing your contact information. If approved, we’ll
            reach out with next steps.
          </p>

          <form className="flex flex-col md:flex-row flex-wrap gap-4 items-center border border-gray-500 rounded-lg px-6 py-4 sm:px-12 mt-5">
            {[
              { label: "Name", type: "text", placeholder: "Enter your name" },
              {
                label: "Email",
                type: "email",
                placeholder: "Enter your email",
              },
              {
                label: "Phone Number",
                type: "tel",
                placeholder: "Enter your phone number",
              },
              { label: "City", type: "text", placeholder: "Enter your city" },
            ].map(({ label, type, placeholder }, index) => (
              <label
                key={index}
                className="flex flex-col md:flex-row items-start w-full md:w-1/2 mb-3"
              >
                <span className="block mr-2">
                  {label}:<span className="text-red-700">*</span>
                </span>
                <input
                  type={type}
                  className="border w-full px-3 py-2"
                  required
                  placeholder={placeholder}
                />
              </label>
            ))}

            <button
              type="submit"
              className="bg-black text-white w-full md:w-auto px-6 py-2 rounded-lg hover:bg-white hover:text-black font-semibold transition duration-300"
            >
              Submit
            </button>
          </form>

          <p className="mt-4 text-base sm:text-lg">
            Is there a cost to join? No, participation in the POC is completely
            free.
          </p>

          <p className="text-base sm:text-lg">
            Questions? Email info@parkingnsites.com.
          </p>
        </div>
      )}
    </div>
  );
};

export default CompanyResources;
