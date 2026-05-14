import React, { useState, useEffect } from "react";
import { useAdmin } from "./AdminContext";
import { SectionWrapper, Card, Field, Input, Textarea, SectionTitle, ImageUpload, RemoveBtn, AddBtn } from "./AdminComponents";

const AboutEditor = () => {
  const { portfolioData, updateSection, resetSection, loading } = useAdmin();
  const [data, setData] = useState(null);

  useEffect(() => { 
    if (portfolioData?.about) {
      setData(portfolioData.about); 
    }
  }, [portfolioData?.about]);

  if (loading || !data) return (
    <div className="flex justify-center py-20">
      <span className="loading loading-spinner loading-lg text-spotify"></span>
    </div>
  );

  const set = (key, val) => setData((d) => ({ ...d, [key]: val }));
  const setNested = (key, subKey, val) => setData((d) => ({ ...d, [key]: { ...d[key], [subKey]: val } }));

  // Professional journey helpers
  const setJourneyItem = (i, key, val) => {
    const arr = [...data.professionalJourney];
    arr[i] = { ...arr[i], [key]: val };
    setData((d) => ({ ...d, professionalJourney: arr }));
  };

  // Education helpers
  const setEdu = (i, key, val) => {
    const arr = [...data.education];
    arr[i] = { ...arr[i], [key]: val };
    setData((d) => ({ ...d, education: arr }));
  };
  const addEdu = () => setData((d) => ({ ...d, education: [...(data.education || []), { level: "", institution: "", year: "", result: "" }] }));
  const removeEdu = (i) => setData((d) => ({ ...d, education: data.education.filter((_, idx) => idx !== i) }));

  // Timeline helpers
  const setTimeline = (i, key, val) => {
    const arr = [...data.journey];
    arr[i] = { ...arr[i], [key]: val };
    setData((d) => ({ ...d, journey: arr }));
  };
  const addTimeline = () => setData((d) => ({ ...d, journey: [...(data.journey || []), { year: "", title: "", description: "", iconColor: "text-green-400" }] }));
  const removeTimeline = (i) => setData((d) => ({ ...d, journey: data.journey.filter((_, idx) => idx !== i) }));

  return (
    <SectionWrapper
      title="About Page"
      description="Edit your profile info, bio paragraphs, education, and journey timeline."
      onSave={() => updateSection("about", data)}
      onReset={() => { resetSection?.("about"); setData(portfolioData.about); }}
    >
      {/* Basic Profile */}
      <Card>
        <SectionTitle>Profile Info</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Full Name">
            <Input value={data.name} onChange={(e) => set("name", e.target.value)} />
          </Field>
          <Field label="Designation">
            <Input value={data.designation} onChange={(e) => set("designation", e.target.value)} />
          </Field>
          <Field label="Location">
            <Input value={data.location} onChange={(e) => set("location", e.target.value)} />
          </Field>
          <Field label="Experience">
            <Input value={data.experience} onChange={(e) => set("experience", e.target.value)} />
          </Field>
          <Field label="Availability">
            <Input value={data.availability} onChange={(e) => set("availability", e.target.value)} />
          </Field>
        </div>
      </Card>

      {/* Profile Image */}
      <Card>
        <SectionTitle>Profile Image</SectionTitle>
        <Field label="Profile Photo" hint="Paste a URL or upload from your device (saved as base64)">
          <ImageUpload value={data.profileImage} onChange={(v) => set("profileImage", v)} />
        </Field>
      </Card>

      {/* Social Links */}
      <Card>
        <SectionTitle>Social Links</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(data.socialLinks || {}).map(([key, val]) => (
            <Field key={key} label={key.charAt(0).toUpperCase() + key.slice(1)}>
              <Input value={val} onChange={(e) => setNested("socialLinks", key, e.target.value)} placeholder={`https://...`} />
            </Field>
          ))}
        </div>
      </Card>

      {/* Professional Journey paragraphs */}
      <Card>
        <SectionTitle>About Me Paragraphs</SectionTitle>
        <div className="space-y-4">
          {(data.professionalJourney || []).map((item, i) => (
            <div key={i} className="space-y-2 border border-base-300 rounded-xl p-4">
              <Field label="Heading">
                <Input value={item.heading} onChange={(e) => setJourneyItem(i, "heading", e.target.value)} />
              </Field>
              <Field label="Content">
                <Textarea value={item.content} onChange={(e) => setJourneyItem(i, "content", e.target.value)} rows={3} />
              </Field>
            </div>
          ))}
        </div>
      </Card>

      {/* Education */}
      <Card>
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-4">
          {(data.education || []).map((edu, i) => (
            <div key={i} className="border border-base-300 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">Entry {i + 1}</span>
                <RemoveBtn onClick={() => removeEdu(i)} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Field label="Level/Degree"><Input value={edu.level} onChange={(e) => setEdu(i, "level", e.target.value)} /></Field>
                <Field label="Institution"><Input value={edu.institution} onChange={(e) => setEdu(i, "institution", e.target.value)} /></Field>
                <Field label="Year"><Input value={edu.year} onChange={(e) => setEdu(i, "year", e.target.value)} /></Field>
                <Field label="Result/GPA"><Input value={edu.result} onChange={(e) => setEdu(i, "result", e.target.value)} /></Field>
              </div>
            </div>
          ))}
          <AddBtn onClick={addEdu} label="+ Add Education" />
        </div>
      </Card>

      {/* Journey Timeline */}
      <Card>
        <SectionTitle>Journey Timeline</SectionTitle>
        <div className="space-y-4">
          {(data.journey || []).map((item, i) => (
            <div key={i} className="border border-base-300 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">Step {i + 1}</span>
                <RemoveBtn onClick={() => removeTimeline(i)} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Field label="Year"><Input value={item.year} onChange={(e) => setTimeline(i, "year", e.target.value)} /></Field>
                <Field label="Title"><Input value={item.title} onChange={(e) => setTimeline(i, "title", e.target.value)} /></Field>
                <Field label="Icon Color (Tailwind class)" hint="e.g. text-green-400, text-blue-400">
                  <Input value={item.iconColor} onChange={(e) => setTimeline(i, "iconColor", e.target.value)} />
                </Field>
              </div>
              <Field label="Description">
                <Textarea value={item.description} onChange={(e) => setTimeline(i, "description", e.target.value)} rows={2} />
              </Field>
            </div>
          ))}
          <AddBtn onClick={addTimeline} label="+ Add Timeline Step" />
        </div>
      </Card>
    </SectionWrapper>
  );
};

export default AboutEditor;
