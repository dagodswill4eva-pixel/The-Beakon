import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import "./midlife-case-study.css";
import "./flowpilot-case-study.css";

const prototypeUrl = "/demos/flowpilot-dashboard.html";

const metaRows = [
  ["Project", "FlowPilot AI — an agency CRM workspace"],
  ["Status", "Self-initiated demonstration, not a client engagement"],
  ["What I did", "Interface design, data model, workflow logic, front-end build"],
  ["Built with", "GoHighLevel-based concept · single-file HTML prototype"],
];

const stats = [
  ["10", "Views built"],
  ["6", "Workflows wired"],
  ["2,847", "Contacts in the demo set"],
  ["1,842", "Runs a day · simulated"],
];

const problems = [
  {
    number: "01",
    title: "Leads arrive in six places",
    body: "Google Ads, Facebook, the website form, the AI receptionist, referrals and missed calls. Six sources, and six chances to drop someone.",
  },
  {
    number: "02",
    title: "The first reply decides it",
    body: "The demo holds first response at 38 seconds. A firm that answers in four hours is not really competing for the same job.",
  },
  {
    number: "03",
    title: "A voice bot that lies is worse than none",
    body: "If Ava books a job and the booking never reaches the record, the office double-books. Every call has to write back to the contact.",
  },
  {
    number: "04",
    title: "Agency operations break quietly",
    body: "Of 1,120 simulated checkouts, 908 were fully activated. The other 212 are the accounts that quietly stop paying.",
  },
];

const approach = [
  {
    number: "01",
    title: "One record per person",
    body: "Every source writes to the same contact before anything else happens — tag, owner and opportunity created in a single pass, so nobody exists twice.",
  },
  {
    number: "02",
    title: "Automation with a visible brake",
    body: "Each workflow can be switched off, retries are exponential and capped at five, and a flow that needs a person waits in a review queue instead of retrying forever.",
  },
  {
    number: "03",
    title: "Empty states that tell the truth",
    body: "Every integration says “Not connected” rather than pretending. A prototype that fakes a live Stripe feed teaches the wrong thing about what is finished.",
  },
];

const journey = [
  ["Capture", "Form, call or missed call becomes one contact"],
  ["Qualify & book", "Ava answers, qualifies and books on the call"],
  ["Handoff", "The office opens the day to a full board"],
];

const deliverables = [
  {
    title: "The workspace",
    body: "Overview, contacts and a drag-and-drop pipeline, with a live activity feed and an automation health panel.",
  },
  {
    title: "The front desk",
    body: "Ava, an inbound receptionist: editable agent prompt, voice and tone, answering hours, transfer rules and a knowledge base.",
  },
  {
    title: "The engine",
    body: "Six workflows with their triggers and step lists, a week calendar, and a report set with before-and-after targets.",
  },
  {
    title: "The business",
    body: "Billing, a provisioning console with idempotency keys and retries, and role-based settings for the sub-account.",
  },
];

const workflowRows = [
  ["New lead capture and routing", "Form submitted", "99.2%", "active"],
  ["Missed-call text back", "Call missed", "100%", "active"],
  ["AI call outcome sync", "Voice agent call ended", "98.8%", "active"],
  ["Appointment confirmation", "Appointment booked", "99.6%", "active"],
  ["Estimate follow-up", "Estimate sent", "99.1%", "active"],
  ["Webhook auth failing", "Call outcome received", "—", "error"],
];

const beforeAfter = [
  ["Manual sub-account setup", "3.5 hrs", "18 min", "−91%"],
  ["Time to first live workflow", "6 days", "1 day", "−83%"],
  ["Missed-call follow-up", "4.2 hrs", "45 sec", "−99%"],
  ["After-hours capture", "0%", "100%", "+100 pts"],
  ["Onboarding support tickets", "14 / account", "4 / account", "−71%"],
  ["Subscription activation rate", "54%", "81%", "+27 pts"],
];

