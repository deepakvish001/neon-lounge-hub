
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Book, BookOpen, Clock, Star, ChevronRight, Video, Users, Binary, Brain, Database, Globe, Server, Shield, Cpu, Layout, Terminal, Flame, CheckCircle2, PlayCircle, Trophy } from "lucide-react";
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

  const trackModules = [
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

  const resources = [
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

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white pb-20">
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-[#95FF66] blur-[100px] opacity-20 rounded-full"></div>
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 rounded-xl bg-[#95FF66]/10">
                <Terminal className="w-12 h-12 text-[#95FF66]" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#95FF66] to-[#67B346] bg-clip-text text-transparent">
                  Advanced Development Track
                </h1>
                <p className="text-lg text-gray-400">Master modern development practices and techniques</p>
              </div>
            </div>

            {/* Progress Overview */}
            <Card className="glass border-white/10 mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <p className="text-gray-400">Overall Progress</p>
                    <div className="relative">
                      <Progress value={45} className="h-2 bg-white/5" />
                      <span className="absolute right-0 top-[-20px] text-xs text-gray-400">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#95FF66]" />
                    <div>
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="font-semibold">24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#95FF66]" />
                    <div>
                      <p className="text-sm text-gray-400">Modules</p>
                      <p className="font-semibold">5 modules</p>
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
            <TabsList className="grid grid-cols-2 max-w-[400px] mx-auto bg-black/50 border border-white/10">
              <TabsTrigger
                value="modules"
                className="data-[state=active]:bg-[#95FF66] data-[state=active]:text-black"
              >
                Modules
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="data-[state=active]:bg-[#95FF66] data-[state=active]:text-black"
              >
                Resources
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
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default TrackDetails;
