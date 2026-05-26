const services = [
  {
    id: 1,
    image: "/images/services/graduate-hat.png",
    title: "Academic Advisory",
    desc: "Course and university selection guidance",
  },
  {
    id: 2,
    image: "/images/services/apply.png",
    title: "Academic Support",
    desc: "Complete application preparation and review",
  },
  {
    id: 3,
    image: "/images/services/location.png",
    title: "Visa & Travel",
    desc: "End-to-end visa and travel assistance",
  },
];

const choose = [
  {
    id: 1,
    title: "Expert Guidance",
    description:
      "15+ years of experience helping students achieve their UK study dreams",
    image: "/images/choose/1.png",
  },
  { id: 2,
    title: "Partner Network",
    description:
      "Direct partnerships with 100+ top UK universities and colleges",
    image: "/images/choose/2.png",
  },
  {
    id: 3,
    title: "Personalized Support",
    description: "One-on-one counseling tailored to your goals and background",
    image: "/images/choose/3.png",
  },
  {
    id: 4,
    title: "95% Success Rate",
    description: "Proven track record of successful university admissions",
    image: "/images/choose/4.png",
  },
];

const successStories = [
  {
    id: 1,
    name: "Oliver Matthews",
    school: "University of Manchester — MSc Advanced Computer Science",
    image: "/images/acceptance/sarah.png",
  },
  {
    id: 2,
    name: "Aisha Rahman",
    school: "King’s College London — MSc Global Health",
    image: "/images/acceptance/sarah.png",
  },
  {
    id: 3,
    name: "Joshua Bennett",
    school: "London School of Economics (LSE) — MSc Finance",
    image: "/images/acceptance/sarah.png",
  },
];

const liveAcceptances = [
  {
    id: 1,
    name: "Daniel Whitmore",
    school: "University of Cambridge",
    time: "2 hours ago",
  },
  {
    id: 2,
    name: "Fatima Noor",
    school: "University of Bristol",
    time: "2 hours ago",
  },
  {
    id: 3,
    name: "Samuel Okafor",
    school: "University of Leeds",
    time: "2 hours ago",
  },
  {
    id: 4,
    name: "Hannah Collins",
    school: "University of Warwick",
    time: "2 hours ago",
  },
];

const partners = [
  {
    id: 1,
    name: "Aston University",
    rank: "#2 World Ranking",
  },
  {
    id: 2,
    name: "Bournemouth University",
    rank: "#3 UK Ranking",
  },
  {
    id: 3,
    name: "University of Bradford",
    rank: "#Top for Socials",
  },
  {
    id: 4,
    name: "University of Bristol",
    rank: "#61 World Ranking",
  },
  {
    id: 5,
    name: "University of Brunel",
    rank: "#15 World Ranking",
  },
];

const acceptance = [
  {
    id: 1,
    name: "Sarah M.",
    text: "Just got accepted to Cambridge for Computer Science!",
    time: "2 minutes ago",
    image: "/images/acceptance/sarah.png",
  },
  {
    id: 2,
    name: "James K.",
    text: "Imperial College London - Engineering with scholarship!",
    time: "5 minutes ago",
    image: "/images/acceptance/james.png",
  },
];

const admissionService = [
  {
    id: 1,
    title: "Admission Services",
    description:
      "With thousands of different courses on offer, choosing the right course can be difficult. We help guide you to suitable courses and discuss progression routes. This is one of our core services at Studyrange consult.",

    process: [
      {
        id: 1,
        content:
          "Evaluate your academic background, interests, and career aspirations",
      },
      {
        id: 2,
        content:
          "Identify programmes that align with your specific qualifications",
      },
      {
        id: 3,
        content:
          "Shortlist universities based on rankings, location, and opportunities",
      },
      {
        id: 4,
        content:
          "Create a detailed roadmap for your application journey",
      },
    ],

    requirements: [
      { id: 1, content: "Academic transcripts and certificates" },
      { id: 2, content: "Standardized test scores (if available)" },
      { id: 3, content: "Career interests and preferences" },
      { id: 4, content: "Budget considerations" },
    ],

    timeline: [
      { id: 1, label: "Duration", value: "2-4 weeks" },
      { id: 2, label: "Sessions", value: "2-3 consultations" },
      {
        id: 3,
        label: "Deliverables",
        value: "Personalized university list with detailed analysis",
      },
    ],

    faqs: [
      {
        id: 1,
        question: "How many universities will you recommend?",
        answer:
          "We typically recommend 3 to 5 universities max total; target, safe, reach categories curated for your profile.",
      },
      {
        id: 2,
        question: "Can I change my program preferences later?",
        answer:
          "You are flexible to switch program depending on your enrollment phase.",
      },
    ],
  },
];


export { services, choose, successStories, liveAcceptances, acceptance, partners, admissionService };
