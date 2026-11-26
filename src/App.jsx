
import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Mail,
  MapPin,
  MessageCircle,
  CalendarDays,
  CheckCircle2,
  Layers3,
  Workflow,
  Monitor,
  Presentation,
  Sparkles,
  GraduationCap,
  Truck,
  ShoppingBag,
  Briefcase,
  Plus,
} from "lucide-react";
import "./App.css";
import "./creative-portfolio.css";
import "./site-v2.css";
import { industries, getIndustry } from "./industries";
import MidlifeCaseStudy from "./MidlifeCaseStudy";
import logo from "./assets/beakon-lockup-dark.svg";
import portrait from "./assets/my image.png";
import aboutPortrait from "./assets/2nd image.jpg";

import phoneSystem from "./assets/portfolio/phone system.png";
import aiAnalytics from "./assets/portfolio/aI agent.png";
import applicationFollowup from "./assets/portfolio/application follow up.png";
import tourReminder from "./assets/portfolio/tour reminder workflow.png";
import nurtureCampaign from "./assets/portfolio/nurture campaign.png";
import aiLeadRescue from "./assets/portfolio/aI lead rescue.png";
import ecersAutomation from "./assets/portfolio/ecers- automation.png";
import itersAutomation from "./assets/portfolio/weekly Iters automation.png";


const email = "akingbadejames2@gmail.com";
const whatsapp = "2348141616160";
const linkedin = "https://www.linkedin.com/in/james-akingbade-8b8554246/";
const bookingUrl = "https://calendly.com/akingbadejames2/30min";

const projects = [
  {
    slug: "phone-system-and-compliance",
    title: "Phone System & Messaging Compliance",
    category: "CRM & Automation",
    description:
      "A look at phone-system configuration and messaging compliance work, including trust-centre settings and registration-related details.",
    tools: ["GoHighLevel", "Phone System", "Messaging Compliance"],
    cover: phoneSystem,
    images: [phoneSystem],
    overview:
      "This project evidence shows phone-system and messaging compliance configuration within a business platform.",
    work: [
      "Reviewed phone-system and trust-centre settings.",
      "Worked with messaging and phone compliance information.",
      "Organised configuration details within the platform.",
    ],
  },
  {
    slug: "ai-agent-analytics",
    title: "AI Agent Analytics",
    category: "CRM & Automation",
    description:
      "An operational view of AI agent activity, logs and conversation analytics.",
    tools: ["GoHighLevel", "AI", "Conversation Analytics"],
    cover: aiAnalytics,
    images: [aiAnalytics],
    overview:
      "This project showcases an AI agent analytics interface and the visibility it provides into agent activity.",
    work: [
      "Reviewed AI agent activity and logs.",
      "Worked with conversation and performance views.",
      "Used platform analytics to inspect agent interactions.",
    ],
  },
  {
    slug: "application-follow-up",
    title: "Application Follow-up Workflow",
    category: "CRM & Automation",
    description:
      "A workflow example for organising application follow-up and communication steps.",
    tools: ["GoHighLevel", "Workflows", "Automation"],
    cover: applicationFollowup,
    images: [applicationFollowup],
    overview:
      "This workflow evidence illustrates automated follow-up steps connected to an application process.",
    work: [
      "Structured application follow-up steps.",
      "Organised workflow actions and communication stages.",
      "Used automation to support a more consistent process.",
    ],
  },
  {
    slug: "tour-reminder",
    title: "Tour Reminder Automation",
    category: "CRM & Automation",
    description:
      "A reminder workflow designed to support timely communication around scheduled tours.",
    tools: ["GoHighLevel", "Workflow Automation", "Reminders"],
    cover: tourReminder,
    images: [tourReminder],
    overview:
      "This project showcases a reminder automation built around a scheduled tour process.",
    work: [
      "Organised the reminder sequence.",
      "Configured workflow steps around scheduled activity.",
      "Structured communication to support timely follow-up.",
    ],
  },
  {
    slug: "nurture-campaign",
    title: "Lead Nurture Campaign",
    category: "CRM & Automation",
    description:
      "A nurture workflow example for maintaining communication with leads over time.",
    tools: ["GoHighLevel", "Lead Nurturing", "Automation"],
    cover: nurtureCampaign,
    images: [nurtureCampaign],
    overview:
      "This project evidence shows a lead-nurturing workflow designed to support ongoing communication.",
    work: [
      "Organised nurture campaign stages.",
      "Structured follow-up actions.",
      "Connected workflow steps to the lead journey.",
    ],
  },
  {
    slug: "ai-lead-rescue",
    title: "AI Lead Rescue Workflow",
    category: "CRM & Automation",
    description:
      "An automation example focused on re-engaging leads through AI-supported follow-up.",
    tools: ["GoHighLevel", "AI", "Lead Follow-up"],
    cover: aiLeadRescue,
    images: [aiLeadRescue],
    overview:
      "This workflow example demonstrates how AI-supported follow-up can be incorporated into a lead-management process.",
    work: [
      "Structured a lead re-engagement process.",
      "Organised workflow actions for follow-up.",
      "Included AI-supported communication in the process.",
    ],
  },
  {
    slug: "ecers-checklist-automation",
    title: "ECERS Checklist Automation",
    category: "CRM & Automation",
    description:
      "A workflow example involving ECERS checklist processes and organised automation steps.",
    tools: ["GoHighLevel", "Workflow Automation", "ECERS"],
    cover: ecersAutomation,
    images: [ecersAutomation],
    overview:
      "This project evidence shows workflow configuration associated with an ECERS checklist process.",
    work: [
      "Organised checklist-related workflow steps.",
      "Structured automation actions.",
      "Worked with a process designed around checklist activities.",
    ],
  },
  {
    slug: "iters-checklist-automation",
    title: "ITERS Checklist Automation",
    category: "CRM & Automation",
    description:
      "A workflow example involving ITERS checklist processes and organised automation steps.",
    tools: ["GoHighLevel", "Workflow Automation", "ITERS"],
    cover: itersAutomation,
    images: [itersAutomation],
    overview:
      "This project evidence shows workflow configuration associated with an ITERS checklist process.",
    work: [
      "Organised checklist-related workflow steps.",
      "Structured automation actions.",
      "Worked with a process designed around checklist activities.",
    ],
  },
];
const websiteProjects = [
  {
    slug: "bandit-transfers",
    title: "Bandit Transfers",
    cover: "/portfolio/bandit-transfers-website.png",
    category: "Website Design & Redesign",
    description:
      "Website redesign for a transfer service, with a refreshed digital presentation of the business.",
    tools: ["Website Redesign", "Web Design"],
    previewLabel: "BANDIT TRANSFERS",
    previewDescription: "Transfer services",
    liveUrl: "https://bandittransfers.com/",
    overview:
      "A website redesign project for Bandit Transfers. The live website is available to explore.",
    work: [
      "Website redesign",
      "Visual presentation and page layout",
      "Digital experience refinement",
    ],
  },
  {
    slug: "west-coast-workwear",
    title: "West Coast Workwear",
    cover: "/portfolio/westcoast-workwear-website.png",
    category: "Website Design & Redesign",
    description:
      "Website redesign for a branded workwear and clothing business.",
    tools: ["Website Redesign", "Web Design"],
    previewLabel: "WEST COAST WORKWEAR",
    previewDescription: "Workwear · Uniforms · PPE",
    liveUrl: "https://www.westcoastworkwear.co.uk/",
    overview:
      "A website redesign project for West Coast Workwear. The live website presents its workwear, uniform and branded clothing offering.",
    work: [
      "Website redesign",
      "Visual presentation and page layout",
      "Digital experience refinement",
    ],
  },
  {
    slug: "wishing-aint-doing-enough",
    title: "Wishing Ain't Doing Enough",
    cover: "/portfolio/wade-website.png",
    category: "Website Design & Redesign",
    description:
      "Website redesign for a brand focused on business growth, coaching and development.",
    tools: ["Website Redesign", "Web Design"],
    previewLabel: "W.A.D.E.",
    previewDescription: "Wishing Ain't Doing Enough",
    liveUrl: "https://wishingaintdoingenough.com/",
    overview:
      "A website redesign project for Wishing Ain't Doing Enough. Explore the live website to see the brand's digital presence.",
    work: [
      "Website redesign",
      "Visual presentation and page layout",
      "Digital experience refinement",
    ],
  },
  {
    slug: "midlife-wellness-alliance",
    title: "Midlife Wellness Alliance",
    category: "Website Design & Redesign",
    description:
      "A verified provider directory and webinar system for a women's health nonprofit — ten templates, a 25-field CMS collection, and an automated registration sequence.",
    tools: ["Wix Studio", "CMS Architecture", "Velo", "Automation"],
    caseStudy: true,
    previewOverline: "SELF-INITIATED DEMONSTRATION",
    previewLabel: "MIDLIFE WELLNESS ALLIANCE",
    previewDescription: "Website · Directory · Automation",
    overview:
      "A self-initiated demonstration project: a ten-template website, a searchable verified provider directory backed by a 25-field CMS collection, and a webinar registration system with a human review gate before anything sends.",
    work: [
      "Website design and responsive page system",
      "CMS collection and dynamic provider profiles",
      "Webinar registration automation and email sequence",
      "Staff documentation and an 18-case QA pass",
    ],
  },
  {
    slug: "fansidea",
    title: "Fansidea",
    cover: "/portfolio/fansidea-website.png",
    category: "Website Design & Redesign",
    description:
      "Website redesign for a sportswear and custom jersey e-commerce brand.",
    tools: ["Website Redesign", "E-commerce Web Design"],
    previewLabel: "FANSIDEA",
    previewDescription: "Custom sportswear",
    liveUrl: "https://www.fansidea.com/",
    overview:
      "A website redesign project for Fansidea, an online sportswear and custom jersey store.",
    work: [
      "Website redesign",
      "Visual presentation and page layout",
      "E-commerce experience refinement",
    ],
  },
];


