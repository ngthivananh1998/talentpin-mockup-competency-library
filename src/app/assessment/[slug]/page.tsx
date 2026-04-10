"use client";
import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCompetencyBySlug } from "@/data/competencies";
import { DOMAIN_META, PROFICIENCY_COLORS, PROFICIENCY_LABELS } from "@/lib/types";
import DomainBadge from "@/components/ui/DomainBadge";

type Step = 1 | 2 | 3 | 4;

interface Props {
  params: Promise<{ slug: string }>;
}

export default function AssessmentPage({ params }: Props) {
  const { slug } = use(params);
  const item = getCompetencyBySlug(slug);
  if (!item) notFound();

  const [step, setStep] = useState<Step>(1);
  const [selfRating, setSelfRating] = useState<number | null>(null);
  const [scenarioResponse, setScenarioResponse] = useState("");
  const [evidenceText, setEvidenceText] = useState("");
  const [evidenceType, setEvidenceType] = useState<"text" | "file">("text");
  const [suggestedLevel, setSuggestedLevel] = useState<1 | 2 | 3 | 4 | 5 | null>(null);

  const meta = DOMAIN_META[item.domain];
  const scenarioPrompt = item.evidence_prompts.find((ep) => ep.prompt_type === "scenario") ||
    item.evidence_prompts.find((ep) => ep.prompt_type === "sat");

  const isValuesEthics = item.domain === "values_ethics";

  // Mock AI suggestion based on response length + self rating
  function handleSubmitEvidence() {
    const words = scenarioResponse.trim().split(/\s+/).length;
    let suggested: 1 | 2 | 3 | 4 | 5 = 2;
    if (words > 150 && (selfRating || 0) >= 4) suggested = 4;
    else if (words > 100 && (selfRating || 0) >= 3) suggested = 3;
    else if (words > 50) suggested = 2;
    else suggested = 1;
    setSuggestedLevel(suggested);
    setStep(4);
  }

  const stepLabels = ["Self-reflection", "Scenario", "Evidence", "Your result"];
  const progress = ((step - 1) / 3) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-[#7C3AED]">Home</Link>
        <span>/</span>
        <Link href="/assessment" className="hover:text-[#7C3AED]">Assessment</Link>
        <span>/</span>
        <span className="text-gray-600 font-medium">{item.name}</span>
      </div>

      {/* Competency header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
          style={{ backgroundColor: meta.lightColor }}>
          {meta.icon}
        </div>
        <div>
          <h1 className="font-bold text-xl text-[#1E1B4B]">{item.name}</h1>
          <DomainBadge domain={item.domain} size="sm" />
        </div>
      </div>

      {/* Progress stepper */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {stepLabels.map((label, i) => {
            const stepNum = (i + 1) as Step;
            const done = step > stepNum;
            const active = step === stepNum;
            return (
              <div key={label} className="flex flex-col items-center gap-1 flex-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                  done ? "bg-[#7C3AED] border-[#7C3AED] text-white"
                    : active ? "bg-white border-[#7C3AED] text-[#7C3AED]"
                    : "bg-white border-gray-200 text-gray-400"
                }`}>
                  {done ? "✓" : stepNum}
                </div>
                <span className={`text-xs hidden sm:block ${active ? "text-[#7C3AED] font-medium" : "text-gray-400"}`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
        <div className="bg-gray-100 rounded-full h-1 overflow-hidden">
          <div className="bg-[#7C3AED] h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* ── STEP 1: Self-reflection ── */}
      {step === 1 && (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="font-semibold text-[#1E1B4B] text-lg mb-2">Step 1 — Self-reflection</h2>
          <p className="text-sm text-gray-500 mb-1 leading-relaxed">
            Before the assessment, take a moment to reflect. Where do you honestly think you are right now?
          </p>
          <p className="text-xs text-amber-600 italic mb-6">
            This is for reflection only — it will not be used as proof of your level.
          </p>

          <div className="space-y-2 mb-6">
            {([1, 2, 3, 4, 5] as const).map((level) => {
              const color = PROFICIENCY_COLORS[level];
              const label = PROFICIENCY_LABELS[level];
              const pl = item.proficiency_levels.find((p) => p.level === level);
              return (
                <button key={level} onClick={() => setSelfRating(level)}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                    selfRating === level ? "border-[#7C3AED] bg-[#EDE9FE]" : "border-gray-100 hover:border-gray-200"
                  }`}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ backgroundColor: selfRating === level ? "#7C3AED" : `${color}20`, color: selfRating === level ? "white" : color }}>
                    {level}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[#1E1B4B]">Level {level} — {label}</div>
                    {pl && <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">{pl.summary}</div>}
                  </div>
                  {selfRating === level && (
                    <svg className="text-[#7C3AED] shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          <button onClick={() => setStep(2)} disabled={!selfRating}
            className="w-full bg-[#7C3AED] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#6D28D9] transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
            Continue to Scenario →
          </button>
        </div>
      )}

      {/* ── STEP 2: Scenario ── */}
      {step === 2 && (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="font-semibold text-[#1E1B4B] text-lg mb-2">Step 2 — Scenario Question</h2>
          <p className="text-sm text-gray-500 mb-5 leading-relaxed">
            Read the scenario below and respond in your own words. Be specific — describe what you would
            actually do, not what you think the ideal answer is.
          </p>

          {scenarioPrompt ? (
            <div className="bg-[#F8F7FF] border border-[#EDE9FE] rounded-xl p-4 mb-5">
              <div className="text-xs font-semibold text-[#7C3AED] uppercase tracking-wide mb-2">
                {scenarioPrompt.prompt_type === "sat" ? "Situation — Action — Outcome" : "Scenario"}
              </div>
              <p className="text-sm text-[#1E1B4B] leading-relaxed font-medium">
                {scenarioPrompt.prompt_text}
              </p>
              {scenarioPrompt.prompt_type === "sat" && (
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {["Situation: What was the context?", "Action: What did you do?", "Outcome: What happened?"].map((hint) => (
                    <div key={hint} className="bg-white rounded-lg p-2 text-xs text-gray-400 italic">{hint}</div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-4 mb-5">
              <p className="text-sm text-gray-500 italic">
                Describe a specific situation where you demonstrated <strong>{item.name}</strong>.
                What was the context, what did you do, and what was the result?
              </p>
            </div>
          )}

          <textarea
            value={scenarioResponse}
            onChange={(e) => setScenarioResponse(e.target.value)}
            placeholder="Write your response here… Be specific. Use real examples where possible."
            rows={7}
            className="w-full border border-gray-200 rounded-xl p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#7C3AED] mb-2"
          />
          <div className="text-xs text-gray-400 text-right mb-5">
            {scenarioResponse.trim().split(/\s+/).filter(Boolean).length} words
            <span className="ml-2 text-gray-300">· Suggested: 100–200 words</span>
          </div>

          <div className="flex gap-3">
            <button onClick={() => setStep(1)}
              className="flex-1 bg-white border border-gray-200 text-gray-600 py-3 rounded-xl font-medium text-sm hover:bg-gray-50 transition-colors">
              ← Back
            </button>
            <button onClick={() => setStep(3)}
              disabled={scenarioResponse.trim().split(/\s+/).filter(Boolean).length < 20}
              className="flex-[2] bg-[#7C3AED] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#6D28D9] transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
              Continue to Evidence →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3: Evidence ── */}
      {step === 3 && (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="font-semibold text-[#1E1B4B] text-lg mb-2">Step 3 — Supporting Evidence</h2>
          <p className="text-sm text-gray-500 mb-5 leading-relaxed">
            Strengthen your assessment with a piece of evidence. This can be a work artifact description
            or a file upload. Evidence is optional but increases the confidence of your suggested level.
          </p>

          {/* Evidence type toggle */}
          <div className="flex gap-2 mb-5">
            {(["text", "file"] as const).map((t) => (
              <button key={t} onClick={() => setEvidenceType(t)}
                className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-all ${
                  evidenceType === t
                    ? "bg-[#EDE9FE] border-[#7C3AED] text-[#7C3AED]"
                    : "bg-white border-gray-200 text-gray-500"
                }`}>
                {t === "text" ? "📝 Describe an artifact" : "📎 Upload a file"}
              </button>
            ))}
          </div>

          {evidenceType === "text" ? (
            <textarea
              value={evidenceText}
              onChange={(e) => setEvidenceText(e.target.value)}
              placeholder={`Describe a specific work artifact that demonstrates ${item.name}.\n\nExample: "A stakeholder presentation I delivered to 30 people in Q3 2024, where I adapted technical information for a non-technical executive audience. The deck was 15 slides and resulted in project approval."`}
              rows={6}
              className="w-full border border-gray-200 rounded-xl p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#7C3AED] mb-4"
            />
          ) : (
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center mb-4">
              <div className="text-3xl mb-3">📎</div>
              <p className="text-sm font-medium text-gray-600 mb-1">Upload a work sample</p>
              <p className="text-xs text-gray-400 mb-4">PDF, DOCX, PPTX, PNG — max 10MB</p>
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-500 px-4 py-2 rounded-lg text-sm cursor-not-allowed opacity-60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                File upload — available after sign-in
              </div>
            </div>
          )}

          <div className="bg-gray-50 rounded-xl p-3 mb-5 text-xs text-gray-500">
            <strong className="text-gray-600">Skipping evidence?</strong> You can still proceed —
            your suggested level will be based on your scenario response only, with lower confidence.
          </div>

          <div className="flex gap-3">
            <button onClick={() => setStep(2)}
              className="flex-1 bg-white border border-gray-200 text-gray-600 py-3 rounded-xl font-medium text-sm hover:bg-gray-50 transition-colors">
              ← Back
            </button>
            <button onClick={handleSubmitEvidence}
              className="flex-[2] bg-[#7C3AED] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#6D28D9] transition-colors">
              Submit & See My Result →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 4: Result ── */}
      {step === 4 && suggestedLevel && (
        <div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-3"
                style={{ backgroundColor: PROFICIENCY_COLORS[suggestedLevel] }}>
                {suggestedLevel}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                Suggested Proficiency Level
              </div>
              <h2 className="text-2xl font-bold text-[#1E1B4B]">
                Level {suggestedLevel} — {PROFICIENCY_LABELS[suggestedLevel]}
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                {item.proficiency_levels.find((p) => p.level === suggestedLevel)?.summary}
              </p>
            </div>

            {/* Confidence badge */}
            <div className={`rounded-xl p-3 mb-5 text-sm text-center font-medium ${
              evidenceText.length > 50
                ? "bg-green-50 text-green-700 border border-green-100"
                : "bg-amber-50 text-amber-700 border border-amber-100"
            }`}>
              {evidenceText.length > 50 ? (
                <span>✅ <strong>Moderate confidence</strong> — based on scenario response + evidence description</span>
              ) : (
                <span>⚠️ <strong>Estimated</strong> — based on scenario response only. Add evidence to validate.</span>
              )}
            </div>

            {/* Self vs suggested */}
            {selfRating && selfRating !== suggestedLevel && (
              <div className="bg-[#F8F7FF] rounded-xl p-4 mb-5">
                <div className="text-xs font-semibold text-[#7C3AED] mb-2">Your self-reflection vs. assessment</div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 text-center">
                    <div className="text-xs text-gray-400 mb-1">You estimated</div>
                    <div className="font-bold" style={{ color: PROFICIENCY_COLORS[selfRating as 1|2|3|4|5] }}>
                      Level {selfRating} — {PROFICIENCY_LABELS[selfRating as 1|2|3|4|5]}
                    </div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                    <path d="M5 12h14"/>
                  </svg>
                  <div className="flex-1 text-center">
                    <div className="text-xs text-gray-400 mb-1">Assessment suggests</div>
                    <div className="font-bold" style={{ color: PROFICIENCY_COLORS[suggestedLevel] }}>
                      Level {suggestedLevel} — {PROFICIENCY_LABELS[suggestedLevel]}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 italic">
                  {suggestedLevel < (selfRating || 0)
                    ? "Your response showed strong awareness but the evidence suggests you may still be developing this competency in practice. That's normal — awareness precedes mastery."
                    : "Your scenario response demonstrated stronger practice than your self-estimate. Consider updating your profile."}
                </p>
              </div>
            )}

            {/* What this level means */}
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                What Level {suggestedLevel} looks like
              </div>
              <ul className="space-y-1.5">
                {(item.proficiency_levels.find((p) => p.level === suggestedLevel)?.positive_indicators || []).map((ind, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-500 shrink-0 mt-0.5">✓</span>{ind}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next steps */}
          <div className="bg-[#1E1B4B] rounded-2xl p-6 text-white mb-4">
            <h3 className="font-semibold mb-3">What next?</h3>
            <div className="space-y-2 mb-5">
              {[
                { icon: "📎", label: "Add this to your Competency Passport", href: "/signup", cta: "Create profile" },
                { icon: "📚", label: "Explore what Level " + (Math.min(suggestedLevel + 1, 5)) + " looks like", href: `/library/${item.slug}`, cta: "View competency" },
                { icon: "🎯", label: "See which jobs match your profile", href: "/library/jobs", cta: "Browse jobs" },
              ].map((action) => (
                <div key={action.label} className="flex items-center justify-between bg-white/10 rounded-xl p-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span>{action.icon}</span>
                    <span>{action.label}</span>
                  </div>
                  <Link href={action.href}
                    className="text-xs font-semibold text-[#A78BFA] hover:text-white transition-colors shrink-0">
                    {action.cta} →
                  </Link>
                </div>
              ))}
            </div>
            <button onClick={() => { setStep(1); setSelfRating(null); setScenarioResponse(""); setEvidenceText(""); setSuggestedLevel(null); }}
              className="w-full bg-white/10 border border-white/20 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors">
              Retake Assessment
            </button>
          </div>

          <div className="text-center">
            <Link href="/assessment" className="text-sm text-[#7C3AED] hover:underline">
              ← Assess another competency
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
