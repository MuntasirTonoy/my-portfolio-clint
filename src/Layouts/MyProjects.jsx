import React from "react";
import ProjectCard from "../Components/ProjectCard";

const MyProjects = () => {
  const projectsData = [
    {
      image:
        "https://verpex.com/assets/uploads/images/blog/Business-Website-Verpex.webp?v=1706620702",
      title: "Dev Connect Forum",
      description:
        "A developer forum where users can post, vote, and comment on tech topics. Built with the MERN stack and Firebase Auth.",
      tags: ["mern", "firebase", "forum"],
      status: "completed",
    },
    {
      image:
        "https://images.ctfassets.net/lzny33ho1g45/5VGvMMdX169JCk60IJCRDA/358a2d3f62c6028d978efc382cb83ad5/image10.png",
      title: "Recipe Sharing App",
      description:
        "Users can upload, search, and save recipes. Includes Firebase storage and JWT-based authentication.",
      tags: ["react", "tailwind", "firebase"],
      status: "working",
    },
    {
      image:
        "https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png",
      title: "Lawyer Booking System",
      description:
        "A booking app for clients to schedule appointments with lawyers. Admin panel included for managing availability.",
      tags: ["react", "nodejs", "dashboard"],
      status: "completed",
    },
    {
      image:
        "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/opengraph_1200x630+%282%29-1920w.png",
      title: "Cafe Order App",
      description:
        "Simple cafe POS system for placing and tracking snack/coffee orders. Built for mobile-first experience.",
      tags: ["mobile", "firebase", "tailwind"],
      status: "working",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-base-300 py-20 px-4 md:px-6 lg:px-8 "
    >
      <h2 className="text-5xl text-center font-extrabold mb-10">
        <span className="text-spotify">Featured</span> Projects
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
