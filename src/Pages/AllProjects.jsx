import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";
import { fetchProjects } from "../Api/Api";
import Loading from "../Components/Loading";
import ErrorPage from "./ErrorPage";
import { BiSearch } from "react-icons/bi";

const AllProjects = () => {
  const {
    data: projects = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [techFilter, setTechFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Gather unique techs, tags, and statuses for filters
  const filterOptions = useMemo(() => {
    const techSet = new Set();
    const tagSet = new Set();
    const statusSet = new Set();

    projects.forEach((p) => {
      Object.values(p.tech || {})
        .flat()
        .forEach((t) => techSet.add(t));
      (p.tags || []).forEach((tag) => tagSet.add(tag));
      if (p.status) statusSet.add(p.status);
    });

    return {
      techs: Array.from(techSet).sort(),
      tags: Array.from(tagSet).sort(),
      statuses: Array.from(statusSet).sort(),
    };
  }, [projects]);

  // Filter projects based on all inputs
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTech =
        !techFilter ||
        Object.values(p.tech || {})
          .flat()
          .includes(techFilter);

      const matchesTag = !tagFilter || (p.tags || []).includes(tagFilter);

      const matchesStatus = !statusFilter || p.status === statusFilter;

      return matchesSearch && matchesTech && matchesTag && matchesStatus;
    });
  }, [projects, searchQuery, techFilter, tagFilter, statusFilter]);

  if (isLoading) return <Loading fullScreen />;
  if (isError) return <ErrorPage />;

  return (
    <div className="min-h-screen mt-20 bg-base-100">
      {/* Hero Section */}
      <section className="text-base-content mb-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-3">
            <span className="text-spotify">My</span> Projects
          </h2>
          <p className="text-lg opacity-90">
            Browse through my development projects
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4  ">
        {/* Filters: search, Tech, Tag, Status */}
        <div className="flex flex-wrap gap-4 mb-5">
          {/* Search Box */}
          <div className="mb-6 flex">
            <label className="label">
              <span className="label-text mr-1">
                <BiSearch size={30} />
              </span>
            </label>
            <input
              type="text"
              placeholder="Search by title or description..."
              className="input input-bordered w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="select select-bordered flex-1 min-w-[150px]"
            value={techFilter}
            onChange={(e) => setTechFilter(e.target.value)}
          >
            <option value="">All Technologies</option>
            {filterOptions.techs.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>

          <select
            className="select select-bordered flex-1 min-w-[150px]"
            value={tagFilter}
            onChange={(e) => setTagFilter(e.target.value)}
          >
            <option value="">All Tags</option>
            {filterOptions.tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          <select
            className="select select-bordered flex-1 min-w-[150px]"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            {filterOptions.statuses.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl  font-semibold">
            {filteredProjects.length} Projects Found
          </h2>
          {(searchQuery || techFilter || tagFilter || statusFilter) && (
            <button
              onClick={() => {
                setSearchQuery("");
                setTechFilter("");
                setTagFilter("");
                setStatusFilter("");
              }}
              className="btn btn-sm btn-outline"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-16 bg-base-200 rounded-xl">
            <div className="text-5xl mb-4">🧐</div>
            <h3 className="text-xl font-medium mb-2">
              No projects match your filters
            </h3>
            <button
              onClick={() => {
                setSearchQuery("");
                setTechFilter("");
                setTagFilter("");
                setStatusFilter("");
              }}
              className="btn btn-primary mt-4"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default AllProjects;
