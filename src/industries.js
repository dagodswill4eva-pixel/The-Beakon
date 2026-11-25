export const industries = [
  {
    slug: "early-education",
    short: "Early Years",
    name: "Early Years & Childcare",
    icon: "cap",
    accent: "#e8ae24",
    eyebrow: "ENQUIRIES · VISITS · FOLLOW-UP",
    headline: ["No enquiry", "goes cold.", "No family", "gets lost."],
    promise:
      "Simple systems for nurseries and childcare settings. Parents get a quick reply, a reminder before their visit, and follow-up after it. Nothing gets forgotten.",
    lensNote:
      "Built from real work: ECERS and ITERS checklists, visit reminders and application follow-up.",
    stats: [
      { value: "08", label: "automation systems built" },
      { value: "11", label: "learning & presentation builds" },
      { value: "04", label: "websites redesigned" },
    ],
    painLabel: "WHAT GOES WRONG",
    pains: [
      {
        title: "Enquiries go unanswered",
        body: "A parent fills in your form on Friday. By Monday they have called somewhere else. Whoever answers first wins the place.",
      },
      {
        title: "Visits get forgotten",
        body: "Someone books a visit. No one confirms it. No one follows up. Half the time nobody knows if it even happened.",
      },
      {
        title: "Checks live in people's heads",
        body: "ECERS and ITERS routines, staff records and daily notes sit in paper and spreadsheets. One sick day and it all stops.",
      },
    ],
    systems: [
      {
        number: "01",
        title: "Every enquiry in one place",
        body: "Every parent, every visit, every application in one list. The first reply goes out on its own.",
        items: ["One place for enquiries", "Automatic first reply", "Visit reminders", "Application follow-up"],
      },
      {
        number: "02",
        title: "Messages that send themselves",
        body: "Emails and texts from the first question to the first day. You do not have to remember any of it.",
        items: ["Welcome emails", "Text reminders", "Gentle follow-up", "Review requests"],
      },
      {
        number: "03",
        title: "Training that is easy to follow",
        body: "Short lessons and simple slides your team can read on a phone.",
        items: ["Staff induction", "Short lessons", "Parent presentations", "Simple slide decks"],
      },
    ],
    featured: [
      "ecers-checklist-automation",
      "iters-checklist-automation",
      "tour-reminder",
      "application-follow-up",
      "nurture-campaign",
      "aac-inclusive-classrooms",
    ],
    packages: [
      {
        name: "Check-up",
        duration: "1–2 weeks",
        summary:
          "I look at how parents find you and what happens next. Then I tell you what to fix first.",
        includes: ["How enquiries flow today", "Where replies are slow", "A short fix list"],
        featured: false,
      },
      {
        name: "Full build",
        duration: "3–5 weeks",
        summary:
          "I build the whole thing: enquiries, replies, reminders and follow-up. Then I hand it over and show your team how to run it.",
        includes: [
          "One place for enquiries",
          "Automatic first reply",
          "Visit and application reminders",
          "Handover and training",
        ],
        featured: true,
      },
      {
        name: "Ongoing help",
        duration: "Monthly",
        summary:
          "I keep the reminders running and fix things as they change, like a new term or a new class.",
        includes: ["A monthly check", "Small fixes as things change", "Priority support"],
        featured: false,
      },
    ],
    faq: [
      {
        q: "Do I need new software?",
        a: "Not always. If what you use can send automatic messages, I build inside it. If it cannot, I suggest the cheapest thing that works.",
      },
      {
        q: "Will this replace my staff?",
        a: "No. It does the chasing and the reminding. Your team gets that time back for the children and the parents.",
      },
      {
        q: "Can it handle more than one setting?",
        a: "Yes. Each site can have its own list and calendar, and you can see all of them together.",
      },
      {
        q: "How quickly can we start?",
        a: "Most check-ups start within a week. A full build starts once you agree with what the check-up found.",
      },
    ],
  },
  {
    slug: "logistics-transport",
    short: "Transport",
    name: "Transport & Delivery",
    icon: "truck",
    accent: "#5ec7d6",
    eyebrow: "QUOTES · BOOKINGS · UPDATES",
    headline: ["Every job", "written down.", "Every customer", "kept in the loop."],
    promise:
      "Booking and follow-up systems for transport and delivery businesses. A request becomes a job. The customer always knows what happens next.",
    lensNote: "Built from transfer-service, delivery and customer-operations work.",
    stats: [
      { value: "01", label: "transport website rebuilt" },
      { value: "08", label: "operations systems built" },
      { value: "11", label: "presentations built" },
    ],
    painLabel: "WHAT GOES WRONG",
    pains: [
      {
        title: "Requests land everywhere",
        body: "A form here, a WhatsApp there, a phone call, a DM. Nobody can say what is still waiting for a reply.",
      },
      {
        title: "The same job gets typed three times",
        body: "Into a diary, a spreadsheet and a group chat. The details stop matching and someone goes to the wrong place.",
      },
      {
        title: "Customers ring for updates",
        body: "Every call costs you time. Silence feels like bad service, even when the job is running on time.",
      },
    ],
    systems: [
      {
        number: "01",
        title: "One list of every job",
        body: "Every request become a job you can see, with a person responsible and a reply time.",
        items: ["Requests from every channel", "Quote templates", "Reminders to follow up", "Won and lost jobs"],
      },
      {
        number: "02",
        title: "Jobs booked properly",
        body: "A shared calendar with confirmations, driver details and automatic updates.",
        items: ["Shared calendar", "Confirmation texts", "Driver and vehicle notes", "Change notices"],
      },
      {
        number: "03",
        title: "Updates that send themselves",
        body: "Four messages at the four moments that matter. You send none of them by hand.",
        items: ["Booking confirmed", "Reminder before the job", "Job finished", "Ask for a review"],
      },
    ],
    featured: [
      "bandit-transfers",
      "last-mile-delivery-industry",
      "phone-system-and-compliance",
      "application-follow-up",
    ],
    packages: [
      {
        name: "Check-up",
        duration: "1–2 weeks",
        summary:
          "I look at how a request becomes a job today, then show you where the time and the money leak out.",
        includes: ["How enquiries become jobs", "Where replies are slow", "A short fix list"],
        featured: false,
      },
      {
        name: "Full build",
        duration: "3–5 weeks",
        summary:
          "I build the whole flow: capture, quote, book and confirm, with automatic customer updates.",
        includes: [
          "One list of every job",
          "Quote and booking flow",
          "Automatic customer updates",
          "Team handover",
        ],
        featured: true,
      },
      {
        name: "Ongoing help",
        duration: "Monthly",
        summary:
          "I keep the quotes and bookings running, and adjust the flow as the work changes.",
        includes: ["A monthly check", "Small adjustments", "Priority support"],
        featured: false,
      },
    ],
    faq: [
      {
        q: "We already use a diary. Does this replace it?",
        a: "Only if you want it to. The system can feed your existing diary rather than replace it.",
      },
      {
        q: "Can it handle several drivers or vehicles?",
        a: "Yes. Each job can carry its own driver, vehicle and status, all viewable in one place.",
      },
      {
        q: "Will customers mind automatic messages?",
        a: "They are written in your voice and sent at the right moment. Most people read a confirmation as good service.",
      },
      {
        q: "Do you build the website too?",
        a: "Yes. The website can be part of the work, or done on its own.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    short: "Retail",
    name: "Retail & Online Shops",
    icon: "bag",
    accent: "#f08a5d",
    eyebrow: "BROWSING · CHECKOUT · REPEAT ORDERS",
    headline: ["A shop people", "want to browse.", "A follow-up", "they remember."],
    promise:
      "Websites and follow-up for shops that sell online. Clear pages, easy checkout, and customers who come back.",
    lensNote: "Built from workwear and sportswear store redesigns.",
    stats: [
      { value: "02", label: "online shops redesigned" },
      { value: "08", label: "automation systems built" },
      { value: "11", label: "presentations built" },
    ],
    painLabel: "WHAT GOES WRONG",
    pains: [
      {
        title: "The site looks like a template",
        body: "A buyer cannot tell you apart from the next shop, so they compare on price alone.",
      },
      {
        title: "People look and leave",
        body: "They browse, then vanish. No email, no reminder, no second chance.",
      },
      {
        title: "Nobody comes back",
        body: "The first order is the last. No follow-up, and no reason to return.",
      },
    ],
    systems: [
      {
        number: "01",
        title: "A shop worth browsing",
        body: "Clear product pages, a simple checkout and a layout that works on a phone.",
        items: ["Clear product pages", "Easy checkout", "Phone-first design", "Simple navigation"],
      },
      {
        number: "02",
        title: "Catch people who leave",
        body: "A second chance to buy, sent automatically while the interest is still there.",
        items: ["Collect emails", "Abandoned cart nudge", "Welcome emails", "First-order offer"],
      },
      {
        number: "03",
        title: "Bring customers back",
        body: "Quiet, useful messages after the order, so the next one is easier.",
        items: ["Order updates", "Review requests", "Repeat-order emails", "Back-in-stock alerts"],
      },
    ],
    featured: ["west-coast-workwear", "fansidea", "customer-product-feedback"],
    packages: [
      {
        name: "Check-up",
        duration: "1–2 weeks",
        summary:
          "I go through your shop the way a customer would, then tell you where people leave and why.",
        includes: ["A customer walk through the shop", "Where people drop off", "A short fix list"],
        featured: false,
      },
      {
        name: "Full build",
        duration: "3–5 weeks",
        summary:
          "I redesign the shop and set up the emails that bring people back.",
        includes: [
          "Shop redesign",
          "Simple checkout flow",
          "Abandoned cart emails",
          "Repeat-order and review emails",
        ],
        featured: true,
      },
      {
        name: "Ongoing help",
        duration: "Monthly",
        summary:
          "I keep the emails running through busy seasons and improve pages as you add products.",
        includes: ["Seasonal email builds", "Small page improvements", "A monthly report"],
        featured: false,
      },
    ],
    faq: [
      {
        q: "Do you rebuild the whole shop?",
        a: "Only the parts that are losing you sales. If the base is good, I fix the pages that matter.",
      },
      {
        q: "Which platform do you work on?",
        a: "Whatever your shop already runs on. If it cannot do what you need, I tell you before you pay for anything.",
      },
      {
        q: "Will a new design hurt my Google ranking?",
        a: "Pages keep their addresses and titles. I change things in steps rather than all at once.",
      },
      {
        q: "Do you write the product copy?",
        a: "I set the structure and the direction. For long pieces I will tell you when a specialist writer is worth the money.",
      },
    ],
  },
  {
    slug: "coaching-consulting",
    short: "Coaching",
    name: "Coaching & Consulting",
    icon: "briefcase",
    accent: "#a99bf0",
    eyebrow: "ENQUIRIES · BOOKING · ONBOARDING",
    headline: ["Show what you", "know.", "Get the clients", "worth having."],
    promise:
      "Websites and admin systems for coaches and consultants. People understand what you do, book a call, and get looked after from day one.",
    lensNote: "Built from coaching-brand website and professional-services work.",
    stats: [
      { value: "01", label: "coaching site rebuilt" },
      { value: "08", label: "automation systems built" },
      { value: "11", label: "presentations built" },
    ],
    painLabel: "WHAT GOES WRONG",
    pains: [
      {
        title: "People don't get what you offer",
        body: "Your site lists services instead of showing the problem you solve. Visitors leave unsure.",
      },
      {
        title: "Every client means retyping everything",
        body: "The same emails, forms and calendar links, typed out again from scratch.",
      },
      {
        title: "Your files are everywhere",
        body: "Decks, testimonials and case studies spread across drives. Each new proposal starts from empty.",
      },
    ],
    systems: [
      {
        number: "01",
        title: "A website that explains you",
        body: "It leads with the problem you solve and the proof you solve it, not a list of services.",
        items: ["One clear headline", "Proof and case studies", "Simple calls to action", "Redesign"],
      },
      {
        number: "02",
        title: "Enquiries handled for you",
        body: "Every enquiry in one place, with an automatic reply and a link to book a call.",
        items: ["One inbox", "Automatic reply", "A few qualifying questions", "Booking link"],
      },
      {
        number: "03",
        title: "New clients looked after",
        body: "The paperwork and the welcome happen on their own, so day one always feels considered.",
        items: ["Welcome emails", "Forms collected", "Kick-off reminder", "Decks and one-pagers"],
      },
    ],
    featured: [
      "wishing-aint-doing-enough",
      "corporate-history-strategic-resource",
      "soft-skills-development",
      "foundations-of-becoming",
    ],
    packages: [
      {
        name: "Check-up",
        duration: "1–2 weeks",
        summary:
          "I read your site and your enquiry flow the way a buyer would, then tell you what to fix first.",
        includes: ["Website review", "How enquiries arrive", "A short fix list"],
        featured: false,
      },
      {
        name: "Full build",
        duration: "3–5 weeks",
        summary:
          "I rebuild the site and connect the enquiry, booking and onboarding steps into one calm system.",
        includes: [
          "Website redesign",
          "Automatic first reply",
          "Booking and intake",
          "Handover",
        ],
        featured: true,
      },
      {
        name: "Ongoing help",
        duration: "Monthly",
        summary:
          "I keep the site and intake flow working as your offer changes, and build new pages when you need them.",
        includes: ["A monthly review", "New pages as you need them", "Priority support"],
        featured: false,
      },
    ],
    faq: [
      {
        q: "I work alone. Is this too much?",
        a: "It is sized for you. Solo practices gain the most from removing the repeat admin between enquiry and kick-off.",
      },
      {
        q: "What if I only need a deck?",
        a: "Presentation work can be booked on its own. You do not need the full system first.",
      },
      {
        q: "Do you write my positioning?",
        a: "I ask the questions, test your current message with your market, and propose the words. You approve the final voice.",
      },
      {
        q: "Can you work with my existing site?",
        a: "Yes. Where the base is sound, I improve the structure and the wording instead of rebuilding.",
      },
    ],
  },
];

export const getIndustry = (slug) =>
  industries.find((industry) => industry.slug === slug);