const creativeProjects = [{"slug": "customer-product-feedback", "title": "Customer & Product Feedback", "category": "Interactive Learning & eLearning", "description": "An interactive customer feedback experience that guides users through product questions and captures their experience.", "tools": ["Genially", "Interactive Design"], "kind": "video", "media": "/portfolio/customer_and_product_feed.mp4", "cover": "/portfolio/customer-product-feedback-preview.jpg", "overview": "A mobile-first feedback experience combining product questions with a structured customer response journey.", "work": ["Customer feedback flow", "Product experience questions", "Structured response journey"]}, {"slug": "customer-management-simulation", "title": "Customer Management Simulation", "category": "Interactive Learning & eLearning", "description": "A scenario-based customer management simulation with decision-making activities and self-assessment.", "tools": ["Genially", "Interactive Learning"], "kind": "video", "media": "/portfolio/Customer_Management_Simul.mp4", "cover": "/portfolio/customer-management-simulation-preview.jpg", "overview": "An interactive learning simulation built around customer scenarios and response choices.", "work": ["Scenario-based learning", "Choose-the-best-response activity", "Self-assessment"]}, {"slug": "soft-skills-development", "title": "Soft Skills Development", "category": "Interactive Learning & eLearning", "description": "A mobile learning experience exploring practical soft skills through short instructional sections.", "tools": ["Genially", "Interactive Learning"], "kind": "video", "media": "/portfolio/Soft_Skills_Development_G.mp4", "cover": "/portfolio/soft-skills-development-preview.jpg", "overview": "A mobile-oriented learning experience covering skills such as conflict resolution, critical thinking and active listening.", "work": ["Conflict resolution content", "Critical thinking activities", "Active listening concepts"]}, {"slug": "becoming-the-goat-curriculum", "title": "Becoming the GOAT Curriculum", "category": "Interactive Learning & eLearning", "description": "An interactive curriculum experience with learning activities, reflection and self-assessment.", "tools": ["Genially", "Interactive Learning"], "kind": "video", "media": "/portfolio/M1_Becoming_the_GOAT_Curr.mp4", "cover": "/portfolio/becoming-the-goat-curriculum-preview.jpg", "overview": "A curriculum-based learning experience combining instructional content with interactive reflection.", "work": ["Interactive learning activities", "Reflection prompts", "Self-assessment and Sphere of Control"]}, {"slug": "foundations-of-becoming", "title": "Foundations of Becoming", "category": "Interactive Learning & eLearning", "description": "A guided learning experience with student activities and reflection prompts.", "tools": ["Genially", "Interactive Learning"], "kind": "video", "media": "/portfolio/M2___Foundations_of_Becom.mp4", "cover": "/portfolio/foundations-of-becoming-preview.jpg", "overview": "An educational experience designed to guide learners through foundational concepts and activities.", "work": ["Student activities", "Reflection prompts", "Structured instructional content"]}, {"slug": "urban-illustrated-presentation", "title": "Urban Illustrated Presentation", "category": "Presentation & Visual Communication", "description": "An illustrated educational presentation using animated scenes and visual storytelling.", "tools": ["PowerPoint", "Canva"], "kind": "video", "media": "/portfolio/Urban_Illustrated_Present.mp4", "cover": "/portfolio/urban-illustrated-presentation-preview.jpg", "overview": "An illustrated presentation that uses character-led scenes and visual sequencing to communicate instructional content.", "work": ["Illustrated visual storytelling", "Animated presentation scenes", "Instructional content"]}, {"slug": "light-invasion", "title": "Light Invasion", "category": "Interactive Learning & eLearning", "description": "An illustrated interactive story built around characters, scenes and a fantasy adventure.", "tools": ["Genially", "Canva"], "kind": "video", "media": "/portfolio/Light_invasion.mp4", "cover": "/portfolio/light-invasion-preview.jpg", "overview": "A story-led digital experience using illustrated characters and scenes to create an engaging narrative.", "work": ["Character-led storytelling", "Illustrated scenes", "Interactive narrative experience"]}, {"slug": "last-mile-delivery-industry", "title": "Die Last-Mile-Delivery-Branche", "category": "Presentation & Visual Communication", "description": "A German-language presentation exploring the last-mile delivery industry, including market context and definitions.", "tools": ["PowerPoint", "Prezi"], "kind": "pdf", "media": "/portfolio/Die Last-Mile-Delivery-Branche.pdf", "cover": "/portfolio/last-mile-delivery-industry-preview.jpg", "overview": "A presentation exploring the last-mile delivery sector in Germany, moving from market overview to core industry definitions.", "work": ["Market overview", "Industry definitions", "German-language presentation"]}, {"slug": "understanding-grade-determination", "title": "Understanding Grade Determination", "category": "Presentation & Visual Communication", "description": "An educational presentation explaining the principles and practices behind academic grading systems.", "tools": ["PowerPoint", "Canva"], "kind": "pdf", "media": "/portfolio/3f533384359ad4cfc60bf9ddbf0.pdf", "cover": "/portfolio/understanding-grade-determination-preview.jpg", "overview": "An educational presentation using diagrams and structured visual explanations to explore grade determination.", "work": ["Academic grading concepts", "Visual explanations and diagrams", "Educational presentation"]}, {"slug": "corporate-history-strategic-resource", "title": "Corporate History as a Strategic Resource", "category": "Presentation & Visual Communication", "description": "A corporate storytelling presentation exploring how organisational history can support brand communication.", "tools": ["PowerPoint", "Canva"], "kind": "pdf", "media": "/portfolio/Trust_.pdf", "cover": "/portfolio/corporate-history-strategic-resource-preview.jpg", "overview": "A visual presentation about the role of corporate history in marketing and brand storytelling.", "work": ["Corporate history narrative", "Brand heritage visuals", "Marketing communication"]}, {"slug": "aac-inclusive-classrooms", "title": "AAC in Inclusive Classrooms", "category": "Presentation & Visual Communication", "description": "A professional development presentation about practical strategies for supporting students with complex communication needs.", "tools": ["PowerPoint", "Canva"], "kind": "pdf", "media": "/portfolio/AAC in Inclusive Classrooms.pdf", "cover": "/portfolio/aac-inclusive-classrooms-preview.jpg", "overview": "A professional development presentation focused on augmentative and alternative communication in inclusive classrooms.", "work": ["AAC concepts and communication rights", "Inclusive classroom strategies", "Professional development content"]}];

const allProjects = [...projects, ...websiteProjects, ...creativeProjects];

const services = [
  {
    icon: Monitor,
    number: "01",
    title: "Website Design & Digital Experiences",
    description:
      "Designing and refining digital experiences that help businesses communicate their value, showcase their offerings and connect with their audiences.",
    items: [
      "Business website design",
      "Website redesign",
      "Landing pages and funnel pages",
      "E-commerce website experiences",
      "Responsive website layouts",
      "Website structure and visual direction",
      "Wix and Wix Studio",
    ],
  },
  {
    icon: Workflow,
    number: "02",
    title: "Business Automation & CRM Systems",
    description:
      "Connecting business tools, customer journeys and workflows to make everyday operations more organised and efficient.",
    items: [
      "GoHighLevel CRM setup and optimisation",
      "CRM pipelines and lead management",
      "Email and SMS automation",
      "Workflow automation",
      "Lead nurturing and follow-up systems",
      "API and third-party integrations",
      "Zapier, Make and n8n automation",
      "AI-supported business workflows",
    ],
  },
  {
    icon: Layers3,
    number: "03",
    title: "Interactive Learning & eLearning",
    description:
      "Creating engaging digital learning experiences, interactive training materials and educational simulations.",
    items: [
      "Genially interactive experiences",
      "Interactive learning simulations",
      "Digital training materials",
      "eLearning content development",
      "Learning activities and assessments",
      "Educational storytelling",
    ],
  },
  {
    icon: Presentation,
    number: "04",
    title: "Presentation & Visual Communication",
    description:
      "Turning ideas and information into clear, engaging visual presentations and communication materials.",
    items: [
      "PowerPoint presentation design",
      "Canva presentation design",
      "Prezi presentations",
      "Educational presentations",
      "Visual storytelling",
      "Illustrated presentation content",
    ],
  },
];

