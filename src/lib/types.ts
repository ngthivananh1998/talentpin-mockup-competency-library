export type Domain =
  | "foundational"
  | "behavioural"
  | "leadership"
  | "technical"
  | "digital"
  | "values_ethics";

export type CompetencyType =
  // Foundational
  | "adaptability" | "collaboration" | "communication" | "creativity_innovation"
  | "digital_skill" | "numeracy" | "problem_solving" | "reading" | "writing"
  // Behavioural
  | "results_action" | "thinking_judgment" | "people_relationships"
  | "client_partner" | "personal_effectiveness" | "communication_influence"
  // Leadership
  | "vision_strategy" | "mobilizing_people" | "integrity_respect"
  | "collaboration_stakeholders" | "innovation_change" | "achieving_results"
  // Technical
  | "data_analysis" | "finance" | "hr_people" | "project_operations"
  | "communication_content" | "technology" | "policy_compliance" | "client_service"
  // Digital
  | "devices_tools" | "digital_information" | "online_collaboration"
  | "safe_practices" | "ai_literacy" | "data_tools"
  // Values
  | "public_service_values" | "anti_racism_inclusion" | "cross_cultural"
  | "professional_integrity" | "environmental_stewardship";

export type ProficiencyLabel =
  | "Foundation" | "Working" | "Proficient" | "Advanced" | "Expert / Strategist";

export type ValidationStatus = "validated" | "estimated" | "self-assessed";

export interface ProficiencyLevel {
  level: 1 | 2 | 3 | 4 | 5;
  label: ProficiencyLabel;
  esdc_equivalent?: string; // e.g. "Equivalent to ESDC Intermediate"
  summary: string;
  observable_behaviors: string[];
  positive_indicators: string[];
  risk_indicators: string[];
  evidence_expectations: string[];
  typical_role_examples: string[];
}

export interface EvidencePrompt {
  level: 1 | 2 | 3 | 4 | 5;
  prompt_type: "scenario" | "artifact" | "sat" | "feedback";
  prompt_text: string;
  assessment_method: "scenario_response" | "work_sample" | "structured_interview" | "endorsement";
  scoring_anchor?: string;
}

export interface InternalCrosswalk {
  target_slug: string;
  target_name: string;
  target_domain: Domain;
  mapping_strength: "primary" | "secondary" | "contextual";
  role_context?: string;
}

// Values & Ethics uses a special 3-tier compliance model
export type ComplianceTier = "Aware" | "Practising" | "Modelling";
export interface ComplianceLevel {
  tier: ComplianceTier;
  description: string;
  indicators: string[];
}

export interface CompetencyItem {
  id: string;
  slug: string;
  name: string;
  abbreviation?: string;
  domain: Domain;
  type: CompetencyType;
  cluster: string;
  category?: string;
  definition: string;
  why_it_matters: string;
  components: string[];
  applicable_roles: ("all" | "individual_contributor" | "supervisor" | "manager" | "director" | "executive")[];
  teer_relevance: number[];
  noc_domains: string[];
  source_frameworks: string[];
  oasis_code?: string;
  proficiency_levels: ProficiencyLevel[]; // 5 levels; Values domain uses compliance_levels instead
  compliance_levels?: ComplianceLevel[];  // Only for values_ethics domain
  evidence_prompts: EvidencePrompt[];
  crosswalks: InternalCrosswalk[];
  version: string;
  status: "active" | "draft" | "deprecated";
}

export const DOMAIN_META: Record<Domain, {
  label: string;
  description: string;
  color: string;
  lightColor: string;
  icon: string;
  source: string;
  count: number;
}> = {
  foundational: {
    label: "Foundational Skills",
    description: "Core skills every Canadian worker needs — communication, collaboration, numeracy, digital, and more.",
    color: "#0EA5E9",
    lightColor: "#E0F2FE",
    icon: "🧱",
    source: "ESDC Skills for Success",
    count: 9,
  },
  behavioural: {
    label: "Behavioural Competencies",
    description: "How you work — the observable patterns of behaviour that distinguish effective performance.",
    color: "#7C3AED",
    lightColor: "#EDE9FE",
    icon: "🤝",
    source: "IRCC Dictionary · CRA · BC Public Service",
    count: 28,
  },
  leadership: {
    label: "Leadership Competencies",
    description: "How you lead yourself and others — from self-leadership to setting organizational direction.",
    color: "#D97706",
    lightColor: "#FEF3C7",
    icon: "🧭",
    source: "Treasury Board of Canada Secretariat",
    count: 6,
  },
  technical: {
    label: "Technical Competencies",
    description: "What you do — functional expertise tied to occupation types and industry sectors.",
    color: "#059669",
    lightColor: "#D1FAE5",
    icon: "⚙️",
    source: "OaSIS 2025 · IRCC Technical Dictionary · NOC 2021",
    count: 40,
  },
  digital: {
    label: "Digital Competencies",
    description: "Ability to use digital technology safely and effectively — from basic tools to AI literacy.",
    color: "#2563EB",
    lightColor: "#DBEAFE",
    icon: "💻",
    source: "ESDC Skills for Success · OaSIS 2025",
    count: 10,
  },
  values_ethics: {
    label: "Values & Ethics",
    description: "The professional standards and ethical principles that underpin trustworthy work in Canada.",
    color: "#DB2777",
    lightColor: "#FCE7F3",
    icon: "⚖️",
    source: "IRCC · Public Service Commission · BC Indigenous Relations",
    count: 6,
  },
};

export const PROFICIENCY_LABELS: Record<1 | 2 | 3 | 4 | 5, ProficiencyLabel> = {
  1: "Foundation",
  2: "Working",
  3: "Proficient",
  4: "Advanced",
  5: "Expert / Strategist",
};

export const PROFICIENCY_COLORS: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: "#9CA3AF",
  2: "#60A5FA",
  3: "#34D399",
  4: "#A78BFA",
  5: "#F59E0B",
};
