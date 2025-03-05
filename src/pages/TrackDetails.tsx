import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { tracks } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Plus, 
  CheckCircle, 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  UserCircle, 
  Star, 
  Award,
  ChevronRight,
  Sparkles,
  Trophy,
  Bookmark,
  BadgeCheck,
  Share2,
  PenSquare,
  Zap,
  Heart,
  Eye,
  Download,
  Flame,
  Gift,
  Medal,
  Bell,
  Cpu,
  Code,
  Layers,
  Layout,
  Palette,
  Lightbulb,
  Rocket,
  MessageSquare,
  Users,
  Check,
  Coffee,
  Brain,
  Briefcase
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { FrontendRoadmap } from "@/components/FrontendRoadmap";
import { LearningJourney } from "@/components/LearningJourney";
import { ProgressStats } from "@/components/ProgressStats";
import { CareerPathSection } from "@/components/CareerPathSection";

const TrackDetails = () => {
  const { trackId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const track = tracks.find((track) => track.id === trackId);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [activeSection, setActiveSection] = useState("modules");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [trackId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [trackId]);

  if (!track) {
    return <div className="container mx-auto py-8">Track not found</div>;
  }

  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [expandedModules, setExpandedModules] = useState<string[]>([]);
  const [bookmarkedModules, setBookmarkedModules] = useState<string[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [likedModules, setLikedModules] = useState<string[]>([]);
  const [showResources, setShowResources] = useState(false);
  const [activeTab, setActiveTab] = useState("modules");
  const [showCertificate, setShowCertificate] = useState(false);

  const handleCompleteModule = (moduleId: string) => {
    setCompletedModules((prev) => {
      if (prev.includes(moduleId)) {
        return prev.filter((id) => id !== moduleId);
      } else {
        setNotification(`Module marked as complete!`);
        setTimeout(() => setNotification(null), 3000);
        return [...prev, moduleId];
      }
    });
  };

  const isModuleCompleted = (moduleId: string) => {
    return completedModules.includes(moduleId);
  };

  const handleReviewModule = (moduleId: string) => {
    navigate(`/module/${moduleId}`);
  };

  const toggleExpandModule = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const toggleBookmarkModule = (moduleId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setBookmarkedModules(prev => {
      if (prev.includes(moduleId)) {
        return prev.filter(id => id !== moduleId);
      } else {
        setNotification(`Module bookmarked!`);
        setTimeout(() => setNotification(null), 3000);
        return [...prev, moduleId];
      }
    });
  };

  const isModuleBookmarked = (moduleId: string) => {
    return bookmarkedModules.includes(moduleId);
  };

  const toggleLikeModule = (moduleId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setLikedModules(prev => {
      if (prev.includes(moduleId)) {
        return prev.filter(id => id !== moduleId);
      } else {
        setNotification(`You liked this module!`);
        setTimeout(() => setNotification(null), 3000);
        return [...prev, moduleId];
      }
    });
  };

  const isModuleLiked = (moduleId: string) => {
    return likedModules.includes(moduleId);
  };

  const getProgressPercentage = () => {
    return track.modules.length > 0 
      ? Math.round((completedModules.length / track.modules.length) * 100) 
      : 0;
  };

  const filteredModules = track.modules.filter(module => 
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleScrollToContent = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowRoadmap = () => {
    setShowRoadmap(true);
  };

  const handleModuleAction = (action: string, moduleId: string) => {
    const actions = {
      'bookmark': () => toggleBookmarkModule(moduleId, new Event('click') as any),
      'like': () => toggleLikeModule(moduleId, new Event('click') as any),
      'complete': () => handleCompleteModule(moduleId),
      'review': () => handleReviewModule(moduleId)
    };
    
    if (actions[action]) {
      actions[action]();
    }
    
    toast({
      title: `Module ${action}d!`,
      description: "Your progress has been updated.",
      variant: "default",
    });
  };

  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/learn")}
        className="flex items-center hover:bg-white/5 transition-colors mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Learning Tracks
      </Button>
      
      {isLoading ? (
        <div className="space-y-4">
          <div className="h-8 w-48 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 w-full max-w-md bg-gray-700 rounded animate-pulse"></div>
          <div className="h-64 bg-gray-800/50 rounded-lg animate-pulse mt-6"></div>
        </div>
      ) : (
        <>
          <div className="glass p-6 rounded-lg mb-8 backdrop-blur-md border border-white/10 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#95FF66]/10 rounded-full filter blur-3xl animate-[pulse_15s_ease-in-out_infinite]"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#7366ff]/10 rounded-full filter blur-3xl animate-[pulse_20s_ease-in-out_infinite]"></div>
            
            <div className="absolute top-10 right-10 animate-[float_8s_ease-in-out_infinite]">
              <Code className="h-6 w-6 text-[#95FF66]/40" />
            </div>
            <div className="absolute bottom-10 right-20 animate-[float_12s_ease-in-out_infinite]">
              <Layout className="h-5 w-5 text-[#7366ff]/40" />
            </div>
            <div className="absolute top-20 left-10 animate-[float_10s_ease-in-out_infinite]">
              <Layers className="h-4 w-4 text-[#FF66A6]/40" />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
              <div>
                <div className="flex items-center mb-2">
                  <h1 className="text-3xl font-bold text-white mr-2">{track.title}</h1>
                  <span className="text-xs bg-[#95FF66]/20 text-[#95FF66] px-2 py-1 rounded-full flex items-center">
                    <Zap className="h-3 w-3 mr-1" />
                    Popular
                  </span>
                  <span className="ml-2 text-xs bg-[#FF66A6]/20 text-[#FF66A6] px-2 py-1 rounded-full flex items-center">
                    <Rocket className="h-3 w-3 mr-1" />
                    Trending
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4">{track.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-4 animate-stagger">
                  <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full hover-scale">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>
                      {track.totalDuration || `${track.modules.length * 2} hours`}
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full hover-scale">
                    <BookOpen className="h-3 w-3 mr-1" />
                    <span>
                      {track.modules.length} Modules
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full hover-scale">
                    <UserCircle className="h-3 w-3 mr-1" />
                    <span>
                      156 Enrolled
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-[#95FF66] bg-[#95FF66]/10 px-3 py-1 rounded-full hover-scale">
                    <Star className="h-3 w-3 mr-1 fill-[#95FF66]" />
                    <span>
                      Recommended
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-[#FF66A6] bg-[#FF66A6]/10 px-3 py-1 rounded-full hover-scale">
                    <Flame className="h-3 w-3 mr-1" />
                    <span>
                      Hot
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-[#7366ff] bg-[#7366ff]/10 px-3 py-1 rounded-full hover-scale">
                    <BadgeCheck className="h-3 w-3 mr-1" />
                    <span>
                      Certified
                    </span>
                  </div>
                </div>
                
                {track.skillLevel && (
                  <div className="text-sm text-white/80 mb-2">
                    <span className="font-medium">Skill Level:</span> {track.skillLevel}
                  </div>
                )}
                
                {track.prerequisites && track.prerequisites.length > 0 && (
                  <div className="text-sm text-white/80 mb-4">
                    <span className="font-medium">Prerequisites:</span>
                    <ul className="list-disc list-inside ml-2 mt-1 text-gray-400">
                      {track.prerequisites.map((prereq, index) => (
                        <li key={index} className="text-xs">{prereq}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-3 mt-4">
                  <Button onClick={handleScrollToContent} variant="educational" className="group">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Start Learning</span>
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" onClick={handleShowRoadmap} className="border-white/10 hover:bg-white/5 text-white/80">
                    <Cpu className="mr-2 h-4 w-4" />
                    View Roadmap
                  </Button>
                </div>
              </div>
              
              <div className="shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#95FF66]/20 text-[#95FF66] font-bold text-xl relative">
                    <svg className="w-16 h-16 absolute top-0 left-0 transform -rotate-90 course-completion-ring">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        stroke="#222836"
                        strokeWidth="4"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        stroke="#95FF66"
                        strokeWidth="4"
                        strokeDasharray={2 * Math.PI * 28}
                        strokeDashoffset={2 * Math.PI * 28 * (1 - getProgressPercentage() / 100)}
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <span className="relative z-10">{getProgressPercentage()}%</span>
                  </div>
                  <div className="text-sm">
                    <div className="text-white">Your Progress</div>
                    <div className="text-gray-400">{completedModules.length}/{track.modules.length} completed</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mt-4">
              <div
                className="bg-gradient-to-r from-[#4CAF50] to-[#95FF66] h-full transition-all duration-1000 ease-out"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-white/80 hover-scale">
                <Download className="mr-2 h-4 w-4" />
                Resources
              </Button>
              <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-white/80 hover-scale">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-[#95FF66]/30 text-[#95FF66] hover:bg-[#95FF66]/10 hover-scale"
              >
                <Medal className="mr-2 h-4 w-4" />
                Certificate
              </Button>
              <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-white/80 ml-auto hover-scale">
                <Bell className="mr-2 h-4 w-4" />
                Notify
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <ProgressStats 
              completedModules={completedModules.length} 
              totalModules={track.modules.length} 
              estimatedCompletionTime={track.modules.length * 2 - completedModules.length * 2}
            />
          </div>
          
          <CareerPathSection />
          
          {showRoadmap && (
            <div className="glass p-6 rounded-lg mb-8 border border-white/10 overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Cpu className="mr-2 h-5 w-5 text-[#95FF66]" />
                  Frontend Development Roadmap
                </h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white/70"
                  onClick={() => setShowRoadmap(false)}
                >
                  Hide Roadmap
                </Button>
              </div>
              <FrontendRoadmap completedModules={completedModules} />
            </div>
          )}
          
          <div className="glass p-6 rounded-lg mb-8 border border-white/10 overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Rocket className="mr-2 h-5 w-5 text-[#95FF66]" />
                Your Learning Journey
              </h2>
            </div>
            <LearningJourney modules={track.modules} completedModules={completedModules} />
          </div>
          
          <div ref={scrollRef} className="mb-6">
            <Tabs defaultValue={activeSection} value={activeSection} onValueChange={setActiveSection} className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-[#95FF66]" />
                  Course Content
                </h2>
                <TabsList className="bg-gray-800/70 p-1">
                  <TabsTrigger 
                    value="modules" 
                    className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Modules
                  </TabsTrigger>
                  <TabsTrigger 
                    value="resources" 
                    className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Resources
                  </TabsTrigger>
                  <TabsTrigger 
                    value="community" 
                    className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Community
                  </TabsTrigger>
                  <TabsTrigger 
                    value="notes" 
                    className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]"
                  >
                    <PenSquare className="h-4 w-4 mr-2" />
                    Notes
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="mb-6">
                <div className="relative">
                  <Input 
                    placeholder="Search modules..." 
                    className="bg-gray-800/30 border-gray-700 pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  {searchTerm && (
                    <Button 
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0" 
                      onClick={() => setSearchTerm("")}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </Button>
                  )}
                </div>
              </div>
              
              <TabsContent value="modules" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  {filteredModules.map((module, index) => (
                    <Card 
                      key={module.id}
                      className="bg-gray-800/20 border border-white/5 hover:border-[#95FF66]/20 transition-all duration-300 animate-fade-in hover:shadow-[0_0_15px_rgba(149,255,102,0.1)] overflow-hidden relative group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {isModuleCompleted(module.id) && (
                        <div className="absolute top-3 right-3 z-10">
                          <div className="bg-[#95FF66]/20 text-[#95FF66] px-2 py-1 rounded-full text-xs flex items-center">
                            <Check className="h-3 w-3 mr-1" />
                            Completed
                          </div>
                        </div>
                      )}
                      
                      {module.level && (
                        <div className="absolute top-3 left-3 z-10">
                          <div className={`px-2 py-1 rounded-full text-xs flex items-center ${
                            module.level === 'beginner' ? 'bg-blue-500/20 text-blue-400' :
                            module.level === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {module.level.charAt(0).toUpperCase() + module.level.slice(1)}
                          </div>
                        </div>
                      )}
                      
                      <CardHeader className="pt-12 pb-3">
                        <CardTitle className="text-white group-hover:text-[#95FF66] transition-colors">{module.title}</CardTitle>
                        <CardDescription className="line-clamp-2 mt-1">{module.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pb-3 text-sm text-gray-400">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {module.tags && module.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="text-xs bg-white/5 px-2 py-1 rounded-full hover:bg-white/10 transition-colors">
                              {tag}
                            </span>
                          ))}
                          {module.tags && module.tags.length > 3 && (
                            <span className="text-xs bg-white/5 px-2 py-1 rounded-full">
                              +{module.tags.length - 3}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{module.duration || "2 hours"}</span>
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-3 w-3 mr-1" />
                            <span>{module.topics || 6} topics</span>
                          </div>
                          {module.lastUpdated && (
                            <div>Updated {module.lastUpdated}</div>
                          )}
                        </div>
                      </CardContent>
                      
                      <CardFooter className="pt-3 pb-4 gap-2 flex-wrap border-t border-white/5">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-[#95FF66] border-[#95FF66]/30 hover:bg-[#95FF66]/10 grow group"
                          onClick={() => handleReviewModule(module.id)}
                        >
                          <Eye className="mr-1 h-3 w-3" />
                          View Module
                          <ChevronRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Button>
                        
                        <div className="flex gap-1">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className={`${isModuleBookmarked(module.id) ? 'text-[#95FF66] bg-[#95FF66]/10' : 'text-gray-400'} hover:text-[#95FF66] hover:bg-[#95FF66]/10 transition-colors`}
                            onClick={(e) => toggleBookmarkModule(module.id, e)}
                          >
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className={`${isModuleLiked(module.id) ? 'text-[#FF66A6] bg-[#FF66A6]/10' : 'text-gray-400'} hover:text-[#FF66A6] hover:bg-[#FF66A6]/10 transition-colors`}
                            onClick={(e) => toggleLikeModule(module.id, e)}
                          >
                            <Heart className={`h-4 w-4 ${isModuleLiked(module.id) ? 'fill-[#FF66A6]' : ''}`} />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                {filteredModules.length === 0 && (
                  <div className="glass p-8 rounded-lg text-center">
                    <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-gray-800/50 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </div>
                    <div className="text-white text-lg mb-2">No modules found matching "{searchTerm}"</div>
                    <div className="text-gray-400 mb-4">Try different keywords or check your spelling</div>
                    <Button variant="outline" onClick={() => setSearchTerm("")}>Clear Search</Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="resources" className="mt-0">
                <div className="glass p-6 rounded-lg animate-fade-in">
                  <div className="text-center mb-6">
                    <Download className="h-12 w-12 text-[#95FF66] mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-white">Course Resources</h3>
                    <p className="text-gray-400">Access all materials and downloads for this course</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { 
                        title: 'Frontend Cheat Sheets', 
                        description: 'Quick reference guides for HTML, CSS, JS and more',
                        icon: BookOpen,
                        bgColor: 'bg-blue-500/10',
                        iconColor: 'text-blue-400'
                      },
                      { 
                        title: 'Code Examples', 
                        description: 'Example projects and snippets for all modules',
                        icon: Code,
                        bgColor: 'bg-[#95FF66]/10',
                        iconColor: 'text-[#95FF66]'
                      },
                      { 
                        title: 'Design Assets', 
                        description: 'UI components, icons, and design templates',
                        icon: Palette,
                        bgColor: 'bg-purple-500/10',
                        iconColor: 'text-purple-400'
                      },
                      { 
                        title: 'Exercise Files', 
                        description: 'Practice exercises for each module',
                        icon: Layers,
                        bgColor: 'bg-orange-500/10',
                        iconColor: 'text-orange-400'
                      },
                      { 
                        title: 'Interview Questions', 
                        description: 'Common frontend interview questions and answers',
                        icon: MessageSquare,
                        bgColor: 'bg-red-500/10',
                        iconColor: 'text-red-400'
                      },
                      { 
                        title: 'Reading List', 
                        description: 'Books and articles for deeper understanding',
                        icon: BookOpen,
                        bgColor: 'bg-teal-500/10',
                        iconColor: 'text-teal-400'
                      }
                    ].map((resource, idx) => (
                      <Card key={idx} className="bg-gray-800/50 border border-white/5 hover:border-[#95FF66]/20 transition-colors hover-scale">
                        <CardHeader className="pb-2">
                          <div className="flex items-start gap-3">
                            <div className={`${resource.bgColor} p-2 rounded-md ${resource.iconColor}`}>
                              <resource.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <CardTitle className="text-sm font-medium">{resource.title}</CardTitle>
                              <CardDescription className="text-xs">{resource.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardFooter>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-[#95FF66] hover:bg-[#95FF66]/10 w-full justify-start"
                          >
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="community" className="mt-0">
                <div className="glass p-6 rounded-lg animate-fade-in">
                  <div className="text-center mb-6">
                    <Users className="h-12 w-12 text-[#95FF66] mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-white">Community</h3>
                    <p className="text-gray-400">Connect with other learners and mentors</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass border border-white/10 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-white mb-3 flex items-center">
                        <MessageSquare className="h-5 w-5 mr-2 text-[#95FF66]" />
                        Discussion Forums
                      </h4>
                      <p className="text-sm text-gray-400 mb-3">
                        Join conversations about specific topics, ask questions, and share your insights.
                      </p>
                      <div className="space-y-2 mb-4">
                        {[
                          { topic: "React Hooks Best Practices", replies: 24, views: 152 },
                          { topic: "CSS Grid vs Flexbox", replies: 36, views: 209 },
                          { topic: "JavaScript Performance Tips", replies: 18, views: 97 }
                        ].map((item, i) => (
                          <div key={i} className="bg-black/20 p-2 rounded flex justify-between items-center text-sm">
                            <span className="text-white/80">{item.topic}</span>
                            <div className="text-xs text-gray-500">
                              <span>{item.replies} replies</span>
                              <span className="mx-1">•</span>
                              <span>{item.views} views</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full" variant="outline">
                        Browse All Discussions
                      </Button>
                    </div>
                    
                    <div className="glass border border-white/10 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-white mb-3 flex items-center">
                        <Lightbulb className="h-5 w-5 mr-2 text-[#95FF66]" />
                        Study Groups
                      </h4>
                      <p className="text-sm text-gray-400 mb-3">
                        Join or create a study group to learn together with peers.
                      </p>
                      <div className="space-y-2 mb-4">
                        {[
                          { name: "Frontend Interview Prep", members: 12, active: true },
                          { name: "React Project Collab", members: 8, active: true },
                          { name: "CSS Animation Workshop", members: 15, active: false }
                        ].map((group, i) => (
                          <div key={i} className="bg-black/20 p-2 rounded flex justify-between items-center text-sm">
                            <div>
                              <span className="text-white/80">{group.name}</span>
                              {group.active && (
                                <span className="ml-2 text-xs bg-[#95FF66]/20 text-[#95FF66] px-1.5 py-0.5 rounded-full">
                                  Active
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-gray-500">
                              <span>{group.members} members</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full" variant="outline">
                        Find a Study Group
                      </Button>
                    </div>
                    
                    <div className="glass border border-white/10 p-4 rounded-lg md:col-span-2">
                      <h4 className="text-lg font-medium text-white mb-3 flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-[#95FF66]" />
                        Top Contributors
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 mb-2" />
                            <span className="text-white/80 text-sm">User {i + 1}</span>
                            <span className="text-xs text-[#95FF66]">{100 - i * 10} points</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="notes" className="mt-0">
                <div className="glass p-6 rounded-lg animate-fade-in">
                  <div className="text-center mb-6">
                    <PenSquare className="h-12 w-12 text-[#95FF66] mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-white">Your Notes</h3>
                    <p className="text-gray-400">Keep track of important concepts and ideas</p>
                  </div>
                  <div className="text-center text-gray-500 p-10 border border-dashed border-gray-700 rounded-lg">
                    <p>You haven't made any notes for this track yet.</p>
                    <Button variant="outline" className="mt-4">
                      <PenSquare className="mr-2 h-4 w-4" />
                      Create New Note
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </>
      )}
    </div>
  );
};

export default TrackDetails;
