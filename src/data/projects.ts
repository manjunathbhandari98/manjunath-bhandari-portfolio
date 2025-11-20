import {
  BriefcaseBusiness,
  MessageSquare,
  ShoppingBag,
  ShoppingCart,
  ClipboardList,
  Soup
} from "lucide-react";

export const projects = [
  {
    name: "28Miles - Streetwear E-commerce Website",
    slug: "28miles-streetwear-ecommerce-website",
    description:
      "A full-stack fashion e-commerce platform offering a premium streetwear shopping experience, complete with cart, wishlist, checkout, and order management.",
    keyFeatures: [
      "Real-time product search and filters",
      "Guest and user cart functionality",
      "Wishlist and order tracking",
      "Secure payments via Razorpay",
      "JWT-based user authentication",
      "Mobile-first responsive design",
    ],
    techStacks: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Spring Boot",
      "PostgreSQL",
      "Vercel",
      "Render",
      "Razorpay",
    ],
    icon: ShoppingBag,
screenshots: {
  desktop: [
    '/screenshots/28-miles/home.png',
    '/screenshots/28-miles/category.png',
    '/screenshots/28-miles/products.png',
    '/screenshots/28-miles/product-info.png',
    '/screenshots/28-miles/cart.png',
  ],
  mobile: [
    '/screenshots/28-miles/ss1.jpg',
    '/screenshots/28-miles/ss2.jpg',
    '/screenshots/28-miles/ss3.jpg',
    '/screenshots/28-miles/ss4.jpg',
    '/screenshots/28-miles/ss5.jpg',
    '/screenshots/28-miles/ss6.jpg',
  ],
},

    gitLink: "https://github.com/manjunathbhandari98/28-miles",
    liveLink: "https://28-miles.vercel.app/",
    bgColor: "from-black to-neutral-800",
  },
  {
    name: "DineBoard – Digital Menu System",
    slug: "dineboard-digital-menu-system",
    description:
      "Restaurant menu app with QR code browsing for seamless customer experience.",
    keyFeatures: [
      "QR code menu browsing",
      "Interactive digital menu",
      "Admin and User Websites",
      "Mobile-responsive design",
    ],
    techStacks: [
      "React",
      "Spring Boot",
      "TypeScript",
      "MySQL",
      "Tailwind css",
      "Vercel",
      "Render",
    ],
    icon: Soup,
    screenshots: {
      desktop:[
          '/screenshots/Dineboard/home.png',
          '/screenshots/Dineboard/add-menu-items.png',
          '/screenshots/Dineboard/menu.png',
          '/screenshots/Dineboard/menu-item.png',
          '/screenshots/Dineboard/pricings.png',
          '/screenshots/Dineboard/qr-code.png',
          '/screenshots/Dineboard/hotel-profile.png',
      ],
      mobile:[
          '/screenshots/Dineboard/mbl-1.jpg',
          '/screenshots/Dineboard/mbl-2.jpg',
          '/screenshots/Dineboard/mbl-3.jpg',
          '/screenshots/Dineboard/mbl-4.jpg',
      ]
    },
    gitLink: "https://github.com/manjunathbhandari98/DineBoard",
    liveLink: "https://dine-board.vercel.app/",
    bgColor: "from-indigo-600 to-purple-900",
  },
  {
    name: "Invizo - Retail shop Billing Website",
    slug: "invizo-retail-shop-billing-website",
    description:
      "A modern billing and inventory system for retail shops with real-time calculations and invoice generation.",
    keyFeatures: [
      "Real-time billing calculations",
      "Inventory management",
      "Invoice generation and printing",
      "Integrated payment gateway (Razorpay)",
      "Test Login: email:test@admin.com - password:admin",
    ],
    techStacks: [
      "React",
      "Spring Boot",
      "JavaScript",
      "MySQL",
      "Bootstrap",
      "Vercel",
      "Render",
    ],
    icon: ShoppingCart,
      screenshots: {
      desktop:[],
      mobile:[]
    },
    gitLink: "https://github.com/manjunathbhandari98/Invizo",
    liveLink: "https://invizo.vercel.app/",
    bgColor: "from-blue-500 to-gray-900",
  },
  {
    name: "ExpressGPT – AI Chat Platform",
    slug: "expressgpt-ai-chat-platform",
    description:
      "A conversational AI web application built using a public AI API, designed to deliver ChatGPT-like responses with a clean and modern UI.",
    keyFeatures: [
      "ChatGPT-like conversational interface",
      "Supports markdown rendering",
      "Copy to clipboard functionality",
      "Responsive and minimal UI",
    ],
    techStacks: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "Vercel"],
    icon: MessageSquare,
      screenshots: {
      desktop:[],
      mobile:[]
    },
    gitLink: "https://github.com/manjunathbhandari98/expressGPT",
    liveLink: "https://express-gpt.vercel.app/",
    bgColor: "from-cyan-500 to-slate-900",
  },
  {
  name: "Matchbox – Task & Project Management Platform",
  slug: "matchbox-task-project-management-platform",
  description:
    "A powerful team collaboration and productivity platform that helps users manage projects, track tasks, and monitor performance with real-time updates and analytics.",
  keyFeatures: [
    "Team and user management",
    "Task creation, assignment, and tracking",
    "Progress analytics and efficiency reports",
    "Role-based authentication and secure access",
    "Modern dashboard UI"
  ],
  techStacks: [
    "React",
    "TypeScript",
    "Spring Boot",
    "PostgreSQL",
    "Tailwind CSS",
    "Render",
    "Vercel",
  ],
  icon: ClipboardList,
  screenshots: {
    desktop: [],
    mobile: [],
  },
  gitLink: "https://github.com/manjunathbhandari98/matchbox-frontend", 
  liveLink: "https://matchbox-zeta.vercel.app/", 
  bgColor: "from-blue-500 to-indigo-800",
},
  {
    name: "Jobspark – Job Search Platform",
    slug: "jobspark-job-search-platform",
    description:
      "Job portal with comprehensive recruiter and applicant dashboards for efficient hiring.",
    keyFeatures: [
      "Job search and filtering",
      "Application tracking",
      "Recruiter dashboard",
      "User authentication",
    ],
    techStacks: [
      "React",
      "Spring Boot",
      "JavaScript",
      "MongoDB",
      "TailwindCSS",
    ],
    icon: BriefcaseBusiness,
     screenshots: {
      desktop:[],
      mobile:[]
    },
    gitLink: "https://github.com/manjunathbhandari98/JobSpark",
    liveLink: "https://jobsparkx.netlify.app/",
    bgColor: "from-pink-500 to-violet-800",
  },
];
