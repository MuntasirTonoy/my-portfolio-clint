import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../Api/Api";
import Loading from "../Components/Loading";
import ErrorPage from "./ErrorPage";
import Button from "../Components/Button";

const ProjectDetails = () => {
  const { id } = useParams();

  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const project = projects?.find((p) => p.id === parseInt(id));

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;
  if (!project) return <p className="text-center">Project not found</p>;

  const {
    image,
    title,
    description,
    tech,
    status,
    featured,
    links,
    keyFeature,
    challenges,
    improvements,
  } = project;

  return (
    <div className="relative max-w-6xl mx-auto my-20 p-6 bg-base-300 rounded-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          {/* Project Image */}
          <div className="overflow-hidden rounded-xl border border-gray-300 mb-6">
            <img
              src={image}
              alt={title}
              className="w-full h-60 sm:h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Project Name */}
          <h1 className="text-3xl font-bold mb-3">{title}</h1>

          {/* Status & Featured inline */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`px-3 py-1 text-sm rounded-full ${
                status === "completed"
                  ? "bg-spotify text-white"
                  : "bg-yellow-500 text-black"
              }`}
            >
              {status}
            </span>

            {featured && (
              <span className="px-4 py-1 bg-green-500/20 text-spotify rounded-full text-sm">
                🌟 Featured
              </span>
            )}
          </div>

          {/* Tech Stack Grouped */}
          <div className="mt-4 space-y-4">
            <h2 className="text-lg font-semibold">Main Tech Stack:</h2>

            {tech?.frontend?.length > 0 && (
              <div>
                <h3 className="font-medium text-sm mb-1">Frontend:</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.frontend.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {tech?.backend?.length > 0 && (
              <div>
                <h3 className="font-medium text-sm mb-1">Backend:</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.backend.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {tech?.other?.length > 0 && (
              <div>
                <h3 className="font-medium text-sm mb-1">Other Tools:</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.other.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-6">
            {links?.liveDemo && (
              <Link to={links.liveDemo} target="_blank">
                <Button>
                  <span className="flex items-center gap-2">
                    Live Demo <FaExternalLinkAlt size={14} />
                  </span>
                </Button>
              </Link>
            )}
            {links?.clientSide && (
              <Link to={links.clientSide} target="_blank">
                <Button>
                  <span className="flex items-center gap-2">
                    Client Repo <FaGithub size={14} />
                  </span>
                </Button>
              </Link>
            )}
            {links?.serverSide && (
              <Link to={links.serverSide} target="_blank">
                <Button>
                  <span className="flex items-center gap-2">
                    Server Repo <FaGithub size={14} />
                  </span>
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold mb-2">Brief Description:</h2>
          <p>{description}</p>

          {keyFeature?.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
              <ul className="list-disc list-inside space-y-1">
                {keyFeature.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </>
          )}

          {challenges && (
            <>
              <h2 className="text-xl font-semibold mb-2">Challenges Faced:</h2>
              <p>{challenges}</p>
            </>
          )}

          {improvements && (
            <>
              <h2 className="text-xl font-semibold mb-2">
                Potential Improvements & Future Plans:
              </h2>
              <p>{improvements}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
