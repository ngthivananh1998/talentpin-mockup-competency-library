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
  // FOUNDATIONAL — Adaptability
  // ─────────────────────────────────────────────
  {
    id: "f-002", slug: "adaptability", name: "Adaptability",
    domain: "foundational", type: "adaptability", cluster: "Core Transferable Skills",
    definition: "The ability to adjust thinking, behaviour, and approach in response to changing conditions, new information, or unexpected challenges — while maintaining effectiveness and composure.",
    why_it_matters: "Canada's labour market is changing rapidly. Workers who adapt to new tools, processes, and roles are far more resilient to disruption and more valuable to employers navigating uncertainty.",
    components: ["Adjust plans when circumstances change", "Stay effective under ambiguity", "Embrace new methods and tools", "Manage emotional responses to change", "Learn from setbacks quickly"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3,4,5],
    noc_domains: ["Business","Technology","Health","Trades","Government"],
    source_frameworks: ["ESDC Skills for Success"],
    proficiency_levels: [
      { level:1, label:"Foundation", summary:"Accepts minor changes with support; needs reassurance when routines shift.", observable_behaviors:["Follows new instructions when given step-by-step guidance","Expresses discomfort with change but attempts to comply"], positive_indicators:["Asks questions rather than shutting down when things change"], risk_indicators:["May resist or disengage when familiar routines are disrupted"], evidence_expectations:["Reflection on a time something changed unexpectedly"], typical_role_examples:["Student","Trainee"] },
      { level:2, label:"Working", summary:"Adjusts to routine changes independently; recovers quickly from minor disruptions.", observable_behaviors:["Updates priorities when tasks or timelines shift","Tries new tools or processes without extensive prompting"], positive_indicators:["Maintains productivity through moderate change"], risk_indicators:["Struggles with simultaneous or large-scale changes"], evidence_expectations:["SAT describing a workplace change they navigated"], typical_role_examples:["Administrative coordinator","Junior analyst"] },
      { level:3, label:"Proficient", summary:"Adapts effectively in complex or ambiguous situations; helps others adjust.", observable_behaviors:["Maintains performance quality when roles or responsibilities shift significantly","Coaches peers through transitions and normalizes uncertainty"], positive_indicators:["Seen as calm and effective during organizational change"], risk_indicators:["May adapt so quickly they leave team members behind"], evidence_expectations:["Example of leading through a significant change"], typical_role_examples:["Project coordinator","Team lead","HR generalist"] },
      { level:4, label:"Advanced", summary:"Leads teams through significant change; designs adaptive structures.", observable_behaviors:["Reframes change as opportunity for the team","Builds flexible systems that accommodate future disruption"], positive_indicators:["Team adapts well under their leadership during organizational transitions"], risk_indicators:["May introduce too much change too quickly without adequate stabilization"], evidence_expectations:["Evidence of leading a change initiative with team outcomes"], typical_role_examples:["Manager","Change lead","Senior advisor"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational change capability; advises at executive level on transformation.", observable_behaviors:["Designs enterprise change management frameworks","Builds organizational resilience as a strategic capability"], positive_indicators:["Organization navigates disruption more effectively because of their systems"], risk_indicators:["Strategic change agenda may outpace frontline capacity"], evidence_expectations:["Published change framework or transformation case study"], typical_role_examples:["VP People","Chief Transformation Officer","Senior Fellow"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"Midway through a major project, your organization announces a restructuring that affects your team's mandate. How do you respond?", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"flexibility", target_name:"Flexibility", target_domain:"behavioural", mapping_strength:"primary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // FOUNDATIONAL — Collaboration
  // ─────────────────────────────────────────────
  {
    id: "f-003", slug: "collaboration", name: "Collaboration",
    domain: "foundational", type: "collaboration", cluster: "Core Transferable Skills",
    definition: "The ability to work effectively with others toward shared goals — contributing ideas, listening to different perspectives, sharing responsibilities, and building trust across diverse teams.",
    why_it_matters: "Virtually every occupation in Canada involves working with others. Collaboration drives innovation, improves outcomes, and creates inclusive workplaces. It is consistently ranked among employers' top priorities.",
    components: ["Contribute actively to team goals", "Listen and build on others' ideas", "Share credit and responsibility", "Navigate disagreement constructively", "Build trust across differences"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3,4,5],
    noc_domains: ["Business","Health","Government","Technology","Education","Trades"],
    source_frameworks: ["ESDC Skills for Success"],
    proficiency_levels: [
      { level:1, label:"Foundation", summary:"Participates in team tasks with direction; tends to follow rather than contribute.", observable_behaviors:["Completes assigned team tasks when clearly defined","Listens in meetings but rarely contributes unprompted"], positive_indicators:["Shows up reliably and supports what others initiate"], risk_indicators:["May withdraw when team dynamics become tense"], evidence_expectations:["Description of a group project and their specific role"], typical_role_examples:["Student","Volunteer","Trainee"] },
      { level:2, label:"Working", summary:"Contributes to team tasks consistently; works cooperatively and shares information.", observable_behaviors:["Offers ideas and feedback in team settings","Shares relevant information with teammates proactively"], positive_indicators:["Trusted by teammates to do their share reliably"], risk_indicators:["May default to independent work when collaboration is required"], evidence_expectations:["SAT describing a team project they contributed to"], typical_role_examples:["Administrative staff","Customer service rep","Junior coordinator"] },
      { level:3, label:"Proficient", summary:"Actively builds team cohesion; navigates conflict and coordinates across functions.", observable_behaviors:["Facilitates productive team discussions and draws out quieter voices","Addresses interpersonal friction before it affects performance"], positive_indicators:["Team members feel heard and supported under their involvement"], risk_indicators:["May prioritize harmony over necessary disagreement"], evidence_expectations:["Example of resolving a team conflict or improving team dynamics"], typical_role_examples:["Team lead","Project manager","HR generalist"] },
      { level:4, label:"Advanced", summary:"Builds collaborative culture within and across teams; models and coaches collaboration.", observable_behaviors:["Designs team structures that promote knowledge sharing","Breaks down silos between departments or functions"], positive_indicators:["Cross-team collaboration improves demonstrably under their leadership"], risk_indicators:["May over-invest in consensus at the expense of speed"], evidence_expectations:["Evidence of cross-functional initiative they coordinated"], typical_role_examples:["Manager","Director","Senior advisor"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational collaboration culture; builds enterprise-wide partnership capacity.", observable_behaviors:["Designs collaboration frameworks adopted organization-wide","Represents organization in cross-sector partnerships"], positive_indicators:["Organization known as a strong collaborative partner externally"], risk_indicators:["Collaborative approach may slow decisions requiring executive authority"], evidence_expectations:["Partnership framework or cross-sector initiative they led"], typical_role_examples:["VP Strategy","Chief People Officer","ADM"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"Two members of your team have conflicting approaches to a shared task and are avoiding each other. What do you do?", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"teamwork", target_name:"Teamwork", target_domain:"behavioural", mapping_strength:"primary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // FOUNDATIONAL — Creativity and Innovation
  // ─────────────────────────────────────────────
  {
    id: "f-004", slug: "creativity-and-innovation", name: "Creativity and Innovation",
    domain: "foundational", type: "creativity_innovation", cluster: "Core Transferable Skills",
    definition: "The ability to generate new ideas, explore alternatives, and apply imaginative thinking to solve problems and improve processes — moving beyond conventional approaches when the situation calls for it.",
    why_it_matters: "Innovation drives organizational competitiveness and service improvement. Workers who can think creatively help organizations adapt, improve, and grow — even in resource-constrained environments.",
    components: ["Generate and explore new ideas", "Question assumptions and conventional approaches", "Apply ideas across different contexts", "Experiment and learn from failure", "Build on others' ideas constructively"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3,4,5],
    noc_domains: ["Technology","Business","Health","Arts","Government"],
    source_frameworks: ["ESDC Skills for Success"],
    proficiency_levels: [
      { level:1, label:"Foundation", summary:"Generates ideas in familiar areas when prompted; needs encouragement to propose alternatives.", observable_behaviors:["Offers suggestions when explicitly asked","Tries slightly different approaches when initial methods fail"], positive_indicators:["Willing to brainstorm without needing ideas to be 'right'"], risk_indicators:["May default to conventional approaches even when alternatives are welcomed"], evidence_expectations:["Reflection on an idea they suggested and what happened"], typical_role_examples:["Student","Trainee","Volunteer"] },
      { level:2, label:"Working", summary:"Generates practical ideas independently; applies them in own work area.", observable_behaviors:["Proposes improvements to existing processes in their role","Tries new approaches without needing permission for low-risk experiments"], positive_indicators:["Ideas they surface are relevant and actionable"], risk_indicators:["May propose ideas without fully thinking through implementation"], evidence_expectations:["Example of an improvement they initiated"], typical_role_examples:["Junior coordinator","Customer service rep","Recent graduate"] },
      { level:3, label:"Proficient", summary:"Generates and develops new ideas across the team; creates space for others to contribute.", observable_behaviors:["Facilitates brainstorming and structured ideation processes","Connects ideas from different fields or disciplines"], positive_indicators:["Team generates more and better ideas with their involvement"], risk_indicators:["May pursue creative ideas past the point of feasibility"], evidence_expectations:["Example of an innovation they led that was implemented"], typical_role_examples:["Project manager","Business analyst","Team lead"] },
      { level:4, label:"Advanced", summary:"Creates organizational conditions for innovation; champions new approaches at leadership level.", observable_behaviors:["Builds psychological safety for experimentation in the team","Allocates resources and time for innovation activities"], positive_indicators:["Team has a track record of implemented improvements"], risk_indicators:["May underestimate risk when championing bold changes"], evidence_expectations:["Innovation initiative they sponsored with measurable outcome"], typical_role_examples:["Manager","Senior advisor","Director"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational innovation strategy; builds enterprise capability for continuous improvement.", observable_behaviors:["Designs innovation systems and governance for the organization","Advises at executive level on emerging opportunities and disruptive trends"], positive_indicators:["Organization has a recognized innovation capability attributed to their leadership"], risk_indicators:["May invest in moonshots at the expense of incremental improvements"], evidence_expectations:["Published innovation strategy or sector-recognized contribution"], typical_role_examples:["Chief Innovation Officer","VP Strategy","Director General"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"Your team has been using the same process for three years and it is increasingly inefficient. You have no additional budget. What do you do?", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"innovation", target_name:"Innovation", target_domain:"behavioural", mapping_strength:"primary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // FOUNDATIONAL — Digital Skills
  // ─────────────────────────────────────────────
  {
    id: "f-005", slug: "digital-skills", name: "Digital Skills",
    domain: "foundational", type: "digital_skill", cluster: "Core Transferable Skills",
    definition: "The ability to use digital devices, applications, and the internet effectively and safely for everyday work tasks — including communication, information management, and basic productivity tools.",
    why_it_matters: "Digital skills are a baseline requirement across virtually all occupations in Canada. Workers without foundational digital literacy face significant barriers to employment and advancement in every sector.",
    components: ["Use devices and software for work tasks", "Communicate using digital tools", "Manage files and information digitally", "Navigate the internet safely", "Troubleshoot basic technology problems"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3,4,5],
    noc_domains: ["Business","Health","Government","Trades","Retail"],
    source_frameworks: ["ESDC Skills for Success"],
    proficiency_levels: [
      { level:1, label:"Foundation", esdc_equivalent:"Below Entry — ESDC Digital", summary:"Uses basic digital devices with guidance; needs support for most digital tasks.", observable_behaviors:["Can use a smartphone or computer for simple tasks with assistance","Sends and receives emails with support"], positive_indicators:["Willing to learn digital tools when shown"], risk_indicators:["Struggles to independently navigate unfamiliar software"], evidence_expectations:["Description of digital tools they have used"], typical_role_examples:["Non-digital-native job seeker","Returning worker"] },
      { level:2, label:"Working", esdc_equivalent:"Entry — ESDC Digital", summary:"Uses standard workplace tools independently; communicates and manages information digitally.", observable_behaviors:["Uses email, calendar, and word processing tools independently","Organizes files in shared drives or document management systems"], positive_indicators:["Digital tools are integrated into daily work without friction"], risk_indicators:["May struggle with unfamiliar platforms or rapid tool changes"], evidence_expectations:["List of tools used regularly with brief description of how"], typical_role_examples:["Administrative assistant","Retail associate","Entry-level coordinator"] },
      { level:3, label:"Proficient", esdc_equivalent:"Intermediate — ESDC Digital", summary:"Uses a range of digital tools confidently; adapts to new platforms quickly.", observable_behaviors:["Learns new software tools independently using help documentation","Integrates multiple tools into efficient workflows"], positive_indicators:["Goes-to person on the team for digital tool questions"], risk_indicators:["May adopt tools without considering team compatibility"], evidence_expectations:["Example of learning and applying a new digital tool"], typical_role_examples:["Coordinator","Business analyst","Content creator"] },
      { level:4, label:"Advanced", esdc_equivalent:"Advanced — ESDC Digital", summary:"Evaluates and implements digital tools for the team; trains others.", observable_behaviors:["Recommends and onboards digital tools for team use","Creates guides or training materials for new platforms"], positive_indicators:["Team digital capability improves under their guidance"], risk_indicators:["May select tools based on personal preference over team needs"], evidence_expectations:["Tool rollout or training material they created"], typical_role_examples:["Manager","Digital coordinator","Operations lead"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational digital infrastructure; advises on enterprise tool strategy.", observable_behaviors:["Defines digital tool standards and governance for the organization","Advises executives on digital transformation priorities"], positive_indicators:["Organization digital maturity improves under their leadership"], risk_indicators:["May overinvest in cutting-edge tools before foundational gaps are closed"], evidence_expectations:["Digital strategy or enterprise tool framework they authored"], typical_role_examples:["Chief Digital Officer","CTO","Director of Digital Services"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"Your organization is switching to a new project management platform in two weeks. Half your team has never used it. What do you do?", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"ai-literacy", target_name:"AI Literacy", target_domain:"digital", mapping_strength:"secondary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // FOUNDATIONAL — Numeracy
  // ─────────────────────────────────────────────
  {
    id: "f-006", slug: "numeracy", name: "Numeracy",
    domain: "foundational", type: "numeracy", cluster: "Core Transferable Skills",
    definition: "The ability to understand, use, and interpret numerical and mathematical information in work contexts — including basic calculations, data interpretation, budgets, measurements, and quantitative reasoning.",
    why_it_matters: "Numeracy is required in virtually every occupation — from interpreting sales data and managing budgets to measuring materials and reading reports. Workers with strong numeracy make fewer errors and better decisions.",
    components: ["Perform calculations accurately", "Interpret numerical data and charts", "Apply measurement and estimation", "Manage budgets and financial figures", "Use quantitative reasoning to support decisions"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3,4,5],
    noc_domains: ["Finance","Trades","Business","Health","Government"],
    source_frameworks: ["ESDC Skills for Success"],
    proficiency_levels: [
      { level:1, label:"Foundation", esdc_equivalent:"ESDC Numeracy Level 1", summary:"Handles simple one-step calculations in familiar contexts; struggles with estimation or interpretation.", observable_behaviors:["Counts, adds, and subtracts in everyday tasks","Reads simple numbers and measurements with support"], positive_indicators:["Uses calculator accurately for basic operations"], risk_indicators:["May make errors when presented with multi-step or unfamiliar number problems"], evidence_expectations:["Completion of a basic numeracy task with explanation"], typical_role_examples:["Retail associate","Entry-level labourer"] },
      { level:2, label:"Working", esdc_equivalent:"ESDC Numeracy Level 2", summary:"Performs multi-step calculations; interprets simple tables and graphs independently.", observable_behaviors:["Calculates percentages, averages, and ratios for work tasks","Reads and interprets basic charts and data tables"], positive_indicators:["Numerical work is accurate and requires minimal checking"], risk_indicators:["May struggle with statistical inference or complex formulae"], evidence_expectations:["Example of a numerical task completed independently"], typical_role_examples:["Administrative coordinator","Junior analyst","Retail supervisor"] },
      { level:3, label:"Proficient", esdc_equivalent:"ESDC Numeracy Level 3", summary:"Interprets complex data; uses quantitative reasoning to support recommendations.", observable_behaviors:["Builds and maintains spreadsheet models for analysis","Interprets trend data and draws evidence-based conclusions"], positive_indicators:["Numerical analysis informs decisions at team level"], risk_indicators:["May over-rely on quantitative data without qualitative context"], evidence_expectations:["A report or analysis they authored with numerical content"], typical_role_examples:["Business analyst","Accountant","Project coordinator"] },
      { level:4, label:"Advanced", summary:"Leads quantitative analysis for complex decisions; coaches others on data interpretation.", observable_behaviors:["Designs financial models and business cases for leadership decisions","Identifies data quality issues and corrects methodology"], positive_indicators:["Quantitative work drives significant organizational decisions"], risk_indicators:["May present complex analysis without adequate explanation for non-technical audiences"], evidence_expectations:["Financial model or business case they developed"], typical_role_examples:["Senior analyst","Finance manager","Data lead"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational measurement and analytics frameworks; advises at executive level.", observable_behaviors:["Defines organizational KPIs, metrics, and measurement strategy","Advises executives on data-driven decision frameworks"], positive_indicators:["Organizational decisions are measurably better due to their analytical frameworks"], risk_indicators:["May create measurement systems too complex for operational teams to use"], evidence_expectations:["Published methodology or enterprise analytics framework"], typical_role_examples:["Chief Analytics Officer","VP Finance","Director of Strategy"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"You are given a dataset showing monthly program costs over 18 months. Your manager asks you to identify trends and flag any concerns. Walk us through your approach.", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"data-analysis", target_name:"Data Analysis", target_domain:"technical", mapping_strength:"secondary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // FOUNDATIONAL — Problem Solving
  // ─────────────────────────────────────────────
  {
    id: "f-007", slug: "problem-solving", name: "Problem Solving",
    domain: "foundational", type: "problem_solving", cluster: "Core Transferable Skills",
    definition: "The ability to identify, analyze, and resolve problems systematically — by gathering relevant information, evaluating options, and selecting and implementing effective solutions.",
    why_it_matters: "Every job involves problems. Workers who can diagnose root causes, think through options, and act decisively reduce costs, improve service, and drive continuous improvement across every sector.",
    components: ["Identify the real problem, not just the symptom", "Gather and evaluate relevant information", "Generate and assess solution options", "Implement and monitor solutions", "Learn and improve from outcomes"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3,4,5],
    noc_domains: ["Technology","Business","Trades","Government","Health"],
    source_frameworks: ["ESDC Skills for Success"],
    proficiency_levels: [
      { level:1, label:"Foundation", summary:"Solves simple, familiar problems with guidance; escalates complex issues appropriately.", observable_behaviors:["Identifies when a problem exists and asks for help","Tries one or two basic solutions before escalating"], positive_indicators:["Asks clarifying questions to understand the problem before acting"], risk_indicators:["May act on the first idea without considering alternatives"], evidence_expectations:["Description of a problem they encountered and what they did"], typical_role_examples:["Student","Entry-level worker","Trainee"] },
      { level:2, label:"Working", summary:"Solves routine problems independently; applies structured thinking in familiar domains.", observable_behaviors:["Breaks a problem into smaller steps and works through them systematically","Checks whether a solution is working and adjusts if not"], positive_indicators:["Resolves day-to-day issues without needing to escalate routinely"], risk_indicators:["May apply familiar solutions to problems that require new approaches"], evidence_expectations:["SAT describing a problem they solved independently"], typical_role_examples:["Coordinator","Customer service rep","Junior analyst"] },
      { level:3, label:"Proficient", summary:"Diagnoses complex problems; applies analytical frameworks and involves the right people.", observable_behaviors:["Uses root cause analysis or structured frameworks to diagnose problems","Engages subject matter experts and stakeholders in problem-solving"], positive_indicators:["Solutions they implement address root causes, not just symptoms"], risk_indicators:["May over-analyze before acting when speed is needed"], evidence_expectations:["Case study of a complex problem solved with method described"], typical_role_examples:["Business analyst","Senior coordinator","Team lead"] },
      { level:4, label:"Advanced", summary:"Solves systemic organizational problems; builds problem-solving capacity in the team.", observable_behaviors:["Identifies patterns in recurring problems and addresses systemic causes","Coaches team on structured problem-solving methods"], positive_indicators:["Problems that used to recur are resolved at root cause under their leadership"], risk_indicators:["May spend organizational resources on systemic solutions when tactical fixes suffice"], evidence_expectations:["Evidence of a systemic problem they resolved with lasting impact"], typical_role_examples:["Manager","Senior advisor","Process improvement lead"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational problem-solving culture; advises on complex, cross-cutting challenges.", observable_behaviors:["Defines organizational approaches to complex, ambiguous problems","Advises executives on high-stakes, multi-stakeholder challenges"], positive_indicators:["Known as the person to call on the most difficult organizational problems"], risk_indicators:["May prefer elegant systemic solutions when stakeholders need quick wins"], evidence_expectations:["Major organizational challenge resolved at executive level"], typical_role_examples:["Deputy Minister","VP Operations","Chief of Staff"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"A process your team relies on has been producing inconsistent results for two months. You have been asked to investigate and fix it. Walk us through your approach.", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"analytical-thinking", target_name:"Analytical Thinking", target_domain:"behavioural", mapping_strength:"primary" }, { target_slug:"judgment", target_name:"Judgment", target_domain:"behavioural", mapping_strength:"secondary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // FOUNDATIONAL — Reading
  // ─────────────────────────────────────────────
  {
    id: "f-008", slug: "reading", name: "Reading",
    domain: "foundational", type: "reading", cluster: "Core Transferable Skills",
    definition: "The ability to understand and interpret written text at the level of complexity required by the job — including instructions, reports, policies, procedures, and technical documentation.",
    why_it_matters: "Reading is fundamental to following workplace instructions, understanding policies, processing client information, and making informed decisions. Inadequate reading skills create errors, safety risks, and service quality issues.",
    components: ["Decode and comprehend written text", "Identify key information and main ideas", "Interpret complex documents and policies", "Read critically and evaluate sources", "Apply information from text to work tasks"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3,4,5],
    noc_domains: ["Government","Health","Business","Trades","Education"],
    source_frameworks: ["ESDC Skills for Success"],
    proficiency_levels: [
      { level:1, label:"Foundation", esdc_equivalent:"ESDC Reading Level 1", summary:"Reads simple texts on familiar topics; struggles with multi-step instructions.", observable_behaviors:["Reads short, simple instructions with familiar vocabulary","May need information re-read or explained verbally"], positive_indicators:["Asks for clarification rather than guessing when text is unclear"], risk_indicators:["May miss key details in moderately complex documents"], evidence_expectations:["Completion of a simple reading task with explanation"], typical_role_examples:["Entry-level labourer","Retail associate","Trainee"] },
      { level:2, label:"Working", esdc_equivalent:"ESDC Reading Level 2", summary:"Reads standard workplace documents accurately; understands policies and procedures.", observable_behaviors:["Reads and applies standard operating procedures independently","Extracts key information from reports and memos"], positive_indicators:["Follows written instructions reliably without verbal backup"], risk_indicators:["May struggle with highly technical, legal, or policy-dense documents"], evidence_expectations:["Example of applying written instructions to a task"], typical_role_examples:["Administrative assistant","Customer service rep","Junior coordinator"] },
      { level:3, label:"Proficient", esdc_equivalent:"ESDC Reading Level 3", summary:"Reads complex professional documents; interprets technical and policy content.", observable_behaviors:["Reads legislation, contracts, or technical manuals and applies them to work","Summarizes complex documents for non-specialist audiences"], positive_indicators:["Accurately interprets ambiguous or complex texts"], risk_indicators:["May over-interpret ambiguous language rather than seeking clarification"], evidence_expectations:["Example of interpreting a complex document for a decision or briefing"], typical_role_examples:["Policy analyst","Business analyst","HR generalist"] },
      { level:4, label:"Advanced", summary:"Reads critically across genres; synthesizes multiple complex sources for strategic decisions.", observable_behaviors:["Synthesizes research, policy, and technical documents into strategic recommendations","Evaluates credibility and bias in multiple sources"], positive_indicators:["Reading and synthesis work directly informs leadership decisions"], risk_indicators:["May invest in exhaustive literature review when targeted reading suffices"], evidence_expectations:["Literature review, policy brief, or synthesis document they authored"], typical_role_examples:["Senior advisor","Director","Research lead"] },
      { level:5, label:"Expert / Strategist", summary:"Sets organizational standards for information literacy; advises on knowledge management.", observable_behaviors:["Designs knowledge management and information access frameworks","Advises on what the organization should be reading and monitoring"], positive_indicators:["Organization has a culture of evidence-informed practice attributable to their leadership"], risk_indicators:["May over-systematize reading/knowledge processes for agile teams"], evidence_expectations:["Knowledge management system or institutional reading program they developed"], typical_role_examples:["Chief Knowledge Officer","Research Director","Senior Fellow"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"You receive a 40-page policy document and have two hours to brief your manager on its key implications for your team. How do you approach this?", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"writing", target_name:"Writing", target_domain:"foundational", mapping_strength:"primary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // FOUNDATIONAL — Writing
  // ─────────────────────────────────────────────
  {
    id: "f-009", slug: "writing", name: "Writing",
    domain: "foundational", type: "writing", cluster: "Core Transferable Skills",
    definition: "The ability to express ideas clearly and accurately in written form at the level of complexity required by the job — including emails, reports, summaries, proposals, and formal documents.",
    why_it_matters: "Clear writing is a professional multiplier. It reduces miscommunication, creates a permanent record, and signals competence. Poor writing creates confusion, errors, and reputational risk in any organization.",
    components: ["Write clearly and concisely", "Organize ideas logically", "Adapt tone and style to audience", "Edit and proofread effectively", "Write formal and professional documents"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3,4,5],
    noc_domains: ["Government","Business","Health","Education","Technology"],
    source_frameworks: ["ESDC Skills for Success"],
    proficiency_levels: [
      { level:1, label:"Foundation", esdc_equivalent:"ESDC Writing Level 1", summary:"Writes simple messages on familiar topics; frequent errors in grammar and structure.", observable_behaviors:["Writes short emails or notes with simple vocabulary","Makes frequent spelling or grammar errors in written work"], positive_indicators:["Makes effort to communicate in writing even when it is challenging"], risk_indicators:["Written messages may be misunderstood due to errors or lack of clarity"], evidence_expectations:["Short written message with context explanation"], typical_role_examples:["Entry-level worker","Student","Career changer"] },
      { level:2, label:"Working", esdc_equivalent:"ESDC Writing Level 2", summary:"Writes professional emails and basic documents with minimal errors; appropriate tone for context.", observable_behaviors:["Writes clear, professional emails without major grammar errors","Produces basic reports or summaries with logical structure"], positive_indicators:["Written work conveys the intended message reliably"], risk_indicators:["Complex topics may result in unclear or disorganized writing"], evidence_expectations:["Work email or brief report they authored"], typical_role_examples:["Administrative assistant","Coordinator","Recent graduate"] },
      { level:3, label:"Proficient", esdc_equivalent:"ESDC Writing Level 3", summary:"Writes well-structured professional documents for varied audiences; edits others' work.", observable_behaviors:["Writes policy briefs, proposals, or project reports independently","Adapts writing style clearly for technical vs. non-technical audiences"], positive_indicators:["Writing is clear, accurate, and credible without heavy editing"], risk_indicators:["May over-write — adding detail that obscures the main message"], evidence_expectations:["A professional report, brief, or proposal they authored"], typical_role_examples:["Business analyst","Policy coordinator","HR advisor"] },
      { level:4, label:"Advanced", summary:"Writes strategic-level documents; coaches others and sets standards for organizational writing.", observable_behaviors:["Authors executive briefings, board papers, and stakeholder reports","Sets writing standards and provides coaching on quality"], positive_indicators:["Writing directly influences leadership decisions"], risk_indicators:["May rewrite others' work rather than coaching them to improve"], evidence_expectations:["Executive briefing or board document they authored"], typical_role_examples:["Senior advisor","Director","Communications lead"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational writing culture and communication standards.", observable_behaviors:["Designs organizational writing guidelines and editorial standards","Authors externally published or nationally recognized documents"], positive_indicators:["Organization's written communications are recognized for quality and clarity"], risk_indicators:["May set standards that are too prescriptive for creative or agile contexts"], evidence_expectations:["Published work, writing framework, or style guide at organizational level"], typical_role_examples:["Chief Communications Officer","Editor-in-Chief","Senior Policy Lead"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"artifact", prompt_text:"Upload a professional document you wrote (report, proposal, or brief). Describe the audience, purpose, and any feedback you received.", assessment_method:"work_sample" }],
    crosswalks: [{ target_slug:"reading", target_name:"Reading", target_domain:"foundational", mapping_strength:"primary" }, { target_slug:"technical-writing", target_name:"Technical Writing", target_domain:"technical", mapping_strength:"secondary" }],
    version:"1.0", status:"active",
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
  // ─────────────────────────────────────────────
  // BEHAVIOURAL — Analytical Thinking
  // ─────────────────────────────────────────────
  {
    id: "b-002", slug: "analytical-thinking", name: "Analytical Thinking",
    domain: "behavioural", type: "thinking_judgment", cluster: "Thinking & Judgment",
    definition: "The ability to break down complex information into component parts, identify patterns, recognize cause-and-effect relationships, and draw sound conclusions from data and evidence.",
    why_it_matters: "Analytical thinking enables better decisions. Employees who can separate signal from noise, reason from evidence, and avoid cognitive traps add measurable value in any role that involves data, policy, or problem-solving.",
    components: ["Break complex problems into components", "Identify patterns and root causes", "Weigh evidence before reaching conclusions", "Recognize assumptions and biases", "Apply logical reasoning systematically"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3],
    noc_domains: ["Business","Technology","Government","Finance","Health"],
    source_frameworks: ["IRCC Behavioural Competency Dictionary","CRA Competencies"],
    proficiency_levels: [
      { level:1, label:"Foundation", summary:"Identifies obvious cause-and-effect relationships with guidance; analysis is surface-level.", observable_behaviors:["Identifies the most obvious cause of a problem when prompted","Lists pros and cons of simple options with support"], positive_indicators:["Asks 'why' before jumping to conclusions"], risk_indicators:["May act on first impressions without investigating further"], evidence_expectations:["Short explanation of how they worked through a simple problem"], typical_role_examples:["Student","Trainee","Entry-level worker"] },
      { level:2, label:"Working", summary:"Analyses routine situations independently; uses structured approaches to identify key issues.", observable_behaviors:["Breaks a problem into parts and works through each systematically","Identifies the most likely cause among a few options"], positive_indicators:["Analysis leads to correct identification of issues in routine cases"], risk_indicators:["May miss non-obvious factors or second-order effects"], evidence_expectations:["SAT describing an analysis they conducted"], typical_role_examples:["Administrative coordinator","Junior analyst","Customer service rep"] },
      { level:3, label:"Proficient", summary:"Applies rigorous analysis to complex situations; synthesizes multiple information sources.", observable_behaviors:["Uses frameworks (e.g. root cause, fishbone, SWOT) to structure analysis","Synthesizes qualitative and quantitative information into clear conclusions"], positive_indicators:["Recommendations are evidence-based and withstand scrutiny"], risk_indicators:["May over-analyze when a timely decision is needed"], evidence_expectations:["Analysis document or case study they authored"], typical_role_examples:["Business analyst","Policy advisor","Senior coordinator"] },
      { level:4, label:"Advanced", summary:"Leads analytical work for high-stakes decisions; builds analytical capability in teams.", observable_behaviors:["Designs analytical frameworks adopted by the team","Coaches others on evidence-based reasoning and avoiding cognitive biases"], positive_indicators:["Analytical quality of the team's work improves under their guidance"], risk_indicators:["May default to complex quantitative analysis when simpler approaches would suffice"], evidence_expectations:["Analytical framework or methodology they developed"], typical_role_examples:["Senior analyst","Manager","Research director"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational intelligence and analytical strategy; advises at executive level.", observable_behaviors:["Defines how the organization collects, analyzes, and uses evidence","Advises senior leaders on analytical approaches to strategic decisions"], positive_indicators:["Organization is recognized for evidence-based decision-making"], risk_indicators:["May set analytical standards too high for operational timelines"], evidence_expectations:["Enterprise analytics strategy or sector-recognized methodology"], typical_role_examples:["Chief Analytics Officer","VP Strategy","Director General"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"Your team's program results have declined for three consecutive quarters. You've been asked to investigate and present findings to leadership. Walk us through your analytical approach.", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"problem-solving", target_name:"Problem Solving", target_domain:"foundational", mapping_strength:"primary" }, { target_slug:"judgment", target_name:"Judgment", target_domain:"behavioural", mapping_strength:"primary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // BEHAVIOURAL — Client Service Orientation
  // ─────────────────────────────────────────────
  {
    id: "b-003", slug: "client-service-orientation", name: "Client Service Orientation",
    domain: "behavioural", type: "client_partner", cluster: "Client & Partner Focus",
    definition: "The genuine desire to understand and meet the needs of clients, stakeholders, or service users — and to take action that creates value and trust in every interaction.",
    why_it_matters: "Client service is a core expectation across public and private sectors. Workers who prioritize client needs, follow through on commitments, and handle difficult interactions professionally protect organizational reputation and drive satisfaction.",
    components: ["Understand client needs and expectations", "Communicate clearly and promptly", "Follow through on commitments", "Handle difficult situations with composure", "Seek and act on client feedback"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3,4,5],
    noc_domains: ["Government","Health","Retail","Business","Finance"],
    source_frameworks: ["IRCC Behavioural Competency Dictionary","BC Public Service Competencies"],
    proficiency_levels: [
      { level:1, label:"Foundation", summary:"Responds to client requests politely; handles standard interactions with guidance.", observable_behaviors:["Greets clients and responds to basic inquiries","Escalates complex or difficult situations appropriately"], positive_indicators:["Maintains a respectful tone even when clients are difficult"], risk_indicators:["May become flustered or defensive when clients express frustration"], evidence_expectations:["Description of a client interaction they handled"], typical_role_examples:["Trainee","Retail associate","Reception staff"] },
      { level:2, label:"Working", summary:"Handles routine client interactions independently; resolves standard issues and follows up.", observable_behaviors:["Handles common client complaints or requests without supervision","Follows up to confirm client issues have been resolved"], positive_indicators:["Clients leave interactions feeling heard and helped"], risk_indicators:["May apply standard solutions to situations that require more flexibility"], evidence_expectations:["SAT describing a client issue they resolved"], typical_role_examples:["Customer service rep","Intake officer","Junior coordinator"] },
      { level:3, label:"Proficient", summary:"Proactively addresses client needs; builds ongoing relationships and advocates internally for clients.", observable_behaviors:["Anticipates client needs based on past patterns and proactively addresses them","Acts as internal advocate for the client's perspective in process decisions"], positive_indicators:["Clients consistently report high satisfaction with their service"], risk_indicators:["May take client preferences as absolute without considering organizational constraints"], evidence_expectations:["Example of improving a client process based on feedback"], typical_role_examples:["Account manager","Senior service officer","Client relations specialist"] },
      { level:4, label:"Advanced", summary:"Sets service standards for the team; builds a client-centred culture.", observable_behaviors:["Designs service standards, scripts, and recovery processes","Coaches team on handling complex or sensitive client situations"], positive_indicators:["Team service metrics improve under their leadership"], risk_indicators:["May prioritize individual client satisfaction over equitable service delivery"], evidence_expectations:["Service standard or training material they created"], typical_role_examples:["Service manager","Director of Client Experience","Operations lead"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational service philosophy; advises on enterprise client experience strategy.", observable_behaviors:["Defines the organization's client service vision and governance","Leads service transformation initiatives at scale"], positive_indicators:["Organization is recognized for client service excellence"], risk_indicators:["Service vision may be aspirational without sufficient operational planning"], evidence_expectations:["Service strategy or transformation case study they led"], typical_role_examples:["Chief Customer Officer","VP Service Delivery","Director General"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"A long-standing client contacts you frustrated because the same issue has occurred for the third time. How do you handle this interaction and what do you do next?", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"managing-a-quality-service", target_name:"Managing a Quality Service", target_domain:"behavioural", mapping_strength:"primary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // LEADERSHIP — Create Vision and Strategy
  // ─────────────────────────────────────────────
  {
    id: "l-002", slug: "create-vision-and-strategy", name: "Create Vision and Strategy",
    domain: "leadership", type: "vision_strategy", cluster: "Key Leadership Competencies",
    definition: "The ability to define a compelling direction for the organization, translate environmental trends into strategic priorities, and align the team around a shared purpose and long-term goals.",
    why_it_matters: "Leaders who can see the bigger picture and communicate a credible direction provide the clarity that enables their teams to make good daily decisions. Vision and strategy are the foundation of organizational alignment and sustained performance.",
    components: ["Scan the environment and identify trends", "Translate strategy into clear priorities", "Articulate a compelling vision", "Align team and resources to strategic direction", "Revisit and adapt strategy as conditions change"],
    applicable_roles: ["manager","director","executive"], teer_relevance: [0,1],
    noc_domains: ["Business","Government","Health","Technology","Education"],
    source_frameworks: ["Treasury Board of Canada Secretariat — Key Leadership Competencies"],
    proficiency_levels: [
      { level:1, label:"Foundation", summary:"Understands the team's strategic direction; connects daily work to broader goals.", observable_behaviors:["Articulates how their work contributes to the team's goals when asked","Reads and understands strategic plans and direction documents"], positive_indicators:["Makes decisions that align with stated team priorities"], risk_indicators:["May struggle to explain the 'why' behind work to others"], evidence_expectations:["Reflection on how their work connects to organizational strategy"], typical_role_examples:["Individual contributor","Early-career analyst"] },
      { level:2, label:"Working", summary:"Contributes to team strategy; identifies emerging issues and shares insights with leadership.", observable_behaviors:["Raises strategic considerations or risks in team planning discussions","Scans external environment and brings relevant intelligence to the team"], positive_indicators:["Strategic input is valued and acted upon by leadership"], risk_indicators:["May focus on operational concerns without connecting them to strategy"], evidence_expectations:["Example of a strategic insight they contributed"], typical_role_examples:["Senior analyst","Advisor","Team lead"] },
      { level:3, label:"Proficient", summary:"Develops team-level strategy; translates organizational direction into operational plans.", observable_behaviors:["Creates multi-year team plans aligned to organizational strategy","Engages team in co-creating direction and builds shared ownership"], positive_indicators:["Team understands and is energized by the direction set"], risk_indicators:["May set team priorities without sufficient alignment with peer teams"], evidence_expectations:["Team strategic plan or multi-year operational plan they developed"], typical_role_examples:["Manager","Director","Senior advisor"] },
      { level:4, label:"Advanced", summary:"Leads organizational strategy development; drives alignment across functions.", observable_behaviors:["Leads strategic planning processes involving multiple departments","Synthesizes complex environmental trends into strategic recommendations for executives"], positive_indicators:["Strategic plans they develop are adopted and sustained"], risk_indicators:["May develop ambitious strategies without sufficient operational grounding"], evidence_expectations:["Organizational strategy document they authored or led"], typical_role_examples:["Director General","VP","Chief of Staff"] },
      { level:5, label:"Expert / Strategist", summary:"Sets organizational vision at the highest level; leads sector-wide strategy.", observable_behaviors:["Defines the organization's mission, vision, and long-term strategic direction","Represents the organization in national or cross-sector strategic forums"], positive_indicators:["Organization's strategic positioning is recognized as a competitive strength"], risk_indicators:["Long-term visioning may create tension with short-term accountability expectations"], evidence_expectations:["Published strategic vision or sector-recognized strategic leadership"], typical_role_examples:["CEO","Deputy Minister","ADM"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"Your organization is facing a significant shift in its operating environment — new regulations, budget reductions, and a changing client base. You have been asked to lead the strategic planning process for your division. Where do you start?", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"strategic-thinking", target_name:"Strategic Thinking", target_domain:"behavioural", mapping_strength:"primary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // LEADERSHIP — Mobilize People
  // ─────────────────────────────────────────────
  {
    id: "l-003", slug: "mobilize-people", name: "Mobilize People",
    domain: "leadership", type: "mobilizing_people", cluster: "Key Leadership Competencies",
    definition: "The ability to inspire, engage, and develop others — creating conditions where people are motivated to contribute their best, grow professionally, and work together toward shared goals.",
    why_it_matters: "Leaders who can mobilize people multiply organizational capacity. They attract talent, retain high performers, develop the next generation of leaders, and create teams that consistently outperform.",
    components: ["Inspire and motivate through a compelling narrative", "Coach and develop direct reports", "Recognize contributions and build morale", "Create psychological safety for risk and learning", "Manage performance constructively and fairly"],
    applicable_roles: ["supervisor","manager","director","executive"], teer_relevance: [0,1,2],
    noc_domains: ["Business","Government","Health","Education","Technology"],
    source_frameworks: ["Treasury Board of Canada Secretariat — Key Leadership Competencies"],
    proficiency_levels: [
      { level:1, label:"Foundation", summary:"Supports teammates effectively; beginning to develop influence without formal authority.", observable_behaviors:["Encourages peers and contributes positively to team morale","Offers to help others when workload allows"], positive_indicators:["People seek their collaboration voluntarily"], risk_indicators:["May struggle to give constructive feedback to peers"], evidence_expectations:["Reflection on a time they motivated someone without a formal role"], typical_role_examples:["Student leader","Peer mentor","Team member"] },
      { level:2, label:"Working", summary:"Contributes to team engagement; beginning to coach and develop others.", observable_behaviors:["Provides on-the-job guidance to junior team members","Gives specific, actionable feedback when asked"], positive_indicators:["Junior team members develop faster with their involvement"], risk_indicators:["Feedback may be too gentle to create real behavior change"], evidence_expectations:["Example of how they helped someone develop a skill"], typical_role_examples:["Senior team member","Informal mentor","Supervisor"] },
      { level:3, label:"Proficient", summary:"Leads team engagement; coaches, develops, and manages performance directly.", observable_behaviors:["Conducts regular 1:1s focused on development and performance","Creates a psychologically safe environment where people take risks and learn"], positive_indicators:["Employee satisfaction and development are high on their team"], risk_indicators:["May avoid difficult performance conversations to preserve relationships"], evidence_expectations:["Manager endorsement or team survey results reflecting engagement"], typical_role_examples:["Manager","Director","Team lead"] },
      { level:4, label:"Advanced", summary:"Builds leadership capacity across the organization; designs talent systems.", observable_behaviors:["Identifies and develops high-potential leaders across the organization","Designs performance management, coaching, and succession systems"], positive_indicators:["Multiple leaders trace their development to this person's sponsorship"], risk_indicators:["May invest in high-potential development at the expense of broader team engagement"], evidence_expectations:["Succession plan or leadership development program they created"], typical_role_examples:["Director General","VP People","Chief People Officer"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational culture and talent philosophy; builds employer brand.", observable_behaviors:["Defines the organization's leadership philosophy and people strategy","Is recognized externally as a leader in talent development"], positive_indicators:["Organization has a strong reputation as a developer of leaders"], risk_indicators:["May set cultural aspirations that outpace structural and operational readiness"], evidence_expectations:["People strategy or published thought leadership on talent development"], typical_role_examples:["CEO","CHRO","Deputy Minister"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"A high-performing team member has become disengaged following a reorganization. Their work is still adequate but the energy they brought is gone. What do you do?", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"developing-others", target_name:"Developing Others", target_domain:"behavioural", mapping_strength:"primary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // TECHNICAL — Data Analysis
  // ─────────────────────────────────────────────
  {
    id: "t-002", slug: "data-analysis", name: "Data Analysis",
    domain: "technical", type: "data_analysis", cluster: "Data & Analysis",
    definition: "The ability to collect, clean, interpret, and communicate data to support evidence-based decisions — using analytical tools, statistical methods, and data visualization techniques appropriate to the task.",
    why_it_matters: "Every organization runs on data. Analysts who can turn raw data into actionable insight help their organizations make better decisions, identify opportunities, and demonstrate program impact.",
    components: ["Collect and validate data sources", "Clean and prepare data for analysis", "Apply appropriate analytical methods", "Visualize and communicate findings", "Interpret results in business context"],
    applicable_roles: ["individual_contributor","supervisor","manager"], teer_relevance: [0,1,2],
    noc_domains: ["Technology","Business","Government","Finance","Health"],
    source_frameworks: ["OaSIS 2025","IRCC Technical Competency Dictionary"],
    oasis_code: "DA-001",
    proficiency_levels: [
      { level:1, label:"Foundation", summary:"Understands basic data concepts; can collect and enter data accurately.", observable_behaviors:["Records and enters data accurately in provided templates","Understands what a dataset is and what fields represent"], positive_indicators:["Data entry is accurate and consistent"], risk_indicators:["May not recognize data quality issues or errors"], evidence_expectations:["Description of a data collection or entry task they completed"], typical_role_examples:["Data entry clerk","Research assistant","Trainee"] },
      { level:2, label:"Working", summary:"Analyses structured datasets using spreadsheets; produces basic summaries and charts.", observable_behaviors:["Uses Excel or Google Sheets for data sorting, filtering, and basic calculations","Creates simple charts (bar, line, pie) to communicate findings"], positive_indicators:["Analyses are accurate and clearly presented"], risk_indicators:["May present data without sufficient context or interpretation"], evidence_expectations:["A spreadsheet analysis or chart they created with explanation"], typical_role_examples:["Administrative analyst","Junior coordinator","Reporting officer"] },
      { level:3, label:"Proficient", summary:"Conducts multi-variable analysis using analytical tools; draws meaningful conclusions from complex datasets.", observable_behaviors:["Uses SQL, Python, R, or BI tools for data extraction and analysis","Identifies trends, outliers, and patterns and explains their significance"], positive_indicators:["Analysis drives program or business decisions"], risk_indicators:["May over-engineer analysis when simpler approaches are sufficient"], evidence_expectations:["Analysis report or dashboard they created with business impact described"], typical_role_examples:["Data analyst","Business analyst","Research officer"] },
      { level:4, label:"Advanced", summary:"Leads analytical projects; designs data infrastructure and coaches analytical teams.", observable_behaviors:["Designs data pipelines and analytical frameworks for the team","Translates executive questions into analytical methodologies"], positive_indicators:["Analytical capability of the team increases under their guidance"], risk_indicators:["May delay delivery by seeking perfect data when good-enough is available"], evidence_expectations:["Data strategy or analytical framework they designed"], typical_role_examples:["Senior data analyst","Analytics manager","Data lead"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational data strategy; advises on enterprise analytics architecture.", observable_behaviors:["Defines data governance, quality standards, and analytics strategy","Advises executives on data investments and analytical capability building"], positive_indicators:["Organization makes measurably better decisions due to their data strategy"], risk_indicators:["Technical focus may outpace organizational data literacy"], evidence_expectations:["Published data strategy or sector-recognized analytical contribution"], typical_role_examples:["Chief Data Officer","VP Analytics","Director of Evaluation"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"You receive three months of program data with inconsistencies in how different sites recorded information. Your director wants a summary report by end of week. What is your approach?", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"numeracy", target_name:"Numeracy", target_domain:"foundational", mapping_strength:"primary" }, { target_slug:"data-literacy", target_name:"Data Literacy", target_domain:"digital", mapping_strength:"primary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // TECHNICAL — Financial Analysis
  // ─────────────────────────────────────────────
  {
    id: "t-003", slug: "financial-analysis", name: "Financial Analysis",
    domain: "technical", type: "finance", cluster: "Finance",
    definition: "The ability to interpret financial statements, analyze performance against budgets, build financial models, and provide recommendations that support sound financial decision-making.",
    why_it_matters: "Financial analysis provides the quantitative backbone for business decisions. Professionals who can read financial data, model scenarios, and communicate findings clearly help organizations allocate resources effectively and manage risk.",
    components: ["Read and interpret financial statements", "Analyse budget variance and performance", "Build financial models and forecasts", "Identify financial risks and opportunities", "Communicate financial findings to non-financial audiences"],
    applicable_roles: ["individual_contributor","supervisor","manager","director"], teer_relevance: [0,1,2],
    noc_domains: ["Finance","Business","Government","Technology"],
    source_frameworks: ["OaSIS 2025","IRCC Technical Competency Dictionary"],
    oasis_code: "FIN-002",
    proficiency_levels: [
      { level:1, label:"Foundation", summary:"Reads basic financial documents with guidance; understands fundamental concepts.", observable_behaviors:["Understands income statements, balance sheets, and basic financial terms","Records transactions accurately using provided templates or systems"], positive_indicators:["Financial data entry is accurate"], risk_indicators:["May confuse revenue with profit or misinterpret line items"], evidence_expectations:["Description of financial tasks performed in a role"], typical_role_examples:["Accounts payable clerk","Finance student","Administrative assistant"] },
      { level:2, label:"Working", summary:"Performs routine financial analysis; tracks actuals against budget.", observable_behaviors:["Prepares monthly budget variance reports","Reconciles accounts and flags discrepancies for review"], positive_indicators:["Variance reports are accurate and submitted on time"], risk_indicators:["May not explain the business context behind variances"], evidence_expectations:["Budget report or variance summary they produced"], typical_role_examples:["Financial coordinator","Junior analyst","Budget officer"] },
      { level:3, label:"Proficient", summary:"Builds financial models; conducts multi-year analysis and provides business recommendations.", observable_behaviors:["Creates DCF or business case models for investment decisions","Identifies margin trends and recommends corrective actions"], positive_indicators:["Financial analysis directly informs business decisions"], risk_indicators:["May build complexity into models that obscures key insights"], evidence_expectations:["Financial model or business case they authored"], typical_role_examples:["Financial analyst","Senior budget officer","Business analyst"] },
      { level:4, label:"Advanced", summary:"Leads financial planning for complex programs; advises executives on financial strategy.", observable_behaviors:["Leads annual budget cycle for multi-million-dollar programs","Advises senior leadership on financial risk and investment decisions"], positive_indicators:["Financial health of programs they oversee is consistently sound"], risk_indicators:["May optimize financial metrics at the expense of program outcomes"], evidence_expectations:["Multi-year financial plan or executive briefing on financial strategy"], typical_role_examples:["Finance manager","Director of Finance","CFO"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational financial strategy and governance; advises at board or ministerial level.", observable_behaviors:["Defines financial governance frameworks and investment policies","Provides expert testimony or board-level financial guidance"], positive_indicators:["Organization's financial resilience improves under their leadership"], risk_indicators:["Strategic financial focus may lose sight of operational fiscal realities"], evidence_expectations:["Financial governance framework or sector-recognized contribution"], typical_role_examples:["CFO","Chief Financial Strategist","Deputy Minister Finance"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"Your division is 15% over budget at the midpoint of the fiscal year. Your director asks you to diagnose the cause and prepare options for course correction. Walk us through your approach.", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"data-analysis", target_name:"Data Analysis", target_domain:"technical", mapping_strength:"secondary" }, { target_slug:"numeracy", target_name:"Numeracy", target_domain:"foundational", mapping_strength:"secondary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // DIGITAL — Data Literacy
  // ─────────────────────────────────────────────
  {
    id: "d-002", slug: "data-literacy", name: "Data Literacy",
    domain: "digital", type: "data_tools", cluster: "Digital Competencies",
    definition: "The ability to read, understand, interpret, and communicate with data — knowing when data is relevant, how to evaluate its quality, and how to use it to support decisions without requiring deep technical expertise.",
    why_it_matters: "Data now informs decisions at every level of every organization. Workers who can interpret data, spot misleading charts, and ask the right questions about information quality are better equipped to contribute to evidence-based workplaces.",
    components: ["Read charts and data summaries accurately", "Evaluate data quality and source credibility", "Interpret statistical claims with appropriate skepticism", "Communicate using data effectively", "Apply data to support workplace decisions"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3,4,5],
    noc_domains: ["Business","Government","Technology","Health","Finance"],
    source_frameworks: ["ESDC Skills for Success — Digital","OaSIS 2025"],
    proficiency_levels: [
      { level:1, label:"Foundation", esdc_equivalent:"Below Entry — ESDC Digital", summary:"Understands that data is used to make decisions; reads basic charts with support.", observable_behaviors:["Reads bar or pie charts with simple labels","Understands what a table of numbers represents at a basic level"], positive_indicators:["Willing to engage with data when guided"], risk_indicators:["May take statistical claims at face value without questioning them"], evidence_expectations:["Short description of a data-informed decision they observed or participated in"], typical_role_examples:["Student","Entry-level worker","Career changer"] },
      { level:2, label:"Working", esdc_equivalent:"Entry — ESDC Digital", summary:"Reads and interprets standard charts and dashboards; asks good questions about data.", observable_behaviors:["Reads trend charts, tables, and dashboards used in their role","Questions the source or methodology of data when something seems off"], positive_indicators:["Uses data from reports to support day-to-day decisions"], risk_indicators:["May misinterpret correlation as causation"], evidence_expectations:["Example of using data to support a recommendation or decision"], typical_role_examples:["Administrative analyst","Coordinator","Customer service supervisor"] },
      { level:3, label:"Proficient", esdc_equivalent:"Intermediate — ESDC Digital", summary:"Critically evaluates data quality and methodology; communicates data insights clearly.", observable_behaviors:["Identifies limitations in data sets (sample size, missing data, bias)","Presents data clearly to non-technical audiences using appropriate visualizations"], positive_indicators:["Data communications are clear and do not overstate conclusions"], risk_indicators:["May overwhelm audiences with too much data when a key insight is needed"], evidence_expectations:["Data summary or presentation they created for a non-technical audience"], typical_role_examples:["Business analyst","Reporting officer","Program officer"] },
      { level:4, label:"Advanced", esdc_equivalent:"Advanced — ESDC Digital", summary:"Designs data reporting systems; builds team data literacy.", observable_behaviors:["Designs dashboards and reporting frameworks for organizational use","Coaches team members on data interpretation and evidence-based reasoning"], positive_indicators:["Team data literacy and confidence improve under their guidance"], risk_indicators:["May design highly sophisticated systems that the team cannot maintain independently"], evidence_expectations:["Dashboard or reporting framework they designed with adoption outcomes"], typical_role_examples:["Senior analyst","Data manager","Operations director"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational data culture; advises on enterprise data literacy strategy.", observable_behaviors:["Defines organizational data literacy standards and training programs","Advises executives on data culture and organizational intelligence capacity"], positive_indicators:["Organization is recognized for strong data-driven culture"], risk_indicators:["May focus on advanced capabilities before foundational literacy gaps are addressed"], evidence_expectations:["Data literacy program or organizational data strategy they authored"], typical_role_examples:["Chief Data Officer","VP Analytics","Director of Insights"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"A stakeholder presents a chart showing a 40% increase in program uptake and claims the program is highly successful. What questions do you ask before accepting this conclusion?", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"data-analysis", target_name:"Data Analysis", target_domain:"technical", mapping_strength:"primary" }, { target_slug:"ai-literacy", target_name:"AI Literacy", target_domain:"digital", mapping_strength:"secondary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // DIGITAL — Cybersecurity Awareness
  // ─────────────────────────────────────────────
  {
    id: "d-003", slug: "cybersecurity-awareness", name: "Cybersecurity Awareness",
    domain: "digital", type: "safe_practices", cluster: "Digital Competencies",
    definition: "The ability to recognize cybersecurity risks in everyday work, apply safe digital practices, protect organizational and personal data, and respond appropriately to suspected security incidents.",
    why_it_matters: "Cyber threats are a leading risk for Canadian organizations. Most security breaches involve human error — phishing, weak passwords, or mishandling data. Workers who practice good cyber hygiene significantly reduce organizational risk.",
    components: ["Recognize phishing and social engineering attempts", "Use strong passwords and multi-factor authentication", "Handle sensitive data according to policy", "Report suspected security incidents promptly", "Apply safe practices when using cloud and AI tools"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3,4,5],
    noc_domains: ["Technology","Government","Finance","Health","Business"],
    source_frameworks: ["ESDC Skills for Success — Digital","OaSIS 2025"],
    proficiency_levels: [
      { level:1, label:"Foundation", esdc_equivalent:"Below Entry — ESDC Digital", summary:"Aware of basic cybersecurity risks; follows rules when reminded.", observable_behaviors:["Uses passwords for devices and accounts","Aware that phishing emails exist but may not reliably identify them"], positive_indicators:["Asks before clicking suspicious links"], risk_indicators:["Reuses simple passwords; may click phishing links without recognizing them"], evidence_expectations:["Completion of basic security awareness training"], typical_role_examples:["Entry-level worker","Student","Non-digital-native"] },
      { level:2, label:"Working", esdc_equivalent:"Entry — ESDC Digital", summary:"Consistently applies good cyber hygiene; recognizes common threats independently.", observable_behaviors:["Uses unique strong passwords and multi-factor authentication across work accounts","Identifies and reports suspicious emails before clicking"], positive_indicators:["No security incidents attributable to their behavior"], risk_indicators:["May handle sensitive data improperly when convenience conflicts with policy"], evidence_expectations:["Description of a security incident they recognized and reported"], typical_role_examples:["Administrative staff","Coordinator","IT support"] },
      { level:3, label:"Proficient", esdc_equivalent:"Intermediate — ESDC Digital", summary:"Applies security practices consistently; advises colleagues and responds to incidents appropriately.", observable_behaviors:["Follows data classification and handling policies across all tools","Reports incidents through proper channels and supports initial response"], positive_indicators:["Is the team's go-to person for security questions"], risk_indicators:["May not stay current with evolving threats without prompting"], evidence_expectations:["Example of identifying a security risk and the action they took"], typical_role_examples:["Business analyst","Coordinator","Digital lead"] },
      { level:4, label:"Advanced", esdc_equivalent:"Advanced — ESDC Digital", summary:"Leads team security practices; evaluates tools and policies for security risk.", observable_behaviors:["Reviews and approves team use of new tools from a security perspective","Develops team security protocols and conducts security awareness training"], positive_indicators:["Team security incidents are lower than organizational average"], risk_indicators:["May over-restrict tool access in ways that reduce team productivity"], evidence_expectations:["Security protocol or training material they developed for the team"], typical_role_examples:["Security coordinator","IT manager","Digital lead"] },
      { level:5, label:"Expert / Strategist", summary:"Shapes organizational cybersecurity strategy and culture; advises at executive level.", observable_behaviors:["Defines enterprise cybersecurity governance and risk frameworks","Advises executives and boards on cybersecurity risk and investment"], positive_indicators:["Organization's security posture improves measurably under their leadership"], risk_indicators:["Security-first mindset may impede innovation or operational agility"], evidence_expectations:["Cybersecurity strategy or governance framework they authored"], typical_role_examples:["Chief Information Security Officer","VP IT Risk","Director of Cybersecurity"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"You receive an email that appears to be from your organization's IT department asking you to click a link and verify your credentials immediately. What do you do?", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"digital-skills", target_name:"Digital Skills", target_domain:"foundational", mapping_strength:"primary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // VALUES & ETHICS — Equity, Diversity and Inclusion
  // ─────────────────────────────────────────────
  {
    id: "v-002", slug: "equity-diversity-and-inclusion", name: "Equity, Diversity and Inclusion",
    abbreviation: "EDI",
    domain: "values_ethics", type: "anti_racism_inclusion", cluster: "Values & Ethics",
    definition: "The commitment to recognizing and removing systemic barriers, valuing diverse perspectives and identities, and creating workplaces where every person is treated with dignity and has equitable access to opportunity.",
    why_it_matters: "Canada's workforce is among the most diverse in the world. Organizations that embed equity, diversity, and inclusion into their culture attract better talent, make better decisions, and deliver more effective services to all Canadians.",
    components: ["Recognize unconscious bias and systemic barriers", "Value and include diverse perspectives", "Use inclusive language and practices", "Advocate for equitable access and opportunity", "Address discriminatory behaviour appropriately"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3,4,5],
    noc_domains: ["Government","Health","Business","Education","Technology"],
    source_frameworks: ["IRCC Competency Dictionary","Public Service Commission","BC Public Service"],
    proficiency_levels: [
      { level:1, label:"Foundation", summary:"Placeholder — EDI uses Compliance Tiers, not proficiency levels.", observable_behaviors:[], positive_indicators:[], risk_indicators:[], evidence_expectations:[], typical_role_examples:[] },
      { level:2, label:"Working", summary:"", observable_behaviors:[], positive_indicators:[], risk_indicators:[], evidence_expectations:[], typical_role_examples:[] },
      { level:3, label:"Proficient", summary:"", observable_behaviors:[], positive_indicators:[], risk_indicators:[], evidence_expectations:[], typical_role_examples:[] },
      { level:4, label:"Advanced", summary:"", observable_behaviors:[], positive_indicators:[], risk_indicators:[], evidence_expectations:[], typical_role_examples:[] },
      { level:5, label:"Expert / Strategist", summary:"", observable_behaviors:[], positive_indicators:[], risk_indicators:[], evidence_expectations:[], typical_role_examples:[] },
    ],
    compliance_levels: [
      { tier:"Aware", description:"Understands what equity, diversity, and inclusion mean in a Canadian workplace context and why they matter.", indicators:["Can define EDI and explain the difference between equity and equality","Aware of Canada's human rights legislation and workplace protections","Recognizes that unconscious bias exists and can affect decisions","Has completed required EDI or anti-racism training"] },
      { tier:"Practising", description:"Consistently applies EDI principles in day-to-day work interactions and decision-making.", indicators:["Uses inclusive language and avoids assumptions about identity or background","Actively seeks and includes diverse perspectives in discussions and decisions","Calls in or calls out exclusionary behaviour in the workplace","Reflects on own bias before making decisions affecting others"] },
      { tier:"Modelling", description:"Champions EDI actively; builds inclusive systems and holds others accountable.", indicators:["Advocates for structural changes to remove barriers in hiring, promotion, or service delivery","Creates conditions where colleagues from all backgrounds feel safe and valued","Addresses discriminatory or exclusionary behaviour directly and proportionately","Is recognized by colleagues as an equity champion"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"During a team meeting, a colleague makes an off-hand comment that you believe was unintentionally harmful to a team member from a marginalized group. The meeting continues without acknowledgment. What do you do?", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"values-and-ethics", target_name:"Values and Ethics", target_domain:"values_ethics", mapping_strength:"primary" }, { target_slug:"indigenous-relations-and-reconciliation", target_name:"Indigenous Relations and Reconciliation", target_domain:"values_ethics", mapping_strength:"secondary" }],
    version:"1.0", status:"active",
  },

  // ─────────────────────────────────────────────
  // VALUES & ETHICS — Indigenous Relations and Reconciliation
  // ─────────────────────────────────────────────
  {
    id: "v-003", slug: "indigenous-relations-and-reconciliation", name: "Indigenous Relations and Reconciliation",
    domain: "values_ethics", type: "cross_cultural", cluster: "Values & Ethics",
    definition: "The knowledge, skills, and commitment required to work respectfully and effectively with Indigenous peoples, communities, and governments — grounded in an understanding of Canada's colonial history, Indigenous rights, and the ongoing journey of reconciliation.",
    why_it_matters: "Reconciliation is a national imperative in Canada. All employers — public and private — are increasingly expected to understand Indigenous history, honour the rights of Indigenous peoples, and build respectful and culturally safe working relationships.",
    components: ["Understand Canada's colonial history and its impacts", "Recognize and respect Indigenous rights and sovereignty", "Build culturally safe relationships with Indigenous peoples", "Apply Indigenous cultural protocols appropriately", "Support organizational reconciliation commitments"],
    applicable_roles: ["all"], teer_relevance: [0,1,2,3,4,5],
    noc_domains: ["Government","Health","Education","Business","Natural Resources"],
    source_frameworks: ["BC Indigenous Relations Branch","IRCC Competency Dictionary","PSC Values and Ethics"],
    proficiency_levels: [
      { level:1, label:"Foundation", summary:"Placeholder — Indigenous Relations uses Compliance Tiers, not proficiency levels.", observable_behaviors:[], positive_indicators:[], risk_indicators:[], evidence_expectations:[], typical_role_examples:[] },
      { level:2, label:"Working", summary:"", observable_behaviors:[], positive_indicators:[], risk_indicators:[], evidence_expectations:[], typical_role_examples:[] },
      { level:3, label:"Proficient", summary:"", observable_behaviors:[], positive_indicators:[], risk_indicators:[], evidence_expectations:[], typical_role_examples:[] },
      { level:4, label:"Advanced", summary:"", observable_behaviors:[], positive_indicators:[], risk_indicators:[], evidence_expectations:[], typical_role_examples:[] },
      { level:5, label:"Expert / Strategist", summary:"", observable_behaviors:[], positive_indicators:[], risk_indicators:[], evidence_expectations:[], typical_role_examples:[] },
    ],
    compliance_levels: [
      { tier:"Aware", description:"Has foundational knowledge of Canada's colonial history and understands the principles of reconciliation.", indicators:["Can describe the legacy of residential schools and their ongoing impacts","Understands UNDRIP and First Nations, Métis, and Inuit distinctions","Knows what land acknowledgements are and why they matter","Has completed Introduction to Indigenous Cultural Safety or equivalent training"] },
      { tier:"Practising", description:"Applies Indigenous cultural awareness and respect in professional interactions and service delivery.", indicators:["Delivers land acknowledgements meaningfully and with understanding","Adapts service approaches to be culturally safe for Indigenous clients","Builds respectful working relationships with Indigenous colleagues and community members","Seeks learning opportunities from Indigenous perspectives proactively"] },
      { tier:"Modelling", description:"Champions reconciliation in the workplace; influences policy and practice to reflect Indigenous rights and perspectives.", indicators:["Integrates Indigenous knowledge and protocols into program or policy design","Advocates for the organization to honour its reconciliation commitments","Supports Indigenous colleagues in leadership and removes systemic barriers","Is recognized by Indigenous partners as a trusted ally and advocate"] },
    ],
    evidence_prompts: [{ level:3, prompt_type:"scenario", prompt_text:"You are designing a community outreach program that will serve Indigenous populations. A community Elder has asked to review your approach before launch. How do you engage with this request?", assessment_method:"scenario_response" }],
    crosswalks: [{ target_slug:"equity-diversity-and-inclusion", target_name:"Equity, Diversity and Inclusion", target_domain:"values_ethics", mapping_strength:"primary" }],
    version:"1.0", status:"active",
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
