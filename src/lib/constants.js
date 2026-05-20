export const OPINIONS_URL = process.env.NEXT_PUBLIC_OPINIONS_URL || '';
export const MARKET_URL = process.env.NEXT_PUBLIC_MARKET_URL || '';
export const PREDICT_URL = process.env.NEXT_PUBLIC_PREDICT_URL || '';
export const IMMORTAL_URL = process.env.NEXT_PUBLIC_IMMORTAL_URL || '';
export const ACCOUNT_URL = process.env.NEXT_PUBLIC_ACCOUNT_URL || '';
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.statisense.co';
export const S3_BUCKET_NAME = process.env.NEXT_PUBLIC_S3_BUCKET_NAME || '';
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

// Navigation constants for analysts program
export const NAVIGATION_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "intro", label: "About" },
  { id: "guests", label: "Guests" },
  { id: "cta", label: "RSVP" }
];

export const EVENT_INFO = {
  title: "Statisense Analysts Program",
  ticketUrl: "https://tix.africa/discover/retirepawabi",
  rsvpSection: "cta"
};

export const MARQUEE_ITEMS = [
  { before: "PawaBI gave us dashboards.", after: "Immortal BI gives us decisions." },
  { before: "Reports tell you what happened.", after: "Immortal BI tells you what to do next." },
  { before: "Data Analytics was the beginning.", after: "Data Intelligence is what comes now." },
  { before: "Happy Retirement.", after: "Your Work is Done, But Your Legacy Remains." },
];

export const PUNCHLINES = [
  {
    number: "01",
    old: "PawaBI gave us a decade of dashboards.",
    new: "Immortal BI gives us smart decisions."
  },
  {
    number: "02", 
    old: "Data Analytics was the beginning.",
    new: "Data Intelligence is the future — and it starts now."
  },
  {
    number: "03",
    old: "Dashboards show you what happened.",
    new: "Immortal BI tells you what to do next."
  }
]

export const TIMELINE = [
  {
    tool: "Excel",
    era: "The Spreadsheet Era",
    desc: "Excel ran the mornings. Every analyst started their day with a blank grid and a question.",
  },
  {
    tool: "Tableau",
    era: "The Visualisation Era",
    desc: "Tableau ran the strategy deck. Charts became the language of boardrooms across Africa and the world.",
  },
  {
    tool: "PawaBI",
    era: "The Dashboard Era",
    desc: "PawaBI ran the boardroom for nearly a decade. It taught us to measure the business — and answer for the number.",
  },
  {
    tool: "Immortal BI",
    era: "The Decision Era",
    desc: "Now Immortal BI teaches us to move the business. From describing yesterday to deciding tomorrow.",
    isNew: true,
  },
];

export const guestTypes = [
    {
      title: "Heads of Data",
      description: "CDOs, Heads of Analytics, Heads of Business Intelligence — the people who carry the dashboard and answer for the number."
    },
    {
      title: "Finance Leaders", 
      description: "CFOs, Finance Directors, Group Treasurers, FP&A leaders — the people who wait for the number and pay for the delay."
    },
    {
      title: "Tech Leaders",
      description: "CTOs, CIOs, VPs of Engineering, Heads of Digital Transformation — the people who own the stack and choose what stays in it."
    },
    {
      title: "Professionals & Business Owners",
      description: "Data Analysts, Founders, Entrepreneurs, Data Students, Community Members, AI Advocates. The people who love Data."
    }
  ]

export const FAQS = [
  {
    question: "Is there a cost to attend?",
    answer: "No. The event is free for approved guests. Every RSVP is reviewed personally — this is a curated room, not a public conference."
  },
  {
    question: "What is the dress code?",
    answer: "Black tie optional. Lean elegant — this is a celebration of careers and tools that earned a proper send-off."
  },
  {
    question: "Where exactly is the venue?",
    answer: "Civic Centre, Victoria Island.. Confirmed RSVPs receive the precise location, parking instructions, and accessibility details seven days before the event."
  },
  {
    question: "Can I bring a colleague?",
    answer: "Yes — invite them to RSVP separately. Each guest is approved individually. Plus-ones are reviewed case by case."
  }
]