const funnel = [
  ["Checkout completed", 1120],
  ["Business profile", 1041],
  ["Sub-account created", 997],
  ["Snapshot applied", 964],
  ["Number connected", 918],
  ["Activated", 908],
];

const results = [
  {
    tone: "t1",
    tag: "Works",
    heading: "What you can actually click",
    items: [
      "Drag a card between pipeline stages and the open value updates",
      "Simulate an inbound call and watch Ava produce an outcome",
      "Toggle a workflow off and the health panel follows",
      "Stack contact filters against the 2,847-row demo set",
      "Switch between ten views without a page reload",
    ],
  },
  {
    tone: "t2",
    tag: "Simulated",
    heading: "What is invented",
    items: [
      "BrightPath Home Services and every named contact",
      "All revenue, pipeline and call volumes",
      "Billing figures, invoices and usage meters",
      "The before-and-after table on this page: design targets, not results",
    ],
  },
  {
    tone: "t3",
    tag: "Designed",
    heading: "What a production build needs",
    items: [
      "GoHighLevel sub-accounts, snapshots and webhook delivery",
      "Stripe subscription events mirrored to the workspace",
      "A voice provider carrying the agent prompt server-side",
      "Twilio numbers and delivery receipts",
    ],
  },
];

const takeaways = [
  {
    number: "01",
    title: "Speed is the product",
    body: "The interface exists to shorten the gap between a lead arriving and a human or bot replying. Every screen is judged on that gap.",
  },
  {
    number: "02",
    title: "Show the failures",
    body: "One workflow sits in error with a reconnect link. A dashboard that only ever shows green is a dashboard nobody trusts.",
  },
  {
    number: "03",
    title: "Label the pretend parts",
    body: "“Simulated”, “not connected” and “design target” are features. They are why a demo can be shown to a client without overselling it.",
  },
];

const moreWork = [
  {
    slug: "midlife-wellness-alliance",
    av: "MW",
    cat: "Website",
    title: "Midlife Wellness Alliance",
    blurb:
      "A verified provider directory and webinar system for a women's health nonprofit.",
  },
  {
    slug: "west-coast-workwear",
    av: "WC",
    cat: "Retail",
    title: "West Coast Workwear",
    blurb: "A storefront rebuild for a workwear brand.",
  },
  {
    slug: "bandit-transfers",
    av: "BT",
    cat: "Transport",
    title: "Bandit Transfers",
    blurb: "A booking flow that stops losing enquiries.",
  },
];

function Frame({ url, children }) {
  return (
    <div className="mlw-frame">
      <div className="mlw-bar">
        <i />
        <i />
        <i />
        <span className="mlw-url">{url}</span>
      </div>
      <div className="mlw-screen">{children}</div>
    </div>
  );
}

