import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { tracks } from "@/constants";
import { 
  BookOpen, Clock, Users, Award, ChevronRight, Star, 
  Search, Filter, TrendingUp, Zap, MessageCircle, BrainCircuit,
  Timer, Trophy, Heart, ListCheck, ArrowUpRight, Code, FileText,
  Hexagon, LucideIcon, Bookmark, Coffee, PenTool, Book, GraduationCap,
  Settings, Lightbulb, Puzzle, Target, CheckCircle, Play, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const Learn = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showRecommended, setShowRecommended] = useState(true);
  const [activeLearningPathTab, setActiveLearningPathTab] = useState("roadmap");
  const timelineRef = useRef<HTMLDivElement>(null);
  const [showHowToLearn, setShowHowToLearn] = useState(false);
  
  // Featured courses - hardcoded for now
  const featuredCourses = [
    {
      id: "modern-html-css",
      title: "Modern HTML & CSS",
      track: "Frontend Development",
      students: 4826,
      rating: 4.8,
      modules: 12,
      progress: 30,
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      id: "javascript-fundamentals",
      title: "JavaScript Fundamentals",
      track: "Frontend Development",
      students: 3254,
      rating: 4.7,
      modules: 15,
      progress: 0,
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      id: "react-basics",
      title: "React Basics",
      track: "Frontend Development",
      students: 2980,
      rating: 4.9,
      modules: 8,
      progress: 15,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      id: "typescript-mastery",
      title: "TypeScript Mastery",
      track: "Frontend Development",
      students: 1845,
      rating: 4.6,
      modules: 10,
      progress: 0,
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=300&h=200&q=80"
    }
  ];

  // Learning paths
  const learningPaths = [
    {
      id: "frontend-specialist",
      title: "Frontend Specialist",
      description: "Master frontend development from basics to advanced concepts",
      duration: "4 months",
      coursesCount: 12,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      id: "fullstack-developer",
      title: "Fullstack Developer",
      description: "Become proficient in both frontend and backend technologies",
      duration: "6 months",
      coursesCount: 18,
      image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      id: "cloud-architect",
      title: "Cloud Architect",
      description: "Learn to design and implement scalable cloud solutions",
      duration: "5 months",
      coursesCount: 15,
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=300&h=200&q=80"
    }
  ];

  // Daily challenges
  const dailyChallenges = [
    {
      id: "css-flexbox",
      title: "CSS Flexbox Layout",
      difficulty: "Medium",
      timeEstimate: "20 mins",
      points: 50,
      category: "Frontend"
    },
    {
      id: "js-array-methods",
      title: "JavaScript Array Methods",
      difficulty: "Easy",
      timeEstimate: "15 mins",
      points: 30,
      category: "JavaScript"
    },
    {
      id: "responsive-navbar",
      title: "Build a Responsive Navbar",
      difficulty: "Hard",
      timeEstimate: "30 mins",
      points: 75,
      category: "CSS"
    }
  ];

  // Study groups
  const studyGroups = [
    {
      id: "js-study-group",
      title: "JavaScript Mastery",
      members: 24,
      meetingTime: "Tuesdays, 7PM",
      topic: "Advanced JavaScript Concepts",
      active: true
    },
    {
      id: "react-study-group",
      title: "React Deep Dive",
      members: 18,
      meetingTime: "Thursdays, 6PM",
      topic: "React Hooks & Performance",
      active: true
    },
    {
      id: "algorithms-group",
      title: "Algorithm Practice",
      members: 32,
      meetingTime: "Saturdays, 10AM",
      topic: "Solving LeetCode challenges together",
      active: true
    }
  ];

  // Learning strategies
  const learningStrategies = [
    {
      title: "Spaced Repetition",
      description: "Review concepts at increasing intervals to strengthen retention",
      icon: Timer
    },
    {
      title: "Active Recall",
      description: "Test yourself frequently instead of passively reviewing material",
      icon: CheckCircle
    },
    {
      title: "Project-Based Learning",
      description: "Apply concepts by building real projects for deeper understanding",
      icon: Code
    },
    {
      title: "Teach to Learn",
      description: "Reinforce your understanding by explaining concepts to others",
      icon: Users
    },
    {
      title: "Pomodoro Technique",
      description: "Work in focused 25-minute intervals with short breaks between",
      icon: Clock
    }
  ];

  // Interactive quizzes
  const quizzes = [
    {
      id: "html-basics",
      title: "HTML Fundamentals",
      questions: 10,
      timeToComplete: "5 mins",
      category: "HTML"
    },
    {
      id: "css-selectors",
      title: "CSS Selectors",
      questions: 12,
      timeToComplete: "6 mins",
      category: "CSS"
    },
    {
      id: "js-basics",
      title: "JavaScript Basics",
      questions: 15,
      timeToComplete: "10 mins",
      category: "JavaScript"
    }
  ];

  // Learning roadmap timeline stages
  const roadmapStages = [
    {
      title: "HTML & CSS Fundamentals",
      description: "Master the building blocks of websites",
      icon: Code,
      courses: ["HTML Basics", "CSS Fundamentals", "Responsive Design"],
      duration: "3 weeks"
    },
    {
      title: "JavaScript Essentials",
      description: "Learn the programming language of the web",
      icon: FileText,
      courses: ["JS Basics", "DOM Manipulation", "Async JavaScript"],
      duration: "4 weeks"
    },
    {
      title: "Frontend Frameworks",
      description: "Build modern interfaces with popular frameworks",
      icon: Hexagon,
      courses: ["React Fundamentals", "State Management", "Routing"],
      duration: "5 weeks"
    },
    {
      title: "Backend Development",
      description: "Create server-side applications and APIs",
      icon: BrainCircuit,
      courses: ["Node.js", "Express", "RESTful APIs"],
      duration: "4 weeks"
    },
    {
      title: "Database Integration",
      description: "Store and retrieve data effectively",
      icon: BookOpen,
      courses: ["SQL Basics", "MongoDB", "Data Modeling"],
      duration: "3 weeks"
    }
  ];

  // Learning resources
  const learningResources = [
    {
      title: "Interactive Tutorials",
      description: "Learn by doing with interactive coding exercises",
      icon: PenTool,
      link: "/resources/tutorials"
    },
    {
      title: "Documentation Library",
      description: "Comprehensive references for all technologies",
      icon: Book,
      link: "/resources/docs"
    },
    {
      title: "Project Templates",
      description: "Jump-start your projects with ready-to-use templates",
      icon: Bookmark,
      link: "/resources/templates"
    },
    {
      title: "Practice Exercises",
      description: "Reinforce your skills with targeted practice",
      icon: Puzzle,
      link: "/resources/exercises"
    }
  ];

  // Career paths
  const careerPaths = [
    {
      title: "Frontend Developer",
      avgSalary: "$95,000",
      demand: "High",
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
      icon: Code
    },
    {
      title: "Backend Developer",
      avgSalary: "$110,000",
      demand: "Very High",
      skills: ["Node.js", "Python", "Databases", "APIs", "Cloud Services"],
      icon: FileText
    },
    {
      title: "Full Stack Developer",
      avgSalary: "$120,000",
      demand: "Very High",
      skills: ["Frontend", "Backend", "DevOps", "Architecture"],
      icon: Hexagon
    },
    {
      title: "UI/UX Designer",
      avgSalary: "$90,000",
      demand: "Medium",
      skills: ["UX Research", "Wireframing", "Visual Design", "Prototyping"],
      icon: PenTool
    }
  ];

  // How to learn effectively tips
  const learningTips = [
    {
      title: "Create a Learning Schedule",
      description: "Set aside dedicated time for learning each day or week",
      icon: Clock
    },
    {
      title: "Build Real Projects",
      description: "Apply what you learn by building actual applications",
      icon: Code
    },
    {
      title: "Join a Community",
      description: "Connect with others for support and knowledge sharing",
      icon: Users
    },
    {
      title: "Take Regular Breaks",
      description: "Use techniques like Pomodoro to maintain focus and energy",
      icon: Coffee
    },
    {
      title: "Track Your Progress",
      description: "Measure your improvement to stay motivated",
      icon: Target
    },
    {
      title: "Teach Others",
      description: "Explaining concepts to others solidifies your understanding",
      icon: GraduationCap
    }
  ];

  // Filter tracks based on search query
  const filteredTracks = tracks.filter(track => 
    track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    track.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Animation for roadmap timeline
    const timelineElements = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
          }, index * 150); // Staggered animation
          timelineObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    timelineElements.forEach(el => {
      timelineObserver.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
      
      timelineElements.forEach(el => {
        timelineObserver.unobserve(el);
      });
    };
  }, [activeLearningPathTab]);

  // Handle scrolling the timeline
  const scrollTimeline = (direction: 'left' | 'right') => {
    if (timelineRef.current) {
      const scrollAmount = 300;
      const currentScroll = timelineRef.current.scrollLeft;
      timelineRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      {/* Hero section with enhanced animated background */}
      <div className="mb-12 text-center relative overflow-hidden rounded-2xl p-10 glass">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-[#95FF66]/10 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2 subtle-bg-animation"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-green-400/10 rounded-full filter blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/2 subtle-bg-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-full h-full bg-[#95FF66]/5 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2 subtle-bg-animation" style={{animationDelay: '2s'}}></div>
          
          {/* Floating code blocks decoration */}
          <div className="absolute top-[20%] right-[10%] opacity-20 animate-float delay-100">
            <div className="text-xs text-[#95FF66] font-mono">
              &lt;div&gt;<br/>
              &nbsp;&nbsp;&lt;h1&gt;Learn&lt;/h1&gt;<br/>
              &lt;/div&gt;
            </div>
          </div>
          <div className="absolute bottom-[20%] left-[15%] opacity-20 animate-float delay-300">
            <div className="text-xs text-[#95FF66] font-mono">
              function learn() {<br/>
              &nbsp;&nbsp;return skills++;<br/>
              }
            </div>
          </div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#95FF66] to-green-400 bg-clip-text text-transparent animate-fade-in">
            Elevate Your Coding Skills
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Browse our comprehensive learning tracks designed to take you from beginner to professional. 
            Master the latest technologies with hands-on projects and expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button variant="educational" size="lg" className="group shadow-glow relative overflow-hidden">
              <span className="relative z-10">Start Learning Now</span>
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 hover:bg-white/5 group">
              Explore Paths
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex flex-col items-center bg-white/5 p-3 px-6 rounded-lg border border-white/10">
              <Sparkles className="h-5 w-5 text-[#95FF66] mb-1" />
              <span className="text-2xl font-bold text-white">50+</span>
              <span className="text-xs text-gray-400">Courses</span>
            </div>
            <div className="flex flex-col items-center bg-white/5 p-3 px-6 rounded-lg border border-white/10">
              <Users className="h-5 w-5 text-[#95FF66] mb-1" />
              <span className="text-2xl font-bold text-white">10K+</span>
              <span className="text-xs text-gray-400">Students</span>
            </div>
            <div className="flex flex-col items-center bg-white/5 p-3 px-6 rounded-lg border border-white/10">
              <Award className="h-5 w-5 text-[#95FF66] mb-1" />
              <span className="text-2xl font-bold text-white">95%</span>
              <span className="text-xs text-gray-400">Success Rate</span>
            </div>
            <div className="flex flex-col items-center bg-white/5 p-3 px-6 rounded-lg border border-white/10">
              <Play className="h-5 w-5 text-[#95FF66] mb-1" />
              <span className="text-2xl font-bold text-white">2K+</span>
              <span className="text-xs text-gray-400">Video Lessons</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and filter bar with improved visuals */}
      <div className="mb-10 glass rounded-lg border border-white/10 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4 group-focus-within:text-[#95FF66] transition-colors" />
            <Input
              placeholder="Search for courses, tracks or topics..."
              className="pl-10 bg-white/5 border-white/10 focus:border-[#95FF66]/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                onClick={() => setSearchQuery("")}
              >
                <span className="sr-only">Clear</span>
                <span className="text-gray-500">×</span>
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button 
              variant={showRecommended ? "secondary" : "outline"} 
              size="sm"
              onClick={() => setShowRecommended(!showRecommended)}
              className={showRecommended ? "" : "border-white/10 hover:bg-white/5"}
            >
              <Zap className="h-4 w-4 mr-2 text-[#95FF66]" />
              Recommended
            </Button>
            
            {/* How to learn toggle */}
            <Button 
              variant={showHowToLearn ? "secondary" : "outline"} 
              size="sm"
              onClick={() => setShowHowToLearn(!showHowToLearn)}
              className={showHowToLearn ? "" : "border-white/10 hover:bg-white/5"}
            >
              <Lightbulb className="h-4 w-4 mr-2 text-[#95FF66]" />
              Learning Tips
            </Button>
          </div>
        </div>
      </div>

      {/* Learning Tips Guide */}
      {showHowToLearn && (
        <section className="mb-12 reveal-on-scroll opacity-0">
          <Card className="bg-gray-800/50 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center text-2xl">
                <Lightbulb className="mr-2 h-5 w-5 text-[#95FF66]" />
                How to Learn Effectively
              </CardTitle>
              <CardDescription className="text-gray-400">
                Optimize your learning experience with these proven techniques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {learningTips.map((tip, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-[#95FF66]/20 transition-all group">
                    <div className="flex items-start mb-3">
                      <div className="mr-3 bg-[#95FF66]/10 p-2 rounded-lg text-[#95FF66] group-hover:bg-[#95FF66]/20 transition-colors">
                        <tip.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white group-hover:text-[#95FF66] transition-colors">{tip.title}</h3>
                        <p className="text-sm text-gray-400 mt-1">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-[#95FF66]/10 rounded-lg border border-[#95FF66]/20">
                <h3 className="text-[#95FF66] font-medium mb-2 flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  Personalize Your Learning
                </h3>
                <p className="text-sm text-gray-300">
                  Everyone learns differently. Experiment with different techniques to find what works best for you.
                  Track your progress, celebrate small wins, and adjust your approach as needed.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-white/10 hover:bg-white/5" onClick={() => setShowHowToLearn(false)}>
                Close Learning Tips
              </Button>
            </CardFooter>
          </Card>
        </section>
      )}

      {/* Personal Learning Dashboard */}
      {featuredCourses.some(course => course.progress > 0) && (
        <section className="mb-12 reveal-on-scroll opacity-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <ListCheck className="mr-2 h-5 w-5 text-[#95FF66]" />
              Continue Learning
            </h2>
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.filter(course => course.progress > 0).map((course) => (
              <div 
                key={course.id}
                className="bg-gray-800/50 rounded-lg overflow-hidden border border-white/10 hover:border-[#95FF66]/30 transition-all duration-300 group cursor-pointer hover:translate-y-[-5px]"
                onClick={() => navigate(`/module/${course.id}`)}
              >
                <div className="relative p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="text-xs text-[#95FF66] mb-1">{course.track}</div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#95FF66] transition-colors">
                        {course.title}
                      </h3>
                    </div>
                    <div className="bg-[#95FF66]/20 text-[#95FF66] text-xs py-1 px-2 rounded-full">
                      Continue
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-1.5 bg-gray-700" indicatorClassName="bg-[#95FF66]" />
                  </div>
                  
                  {/* Enhanced UI: Add next lesson information */}
                  <div className="mt-4 p-2 bg-white/5 rounded border border-white/10 flex items-center">
                    <Play className="h-4 w-4 text-[#95FF66] mr-2" />
                    <div>
                      <div className="text-xs text-white">Next: Introduction to Flexbox</div>
                      <div className="text-xs text-gray-500">15 minutes</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Interactive Learning Roadmap */}
      <section className="mb-12 reveal-on-scroll opacity-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <BrainCircuit className="mr-2 h-5 w-5 text-[#95FF66]" />
            Learning Paths
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 md:hidden"
              onClick={() => scrollTimeline('left')}>
              &larr;
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 md:hidden"
              onClick={() => scrollTimeline('right')}>
              &rarr;
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="roadmap" value={activeLearningPathTab} onValueChange={setActiveLearningPathTab} className="mb-6">
          <TabsList className="mb-6 bg-gray-800/30 p-1">
            <TabsTrigger value="roadmap" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
              Development Roadmap
            </TabsTrigger>
            <TabsTrigger value="paths" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
              Guided Paths
            </TabsTrigger>
            <TabsTrigger value="careers" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
              Career Tracks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="roadmap" className="animate-fade-in">
            <div className="bg-gray-800/30 rounded-lg p-6 border border-white/10">
              <h3 className="text-white text-xl font-medium mb-6">Fullstack Web Development Journey</h3>
              
              <div className="relative">
                {/* Timeline connector */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#95FF66] to-gray-800/50"></div>
                
                {/* Timeline items */}
                <div ref={timelineRef} className="pl-12 space-y-8 relative">
                  {roadmapStages.map((stage, index) => (
                    <div key={index} className="timeline-item opacity-0 transition-all duration-300">
                      <div className="absolute left-1 w-6 h-6 rounded-full bg-[#95FF66]/20 flex items-center justify-center border-2 border-[#95FF66]">
                        <stage.icon className="h-3 w-3 text-[#95FF66]" />
                      </div>
                      
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-white/10">
                        <div className="text-[#95FF66] text-xs mb-1">{stage.duration}</div>
                        <h4 className="text-white text-lg font-medium mb-1">{stage.title}</h4>
                        <p className="text-gray-400 text-sm mb-3">{stage.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {stage.courses.map((course, i) => (
                            <Badge key={i} variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                              {course}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                          Start This Phase
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                  Download Complete Roadmap
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="paths" className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {learningPaths.map((path) => (
              <div 
                key={path.id}
                className="bg-gray-800/50 rounded-lg overflow-hidden border border-white/10 hover:border-[#95FF66]/30 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/path/${path.id}`)}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={path.image} 
                    alt={path.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#95FF66] transition-colors">
                      {path
