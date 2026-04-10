import { CompetencyItem } from "@/lib/types";

export const competencies: CompetencyItem[] = [
  // ─────────────────────────────────────────────
  // 1. FOUNDATIONAL — Communication
  // ─────────────────────────────────────────────
  {
    id: "f-001",
    slug: "communication",
    name: "Communication",
    domain: "foundational",
    type: "communication",
    cluster: "Core Transferable Skills",
    category: "Communication Skills",
    definition:
      "The ability to receive, understand, and share information clearly and effectively across different contexts, audiences, and modes — including speaking, listening, reading, and writing.",
    why_it_matters:
      "Every workplace depends on clear communication. It underpins collaboration, client relationships, and the ability to influence decisions — making it one of the most universally valued capabilities across all occupations in Canada.",
    components: [
      "Listen with intention",
      "Listen to understand",
      "Speak with clarity",
      "Speak with purpose",
      "Adapt to audience and context",
      "Adapt to different communication modes",
    ],
    applicable_roles: ["all"],
    teer_relevance: [0, 1, 2, 3, 4, 5],
    noc_domains: ["Business", "Health", "Government", "Technology", "Education", "Trades"],
    source_frameworks: ["ESDC Skills for Success"],
    proficiency_levels: [
      {
        level: 1,
        label: "Foundation",
        esdc_equivalent: "Below Entry — ESDC Skills for Success",
        summary: "Communicates familiar topics with support; struggles in unfamiliar or complex situations.",
        observable_behaviors: [
          "Follows verbal instructions with clarification from others",
          "Speaks in simple sentences on familiar topics",
          "Listens but may miss key points in longer conversations",
          "Writes basic messages with frequent errors",
        ],
        positive_indicators: [
          "Asks questions when instructions are unclear",
          "Makes genuine effort to understand before responding",
        ],
        risk_indicators: [
          "Avoids speaking up in group settings",
          "Misses important details in verbal or written instructions",
        ],
        evidence_expectations: [
          "Short written message or email with context provided",
          "Oral response to a simple scenario prompt",
        ],
        typical_role_examples: ["Student", "First-time volunteer", "Entry-level trainee"],
      },
      {
        level: 2,
        label: "Working",
        esdc_equivalent: "Entry — ESDC Skills for Success",
        summary: "Communicates clearly on familiar topics independently; adapts to straightforward professional contexts.",
        observable_behaviors: [
          "Delivers clear verbal messages in one-on-one and small group settings",
          "Writes professional emails and basic reports without major errors",
          "Listens actively and reflects back key points",
          "Adjusts language for different audiences with prompting",
        ],
        positive_indicators: [
          "Checks for understanding after delivering information",
          "Uses appropriate tone in written and verbal communication",
        ],
        risk_indicators: [
          "Struggles when communication context shifts unexpectedly",
          "Written work may lack structure in complex topics",
        ],
        evidence_expectations: [
          "A work email or memo with context explanation",
          "Scenario response describing a communication challenge resolved",
        ],
        typical_role_examples: ["Administrative assistant", "Customer service rep", "Recent graduate"],
      },
      {
        level: 3,
        label: "Proficient",
        esdc_equivalent: "Intermediate — ESDC Skills for Success",
        summary: "Communicates effectively across contexts; tailors message and medium to situation and audience.",
        observable_behaviors: [
          "Presents clearly to groups with varied expertise levels",
          "Writes structured documents (reports, proposals, briefs) independently",
          "Actively facilitates dialogue and draws out quieter voices",
          "Adjusts communication style for culture, context, and urgency",
        ],
        positive_indicators: [
          "Frames complex information accessibly without losing accuracy",
          "Seeks feedback on communication effectiveness and acts on it",
        ],
        risk_indicators: [
          "May over-communicate detail in high-stakes or time-pressured situations",
        ],
        evidence_expectations: [
          "A presentation deck or report with explanation of audience and goal",
          "SAT: situation where communication approach changed the outcome",
        ],
        typical_role_examples: ["Project coordinator", "Business analyst", "HR generalist"],
      },
      {
        level: 4,
        label: "Advanced",
        esdc_equivalent: "Advanced — ESDC Skills for Success",
        summary: "Uses communication strategically to influence outcomes; coaches others on communication effectiveness.",
        observable_behaviors: [
          "Crafts persuasive narratives that align stakeholders around shared goals",
          "Navigates difficult conversations with diplomacy and clarity",
          "Coaches team members to improve their communication",
          "Represents the organization credibly in external or high-stakes settings",
        ],
        positive_indicators: [
          "Turns complex or contentious topics into clear, shared understanding",
          "Proactively identifies communication breakdowns and repairs them",
        ],
        risk_indicators: [
          "May default to telling rather than listening when under pressure",
        ],
        evidence_expectations: [
          "Example of influencing a decision through communication strategy",
          "Manager endorsement on a specific high-stakes communication situation",
        ],
        typical_role_examples: ["Manager", "Senior advisor", "Communications lead"],
      },
      {
        level: 5,
        label: "Expert / Strategist",
        esdc_equivalent: "Expert — trains and develops others",
        summary: "Shapes organizational communication culture; designs systems and standards for how teams communicate.",
        observable_behaviors: [
          "Develops communication frameworks and standards used across the organization",
          "Advises senior leaders on high-stakes communications strategy",
          "Designs training and development programs to build communication capability",
          "Represents the organization at a national or cross-sector level",
        ],
        positive_indicators: [
          "Creates lasting improvements in how the organization communicates",
          "Is sought out by others as a communication authority",
        ],
        risk_indicators: [
          "May set standards too high for early-career staff without scaffolding support",
        ],
        evidence_expectations: [
          "Published content, policy, or curriculum with organizational impact",
          "Peer recognition or formal role as communication leader",
        ],
        typical_role_examples: ["Director of Communications", "Chief of Staff", "Senior PR strategist"],
      },
    ],
    evidence_prompts: [
      {
        level: 3,
        prompt_type: "scenario",
        prompt_text:
          "You need to explain a complex process change to a team that includes both technical and non-technical members. How do you approach this?",
        assessment_method: "scenario_response",
        scoring_anchor:
          "L3: Describes tailoring the message by audience. L4: Also describes strategy for getting buy-in and handling resistance.",
      },
      {
        level: 3,
        prompt_type: "sat",
        prompt_text:
          "Describe a time when a miscommunication caused a problem at work or school. What happened, what did you do, and what was the outcome?",
        assessment_method: "scenario_response",
      },
      {
        level: 2,
        prompt_type: "artifact",
        prompt_text: "Upload a work email, memo, or short report you wrote. Briefly explain the audience and goal.",
        assessment_method: "work_sample",
      },
    ],
    crosswalks: [
      {
        target_slug: "effective-interactive-communication",
        target_name: "Effective Interactive Communication",
        target_domain: "behavioural",
        mapping_strength: "primary",
      },
      {
        target_slug: "impact-and-influence",
        target_name: "Impact and Influence",
        target_domain: "behavioural",
        mapping_strength: "secondary",
        role_context: "For client-facing or stakeholder-heavy roles",
      },
      {
        target_slug: "written-communication-skills",
        target_name: "Written Communication Skills",
        target_domain: "technical",
        mapping_strength: "primary",
        role_context: "For roles requiring formal documentation",
      },
    ],
    version: "1.0",
    status: "active",
  },

  // ─────────────────────────────────────────────
  // 2. BEHAVIOURAL — Results Orientation
  // ─────────────────────────────────────────────
  {
    id: "b-001",
    slug: "results-orientation",
    name: "Results Orientation",
    abbreviation: "RO",
    domain: "behavioural",
    type: "results_action",
    cluster: "Results & Action",
    definition:
      "The ability to focus on outcomes, set clear goals, and persist through obstacles to deliver high-quality results. Includes taking personal accountability for performance and continuously seeking ways to improve.",
    why_it_matters:
      "Canadian employers consistently rank results-orientation among their top hiring criteria. It signals that a person can be trusted to follow through — essential for any role where delivery matters.",
    components: [
      "Set clear performance goals",
      "Monitor own progress against standards",
      "Persist through setbacks and ambiguity",
      "Take personal accountability for outcomes",
      "Identify and act on opportunities to improve",
      "Deliver consistently to quality standards",
    ],
    applicable_roles: ["all"],
    teer_relevance: [0, 1, 2, 3],
    noc_domains: ["Business", "Finance", "Technology", "Government", "Health"],
    source_frameworks: ["IRCC Competency Dictionary", "CRA Competencies"],
    proficiency_levels: [
      {
        level: 1,
        label: "Foundation",
        summary: "Completes assigned tasks with guidance; requires direction to prioritize and follow through.",
        observable_behaviors: [
          "Completes clearly defined tasks when given step-by-step direction",
          "Asks for help when stuck rather than stopping work",
          "Meets basic deadlines with supervision",
        ],
        positive_indicators: [
          "Shows willingness to complete tasks fully before moving on",
          "Notifies supervisor when running behind",
        ],
        risk_indicators: [
          "May leave tasks incomplete when the path forward is unclear",
          "Struggles to self-prioritize without external structure",
        ],
        evidence_expectations: [
          "Description of a completed task and the steps taken",
        ],
        typical_role_examples: ["Student", "Trainee", "Volunteer"],
      },
      {
        level: 2,
        label: "Working",
        summary: "Sets personal work goals and delivers on routine tasks independently; responds well to feedback.",
        observable_behaviors: [
          "Completes routine tasks on time without supervision",
          "Sets daily and weekly priorities without being asked",
          "Follows up on incomplete work and closes open items",
          "Accepts performance feedback constructively",
        ],
        positive_indicators: [
          "Tracks own workload and raises issues before they become problems",
          "Maintains quality standards consistently",
        ],
        risk_indicators: [
          "May prioritize urgent over important in high-volume periods",
        ],
        evidence_expectations: [
          "SAT describing a goal set and achieved independently",
          "Example of a completed project or deliverable",
        ],
        typical_role_examples: ["Administrative coordinator", "Junior analyst", "Customer service rep"],
      },
      {
        level: 3,
        label: "Proficient",
        summary: "Drives results in complex or ambiguous situations; holds self and others accountable.",
        observable_behaviors: [
          "Delivers in uncertain or changing environments without losing focus",
          "Breaks complex goals into actionable plans with milestones",
          "Holds peers and direct reports accountable without micromanaging",
          "Identifies performance risks early and escalates or adjusts proactively",
        ],
        positive_indicators: [
          "Delivers quality work even when scope or resources shift",
          "Proactively communicates progress and blockers to stakeholders",
        ],
        risk_indicators: [
          "May push team too hard in pursuit of results without checking capacity",
        ],
        evidence_expectations: [
          "SAT: situation where you delivered despite significant obstacles",
          "Manager endorsement confirming consistent delivery record",
        ],
        typical_role_examples: ["Project lead", "Senior analyst", "Team lead"],
      },
      {
        level: 4,
        label: "Advanced",
        summary: "Sets high performance standards for the team; creates systems that enable consistent results delivery.",
        observable_behaviors: [
          "Establishes clear performance expectations and accountability structures",
          "Designs workflows that reduce friction and improve delivery consistency",
          "Coaches team members on goal-setting and performance improvement",
          "Models recovery from setbacks constructively for the team",
        ],
        positive_indicators: [
          "Team consistently meets or exceeds targets under their leadership",
          "Creates a culture where accountability is expected and supported",
        ],
        risk_indicators: [
          "High standards may create anxiety in lower-confidence team members without sufficient support",
        ],
        evidence_expectations: [
          "Example of a team performance improvement you led",
          "Evidence of a system or process you created to improve delivery",
        ],
        typical_role_examples: ["Manager", "Director", "Senior project manager"],
      },
      {
        level: 5,
        label: "Expert / Strategist",
        summary: "Shapes organizational performance culture; sets direction for how results are defined and measured.",
        observable_behaviors: [
          "Defines organizational performance frameworks and metrics",
          "Leads large-scale delivery initiatives with cross-functional accountability",
          "Advises senior leadership on performance strategy",
          "Builds organizational capability for results delivery through others",
        ],
        positive_indicators: [
          "Organization-wide improvements in delivery quality traceable to their leadership",
          "Sought out as an expert on performance management and accountability",
        ],
        risk_indicators: [
          "May set organizational targets that don't reflect frontline realities without adequate consultation",
        ],
        evidence_expectations: [
          "Published or documented organizational performance framework",
          "Reference from senior leader on results-driven impact",
        ],
        typical_role_examples: ["VP Operations", "Chief of Staff", "Director General"],
      },
    ],
    evidence_prompts: [
      {
        level: 3,
        prompt_type: "scenario",
        prompt_text:
          "Your team is two weeks from a deadline and a key dependency has just fallen through. Walk us through how you handle this.",
        assessment_method: "scenario_response",
        scoring_anchor:
          "L3: Identifies clear steps to recover. L4: Also describes how they communicate to stakeholders and protect team morale.",
      },
      {
        level: 2,
        prompt_type: "sat",
        prompt_text:
          "Tell us about a time you set a goal for yourself and achieved it. What made the difference?",
        assessment_method: "scenario_response",
      },
    ],
    crosswalks: [
      {
        target_slug: "problem-solving",
        target_name: "Problem Solving",
        target_domain: "foundational",
        mapping_strength: "primary",
      },
      {
        target_slug: "action-management",
        target_name: "Action Management",
        target_domain: "behavioural",
        mapping_strength: "secondary",
      },
    ],
    version: "1.0",
    status: "active",
  },

  // ─────────────────────────────────────────────
  // 3. LEADERSHIP — Achieve Results
  // ─────────────────────────────────────────────
  {
    id: "l-001",
    slug: "achieve-results",
    name: "Achieve Results",
    domain: "leadership",
    type: "achieving_results",
    cluster: "Key Leadership Competencies",
    definition:
      "Mobilizing resources, aligning people, and executing plans to deliver organizational priorities — while continuously improving how results are achieved. Encompasses personal accountability at every leadership level, from self-management to organizational direction.",
    why_it_matters:
      "From managing your own work to leading an organization, the ability to achieve results is the foundation of credibility as a leader. Canada's public service and private sector employers alike use this as a core criterion for leadership selection and development.",
    components: [
      "Plan and prioritize effectively",
      "Align resources to organizational priorities",
      "Monitor progress and course-correct",
      "Deliver on commitments consistently",
      "Improve processes and systems over time",
      "Take personal and collective accountability",
    ],
    applicable_roles: ["all"],
    teer_relevance: [0, 1, 2],
    noc_domains: ["Business", "Government", "Health", "Education"],
    source_frameworks: ["Treasury Board of Canada Secretariat — Key Leadership Competencies"],
    proficiency_levels: [
      {
        level: 1,
        label: "Foundation",
        summary: "Manages own work and commitments reliably; is developing self-awareness about personal performance patterns.",
        observable_behaviors: [
          "Completes own tasks on time with minimal supervision",
          "Keeps track of commitments and follows through",
          "Reflects on own performance when prompted",
        ],
        positive_indicators: [
          "Demonstrates personal responsibility for task quality",
          "Self-manages in structured environments",
        ],
        risk_indicators: [
          "May struggle to prioritize under competing demands without support",
        ],
        evidence_expectations: ["Self-assessment with scenario prompt"],
        typical_role_examples: ["Student", "Early-career individual contributor"],
      },
      {
        level: 2,
        label: "Working",
        summary: "Delivers own work reliably and contributes to team goals; tracks progress and flags risks.",
        observable_behaviors: [
          "Sets and tracks personal work goals independently",
          "Meets team commitments consistently",
          "Flags risks or delays proactively rather than waiting to be asked",
        ],
        positive_indicators: [
          "Trusted by peers to deliver",
          "Communicates openly about workload and blockers",
        ],
        risk_indicators: [
          "May not yet recognize the downstream impact of their work on others",
        ],
        evidence_expectations: [
          "SAT: example of delivering a commitment under pressure",
        ],
        typical_role_examples: ["Individual contributor", "Supervisor", "Team member"],
      },
      {
        level: 3,
        label: "Proficient",
        summary: "Manages team delivery; sets clear priorities, removes blockers, and holds the team accountable.",
        observable_behaviors: [
          "Translates organizational goals into team-level plans",
          "Removes obstacles that impede the team's progress",
          "Monitors team performance and addresses gaps early",
          "Maintains focus on priorities when context shifts",
        ],
        positive_indicators: [
          "Team members understand what success looks like and feel supported to achieve it",
          "Delivery record is consistent across different types of work",
        ],
        risk_indicators: [
          "May absorb team workload personally rather than developing team capacity",
        ],
        evidence_expectations: [
          "Manager endorsement on a team delivery achievement",
          "Example of how you managed a delivery risk",
        ],
        typical_role_examples: ["Manager", "Senior team lead", "Project manager"],
      },
      {
        level: 4,
        label: "Advanced",
        summary: "Sets direction across multiple teams or programs; builds organizational delivery capacity.",
        observable_behaviors: [
          "Aligns multi-team efforts to strategic priorities",
          "Designs governance and reporting structures for complex programs",
          "Builds organizational capacity through hiring, development, and systems",
          "Responds to major setbacks without losing organizational momentum",
        ],
        positive_indicators: [
          "Programs deliver consistently against strategic commitments",
          "Leaders developed under their direction achieve results independently",
        ],
        risk_indicators: [
          "May focus on aggregate results without sufficient attention to individual team health",
        ],
        evidence_expectations: [
          "Portfolio of program outcomes over 12+ months",
          "Reference from direct report or peer on organizational impact",
        ],
        typical_role_examples: ["Director", "Director General", "VP"],
      },
      {
        level: 5,
        label: "Expert / Strategist",
        summary: "Shapes how the organization defines, measures, and achieves results at the highest level.",
        observable_behaviors: [
          "Defines organizational priorities and success metrics",
          "Builds enterprise-level performance infrastructure",
          "Represents the organization on delivery commitments to external partners",
          "Creates a culture of accountability that outlasts individual leadership",
        ],
        positive_indicators: [
          "Long-term, measurable improvement in organizational performance",
          "Recognized nationally or sector-wide as a results-driven leader",
        ],
        risk_indicators: [
          "Long-term strategic focus may create short-term delivery gaps without strong operational support",
        ],
        evidence_expectations: [
          "Documented organizational transformation or results achievement",
          "Public recognition or senior peer reference",
        ],
        typical_role_examples: ["Deputy Minister", "CEO", "ADM"],
      },
    ],
    evidence_prompts: [
      {
        level: 3,
        prompt_type: "scenario",
        prompt_text:
          "You've just been assigned to lead a team that has missed its last two delivery targets. What do you do in the first 30 days?",
        assessment_method: "scenario_response",
        scoring_anchor:
          "L3: Focuses on diagnosing root causes and resetting priorities. L4: Also addresses team capability, systems, and stakeholder trust rebuilding.",
      },
    ],
    crosswalks: [
      {
        target_slug: "results-orientation",
        target_name: "Results Orientation",
        target_domain: "behavioural",
        mapping_strength: "primary",
      },
      {
        target_slug: "problem-solving",
        target_name: "Problem Solving",
        target_domain: "foundational",
        mapping_strength: "secondary",
      },
    ],
    version: "1.0",
    status: "active",
  },

  // ─────────────────────────────────────────────
  // 4. TECHNICAL — Project Management
  // ─────────────────────────────────────────────
  {
    id: "t-001",
    slug: "project-management",
    name: "Project Management",
    domain: "technical",
    type: "project_operations",
    cluster: "Project & Operations",
    definition:
      "The applied knowledge and practice of initiating, planning, executing, monitoring, and closing projects. Includes scope definition, resource planning, risk management, stakeholder communication, and delivery to time and budget.",
    why_it_matters:
      "Project management is one of the most transferable technical competencies in Canada's labour market, valued across government, technology, healthcare, and business sectors. It provides the structure that turns goals into outcomes.",
    components: [
      "Define scope and deliverables",
      "Develop project plans and schedules",
      "Manage resources and budget",
      "Identify and mitigate risks",
      "Communicate with stakeholders",
      "Monitor progress and manage changes",
      "Close projects and capture lessons learned",
    ],
    applicable_roles: ["individual_contributor", "supervisor", "manager", "director"],
    teer_relevance: [0, 1, 2],
    noc_domains: ["Business", "Technology", "Government", "Health", "Engineering"],
    source_frameworks: ["IRCC Technical Competency Dictionary", "OaSIS 2025"],
    oasis_code: "PM-001",
    proficiency_levels: [
      {
        level: 1,
        label: "Foundation",
        summary: "Understands basic project management concepts; supports project work under close direction.",
        observable_behaviors: [
          "Understands the difference between tasks, milestones, and deliverables",
          "Uses a project plan or tracker when provided",
          "Completes assigned project tasks on time with supervision",
        ],
        positive_indicators: [
          "Asks clarifying questions about scope and deadlines",
          "Updates task status proactively",
        ],
        risk_indicators: [
          "May not recognize dependencies between their tasks and others'",
        ],
        evidence_expectations: [
          "Description of a project they participated in and their specific role",
        ],
        typical_role_examples: ["Project assistant", "Student placement", "Junior coordinator"],
      },
      {
        level: 2,
        label: "Working",
        summary: "Manages small, defined projects independently; uses standard PM tools and processes.",
        observable_behaviors: [
          "Creates basic project plans with tasks, owners, and timelines",
          "Tracks progress and reports status to stakeholders",
          "Identifies and escalates risks or blockers appropriately",
          "Uses common PM tools (Excel, Trello, Asana, or equivalent)",
        ],
        positive_indicators: [
          "Delivers small projects on time and within scope",
          "Maintains clear project documentation",
        ],
        risk_indicators: [
          "May struggle when scope changes or stakeholders have competing priorities",
        ],
        evidence_expectations: [
          "A project plan or status report they created",
          "SAT describing a project they managed from start to finish",
        ],
        typical_role_examples: ["Coordinator", "Junior PM", "Operations associate"],
      },
      {
        level: 3,
        label: "Proficient",
        summary: "Manages medium-complexity projects with multiple stakeholders; adapts plans to changing conditions.",
        observable_behaviors: [
          "Manages full project lifecycle for medium-scale initiatives",
          "Manages stakeholder expectations across multiple departments or organizations",
          "Proactively identifies and mitigates project risks before they escalate",
          "Applies change management principles when scope or approach shifts",
        ],
        positive_indicators: [
          "Projects complete on time and within budget with stakeholder satisfaction",
          "Issues are resolved before they become crises",
        ],
        risk_indicators: [
          "May over-engineer plans for simple projects — applies heavy process unnecessarily",
        ],
        evidence_expectations: [
          "Project brief, charter, or post-mortem document",
          "Manager or stakeholder endorsement on a specific project outcome",
        ],
        typical_role_examples: ["Project manager", "Senior coordinator", "Business analyst"],
      },
      {
        level: 4,
        label: "Advanced",
        summary: "Leads complex, multi-team programs; builds PM capability within the organization.",
        observable_behaviors: [
          "Leads programs with interdependent workstreams and cross-functional teams",
          "Defines PM standards, templates, and governance for the organization",
          "Coaches junior PMs and builds team capability",
          "Manages executive stakeholders and board-level reporting",
        ],
        positive_indicators: [
          "Consistently delivers programs that meet strategic objectives",
          "PM standards introduced persist after their involvement ends",
        ],
        risk_indicators: [
          "May create process overhead that slows delivery for smaller teams",
        ],
        evidence_expectations: [
          "Program documentation covering multiple projects",
          "Evidence of PM standards or tools introduced at organizational level",
        ],
        typical_role_examples: ["Senior PM", "Program manager", "PMO lead"],
      },
      {
        level: 5,
        label: "Expert / Strategist",
        summary: "Shapes organizational portfolio management strategy; advises at executive level.",
        observable_behaviors: [
          "Defines enterprise portfolio and program management strategy",
          "Advises C-suite or Deputy Ministers on delivery architecture",
          "Leads PMO establishment or transformation",
          "Publishes or trains others at an industry or national level",
        ],
        positive_indicators: [
          "Organization-wide PM maturity improvement attributed to their leadership",
          "Recognized as a subject matter expert by industry peers",
        ],
        risk_indicators: [
          "May be disconnected from execution realities after sustained strategic focus",
        ],
        evidence_expectations: [
          "Published framework, methodology, or industry contribution",
          "Senior executive reference",
        ],
        typical_role_examples: ["Chief Project Officer", "Enterprise PMO Director", "Senior Fellow"],
      },
    ],
    evidence_prompts: [
      {
        level: 3,
        prompt_type: "artifact",
        prompt_text:
          "Upload a project plan, charter, or status report you created. Briefly describe the project, your role, and the outcome.",
        assessment_method: "work_sample",
      },
      {
        level: 3,
        prompt_type: "scenario",
        prompt_text:
          "Halfway through a project, a key stakeholder requests a significant scope change. How do you handle this while protecting the timeline and budget?",
        assessment_method: "scenario_response",
        scoring_anchor:
          "L3: Describes formal change request process, impact assessment, and stakeholder negotiation. L4: Also addresses how they maintain team morale and organizational trust.",
      },
    ],
    crosswalks: [
      {
        target_slug: "planning-and-organization",
        target_name: "Planning and Organization",
        target_domain: "technical",
        mapping_strength: "primary",
      },
      {
        target_slug: "results-orientation",
        target_name: "Results Orientation",
        target_domain: "behavioural",
        mapping_strength: "primary",
      },
      {
        target_slug: "problem-solving",
        target_name: "Problem Solving",
        target_domain: "foundational",
        mapping_strength: "secondary",
      },
    ],
    version: "1.0",
    status: "active",
  },

  // ─────────────────────────────────────────────
  // 5. DIGITAL — AI Literacy
  // ─────────────────────────────────────────────
  {
    id: "d-001",
    slug: "ai-literacy",
    name: "AI Literacy",
    domain: "digital",
    type: "ai_literacy",
    cluster: "Digital Competencies",
    definition:
      "The ability to understand, evaluate, and apply AI tools effectively and responsibly in a work context. Includes knowing what AI can and cannot do, using AI tools to enhance productivity, and recognizing ethical risks such as bias, misinformation, and privacy concerns.",
    why_it_matters:
      "AI tools are reshaping every sector of Canada's economy. Workers who can use AI effectively while exercising sound judgment will be significantly more productive — and more employable — than those who cannot.",
    components: [
      "Understand core AI concepts and capabilities",
      "Use AI tools for everyday work tasks",
      "Evaluate AI-generated outputs critically",
      "Apply AI tools responsibly and ethically",
      "Protect data and privacy when using AI",
      "Stay current as AI tools and norms evolve",
    ],
    applicable_roles: ["all"],
    teer_relevance: [0, 1, 2, 3, 4],
    noc_domains: ["Technology", "Business", "Government", "Health", "Education"],
    source_frameworks: ["ESDC Skills for Success — Digital", "OaSIS 2025"],
    proficiency_levels: [
      {
        level: 1,
        label: "Foundation",
        esdc_equivalent: "Below Entry — ESDC Digital",
        summary: "Aware that AI tools exist; uses basic AI features with guidance.",
        observable_behaviors: [
          "Has heard of AI tools (ChatGPT, Copilot, etc.) but uses them rarely or not at all",
          "Can use a basic AI chatbot with prompting support",
          "Does not yet critically evaluate AI outputs",
        ],
        positive_indicators: [
          "Shows curiosity about how AI tools work",
          "Willing to try AI tools in low-stakes settings",
        ],
        risk_indicators: [
          "Accepts AI-generated output without verification",
          "Unaware of basic privacy risks when entering data into AI tools",
        ],
        evidence_expectations: [
          "Short reflection on an AI tool used and what they noticed",
        ],
        typical_role_examples: ["Student", "Career changer", "Non-digital native"],
      },
      {
        level: 2,
        label: "Working",
        esdc_equivalent: "Entry — ESDC Digital",
        summary: "Uses AI tools independently for common work tasks; applies basic judgment on output quality.",
        observable_behaviors: [
          "Uses AI tools (ChatGPT, Copilot, Grammarly, etc.) to draft, summarize, or research",
          "Checks AI-generated content before sharing or submitting",
          "Avoids entering personally identifiable information into public AI tools",
          "Asks follow-up questions to improve AI output quality",
        ],
        positive_indicators: [
          "Integrates AI tools into regular workflow with measurable time savings",
          "Flags AI output that looks inaccurate or biased",
        ],
        risk_indicators: [
          "May use AI as a shortcut in situations that require human judgment",
        ],
        evidence_expectations: [
          "Example of an AI tool used and a decision made about the output",
        ],
        typical_role_examples: ["Administrative staff", "Junior analyst", "Recent graduate"],
      },
      {
        level: 3,
        label: "Proficient",
        esdc_equivalent: "Intermediate — ESDC Digital",
        summary: "Selects and applies AI tools strategically; recognizes limitations and ethical considerations.",
        observable_behaviors: [
          "Selects the right AI tool for a given task rather than defaulting to one tool",
          "Writes effective prompts that produce high-quality, usable outputs",
          "Identifies and corrects AI hallucinations, bias, or inaccuracy",
          "Understands and applies organizational AI use policies",
        ],
        positive_indicators: [
          "AI tools visibly improve the quality or speed of their work",
          "Teaches colleagues basic AI tool usage",
        ],
        risk_indicators: [
          "May over-rely on AI efficiency gains without recognizing degraded critical thinking",
        ],
        evidence_expectations: [
          "Example of a workflow improved through AI tool use — describe tool, prompt strategy, and result",
          "SAT: situation where you identified a problem with an AI output and corrected it",
        ],
        typical_role_examples: ["Business analyst", "Coordinator", "Content creator"],
      },
      {
        level: 4,
        label: "Advanced",
        esdc_equivalent: "Advanced — ESDC Digital",
        summary: "Leads AI adoption in teams; evaluates AI tools for organizational fit, risk, and ethics.",
        observable_behaviors: [
          "Evaluates and recommends AI tools for team or organizational adoption",
          "Develops AI use guidelines or policies for the team",
          "Coaches team members on effective and responsible AI use",
          "Identifies AI-related risks (bias, privacy, over-reliance) and mitigates them",
        ],
        positive_indicators: [
          "Team AI adoption is structured, purposeful, and safe under their guidance",
          "Proactively monitors AI landscape for emerging risks and opportunities",
        ],
        risk_indicators: [
          "May adopt AI tools enthusiastically without sufficient equity or accessibility review",
        ],
        evidence_expectations: [
          "AI use policy, guidelines, or training material created for the team",
          "Reference from team member on AI coaching impact",
        ],
        typical_role_examples: ["Senior analyst", "Manager", "Digital lead"],
      },
      {
        level: 5,
        label: "Expert / Strategist",
        summary: "Shapes organizational AI strategy; advises on governance, ethics, and enterprise AI capability.",
        observable_behaviors: [
          "Defines organizational AI strategy and governance frameworks",
          "Advises executives on AI investment and risk tradeoffs",
          "Represents the organization in sector-wide AI discussions",
          "Leads AI literacy programs at organizational or national scale",
        ],
        positive_indicators: [
          "Organization has a mature, ethical, and effective AI adoption framework",
          "Recognized as an AI strategy expert by peers and external bodies",
        ],
        risk_indicators: [
          "Strategic focus may outpace organizational readiness for AI adoption",
        ],
        evidence_expectations: [
          "Published AI strategy, policy, or research contribution",
          "Executive or external reference",
        ],
        typical_role_examples: ["Chief Digital Officer", "AI Policy Lead", "Director of Innovation"],
      },
    ],
    evidence_prompts: [
      {
        level: 3,
        prompt_type: "scenario",
        prompt_text:
          "You've been asked to use an AI tool to help draft a client report. You notice the output contains information that seems inaccurate. What do you do?",
        assessment_method: "scenario_response",
        scoring_anchor:
          "L2: Checks and corrects the error. L3: Also describes how they verified, documents the issue, and considers whether the tool is appropriate for this task.",
      },
      {
        level: 2,
        prompt_type: "artifact",
        prompt_text:
          "Share an example of something you created using an AI tool. Describe what prompt you used and what judgment calls you made about the output.",
        assessment_method: "work_sample",
      },
    ],
    crosswalks: [
      {
        target_slug: "digital",
        target_name: "Digital",
        target_domain: "foundational",
        mapping_strength: "primary",
      },
      {
        target_slug: "focus-on-quality-and-detail",
        target_name: "Focus on Quality and Detail",
        target_domain: "behavioural",
        mapping_strength: "secondary",
      },
    ],
    version: "1.0",
    status: "active",
  },

  // ─────────────────────────────────────────────
  // 6. VALUES & ETHICS — Values and Ethics
  // ─────────────────────────────────────────────
  {
    id: "v-001",
    slug: "values-and-ethics",
    name: "Values and Ethics",
    abbreviation: "VE",
    domain: "values_ethics",
    type: "professional_integrity",
    cluster: "Values & Ethics",
    definition:
      "Demonstrating the professional standards, ethical principles, and personal integrity that underpin trustworthy work. Includes acting with honesty and transparency, protecting public trust, respecting the dignity of all people, and making decisions that reflect shared organizational values.",
    why_it_matters:
      "Values and ethics are not a 'soft' competency — they are the foundation of trust in any workplace. In Canada's public and private sectors alike, ethical lapses cause significant harm to individuals and organizations. This competency is treated as a threshold requirement, not a progression.",
    components: [
      "Act with honesty and transparency",
      "Protect privacy and confidentiality",
      "Treat all people with dignity and fairness",
      "Avoid and disclose conflicts of interest",
      "Report misconduct or ethical breaches appropriately",
      "Make decisions consistent with organizational values",
    ],
    applicable_roles: ["all"],
    teer_relevance: [0, 1, 2, 3, 4, 5],
    noc_domains: ["Government", "Health", "Business", "Education", "Technology"],
    source_frameworks: ["IRCC Competency Dictionary", "Public Service Commission", "BC Public Service"],
    proficiency_levels: [
      {
        level: 1, label: "Foundation",
        summary: "Placeholder — Values & Ethics uses Compliance Tiers, not proficiency levels.",
        observable_behaviors: [],
        positive_indicators: [],
        risk_indicators: [],
        evidence_expectations: [],
        typical_role_examples: [],
      },
      { level: 2, label: "Working", summary: "", observable_behaviors: [], positive_indicators: [], risk_indicators: [], evidence_expectations: [], typical_role_examples: [] },
      { level: 3, label: "Proficient", summary: "", observable_behaviors: [], positive_indicators: [], risk_indicators: [], evidence_expectations: [], typical_role_examples: [] },
      { level: 4, label: "Advanced", summary: "", observable_behaviors: [], positive_indicators: [], risk_indicators: [], evidence_expectations: [], typical_role_examples: [] },
      { level: 5, label: "Expert / Strategist", summary: "", observable_behaviors: [], positive_indicators: [], risk_indicators: [], evidence_expectations: [], typical_role_examples: [] },
    ],
    compliance_levels: [
      {
        tier: "Aware",
        description:
          "Understands the organization's values and ethical standards; knows what is expected and why it matters.",
        indicators: [
          "Can articulate the organization's core values",
          "Understands relevant privacy and confidentiality obligations",
          "Knows how to report an ethical concern or conflict of interest",
          "Has completed required ethics training",
        ],
      },
      {
        tier: "Practising",
        description:
          "Consistently acts in accordance with organizational values and ethical standards in daily work; demonstrates integrity under normal and challenging conditions.",
        indicators: [
          "Tells the truth even when it is inconvenient",
          "Treats all colleagues and clients with dignity regardless of role or background",
          "Discloses actual or perceived conflicts of interest proactively",
          "Raises concerns about unethical behaviour through appropriate channels",
          "Protects sensitive information consistently, not just when observed",
        ],
      },
      {
        tier: "Modelling",
        description:
          "Sets the ethical tone for the team or organization; creates conditions where others can and do act ethically.",
        indicators: [
          "Speaks up when group norms drift from ethical standards",
          "Creates psychological safety for others to raise ethical concerns",
          "Addresses ethical breaches directly and fairly",
          "Makes values-aligned decisions even under significant pressure",
          "Is known by colleagues as a person of integrity",
        ],
      },
    ],
    evidence_prompts: [
      {
        level: 3,
        prompt_type: "scenario",
        prompt_text:
          "You discover that a colleague has been sharing confidential client information informally with someone outside the organization. What do you do?",
        assessment_method: "scenario_response",
        scoring_anchor:
          "Practising: Describes reporting through appropriate channels. Modelling: Also describes how they address it with the colleague directly and consider systemic causes.",
      },
      {
        level: 2,
        prompt_type: "sat",
        prompt_text:
          "Describe a situation where you were asked to do something that felt wrong or unfair. How did you handle it?",
        assessment_method: "scenario_response",
      },
    ],
    crosswalks: [
      {
        target_slug: "anti-racism-and-inclusion",
        target_name: "Anti-Racism and Inclusion",
        target_domain: "values_ethics",
        mapping_strength: "primary",
      },
      {
        target_slug: "uphold-integrity-and-respect",
        target_name: "Uphold Integrity and Respect",
        target_domain: "leadership",
        mapping_strength: "primary",
      },
    ],
    version: "1.0",
    status: "active",
  },
];

export function getCompetencyBySlug(slug: string): CompetencyItem | undefined {
  return competencies.find((c) => c.slug === slug);
}

export function getCompetenciesByDomain(domain: string): CompetencyItem[] {
  return competencies.filter((c) => c.domain === domain);
}

export function searchCompetencies(query: string): CompetencyItem[] {
  const q = query.toLowerCase();
  return competencies.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.definition.toLowerCase().includes(q) ||
      c.cluster.toLowerCase().includes(q) ||
      c.components.some((comp) => comp.toLowerCase().includes(q))
  );
}
