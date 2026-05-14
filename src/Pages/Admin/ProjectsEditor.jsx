import React, { useState, useEffect } from "react";
import { useAdmin } from "./AdminContext";
import { SectionWrapper, Card, Field, Input, Textarea, SectionTitle, RemoveBtn, AddBtn, ImageUpload } from "./AdminComponents";

const defaultProject = {
  image: "",
  title: "New Project",
  description: "",
  tech: { frontend: [], backend: [], other: [] },
  tags: [],
  status: "completed",
  featured: false,
  started: "",
  end: "",
  keyFeature: [],
  challenges: "",
  improvements: "",
  links: { liveDemo: "", clientSide: "", serverSide: "" },
};

const ProjectsEditor = () => {
  const { portfolioData, updateSection, resetSection, loading } = useAdmin();
  const [projects, setProjects] = useState(null);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => { 
    if (portfolioData?.projects) {
      setProjects(portfolioData.projects); 
    }
  }, [portfolioData?.projects]);

  if (loading || !projects) return (
    <div className="flex justify-center py-20">
      <span className="loading loading-spinner loading-lg text-spotify"></span>
    </div>
  );

  const setProject = (i, key, val) => {
    const arr = [...projects];
    arr[i] = { ...arr[i], [key]: val };
    setProjects(arr);
  };

  const setNested = (i, parent, key, val) => {
    const arr = [...projects];
    arr[i] = { ...arr[i], [parent]: { ...arr[i][parent], [key]: val } };
    setProjects(arr);
  };

  const setArrayField = (i, key, rawVal) => {
    setProject(i, key, rawVal.split(",").map((s) => s.trim()).filter(Boolean));
  };

  const addProject = () => {
    const newP = { ...defaultProject };
    setProjects([...projects, newP]);
    setExpanded(projects.length);
  };

  const removeProject = (i) => {
    setProjects(projects.filter((_, idx) => idx !== i));
    setExpanded(null);
  };

  const addFeature = (i) => {
    const arr = [...projects];
    arr[i] = { ...arr[i], keyFeature: [...(arr[i].keyFeature || []), "New feature"] };
    setProjects(arr);
  };

  const setFeature = (i, fi, val) => {
    const arr = [...projects];
    const features = [...(arr[i].keyFeature || [])];
    features[fi] = val;
    arr[i] = { ...arr[i], keyFeature: features };
    setProjects(arr);
  };

  const removeFeature = (i, fi) => {
    const arr = [...projects];
    arr[i] = { ...arr[i], keyFeature: arr[i].keyFeature.filter((_, j) => j !== fi) };
    setProjects(arr);
  };

  return (
    <SectionWrapper
      title="Projects"
      description="Manage your portfolio projects. Changes are saved to MongoDB."
      onSave={() => updateSection("projects", projects)}
      onReset={() => { resetSection?.("projects"); setProjects(portfolioData.projects); }}
    >
      {projects.map((proj, i) => (
        <Card key={proj._id || i}>
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setExpanded(expanded === i ? null : i)}>
            <div className="flex items-center gap-3">
              {proj.image && <img src={proj.image} alt="" className="w-12 h-10 rounded-lg object-cover" onError={(e) => (e.target.style.display = "none")} />}
              <div>
                <p className="font-bold text-sm">{proj.title}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${proj.featured ? "bg-[#02b677]/20 text-[#02b677]" : "bg-base-200 text-base-content/40"}`}>
                  {proj.featured ? "⭐ Featured" : "Not featured"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <RemoveBtn onClick={(e) => { e.stopPropagation(); removeProject(i); }} />
              <span className="text-base-content/40">{expanded === i ? "▲" : "▼"}</span>
            </div>
          </div>

          {expanded === i && (
            <div className="mt-5 space-y-4 border-t border-base-300 pt-5">
              <Field label="Project Image">
                <ImageUpload value={proj.image} onChange={(v) => setProject(i, "image", v)} />
              </Field>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Title">
                  <Input value={proj.title} onChange={(e) => setProject(i, "title", e.target.value)} />
                </Field>
                <Field label="Status">
                  <select value={proj.status} onChange={(e) => setProject(i, "status", e.target.value)}
                    className="w-full px-4 py-2.5 bg-base-200 border border-base-300 rounded-xl text-sm focus:outline-none focus:border-[#02b677]">
                    <option value="completed">Completed</option>
                    <option value="working">In Progress</option>
                    <option value="planned">Planned</option>
                  </select>
                </Field>
                <Field label="Started">
                  <Input value={proj.started} onChange={(e) => setProject(i, "started", e.target.value)} placeholder="Jan 2025" />
                </Field>
                <Field label="End">
                  <Input value={proj.end} onChange={(e) => setProject(i, "end", e.target.value)} placeholder="Feb 2025" />
                </Field>
                <Field label="Featured">
                  <label className="flex items-center gap-2 cursor-pointer mt-2">
                    <input type="checkbox" checked={proj.featured} onChange={(e) => setProject(i, "featured", e.target.checked)}
                      className="w-4 h-4 accent-[#02b677]" />
                    <span className="text-sm">Show in Featured section</span>
                  </label>
                </Field>
                <Field label="Tags (comma separated)">
                  <Input value={proj.tags?.join(", ") ?? ""} onChange={(e) => setArrayField(i, "tags", e.target.value)} placeholder="react, mern, api" />
                </Field>
              </div>

              <Field label="Description">
                <Textarea value={proj.description} onChange={(e) => setProject(i, "description", e.target.value)} rows={3} />
              </Field>

              <SectionTitle>Tech Stack</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {["frontend", "backend", "other"].map((key) => (
                  <Field key={key} label={key.charAt(0).toUpperCase() + key.slice(1)} hint="comma separated">
                    <Input value={(proj.tech?.[key] ?? []).join(", ")} onChange={(e) => setNested(i, "tech", key, e.target.value.split(",").map((s) => s.trim()).filter(Boolean))} />
                  </Field>
                ))}
              </div>

              <SectionTitle>Key Features</SectionTitle>
              <div className="space-y-2">
                {(proj.keyFeature || []).map((f, fi) => (
                  <div key={fi} className="flex gap-2">
                    <Input value={f} onChange={(e) => setFeature(i, fi, e.target.value)} />
                    <button onClick={() => removeFeature(i, fi)} className="px-3 text-red-400 bg-red-500/10 rounded-xl hover:bg-red-500/20">✕</button>
                  </div>
                ))}
                <AddBtn onClick={() => addFeature(i)} label="+ Add Feature" />
              </div>

              <Field label="Challenges">
                <Textarea value={proj.challenges} onChange={(e) => setProject(i, "challenges", e.target.value)} rows={2} />
              </Field>
              <Field label="Improvements">
                <Textarea value={proj.improvements} onChange={(e) => setProject(i, "improvements", e.target.value)} rows={2} />
              </Field>

              <SectionTitle>Links</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {["liveDemo", "clientSide", "serverSide"].map((key) => (
                  <Field key={key} label={key}>
                    <Input value={proj.links?.[key] ?? ""} onChange={(e) => setNested(i, "links", key, e.target.value)} placeholder="https://..." />
                  </Field>
                ))}
              </div>
            </div>
          )}
        </Card>
      ))}

      <AddBtn onClick={addProject} label="+ Add New Project" />
    </SectionWrapper>
  );
};

export default ProjectsEditor;
