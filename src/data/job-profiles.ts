import { JobProfile } from "@/lib/job-types";

export const jobProfiles: JobProfile[] = [
  // ─────────────────────────────────────────────
  // 1. Business Analyst
  // ─────────────────────────────────────────────
  {
    id: "jp-001",
    slug: "business-analyst",
    noc_code: "21101",
    oasis_code: "21101.00",
    title: "Business Analyst",
    common_aliases: ["BA", "Systems Analyst", "Business Systems Analyst", "Process Analyst"],
    teer_level: 1,
    noc_category: "Business & Management",
    industry_sectors: ["Technology", "Finance", "Government", "Healthcare", "Consulting"],
    role_summary:
      "Business Analysts bridge the gap between business needs and technical solutions. They analyze organizational processes, identify opportunities for improvement, and translate business requirements into actionable specifications for teams to implement.",
    main_duties: [
      "Gather and document business requirements through stakeholder interviews and workshops",
      "Analyze current-state processes and identify gaps, inefficiencies, or risks",
      "Develop process maps, user stories, use cases, and functional specifications",
      "Facilitate requirements sign-off with business and technical stakeholders",
      "Support project delivery by tracking requirements traceability and managing scope",
      "Conduct user acceptance testing and support change management activities",
      "Prepare business cases, feasibility assessments, and cost-benefit analyses",
    ],
    employment_requirements: [
      "Bachelor's degree in business administration, computer science, or related field",
      "1–3 years of experience in a business analysis or related role",
      "CBAP, CCBA, or PMI-PBA certification is an asset",
      "Proficiency in tools such as Jira, Confluence, Visio, or Lucidchart",
    ],
    salary_range_cad: "$65,000 – $95,000",
    competency_requirements: [
      { competency_slug: "communication", competency_name: "Communication", domain: "foundational", required_level: 3, is_essential: true, weight: 0.9 },
      { competency_slug: "problem-solving", competency_name: "Problem Solving", domain: "foundational", required_level: 3, is_essential: true, weight: 0.85 },
      { competency_slug: "results-orientation", competency_name: "Results Orientation", domain: "behavioural", required_level: 3, is_essential: true, weight: 0.8 },
      { competency_slug: "project-management", competency_name: "Project Management", domain: "technical", required_level: 2, is_essential: true, weight: 0.75 },
      { competency_slug: "ai-literacy", competency_name: "AI Literacy", domain: "digital", required_level: 2, is_essential: false, weight: 0.5, note: "Asset — increasingly expected" },
      { competency_slug: "values-and-ethics", competency_name: "Values and Ethics", domain: "values_ethics", required_level: 3, is_essential: true, weight: 0.7 },
    ],
    typical_career_progression: [
      { title: "Junior Business Analyst", noc_code: "21101" },
      { title: "Senior Business Analyst", noc_code: "21101" },
      { title: "Product Manager", noc_code: "10019" },
      { title: "IT Project Manager", noc_code: "21300" },
    ],
    status: "active",
  },

  // ─────────────────────────────────────────────
  // 2. Project Manager
  // ─────────────────────────────────────────────
  {
    id: "jp-002",
    slug: "project-manager",
    noc_code: "21300",
    oasis_code: "21300.00",
    title: "Project Manager",
    common_aliases: ["PM", "IT Project Manager", "Program Manager", "Delivery Lead"],
    teer_level: 1,
    noc_category: "Business & Management",
    industry_sectors: ["Technology", "Construction", "Finance", "Government", "Healthcare"],
    role_summary:
      "Project Managers plan, execute, and close projects on time, within scope, and within budget. They lead cross-functional teams, manage stakeholder expectations, and drive delivery of organizational priorities.",
    main_duties: [
      "Define project scope, objectives, deliverables, and success criteria",
      "Develop detailed project plans, schedules, and resource plans",
      "Lead and coordinate cross-functional project teams",
      "Monitor project progress, manage risks, and escalate issues proactively",
      "Communicate status, milestones, and blockers to stakeholders and executives",
      "Manage project budget, procurement, and vendor relationships",
      "Conduct project retrospectives and document lessons learned",
    ],
    employment_requirements: [
      "Bachelor's degree in business, engineering, or related field",
      "PMP, CAPM, or Prince2 certification strongly preferred",
      "3–5 years of project management experience",
      "Experience with Agile, Scrum, or hybrid delivery methodologies",
    ],
    salary_range_cad: "$80,000 – $120,000",
    competency_requirements: [
      { competency_slug: "project-management", competency_name: "Project Management", domain: "technical", required_level: 3, is_essential: true, weight: 1.0 },
      { competency_slug: "results-orientation", competency_name: "Results Orientation", domain: "behavioural", required_level: 3, is_essential: true, weight: 0.9 },
      { competency_slug: "achieve-results", competency_name: "Achieve Results", domain: "leadership", required_level: 3, is_essential: true, weight: 0.85 },
      { competency_slug: "communication", competency_name: "Communication", domain: "foundational", required_level: 3, is_essential: true, weight: 0.85 },
      { competency_slug: "problem-solving", competency_name: "Problem Solving", domain: "foundational", required_level: 3, is_essential: true, weight: 0.75 },
      { competency_slug: "values-and-ethics", competency_name: "Values and Ethics", domain: "values_ethics", required_level: 3, is_essential: true, weight: 0.7 },
    ],
    typical_career_progression: [
      { title: "Project Coordinator", noc_code: "13100" },
      { title: "Project Manager", noc_code: "21300" },
      { title: "Senior Project Manager", noc_code: "21300" },
      { title: "Program Director", noc_code: "10019" },
    ],
    status: "active",
  },

  // ─────────────────────────────────────────────
  // 3. HR Generalist
  // ─────────────────────────────────────────────
  {
    id: "jp-003",
    slug: "hr-generalist",
    noc_code: "11200",
    oasis_code: "11200.00",
    title: "Human Resources Generalist",
    common_aliases: ["HR Generalist", "HR Coordinator", "People Operations", "HR Business Partner"],
    teer_level: 1,
    noc_category: "Human Resources",
    industry_sectors: ["All sectors", "Government", "Healthcare", "Technology", "Retail"],
    role_summary:
      "HR Generalists support the full employee lifecycle — from recruitment and onboarding to performance management, employee relations, and offboarding. They serve as a trusted resource for both employees and managers.",
    main_duties: [
      "Support end-to-end recruitment: job posting, screening, interviewing, and offer management",
      "Onboard new employees and administer orientation programs",
      "Maintain employee records, HR systems, and compliance documentation",
      "Provide guidance on HR policies, employment standards, and workplace issues",
      "Support performance management cycles, goal-setting, and development conversations",
      "Coordinate learning and development programs",
      "Assist with compensation benchmarking, benefits administration, and payroll queries",
    ],
    employment_requirements: [
      "Bachelor's degree in human resources, business, or related field",
      "CPHR designation or working toward it is strongly preferred",
      "2–4 years of HR experience across multiple HR functions",
      "Knowledge of Canadian employment standards and human rights legislation",
    ],
    salary_range_cad: "$55,000 – $80,000",
    competency_requirements: [
      { competency_slug: "communication", competency_name: "Communication", domain: "foundational", required_level: 3, is_essential: true, weight: 0.9 },
      { competency_slug: "values-and-ethics", competency_name: "Values and Ethics", domain: "values_ethics", required_level: 3, is_essential: true, weight: 0.95 },
      { competency_slug: "results-orientation", competency_name: "Results Orientation", domain: "behavioural", required_level: 2, is_essential: true, weight: 0.75 },
      { competency_slug: "problem-solving", competency_name: "Problem Solving", domain: "foundational", required_level: 2, is_essential: true, weight: 0.7 },
      { competency_slug: "achieve-results", competency_name: "Achieve Results", domain: "leadership", required_level: 2, is_essential: false, weight: 0.6 },
    ],
    typical_career_progression: [
      { title: "HR Coordinator", noc_code: "13110" },
      { title: "HR Generalist", noc_code: "11200" },
      { title: "HR Business Partner", noc_code: "11200" },
      { title: "HR Manager", noc_code: "10011" },
    ],
    status: "active",
  },

  // ─────────────────────────────────────────────
  // 4. Software Developer
  // ─────────────────────────────────────────────
  {
    id: "jp-004",
    slug: "software-developer",
    noc_code: "21232",
    oasis_code: "21232.00",
    title: "Software Developer",
    common_aliases: ["Software Engineer", "Full Stack Developer", "Backend Developer", "Frontend Developer"],
    teer_level: 1,
    noc_category: "Technology",
    industry_sectors: ["Technology", "Finance", "Government", "Healthcare", "E-commerce"],
    role_summary:
      "Software Developers design, build, and maintain software systems and applications. They work across the full development lifecycle — from requirements analysis and architecture to coding, testing, deployment, and ongoing support.",
    main_duties: [
      "Design and implement software features based on technical and business requirements",
      "Write clean, maintainable, and well-documented code",
      "Conduct code reviews and contribute to architectural decisions",
      "Debug and resolve defects in existing systems",
      "Collaborate with product managers, designers, and QA engineers in Agile teams",
      "Integrate with APIs, databases, and third-party services",
      "Participate in system design, capacity planning, and security reviews",
    ],
    employment_requirements: [
      "Bachelor's degree in computer science, software engineering, or equivalent experience",
      "Proficiency in one or more programming languages (e.g., Python, JavaScript, Java, Go)",
      "Experience with version control (Git), CI/CD pipelines, and cloud platforms",
      "Strong understanding of data structures, algorithms, and system design",
    ],
    salary_range_cad: "$75,000 – $130,000",
    competency_requirements: [
      { competency_slug: "problem-solving", competency_name: "Problem Solving", domain: "foundational", required_level: 3, is_essential: true, weight: 0.95 },
      { competency_slug: "ai-literacy", competency_name: "AI Literacy", domain: "digital", required_level: 3, is_essential: true, weight: 0.85, note: "Expected at all levels in 2025+" },
      { competency_slug: "communication", competency_name: "Communication", domain: "foundational", required_level: 2, is_essential: true, weight: 0.7 },
      { competency_slug: "results-orientation", competency_name: "Results Orientation", domain: "behavioural", required_level: 2, is_essential: true, weight: 0.75 },
      { competency_slug: "values-and-ethics", competency_name: "Values and Ethics", domain: "values_ethics", required_level: 3, is_essential: true, weight: 0.7 },
    ],
    typical_career_progression: [
      { title: "Junior Developer", noc_code: "21232" },
      { title: "Intermediate Developer", noc_code: "21232" },
      { title: "Senior Developer", noc_code: "21232" },
      { title: "Engineering Manager", noc_code: "21300" },
    ],
    status: "active",
  },

  // ─────────────────────────────────────────────
  // 5. Data Analyst
  // ─────────────────────────────────────────────
  {
    id: "jp-005",
    slug: "data-analyst",
    noc_code: "21211",
    oasis_code: "21211.00",
    title: "Data Analyst",
    common_aliases: ["Business Intelligence Analyst", "BI Analyst", "Reporting Analyst", "Insights Analyst"],
    teer_level: 1,
    noc_category: "Technology",
    industry_sectors: ["Technology", "Finance", "Retail", "Healthcare", "Government"],
    role_summary:
      "Data Analysts collect, process, and analyze data to generate insights that drive business decisions. They translate complex data into accessible reports, dashboards, and recommendations for non-technical stakeholders.",
    main_duties: [
      "Extract, clean, and transform data from multiple sources using SQL and ETL tools",
      "Build and maintain dashboards and reports in BI tools (Tableau, Power BI, Looker)",
      "Conduct ad-hoc analyses to answer business questions and support decision-making",
      "Identify trends, anomalies, and opportunities within data sets",
      "Collaborate with data engineers and business stakeholders to define metrics",
      "Document data definitions, lineage, and analysis methodologies",
      "Present findings and recommendations to non-technical audiences",
    ],
    employment_requirements: [
      "Bachelor's degree in statistics, math, computer science, business, or related field",
      "Proficiency in SQL and at least one analytics language (Python or R)",
      "Experience with BI tools such as Tableau, Power BI, or Looker",
      "Strong quantitative reasoning and attention to detail",
    ],
    salary_range_cad: "$65,000 – $100,000",
    competency_requirements: [
      { competency_slug: "problem-solving", competency_name: "Problem Solving", domain: "foundational", required_level: 3, is_essential: true, weight: 0.9 },
      { competency_slug: "communication", competency_name: "Communication", domain: "foundational", required_level: 3, is_essential: true, weight: 0.85 },
      { competency_slug: "ai-literacy", competency_name: "AI Literacy", domain: "digital", required_level: 3, is_essential: true, weight: 0.85 },
      { competency_slug: "results-orientation", competency_name: "Results Orientation", domain: "behavioural", required_level: 2, is_essential: true, weight: 0.75 },
      { competency_slug: "values-and-ethics", competency_name: "Values and Ethics", domain: "values_ethics", required_level: 3, is_essential: true, weight: 0.7 },
    ],
    typical_career_progression: [
      { title: "Junior Data Analyst", noc_code: "21211" },
      { title: "Data Analyst", noc_code: "21211" },
      { title: "Senior Data Analyst", noc_code: "21211" },
      { title: "Data Scientist", noc_code: "21211" },
    ],
    status: "active",
  },

  // ─────────────────────────────────────────────
  // 6. Financial Analyst
  // ─────────────────────────────────────────────
  {
    id: "jp-006",
    slug: "financial-analyst",
    noc_code: "11101",
    oasis_code: "11101.00",
    title: "Financial Analyst",
    common_aliases: ["Finance Analyst", "FP&A Analyst", "Corporate Finance Analyst", "Investment Analyst"],
    teer_level: 1,
    noc_category: "Finance & Accounting",
    industry_sectors: ["Finance", "Banking", "Insurance", "Corporate", "Government"],
    role_summary:
      "Financial Analysts evaluate financial data, build models, and provide analysis to support budgeting, forecasting, investment decisions, and strategic planning. They are critical to helping organizations allocate resources effectively.",
    main_duties: [
      "Prepare monthly, quarterly, and annual financial reports and variance analyses",
      "Build and maintain financial models for budgeting, forecasting, and scenario planning",
      "Analyze business performance against targets and identify key drivers",
      "Support strategic planning processes with financial projections",
      "Conduct investment analysis, ROI assessments, and business case evaluations",
      "Prepare presentations for senior leadership and board-level stakeholders",
      "Ensure compliance with accounting standards, internal controls, and regulatory requirements",
    ],
    employment_requirements: [
      "Bachelor's degree in finance, accounting, economics, or business",
      "CFA, CPA, or working toward designation is strongly preferred",
      "2–4 years of financial analysis experience",
      "Advanced proficiency in Excel; experience with ERP systems (SAP, Oracle)",
    ],
    salary_range_cad: "$70,000 – $105,000",
    competency_requirements: [
      { competency_slug: "problem-solving", competency_name: "Problem Solving", domain: "foundational", required_level: 3, is_essential: true, weight: 0.9 },
      { competency_slug: "communication", competency_name: "Communication", domain: "foundational", required_level: 3, is_essential: true, weight: 0.85 },
      { competency_slug: "results-orientation", competency_name: "Results Orientation", domain: "behavioural", required_level: 3, is_essential: true, weight: 0.85 },
      { competency_slug: "ai-literacy", competency_name: "AI Literacy", domain: "digital", required_level: 2, is_essential: false, weight: 0.6, note: "Asset for automation and modelling" },
      { competency_slug: "values-and-ethics", competency_name: "Values and Ethics", domain: "values_ethics", required_level: 3, is_essential: true, weight: 0.9 },
    ],
    typical_career_progression: [
      { title: "Junior Financial Analyst", noc_code: "11101" },
      { title: "Financial Analyst", noc_code: "11101" },
      { title: "Senior Financial Analyst", noc_code: "11101" },
      { title: "Finance Manager", noc_code: "10010" },
    ],
    status: "active",
  },

  // ─────────────────────────────────────────────
  // 7. Marketing Coordinator
  // ─────────────────────────────────────────────
  {
    id: "jp-007",
    slug: "marketing-coordinator",
    noc_code: "11202",
    oasis_code: "11202.00",
    title: "Marketing Coordinator",
    common_aliases: ["Digital Marketing Coordinator", "Content Coordinator", "Marketing Associate", "Brand Coordinator"],
    teer_level: 2,
    noc_category: "Marketing & Communications",
    industry_sectors: ["Retail", "Technology", "Healthcare", "Non-profit", "Media"],
    role_summary:
      "Marketing Coordinators support the planning and execution of marketing campaigns across digital and traditional channels. They manage content calendars, coordinate with vendors and agencies, and track campaign performance.",
    main_duties: [
      "Coordinate the development and scheduling of content across social, email, and web channels",
      "Support campaign planning and execution in collaboration with the marketing team",
      "Manage relationships with vendors, printers, and creative agencies",
      "Track and report on campaign performance metrics using analytics tools",
      "Maintain brand consistency across all marketing materials and channels",
      "Support event coordination, trade shows, and promotional activities",
      "Manage marketing databases, CRM updates, and mailing list hygiene",
    ],
    employment_requirements: [
      "Bachelor's degree or college diploma in marketing, communications, or business",
      "1–3 years of marketing experience, including digital marketing",
      "Proficiency in social media platforms, email marketing tools (Mailchimp, HubSpot)",
      "Experience with Google Analytics, Meta Ads Manager, or similar tools",
    ],
    salary_range_cad: "$45,000 – $65,000",
    competency_requirements: [
      { competency_slug: "communication", competency_name: "Communication", domain: "foundational", required_level: 3, is_essential: true, weight: 0.9 },
      { competency_slug: "ai-literacy", competency_name: "AI Literacy", domain: "digital", required_level: 2, is_essential: true, weight: 0.8, note: "AI writing tools now standard in marketing" },
      { competency_slug: "results-orientation", competency_name: "Results Orientation", domain: "behavioural", required_level: 2, is_essential: true, weight: 0.75 },
      { competency_slug: "problem-solving", competency_name: "Problem Solving", domain: "foundational", required_level: 2, is_essential: false, weight: 0.6 },
      { competency_slug: "values-and-ethics", competency_name: "Values and Ethics", domain: "values_ethics", required_level: 2, is_essential: true, weight: 0.65 },
    ],
    typical_career_progression: [
      { title: "Marketing Coordinator", noc_code: "11202" },
      { title: "Marketing Specialist", noc_code: "11202" },
      { title: "Marketing Manager", noc_code: "10022" },
      { title: "Director of Marketing", noc_code: "10022" },
    ],
    status: "active",
  },

  // ─────────────────────────────────────────────
  // 8. Operations Manager
  // ─────────────────────────────────────────────
  {
    id: "jp-008",
    slug: "operations-manager",
    noc_code: "10019",
    oasis_code: "10019.00",
    title: "Operations Manager",
    common_aliases: ["Operations Lead", "General Manager", "Business Operations Manager", "Site Manager"],
    teer_level: 0,
    noc_category: "Business & Management",
    industry_sectors: ["Manufacturing", "Retail", "Logistics", "Technology", "Healthcare"],
    role_summary:
      "Operations Managers oversee the day-to-day running of an organization or business unit. They drive efficiency, manage teams, and ensure the organization delivers on its operational commitments — on time, on budget, and to standard.",
    main_duties: [
      "Oversee daily operations across departments to ensure smooth service delivery",
      "Set operational targets, KPIs, and performance standards for the team",
      "Manage staff scheduling, capacity planning, and resource allocation",
      "Identify and implement process improvements to increase efficiency and reduce cost",
      "Manage vendor relationships, contracts, and supply chain issues",
      "Report on operational performance to senior leadership",
      "Ensure compliance with health, safety, and regulatory requirements",
    ],
    employment_requirements: [
      "Bachelor's degree in business administration, operations management, or related field",
      "5+ years of experience in operations or management roles",
      "Demonstrated experience leading teams and managing budgets",
      "Lean, Six Sigma, or operations certification is an asset",
    ],
    salary_range_cad: "$85,000 – $130,000",
    competency_requirements: [
      { competency_slug: "achieve-results", competency_name: "Achieve Results", domain: "leadership", required_level: 4, is_essential: true, weight: 1.0 },
      { competency_slug: "results-orientation", competency_name: "Results Orientation", domain: "behavioural", required_level: 4, is_essential: true, weight: 0.9 },
      { competency_slug: "project-management", competency_name: "Project Management", domain: "technical", required_level: 3, is_essential: true, weight: 0.8 },
      { competency_slug: "communication", competency_name: "Communication", domain: "foundational", required_level: 4, is_essential: true, weight: 0.85 },
      { competency_slug: "problem-solving", competency_name: "Problem Solving", domain: "foundational", required_level: 3, is_essential: true, weight: 0.8 },
      { competency_slug: "values-and-ethics", competency_name: "Values and Ethics", domain: "values_ethics", required_level: 3, is_essential: true, weight: 0.75 },
    ],
    typical_career_progression: [
      { title: "Team Lead / Supervisor", noc_code: "12011" },
      { title: "Operations Manager", noc_code: "10019" },
      { title: "Director of Operations", noc_code: "10019" },
      { title: "VP Operations / COO", noc_code: "00011" },
    ],
    status: "active",
  },
];

export function getJobProfileBySlug(slug: string): JobProfile | undefined {
  return jobProfiles.find((j) => j.slug === slug);
}

export function searchJobProfiles(query: string): JobProfile[] {
  const q = query.toLowerCase();
  return jobProfiles.filter(
    (j) =>
      j.title.toLowerCase().includes(q) ||
      j.noc_category.toLowerCase().includes(q) ||
      j.common_aliases.some((a) => a.toLowerCase().includes(q)) ||
      j.industry_sectors.some((s) => s.toLowerCase().includes(q)) ||
      j.role_summary.toLowerCase().includes(q)
  );
}
