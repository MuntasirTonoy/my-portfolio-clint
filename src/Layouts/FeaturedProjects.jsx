// src/pages/MyProjects.jsx
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import Button from "../Components/Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../Api/Api";
import Loading from "../Components/Loading";
import ErrorPage from "../Pages/ErrorPage";

const FeaturedProjects = () => {
  // Use TanStack Query to fetch projects
  const {
    data: projects,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  // Filter featured projects
  const featuredProjects = projects?.filter((p) => p.featured) || [];

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <section className="min-h-screen py-20 px-4 md:px-6 lg:px-8">
      <h2 className="text-5xl text-center font-extrabold mb-10">
        <span className="text-spotify">Featured</span> Projects
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/projects">
          <Button>
            All Projects <HiOutlineArrowNarrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
