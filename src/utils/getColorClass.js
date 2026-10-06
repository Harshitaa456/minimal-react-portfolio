const getColorClass = (tech) => {
  switch (tech) {
    case "#Java":
      return "java";

    case "#JavaScript":
      return "javascript";

    case "#TypeScript":
      return "typescript";

    case "#HTML":
    case "#HTML5":
      return "html";

    case "#CSS":
    case "#CSS3":
      return "css";

    case "#Git":
      return "git";

    case "#GitHub":
      return "github";

    case "#Node.js":
      return "nodejs";

    case "#Express.js":
      return "expressjs";

    case "#MongoDB":
      return "mongodb";

    case "#PostgreSQL":
      return "postgresql";

    case "#SQL":
      return "sql";

    case "#Next.js":
      return "nextjs";

    case "#Firebase":
    case "#Firebase Authentication":
      return "firebase";

    case "#Clerk":
    case "#Clerk Authentication":
      return "clerk";

    case "#Jest":
      return "jest";

    case "#CI/CD":
      return "cicd";

    case "#AdobeXD":
      return "adobe-xd";

    case "#React.js":
      return "reactjs";

    case "#Tailwind CSS":
      return "tailwind";

    case "#Prisma":
      return "prisma";

    case "#JWT":
      return "jwt";

    case "#Strapi":
      return "strapi";

    case "#MUI":
      return "mui";

    case "#Vite":
      return "vite";

    case "#Postman":
      return "postman";

    case "#Vercel":
      return "vercel";

    case "#VS Code":
      return "vscode";

    case "#REST APIs":
      return "restapi";

    case "#Responsive Design":
      return "responsive";

    case "#CRUD Operations":
      return "crud";

    case "#Problem Solving":
      return "problem-solving";

    default:
      return "";
  }
};

export default getColorClass;