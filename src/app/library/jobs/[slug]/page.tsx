import { notFound } from "next/navigation";
import Link from "next/link";
import { getJobProfileBySlug } from "@/data/job-profiles";
import { NOC_CATEGORY_COLORS, TEER_LABELS } from "@/lib/job-types";
import { DOMAIN_META, PROFICIENCY_COLORS, PROFICIENCY_LABELS } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function JobProfileDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = getJobProfileBySlug(slug);
  if (!job) notFound();

  const style = NOC_CATEGORY_COLORS[job.noc_category] || { color: "#6B7280", light: "#F3F4F6" };
  const essentials = job.competency_requirements.filter((c) => c.is_essential);
  const assets = job.competency_requirements.filter((c) => !c.is_essential);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-[#7C3AED]">Home</Link>
        <span>/</span>
        <Link href="/library" className="hover:text-[#7C3AED]">Library</Link>
        <span>/</span>
        <Link href="/library/jobs" className="hover:text-[#7C3AED]">Job Profiles</Link>
        <span>/</span>
        <span className="text-gray-600 font-medium">{job.title}</span>
      </div>

      {/* Header card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: style.light, color: style.color }}>
            {job.noc_category}
          </span>
          <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100 font-mono">
            NOC {job.noc_code}
          </span>
          <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
            TEER {job.teer_level}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#1E1B4B] mb-2">{job.title}</h1>

        {job.common_aliases.length > 0 && (
          <p className="text-sm text-gray-400 mb-4">
            Also known as: <span className="text-gray-500">{job.common_aliases.join(", ")}</span>
          </p>
        )}

        <p className="text-gray-600 leading-relaxed mb-5">{job.role_summary}</p>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Salary Range", value: job.salary_range_cad || "Varies" },
            { label: "TEER Level", value: `TEER ${job.teer_level}` },
            { label: "NOC Code", value: job.noc_code },
            { label: "Key Sectors", value: job.industry_sectors.slice(0, 2).join(", ") },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-400 mb-0.5">{stat.label}</div>
              <div className="text-sm font-semibold text-[#1E1B4B]">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Competency Requirements — the key section */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
        <h2 className="font-semibold text-[#1E1B4B] mb-1 flex items-center gap-2">
          <span>🎯</span> Competency Requirements
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          The competencies required for this role — mapped to TalentPin&apos;s library with required proficiency levels.
          <span className="ml-1 text-[#7C3AED]">Essential</span> competencies are mandatory;{" "}
          <span className="text-amber-600">Asset</span> competencies strengthen your profile.
        </p>

        {/* Essential */}
        <div className="mb-6">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            Essential Competencies
          </div>
          <div className="space-y-3">
            {essentials.map((req) => {
              const levelColor = PROFICIENCY_COLORS[req.required_level];
              const levelLabel = PROFICIENCY_LABELS[req.required_level];
              const domainMeta = DOMAIN_META[req.domain as keyof typeof DOMAIN_META];
              return (
                <Link key={req.competency_slug} href={`/library/${req.competency_slug}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group">
                  {/* Domain icon */}
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
                    style={{ backgroundColor: domainMeta?.lightColor || "#F3F4F6" }}>
                    {domainMeta?.icon || "📋"}
                  </div>

                  {/* Name + domain */}
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[#1E1B4B] group-hover:text-[#7C3AED] transition-colors">
                      {req.competency_name}
                    </div>
                    <div className="text-xs text-gray-400">{domainMeta?.label}</div>
                    {req.note && <div className="text-xs text-amber-600 mt-0.5 italic">{req.note}</div>}
                  </div>

                  {/* Required level */}
                  <div className="text-right shrink-0">
                    <div className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${levelColor}18`, color: levelColor }}>
                      Level {req.required_level} — {levelLabel}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Weight: {Math.round(req.weight * 100)}%
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Asset */}
        {assets.length > 0 && (
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Asset Competencies
            </div>
            <div className="space-y-3">
              {assets.map((req) => {
                const levelColor = PROFICIENCY_COLORS[req.required_level];
                const levelLabel = PROFICIENCY_LABELS[req.required_level];
                const domainMeta = DOMAIN_META[req.domain as keyof typeof DOMAIN_META];
                return (
                  <Link key={req.competency_slug} href={`/library/${req.competency_slug}`}
                    className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-gray-200 hover:border-amber-200 hover:shadow-sm transition-all group opacity-80 hover:opacity-100">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
                      style={{ backgroundColor: domainMeta?.lightColor || "#F3F4F6" }}>
                      {domainMeta?.icon || "📋"}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm text-[#1E1B4B] group-hover:text-[#7C3AED] transition-colors">
                        {req.competency_name}
                      </div>
                      <div className="text-xs text-gray-400">{domainMeta?.label}</div>
                      {req.note && <div className="text-xs text-amber-600 mt-0.5 italic">{req.note}</div>}
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: `${levelColor}18`, color: levelColor }}>
                        Level {req.required_level} — {levelLabel}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Main Duties */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
        <h2 className="font-semibold text-[#1E1B4B] mb-4 flex items-center gap-2">
          <span>📋</span> Main Duties
        </h2>
        <ul className="space-y-2">
          {job.main_duties.map((duty, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5"
                style={{ backgroundColor: style.light, color: style.color }}>
                {i + 1}
              </span>
              {duty}
            </li>
          ))}
        </ul>
      </div>

      {/* Employment Requirements */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
        <h2 className="font-semibold text-[#1E1B4B] mb-4 flex items-center gap-2">
          <span>🎓</span> Employment Requirements
        </h2>
        <ul className="space-y-2">
          {job.employment_requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-green-500 shrink-0 mt-0.5">✓</span>
              {req}
            </li>
          ))}
        </ul>
      </div>

      {/* Career Progression */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
        <h2 className="font-semibold text-[#1E1B4B] mb-4 flex items-center gap-2">
          <span>📈</span> Typical Career Progression
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          {job.typical_career_progression.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-sm">
                <div className="font-medium text-[#1E1B4B] text-xs">{step.title}</div>
                <div className="text-xs text-gray-400 font-mono">NOC {step.noc_code}</div>
              </div>
              {i < job.typical_career_progression.length - 1 && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA — Assessment */}
      <div className="bg-[#1E1B4B] rounded-2xl p-6 text-white mb-6">
        <h3 className="font-semibold text-lg mb-2">See how you match this role</h3>
        <p className="text-gray-300 text-sm mb-5">
          Take an assessment for the key competencies required for this role and see your fit score.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/assessment"
            className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#6D28D9] transition-colors">
            Start Assessment
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link href="/library/jobs"
            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors">
            Browse all profiles
          </Link>
        </div>
      </div>

      {/* Source */}
      <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-400 flex justify-between">
        <span>Source: NOC 2021 · OaSIS 2025 · TalentPin Competency Library</span>
        {job.oasis_code && <span>OaSIS: {job.oasis_code}</span>}
      </div>

      <div className="mt-6">
        <Link href="/library/jobs" className="text-sm text-[#7C3AED] hover:underline flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Job Profiles
        </Link>
      </div>
    </div>
  );
}
