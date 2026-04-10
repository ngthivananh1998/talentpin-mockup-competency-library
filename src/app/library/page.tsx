"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { competencies } from "@/data/competencies";
import { Domain, DOMAIN_META } from "@/lib/types";
import DomainBadge from "@/components/ui/DomainBadge";

const ALL_DOMAINS = Object.keys(DOMAIN_META) as Domain[];

function LibraryContent() {
  const searchParams = useSearchParams();
  const initialDomain = searchParams.get("domain") as Domain | null;

  const [search, setSearch] = useState("");
  const [activeDomain, setActiveDomain] = useState<Domain | "all">(initialDomain || "all");

  const filtered = useMemo(() => {
    return competencies.filter((c) => {
      const matchesDomain = activeDomain === "all" || c.domain === activeDomain;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.definition.toLowerCase().includes(q) ||
        c.cluster.toLowerCase().includes(q) ||
        c.components.some((comp) => comp.toLowerCase().includes(q));
      return matchesDomain && matchesSearch;
    });
  }, [search, activeDomain]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
          <Link href="/" className="hover:text-[#7C3AED]">Home</Link>
          <span>/</span>
          <span className="text-gray-600 font-medium">Competency Library</span>
        </div>
        <h1 className="text-3xl font-bold text-[#1E1B4B] mb-2">Competency Library</h1>
        <p className="text-gray-500 max-w-2xl">
          Browse ~99 competencies across six domains — built on Canadian national frameworks.
          Each entry includes a definition, proficiency levels, behavioural indicators, and evidence guidance.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Search by name, skill, or keyword…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#7C3AED]"
        />
      </div>

      {/* Domain Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveDomain("all")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeDomain === "all"
              ? "bg-[#1E1B4B] text-white"
              : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
          }`}
        >
          All domains
        </button>
        {ALL_DOMAINS.map((domain) => {
          const meta = DOMAIN_META[domain];
          const active = activeDomain === domain;
          return (
            <button
              key={domain}
              onClick={() => setActiveDomain(active ? "all" : domain)}
              className="px-3 py-1.5 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: active ? meta.color : meta.lightColor,
                color: active ? "white" : meta.color,
              }}
            >
              {meta.icon} {meta.label}
            </button>
          );
        })}
      </div>

      {/* Results count */}
      <div className="text-sm text-gray-400 mb-5">
        Showing <span className="font-semibold text-gray-600">{filtered.length}</span> competencies
        {search && <span> for &ldquo;<span className="text-[#7C3AED]">{search}</span>&rdquo;</span>}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-4xl mb-4">🔍</div>
          <div className="font-medium text-gray-500 mb-1">No results found</div>
          <div className="text-sm">Try a different keyword or clear the domain filter</div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c) => {
            const meta = DOMAIN_META[c.domain];
            return (
              <Link
                key={c.id}
                href={`/library/${c.slug}`}
                className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-gray-200 transition-all flex flex-col"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <DomainBadge domain={c.domain} size="sm" />
                  {c.abbreviation && (
                    <span className="text-xs font-mono text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded">
                      {c.abbreviation}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="font-semibold text-[#1E1B4B] mb-2 group-hover:text-[#7C3AED] transition-colors">
                  {c.name}
                </h3>

                {/* Definition */}
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                  {c.definition}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <span className="text-xs text-gray-400">{c.cluster}</span>
                  <span className="text-xs font-medium" style={{ color: meta.color }}>
                    View details →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Domain deep-dives (when domain filter active) */}
      {activeDomain !== "all" && (
        <div className="mt-12 bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{ backgroundColor: DOMAIN_META[activeDomain].lightColor }}
            >
              {DOMAIN_META[activeDomain].icon}
            </div>
            <div>
              <h3 className="font-semibold text-[#1E1B4B] mb-1">{DOMAIN_META[activeDomain].label}</h3>
              <p className="text-sm text-gray-500 mb-2">{DOMAIN_META[activeDomain].description}</p>
              <div className="text-xs text-gray-400">
                Source: {DOMAIN_META[activeDomain].source}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LibraryPage() {
  return (
    <Suspense>
      <LibraryContent />
    </Suspense>
  );
}
