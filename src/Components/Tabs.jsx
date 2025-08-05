import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("address");

  const tabsData = [
    {
      label: "Address",
      value: "address",
      content: [
        {
          title: "Permanent Address",
          description:
            "Tonoy Villa, MM Road, Gobindopur, Alamdanga, Chuadanga.",
        },
        {
          title: "Present Address",
          description: "Facebook mess, Beside IU Club, Peyaratola, Kushtia.",
        },
        {
          title: "Other",
          description:
            "Some other address info that should be hidden (only 2 shown).",
        },
      ],
    },
    {
      label: "Education",
      value: "education",
      content: [
        {
          title: "HSC",
          description:
            "I've completed my HSC from HHH College and then moved into front-end development as my passion for web technologies grew.",
        },
        {
          title: "SSC",
          description:
            "I completed my SSC from XYZ School with a strong academic record in science and mathematics.",
        },
      ],
    },
    {
      label: "Experiences",
      value: "experiences",
      content: [
        {
          title: "Frontend Developer",
          description:
            "Worked on React-based projects, implemented responsive designs, and collaborated with teams for better UI/UX.",
        },
        {
          title: "Intern",
          description:
            "Completed a 3-month internship focusing on Tailwind CSS and component-based development.",
        },
        {
          title: "Hidden Experience",
          description: "Should not show unless more than 2 allowed.",
        },
      ],
    },
  ];

  const activeContent = tabsData.find(
    (tab) => tab.value === activeTab
  )?.content;

  return (
    <div>
      {/* Tab Headers */}
      <div className="tabs mt-4">
        {tabsData.map((tab) => (
          <a
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`tab tab-bordered text-lg cursor-pointer ${
              activeTab === tab.value
                ? "tab-active border-3 border-b-green-400"
                : "border-3 border-b-green-50/0"
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 space-y-6">
        {activeContent?.slice(0, 2).map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-base md:line-clamp-4 y md:max-w-80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
