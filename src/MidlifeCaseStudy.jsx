import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./midlife-case-study.css";

const problems = [
  {
    number: "01",
    title: "Search didn't match patients",
    body: 'Specialty labels like "gynecology" don\'t answer the question a woman with night sweats actually has. People scanned for symptoms, not titles.',
  },
  {
    number: "02",
    title: "Nothing showed freshness",
    body: "No listing displayed when it was last verified, so users assumed the worst — and sometimes they were right.",
  },
  {
    number: "03",
    title: "Two people, 40+ records",
    body: "Listings lived in a spreadsheet. Every update was a manual publish, and nothing was documented.",
  },
  {
    number: "04",
    title: "Registration felt broken",
    body: "Confirmation was inconsistent. Several participants had missed sessions because the link arrived late or landed in spam.",
  },
];

const deliverables = [
  {
    title: "Brand & page system",
    body: "Ten responsive templates, an editorial palette, serif/sans pairing, and a WCAG 2.2 AA target with documented gaps.",
  },
  {
    title: "Verified directory",
    body: "25-field CMS collection, dynamic profiles, search across five dimensions, five stacking filters, verification date on every card.",
  },
  {
    title: "Webinar system",
    body: "Form → Zoom registration → five-email sequence → follow-up and reporting, with a human review gate before anything sends.",
  },
  {
    title: "Documentation",
    body: "Velo reference code, a jargon-free staff guide, an 18-case QA report, and a monthly maintenance plan.",
  },
];

const stats = [
  ["Templates", "10 responsive pages"],
  ["Directory", "14 records · 25 fields"],
  ["Automation", "5 email templates"],
  ["QA", "18 cases · 0 fails"],
];

const results = [
  {
    tag: "Implemented & working",
    tone: "t1",
    heading: "In the prototype",
    items: [
      "Search across five dimensions with four stacking filters and a live result count",
      "Load-more, clear-all, empty state, and a mobile filter drawer",
      "Dynamic provider profiles with verification dates and disclaimers",
      "Registration validation with a confirmation state that echoes session details",
      "Resource filtering, article templates, sponsor and contact forms",
    ],
  },
  {
    tag: "Tested in the prototype",
    tone: "t2",
    heading: "QA pass",
    items: [
      "18 test cases run across directory, profile, registration and forms",
      "17 pass, 1 pass with caveats, 0 fails",
      "Caveat: keyboard traversal verified manually; screen-reader testing not performed",
      "Contrast measured at approximately 12.4:1 for body text",
    ],
  },
  {
    tag: "Illustrative targets",
    tone: "t3",
    heading: "Not measured — modelled only",
    items: [
      "A 12-month target of 25% search-to-profile conversion",
      "Directory sessions growing to 1,024 in the first modelled month",
      "35% open rate on the webinar confirmation sequence",
      "These are planning assumptions for a real build, not outcomes I observed",
    ],
  },
  {
    tag: "Requires a live site",
    tone: "t4",
    heading: "Cannot be verified here",
    items: [
      "Wix CMS collection wiring and dynamic page routing",
      "Zoom registration API behaviour and email deliverability",
      "Real analytics collection, tag configuration and consent handling",
      "Screen-reader testing across VoiceOver and NVDA",
    ],
  },
];

const cmsRows = [
  ["Amara Whitfield", "Physician", "Mar 2026", "Live"],
  ["Priya Raghunathan", "Endocrinology", "Feb 2026", "Live"],
  ["Ngozi Okafor", "Pelvic health PT", "Apr 2026", "Live"],
  ["Lucia Vasquez", "Sleep medicine", "Jan 2026", "Live"],
  ["Hannah Lindqvist", "Nutrition", "Due", "Review"],
];

function Chrome({ url, children }) {
  return (
    <div className="mlw-frame">
      <div className="mlw-bar">
        <i /><i /><i />
        <div className="mlw-url">{url}</div>
      </div>
      <div className="mlw-screen">{children}</div>
    </div>
  );
}