const tools = [
  "GoHighLevel",
  "Wix Studio",
  "Genially",
  "Canva",
  "PowerPoint",
  "Prezi",
  "Zapier",
  "Make",
  "n8n",
  "SharePoint",
  "Power Automate",
  "ComfyUI",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const siteMeta = {
  "/": {
    title: "The Beakon — Growth systems, built for your industry",
    description:
      "Enquiry, follow-up and client systems for education, logistics, retail and professional-service businesses. Built with strategy, automation and design.",
  },
  "/industries": {
    title: "Industry Lenses — The Beakon",
    description:
      "See the systems and the work built for each industry: early education, logistics and transport, retail and e-commerce, coaching and consulting.",
  },
  "/work": {
    title: "Selected Work — The Beakon",
    description:
      "CRM automation, websites, interactive learning and presentation work — selected projects with the detail behind each build.",
  },
  "/about": {
    title: "About James Akingbade — The Beakon",
    description:
      "The thinking behind The Beakon: clarity, purpose and usability applied to technology, systems and digital experiences.",
  },
  "/services": {
    title: "Services — The Beakon",
    description:
      "Website design, CRM and automation, interactive learning and presentation design for businesses that need systems to work.",
  },
  "/reviews": {
    title: "Client Reviews — The Beakon",
    description: "Feedback from clients on automation, presentation, learning and website projects.",
  },
  "/contact": {
    title: "Start a Conversation — The Beakon",
    description:
      "Tell me about the process that needs improving or the idea you want to build. Remote projects, based in Nigeria.",
  },
};

function DocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const industry = pathname.startsWith("/industries/")
      ? getIndustry(pathname.split("/")[2])
      : null;

    const project = pathname.startsWith("/work/")
      ? allProjects.find((item) => item.slug === pathname.split("/")[2])
      : null;

    const meta = industry
      ? {
          title: `${industry.name} — The Beakon`,
          description: industry.promise,
        }
      : project
        ? {
            title: `${project.title} — The Beakon`,
            description: project.description,
          }
        : siteMeta[pathname] || siteMeta["/"];

    document.title = meta.title;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", meta.description);
  }, [pathname]);

  return null;
}

const industryIcons = {
  cap: GraduationCap,
  truck: Truck,
  bag: ShoppingBag,
  briefcase: Briefcase,
};

