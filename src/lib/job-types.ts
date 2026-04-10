export interface JobCompetencyRequirement {
  competency_slug: string;
  competency_name: string;
  domain: string;
  required_level: 1 | 2 | 3 | 4 | 5;
  is_essential: boolean;
  weight: number; // 0.0–1.0
  note?: string;
}

export interface JobProfile {
  id: string;
  slug: string;
  noc_code: string;
  oasis_code?: string;
  title: string;
  common_aliases: string[];
  teer_level: 0 | 1 | 2 | 3 | 4 | 5;
  noc_category: string;
  industry_sectors: string[];
  role_summary: string;
  main_duties: string[];
  employment_requirements: string[];
  salary_range_cad?: string;
  competency_requirements: JobCompetencyRequirement[];
  typical_career_progression: { title: string; noc_code: string }[];
  status: "active" | "draft";
}

export const TEER_LABELS: Record<number, string> = {
  0: "TEER 0 — Management",
  1: "TEER 1 — University degree",
  2: "TEER 2 — College diploma / apprenticeship (2+ yrs)",
  3: "TEER 3 — College diploma / apprenticeship (<2 yrs)",
  4: "TEER 4 — High school diploma",
  5: "TEER 5 — No formal education required",
};

export const NOC_CATEGORY_COLORS: Record<string, { color: string; light: string }> = {
  "Business & Management":    { color: "#7C3AED", light: "#EDE9FE" },
  "Finance & Accounting":     { color: "#059669", light: "#D1FAE5" },
  "Technology":               { color: "#2563EB", light: "#DBEAFE" },
  "Human Resources":          { color: "#DB2777", light: "#FCE7F3" },
  "Marketing & Communications":{ color: "#D97706", light: "#FEF3C7" },
  "Operations & Admin":       { color: "#0EA5E9", light: "#E0F2FE" },
  "Healthcare":               { color: "#DC2626", light: "#FEE2E2" },
  "Government & Policy":      { color: "#4B5563", light: "#F3F4F6" },
};
