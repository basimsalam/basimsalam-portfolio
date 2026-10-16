import recruitment_ai from "../assets/recruitment.jpeg";
import disease from "../assets/disease.jpg";
import netflix from "../assets/netflix.jpg";
import question_paper from "../assets/question_paper.jpeg";
import baitalcanvas from "../assets/baitalcanvas.webp";
import equipa from "../assets/equipa.jpg";
import fancycart from "../assets/fancycart.webp";
import alfalak from "../assets/alfalak.webp";
import gulfcloud from "../assets/gulfcloud.webp";

export const categories = [
  {
    slug: "websites",
    title: "Portfolio & Business Websites",
    description: "Corporate and portfolio websites built for real businesses.",
    icon: "globe",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Stores",
    description: "Online stores with catalogues, carts and checkout.",
    icon: "cart",
  },
  {
    slug: "software",
    title: "Software & AI",
    description: "Web apps, AI tools and software I have developed.",
    icon: "code",
  },
];

// `image` is optional. Without one, the card shows a gradient with the project's initials.
// `link` is optional too: the "Visit project" button only shows when it is set.
export const projects = [
  {
    slug: "baitalcanvas",
    category: "ecommerce",
    title: "Bait Al Canvas",
    subtitle: "Luxury canvas wall art store",
    description:
      "A bilingual e-commerce store in Riyadh selling luxury canvas wall art and custom prints.",
    details: [
      "Catalogue covering Islamic calligraphy, home and office décor, nature landscapes, abstract and portrait pieces.",
      "Custom canvas creation from a customer's own photos.",
      "Bilingual Arabic and English interface with right-to-left layout.",
      "Multi-currency pricing (SAR / USD), cart and checkout.",
    ],
    tech: ["WordPress", "WooCommerce", "TranslatePress"],
    link: "https://baitalcanvas.com",
    image: baitalcanvas,
  },
  {
    slug: "fancycart",
    category: "ecommerce",
    title: "Fancy Cart",
    subtitle: "Lifestyle & gifting online store",
    description:
      "An online store in India selling everyday lifestyle products, from jewelry and bags to home decor and gifts.",
    details: [
      "Shop by category: Jewelry & Accessories, Home Decor, Bags & Fashion, Beauty & Self Care, Gifts, Stationery & Lifestyle.",
      "Product listings with sale pricing and stock status, and add-to-cart.",
      "Homepage with hero banners, weekly top picks and featured products.",
      "Prices in INR (₹).",
    ],
    tech: ["WordPress", "WooCommerce", "Elementor"],
    link: "https://fancycart.co.in/",
    image: fancycart,
  },
  {
    slug: "alfalak",
    category: "websites",
    title: "Al Falak Engineering Consultancy",
    subtitle: "Engineering & architecture consultancy website",
    description:
      "A bilingual corporate website for a Riyadh engineering and architectural consulting firm.",
    details: [
      "Presents services such as building permits, permit renewals, completion certificates and engineering supervision.",
      "Arabic-first site with English available.",
      "Project portfolio, team section and newsletter signup.",
      "WhatsApp contact, Google Maps location and social media links.",
    ],
    tech: ["WordPress", "Bilingual (AR/EN)"],
    link: "https://alfalakalhandsi.com/",
    image: alfalak,
  },
  {
    slug: "gulfcloud",
    category: "websites",
    title: "Gulf Cloud IT",
    subtitle: "Zoho partner & AI solutions company website",
    description:
      "The website of a Riyadh-based Zoho partner offering implementation, AI automation and digital transformation.",
    details: [
      "Showcases Zoho licensing and implementation (CRM, Books, Inventory, Projects, People).",
      "Highlights custom AI software, business process automation and technical support.",
      "Covers industries such as retail, manufacturing, trading, construction, healthcare and logistics.",
    ],
    tech: ["Web", "Corporate site"],
    link: "https://www.gulfcloudit.com/",
    image: gulfcloud,
  },
  {
    slug: "equipa",
    category: "software",
    title: "Equipa",
    subtitle: "Clinical engineering & facility management platform for SMC Healthcare",
    description:
      "A CMMS-style platform for managing clinical and facility assets, corrective and preventive maintenance, with a role-based dashboard.",
    details: [
      "Asset management, corrective maintenance (work orders) and preventive maintenance scheduling.",
      "Role-based dashboard and permissions, with department-level data scoping and an append-only audit log.",
      "Spare parts and inventory, vendor management, shift and on-call roster, and a knowledge base.",
      "AI support chatbot and ticketing, plus reporting, compliance and PDF exports.",
      "Security: JWT auth in httpOnly cookies, optional TOTP multi-factor authentication, rate limiting.",
      "Production-ready operations: Docker deployment, encrypted daily backups with restore drills, CI with automated tests.",
      "Tested at scale: 50,000 assets and 60,000 work orders with 120 concurrent users.",
    ],
    tech: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "React",
      "Vite",
      "Tailwind CSS",
      "Redis",
      "Docker",
    ],
    link: "https://equipa-api.onrender.com/login",
    image: equipa,
  },
  {
    slug: "recruitment-ai-agent",
    category: "software",
    title: "Recruitment AI Agent",
    subtitle: "AI-powered hiring platform",
    description: "Agentic AI for automating the recruitment process.",
    details: ["Uses an AI agent to automate steps of the hiring workflow."],
    tech: ["AI", "Agents"],
    image: recruitment_ai,
  },
  {
    slug: "disease-predictor",
    category: "software",
    title: "Disease Predictor",
    subtitle: "Health AI tool",
    description:
      "Multi-modal disease predictor using ML and DL. Predicts diseases from text and images with high accuracy.",
    details: [
      "Combines text and image inputs for prediction.",
      "Built with machine learning and deep learning models.",
    ],
    tech: ["Python", "ML", "Deep Learning"],
    image: disease,
  },
  {
    slug: "netflix-clone",
    category: "software",
    title: "Netflix Clone",
    subtitle: "Frontend development",
    description:
      "A responsive Netflix UI clone built using React. Includes authentication, movie previews, and category listings.",
    details: [
      "Responsive layout across devices.",
      "Authentication, movie previews and category listings.",
    ],
    tech: ["React"],
    image: netflix,
  },
  {
    slug: "question-paper-generator",
    category: "software",
    title: "AI Question Paper Generator",
    subtitle: "AI-powered educational tool",
    description:
      "An AI-powered tool that generates question papers based on input parameters.",
    details: ["Generates question papers from the parameters you provide."],
    tech: ["AI"],
    image: question_paper,
  },
];