function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${Math.min(progress, 1)})`;
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div ref={barRef} className="v2-scroll-progress" aria-hidden="true" />;
}

function IndustryLens({ active, onChange }) {
  return (
    <div className="v2-lens">
      <span className="v2-lens-label">Choose your industry lens</span>
      <div className="v2-lens-track" role="group" aria-label="Choose your industry">
        {industries.map((industry) => {
          const Icon = industryIcons[industry.icon];
          return (
            <button
              key={industry.slug}
              type="button"
              className={`v2-lens-tab ${active === industry.slug ? "is-active" : ""}`}
              aria-pressed={active === industry.slug}
              onClick={() => onChange(industry.slug)}
            >
              <Icon size={13} strokeWidth={1.8} />
              {industry.short}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Capabilities() {
  return (
    <section className="v2-caps" id="chapter-capabilities" aria-label="Core service areas">
      <div className="section-wrap">
        <div className="v2-caps-head">
          <span className="v2-eyebrow">What I do</span>
          <p>
            Most projects use two or three of these. You only pay for the parts
            you need.
          </p>
        </div>

        <div className="v2-caps-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="v2-caps-card" key={service.number}>
                <div className="v2-caps-top">
                  <span>{service.number}</span>
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3>{service.title}</h3>
                <ul>
                  {service.items.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const proofStats = [
  { value: "04", label: "websites rebuilt" },
  { value: "08", label: "automation systems built" },
  { value: "11", label: "learning & presentation builds" },
  { value: "08", label: "published client reviews" },
];

function ProofBand() {
  const stats = proofStats;

  return (
    <section className="v2-proof" aria-label="At a glance">
      <div className="section-wrap v2-proof-inner">
        {stats.map((stat) => (
          <div className="v2-proof-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PainSection({ industry }) {
  return (
    <section className="v2-section" id="chapter-leaks">
      <div className="section-wrap">
        <div className="v2-section-head">
          <div>
            <span className="v2-eyebrow">What goes wrong</span>
            <h2 className="v2-display">
              Three places
              <br />
              <em>it goes wrong.</em>
            </h2>
          </div>
          <div className="v2-head-side">
            <p>
              Before adding anything new, I find where it breaks. These three
              things cost {industry.short.toLowerCase()} teams the most time and
              the most customers.
            </p>
            <Link className="v2-link" to="/contact">
              Get a check-up <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="v2-pain-grid">
          {industry.pains.map((pain, index) => (
            <article className="v2-pain-card" key={pain.title}>
              <div className="v2-pain-index">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{pain.title}</h3>
              <p>{pain.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemsSection({ industry }) {
  const icons = [Workflow, Sparkles, Layers3, Monitor];

  return (
    <section className="v2-section" id="chapter-systems">
      <div className="section-wrap">
        <div className="v2-section-head">
          <div>
            <span className="v2-eyebrow">What I build</span>
            <h2 className="v2-display">
              Three simple systems.
              <br />
              <em>One calm operation.</em>
            </h2>
          </div>
          <div className="v2-head-side">
            <p>
              Each one works on its own. Together, information moves forward
              instead of being retyped, remembered or lost.
            </p>
            <span className="v2-badge">{industry.name}</span>
          </div>
        </div>

        <div className="v2-system-grid">
          {industry.systems.map((system, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article className="v2-system-card" key={system.number}>
                <div className="v2-system-top">
                  <span className="v2-system-number">{system.number}</span>
                  <span className="v2-system-icon">
                    <Icon size={19} strokeWidth={1.5} />
                  </span>
                </div>
                <h3>{system.title}</h3>
                <p>{system.body}</p>
                <div className="v2-chip-row">
                  {system.items.map((item) => (
                    <span className="v2-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustryWork({ industry, limit = 3, id = "chapter-work" }) {
  const work = industry.featured
    .map((slug) => allProjects.find((project) => project.slug === slug))
    .filter(Boolean)
    .slice(0, limit);

  return (
    <section className="v2-section" id={id}>
      <div className="section-wrap">
        <div className="v2-section-head">
          <div>
            <span className="v2-eyebrow">The work</span>
            <h2 className="v2-display">
              Not concepts.
              <br />
              <em>Actual builds.</em>
            </h2>
          </div>
          <div className="v2-head-side">
            <p>
              The work closest to {industry.name.toLowerCase()}. Each one opens
              to the full project.
            </p>
            <Link className="v2-link" to={`/industries/${industry.slug}`}>
              See all {industry.short.toLowerCase()} work <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="v2-work-grid">
          {work.map((project, index) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className={`v2-work-card ${index === 0 ? "is-wide" : ""}`}
            >
              <div
                className={`v2-work-media ${
                  project.tools?.includes("GoHighLevel") ? "is-ui" : ""
                }`}
              >
                <span className="v2-work-tag">{project.category}</span>
                {project.cover ? (
                  <img
                    src={project.cover}
                    alt={`${project.title} preview`}
                    loading="lazy"
                  />
                ) : (
                  <div className="website-project-preview">
                    <span className="website-preview-overline">
                      {project.previewOverline || "THE BEAKON / WEBSITE REDESIGN"}
                    </span>
                    <strong>{project.previewLabel || project.title}</strong>
                    <span>{project.previewDescription || "Website redesign"}</span>
                  </div>
                )}
              </div>
              <div className="v2-work-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="v2-work-foot">
                  <span className="v2-link">View project</span>
                  <span className="v2-work-arrow">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const caseStudyPoints = [
  {
    title: "A directory people can actually search",
    body: "Five filters that stack, a live result count, and a verification date on every card instead of a stale spreadsheet.",
  },
  {
    title: "A site two people can run",
    body: "Twenty-five fields per record, and a review queue driven by the verification date — no developer on call for every update.",
  },
  {
    title: "Automation with a brake",
    body: "Registration through to follow-up, with a human review gate so nothing sends without a person approving it.",
  },
];

const caseStudyStats = [
  ["10", "responsive templates"],
  ["25", "CMS fields"],
  ["18", "QA cases · 0 fails"],
  ["6", "views built"],
];

function FeaturedCaseStudy() {
  return (
    <section className="v2-section" id="chapter-case-study">
      <div className="section-wrap">
        <div className="v2-section-head">
          <div>
            <span className="v2-eyebrow">Featured case study</span>
            <h2 className="v2-display">
              One build,
              <br />
              <em>end to end.</em>
            </h2>
          </div>
          <div className="v2-head-side">
            <p>
              Website, directory and automation in one project — so you can see
              how the pieces work together rather than as separate services.
            </p>
            <Link className="v2-link" to="/work/midlife-wellness-alliance">
              Read the case study <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <Link to="/work/midlife-wellness-alliance" className="v2-case">
          <div className="v2-case-media">
            <div className="v2-case-frame">
              <div className="v2-case-bar">
                <i /><i /><i />
                <span>midlifewellness.example.org</span>
              </div>
              <div className="v2-case-screen">
                <span className="v2-case-eb">PERIMENOPAUSE · MENOPAUSE</span>
                <h4>Answers, and the right provider.</h4>
                <p>
                  Verified clinicians, free webinars and plain-language
                  resources — no jargon, no sales pitch.
                </p>
                <div className="v2-case-pills">
                  <span className="is-solid">Find a Provider</span>
                  <span>See events</span>
                </div>
                <div className="v2-case-rows">
                  <div><span>Verified listings</span><b>14</b></div>
                  <div><span>Specialties</span><b>9</b></div>
                  <div><span>This month&rsquo;s webinar</span><b>Free</b></div>
                </div>
              </div>
            </div>
          </div>

          <div className="v2-case-body">
            <span className="v2-case-tag">Self-initiated demonstration</span>
            <h3>Midlife Wellness Alliance</h3>
            <p className="v2-case-lede">
              A women&rsquo;s health nonprofit needed patients to find the right
              provider in under two minutes, and two staff to keep 40+ listings
              current without a developer.
            </p>

            <ul className="v2-case-points">
              {caseStudyPoints.map((point) => (
                <li key={point.title}>
                  <strong>{point.title}</strong>
                  <span>{point.body}</span>
                </li>
              ))}
            </ul>

            <div className="v2-case-stats">
              {caseStudyStats.map(([value, label]) => (
                <div key={label}>
                  <b>{value}</b>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <span className="v2-case-cta">
              See what was built <ArrowUpRight size={15} />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      title: "Diagnose",
      body: "We map how enquiries, jobs or clients actually move today. No assumptions, no tool-worship — just a clear picture of where value is lost.",
      caption: "Week 1 · Audit & findings",
    },
    {
      title: "Design the system",
      body: "I propose the shortest path from problem to outcome: which systems, which automations, which pages, and what the team will actually have to do.",
      caption: "Week 1–2 · Architecture & agreement",
    },
    {
      title: "Build and connect",
      body: "Workflows, pipelines, pages and messages are built, tested with real scenarios and connected to the tools you already use.",
      caption: "Week 2–4 · Build & integrate",
    },
    {
      title: "Hand over and improve",
      body: "Your team is trained, documentation is left behind, and we review what the system is producing so it keeps getting better.",
      caption: "Week 4+ · Training & review",
    },
  ];

  return (
    <section className="v2-section" id="chapter-process">
      <div className="section-wrap v2-process">
        <div className="v2-process-sticky">
          <span className="v2-eyebrow">The method</span>
          <h2 className="v2-display">
            Calm process.
            <br />
            <em>Measurable progress.</em>
          </h2>
          <p className="v2-lede">
            The work follows four stages. You always know what is happening,
            what is next and what you will receive at the end of each one.
          </p>
        </div>

        <div className="v2-process-list">
          {steps.map((step, index) => (
            <Reveal className="v2-process-step" key={step.title}>
              <span className="v2-process-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <small>{step.caption}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackagesSection({ industry }) {
  return (
    <section className="v2-section" id="chapter-engagements">
      <div className="section-wrap">
        <div className="v2-section-head">
          <div>
            <span className="v2-eyebrow">How to start</span>
            <h2 className="v2-display">
              Start where
              <br />
              <em>you are.</em>
            </h2>
          </div>
          <div className="v2-head-side">
            <p>
              Three ways to start, depending on how much you want handled.
              Scope, timing and price are agreed before anything begins.
            </p>
          </div>
        </div>

        <div className="v2-packages">
          {industry.packages.map((pack) => (
            <article
              className={`v2-package ${pack.featured ? "is-featured" : ""}`}
              key={pack.name}
            >
              {pack.featured && <span className="v2-package-flag">Recommended</span>}
              <span className="v2-package-duration">{pack.duration}</span>
              <h3>{pack.name}</h3>
              <p>{pack.summary}</p>
              <ul>
                {pack.includes.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={14} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link className="v2-link" to="/contact">
                Ask about this <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileActionBar() {
  return (
    <div className="v2-mobile-cta">
      <div>
        <strong>Want to talk it through?</strong>
        <span>20 minutes · no pitch</span>
      </div>
      <a className="button button-gold" href={bookingUrl} target="_blank" rel="noreferrer">
        Book a call <ArrowUpRight size={15} />
      </a>
    </div>
  );
}

function SiteActionBar() {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;

  return (
    <>
      <div className="v2-cta-spacer" />
      <MobileActionBar />
    </>
  );
}

function FaqSection({ industry }) {
  return (
    <section className="v2-section" id="chapter-questions">
      <div className="section-wrap v2-faq">
        <div>
          <span className="v2-eyebrow">Questions</span>
          <h2 className="v2-display" style={{ fontSize: "clamp(34px, 4.4vw, 54px)", margin: "18px 0 16px" }}>
            The questions
            <br />
            <em>worth asking.</em>
          </h2>
          <p className="v2-lede">
            If something is missing, just ask. A direct answer is faster than a
            sales call.
          </p>
        </div>

        <div className="v2-faq-list">
          {industry.faq.map((item) => (
            <details className="v2-faq-item" key={item.q}>
              <summary>
                {item.q}
                <span className="v2-faq-plus">
                  <Plus size={14} />
                </span>
              </summary>
              <p className="v2-faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


function CursorGlow() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let glowX = -100;
    let glowY = -100;
    let frameId;

    const dot = dotRef.current;
    const glow = glowRef.current;

    const showCursor = () => {
      if (dot) dot.style.opacity = "1";
      if (glow) glow.style.opacity = "1";
    };

    const hideCursor = () => {
      if (dot) dot.style.opacity = "0";
      if (glow) glow.style.opacity = "0";
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      showCursor();

      if (dot) {
        dot.style.transform =
          `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const animateGlow = () => {
      glowX += (mouseX - glowX) * 0.14;
      glowY += (mouseY - glowY) * 0.14;

      if (glow) {
        glow.style.transform =
          `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      }

      frameId = window.requestAnimationFrame(animateGlow);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);
    frameId = window.requestAnimationFrame(animateGlow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <style>{`
        .beakon-cursor-dot,
        .beakon-cursor-glow {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 99999;
          pointer-events: none;
          border-radius: 50%;
          opacity: 0;
          will-change: transform, opacity;
          transition: opacity 180ms ease;
        }

        .beakon-cursor-dot {
          width: 7px;
          height: 7px;
          background: #e8ae24;
          box-shadow: 0 0 9px rgba(232,174,36,.95),
                      0 0 19px rgba(232,174,36,.65);
        }

        .beakon-cursor-glow {
          width: 46px;
          height: 46px;
          background: radial-gradient(
            circle,
            rgba(232,174,36,.22) 0%,
            rgba(232,174,36,.10) 38%,
            rgba(232,174,36,.035) 60%,
            transparent 76%
          );
          filter: blur(3px);
        }

        @media (pointer: coarse), (prefers-reduced-motion: reduce) {
          .beakon-cursor-dot,
          .beakon-cursor-glow {
            display: none !important;
          }
        }
      `}</style>

      <div ref={glowRef} className="beakon-cursor-glow" aria-hidden="true" />
      <div ref={dotRef} className="beakon-cursor-dot" aria-hidden="true" />
    </>
  );
}


function Navbar() {
  const [open, setOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setWorkOpen(false);
  };

  const workCategories = [
    "CRM & Automation",
    "Website Design & Redesign",
    "Interactive Learning & eLearning",
    "Presentation & Visual Communication",
  ];

  const categoryUrl = (category) =>
    `/work?category=${encodeURIComponent(category)}`;

  return (
    <header className="site-header">
      <style>{`
        .site-header .work-nav-dropdown {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
        }

       .site-header .work-nav-trigger {
  appearance: none;
  border: 0;
  background: transparent;
  color: inherit;
  padding: 12px 0;
  margin: 0;
  font-family: inherit;
  font-size: 13px;
  font-weight: 400;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: none;
  cursor: pointer;
  white-space: nowrap;
  transition: color .2s ease;
}

        .site-header .work-nav-trigger:hover,
        .site-header .work-nav-trigger[aria-expanded="true"] {
          color: #e8ae24;
        }

        .site-header .work-nav-menu {
          position: absolute;
          top: 100%;
          left: -18px;
          z-index: 10000;
          width: 330px;
          padding: 9px;
          background: #101b2d;
          border: 1px solid rgba(213,166,65,.35);
          box-shadow: 0 18px 45px rgba(0,0,0,.38);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(8px);
          transition: opacity .2s ease, transform .2s ease, visibility .2s ease;
        }

        .site-header .work-nav-menu::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -14px;
          height: 14px;
        }

        .site-header .work-nav-dropdown:hover .work-nav-menu,
        .site-header .work-nav-dropdown:focus-within .work-nav-menu,
        .site-header .work-nav-dropdown.menu-open .work-nav-menu {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
        }

        .site-header .work-nav-menu a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          min-height: 44px;
          padding: 12px 13px;
          color: #f5f1e8;
          font-size: 12px;
          line-height: 1.45;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,.09);
          transition: color .2s ease, background .2s ease, padding .2s ease;
        }

        .site-header .work-nav-menu a:last-child {
          border-bottom: 0;
        }

        .site-header .work-nav-menu a:hover,
        .site-header .work-nav-menu a:focus-visible {
          color: #e5b84d;
          background: rgba(255,255,255,.055);
          padding-left: 17px;
        }

        .site-header .work-nav-menu .work-menu-all {
          color: #e5b84d;
          letter-spacing: .08em;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
        }

        @media (max-width: 760px) {
          .site-header .work-nav-dropdown {
            display: block;
            width: 100%;
            height: auto;
          }

         .site-header .work-nav-trigger {
  appearance: none;
  border: 0;
  background: transparent;
  color: inherit;
  padding: 12px 0;
  margin: 0;
  font-family: inherit;
  font-size: 13px;
  font-weight: 400 !important;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: none;
  cursor: pointer;
  white-space: nowrap;
  transition: color .2s ease;
}

          .site-header .work-nav-menu {
            position: static;
            display: none;
            width: 100%;
            margin: 4px 0 10px;
            padding: 8px;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: none;
            box-shadow: none;
          }

          .site-header .work-nav-dropdown.menu-open .work-nav-menu {
            display: block;
          }

          .site-header .work-nav-menu::before {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-header .work-nav-menu,
          .site-header .work-nav-menu a,
          .site-header .work-nav-trigger {
            transition: none;
          }
        }
      `}</style>

      <nav className="navbar section-wrap">
        <Link className="brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="The Beakon" />
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>

        <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>

          <div
            className={`work-nav-dropdown ${workOpen ? "menu-open" : ""}`}
            onMouseEnter={() => {
              if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                setWorkOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                setWorkOpen(false);
              }
            }}
          >
            <button
              type="button"
              className="work-nav-trigger"
              aria-expanded={workOpen}
              aria-haspopup="true"
              onClick={() => setWorkOpen((current) => !current)}
            >
              Work
            </button>

            <div className="work-nav-menu">
              <Link className="work-menu-all" to="/work" onClick={closeMenu}>
                View all work <ArrowUpRight size={14} />
              </Link>
              {workCategories.map((category) => (
                <Link
                  key={category}
                  to={categoryUrl(category)}
                  onClick={closeMenu}
                >
                  {category}
                  <ArrowUpRight size={14} />
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/industries" onClick={closeMenu}>Industries</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/reviews" onClick={closeMenu}>Reviews</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>

        <Link className="nav-cta" to="/contact">
          Let's talk <ArrowUpRight size={16} />
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="section-wrap footer-inner">
        <Link className="footer-brand" to="/">
          <img src={logo} alt="The Beakon" />
          <span>Technology. Creativity. Direction.</span>
        </Link>

        <div className="footer-links">
          <Link to="/work">Work</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} The Beakon. All rights reserved.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro section-wrap">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </section>
  );
}


function ProjectCard({ project, index = 0 }) {
  const isWebsite = Boolean(project.liveUrl);
  const [coverFailed, setCoverFailed] = useState(false);

  return (
    <>
      <style>{`
        .project-card-media-preview {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 220px;
          object-fit: cover;
          background: #101b2d;
          border: 0;
        }
        .project-card-pdf-preview {
          pointer-events: none;
          background: #f4f4f4;
        }
        .project-media-fallback {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 24px;
          color: #f3f1e9;
          background: linear-gradient(135deg, #101b2d, #07101f);
          text-align: center;
        }
        .project-media-fallback[hidden] { display: none; }
      `}</style>
    <motion.article
      className={`project-card editorial-project-card ${
        isWebsite ? "website-project-card" : ""
      }`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -7 }}
    >
      <Link
        to={`/work/${project.slug}`}
        className="project-image-link"
        aria-label={`View ${project.title}`}
      >
        <div className={`project-image editorial-project-image ${project.kind ? `project-card-${project.kind}-preview` : ""}`}>
          {project.cover && !coverFailed && (
            <img
              src={project.cover}
              alt={`${project.title} project`}
              loading="lazy"
              onError={() => setCoverFailed(true)}
            />
          )}

          {(!project.cover || coverFailed) && project.kind === "video" && (
            <video
              className="project-card-media-preview"
              playsInline
              controls
              preload="metadata"
              onLoadedMetadata={(event) => {
                event.currentTarget.muted = false;
                event.currentTarget.volume = 1;
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <source src={project.media} type="video/mp4" />
            </video>
          )}

          {(!project.cover || coverFailed) && project.kind === "pdf" && (
            <iframe
              className="project-card-media-preview project-card-pdf-preview"
              src={`${project.media}#toolbar=0&navpanes=0&scrollbar=0`}
              title={`${project.title} PDF preview`}
              loading="lazy"
              tabIndex={-1}
            />
          )}

          {(!project.cover || coverFailed) && !project.kind && (
            <div className="website-project-preview">
              <span className="website-preview-overline">
                {project.previewOverline || "THE BEAKON / WEBSITE REDESIGN"}
              </span>
              <strong>{project.previewLabel || project.title}</strong>
              <span>{project.previewDescription || "Website redesign"}</span>
            </div>
          )}

          <span className="project-image-arrow">
            <ArrowUpRight size={22} />
          </span>
          <span className="project-card-index">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </Link>

      <div className="project-info editorial-project-info">
        <div className="project-card-meta">
          <span className="project-type">{project.category}</span>
          {isWebsite && <span className="project-kind">LIVE WEBSITE</span>}
          {project.kind === "video" && <span className="project-kind">VIDEO</span>}
          {project.kind === "pdf" && <span className="project-kind">PDF PREVIEW</span>}
        </div>

        <h3>
          <Link to={`/work/${project.slug}`}>{project.title}</Link>
        </h3>

        <p>{project.description}</p>

        <div className="tag-list">
          {project.tools?.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        <div className="project-card-footer">
          <Link to={`/work/${project.slug}`} className="project-read-more">
            Explore project <ArrowUpRight size={17} />
          </Link>

          {isWebsite && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-live-link"
              onClick={(event) => event.stopPropagation()}
            >
              Visit website
            </a>
          )}
        </div>
      </div>
    </motion.article>
    </>
  );
}


