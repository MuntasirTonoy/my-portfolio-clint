import React from "react";
import SkillCard from "../Components/SkillCard";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React.js",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      {
        name: "HTML5",
        icon: "https://cdn.simpleicons.org/html5/E34F26",
      },
      {
        name: "CSS3",
        icon: "https://raw.githubusercontent.com/CSS-Next/logo.css/main/css.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      {
        name: "Nextjs",
        icon: "https://cdn.simpleicons.org/nextdotjs/000000",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/node.js/339933",
      },
      {
        name: "Express.js",
        icon: "https://cdn.simpleicons.org/express/000000",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb/47A248",
      },
      {
        name: "Firebase",
        icon: "https://cdn.simpleicons.org/firebase/FFCA28",
      },
      {
        name: "Mongoose",
        icon: "https://cdn.simpleicons.org/mongoose/86BC25",
      },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      {
        name: "Git",
        icon: "https://cdn.simpleicons.org/git/F05032",
      },
      {
        name: "GitHub",
        icon: "https://cdn.simpleicons.org/github/181717",
      },
      {
        name: "VS Code",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
      },
      {
        name: "Postman",
        icon: "https://simpleicons.org/icons/postman.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.simpleicons.org/figma/F24E1E",
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="px-4 md:px-8 lg:px-20 bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4">
            <span className="text-spotify">Tech</span> Stack
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Tools & technologies I use to craft full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((group, index) => (
            <SkillCard
              key={index}
              category={group.category}
              items={group.items}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
