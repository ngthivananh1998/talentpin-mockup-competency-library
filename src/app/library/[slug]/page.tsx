import { notFound } from "next/navigation";
import Link from "next/link";
import { getCompetencyBySlug } from "@/data/competencies";
import { DOMAIN_META, PROFICIENCY_COLORS, PROFICIENCY_LABELS } from "@/lib/types";
import DomainBadge from "@/components/ui/DomainBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CompetencyDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getCompetencyBySlug(slug);
  if (!item) notFound();

  const meta = DOMAIN_META[item.domain];
  const isValuesEthics = item.domain === "values_ethics" && item.compliance_levels;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-[#7C3AED]">Home</Link>
        <span>/</span>
        <Link href="/library" className="hover:text-[#7C3AED]">Library</Link>
        <span>/</span>
        <span className="text-gray-600 font-medium">{item.name}</span>
      </div>

      {/* Header card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <DomainBadge domain={item.domain} />
          {item.abbreviation && (
            <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
              {item.abbreviation}
            </span>
          )}
          <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
            {item.cluster}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#1E1B4B] mb-3">{item.name}</h1>
        <p className="text-gray-600 leading-relaxed mb-4">{item.definition}</p>

        {/* Why it matters */}
        <div className="bg-[#EDE9FE] rounded-xl p-4">
          <div className="text-xs font-semibold text-[#7C3AED] uppercase tracking-wide mb-1">
            Why it matters in Canada
          </div>
          <p className="text-sm text-[#4C1D95] leading-relaxed">{item.why_it_matters}</p>
        </div>
      </div>

      {/* Components */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
        <h2 className="font-semibold text-[#1E1B4B] mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-md flex items-center justify-center text-xs" style={{ backgroundColor: meta.lightColor, color: meta.color }}>
            📋
          </span>
          Components
        </h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {item.components.map((comp, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                style={{ backgroundColor: meta.lightColor, color: meta.color }}>
                {i + 1}
              </span>
              {comp}
            </div>
          ))}
        </div>
      </div>

      {/* Proficiency Levels or Compliance Tiers */}
      {isValuesEthics ? (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-[#1E1B4B] flex items-center gap-2">
              <span>⚖️</span> Compliance Model
            </h2>
            <span className="text-xs text-gray-400 italic">
              Values & Ethics uses a threshold model, not a proficiency scale
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Values and Ethics is assessed as a compliance threshold — not a progression.
            All employees are expected to reach <strong>Practising</strong> as a baseline.
            <strong> Modelling</strong> is the standard for leadership roles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {item.compliance_levels!.map((cl, i) => {
              const colors = ["#6B7280", "#059669", "#7C3AED"];
              const color = colors[i];
              return (
                <div key={cl.tier} className="flex-1 rounded-xl border p-4" style={{ borderColor: `${color}30`, backgroundColor: `${color}08` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                    <span className="font-semibold text-sm" style={{ color }}>{cl.tier}</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">{cl.description}</p>
                  <ul className="space-y-1">
                    {cl.indicators.map((ind, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs text-gray-500">
                        <span className="mt-0.5 shrink-0" style={{ color }}>✓</span>
                        {ind}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="font-semibold text-[#1E1B4B] mb-1 flex items-center gap-2">
            <span>📈</span> Proficiency Levels
          </h2>
          <p className="text-sm text-gray-400 mb-6">All 5 levels shown — from first exposure to strategic mastery.</p>

          <div className="space-y-4">
            {item.proficiency_levels.map((pl) => {
              const color = PROFICIENCY_COLORS[pl.level];
              const label = PROFICIENCY_LABELS[pl.level];
              return (
                <details key={pl.level} className="group rounded-xl border overflow-hidden" style={{ borderColor: `${color}40` }}>
                  <summary className="flex items-center gap-3 px-4 py-3 cursor-pointer select-none"
                    style={{ backgroundColor: `${color}10` }}>
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ backgroundColor: color }}>
                      {pl.level}
                    </span>
                    <div className="flex-1">
                      <span className="font-semibold text-sm text-gray-800">Level {pl.level} — {label}</span>
                      {pl.esdc_equivalent && (
                        <span className="ml-2 text-xs text-gray-400 italic">{pl.esdc_equivalent}</span>
                      )}
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </summary>

                  <div className="px-4 pb-4 pt-2 space-y-4">
                    {/* Summary */}
                    <p className="text-sm text-gray-600 leading-relaxed italic border-l-2 pl-3"
                      style={{ borderColor: color }}>
                      {pl.summary}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Observable Behaviors */}
                      {pl.observable_behaviors.length > 0 && (
                        <div>
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Observable Behaviours
                          </div>
                          <ul className="space-y-1.5">
                            {pl.observable_behaviors.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                                <span className="mt-0.5 text-blue-400 shrink-0">◉</span>{b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Positive Indicators */}
                      {pl.positive_indicators.length > 0 && (
                        <div>
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Positive Indicators
                          </div>
                          <ul className="space-y-1.5">
                            {pl.positive_indicators.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                                <span className="mt-0.5 text-green-500 shrink-0">✓</span>{b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Risk Indicators */}
                    {pl.risk_indicators.length > 0 && (
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Risk Indicators
                        </div>
                        <ul className="space-y-1.5">
                          {pl.risk_indicators.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                              <span className="mt-0.5 text-amber-400 shrink-0">⚠</span>{b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Evidence Expectations */}
                    {pl.evidence_expectations.length > 0 && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Evidence Expected at This Level
                        </div>
                        <ul className="space-y-1">
                          {pl.evidence_expectations.map((e, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                              <span className="mt-0.5 text-purple-400 shrink-0">📎</span>{e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Typical Roles */}
                    {pl.typical_role_examples.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {pl.typical_role_examples.map((r, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
                            {r}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      )}

      {/* Evidence Prompts */}
      {item.evidence_prompts.length > 0 && (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="font-semibold text-[#1E1B4B] mb-1 flex items-center gap-2">
            <span>🧪</span> Assessment Prompts
          </h2>
          <p className="text-sm text-gray-400 mb-5">
            Use these prompts to assess or validate this competency. Self-rating alone is not accepted as evidence.
          </p>
          <div className="space-y-4">
            {item.evidence_prompts.map((ep, i) => {
              const typeColors: Record<string, string> = {
                scenario: "#7C3AED",
                artifact: "#059669",
                sat: "#2563EB",
                feedback: "#DB2777",
              };
              const typeLabels: Record<string, string> = {
                scenario: "Scenario Question",
                artifact: "Work Artifact",
                sat: "Situation–Action–Outcome",
                feedback: "Feedback / Endorsement",
              };
              const methodLabels: Record<string, string> = {
                scenario_response: "Written or spoken response",
                work_sample: "Upload a work sample",
                structured_interview: "Structured interview",
                endorsement: "Third-party endorsement",
              };
              const color = typeColors[ep.prompt_type];
              return (
                <div key={i} className="rounded-xl border p-4" style={{ borderColor: `${color}30` }}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${color}15`, color }}>
                      {typeLabels[ep.prompt_type]}
                    </span>
                    <span className="text-xs text-gray-400">
                      Level {ep.level} · {methodLabels[ep.assessment_method]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">{ep.prompt_text}</p>
                  {ep.scoring_anchor && (
                    <div className="bg-gray-50 rounded-lg p-3 mt-2">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                        Scoring guide
                      </div>
                      <p className="text-xs text-gray-500 italic">{ep.scoring_anchor}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Crosswalks */}
      {item.crosswalks.length > 0 && (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="font-semibold text-[#1E1B4B] mb-1 flex items-center gap-2">
            <span>🔗</span> Related Competencies
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Competencies that share skills or overlap in context with this one.
          </p>
          <div className="space-y-2">
            {item.crosswalks.map((cw, i) => {
              const targetMeta = DOMAIN_META[cw.target_domain];
              const strengthColors = { primary: "#7C3AED", secondary: "#059669", contextual: "#D97706" };
              const strengthColor = strengthColors[cw.mapping_strength];
              return (
                <Link
                  key={i}
                  href={`/library/${cw.target_slug}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group"
                >
                  <span className="text-lg w-8 text-center">{targetMeta.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[#1E1B4B] group-hover:text-[#7C3AED] transition-colors">
                      {cw.target_name}
                    </div>
                    {cw.role_context && (
                      <div className="text-xs text-gray-400">{cw.role_context}</div>
                    )}
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: `${strengthColor}15`, color: strengthColor }}>
                    {cw.mapping_strength}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Source & metadata */}
      <div className="bg-gray-50 rounded-2xl p-5 text-sm text-gray-400 flex flex-col sm:flex-row gap-4 justify-between">
        <div>
          <div className="font-medium text-gray-500 mb-1">Source frameworks</div>
          <div className="flex flex-wrap gap-1.5">
            {item.source_frameworks.map((s) => (
              <span key={s} className="bg-white border border-gray-200 px-2 py-0.5 rounded text-xs">{s}</span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs">Version {item.version}</div>
          {item.oasis_code && <div className="text-xs">OaSIS: {item.oasis_code}</div>}
        </div>
      </div>

      {/* Back link */}
      <div className="mt-8">
        <Link href="/library" className="text-sm text-[#7C3AED] hover:underline flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Library
        </Link>
      </div>
    </div>
  );
}
