import Link from "next/link";
import { DOMAIN_META, Domain } from "@/lib/types";

const domains = Object.entries(DOMAIN_META) as [Domain, typeof DOMAIN_META[Domain]][];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#EDE9FE] text-[#7C3AED] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span>🇨🇦</span> Canada&apos;s Competency Intelligence Platform
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1E1B4B] leading-tight mb-6">
              A shared language for{" "}
              <span className="text-[#7C3AED]">talent in Canada</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              TalentPin&apos;s Competency Library bridges the gap between how Canadians describe themselves
              and how organizations hire, develop, and retain talent — built on national frameworks
              from IRCC, ESDC, TBS, OaSIS, and NOC 2021.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/library"
                className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6D28D9] transition-colors"
              >
                Explore the Library
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Module Induction */}
      <section id="how-it-works" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl font-bold text-[#1E1B4B] mb-3">
              What is the Competency Library?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The library is TalentPin&apos;s reference system for skills and competencies — organized around
              how Canadian institutions actually define and use these concepts.
            </p>
          </div>

          {/* Two concepts */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-[#EDE9FE] rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg">🎯</span>
              </div>
              <h3 className="font-semibold text-[#1E1B4B] mb-2">Competency</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                An observable pattern of behaviour that applies knowledge and skills to produce effective
                performance outcomes. Competencies are how organizations hire, develop, and evaluate people.
              </p>
              <div className="mt-4 text-xs text-gray-400 italic">
                Source: IRCC · CRA · TBS · PSC · ESDC
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-[#E0F2FE] rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg">🛠️</span>
              </div>
              <h3 className="font-semibold text-[#1E1B4B] mb-2">Skill</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A discrete capability you can practice and improve — like writing, presenting, or using Excel.
                Transferable skills move across roles and industries. They are building blocks of competencies.
              </p>
              <div className="mt-4 text-xs text-gray-400 italic">
                Source: ESDC Skills &amp; Competencies Taxonomy 2022
              </div>
            </div>
          </div>

          {/* How TalentPin uses both */}
          <div className="bg-[#1E1B4B] rounded-2xl p-8 text-white mb-12">
            <h3 className="font-semibold text-lg mb-2">
              TalentPin uses both — for different purposes
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Canadians naturally speak in skills (&ldquo;I&apos;m good at communication&rdquo;). Organizations hire with
              competencies (&ldquo;We need someone who demonstrates Results Orientation at Level 3&rdquo;).
              The library connects both so nothing gets lost in translation.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: "🔍", title: "Search & browse", desc: "Use skill language you already know" },
                { icon: "📊", title: "Assess & validate", desc: "Competencies with behavioural evidence" },
                { icon: "🎯", title: "Match to jobs", desc: "Engine runs on competency signals" },
              ].map((item) => (
                <div key={item.title} className="bg-white/10 rounded-xl p-4">
                  <div className="text-xl mb-2">{item.icon}</div>
                  <div className="font-medium text-sm mb-1">{item.title}</div>
                  <div className="text-gray-400 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Proficiency scale */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-12">
            <h3 className="font-semibold text-[#1E1B4B] mb-1">The Proficiency Scale</h3>
            <p className="text-sm text-gray-500 mb-6">
              Every competency is measured across 5 levels — from first exposure to strategic mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              {([
                { level: 1, label: "Foundation", desc: "Applies with guidance", color: "#9CA3AF" },
                { level: 2, label: "Working", desc: "Applies independently", color: "#60A5FA" },
                { level: 3, label: "Proficient", desc: "Adapts to ambiguity", color: "#34D399" },
                { level: 4, label: "Advanced", desc: "Influences & improves", color: "#A78BFA" },
                { level: 5, label: "Expert", desc: "Sets direction", color: "#F59E0B" },
              ] as const).map((l) => (
                <div key={l.level} className="flex-1 rounded-lg p-3 text-center" style={{ backgroundColor: `${l.color}15` }}>
                  <div className="text-xs font-bold mb-0.5" style={{ color: l.color }}>L{l.level}</div>
                  <div className="text-xs font-semibold text-gray-700">{l.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{l.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 italic">
              Values &amp; Ethics uses a separate compliance model: Aware → Practising → Modelling
            </p>
          </div>
        </div>
      </section>

      {/* Domain Overview */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl font-bold text-[#1E1B4B] mb-3">Six competency domains</h2>
            <p className="text-gray-600 text-sm">
              The library is organized into six domains, covering ~99 competencies across all career stages and sectors.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map(([domain, meta]) => (
              <Link
                key={domain}
                href={`/library?domain=${domain}`}
                className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-gray-200 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-4"
                  style={{ backgroundColor: meta.lightColor }}
                >
                  {meta.icon}
                </div>
                <div className="font-semibold text-[#1E1B4B] mb-1 group-hover:text-[#7C3AED] transition-colors">
                  {meta.label}
                </div>
                <div className="text-sm text-gray-500 mb-3 leading-relaxed">{meta.description}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{meta.count} competencies</span>
                  <span className="text-xs font-medium" style={{ color: meta.color }}>
                    Browse →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#7C3AED] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to build your competency profile?
          </h2>
          <p className="text-purple-200 mb-8 max-w-xl mx-auto">
            Start by exploring the library — then take an assessment to validate your level with real evidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/library"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#7C3AED] px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Explore the Library
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Create free profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
