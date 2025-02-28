
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Book, BookOpen, Clock, Star, ChevronRight, Video, Users, Binary, Brain, Database, Globe, Server, Shield, Cpu, Layout, Terminal, Flame, CheckCircle2, PlayCircle, Trophy, MessageSquare, TestTube, Award } from "lucide-react";
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
      modules: 10,
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
