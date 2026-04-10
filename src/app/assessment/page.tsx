import Link from "next/link";
import { competencies } from "@/data/competencies";
import { DOMAIN_META } from "@/lib/types";
import DomainBadge from "@/components/ui/DomainBadge";

export default function AssessmentLandingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-[#7C3AED]">Home</Link>
        <span>/</span>
        <span className="text-gray-600 font-medium">Assessment</span>
      </div>

      {/* Header */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
        <div className="inline-flex items-center gap-2 bg-[#EDE9FE] text-[#7C3AED] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          🧪 Evidence-based Assessment
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1E1B4B] mb-3">
          Assess Your Competencies
        </h1>
        <p className="text-gray-500 leading-relaxed mb-6">
          TalentPin assessments go beyond self-rating. Each assessment combines scenario-based
          questions, work evidence, and — for experienced professionals — manager validation
          to suggest a validated proficiency level.
        </p>

        {/* How it works */}
        <div className="grid sm:grid-cols-4 gap-3">
          {[
            { step: "1", icon: "🤔", label: "Self-reflection", desc: "Where do you think you are?" },
            { step: "2", icon: "📝", label: "Scenario response", desc: "Answer a role-aligned scenario" },
            { step: "3", icon: "📎", label: "Evidence", desc: "Upload a work artifact or SAT response" },
            { step: "4", icon: "✅", label: "Suggested level", desc: "AI suggests your proficiency level" },
          ].map((s) => (
            <div key={s.step} className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="w-6 h-6 rounded-full bg-[#7C3AED] text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">
                {s.step}
              </div>
              <div className="text-lg mb-1">{s.icon}</div>
              <div className="text-xs font-semibold text-[#1E1B4B]">{s.label}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 p-3 bg-amber-50 border border-amber-100 rounded-xl text-xs text-amber-700">
          <strong>Note:</strong> Self-rating is used as reflection only — it is not accepted as proof of competency.
          Validated levels require scenario responses and/or work evidence.
        </div>
      </div>

      {/* Pick a competency */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-[#1E1B4B] mb-1">Choose a competency to assess</h2>
        <p className="text-sm text-gray-400 mb-5">
          Select any competency from the library. Each assessment takes approximately 10–15 minutes.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {competencies.map((c) => {
            const meta = DOMAIN_META[c.domain];
            const prompts = c.evidence_prompts.filter((ep) => ep.prompt_type === "scenario");
            return (
              <Link key={c.id} href={`/assessment/${c.slug}`}
                className="group flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md hover:border-[#7C3AED]/30 transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ backgroundColor: meta.lightColor }}>
                  {meta.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-[#1E1B4B] group-hover:text-[#7C3AED] transition-colors">
                    {c.name}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <DomainBadge domain={c.domain} size="sm" />
                    <span className="text-xs text-gray-400">{prompts.length} scenario{prompts.length !== 1 ? "s" : ""}</span>
                  </div>
                </div>
                <svg className="text-gray-300 group-hover:text-[#7C3AED] transition-colors shrink-0"
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Coming soon notice */}
      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-center">
        <p className="text-sm text-gray-500">
          <strong className="text-[#1E1B4B]">Manager validation</strong> and{" "}
          <strong className="text-[#1E1B4B]">AI scoring</strong> will be available when you sign in.
          {" "}<Link href="/signup" className="text-[#7C3AED] hover:underline">Create your profile →</Link>
        </p>
      </div>
    </div>
  );
}
