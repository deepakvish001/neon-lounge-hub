
// Define track and module interface types
export interface Module {
  id: string;
  title: string;
  description: string;
  content?: string;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

// Mock data for tracks
export const tracks: Track[] = [
  {
    id: "frontend-development",
    title: "Frontend Development",
    description: "Learn modern frontend development techniques and technologies.",
    modules: [
      {
        id: "modern-html-css",
        title: "Modern HTML & CSS",
        description: "Learn the latest HTML5 and CSS3 features to build modern, responsive websites.",
      },
      {
        id: "javascript-fundamentals",
        title: "JavaScript Fundamentals",
        description: "Master the core concepts of JavaScript including variables, functions, and DOM manipulation.",
      },
      {
        id: "react-basics",
        title: "React Basics",
        description: "Get started with React, learning components, props, state, and hooks.",
      },
      {
        id: "advanced-react",
        title: "Advanced React",
        description: "Dive deeper into React with context, performance optimization, and advanced hooks.",
      }
    ]
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description: "Master server-side programming and API development.",
    modules: [
      {
        id: "nodejs-basics",
        title: "Node.js Basics",
        description: "Get started with Node.js for server-side JavaScript development.",
      },
      {
        id: "express-framework",
        title: "Express Framework",
        description: "Build robust APIs and web applications with Express.js.",
      },
      {
        id: "database-integration",
        title: "Database Integration",
        description: "Learn to integrate SQL and NoSQL databases with your backend applications.",
      }
    ]
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    description: "Combine frontend and backend skills to build complete applications.",
    modules: [
      {
        id: "mern-stack",
        title: "MERN Stack",
        description: "Build full-stack applications with MongoDB, Express, React, and Node.js.",
      },
      {
        id: "authentication",
        title: "Authentication & Authorization",
        description: "Implement secure user authentication and role-based authorization.",
      },
      {
        id: "deployment",
        title: "Deployment & DevOps",
        description: "Learn to deploy applications and implement CI/CD pipelines.",
      }
    ]
  }
];