function Home() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].slug);
  const industry = getIndustry(activeIndustry) || industries[0];
  const LensIcon = industryIcons[industry.icon];

  return (
    <>
      <ScrollProgress />

      <section
        className="v2-hero"
        id="chapter-hero"
        style={{ "--v2-accent": industry.accent, "--v2-accent-soft": industry.accent }}
      >
        <div className="v2-hero-aurora" aria-hidden="true" />

        <div className="section-wrap v2-hero-grid">
          <motion.div
            className="v2-hero-copy"
            key={`copy-${industry.slug}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="v2-eyebrow">{industry.eyebrow}</span>

            <h1 className="v2-display v2-hero-title">
              {[0, 2].map((index) => (
                <span key={`${industry.slug}-${index}`}>
                  {industry.headline[index]}{" "}
                  <em>{industry.headline[index + 1]}</em>
                </span>
              ))}
            </h1>

            <p className="v2-hero-desc">{industry.promise}</p>

            <IndustryLens active={activeIndustry} onChange={setActiveIndustry} />

            <div className="v2-hero-actions">
              <a
                className="button button-gold"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Book a 30-minute call <ArrowUpRight size={17} />
              </a>
              <Link className="v2-link" to={`/industries/${industry.slug}`}>
                The {industry.short.toLowerCase()} page <ArrowRight size={15} />
              </Link>
            </div>

            <div className="v2-hero-meta">
              <span>THE BEAKON / {industry.short.toUpperCase()}</span>
              <span>BASED IN NIGERIA · WORKING GLOBALLY</span>
            </div>
          </motion.div>

          <motion.div
            className="v2-stage"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <span className="v2-stage-caption">
              JAMES AKINGBADE · TECHNOLOGY &amp; DIGITAL SOLUTIONS
            </span>
            <div className="v2-stage-orbit" aria-hidden="true" />

            <div className="v2-stage-frame">
              <img
                src={portrait}
                alt="James Akingbade, technology and digital solutions consultant"
              />
            </div>

            <div className="v2-stage-note">
              <span className="v2-stage-note-label">
                <LensIcon size={12} strokeWidth={1.8} />
                {industry.short} lens
              </span>
              <p>{industry.lensNote}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <ProofBand />
      <Capabilities />
      <PainSection industry={industry} />
      <SystemsSection industry={industry} />
      <IndustryWork industry={industry} />
      <FeaturedCaseStudy />
      <PackagesSection industry={industry} />

      <div id="chapter-proof">
        <HomeReviews eyebrow="07 / CLIENT EXPERIENCES" />
      </div>

      <FaqSection industry={industry} />
      <ContactBanner />
    </>
  );
}

function Industries() {
  return (
    <>
      <section className="v2-industry-hero">
        <div className="section-wrap">
          <span className="v2-eyebrow">THE BEAKON / INDUSTRY PRACTICE</span>
          <h1 className="v2-display v2-industry-title">
            Different sectors.
            <br />
            <em>The same discipline.</em>
          </h1>

          <div className="v2-industry-hero-grid">
            <div>
              <p className="v2-lede" style={{ maxWidth: "56ch" }}>
                The problems rhyme more than they differ: enquiries lost, follow-up
                forgotten, systems held together by memory. Pick the industry closest
                to your business and see the systems and the work built around it.
              </p>
            </div>

            <aside className="v2-industry-hero-side">
              <span className="v2-badge">04 INDUSTRY LENSES</span>
              <p>
                Every lens is drawn from project work in that sector — not a template
                with the industry name swapped in.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="v2-section">
        <div className="section-wrap">
          <div className="v2-industry-list">
            {industries.map((industry) => {
              const Icon = industryIcons[industry.icon];
              return (
                <Link
                  className="v2-industry-tile"
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                >
                  <div className="v2-industry-tile-top">
                    <Icon size={24} strokeWidth={1.4} />
                    <span className="v2-kicker">{industry.short}</span>
                  </div>
                  <h2>{industry.name}</h2>
                  <p>{industry.promise}</p>
                  <span className="v2-link">
                    Open this lens <ArrowUpRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}

function IndustryPage() {
  const { slug } = useParams();
  const industry = getIndustry(slug);

  if (!industry) {
    return (
      <section className="section-wrap not-found">
        <span className="eyebrow">INDUSTRY NOT FOUND</span>
        <h1>That lens doesn't exist yet.</h1>
        <Link className="button button-gold" to="/industries">
          View all industries
        </Link>
      </section>
    );
  }

  const Icon = industryIcons[industry.icon];

  return (
    <>
      <section
        className="v2-industry-hero"
        style={{ "--v2-accent": industry.accent, "--v2-accent-soft": industry.accent }}
      >
        <div className="v2-hero-aurora" aria-hidden="true" />
        <div className="section-wrap">
          <Link className="v2-back" to="/industries">
            <ArrowRight className="back-link-icon" size={14} />
            All industry lenses
          </Link>

          <span className="v2-eyebrow">{industry.eyebrow}</span>

          <h1 className="v2-display v2-industry-title">
            {[0, 2].map((index) => (
              <span key={`${industry.slug}-title-${index}`}>
                {industry.headline[index]}{" "}
                <em>{industry.headline[index + 1]}</em>
              </span>
            ))}
          </h1>

          <div className="v2-industry-hero-grid">
            <div>
              <p className="v2-lede" style={{ maxWidth: "54ch" }}>
                {industry.promise}
              </p>

              <div className="v2-industry-stats">
                {proofStats.map((stat) => (
                  <div className="v2-industry-stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="v2-industry-hero-side">
              <span className="v2-badge">
                <Icon size={12} strokeWidth={1.8} />
                {industry.name}
              </span>
              <p>{industry.lensNote}</p>
              <Link className="v2-link" to="/contact">
                Start with an audit <ArrowUpRight size={14} />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <PainSection industry={industry} />
      <SystemsSection industry={industry} />
      <IndustryWork industry={industry} limit={8} />
      <ProcessSection />
      <PackagesSection industry={industry} />
      <FaqSection industry={industry} />
      <ContactBanner />
    </>
  );
}

function Work() {
  const [searchParams, setSearchParams] = useSearchParams();
  const collectionHeadingRef = useRef(null);
  const [filterWasSelected, setFilterWasSelected] = useState(false);
  const requestedCategory = searchParams.get("category");
  const categories = [
    "All",
    ...new Set(allProjects.map((project) => project.category)),
  ];
  const validCategory = categories.includes(requestedCategory)
    ? requestedCategory
    : "All";
  const [filter, setFilter] = useState(validCategory);

  useEffect(() => {
    setFilter(validCategory);
  }, [validCategory]);

  // When a category is opened from the Work dropdown, bring its heading
  // into view immediately so the visitor sees the selected category change.
  useEffect(() => {
    if (validCategory === "All") return;
    collectionHeadingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [validCategory]);

  useEffect(() => {
    if (!filterWasSelected) return;
    collectionHeadingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setFilterWasSelected(false);
  }, [filter, filterWasSelected]);

  const visibleProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  return (
    <>
      <section className="portfolio-hero section-wrap">
        <div className="portfolio-hero-copy">
          <span className="eyebrow">THE BEAKON / SELECTED WORK</span>
          <h1>Ideas made<br /><span>visible.</span></h1>
          <p>
            A collection of digital experiences, business systems,
            automation and creative solutions shaped around real needs.
          </p>
          <div className="portfolio-hero-meta">
            <span>STRATEGY</span><i /><span>SYSTEMS</span><i /><span>DESIGN</span>
          </div>
        </div>
        <div className="portfolio-hero-aside">
          <span className="portfolio-aside-mark">B.</span>
          <p>Every project starts with a question: how can this work better?</p>
          <span className="eyebrow">A THOUGHTFUL APPROACH TO DIGITAL WORK</span>
        </div>
      </section>

      <section className="section-wrap portfolio-redesign">
        <div className="portfolio-toolbar redesign-toolbar">
          <div>
            <span className="eyebrow">THE PROJECT COLLECTION</span>
            <p>{visibleProjects.length} selected projects</p>
          </div>
          <div className="filter-list" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category}
                className={filter === category ? "filter-button active" : "filter-button"}
                aria-pressed={filter === category}
                onClick={() => {
                  if (filter === category) {
                    collectionHeadingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                    return;
                  }
                  setFilter(category);
                  setFilterWasSelected(true);
                  if (category === "All") setSearchParams({});
                  else setSearchParams({ category });
                }}
                type="button"
              >
                {filter === category && <CheckCircle2 size={14} aria-hidden="true" />}
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          ref={collectionHeadingRef}
          className="portfolio-collection-heading"
          key={`heading-${filter}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28 }}
        >
          <div>
            <span className="eyebrow">{filter === "All" ? "ALL SELECTED WORK" : "NOW VIEWING / " + filter.toUpperCase()}</span>
            <h2>{filter === "All" ? "Explore the collection." : filter + "."}</h2>
          </div>
          <span>{String(visibleProjects.length).padStart(2, "0")} PROJECTS</span>
        </motion.div>

        <motion.div
          className="project-grid portfolio-editorial-grid"
          key={`projects-${filter}`}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, staggerChildren: 0.04 }}
          style={{ scrollMarginTop: "110px" }}
          aria-live="polite"
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>

        {visibleProjects.length === 0 && (
          <p className="portfolio-empty-state">No projects are listed in this category yet.</p>
        )}
      </section>
      <ContactBanner />
    </>
  );
}

