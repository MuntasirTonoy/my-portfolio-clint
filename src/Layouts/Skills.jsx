import React from "react";
import SkillCard from "../Components/SkillCard";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React.js",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
        proficiency: 90,
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
        proficiency: 85,
      },
      {
        name: "HTML5",
        icon: "https://cdn.simpleicons.org/html5/E34F26",
        proficiency: 95,
      },
      {
        name: "CSS3",
        icon: "https://cdn.simpleicons.org/css3/1572B6",
        proficiency: 90,
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        proficiency: 80,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/node.js/339933",
        proficiency: 85,
      },
      {
        name: "Express.js",
        icon: "https://cdn.simpleicons.org/express/000000",
        proficiency: 80,
      },
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb/47A248",
        proficiency: 75,
      },
      {
        name: "Firebase",
        icon: "https://cdn.simpleicons.org/firebase/FFCA28",
        proficiency: 70,
      },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      {
        name: "Git",
        icon: "https://cdn.simpleicons.org/git/F05032",
        proficiency: 90,
      },
      {
        name: "GitHub",
        icon: "https://cdn.simpleicons.org/github/181717",
        proficiency: 90,
      },
      {
        name: "VS Code",
        icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC",
        proficiency: 95,
      },
    ],
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="py-16 px-4 md:px-8 lg:px-20 bg-base-100 text-base-content min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4">
            <span className="text-spotify">Tech</span> Stack
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Tools & technologies I use to craft full-stack web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
