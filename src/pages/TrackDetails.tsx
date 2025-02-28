
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Book, BookOpen, Clock, Star, ChevronRight, Video, Users, Binary, Brain, Database, Globe, Server, Shield, Cpu, Layout, Terminal, Flame, CheckCircle2, PlayCircle, Trophy, MessageSquare, TestTube, Award, Code2, FileText, HelpCircle, GraduationCap, Briefcase, Lightbulb, Zap, Search, FileCode, Share2, PenTool, Repeat, Puzzle, Network, BarChart, Lock, FileSearch, LineChart, Github, Play, Calculator, Link, Layers, Triangle, GitBranch, Filter, List, Workflow, GitCommit, Rocket, Box, CpuIcon, Settings, ShieldCheck, Cloud, Gift, AlertTriangle, TrendingUp, SplitSquareVertical, Maximize, Boxes, Shuffle, RefreshCw, Radio, Activity, AlertOctagon, ClipboardCheck, ClipboardList, Eye, Bug, UserCheck, DollarSign, UploadCloud, Tag, GitMerge, Copy, CheckSquare, Save, Package, Wrench, HardDrive, GitPullRequest, RotateCw, Smartphone, Upload, Bell, Camera, Map, Square, Plug, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const TrackDetails = () => {
  const { trackId } = useParams();
  const [selectedTab, setSelectedTab] = useState("modules");

  // Find the current track based on trackId
  const tracks = {
    "algorithms-mastery": {
      title: "Algorithms Mastery",
      description: "Master fundamental algorithms and problem-solving techniques",
      icon: Brain,
      progress: 45,
      duration: "24 hours",
      modules: 5,
    },
    "data-structures-deep-dive": {
      title: "Data Structures Deep Dive",
      description: "Comprehensive study of essential data structures",
      icon: BookOpen,
      progress: 45,
      duration: "18 hours",
      modules: 8,
    },
    "competitive-programming": {
      title: "Competitive Programming",
      description: "Advanced techniques for coding competitions",
      icon: Trophy,
      progress: 30,
      duration: "36 hours",
      modules: 15,
    },
    "system-design": {
      title: "System Design",
      description: "Learn to design scalable distributed systems",
      icon: Server,
      progress: 20,
      duration: "30 hours",
      modules: 15,
    },
    "frontend-development": {
      title: "Frontend Development",
      description: "Modern web development with React and TypeScript",
      icon: Layout,
      progress: 80,
      duration: "40 hours",
      modules: 14,
    },
    "backend-engineering": {
      title: "Backend Engineering",
      description: "Server-side development and API design",
      icon: Server,
      progress: 55,
      duration: "36 hours",
      modules: 12,
    },
    "database-management": {
      title: "Database Management",
      description: "Database design, optimization, and administration",
      icon: Database,
      progress: 40,
      duration: "24 hours",
      modules: 8,
    },
    "cloud-architecture": {
      title: "Cloud Architecture",
      description: "Cloud-native application development and deployment",
      icon: Server,
      progress: 25,
      duration: "30 hours",
      modules: 10,
    },
    "cybersecurity": {
      title: "Cybersecurity",
      description: "Security fundamentals and best practices",
      icon: Shield,
      progress: 35,
      duration: "36 hours",
      modules: 12,
    },
    "devops-practices": {
      title: "DevOps Practices",
      description: "CI/CD, containerization, and deployment automation",
      icon: Binary,
      progress: 60,
      duration: "24 hours",
      modules: 10,
    },
    "performance-optimization": {
      title: "Performance Optimization",
      description: "System performance analysis and optimization",
      icon: Flame,
      progress: 45,
      duration: "18 hours",
      modules: 8,
    },
    "machine-learning-basics": {
      title: "Machine Learning Basics",
      description: "Fundamentals of AI and machine learning",
      icon: Brain,
      progress: 15,
      duration: "42 hours",
      modules: 15,
    },
    "operating-systems": {
      title: "Operating Systems",
      description: "Deep dive into OS concepts and implementation",
      icon: Cpu,
      progress: 70,
      duration: "30 hours",
      modules: 12,
    },
    "network-programming": {
      title: "Network Programming",
      description: "Computer networks and distributed systems",
      icon: Globe,
      progress: 50,
      duration: "24 hours",
      modules: 10,
    },
    "software-architecture": {
      title: "Software Architecture",
      description: "Design patterns and architectural principles",
      icon: Layout,
      progress: 40,
      duration: "30 hours",
      modules: 12,
    },
    "mobile-development": {
      title: "Mobile Development",
      description: "Cross-platform mobile app development",
      icon: Layout,
      progress: 30,
      duration: "36 hours",
      modules: 14,
    },
    "api-development": {
      title: "API Development",
      description: "RESTful and GraphQL API design patterns",
      icon: Globe,
      progress: 55,
      duration: "18 hours",
      modules: 8,
    },
    "testing-qa": {
      title: "Testing & QA",
      description: "Comprehensive software testing methodologies",
      icon: Code2,
      progress: 65,
      duration: "24 hours",
      modules: 10,
    },
    "version-control": {
      title: "Version Control",
      description: "Advanced Git and collaboration workflows",
      icon: Binary,
      progress: 75,
      duration: "12 hours",
      modules: 6,
    },
    "system-administration": {
      title: "System Administration",
      description: "Linux system administration and automation",
      icon: Terminal,
      progress: 45,
      duration: "30 hours",
      modules: 12,
    },
    "data-engineering": {
      title: "Data Engineering",
      description: "Big data processing and ETL pipelines",
      icon: Database,
      progress: 35,
      duration: "36 hours",
      modules: 14,
    },
    "blockchain-development": {
      title: "Blockchain Development",
      description: "Smart contracts and decentralized applications",
      icon: Binary,
      progress: 20,
      duration: "42 hours",
      modules: 16,
    }
  };

  const currentTrack = tracks[trackId as keyof typeof tracks] || tracks["algorithms-mastery"];

  // Create dynamic track modules based on the current track
  const trackModulesData = {
    "algorithms-mastery": [
      {
        title: "Introduction to Algorithms",
        duration: "2 hours",
        lessons: 5,
        completed: true,
        description: "Basic concepts and computational complexity",
        icon: Brain,
      },
      {
        title: "Sorting Algorithms",
        duration: "4 hours",
        lessons: 8,
        completed: true,
        description: "Merge sort, quick sort, and other sorting techniques",
        icon: Binary,
      },
      {
        title: "Search Algorithms",
        duration: "4 hours",
        lessons: 6,
        completed: false,
        description: "Binary search, depth-first search, breadth-first search",
        icon: Terminal,
      },
      {
        title: "Dynamic Programming",
        duration: "8 hours",
        lessons: 12,
        completed: false,
        description: "Optimization problems and memoization techniques",
        icon: Flame,
      },
      {
        title: "Advanced Algorithm Strategies",
        duration: "6 hours",
        lessons: 10,
        completed: false,
        description: "Greedy algorithms, divide and conquer, and backtracking",
        icon: Brain,
      }
    ],
    "system-design": [
      {
        title: "Introduction to System Design",
        duration: "3 hours",
        lessons: 6,
        completed: true,
        description: "Basic concepts and architectural principles",
        icon: Server,
      },
      {
        title: "Scalability Fundamentals",
        duration: "3 hours",
        lessons: 7,
        completed: true,
        description: "Horizontal vs. vertical scaling strategies",
        icon: Maximize,
      },
      {
        title: "Load Balancing",
        duration: "3 hours",
        lessons: 6,
        completed: false,
        description: "Types, algorithms, and implementation strategies",
        icon: Shuffle,
      },
      {
        title: "Caching Strategies",
        duration: "3 hours",
        lessons: 6,
        completed: false,
        description: "Cache levels, eviction policies, and CDNs",
        icon: Database,
      },
      {
        title: "Database Design",
        duration: "4 hours",
        lessons: 8,
        completed: false,
        description: "SQL vs NoSQL, sharding, and replication",
        icon: Database,
      },
      {
        title: "Distributed Systems",
        duration: "4 hours",
        lessons: 8,
        completed: false,
        description: "CAP theorem, consistency models, and fault tolerance",
        icon: Network,
      },
      {
        title: "Microservices Architecture",
        duration: "3 hours",
        lessons: 7,
        completed: false,
        description: "Service boundaries, communication, and deployment",
        icon: Boxes,
      },
      {
        title: "API Design",
        duration: "3 hours",
        lessons: 6,
        completed: false,
        description: "REST, GraphQL, and API gateway patterns",
        icon: Globe,
      },
      {
        title: "Message Queues",
        duration: "3 hours",
        lessons: 5,
        completed: false,
        description: "Asynchronous processing and event-driven architecture",
        icon: MessageSquare,
      },
      {
        title: "Rate Limiting and Throttling",
        duration: "2 hours",
        lessons: 4,
        completed: false,
        description: "Algorithms, implementation, and best practices",
        icon: Shield,
      },
      {
        title: "Data Partitioning",
        duration: "3 hours",
        lessons: 5,
        completed: false,
        description: "Horizontal and vertical partitioning strategies",
        icon: SplitSquareVertical,
      },
      {
        title: "System Monitoring",
        duration: "2 hours",
        lessons: 5,
        completed: false,
        description: "Metrics, logging, and alerting systems",
        icon: BarChart,
      },
      {
        title: "Security Design",
        duration: "3 hours",
        lessons: 6,
        completed: false,
        description: "Authentication, authorization, and encryption",
        icon: Lock,
      },
      {
        title: "Deployment Strategies",
        duration: "2 hours",
        lessons: 5,
        completed: false,
        description: "CI/CD, blue-green, and canary deployments",
        icon: Rocket,
      },
      {
        title: "Case Studies",
        duration: "4 hours",
        lessons: 8,
        completed: false,
        description: "Real-world system design examples and analysis",
        icon: FileSearch,
      }
    ],
    "frontend-development": [
      {
        title: "Modern HTML & CSS",
        duration: "4 hours",
        lessons: 8,
        completed: true,
        description: "Advanced layout techniques and responsive design",
        icon: Layout,
      },
      {
        title: "JavaScript Fundamentals",
        duration: "6 hours",
        lessons: 10,
        completed: true,
        description: "Core concepts, ES6+, and async programming",
        icon: Code2,
      },
      {
        title: "React Fundamentals",
        duration: "8 hours",
        lessons: 12,
        completed: true,
        description: "Components, props, state, and hooks",
        icon: Layout,
      },
      {
        title: "TypeScript for React",
        duration: "6 hours",
        lessons: 10,
        completed: false,
        description: "Type safety in React applications",
        icon: Code2,
      },
      {
        title: "State Management",
        duration: "4 hours",
        lessons: 8,
        completed: false,
        description: "Context API, Redux, and Zustand",
        icon: Binary,
      },
      {
        title: "Performance Optimization",
        duration: "4 hours",
        lessons: 6,
        completed: false,
        description: "Code splitting, memoization, and bundle optimization",
        icon: Flame,
      },
      {
        title: "API Integration",
        duration: "4 hours",
        lessons: 8,
        completed: false,
        description: "REST, GraphQL, and data fetching patterns",
        icon: Globe,
      },
      {
        title: "Modern UI Frameworks",
        duration: "4 hours",
        lessons: 6,
        completed: false,
        description: "Tailwind CSS, Material UI, and component libraries",
        icon: Layout,
      }
    ],
    "backend-engineering": [
      {
        title: "Server Fundamentals",
        duration: "4 hours",
        lessons: 6,
        completed: true,
        description: "HTTP, REST principles, and server architecture",
        icon: Server,
      },
      {
        title: "Node.js Basics",
        duration: "6 hours",
        lessons: 8,
        completed: true,
        description: "Event loop, modules, and core packages",
        icon: Terminal,
      },
      {
        title: "Express Framework",
        duration: "6 hours",
        lessons: 10,
        completed: false,
        description: "Routing, middleware, and API design",
        icon: Globe,
      },
      {
        title: "Database Integration",
        duration: "8 hours",
        lessons: 12,
        completed: false,
        description: "SQL, NoSQL, and ORMs",
        icon: Database,
      },
      {
        title: "Authentication & Authorization",
        duration: "6 hours",
        lessons: 8,
        completed: false,
        description: "JWT, OAuth, and security best practices",
        icon: Shield,
      },
      {
        title: "API Design & Documentation",
        duration: "4 hours",
        lessons: 6,
        completed: false,
        description: "RESTful design, OpenAPI, and Swagger",
        icon: BookOpen,
      }
    ],
    "database-management": [
      {
        title: "Database Design Fundamentals",
        duration: "4 hours",
        lessons: 6,
        completed: true,
        description: "Normalization, relationships, and schema design",
        icon: Database,
      },
      {
        title: "SQL Mastery",
        duration: "6 hours",
        lessons: 10,
        completed: false,
        description: "Advanced queries, joins, and stored procedures",
        icon: Code2,
      },
      {
        title: "NoSQL Solutions",
        duration: "6 hours",
        lessons: 8,
        completed: false,
        description: "Document, key-value, and graph databases",
        icon: Database,
      },
      {
        title: "Database Performance",
        duration: "8 hours",
        lessons: 10,
        completed: false,
        description: "Indexing, query optimization, and caching",
        icon: Flame,
      }
    ]
  };

  // Get modules for the current track or use default modules if not defined
  const defaultModules = [
    {
      title: "Getting Started",
      duration: "2 hours",
      lessons: 5,
      completed: true,
      description: "Introduction to core concepts and setup",
      icon: BookOpen,
    },
    {
      title: "Fundamentals",
      duration: "4 hours",
      lessons: 8,
      completed: true,
      description: "Essential principles and basic techniques",
      icon: Brain,
    },
    {
      title: "Advanced Concepts",
      duration: "6 hours",
      lessons: 10,
      completed: false,
      description: "Deep dive into complex topics",
      icon: Terminal,
    },
    {
      title: "Real-world Applications",
      duration: "8 hours",
      lessons: 12,
      completed: false,
      description: "Practical implementation and case studies",
      icon: Globe,
    },
    {
      title: "Best Practices",
      duration: "4 hours",
      lessons: 6,
      completed: false,
      description: "Industry standards and optimization techniques",
      icon: Shield,
    }
  ];

  const trackModules = trackModulesData[trackId as keyof typeof trackModulesData] || defaultModules;

  // Create track-specific resources
  const resourcesData = {
    "algorithms-mastery": [
      {
        title: "Algorithm Handbook",
        type: "PDF",
        size: "3.5 MB",
        icon: Book,
      },
      {
        title: "Code Samples",
        type: "ZIP",
        size: "12 MB",
        icon: Binary,
      },
      {
        title: "Practice Problems",
        type: "Folder",
        size: "25 MB",
        icon: TestTube,
      }
    ],
    "system-design": [
      {
        title: "System Design Interview Guide",
        type: "PDF",
        size: "5.2 MB",
        icon: Book,
      },
      {
        title: "Distributed Systems Principles",
        type: "PDF",
        size: "4.8 MB",
        icon: Network,
      },
      {
        title: "Architecture Diagrams Templates",
        type: "ZIP",
        size: "18 MB",
        icon: Layout,
      },
      {
        title: "Scalability Patterns",
        type: "PDF",
        size: "3.7 MB",
        icon: Maximize,
      },
      {
        title: "Database Design Handbook",
        type: "PDF",
        size: "6.3 MB",
        icon: Database,
      },
      {
        title: "Microservices Design Patterns",
        type: "PDF",
        size: "4.5 MB",
        icon: Boxes,
      },
      {
        title: "Load Balancing Strategies",
        type: "PDF",
        size: "2.9 MB",
        icon: Shuffle,
      },
      {
        title: "Caching Mechanisms Explained",
        type: "PDF",
        size: "3.6 MB",
        icon: Zap,
      },
      {
        title: "System Design Case Studies",
        type: "Folder",
        size: "32 MB",
        icon: FileSearch,
      },
      {
        title: "API Gateway Implementation",
        type: "ZIP",
        size: "15 MB",
        icon: Globe,
      },
      {
        title: "Message Queue Examples",
        type: "ZIP",
        size: "14 MB",
        icon: MessageSquare,
      },
      {
        title: "Database Sharding Tutorial",
        type: "PDF",
        size: "4.1 MB",
        icon: SplitSquareVertical,
      },
      {
        title: "Distributed Transaction Management",
        type: "PDF",
        size: "5.7 MB",
        icon: GitMerge,
      },
      {
        title: "CAP Theorem Visualization",
        type: "HTML",
        size: "2.3 MB",
        icon: Triangle,
      },
      {
        title: "Monitoring and Alerting Guide",
        type: "PDF",
        size: "3.8 MB",
        icon: Activity,
      },
      {
        title: "Consistent Hashing Explained",
        type: "PDF",
        size: "2.5 MB",
        icon: GitBranch,
      },
      {
        title: "High Availability Design",
        type: "PDF",
        size: "4.2 MB",
        icon: Shield,
      },
      {
        title: "System Design Tools Collection",
        type: "ZIP",
        size: "45 MB",
        icon: Wrench,
      },
      {
        title: "Deployment Strategy Patterns",
        type: "PDF",
        size: "3.2 MB",
        icon: Rocket,
      },
      {
        title: "Real-World Architecture Examples",
        type: "PDF",
        size: "8.5 MB",
        icon: FileSearch,
      }
    ],
    "frontend-development": [
      {
        title: "UI Component Library",
        type: "ZIP",
        size: "18 MB",
        icon: Layout,
      },
      {
        title: "React Design Patterns",
        type: "PDF",
        size: "4.2 MB",
        icon: Book,
      },
      {
        title: "TypeScript Cheat Sheet",
        type: "PDF",
        size: "1.8 MB",
        icon: Book,
      },
      {
        title: "Starter Templates",
        type: "Folder",
        size: "35 MB",
        icon: Binary,
      }
    ],
    "backend-engineering": [
      {
        title: "API Design Guidelines",
        type: "PDF",
        size: "2.8 MB",
        icon: Book,
      },
      {
        title: "Server Configuration Templates",
        type: "ZIP",
        size: "8 MB",
        icon: Server,
      },
      {
        title: "Database Schema Examples",
        type: "Folder",
        size: "15 MB",
        icon: Database,
      }
    ]
  };

  const defaultResources = [
    {
      title: "Documentation",
      type: "PDF",
      size: "2.5 MB",
      icon: Book,
    },
    {
      title: "Source Code",
      type: "ZIP",
      size: "15 MB",
      icon: Binary,
    },
    {
      title: "Practice Projects",
      type: "Folder",
      size: "45 MB",
      icon: Database,
    }
  ];

  const resources = resourcesData[trackId as keyof typeof resourcesData] || defaultResources;

  // Track-specific practice problems
  const practiceProblemsData = {
    "algorithms-mastery": [
      {
        title: "Binary Search Implementation",
        difficulty: "Medium",
        solved: true,
        points: 100,
        attempts: 45,
        successRate: "85%",
      },
      {
        title: "Graph Traversal Challenge",
        difficulty: "Hard",
        solved: false,
        points: 150,
        attempts: 32,
        successRate: "62%",
      },
      {
        title: "Dynamic Programming: Knapsack Problem",
        difficulty: "Hard",
        solved: false,
        points: 200,
        attempts: 28,
        successRate: "48%",
      }
    ],
    "system-design": [
      {
        title: "Design a URL Shortening Service",
        difficulty: "Medium",
        solved: true,
        points: 100,
        attempts: 68,
        successRate: "78%",
      },
      {
        title: "Build a Distributed Message Queue",
        difficulty: "Hard",
        solved: false,
        points: 200,
        attempts: 42,
        successRate: "56%",
      },
      {
        title: "Design a Rate Limiter",
        difficulty: "Medium",
        solved: false,
        points: 150,
        attempts: 53,
        successRate: "64%",
      },
      {
        title: "Implement a Consistent Hashing Algorithm",
        difficulty: "Hard",
        solved: false,
        points: 180,
        attempts: 38,
        successRate: "52%",
      },
      {
        title: "Design a Web Crawler",
        difficulty: "Hard",
        solved: false,
        points: 220,
        attempts: 35,
        successRate: "48%",
      },
      {
        title: "Build a Notification Service",
        difficulty: "Medium",
        solved: false,
        points: 160,
        attempts: 49,
        successRate: "62%",
      },
      {
        title: "Design a Distributed File System",
        difficulty: "Very Hard",
        solved: false,
        points: 250,
        attempts: 28,
        successRate: "38%",
      },
      {
        title: "Create a Distributed Cache",
        difficulty: "Hard",
        solved: false,
        points: 200,
        attempts: 36,
        successRate: "51%",
      },
      {
        title: "Design a Video Streaming Service",
        difficulty: "Hard",
        solved: false,
        points: 210,
        attempts: 32,
        successRate: "46%",
      },
      {
        title: "Build a Load Balancer",
        difficulty: "Medium",
        solved: false,
        points: 170,
        attempts: 44,
        successRate: "58%",
      }
    ],
    "frontend-development": [
      {
        title: "Responsive Dashboard Implementation",
        difficulty: "Medium",
        solved: true,
        points: 120,
        attempts: 67,
        successRate: "78%",
      },
      {
        title: "React Data Fetching with Suspense",
        difficulty: "Medium",
        solved: false,
        points: 130,
        attempts: 42,
        successRate: "65%",
      },
      {
        title: "Complex Form Validation with React Hook Form",
        difficulty: "Hard",
        solved: false,
        points: 180,
        attempts: 36,
        successRate: "58%",
      },
      {
        title: "Performance Optimization Challenge",
        difficulty: "Hard",
        solved: false,
        points: 200,
        attempts: 31,
        successRate: "52%",
      }
    ],
    "backend-engineering": [
      {
        title: "RESTful API Design Challenge",
        difficulty: "Medium",
        solved: true,
        points: 120,
        attempts: 58,
        successRate: "72%",
      },
      {
        title: "Authentication System Implementation",
        difficulty: "Hard",
        solved: false,
        points: 180,
        attempts: 40,
        successRate: "60%",
      },
      {
        title: "Database Query Optimization",
        difficulty: "Hard",
        solved: false,
        points: 160,
        attempts: 35,
        successRate: "54%",
      }
    ]
  };

  const defaultPracticeProblems = [
    {
      title: "Implementation Challenge",
      difficulty: "Medium",
      solved: true,
      points: 100,
      attempts: 45,
      successRate: "85%",
    },
    {
      title: "Advanced Problem",
      difficulty: "Hard",
      solved: false,
      points: 150,
      attempts: 32,
      successRate: "62%",
    }
  ];

  const practiceProblems = practiceProblemsData[trackId as keyof typeof practiceProblemsData] || defaultPracticeProblems;

  // Track-specific contests
  const contestsData = {
    "algorithms-mastery": [
      {
        title: "Weekly Algorithm Challenge",
        startTime: "2024-03-20T15:00:00",
        duration: "2 hours",
        participants: 234,
        difficulty: "Medium",
        status: "Upcoming",
      },
      {
        title: "Speed Coding Sprint",
        startTime: "2024-03-22T18:00:00",
        duration: "1 hour",
        participants: 156,
        difficulty: "Easy",
        status: "Upcoming",
      }
    ],
    "system-design": [
      {
        title: "Distributed Systems Design Hackathon",
        startTime: "2024-04-15T14:00:00",
        duration: "8 hours",
        participants: 178,
        difficulty: "Hard",
        status: "Upcoming",
      },
      {
        title: "Microservices Architecture Competition",
        startTime: "2024-04-22T10:00:00",
        duration: "6 hours",
        participants: 142,
        difficulty: "Medium",
        status: "Upcoming",
      },
      {
        title: "High-Scale System Design Challenge",
        startTime: "2024-05-05T15:00:00",
        duration: "5 hours",
        participants: 163,
        difficulty: "Hard",
        status: "Upcoming",
      },
      {
        title: "Cloud Architecture Shootout",
        startTime: "2024-05-18T09:00:00",
        duration: "7 hours",
        participants: 124,
        difficulty: "Medium",
        status: "Upcoming",
      },
      {
        title: "Database Design Competition",
        startTime: "2024-06-02T13:00:00",
        duration: "4 hours",
        participants: 156,
        difficulty: "Medium",
        status: "Upcoming",
      },
      {
        title: "System Design Case Study Battle",
        startTime: "2024-06-15T16:00:00",
        duration: "3 hours",
        participants: 189,
        difficulty: "Medium",
        status: "Upcoming",
      }
    ],
    "frontend-development": [
      {
        title: "React Component Challenge",
        startTime: "2024-03-18T14:00:00",
        duration: "3 hours",
        participants: 189,
        difficulty: "Medium",
        status: "Upcoming",
      },
      {
        title: "UI/UX Design Competition",
        startTime: "2024-03-24T16:00:00",
        duration: "4 hours",
        participants: 142,
        difficulty: "Medium",
        status: "Upcoming",
      },
      {
        title: "Web Performance Optimization",
        startTime: "2024-03-28T15:00:00",
        duration: "2 hours",
        participants: 113,
        difficulty: "Hard",
        status: "Upcoming",
      }
    ],
    "backend-engineering": [
      {
        title: "API Design Challenge",
        startTime: "2024-03-19T15:00:00",
        duration: "3 hours",
        participants: 176,
        difficulty: "Medium",
        status: "Upcoming",
      },
      {
        title: "Database Optimization Contest",
        startTime: "2024-03-25T14:00:00",
        duration: "2 hours",
        participants: 128,
        difficulty: "Hard",
        status: "Upcoming",
      }
    ]
  };

  const defaultContests = [
    {
      title: "Weekly Challenge",
      startTime: "2024-03-20T15:00:00",
      duration: "2 hours",
      participants: 200,
      difficulty: "Medium",
      status: "Upcoming",
    },
    {
      title: "Coding Sprint",
      startTime: "2024-03-25T18:00:00",
      duration: "1.5 hours",
      participants: 150,
      difficulty: "Medium",
      status: "Upcoming",
    }
  ];

  const contests = contestsData[trackId as keyof typeof contestsData] || defaultContests;

  // Track-specific quizzes
  const quizzesData = {
    "algorithms-mastery": [
      {
        title: "Algorithm Fundamentals",
        questions: 20,
        timeLimit: "30 mins",
        completed: true,
        score: "90%",
      },
      {
        title: "Advanced Data Structures",
        questions: 15,
        timeLimit: "25 mins",
        completed: false,
        score: null,
      }
    ],
    "system-design": [
      {
        title: "Distributed Systems Concepts",
        questions: 18,
        timeLimit: "30 mins",
        completed: true,
        score: "82%",
      },
      {
        title: "Database Scaling Techniques",
        questions: 15,
        timeLimit: "25 mins",
        completed: true,
        score: "75%",
      },
      {
        title: "Microservices Architecture",
        questions: 20,
        timeLimit: "35 mins",
        completed: false,
        score: null,
      },
      {
        title: "Load Balancing Strategies",
        questions: 12,
        timeLimit: "20 mins",
        completed: false,
        score: null,
      },
      {
        title: "Caching Mechanisms",
        questions: 15,
        timeLimit: "25 mins",
        completed: false,
        score: null,
      },
      {
        title: "Message Queue Systems",
        questions: 14,
        timeLimit: "20 mins",
        completed: false,
        score: null,
      },
      {
        title: "API Gateway Patterns",
        questions: 12,
        timeLimit: "20 mins",
        completed: false,
        score: null,
      },
      {
        title: "Data Partitioning Strategies",
        questions: 15,
        timeLimit: "25 mins",
        completed: false,
        score: null,
      },
      {
        title: "System Monitoring & Observability",
        questions: 16,
        timeLimit: "25 mins",
        completed: false,
        score: null,
      },
      {
        title: "High Availability Design",
        questions: 18,
        timeLimit: "30 mins",
        completed: false,
        score: null,
      }
    ],
    "frontend-development": [
      {
        title: "HTML & CSS Mastery",
        questions: 15,
        timeLimit: "20 mins",
        completed: true,
        score: "95%",
      },
      {
        title: "JavaScript Core Concepts",
        questions: 20,
        timeLimit: "30 mins",
        completed: true,
        score: "85%",
      },
      {
        title: "React Fundamentals",
        questions: 25,
        timeLimit: "35 mins",
        completed: true,
        score: "92%",
      },
      {
        title: "TypeScript Essentials",
        questions: 18,
        timeLimit: "25 mins",
        completed: false,
        score: null,
      },
      {
        title: "Web Performance",
        questions: 15,
        timeLimit: "20 mins",
        completed: false,
        score: null,
      }
    ],
    "backend-engineering": [
      {
        title: "Server Architecture",
        questions: 18,
        timeLimit: "25 mins",
        completed: true,
        score: "88%",
      },
      {
        title: "Database Design",
        questions: 20,
        timeLimit: "30 mins",
        completed: false,
        score: null,
      },
      {
        title: "API Development",
        questions: 15,
        timeLimit: "25 mins",
        completed: false,
        score: null,
      }
    ]
  };

  const defaultQuizzes = [
    {
      title: "Fundamentals Quiz",
      questions: 20,
      timeLimit: "30 mins",
      completed: true,
      score: "85%",
    },
    {
      title: "Advanced Concepts",
      questions: 15,
      timeLimit: "25 mins",
      completed: false,
      score: null,
    }
  ];

  const quizzes = quizzesData[trackId as keyof typeof quizzesData] || defaultQuizzes;

  // Track-specific reviews
  const reviewsData = {
    "algorithms-mastery": [
      {
        user: "Alex Smith",
        rating: 5,
        comment: "Excellent course structure and content. Really helped me improve my problem-solving skills.",
        date: "2024-03-15",
        avatar: "AS",
      },
      {
        user: "Maria Garcia",
        rating: 4,
        comment: "Very comprehensive coverage of algorithms. The practice problems are particularly helpful.",
        date: "2024-03-14",
        avatar: "MG",
      }
    ],
    "system-design": [
      {
        user: "Michael Chen",
        rating: 5,
        comment: "This course completely transformed my understanding of large-scale systems. The case studies are invaluable.",
        date: "2024-03-10",
        avatar: "MC",
      },
      {
        user: "Sophia Williams",
        rating: 5,
        comment: "Excellent content on distributed systems. The practical examples made complex concepts much easier to grasp.",
        date: "2024-03-05",
        avatar: "SW",
      },
      {
        user: "James Rodriguez",
        rating: 4,
        comment: "Great depth of material. The microservices section was particularly well-explained with real-world applications.",
        date: "2024-02-28",
        avatar: "JR",
      },
      {
        user: "Emma Johnson",
        rating: 5,
        comment: "Helped me ace my system design interviews. The scalability patterns section was extremely valuable.",
        date: "2024-02-22",
        avatar: "EJ",
      },
      {
        user: "David Kim",
        rating: 4,
        comment: "Very practical approach to system design. Would have liked more on security design patterns, but overall excellent.",
        date: "2024-02-15",
        avatar: "DK",
      },
      {
        user: "Olivia Martinez",
        rating: 5,
        comment: "The course content is structured perfectly from basics to advanced concepts. Highly recommended for all backend engineers.",
        date: "2024-02-08",
        avatar: "OM",
      },
      {
        user: "Noah Thompson",
        rating: 4,
        comment: "The hands-on exercises for designing distributed databases were extremely useful for my work projects.",
        date: "2024-02-01",
        avatar: "NT",
      },
      {
        user: "Ava Wilson",
        rating: 5,
        comment: "Best system design course I've found online. The instructor breaks down complex topics into digestible modules.",
        date: "2024-01-25",
        avatar: "AW",
      }
    ],
    "frontend-development": [
      {
        user: "David Chen",
        rating: 5,
        comment: "The React section was particularly helpful. Practical examples and clear explanations.",
        date: "2024-03-12",
        avatar: "DC",
      },
      {
        user: "Sophia Williams",
        rating: 5,
        comment: "Great course! The TypeScript content really improved my development skills.",
        date: "2024-03-10",
        avatar: "SW",
      },
      {
        user: "James Rodriguez",
        rating: 4,
        comment: "Excellent content and resources. The performance optimization section was eye-opening.",
        date: "2024-03-08",
        avatar: "JR",
      }
    ],
    "backend-engineering": [
      {
        user: "Emily Johnson",
        rating: 5,
        comment: "Comprehensive coverage of server-side development. The API design section was excellent.",
        date: "2024-03-14",
        avatar: "EJ",
      },
      {
        user: "Michael Brown",
        rating: 4,
        comment: "Very practical approach to backend development. The database integration section was very useful.",
        date: "2024-03-11",
        avatar: "MB",
      }
    ]
  };

  const defaultReviews = [
    {
      user: "John Doe",
      rating: 5,
      comment: "Excellent course structure and content. Really helped me improve my skills.",
      date: "2024-03-15",
      avatar: "JD",
    },
    {
      user: "Jane Smith",
      rating: 4,
      comment: "Very comprehensive coverage. The practice problems are particularly helpful.",
      date: "2024-03-14",
      avatar: "JS",
    }
  ];

  const reviews = reviewsData[trackId as keyof typeof reviewsData] || defaultReviews;

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white pb-20">
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-[#95FF66] blur-[100px] opacity-20 rounded-full"></div>
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 rounded-xl bg-[#95FF66]/10">
                <currentTrack.icon className="w-12 h-12 text-[#95FF66]" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#95FF66] to-[#67B346] bg-clip-text text-transparent">
                  {currentTrack.title}
                </h1>
                <p className="text-lg text-gray-400">{currentTrack.description}</p>
              </div>
            </div>

            {/* Progress Overview */}
            <Card className="glass border-white/10 mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <p className="text-gray-400">Overall Progress</p>
                    <div className="relative">
                      <Progress value={currentTrack.progress} className="h-2 bg-white/5" />
                      <span className="absolute right-0 top-[-20px] text-xs text-gray-400">{currentTrack.progress}%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#95FF66]" />
                    <div>
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="font-semibold">{currentTrack.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#95FF66]" />
                    <div>
                      <p className="text-sm text-gray-400">Modules</p>
                      <p className="font-semibold">{currentTrack.modules} modules</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-[#95FF66]" />
                    <div>
                      <p className="text-sm text-gray-400">Certificate</p>
                      <p className="font-semibold">Included</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="modules" className="space-y-8">
            <TabsList className="grid grid-cols-6 max-w-[800px] mx-auto bg-black/50 border border-white/10">
              <TabsTrigger
                value="modules"
                className="data-[state=active]:bg-[#95FF66] data-[state=active]:text-black"
              >
                Modules
              </TabsTrigger>
              <TabsTrigger
                value="practice"
                className="data-[state=active]:bg-[#95FF66] data-[state=active]:text-black"
              >
                Practice
              </TabsTrigger>
              <TabsTrigger
                value="contest"
                className="data-[state=active]:bg-[#95FF66] data-[state=active]:text-black"
              >
                Contest
              </TabsTrigger>
              <TabsTrigger
                value="quiz"
                className="data-[state=active]:bg-[#95FF66] data-[state=active]:text-black"
              >
                Quiz
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="data-[state=active]:bg-[#95FF66] data-[state=active]:text-black"
              >
                Resources
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-[#95FF66] data-[state=active]:text-black"
              >
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="modules" className="space-y-6">
              {trackModules.map((module, index) => (
                <Card
                  key={index}
                  className="glass border-white/10 hover:border-[#95FF66]/50 transition-all animate-fade-in cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="p-2 rounded-lg bg-[#95FF66]/10 group-hover:bg-[#95FF66]/20 transition-colors">
                      <module.icon className="w-8 h-8 text-[#95FF66] group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl mb-1 flex items-center gap-2">
                          {module.title}
                          {module.completed && <CheckCircle2 className="w-5 h-5 text-[#95FF66]" />}
                        </CardTitle>
                        <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                          {module.completed ? "Review" : "Start"} <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                      <CardDescription>{module.description}</CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {module.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <PlayCircle className="w-4 h-4" />
                          {module.lessons} lessons
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="resources" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card
                  key={index}
                  className="glass border-white/10 hover:border-[#95FF66]/50 transition-all animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#95FF66]/10 group-hover:bg-[#95FF66]/20 transition-colors">
                        <resource.icon className="w-6 h-6 text-[#95FF66] group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <CardDescription>{resource.type} • {resource.size}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#95FF66] text-black hover:bg-[#95FF66]/90 group-hover:scale-[1.02] transition-all">
                      Download Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="practice" className="space-y-6">
              {practiceProblems.map((problem, index) => (
                <Card
                  key={index}
                  className="glass border-white/10 hover:border-[#95FF66]/50 transition-all animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-[#95FF66]/10">
                        <TestTube className="w-6 h-6 text-[#95FF66]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{problem.title}</CardTitle>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-400">Difficulty: {problem.difficulty}</span>
                          <span className="text-sm text-gray-400">Points: {problem.points}</span>
                          <span className="text-sm text-gray-400">Success Rate: {problem.successRate}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-[#95FF66] text-black hover:bg-[#95FF66]/90">
                      {problem.solved ? "Review Solution" : "Solve Challenge"}
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="contest" className="space-y-6">
              {contests.map((contest, index) => (
                <Card
                  key={index}
                  className="glass border-white/10 hover:border-[#95FF66]/50 transition-all animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-[#95FF66]/10">
                        <Award className="w-6 h-6 text-[#95FF66]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{contest.title}</CardTitle>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-400">Start: {new Date(contest.startTime).toLocaleString()}</span>
                          <span className="text-sm text-gray-400">Duration: {contest.duration}</span>
                          <span className="text-sm text-gray-400">Participants: {contest.participants}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-[#95FF66] text-black hover:bg-[#95FF66]/90">
                      Register Now
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="quiz" className="space-y-6">
              {quizzes.map((quiz, index) => (
                <Card
                  key={index}
                  className="glass border-white/10 hover:border-[#95FF66]/50 transition-all animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-[#95FF66]/10">
                        <Brain className="w-6 h-6 text-[#95FF66]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{quiz.title}</CardTitle>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-400">Questions: {quiz.questions}</span>
                          <span className="text-sm text-gray-400">Time: {quiz.timeLimit}</span>
                          {quiz.completed && <span className="text-sm text-gray-400">Score: {quiz.score}</span>}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-[#95FF66] text-black hover:bg-[#95FF66]/90">
                      {quiz.completed ? "Review Quiz" : "Start Quiz"}
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              {reviews.map((review, index) => (
                <Card
                  key={index}
                  className="glass border-white/10 hover:border-[#95FF66]/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#95FF66]/10 flex items-center justify-center text-[#95FF66] font-semibold">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{review.user}</CardTitle>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#95FF66] text-[#95FF66]" />
                          ))}
                        </div>
                      </div>
                      <CardDescription className="mt-2">{review.comment}</CardDescription>
                      <div className="text-sm text-gray-400 mt-2">{review.date}</div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default TrackDetails;

