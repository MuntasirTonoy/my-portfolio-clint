import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../assets/animation/Lonely 404.json"; // put your downloaded Lottie JSON file here
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 px-4 text-center">
      <div className="w-full max-w-md">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>

      <h1 className="text-4xl font-bold mt-6 mb-2">wait</h1>
      <p className="text-gray-500 mb-6">
        {/* The page you are looking for does not exist or has been moved. */}
        still working on this website, hold on
      </p>

      <Link
        to="/"
        className="inline-block px-6 py-3 bg-spotify text-white rounded-lg hover:bg-spotify/90 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
