export type ProjectDiscipline = "GAME DESIGN" | "UI/UX" | "MOTION & CINEMATIC";

export interface PortfolioProject {
  slug: string;
  number: string;
  title: string;
  type: string;
  discipline: ProjectDiscipline;
  image: string;
  imageAlt: string;
  summary: string;
  role: string;
  year: string;
  tools: string[];
  challenge: string;
  solution: string;
  gallery?: { src: string; alt: string }[];
  video?: string;
  externalUrl?: string;
  externalLabel?: string;
  caseStudy?: {
    research?: string;
    iterations?: string;
    prototypes?: string;
    outcomes?: string;
    learnings?: string;
  };
}

export const owner = {
  name: "Suriya Nateshkhanna",
  displayName: "SURIYA",
  email: "suriyanatesh0406@gmail.com",
  linkedin: "https://www.linkedin.com/in/suriya-natesh",
  behance: "https://www.behance.net/suriyanatesh0406",
  resumePath: "SuriyaNateshkhanna_Resume.pdf",
  introduction:
    "I am a multidisciplinary designer exploring the intersection of game design, UI/UX, visual communication, and interactive systems. I enjoy understanding how people interact with digital products, how systems influence behavior, and how thoughtful visual decisions can turn complex ideas into engaging experiences.",
  philosophy:
    "I balance structured thinking with creativity. I’m interested in how small design decisions shape the way people move through a product, a game, or a story.",
};

export const experience = [
  {
    date: "June — August 2026",
    title: "UI/UX Design Intern",
    organization: "EXL Services · Chennai",
    detail: "UI/UX Design Internship",
  },
  {
    date: "November 2025 — April 2026",
    title: "Visual Communication Pavilion Representative",
    organization: "MIT World Peace University · Pune",
    detail: "Visual Communication Pavilion Representative experience",
  },
  {
    date: "March 2024 — September 2025",
    title: "Freelance Brand & UI/UX Designer",
    organization: "Freelance",
    detail: "Freelance Brand and UI/UX Design experience",
  },
];

export const education = {
  institution: "MIT World Peace University",
  location: "Pune, India",
  qualification: "B.Des. in Visual Communication",
  status: "Currently in progress",
};

const image = (name: string) => `portfolio/${name}`;

export const projects: PortfolioProject[] = [
  {
    slug: "colonial-parkway",
    number: "01",
    title: "Colonial Parkway",
    type: "2D Image Sequence",
    discipline: "MOTION & CINEMATIC",
    image: image("colonial-parkway.webp"),
    imageAlt:
      "Black-and-white Colonial Parkway artwork showing a winding road through a dark tree line",
    summary:
      "A 2D image-sequence project using high-contrast visual storytelling, controlled framing, and atmospheric composition to build a cinematic road narrative across sequential frames.",
    role: "2D Artist",
    year: "2025",
    tools: ["Krita", "Adobe Photoshop"],
    challenge:
      "Build a coherent visual story across a 2D image sequence where each frame must feel cinematic on its own while still preserving continuity in mood, depth, and direction from one shot to the next.",
    solution:
      "The project description highlights a structured sequence workflow using thumbnail planning, tonal-consistency checks, and frame-by-frame composition alignment in Krita and Photoshop to create a unified narrative progression with visual rhythm.",
    gallery: [
      {
        src: image("colonial-frame.webp"),
        alt: "A frame from the Colonial Parkway image sequence",
      },
    ],
  },
  {
    slug: "sanamahis-blade",
    number: "02",
    title: "Sanamahi's Blade",
    type: "World Design",
    discipline: "GAME DESIGN",
    image: image("sanamahis-blade.webp"),
    imageAlt:
      "Sanamahi's Blade title artwork against a dark, textured world-design backdrop",
    summary:
      "A world-design project inspired by Huyen Langlon, focused on building a mythic environment language through mood, scale, and culturally rooted visual storytelling.",
    role: "Environment Designer",
    year: "2025",
    tools: ["Blender", "Unreal Engine", "Photoshop", "Figma"],
    challenge:
      "Translate the spirit of Huyen Langlon into a cohesive fantasy world that balances cultural inspiration, gameplay readability, and cinematic atmosphere across key locations.",
    solution:
      "The existing project description presents a layered world-design approach combining terrain blockouts, focal architecture, mood-driven lighting, and refined environment storytelling using Blender, Unreal, Photoshop, and Figma.",
    video: image("sanamahis-blade.mp4"),
    gallery: Array.from({ length: 10 }, (_, index) => ({
      src: image(`sanamahi/world-${String(index + 1).padStart(2, "0")}.webp`),
      alt: `Sanamahi's Blade world-design screenshot ${index + 1}`,
    })),
  },
  {
    slug: "paypal-redesign",
    number: "03",
    title: "PayPal Redesign",
    type: "UI/UX",
    discipline: "UI/UX",
    image: image("paypal-redesign.webp"),
    imageAlt: "PayPal logo on a clean white field from the project artwork",
    summary:
      "A UI/UX redesign concept focused on simplifying digital payment interactions, improving visual hierarchy, and creating a cleaner checkout experience.",
    role: "UI/UX Designer",
    year: "2026",
    tools: ["Figma", "Photoshop"],
    challenge:
      "Reimagine the payment flow to reduce decision friction, improve trust signals, and make key actions easier to scan and complete across fast mobile-first scenarios.",
    solution:
      "The existing project description highlights a redesigned visual system and interaction flow with clearer hierarchy, focused CTA states, and cleaner spacing patterns in Figma and Photoshop.",
    video: image("paypal-redesign.mp4"),
  },
  {
    slug: "zenon",
    number: "04",
    title: "Zenon",
    type: "AI Security UX Case Study",
    discipline: "UI/UX",
    image: image("zenon.webp"),
    imageAlt:
      "Zenon security interface identity with a green shield motif and circuit-like lines",
    summary:
      "A cybersecurity monitoring application concept intended to make digital threat awareness clearer through dashboard hierarchy and actionable interface patterns.",
    role: "UI/UX Designer",
    year: "2024",
    tools: ["Figma", "Adobe Photoshop"],
    challenge:
      "The existing case-study description frames the challenge as making threat monitoring easier to understand for technical and non-technical users, while reducing confusion from complex security interfaces.",
    solution:
      "The existing case-study description presents a dashboard system with guided navigation, simplified security language, and action-focused UI patterns.",
    externalUrl:
      "https://www.behance.net/gallery/245192395/ZENON-Cybersecurity-Monitoring-App-UIUX-Case-Study",
    externalLabel: "View the original Zenon case study",
  },
  {
    slug: "life-below-water",
    number: "05",
    title: "Life Below Water",
    type: "Animation Project",
    discipline: "MOTION & CINEMATIC",
    image: image("life-below-water.webp"),
    imageAlt: "A deep-blue underwater environment from Life Below Water",
    summary:
      "An animation walkthrough project exploring life beneath the ocean while highlighting the growing impact of underwater trash through environmental storytelling.",
    role: "Animator",
    year: "2025",
    tools: ["Blender", "Unreal Engine", "DaVinci Resolve", "Audacity"],
    challenge:
      "Create a cinematic underwater walkthrough that feels visually immersive while communicating the environmental issue of ocean trash through visual storytelling.",
    solution:
      "The existing project description describes a guided visual narrative using atmospheric lighting, composition-led camera movement, and layered sound design to contrast marine beauty with pollution impact.",
    video: image("life-below-water.mp4"),
  },
  {
    slug: "requiem-for-the-endgame",
    number: "06",
    title: "Requiem for the Endgame",
    type: "Cinematic Project",
    discipline: "MOTION & CINEMATIC",
    image: image("requiem-endgame.webp"),
    imageAlt:
      "Requiem for the Endgame project artwork with yellow title over a cinematic scene",
    summary:
      "A cinematic project exploring mood, narrative pacing, and emotionally driven visual storytelling.",
    role: "Cinematic Designer",
    year: "2025",
    tools: ["Unreal Engine", "DaVinci Resolve", "Blender"],
    challenge:
      "Craft an emotionally driven cinematic that balances narrative pacing, visual clarity, and atmosphere.",
    solution:
      "The existing project description highlights scene composition, lighting rhythm, and edit timing as elements of its visual mood arc.",
  },
];