function ProjectDetails() {
  const { slug } = useParams();
  const collection = allProjects;
  const projectIndex = collection.findIndex(
    (item) => item.slug === slug
  );
  const project = collection[projectIndex];

  if (!project) {
    return (
      <section className="section-wrap not-found">
        <span className="eyebrow">PROJECT NOT FOUND</span>
        <h1>Let's get you back on track.</h1>
        <Link className="button button-gold" to="/work">
          Return to work
        </Link>
      </section>
    );
  }

  if (project.caseStudy) {
    return (
      <>
        <MidlifeCaseStudy />
        <ContactBanner />
      </>
    );
  }

  const isWebsite = Boolean(project.liveUrl);
  const gallery = project.images?.length
    ? project.images
    : project.cover
      ? [project.cover]
      : [];

  const nextProject =
    collection[(projectIndex + 1) % collection.length];

  const previousProject =
    collection[
      (projectIndex - 1 + collection.length) % collection.length
    ];

  return (
    <>
      <section className="project-detail-hero editorial-detail-hero section-wrap">
        <Link to="/work" className="back-link">
          <ArrowRight className="back-link-icon" size={16} />
          Back to selected work
        </Link>

        <div className="detail-heading-meta">
          <span className="eyebrow">{project.category}</span>
          <span className="detail-project-number">
            PROJECT {String(projectIndex + 1).padStart(2, "0")} /{" "}
            {String(collection.length).padStart(2, "0")}
          </span>
        </div>

        <h1>{project.title}</h1>

        <p className="detail-introduction">{project.description}</p>
        {project.kind && <span className="project-creator-note">Created by James Akingbade · {project.tools.join(" & ")}</span>}

        <div className="tag-list detail-tags">
          {project.tools?.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        {isWebsite && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-gold detail-live-button"
          >
            Visit live website <ArrowUpRight size={17} />
          </a>
        )}
      </section>

      <section className="section-wrap editorial-detail-content">
        <div className={`detail-main-visual ${project.kind ? `detail-${project.kind}-visual` : ""}`}>
          {project.kind === "video" ? (
            <video
              className="portfolio-video"
              controls
              playsInline
              preload="metadata"
              poster={project.cover || undefined}
              onLoadedMetadata={(event) => {
                event.currentTarget.muted = false;
                event.currentTarget.volume = 1;
              }}
            >
              <source src={project.media} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          ) : project.kind === "pdf" ? (
            <div className="portfolio-document-viewer">
              <iframe src={`${project.media}#toolbar=1&navpanes=0`} title={`${project.title} PDF preview`} loading="lazy" />
              <a className="button button-gold" href={project.media} target="_blank" rel="noreferrer">Open full presentation <ArrowUpRight size={17} /></a>
            </div>
          ) : project.cover ? (
            <img src={project.cover} alt={`${project.title} project preview`} />
          ) : (
            <div className="website-project-preview detail-website-preview">
              <span className="website-preview-overline">
                {project.previewOverline || "THE BEAKON / WEBSITE REDESIGN"}
              </span>
              <strong>{project.previewLabel || project.title}</strong>
              <span>{project.previewDescription || project.description}</span>
            </div>
          )}
        </div>

        <div className="detail-content-grid">
          <div className="detail-section-heading">
            <span className="eyebrow">01 / THE PROJECT</span>
            <h2>
              {isWebsite ? "A closer look at the redesign." : project.kind === "video" ? "Watch the experience." : project.kind === "pdf" ? "Explore the presentation." : "An organised approach to the work."}
            </h2>
          </div>

          <div className="detail-project-copy">
            <p>
              {project.overview || project.description}
            </p>

            <h3>
              {isWebsite ? "Project focus" : "Work shown"}
            </h3>

            <ul className="project-work-list">
              {(project.work || []).map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {isWebsite && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-link detail-inline-link"
              >
                Explore the live website <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </div>

        {project.kind === "pdf" && (
          <div className="detail-document-action">
            <a className="text-link" href={project.media} target="_blank" rel="noreferrer">Open presentation in a new tab <ArrowUpRight size={17} /></a>
          </div>
        )}

        {!project.kind && gallery.length > 1 && (
          <div className="detail-gallery-section">
            <div className="detail-gallery-heading">
              <div>
                <span className="eyebrow">02 / PROJECT GALLERY</span>
                <h2>More from the project.</h2>
              </div>
              <span>
                {String(gallery.length).padStart(2, "0")} IMAGES
              </span>
            </div>

            <div className="editorial-project-gallery">
              {gallery.map((image, index) => (
                <figure key={`${project.slug}-${index}`}>
                  <img
                    src={image}
                    alt={`${project.title} project evidence ${index + 1}`}
                    loading="lazy"
                  />
                  <figcaption>
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {project.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        <div className="detail-tools-section">
          <span className="eyebrow">TOOLS & TECHNOLOGIES</span>
          <div className="detail-tools-list">
            {project.tools?.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>

        <div className="detail-navigation">
          <Link to={`/work/${previousProject.slug}`}>
            <span className="eyebrow">
              <ArrowRight className="detail-prev-icon" size={14} />
              PREVIOUS PROJECT
            </span>
            <strong>{previousProject.title}</strong>
          </Link>

          <Link to={`/work/${nextProject.slug}`}>
            <span className="eyebrow">
              NEXT PROJECT <ArrowUpRight size={14} />
            </span>
            <strong>{nextProject.title}</strong>
          </Link>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}



function About() {
  const principles = [
    {
      number: "01",
      title: "Clarity",
      description:
        "Make complex ideas easier to understand, communicate and act on.",
      keyword: "SEE THE BIGGER PICTURE",
    },
    {
      number: "02",
      title: "Purpose",
      description:
        "Choose tools and approaches based on the problem they are meant to solve.",
      keyword: "MAKE EVERY CHOICE COUNT",
    },
    {
      number: "03",
      title: "Usability",
      description:
        "Create digital experiences and systems that work for the people using them.",
      keyword: "DESIGN FOR PEOPLE",
    },
  ];

  return (
    <>
      <section className="about-hero section-wrap">
        <div className="about-hero-copy">
          <span className="eyebrow">ABOUT / THE PERSON BEHIND THE BEAKON</span>

          <h1>
            Curious by nature.<br />
            <span>Purposeful by design.</span>
          </h1>

          <p>
            I'm James Akingbade, a Technology & Digital Solutions Consultant
            interested in bringing together business thinking, technology
            and creativity to make useful things happen.
          </p>

          <div className="about-hero-meta">
            <span>TECHNOLOGY</span>
            <i />
            <span>BUSINESS SYSTEMS</span>
            <i />
            <span>DIGITAL EXPERIENCES</span>
          </div>
        </div>

        <motion.div
          className="about-hero-image"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={aboutPortrait} alt="James Akingbade" />
          <div className="about-image-caption">
            <span>JAMES AKINGBADE</span>
            <span>THE PERSON BEHIND THE BEAKON</span>
          </div>
        </motion.div>
      </section>

      <section className="about-story-section">
        <div className="section-wrap about-story-grid">
          <Reveal className="about-story-heading">
            <span className="eyebrow">01 / THE STORY</span>
            <h2>
              More than the tools.<br />
              <span>It's about what they make possible.</span>
            </h2>
          </Reveal>

          <Reveal className="about-story-copy">
            <p className="about-story-lead">
              Good solutions begin with understanding.
            </p>

            <p>
              My work sits across CRM systems, business automation, website
              experiences and interactive digital content. I enjoy
              understanding how a business works, identifying where things
              can improve and finding practical ways to make that happen.
            </p>

            <p>
              I believe technology should support people, not make their work
              more complicated. That means paying attention to the details,
              understanding the purpose behind a project and choosing tools
              that serve the bigger picture.
            </p>

            <p>
              I studied English and Literary Studies at Obafemi Awolowo
              University, graduating in 2020. That background continues to
              shape how I think about communication, structure and the way
              people experience information.
            </p>

            <div className="about-education-note">
              <span className="eyebrow">ACADEMIC BACKGROUND</span>
              <strong>Obafemi Awolowo University</strong>
              <span>English and Literary Studies · 2020</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-principles about-principles-redesign">
        <div className="section-wrap">
          <Reveal className="about-principles-heading">
            <span className="eyebrow">02 / WHAT GUIDES THE WORK</span>
            <h2>
              Principles behind<br />
              <span>every solution.</span>
            </h2>
            <p>
              The tools may change from project to project. The thinking
              behind the work stays grounded in these principles.
            </p>
          </Reveal>

          <div className="about-principle-grid">
            {principles.map((principle, index) => (
              <Reveal className="about-principle-card" key={principle.number}>
                <span className="about-principle-number">
                  {principle.number}
                </span>
                <div className="about-principle-symbol">
                  {index === 0 && <Layers3 size={25} />}
                  {index === 1 && <Sparkles size={25} />}
                  {index === 2 && <Workflow size={25} />}
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
                <span className="about-principle-keyword">
                  {principle.keyword}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap toolkit-section about-toolkit-redesign">
        <Reveal className="toolkit-heading">
          <span className="eyebrow">03 / TOOLS & PLATFORMS</span>
          <h2>
            The right tools<br />
            for the <span>right purpose.</span>
          </h2>
          <p>
            My toolkit is flexible. The platforms I use depend on the
            requirements, people and goals of each project.
          </p>
        </Reveal>

        <div className="tool-cloud about-tool-cloud">
          {tools.map((tool, index) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.035 }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </section>

      <ContactBanner />
    </>
  );
}



function Services() {
  return (
    <>
      <section className="services-hero section-wrap">
        <Reveal className="services-hero-copy">
          <span className="eyebrow">
            SERVICES / WHAT I BRING TO THE TABLE
          </span>

          <h1>
            The right solution.
            <br />
            <span>Built around your needs.</span>
          </h1>

          <p>
            Every business has different challenges. I bring together
            technology, systems thinking and creative execution to build
            practical solutions that help businesses work better.
          </p>

          <Link className="services-hero-link" to="/contact">
            Let's discuss your project
            <ArrowRight size={18} />
          </Link>
        </Reveal>

        <motion.div
          className="services-hero-aside"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="services-aside-mark">B.</span>
          <span className="eyebrow">THE BEAKON APPROACH</span>
          <p>
            Understand the challenge.
            <br />
            Find the right approach.
            <br />
            Build with purpose.
          </p>
          <div className="services-aside-line" />
          <span className="services-aside-caption">
            STRATEGY · TECHNOLOGY · EXECUTION
          </span>
        </motion.div>
      </section>

      <section className="services-overview">
        <div className="section-wrap">
          <div className="services-overview-heading">
            <div>
              <span className="eyebrow">01 / AREAS OF EXPERTISE</span>
              <h2>
                What I can help<br />
                <span>you build.</span>
              </h2>
            </div>

            <p>
              Explore the different ways I can support your business,
              from connected systems and digital experiences to
              interactive content and creative solutions.
            </p>
          </div>

          <div className="services-detail-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal
                  className="services-detail-card"
                  key={service.number}
                >
                  <div className="services-card-top">
                    <span className="services-card-number">
                      {service.number}
                    </span>
                    <div className="services-card-icon">
                      <Icon size={25} strokeWidth={1.5} />
                    </div>
                    <span className="services-card-index">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{service.title}</h3>

                  <p className="services-card-description">
                    {service.description}
                  </p>

                  <div className="services-card-divider" />

                  <span className="services-includes-label">
                    WHAT THIS CAN INCLUDE
                  </span>

                  <ul className="services-includes-list">
                    {service.items.map((item) => (
                      <li key={item}>
                        <span className="services-list-marker">↗</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    className="services-card-link"
                    to="/contact"
                  >
                    Discuss this service
                    <ArrowRight size={17} />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services-process-section">
        <div className="section-wrap services-process-inner">
          <Reveal className="services-process-heading">
            <span className="eyebrow">02 / HOW I WORK</span>
            <h2>
              Thoughtful work.<br />
              <span>Clear process.</span>
            </h2>
            <p>
              The process starts with understanding what you need,
              not simply choosing a tool and hoping it works.
            </p>
          </Reveal>

          <div className="services-process-steps">
            <Reveal className="services-process-step">
              <span>01</span>
              <h3>Understand</h3>
              <p>
                Get clear on your goals, current challenges and
                what a useful solution should achieve.
              </p>
            </Reveal>

            <Reveal className="services-process-step">
              <span>02</span>
              <h3>Design</h3>
              <p>
                Map out the right approach, structure and tools
                for the requirements of your project.
              </p>
            </Reveal>

            <Reveal className="services-process-step">
              <span>03</span>
              <h3>Build</h3>
              <p>
                Bring the solution to life with attention to
                functionality, usability and detail.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}


const clientReviews = [
  {
    name: "ericrichards",
    rating: "5.0",
    featured: true,
    quote: "Jamie is AMAZING. I recently had the pleasure of working with Jamie on a PowerPoint presentation, and I couldn't be happier! She created a stunning design that exceeded my expectations. Her attention to detail was remarkable, ensuring every slide looked polished and professional. Jamie also went above and beyond, making sure everything was perfect! Her communication was excellent, keeping me updated throughout the process. Plus, the turnaround was incredibly fast. If you need a PowerPoint that stands out, I highly recommend Jamie!",
  },
  {
    name: "ericaglover870",
    rating: "5.0",
    featured: true,
    quote: "Jamie O is a visionary! I gave him something close to a blank canvas and he made my presentation come to life! Very impressive person to work with!",
  },
  {
    name: "holackary",
    rating: "5.0",
    featured: true,
    quote: "Jamie - was prompt, knowledgeable and easy to work with. He was enthusiastic from the get go and it was a pleasure working with him. He was very helpful in defining the information he needed to get our project done quickly. Highly recommend!",
  },
  {
    name: "rguerra7714",
    rating: "5.0",
    featured: true,
    quote: "I needed this canva presentation quickly and Jamie delivered! The price was fair for a quick turnaround and the product was exactly what i needed!",
  },
  {
    name: "mslmastery",
    rating: "5.0",
    featured: true,
    quote: "I gave him a very complex project and he delivered.",
  },
  { name: "nurjei", rating: "4.3", quote: "Very great work" },
  { name: "riverstonedl", rating: "3.7", quote: "Good communication. The work was completed quickly." },
  { name: "mew107", rating: "4.0", quote: "Happy with the service from Jamie, would use again" },
  { name: "marcel_music85", rating: "5.0", quote: "Jamie is good with Genially and knows what needs to happen technically" },
];

function ReviewCarousel({ reviews = clientReviews, className = "", speed = "normal" }) {
  const trackReviews = [...reviews, ...reviews];

  return (
    <div className={`reviews-marquee ${className}`}>
      <div className={`reviews-marquee-track reviews-marquee-${speed}`}>
        {trackReviews.map((review, index) => (
          <article className="review-card review-marquee-card" key={`${review.name}-${index}`}>
            <div className="review-card-top">
              <span className="review-rating" aria-label={`${review.rating} out of 5 stars`}>
                <span className="review-stars" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, star) => (
                    <span key={star} className={star < Math.round(Number(review.rating)) ? "is-filled" : ""}>★</span>
                  ))}
                </span>
                <b>{review.rating}</b>
              </span>
            </div>
            <blockquote>“{review.quote}”</blockquote>
            <div className="review-card-footer">
              <span className="review-avatar" aria-hidden="true">{review.name.charAt(0).toUpperCase()}</span>
              <div>
                <strong>{review.name}</strong>
                <small>Verified client review</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

// Keep the homepage selective: short, high-impact feedback only.
// The complete collection remains available on the Reviews page.
const homepageReviews = clientReviews.filter((review) =>
  ["ericaglover870", "rguerra7714", "mslmastery", "marcel_music85"].includes(review.name)
);

// Eric Richards' long review is intentionally held back from public display for now.
const publishedReviews = clientReviews.filter((review) => review.name !== "ericrichards");

function HomeReviews({ eyebrow = "CLIENT EXPERIENCES" }) {
  return (
    <section className="home-reviews-section">
      <div className="section-wrap">
        <div className="reviews-section-heading">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2>Trusted by founders,<br /><span>agencies & creators.</span></h2>
          </div>
          <div className="home-reviews-intro">
            <p>Good work is best described by the people who experience it. A few words from clients I've worked with.</p>
            <Link className="text-link" to="/reviews">Explore all reviews <ArrowRight size={17} /></Link>
          </div>
        </div>
      </div>
      <ReviewCarousel reviews={homepageReviews} className="home-reviews-marquee" />
    </section>
  );
}

function Reviews() {
  return (
    <>
      <section className="reviews-hero section-wrap">
        <span className="eyebrow">THE BEAKON / CLIENT EXPERIENCES</span>
        <h1>Good work.<br /><span>Genuine words.</span></h1>
        <p>Feedback from people I've had the opportunity to work with, shared in their own words.</p>
        <div className="reviews-summary">
          <strong>08</strong>
          <span>CLIENT REVIEWS</span>
          <i />
          <span>SHARED ON FIVERR</span>
        </div>
      </section>

      <section className="reviews-page-carousel">
        <div className="section-wrap reviews-section-heading">
          <div>
            <span className="eyebrow">CLIENT FEEDBACK / IN THEIR OWN WORDS</span>
            <h2>Experiences worth<br /><span>sharing.</span></h2>
          </div>
          <p>Every project is a collaboration. These reviews offer a glimpse into the people, ideas and outcomes behind the work.</p>
        </div>
        <ReviewCarousel reviews={publishedReviews} className="reviews-page-marquee" speed="slow" />
        <div className="section-wrap reviews-page-note">
          <span>SHARED BY CLIENTS ON FIVERR</span>
          <span>08 REVIEWS <i /> CONTINUOUSLY ROTATING</span>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}


function BookingSection() {
  return (
    <section className="section-wrap booking-section" id="book">
      <div className="booking-head">
        <span className="eyebrow">BOOK A CALL</span>
        <h2>
          Pick a time that<br />works for <span>you.</span>
        </h2>
        <p>
          Thirty minutes, no pitch. Bring the problem and I will tell you
          straight whether I can help.
        </p>
        <a
          className="booking-out"
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open the calendar in a new tab <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="booking-frame">
        <iframe
          src={bookingUrl}
          title="Book a 30 minute call with James Akingbade"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "" });

  const submitForm = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nProject details:\n${form.project}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageIntro
        eyebrow="CONTACT / START A CONVERSATION"
        title={<>Let's make the next<br /><span>step a meaningful one.</span></>}
        description="Have a project, a process that needs improving or an idea you'd like to explore? Tell me a little about it."
      />
      <section className="section-wrap contact-page">
        <div className="contact-page-copy">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Good conversations<br />can lead to <span>good work.</span></h2>
          <p>
            Share what you're working on, what isn't working as it should,
            or what you'd like to build. I'll be glad to hear from you.
          </p>
          <a className="contact-method" href={`mailto:${email}`}>
            <Mail size={20} /><span><small>EMAIL</small>{email}</span><ArrowUpRight size={17} />
          </a>
          <a className="contact-method" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
            <MessageCircle size={20} /><span><small>WHATSAPP</small>Start a conversation</span><ArrowUpRight size={17} />
          </a>
          <a className="contact-method" href={linkedin} target="_blank" rel="noreferrer">
            <ArrowUpRight size={20} /><span><small>LINKEDIN</small>Connect professionally</span><ArrowUpRight size={17} />
          </a>
          <div className="contact-location"><MapPin size={17} /> Oyo State, Nigeria · Available for remote projects</div>
        </div>

        <form className="contact-form" onSubmit={submitForm}>
          <span className="eyebrow">TELL ME ABOUT YOUR PROJECT</span>
          <label>
            Your name
            <input
              required
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="How should I address you?"
            />
          </label>
          <label>
            Your email
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              placeholder="you@company.com"
            />
          </label>
          <label>
            What would you like to work on?
            <textarea
              required
              rows="6"
              value={form.project}
              onChange={(event) => setForm({ ...form, project: event.target.value })}
              placeholder="Tell me a little about your project, goals or challenge..."
            />
          </label>
          <button className="button button-gold" type="submit">
            Prepare email <ArrowUpRight size={17} />
          </button>
          <p className="form-note">
            This form opens your email app with your message prepared. It does
            not send or store your information on this website.
          </p>
        </form>
      </section>

      <BookingSection />
    </>
  );
}

function ContactBanner() {
  return (
    <section className="contact-banner closing-cta">
      <div className="section-wrap closing-cta-inner">
        <Reveal className="closing-cta-copy">
          <span className="eyebrow">THE NEXT STEP</span>

          <h2>
            Have an idea<br />
            worth <span>building?</span>
          </h2>

          <p>
            Whether you're improving a business process, building a digital
            experience or exploring a new idea, let's talk about what
            comes next.
          </p>

          <div className="closing-cta-actions">
            <Link className="button button-gold" to="/contact">
              Start a conversation <ArrowUpRight size={17} />
            </Link>

            <a
              className="closing-booking-link"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              <CalendarDays size={17} />
              Book a 30-minute call
            </a>

            <a
              className="closing-whatsapp-link"
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} />
              Connect on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal className="closing-cta-side">
          <span className="closing-cta-mark">B.</span>
          <span className="closing-cta-side-label">
            THE BEAKON
            <i />
            TECHNOLOGY · CREATIVITY · DIRECTION
          </span>
        </Reveal>

        <div className="closing-cta-bottom">
          <span>LET'S MAKE SOMETHING MEANINGFUL.</span>
          <Link to="/work">
            REVISIT SELECTED WORK <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="section-wrap not-found">
      <span className="eyebrow">404 / PAGE NOT FOUND</span>
      <h1>This isn't the page<br /><span>you were looking for.</span></h1>
      <Link className="button button-gold" to="/">Back to home</Link>
    </section>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetails />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CursorGlow />
      <ScrollToTop />
      <DocumentMeta />
      <div id="top">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
      <SiteActionBar />
    </BrowserRouter>
  );
}

export default App;