function OverviewMock() {
  return (
    <Frame url="app.flowpilot.ai / overview">
      <div className="flp-app">
        <div className="flp-rail">
          <span className="is-on">Overview</span>
          <span>Contacts</span>
          <span>Pipeline</span>
          <span>Calendar</span>
          <span>Voice AI</span>
          <span>Automations</span>
          <span>Reports</span>
        </div>
        <div className="flp-main">
          <div className="flp-head">
            <div>
              <b>BrightPath Home Services</b>
              <i>Workspace · Growth plan</i>
            </div>
            <span className="flp-pill">Live</span>
          </div>

          <div className="flp-kpis">
            <div>
              <span>Leads captured</span>
              <b>412</b>
              <i>7 days</i>
            </div>
            <div>
              <span>Capture rate</span>
              <b>68.4%</b>
              <i>lead → appointment</i>
            </div>
            <div>
              <span>First response</span>
              <b>38s</b>
              <i>average</i>
            </div>
          </div>

          <div className="flp-split">
            <div className="flp-panelbox">
              <span className="flp-lbl">Lead flow</span>
              <div className="flp-wave">
                {[38, 52, 44, 66, 58, 78, 92].map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="flp-panelbox">
              <span className="flp-lbl">Pipeline snapshot</span>
              {[
                ["New lead", "18"],
                ["Contacted", "12"],
                ["Qualified", "9"],
                ["Booked", "7"],
              ].map(([stage, count]) => (
                <div className="flp-prow" key={stage}>
                  <span>{stage}</span>
                  <b>{count}</b>
                </div>
              ))}
            </div>
          </div>

          <div className="flp-ava">
            <span className="flp-dot" />
            <div>
              <b>Ava · answering now</b>
              <i>34 calls today · 9 booked · 4 missed calls recovered</i>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function BoardMock() {
  return (
    <Frame url="app.flowpilot.ai / pipeline">
      <div className="flp-board">
        {[
          ["New lead", [["Tanya Brooks", "$4,200"], ["Marcus Reed", "$1,850"]]],
          ["Qualified", [["Rachel Adeyemi", "$7,200"], ["Ben Carter", "$3,400"]]],
          ["Booked", [["Maya Chen", "$2,600"]]],
          ["Won", [["Sofia Reyes", "$5,100"]]],
        ].map(([stage, cards]) => (
          <div className="flp-col" key={stage}>
            <span className="flp-collbl">
              {stage}
              <b>{cards.length}</b>
            </span>
            {cards.map(([name, value]) => (
              <div className="flp-card" key={name}>
                <b>{name}</b>
                <span>{value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Frame>
  );
}

function VoiceMock() {
  return (
    <Frame url="app.flowpilot.ai / voice">
      <div className="flp-voice">
        <div className="flp-call">
          <span className="flp-dot" />
          <div>
            <b>Ava — inbound receptionist</b>
            <i>On call · 00:41 · BrightPath Home Services</i>
          </div>
          <span className="flp-live">Active</span>
        </div>
        <div className="flp-transcript">
          {[
            ["Ava", "BrightPath, this is Ava. How can I help?"],
            ["Caller", "My AC stopped cooling last night."],
            ["Ava", "I can get a technician out tomorrow morning. Does 9:30 work?"],
            ["Caller", "9:30 is fine."],
          ].map(([who, line], i) => (
            <div className={who === "Ava" ? "is-ava" : ""} key={i}>
              <span>{who}</span>
              <p>{line}</p>
            </div>
          ))}
        </div>
        <div className="flp-meta">
          <span>Voice · Aria</span>
          <span>24/7 triage</span>
          <span>5 knowledge sources</span>
        </div>
      </div>
    </Frame>
  );
}

function AutomationMock() {
  return (
    <Frame url="app.flowpilot.ai / automations">
      <div className="flp-wf">
        <div className="flp-wfhead">
          <span className="flp-lbl">Runs today</span>
          <b>1,842</b>
          <span className="flp-ok">98.6% success</span>
        </div>
        {workflowRows.map(([name, trigger, success, state]) => (
          <div className="flp-wfrow" key={name}>
            <span className={`flp-state ${state === "error" ? "is-err" : ""}`} />
            <div>
              <b>{name}</b>
              <i>{trigger}</i>
            </div>
            <span className="flp-rate">{success}</span>
            <span className={`flp-toggle ${state === "error" ? "is-err" : ""}`} />
          </div>
        ))}
        <p className="flp-foot">Retries are exponential, capped at 5 attempts</p>
      </div>
    </Frame>
  );
}

export default function FlowPilotCaseStudy() {
  return (
    <div className="mlw flp">
      <section className="mlw-hero">
        <div className="mlw-wrap">
          <div className="mlw-hero-grid">
            <div>
              <span className="mlw-eb">Case study · GoHighLevel concept</span>

              <h1>
                Every lead <em>answered</em>, every call logged.
              </h1>

              <p className="mlw-lede">
                A home-services business takes enquiries from six places and
                answers them from one. I designed and built FlowPilot: an AI CRM
                workspace with ten views, six workflows and a voice receptionist
                that books appointments and writes them back to the record.
              </p>

              <div className="mlw-actions">
                <a
                  className="button"
                  href={prototypeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open the live prototype <ArrowUpRight size={16} />
                </a>
                <a className="closing-booking-link" href="#the-work">
                  See the built views <ArrowRight size={14} />
                </a>
              </div>

              <p className="mlw-note">
                Fictional demonstration project. BrightPath Home Services, every
                contact and every figure are invented, and no CRM, billing or
                voice account is connected. This page documents the design and
                build work only — no client relationship or measured outcome is
                claimed.
              </p>
            </div>

            <div className="mlw-hero-art">
              <OverviewMock />
            </div>
          </div>

          <div className="mlw-metarow">
            {metaRows.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <b>{value}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mlw-band">
        <div className="mlw-wrap">
          {stats.map(([value, label]) => (
            <div key={label}>
              <b>{value}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mlw-section">
        <div className="mlw-wrap">
          <div className="mlw-section-head">
            <span className="mlw-eb">The challenge</span>
            <h2>
              An AI CRM is easy to promise and hard to <em>trust</em>
            </h2>
            <p className="mlw-intro">
              Most "AI CRM" demos show a chatbot and a chart. The work that
              actually decides whether a firm keeps the system is duller: where
              leads land, whether the booking reaches the record, and what
              happens when a workflow fails at 2am.
            </p>
          </div>
          <div className="mlw-cards is-four">
            {problems.map((problem) => (
              <div className="mlw-card" key={problem.number}>
                <span className="mlw-num">{problem.number}</span>
                <h3>{problem.title}</h3>
                <p>{problem.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mlw-section is-panel">
        <div className="mlw-wrap">
          <div className="mlw-section-head">
            <span className="mlw-eb">The approach</span>
            <h2>
              The bot is the easy <em>part</em>
            </h2>
            <p className="mlw-intro">
              Three decisions shaped the build. All three are about what happens
              when something goes wrong, not when it goes right.
            </p>
          </div>

          <div className="mlw-steps">
            {approach.map((step) => (
              <div className="mlw-step" key={step.number}>
                <span className="mlw-num">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mlw-flow">
            <span className="mlw-flow-label">
              The path a lead takes through the workspace
            </span>
            <div className="mlw-flow-row">
              {journey.map(([title, body], index) => (
                <div
                  className={`mlw-flow-node${index === 1 ? " is-key" : ""}`}
                  key={title}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{title}</b>
                  <i>{body}</i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mlw-section">
        <div className="mlw-wrap">
          <div className="mlw-section-head">
            <span className="mlw-eb">What I built</span>
            <h2>
              Four surfaces, one <em>workspace</em>
            </h2>
          </div>
          <div className="mlw-cards is-four">
            {deliverables.map((item) => (
              <div className="mlw-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mlw-section" id="the-work">
        <div className="mlw-wrap">
          <div className="mlw-section-head">
            <span className="mlw-eb">The work</span>
            <h2>
              Ten views, built rather than <em>described</em>
            </h2>
          </div>

          <div className="mlw-shots">
            <figure className="mlw-shot">
              <OverviewMock />
              <figcaption>
                <b>01</b>
                <span>
                  Overview. Three numbers an owner actually checks — leads
                  captured, capture rate, first response — above the fold.
                </span>
              </figcaption>
            </figure>

            <figure className="mlw-shot">
              <BoardMock />
              <figcaption>
                <b>02</b>
                Pipeline. Cards drag between stages and the open value
                recalculates, so the board is the source of truth, not a report.
              </figcaption>
            </figure>

            <figure className="mlw-shot">
              <VoiceMock />
              <figcaption>
                <b>03</b>
                Voice AI. Ava answers, qualifies and books, with the prompt,
                tone, hours and knowledge sources editable in the same screen.
              </figcaption>
            </figure>

            <figure className="mlw-shot">
              <AutomationMock />
              <figcaption>
                <b>04</b>
                Automations. Six workflows with live state — including one
                sitting in error, because a panel that is always green is a
                panel nobody believes.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mlw-section is-panel">
        <div className="mlw-wrap">
          <div className="mlw-section-head">
            <span className="mlw-eb">Targets, labelled honestly</span>
            <h2>
              What is built, what is simulated, what needs a <em>live stack</em>
            </h2>
          </div>

          <div className="mlw-resultgrid">
            <div className="mlw-chartcard">
              <h4>Where accounts get stuck</h4>
              <p className="sub">Provisioning drop-off in simulated runs</p>
              {funnel.map(([label, value]) => (
                <div className="mlw-chartrow" key={label}>
                  <span>{label}</span>
                  <div className="mlw-chartbar">
                    <i style={{ width: `${(value / 1120) * 100}%` }} />
                  </div>
                  <b>{value.toLocaleString("en-US")}</b>
                </div>
              ))}
            </div>

            <div className="mlw-statcard">
              <h4>The build itself</h4>
              <p className="sub">Facts about the prototype, not the fiction</p>
              <div className="mlw-statgrid">
                {[
                  ["10", "Views"],
                  ["6", "Workflows"],
                  ["4", "Integrations designed"],
                  ["0", "External requests"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <b>{value}</b>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mlw-source">
            Source: the prototype's own provisioning console, running on
            simulated data. Production figures would come from provisioning logs,
            Stripe events and webhook delivery.
          </p>

          <div className="flp-beforeafter">
            <div className="flp-ba-head">
              <h4>Before and after</h4>
              <p className="sub">
                Design targets, not verified outcomes — this is what the
                workspace is built to move.
              </p>
            </div>
            <div className="flp-table">
              <div className="flp-tr is-head">
                <span>Measure</span>
                <span>Before</span>
                <span>Target</span>
                <span>Change</span>
              </div>
              {beforeAfter.map(([measure, before, target, change]) => (
                <div className="flp-tr" key={measure}>
                  <span>{measure}</span>
                  <span>{before}</span>
                  <span>{target}</span>
                  <b>{change}</b>
                </div>
              ))}
            </div>
          </div>

          <div className="mlw-results">
            {results.map((block) => (
              <div className="mlw-rblk" key={block.heading}>
                <span className={`mlw-tag ${block.tone}`}>{block.tag}</span>
                <h3>{block.heading}</h3>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mlw-note" style={{ marginTop: 28, marginBottom: 0 }}>
            The prototype is one HTML file on local sample data — no build step,
            no external requests, runs in any browser. Open it and drag a card,
            simulate a call, then switch a workflow off and watch the health
            panel follow.
          </p>
        </div>
      </section>

      <section className="mlw-section">
        <div className="mlw-wrap">
          <div className="mlw-section-head">
            <span className="mlw-eb">The takeaway</span>
            <h2>
              What this means for <em>your</em> operation
            </h2>
          </div>

          <div className="mlw-cards is-three">
            {takeaways.map((item) => (
              <div className="mlw-card" key={item.number}>
                <span className="mlw-num">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mlw-section">
        <div className="mlw-wrap">
          <div className="mlw-section-head">
            <span className="mlw-eb">More work</span>
            <h2>
              Other builds, same <em>approach</em>
            </h2>
          </div>

          <div className="mlw-morework">
            {moreWork.map((item) => (
              <Link
                className="mlw-workcard"
                key={item.slug}
                to={`/work/${item.slug}`}
              >
                <span className="av">{item.av}</span>
                <span className="cat">{item.cat}</span>
                <b>{item.title}</b>
                <p>{item.blurb}</p>
                <span className="go">
                  View case study <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mlw-cta">
        <div className="mlw-wrap">
          <h2>Want this working on your own lead flow?</h2>
          <p>
            Open the prototype first — drag a card, simulate a call, switch a
            workflow off. If the approach fits how you already work, we can talk.
          </p>
          <div className="mlw-cta-actions">
            <a
              className="button"
              href={prototypeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open the live prototype <ArrowUpRight size={16} />
            </a>
            <Link className="closing-booking-link" to="/contact">
              Start a conversation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
