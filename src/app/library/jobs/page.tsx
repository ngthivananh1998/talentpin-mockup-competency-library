"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { jobProfiles } from "@/data/job-profiles";
import { NOC_CATEGORY_COLORS, TEER_LABELS } from "@/lib/job-types";
import { PROFICIENCY_COLORS, PROFICIENCY_LABELS } from "@/lib/types";

const ALL_CATEGORIES = Array.from(new Set(jobProfiles.map((j) => j.noc_category)));

export default function JobProfilesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");

  const filtered = useMemo(() => {
    return jobProfiles.filter((j) => {
      const matchesCat = activeCategory === "all" || j.noc_category === activeCategory;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.common_aliases.some((a) => a.toLowerCase().includes(q)) ||
        j.industry_sectors.some((s) => s.toLowerCase().includes(q)) ||
        j.noc_category.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
        <Link href="/" className="hover:text-[#7C3AED]">Home</Link>
        <span>/</span>
        <Link href="/library" className="hover:text-[#7C3AED]">Library</Link>
        <span>/</span>
        <span className="text-gray-600 font-medium">Job Profiles</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E1B4B] mb-2">Job Profile Library</h1>
        <p className="text-gray-500 max-w-2xl">
          Browse Canadian job profiles mapped to competency requirements. Each profile is based on
          NOC 2021 and OaSIS 2025 — showing exactly which competencies are required and at what level.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Search by title, alias, sector…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#7C3AED]"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "bg-[#1E1B4B] text-white"
              : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
          }`}
        >
          All categories
        </button>
        {ALL_CATEGORIES.map((cat) => {
          const style = NOC_CATEGORY_COLORS[cat] || { color: "#6B7280", light: "#F3F4F6" };
          const active = activeCategory === cat;
          return (
            <button key={cat} onClick={() => setActiveCategory(active ? "all" : cat)}
              className="px-3 py-1.5 rounded-full text-sm font-medium transition-all"
              style={{ backgroundColor: active ? style.color : style.light, color: active ? "white" : style.color }}>
              {cat}
            </button>
          );
        })}
      </div>

      <div className="text-sm text-gray-400 mb-5">
        Showing <span className="font-semibold text-gray-600">{filtered.length}</span> job profiles
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((job) => {
          const style = NOC_CATEGORY_COLORS[job.noc_category] || { color: "#6B7280", light: "#F3F4F6" };
          const essentials = job.competency_requirements.filter((c) => c.is_essential);
          return (
            <Link key={job.id} href={`/library/jobs/${job.slug}`}
              className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-gray-200 transition-all flex flex-col">

              {/* Category + TEER */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: style.light, color: style.color }}>
                  {job.noc_category}
                </span>
                <span className="text-xs text-gray-400 font-mono">NOC {job.noc_code}</span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#1E1B4B] mb-1 group-hover:text-[#7C3AED] transition-colors">
                {job.title}
              </h3>
              {job.common_aliases.length > 0 && (
                <p className="text-xs text-gray-400 mb-3">Also known as: {job.common_aliases.slice(0, 2).join(", ")}</p>
              )}

              {/* Summary */}
              <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-2">
                {job.role_summary}
              </p>

              {/* Competency pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {essentials.slice(0, 3).map((req) => {
                  const color = PROFICIENCY_COLORS[req.required_level];
                  return (
                    <span key={req.competency_slug}
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ backgroundColor: `${color}18`, color }}>
                      L{req.required_level} {req.competency_name}
                    </span>
                  );
                })}
                {essentials.length > 3 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-50 text-gray-400">
                    +{essentials.length - 3} more
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <span className="text-xs text-gray-400">
                  TEER {job.teer_level} · {job.salary_range_cad}
                </span>
                <span className="text-xs font-medium" style={{ color: style.color }}>
                  View profile →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* NOC explanation */}
      <div className="mt-12 bg-[#F8F7FF] border border-[#EDE9FE] rounded-xl p-6">
        <h3 className="font-semibold text-[#1E1B4B] mb-2">About the NOC 2021 Classification</h3>
        <p className="text-sm text-gray-500 mb-4">
          All job profiles use the National Occupational Classification (NOC) 2021, Canada&apos;s official
          framework for categorizing occupations. The TEER system replaces the old skill level system:
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {Object.entries(TEER_LABELS).map(([level, label]) => (
            <div key={level} className="text-xs text-gray-500 flex gap-2">
              <span className="font-semibold text-[#7C3AED] shrink-0">TEER {level}</span>
              <span>{label.split("—")[1]?.trim()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
