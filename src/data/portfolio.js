const about = {
  title: "Hi 👋, I am Harshita Gaur",

  description:
    "I’m a Computer Science graduate who enjoys turning ideas into practical web applications. I work mainly with React.js, JavaScript, Node.js, Express.js, and PostgreSQL, and have built projects involving authentication, REST APIs, database management, and responsive interfaces. I’m currently looking for an opportunity where I can contribute as a Web Developer while continuing to grow my development skills.",

  github: "https://github.com/Harshitaa456",

  linkedin: "https://www.linkedin.com/in/harshita-gaur-0a5224362/",

  cv: "https://drive.google.com/file/d/1Aj-7LTAaIssUAD5Z2DPb6AaQNfM9GZgH/view?usp=drivesdk",
};

const projects = {
  title: "Projects",

  personalProjects: [
    {
      title: "Aventra – Customer Management System",

      description:
        "A full-stack CRM application designed to simplify customer management. Users can add, update, view, search, and delete customer records while tracking their current status. The application uses React.js and Tailwind CSS for the interface, with Node.js and Express.js powering the REST APIs. PostgreSQL with Prisma handles data management, while Clerk provides user authentication.",

      technologies: [
        "#React.js",
        "#Tailwind CSS",
        "#Node.js",
        "#Express.js",
        "#PostgreSQL",
        "#Prisma",
        "#Clerk",
      ],

      github:
        "https://github.com/Harshitaa456/customer-management-system",

      demo: "https://customer-management-system-sigma-liard.vercel.app/",
    },

    {
      title: "Food Ordering Website",

      description:
        "A responsive food ordering application built with React.js and Tailwind CSS. It provides an easy-to-navigate interface where users can explore available dishes, view individual food details, and place orders through the application.",

      technologies: [
        "#React.js",
        "#Tailwind CSS",
        "#JavaScript",
      ],

      github:
        "https://github.com/Harshitaa456/foodie-app",

      demo: "https://foodie-app12.netlify.app/",
    },

    {
      title: "Bloomin – A Small Business Digitiser",

      description:
        "A full-stack platform being developed to help small businesses establish an online presence and manage their digital storefronts. Customers can browse products, add items to a cart, and place and track orders, while sellers can manage products through a dedicated dashboard and receive order alerts. The backend is built with Node.js, Express.js, and TypeScript, with PostgreSQL and Firebase Authentication handling data and secure access.",

      technologies: [
        "#React.js",
        "#Node.js",
        "#Express.js",
        "#TypeScript",
        "#PostgreSQL",
        "#Firebase Authentication",
      ],

      github:
        "https://github.com/mystic0l/bloomin-fe",

      demo: "https://bloomin-virid.vercel.app/",
    },
  ],
};

const experience = {
  title: "Experience",

  experiences: [
    {
      title: "Frontend Web Development Intern",
      company: "IBM SkillsBuild",
      duration: "Aug 2025 – Oct 2025",

      description:
        "Worked on frontend development fundamentals through practical exercises involving HTML, CSS, JavaScript, responsive layouts, interactive elements, and user-focused interface design.",
    },

    {
      title: "Web Development Intern",
      company: "IBM PBEL Virtual Internship",
      duration: "Jun 2025 – Jul 2025",

      description:
        "Worked on responsive web pages and basic frontend and backend tasks while applying UI design concepts, troubleshooting implementation issues, and completing assigned development work.",
    },
  ],
};

const skills = {
  title: "Skills",

  mySkills: [
    {
      title: "Languages",

      skills: [
        "#Java",
        "#JavaScript",
        "#TypeScript",
        "#SQL",
        "#HTML5",
        "#CSS3",
      ],
    },

    {
      title: "Frameworks & Libraries",

      skills: [
        "#React.js",
        "#Node.js",
        "#Express.js",
        "#Tailwind CSS",
        "#Prisma",
      ],
    },

    {
      title: "Databases & Authentication",

      skills: [
        "#PostgreSQL",
        "#Clerk Authentication",
      ],
    },

    {
      title: "Tools & Concepts",

      skills: [
        "#Git",
        "#GitHub",
        "#Vercel",
        "#VS Code",
        "#Postman",
        "#REST APIs",
        "#Responsive Design",
        "#CRUD Operations",
        "#Problem Solving",
      ],
    },
  ],
};

export { about, projects, experience, skills };