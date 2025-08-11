import React from "react";
import animationData from "../assets/animation/loading-animation.json";

const Loading = () => {
  return (
    <div>
      <h1> loading..</h1>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Loading;
