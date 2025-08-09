import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ name, role, review, avatar }) => {
  return (
    <div className="flex flex-col justify-between p-6 bg-base-300 rounded-xl min-h-[300px] w-full max-w-sm mx-auto text-center transition-all duration-300 hover:shadow-xl">
      {/* Quote icon */}
      <FaQuoteLeft className="text-spotify text-3xl mb-4 mx-auto" />

      {/* Review text */}
      <p className="italic mb-5 text-sm sm:text-base line-clamp-3 ">
        "{review}"
      </p>

      {/* Avatar + Info */}
      <div>
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-12 h-12 rounded-full object-cover mx-auto mb-2 ring-2 ring-spotify ring-offset-2 shadow-sm"
        />
        <h4 className="font-semibold text-base">{name}</h4>
        <span className="text-xs sm:text-sm text-gray-400">{role}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