function Nav({ label, actions, pill }) {
  return (
    <div className="mlw-mnav">
      <div className="l">
        <i />
        <b>{label}</b>
      </div>
      <ul>
        {actions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ul>
      <div className="pill">{pill}</div>
    </div>
  );
}

function HomepageMock() {
  return (
    <Chrome url="midlifewellness.example.org">
      <Nav
        label="Midlife Wellness"
        actions={["Directory", "Events", "Resources"]}
        pill="Find a Provider"
      />
      <div className="mlw-mhero">
        <div>
          <div className="mlw-eb">Perimenopause · Menopause · Midlife</div>
          <h3>Answers, and the right provider.</h3>
          <p>
            Verified Chicago-area clinicians, free monthly webinars, and
            plain-language resources — no jargon, no sales pitch.
          </p>
          <span className="mlw-mbtn">Find a Provider</span>
          <span className="mlw-mbtn o">See events</span>
        </div>
        <div className="mlw-trust">
          <div className="t"><span>Verified listings</span><b>14</b></div>
          <div className="t"><span>Specialties</span><b>9</b></div>
          <div className="t"><span>This month&apos;s webinar</span><b>Free</b></div>
          <div className="t"><span>Average response</span><b>2 days</b></div>
        </div>
      </div>
      <div className="mlw-mrow">
        {[
          ["AW", "Amara Whitfield", "Physician"],
          ["PR", "Priya Raghunathan", "Endocrinology"],
          ["NO", "Ngozi Okafor", "Physical therapy"],
        ].map(([initials, name, role]) => (
          <div className="mlw-mcard" key={name}>
            <div className="mlw-av">{initials}</div>
            <b>{name}</b>
            <i>{role}</i>
            <span className="mlw-v">Verified</span>
          </div>
        ))}
      </div>
    </Chrome>
  );
}

function DirectoryMock() {
  return (
    <Chrome url="/provider-directory">
      <Nav label="Directory" actions={["14 providers"]} pill="Clear all" />
      <div className="mlw-df">
        <div className="s q">Search: night sweats, sleep, hormone therapy…</div>
        <div className="s">Specialty ▾</div>
        <div className="s">Location ▾</div>
        <div className="s">Service ▾</div>
        <div className="s">Type ▾</div>
      </div>
      <div className="mlw-dcount">
        <span>Showing <b>6</b> of <b>14</b> providers</span>
        <span>Suggest a provider →</span>
      </div>
      <div className="mlw-dgrid">
        {[
          ["AW", "Amara Whitfield", "MD, NCMP · Physician", "Verified Mar 2026"],
          ["PR", "Priya Raghunathan", "Endocrinology", "Verified Feb 2026"],
          ["NO", "Ngozi Okafor", "Pelvic health PT", "Verified Apr 2026"],
          ["LV", "Lucia Vasquez", "Sleep medicine", "Verified Jan 2026"],
        ].map(([initials, name, role, verified]) => (
          <div className="mlw-mcard" key={name}>
            <div className="mlw-av">{initials}</div>
            <b>{name}</b>
            <i>{role}</i>
            <span className="mlw-v">{verified}</span>
          </div>
        ))}
      </div>
    </Chrome>
  );
}

function ProfileMock() {
  return (
    <Chrome url="/providers/amara-whitfield">
      <Nav
        label="Midlife Wellness"
        actions={["Directory", "Events", "Resources"]}
        pill="Find a Provider"
      />
      <div className="mlw-pf">
        <div>
          <div className="big">AW</div>
          <div className="sc">
            <div className="h">Verified</div>
            <p>March 2026</p>
            <p>Re-checked quarterly</p>
          </div>
          <div className="sc">
            <div className="h">Contact</div>
            <p>(312) 555-0142</p>
            <p>hello@example.org</p>
          </div>
        </div>
        <div className="mlw-pfmain">
          <div className="mlw-eb">Physician · Menopause specialist</div>
          <h3>Amara Whitfield, MD, NCMP</h3>
          <div className="sub">Northshore Midlife Health · Streeterville, Chicago</div>
          <div className="pills">
            <span>Hormone therapy</span>
            <span>Sleep</span>
            <span>Perimenopause</span>
            <span>Telehealth</span>
          </div>
          <h4>About</h4>
          <p>
            Board-certified OB-GYN focused on the menopause transition, with a
            practice built around longer visits and shared decision-making.
          </p>
          <h4>Services</h4>
          <p>Consultations · Hormone therapy · Sleep assessment · Telehealth follow-ups</p>
          <div className="mlw-disc">
            This listing is informational and not medical advice. Confirm
            credentials and coverage directly with the practice.
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function AutomationMock() {
  return (
    <Chrome url="Automation · webinar registration">
      <div className="mlw-wfm">
        <div className="row">
          {[
            ["Step 1", "Wix form", "Name, email, city, question submitted."],
            ["Step 2", "Zoom registration", "Unique join link created automatically."],
            ["Step 3", "Email sequence", "Confirmation, 24h, 1h, replay."],
            ["Step 4", "Follow-up", "Survey, resource, next-month invite."],
          ].map(([step, title, body]) => (
            <div className="mlw-node" key={step}>
              <div className="k">{step}</div>
              <b>{title}</b>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <div className="mlw-gate">
          <b>Human review gate</b>
          <span>Nothing sends until staff approve →</span>
        </div>
      </div>
    </Chrome>
  );
}

function AnalyticsMock() {
  return (
    <Chrome url="Analytics · sample data">
      <div className="mlw-an">
        <div className="mlw-kpis">
          {[
            ["Sessions", "1,024", "▲ sample"],
            ["Searches", "251", "▲ sample"],
            ["Profiles", "104", "▲ sample"],
            ["Registrations", "76", "▲ sample"],
          ].map(([label, value, delta]) => (
            <div className="mlw-kpi" key={label}>
              <span>{label}</span>
              <b>{value}</b>
              <i>{delta}</i>
            </div>
          ))}
        </div>
        <div className="mlw-chartbox">
          <h5>Directory sessions · simulated 8 weeks</h5>
          <div className="mlw-bars">
            {[42, 56, 49, 68, 74, 63, 82, 91].map((height) => (
              <div key={height} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function CmsMock() {
  return (
    <Chrome url="Wix CMS · ProviderDirectory">
      <div className="mlw-cms">
        <div className="mlw-cms-head">
          <b>ProviderDirectory</b>
          <span>+ New item</span>
        </div>
        <div className="mlw-table">
          <div className="mlw-tr is-head">
            <span>Name</span>
            <span>Specialty</span>
            <span>Verified</span>
            <span>Status</span>
          </div>
          {cmsRows.map(([name, specialty, verified, status]) => (
            <div className="mlw-tr" key={name}>
              <span>{name}</span>
              <span>{specialty}</span>
              <span>{verified}</span>
              <span
                style={{
                  color: status === "Live" ? "#3f6b4d" : "#8a5a3b",
                  fontWeight: 700,
                }}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
        <div className="mlw-cms-foot">
          25 fields per record · verification date drives a quarterly review queue
        </div>
      </div>
    </Chrome>
  );
}

export default function MidlifeCaseStudy() {
  return (
    <div className="mlw">
      <section className="mlw-hero">
        <div className="mlw-wrap">
          <div className="mlw-meta">
            <span className="v2-eyebrow">CASE STUDY · WIX STUDIO · CMS · AUTOMATION</span>
            <span className="mlw-meta-num">SELF-INITIATED DEMONSTRATION</span>
          </div>

          <h1>A directory people trust, and a site two people can run.</h1>

          <p className="mlw-lede">
            A women&apos;s health nonprofit needed patients in perimenopause to
            find the right provider in under two minutes — and needed two staff
            members to keep 40+ listings current without a developer on call. I
            designed the site, built the directory, and wired the webinar system
            behind it.
          </p>

          <p className="mlw-note">
            Fictional demonstration project. The organization, providers, events
            and figures are invented; no live Wix site, Zoom account or email
            platform is connected. This page documents the design and build work
            only — no client relationship or measured outcome is claimed.
          </p>

          <div className="mlw-stats">
            {stats.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <b>{value}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mlw-section">
        <div className="mlw-wrap">
          <div className="mlw-section-head">
            <span className="v2-eyebrow">THE PROBLEM</span>
            <h2>Four things were breaking the directory</h2>
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

      <section className="mlw-section">
        <div className="mlw-wrap">
          <div className="mlw-section-head">
            <span className="v2-eyebrow">WHAT I BUILT</span>
            <h2>Four pieces, one system</h2>
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

      <section className="mlw-section">
        <div className="mlw-wrap">
          <div className="mlw-section-head">
            <span className="v2-eyebrow">THE WORK</span>
            <h2>Six views, built rather than described</h2>
          </div>

          <div className="mlw-shots">
            <figure className="mlw-shot">
              <HomepageMock />
              <figcaption>
                <b>01</b>
                <span>
                  Homepage. Editorial calm, task-first navigation — Find a
                  Provider is the primary action, not a dropdown.
                </span>
              </figcaption>
            </figure>

            <figure className="mlw-shot">
              <DirectoryMock />
              <figcaption>
                <b>02</b>
                <span>
                  Directory. Five stacking filters, live result count, and a
                  verification date on every card.
                </span>
              </figcaption>
            </figure>

            <figure className="mlw-shot">
              <ProfileMock />
              <figcaption>
                <b>03</b>
                <span>
                  Provider profile. A dynamic page from the CMS collection —
                  credentials, services, verification date, plain-language
                  disclaimer.
                </span>
              </figcaption>
            </figure>

            <figure className="mlw-shot">
              <AutomationMock />
              <figcaption>
                <b>04</b>
                <span>
                  Webinar automation. Registration, confirmation, reminders and
                  follow-up — with a human review gate before anything sends.
                </span>
              </figcaption>
            </figure>

            <figure className="mlw-shot">
              <AnalyticsMock />
              <figcaption>
                <b>05</b>
                <span>
                  Analytics plan. Ten metrics, each tied to a decision. Every
                  figure shown is simulated sample data.
                </span>
              </figcaption>
            </figure>

            <figure className="mlw-shot">
              <CmsMock />
              <figcaption>
                <b>06</b>
                <span>
                  CMS admin. Twenty-five fields per provider, with a verification
                  date that drives a review queue instead of a calendar reminder.
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mlw-section">
        <div className="mlw-wrap">
          <div className="mlw-section-head">
            <span className="v2-eyebrow">RESULTS, LABELLED HONESTLY</span>
            <h2>What works, what&apos;s simulated, what needs a live site</h2>
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
            The prototype is a working front end on local sample data — no build
            step, no external assets, runs in any browser. Full interactive
            prototype and implementation guide are available on request.
          </p>
        </div>
      </section>

      <section className="mlw-section">
        <div className="mlw-wrap">
          <div className="mlw-section-head">
            <span className="v2-eyebrow">BACK TO THE WORK</span>
            <h2>See the other projects.</h2>
          </div>
          <div className="closing-cta-actions">
            <Link className="button button-gold" to="/work">
              All selected work <ArrowUpRight size={17} />
            </Link>
            <Link className="closing-booking-link" to="/contact">
              Start a conversation <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
