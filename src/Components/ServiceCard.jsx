import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-base-200 p-5 rounded-md min-h-20 overflow-hidden">
      <article className="flex gap-4 flex-col">
        <div>{icon}</div>
        <div>
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-base-content text-sm">{description}</p>
        </div>
      </article>
    </div>
  );
};

export default ServiceCard;
