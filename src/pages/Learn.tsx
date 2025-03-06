
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tracks } from "@/constants";
import { 
  BookOpen, Clock, Users, Award, ChevronRight, Star, 
  Search, Filter, TrendingUp, Zap, MessageCircle, BrainCircuit,
  Timer, Trophy, Heart, ListCheck, ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Learn = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showRecommended, setShowRecommended] = useState(true);
  
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
    }
  ];

  // Daily challenges
  const dailyChallenges = [
    {
      id: "css-flexbox",
      title: "CSS Flexbox Layout",
      difficulty: "Medium",
      timeEstimate: "20 mins",
      points: 50
    },
    {
      id: "js-array-methods",
      title: "JavaScript Array Methods",
      difficulty: "Easy",
      timeEstimate: "15 mins",
      points: 30
    },
    {
      id: "responsive-navbar",
      title: "Build a Responsive Navbar",
      difficulty: "Hard",
      timeEstimate: "30 mins",
      points: 75
    }
  ];

  // Study groups
  const studyGroups = [
    {
      id: "js-study-group",
      title: "JavaScript Mastery",
      members: 24,
      meetingTime: "Tuesdays, 7PM",
      topic: "Advanced JavaScript Concepts"
    },
    {
      id: "react-study-group",
      title: "React Deep Dive",
      members: 18,
      meetingTime: "Thursdays, 6PM",
      topic: "React Hooks & Performance"
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

    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      {/* Hero section with animated background */}
      <div className="mb-12 text-center relative overflow-hidden rounded-2xl p-8 glass">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-[#95FF66]/10 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2 subtle-bg-animation"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-green-400/10 rounded-full filter blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/2 subtle-bg-animation" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#95FF66] to-green-400 bg-clip-text text-transparent animate-fade-in">
            Elevate Your Coding Skills
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Browse our comprehensive learning tracks designed to take you from beginner to professional. 
            Master the latest technologies with hands-on projects and expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Button variant="educational" size="lg" className="group">
              Start Learning Now
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 hover:bg-white/5">
              Explore Paths
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Search and filter bar */}
      <div className="mb-10 glass rounded-lg border border-white/10 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              placeholder="Search for courses, tracks or topics..."
              className="pl-10 bg-white/5 border-white/10 focus:border-[#95FF66]/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
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
          </div>
        </div>
      </div>

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
                className="bg-gray-800/50 rounded-lg overflow-hidden border border-white/10 hover:border-[#95FF66]/30 transition-all duration-300 group cursor-pointer"
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
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Learning Paths section */}
      <section className="mb-12 reveal-on-scroll opacity-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <BrainCircuit className="mr-2 h-5 w-5 text-[#95FF66]" />
            Learning Paths
          </h2>
          <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    {path.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-5">
                <p className="text-gray-400 mb-4 text-sm">{path.description}</p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <Clock className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>{path.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>{path.coursesCount} courses</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Tracks section with tabs */}
      <section className="mb-12 reveal-on-scroll opacity-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-[#95FF66]" />
            Learning Tracks
          </h2>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="mb-6 bg-gray-800/30 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
              All Tracks
            </TabsTrigger>
            <TabsTrigger value="frontend" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
              Frontend
            </TabsTrigger>
            <TabsTrigger value="backend" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
              Backend
            </TabsTrigger>
            <TabsTrigger value="fullstack" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
              Full Stack
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTracks.map((track) => (
              <div 
                key={track.id}
                className="bg-gray-800/50 p-6 rounded-lg border border-white/10 hover:border-[#95FF66]/30 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/track/${track.id}`)}
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#95FF66] transition-colors">
                  {track.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-2">{track.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Clock className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>{track.totalDuration || "8+ hours"}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>{track.modules.length} modules</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {track.instructor?.avatar && (
                      <img 
                        src={track.instructor.avatar} 
                        alt={track.instructor.name} 
                        className="w-8 h-8 rounded-full mr-2 object-cover" 
                      />
                    )}
                    <div>
                      <p className="text-white text-sm">{track.instructor?.name || "Expert Instructor"}</p>
                      <p className="text-xs text-gray-500">{track.instructor?.title || "Senior Developer"}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                    View Track
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="frontend" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTracks.filter(track => track.id === "frontend-development").map((track) => (
              <div 
                key={track.id}
                className="bg-gray-800/50 p-6 rounded-lg border border-white/10 hover:border-[#95FF66]/30 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/track/${track.id}`)}
              >
                {/* Same content as above */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#95FF66] transition-colors">
                  {track.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-2">{track.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Clock className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>{track.totalDuration || "8+ hours"}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>{track.modules.length} modules</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {track.instructor?.avatar && (
                      <img 
                        src={track.instructor.avatar} 
                        alt={track.instructor.name} 
                        className="w-8 h-8 rounded-full mr-2 object-cover" 
                      />
                    )}
                    <div>
                      <p className="text-white text-sm">{track.instructor?.name || "Expert Instructor"}</p>
                      <p className="text-xs text-gray-500">{track.instructor?.title || "Senior Developer"}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                    View Track
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="backend" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTracks.filter(track => track.id === "backend-development").map((track) => (
              <div 
                key={track.id}
                className="bg-gray-800/50 p-6 rounded-lg border border-white/10 hover:border-[#95FF66]/30 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/track/${track.id}`)}
              >
                {/* Same content as above */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#95FF66] transition-colors">
                  {track.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-2">{track.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Clock className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>{track.totalDuration || "8+ hours"}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>{track.modules.length} modules</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {track.instructor?.avatar && (
                      <img 
                        src={track.instructor.avatar} 
                        alt={track.instructor.name} 
                        className="w-8 h-8 rounded-full mr-2 object-cover" 
                      />
                    )}
                    <div>
                      <p className="text-white text-sm">{track.instructor?.name || "Expert Instructor"}</p>
                      <p className="text-xs text-gray-500">{track.instructor?.title || "Senior Developer"}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                    View Track
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="fullstack" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTracks.filter(track => track.id === "full-stack").map((track) => (
              <div 
                key={track.id}
                className="bg-gray-800/50 p-6 rounded-lg border border-white/10 hover:border-[#95FF66]/30 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/track/${track.id}`)}
              >
                {/* Same content as above */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#95FF66] transition-colors">
                  {track.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-2">{track.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Clock className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>{track.totalDuration || "8+ hours"}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>{track.modules.length} modules</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {track.instructor?.avatar && (
                      <img 
                        src={track.instructor.avatar} 
                        alt={track.instructor.name} 
                        className="w-8 h-8 rounded-full mr-2 object-cover" 
                      />
                    )}
                    <div>
                      <p className="text-white text-sm">{track.instructor?.name || "Expert Instructor"}</p>
                      <p className="text-xs text-gray-500">{track.instructor?.title || "Senior Developer"}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                    View Track
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </section>

      {/* Featured Courses section */}
      <section className="mb-12 reveal-on-scroll opacity-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Award className="mr-2 h-5 w-5 text-[#95FF66]" />
            Featured Courses
          </h2>
          <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <div 
              key={course.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-white/10 hover:border-[#95FF66]/30 transition-all duration-300 group hover:translate-y-[-5px]"
              onClick={() => navigate(`/module/${course.id}`)}
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-2 right-2 bg-black/60 text-[#95FF66] text-xs py-1 px-2 rounded-full flex items-center">
                  <Star className="h-3 w-3 mr-1 fill-[#95FF66] text-[#95FF66]" />
                  {course.rating}
                </div>
              </div>
              
              <div className="p-5">
                <div className="text-xs text-[#95FF66] mb-2">{course.track}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#95FF66] transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Users className="h-3.5 w-3.5 mr-1 text-gray-500" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-3.5 w-3.5 mr-1 text-gray-500" />
                    <span>{course.modules} modules</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="w-2/3">
                    <div className="text-xs text-gray-400 mb-1">Course completion</div>
                    <Progress value={course.progress} className="h-1.5 bg-gray-700" indicatorClassName="bg-[#95FF66]" />
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                    Start
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Challenges section */}
      <section className="mb-12 reveal-on-scroll opacity-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Zap className="mr-2 h-5 w-5 text-[#95FF66]" />
            Daily Challenges
          </h2>
          <Button variant="educational" size="sm" onClick={() => navigate('/challenges')}>
            <Trophy className="mr-2 h-4 w-4" />
            View All Challenges
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dailyChallenges.map((challenge) => (
            <div 
              key={challenge.id}
              className="bg-gray-800/50 rounded-lg p-5 border border-white/10 hover:border-[#95FF66]/30 transition-all duration-300 cursor-pointer hover:bg-gray-800/80"
              onClick={() => navigate(`/challenge/${challenge.id}`)}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-medium text-white">{challenge.title}</h3>
                <Badge className={
                  challenge.difficulty === "Easy" ? "bg-green-500/20 text-green-400 hover:bg-green-500/30" : 
                  challenge.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30" :
                  "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                }>
                  {challenge.difficulty}
                </Badge>
              </div>
              
              <div className="flex justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center">
                  <Timer className="h-3.5 w-3.5 mr-1.5" />
                  <span>{challenge.timeEstimate}</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-3.5 w-3.5 mr-1.5 text-[#95FF66]" />
                  <span className="text-[#95FF66]">{challenge.points} XP</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full border-white/10 hover:bg-white/5">
                Start Challenge
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Community & Study Groups */}
      <section className="mb-12 reveal-on-scroll opacity-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Users className="mr-2 h-5 w-5 text-[#95FF66]" />
            Study Groups
          </h2>
          <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
            Find More Groups
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studyGroups.map((group) => (
            <div 
              key={group.id}
              className="bg-gray-800/50 rounded-lg p-5 border border-white/10 hover:border-[#95FF66]/30 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/study-group/${group.id}`)}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">{group.title}</h3>
                  <p className="text-sm text-gray-400">{group.topic}</p>
                </div>
                <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join
                </Button>
              </div>
              
              <div className="flex justify-between text-sm text-gray-400 mt-4">
                <div className="flex items-center">
                  <Users className="h-3.5 w-3.5 mr-1.5" />
                  <span>{group.members} members</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1.5" />
                  <span>{group.meetingTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Topics */}
      <section className="mb-12 reveal-on-scroll opacity-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <TrendingUp className="mr-2 h-5 w-5 text-[#95FF66]" />
            Trending Topics
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {["React", "TypeScript", "CSS Grid", "Next.js", "Node.js", "GraphQL", "Tailwind CSS", "JavaScript", "Redux", "Responsive Design"].map((topic) => (
            <Badge 
              key={topic}
              className="bg-gray-800/50 hover:bg-gray-700 text-white border-white/10 hover:border-[#95FF66]/30 py-2 px-3 text-sm cursor-pointer"
              onClick={() => setSearchQuery(topic)}
            >
              {topic}
            </Badge>
          ))}
        </div>
      </section>

      {/* Learning Resources */}
      <section className="reveal-on-scroll opacity-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Heart className="mr-2 h-5 w-5 text-[#95FF66]" />
            Additional Resources
          </h2>
        </div>

        <div className="glass rounded-lg border border-white/10 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              <h3 className="text-lg font-medium text-white mb-2">Documentation Library</h3>
              <p className="text-sm text-gray-400 mb-3">Access comprehensive documentation for all technologies covered in our courses.</p>
              <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                Browse Docs
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              <h3 className="text-lg font-medium text-white mb-2">Code Repository</h3>
              <p className="text-sm text-gray-400 mb-3">Clone project templates and example code to jumpstart your learning.</p>
              <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                View Repos
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              <h3 className="text-lg font-medium text-white mb-2">Community Forums</h3>
              <p className="text-sm text-gray-400 mb-3">Discuss topics with other learners and get answers to your questions.</p>
              <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                Join Discussion
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
