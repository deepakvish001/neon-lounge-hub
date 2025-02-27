import { useState } from "react";
import { Book, BookOpen, Gamepad2, Code2, GraduationCap, Clock, Star, Trophy, ChevronRight, Video, Users, Binary, Brain, Database, Globe, Server, Shield, Cpu, Layout, Terminal, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { Progress } from "@/components/ui/progress";

const Learn = () => {
  const [selectedTab, setSelectedTab] = useState("tracks");

  const learningTracks = [
    {
      title: "Algorithms Mastery",
      description: "Master fundamental algorithms and problem-solving techniques",
      progress: 65,
      modules: 12,
      duration: "8 weeks",
      icon: Code2,
    },
    {
      title: "Data Structures Deep Dive",
      description: "Comprehensive study of essential data structures",
      progress: 45,
      modules: 8,
      duration: "6 weeks",
      icon: BookOpen,
    },
    {
      title: "Competitive Programming",
      description: "Advanced techniques for coding competitions",
      progress: 30,
      modules: 15,
      duration: "12 weeks",
      icon: Trophy,
    },
    {
      title: "System Design",
      description: "Learn to design scalable distributed systems",
      progress: 20,
      modules: 10,
      duration: "10 weeks",
      icon: Server,
    }
  ];

  const featuredCourses = [
    {
      title: "Dynamic Programming Mastery",
      level: "Advanced",
      category: "Algorithms",
      students: 1234,
      rating: 4.8,
      duration: "4 weeks",
      icon: Brain,
    },
    {
      title: "Graph Algorithms & Applications",
      level: "Intermediate",
      category: "Algorithms",
      students: 2156,
      rating: 4.9,
      duration: "6 weeks",
      icon: Binary,
    },
    {
      title: "Binary Trees & BST",
      level: "Beginner",
      category: "Data Structures",
      students: 3789,
      rating: 4.7,
      duration: "3 weeks",
      icon: Binary,
    },
    {
      title: "Distributed Systems Design",
      level: "Advanced",
      category: "System Design",
      students: 1567,
      rating: 4.9,
      duration: "8 weeks",
      icon: Server,
    },
    {
      title: "Database Architecture",
      level: "Intermediate",
      category: "Backend",
      students: 2890,
      rating: 4.8,
      duration: "6 weeks",
      icon: Database,
    },
    {
      title: "RESTful API Design",
      level: "Intermediate",
      category: "Backend",
      students: 3456,
      rating: 4.7,
      duration: "4 weeks",
      icon: Globe,
    },
    {
      title: "Modern Frontend Architecture",
      level: "Advanced",
      category: "Frontend",
      students: 2123,
      rating: 4.8,
      duration: "6 weeks",
      icon: Layout,
    },
    {
      title: "React Performance Optimization",
      level: "Advanced",
      category: "Frontend",
      students: 1890,
      rating: 4.9,
      duration: "4 weeks",
      icon: Flame,
    },
    {
      title: "State Management Patterns",
      level: "Intermediate",
      category: "Frontend",
      students: 2567,
      rating: 4.7,
      duration: "5 weeks",
      icon: Brain,
    },
    {
      title: "Web Security Fundamentals",
      level: "Intermediate",
      category: "Security",
      students: 1789,
      rating: 4.8,
      duration: "6 weeks",
      icon: Shield,
    },
    {
      title: "Ethical Hacking",
      level: "Advanced",
      category: "Security",
      students: 2345,
      rating: 4.9,
      duration: "8 weeks",
      icon: Shield,
    },
    {
      title: "Microservices Architecture",
      level: "Advanced",
      category: "Backend",
      students: 1678,
      rating: 4.8,
      duration: "7 weeks",
      icon: Server,
    },
    {
      title: "Cloud Native Development",
      level: "Advanced",
      category: "DevOps",
      students: 1456,
      rating: 4.7,
      duration: "8 weeks",
      icon: Server,
    },
    {
      title: "Advanced JavaScript",
      level: "Advanced",
      category: "Languages",
      students: 3789,
      rating: 4.9,
      duration: "6 weeks",
      icon: Code2,
    },
    {
      title: "Python for Data Structures",
      level: "Intermediate",
      category: "Languages",
      students: 4567,
      rating: 4.8,
      duration: "5 weeks",
      icon: Terminal,
    },
    {
      title: "Operating Systems",
      level: "Advanced",
      category: "CS Fundamentals",
      students: 1234,
      rating: 4.7,
      duration: "10 weeks",
      icon: Cpu,
    },
    {
      title: "Computer Networks",
      level: "Intermediate",
      category: "CS Fundamentals",
      students: 2345,
      rating: 4.6,
      duration: "8 weeks",
      icon: Globe,
    },
    {
      title: "System Performance",
      level: "Advanced",
      category: "Performance",
      students: 1567,
      rating: 4.8,
      duration: "6 weeks",
      icon: Flame,
    },
    {
      title: "Code Optimization",
      level: "Advanced",
      category: "Performance",
      students: 1890,
      rating: 4.7,
      duration: "5 weeks",
      icon: Code2,
    },
    {
      title: "Memory Management",
      level: "Advanced",
      category: "CS Fundamentals",
      students: 1234,
      rating: 4.8,
      duration: "6 weeks",
      icon: Cpu,
    }
  ];

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white pb-20">
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-[#95FF66] blur-[100px] opacity-20 rounded-full"></div>
            <GraduationCap className="w-16 h-16 text-[#95FF66] mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#95FF66] to-[#67B346] bg-clip-text text-transparent neon-glow">
              Master Your Skills
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Dive into our comprehensive learning paths and level up your programming expertise
            </p>
          </div>

          {/* Learning Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { icon: BookOpen, label: "Courses", value: "20+" },
              { icon: Trophy, label: "Skill Tracks", value: "12" },
              { icon: Users, label: "Active Learners", value: "50k+" },
              { icon: Star, label: "Average Rating", value: "4.8" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl border border-white/10 animate-fade-in hover:border-[#95FF66]/50 transition-all cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-[#95FF66] mb-3" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4">
        <Tabs defaultValue="tracks" className="space-y-8">
          <TabsList className="grid grid-cols-2 max-w-[400px] mx-auto bg-black/50 border border-white/10">
            <TabsTrigger
              value="tracks"
              className="data-[state=active]:bg-[#95FF66] data-[state=active]:text-black"
            >
              Learning Tracks
            </TabsTrigger>
            <TabsTrigger
              value="featured"
              className="data-[state=active]:bg-[#95FF66] data-[state=active]:text-black"
            >
              Featured Courses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tracks" className="space-y-6">
            {learningTracks.map((track, index) => (
              <Card
                key={index}
                className="glass border-white/10 hover:border-[#95FF66]/50 transition-all animate-fade-in cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-lg bg-[#95FF66]/10 group-hover:bg-[#95FF66]/20 transition-colors">
                    <track.icon className="w-8 h-8 text-[#95FF66]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-1">{track.title}</CardTitle>
                    <CardDescription>{track.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Progress value={track.progress} className="h-2 bg-white/5" />
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        {track.modules} modules
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {track.duration}
                      </div>
                      <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                        Continue <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="featured" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <Card
                key={index}
                className="glass border-white/10 hover:border-[#95FF66]/50 transition-all animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#95FF66]/10 group-hover:bg-[#95FF66]/20 transition-colors">
                      <course.icon className="w-6 h-6 text-[#95FF66]" />
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <span className="inline-block px-2 py-1 rounded-full bg-[#95FF66]/10 text-[#95FF66] text-xs">
                      {course.level}
                    </span>
                    <span className="inline-block px-2 py-1 rounded-full bg-black/30 text-gray-400 text-xs">
                      {course.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#95FF66]" fill="#95FF66" />
                        {course.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {course.students.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                    </div>
                    <Button className="w-full bg-[#95FF66] text-black hover:bg-[#95FF66]/90 group-hover:scale-[1.02] transition-all">
                      Start Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Learn;
