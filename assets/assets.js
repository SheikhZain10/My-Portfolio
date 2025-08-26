import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import right_arrow_white from "./right-arrow-white.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  right_arrow_white,
  mail_icon,
  mail_icon_dark,
  download_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const cardData = [
  // 1) Reports/SSRS-first items
  {
    title: "Partner Ledger Reports (PMS)",
    description:
      "SSRS-driven partner and customer ledgers, statements, and reconciliations with drill-down filters and export options.",
    tech: [".NET", "SQL Server", "SSRS", "ADO.NET"],
    link: "#",
    image: "/Work/pms-customer-ledger.png",
    badges: ["SSRS", "Reports"],
    gallery: [
      "/Work/pms-customer-ledger.png",
      "/Work/pms-customer-ledger-bottom.png"
    ]
  },
  {
    title: "PMS Vouchers & Invoices",
    description:
      "Payment/Invoice vouchers with attachments and mail triggers; approval flows and audit trails.",
    tech: [".NET", "SQL Server", "SSRS", "Web API"],
    link: "#",
    image: "/Work/pms-invoice-voucher.png",
    badges: ["Finance", "Mail"],
    gallery: [
      "/Work/pms-invoice-voucher.png",
      "/Work/pms-payment-voucher.png",
      "/Work/pms-payment-attachment.png",
      "/Work/pms-payment-mail.png"
    ]
  },
  {
    title: "The Myriad Website",
    description:
      "Fully dynamic frontend powered by PMS APIs: real-time listings, bookings, invoices, contracts, responsive dashboards, admin and public portals. Delivered SSRS reports; mobile app available for tenants/ops.",
    tech: ["ASP.NET MVC", "Razor", "JavaScript", "Bootstrap"],
    link: "https://themyriad.com/",
    image: "/Work/website-landing-page.png",
    badges: ["API", "Mobile"],
    gallery: [
      "/Work/website-landing-page.png",
      "/Work/website-dubai-landing-page.png",
      "/Work/website-booking-page.png",
      "/Work/webiste-booking-form.png",
      "/Work/website-virtual-tour.png"
    ]
  },
  {
    title: "PayProNext — US Payroll Platform",
    description:
      "Worked at ABN Technologies on US payroll system: SSRS reports, tax-compliant calculations, and frontend website implementation.",
    tech: [".NET", "SSRS", "SQL Server", "ASP.NET MVC", "JavaScript"],
    link: "https://paypronext.com/",
    image: "/Work/paypronext-website.png",
    badges: ["Payroll", "SSRS"],
    gallery: [
      "/Work/paypronext-website.png",
      "/Work/paypronext-login.png"
    ]
  },
  // 2) Other items
  {
    title: "The Myriad (ABN)",
    description:
      "Developed scalable, responsive web apps with .NET and SQL Server. Built RESTful APIs, improved indexing, and led UI performance improvements.",
    tech: [".NET", "Web API", "SQL Server", "Entity Framework"],
    link: "#",
    image: "/Work/website-dubai-landing-page.png",
    badges: [".NET", "API"]
  },
  {
    title: "TaxProNext — Tax & Payroll Website",
    description:
      "Implemented the marketing website and pages for tax, payroll, and consulting services with responsive UI.",
    tech: ["React/Next", "CSS", "Responsive UI"],
    link: "https://taxpronext.com/",
    image: "/Work/taxpronext-website.png",
    badges: ["Marketing", "Responsive"]
  },
  {
    title: "Aaladin — Cleaning Services Platform",
    description:
      "Latest web platform connecting partners and customers for cleaning services; rich APIs and admin portal. Mobile app companion available.",
    tech: [".NET Web API", "React/Next", "SQL Server", "Mobile App"],
    link: "#",
    image: "/Work/aaladin-dashboard.png",
    badges: ["Marketplace", "Mobile"],
    gallery: [
      "/Work/aaladin-dashboard.png",
      "/Work/aaladin-login.png"
    ]
  },
  {
    title: "Cleanup.ae — Cleaning Services Website",
    description:
      "Marketing and services website for cleaning company with service pages and contact flows.",
    tech: ["WordPress/Custom", "Responsive UI"],
    link: "https://cleanup.ae/",
    image: "/Work/cleanup-ae-website.png",
    badges: ["WordPress", "Responsive"]
  },
  {
    title: "Strategic Housing Group — Corporate Website",
    description:
      "Corporate site for co-living brands including The Myriad; content and brand pages.",
    tech: ["Next.js/React", "CSS"],
    link: "https://strategichousinggroup.com/",
    image: "/Work/strategichousinggroup-website.png",
    badges: ["Corporate", "Brand"]
  },
  {
    title: "URBN Living — Co-living Brand Website",
    description:
      "Brand website for URBN Living with lifestyle pages and lead capture.",
    tech: ["Next.js/React", "CSS"],
    link: "https://urbn.living/",
    image: "/Work/urbanliving-website.png",
    badges: ["Brand", "Responsive"]
  },
];

export const serviceData = [
  {
    icon1: "https://skillicons.dev/icons?i=dotnet",
    icon2: "https://skillicons.dev/icons?i=cs",
    icon3: "https://skillicons.dev/icons?i=bootstrap",
    title: ".NET Web Apps & APIs",
    description:
      "End-to-end development with .NET Core, C#, ASP.NET MVC/Razor & Web API. Clean architecture, authentication, role-based access, and secure integrations.",
    link: "",
  },
  {
    icon1: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    icon2: "https://skillicons.dev/icons?i=mysql",
    icon3: "https://skillicons.dev/icons?i=postman",
    title: "Databases & Reporting",
    description:
      "Schema design, performance tuning, complex queries, Stored Procedures, SSRS, and optimized reporting for financial and operational modules.",
    link: "",
  },
  {
    icon1: "https://skillicons.dev/icons?i=laravel",
    icon2: "https://skillicons.dev/icons?i=php",
    icon3: "https://skillicons.dev/icons?i=git",
    title: "Integrations & SaaS",
    description:
      "3rd‑party integrations (QuickBooks, Zoho Books, payment gateways), REST APIs, Laravel/Blade, deployments, CI/CD, and performance optimization.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bachelors in Computer Science — Lahore Leads University",
    cgpa: "Lahore | 2019",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Experience",
    description: "4.5+ years across Nanobyte, ABN Technologies, 2B Vision, Creative Souls.",
    cgpa: "Full Stack .NET Developer",
  },
];

export const toolsData = [
  "https://skillicons.dev/icons?i=dotnet",
  "https://skillicons.dev/icons?i=cs",
  "https://skillicons.dev/icons?i=azure",
  "https://skillicons.dev/icons?i=git",
  "https://skillicons.dev/icons?i=github",
  "https://skillicons.dev/icons?i=visualstudio",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  "https://skillicons.dev/icons?i=mysql",
  "https://skillicons.dev/icons?i=laravel",
  "https://skillicons.dev/icons?i=php",
  "https://skillicons.dev/icons?i=bootstrap",
  "https://skillicons.dev/icons?i=html",
  "https://skillicons.dev/icons?i=css",
  "https://skillicons.dev/icons?i=javascript",
  "https://skillicons.dev/icons?i=jquery",
  "https://skillicons.dev/icons?i=postman",
  "https://skillicons.dev/icons?i=wordpress",
  "https://skillicons.dev/icons?i=figma",
];