export const filters = [
  "ALL",
  "GAME DESIGN",
  "UI/UX",
  "MOTION & CINEMATIC",
] as const;
export type ProjectFilter = (typeof filters)[number];

export const disciplines = [
  {
    id: "game",
    label: "Game design",
    index: "01",
    description:
      "Designing rules, worlds, and player-facing systems that reward curiosity.",
    skills: [
      "Game mechanics",
      "Level design",
      "Narrative design",
      "Systems thinking",
      "Gameplay prototyping",
      "Player experience",
      "Game balancing",
      "Core loops",
      "UX for games",
      "Game Design Documents",
    ],
    tools: ["Unreal Engine", "Unity", "Blender"],
    projectSlugs: ["sanamahis-blade"],
  },
  {
    id: "ux",
    label: "UI/UX design",
    index: "02",
    description:
      "Making complex flows feel considered, legible, and human-centered.",
    skills: [
      "Wireframing",
      "Prototyping",
      "User flows",
      "Interaction design",
      "Usability testing",
      "User research",
      "Information architecture",
      "Responsive and accessible design",
      "Design systems",
      "Microinteractions",
    ],
    tools: ["Figma", "Adobe Creative Suite"],
    projectSlugs: ["paypal-redesign", "zenon"],
  },
  {
    id: "brand",
    label: "Brand & visual communication",
    index: "03",
    description:
      "Building a visual language that gives a story coherence and a point of view.",
    skills: [
      "Logo design",
      "Visual identity systems",
      "Brand guidelines",
      "Typography and color theory",
      "Brand strategy",
      "Brand positioning",
      "Brand storytelling",
      "Creative direction",
    ],
    tools: ["Figma", "Adobe Creative Suite", "Krita"],
    projectSlugs: [],
  },
  {
    id: "tools",
    label: "Tools & making",
    index: "04",
    description:
      "A working set of tools for shaping, testing, and communicating ideas.",
    skills: [
      "Figma",
      "Blender",
      "Unreal Engine",
      "Unity",
      "Krita",
      "Adobe Creative Suite",
      "DaVinci Resolve",
    ],
    tools: [
      "Figma",
      "Blender",
      "Unreal Engine",
      "Unity",
      "Krita",
      "Adobe Creative Suite",
      "DaVinci Resolve",
    ],
    projectSlugs: projects.map(project => project.slug),
  },
];

export const socialLinks = [
  { label: "Email", href: `mailto:${owner.email}` },
  { label: "Behance", href: owner.behance },
  { label: "LinkedIn", href: owner.linkedin },
];
