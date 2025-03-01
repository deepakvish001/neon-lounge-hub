
import { useState, useEffect } from "react";
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
  Bell
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const TrackDetails = () => {
  const { trackId } = useParams();
  const navigate = useNavigate();
  const track = tracks.find((track) => track.id === trackId);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [trackId]);

  if (!track) {
    return <div>Track not found</div>;
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
        // Show notification
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
        // Show notification
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
        // Show notification
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

  const handleDownloadResources = () => {
    setNotification("Resources are being prepared for download!");
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCertificateClick = () => {
    setShowCertificate(true);
    setTimeout(() => setShowCertificate(false), 3000);
  };

  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/")}
        className="flex items-center hover:bg-white/5 transition-colors mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Tracks
      </Button>
      
      {isLoading ? (
        <div className="space-y-4">
          <div className="h-8 w-48 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 w-full max-w-md bg-gray-700 rounded animate-pulse"></div>
          <div className="h-64 bg-gray-800/50 rounded-lg animate-pulse mt-6"></div>
        </div>
      ) : (
        <>
          {/* Hero Section with Animated Background */}
          <div className="glass p-6 rounded-lg mb-8 backdrop-blur-md border border-white/10 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#95FF66]/10 rounded-full filter blur-3xl subtle-bg-animation"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#7366ff]/10 rounded-full filter blur-3xl subtle-bg-animation"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
                  {track.title}
                  <span className="ml-2 text-xs bg-[#95FF66]/20 text-[#95FF66] px-2 py-1 rounded-full flex items-center">
                    <Zap className="h-3 w-3 mr-1" />
                    Popular
                  </span>
                </h1>
                <p className="text-gray-400 mb-4">{track.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>
                      {track.modules.length * 2} hours
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full">
                    <BookOpen className="h-3 w-3 mr-1" />
                    <span>
                      {track.modules.length} Modules
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full">
                    <UserCircle className="h-3 w-3 mr-1" />
                    <span>
                      156 Enrolled
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-[#95FF66] bg-[#95FF66]/10 px-3 py-1 rounded-full">
                    <Star className="h-3 w-3 mr-1 fill-[#95FF66]" />
                    <span>
                      Recommended
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-[#FF66A6] bg-[#FF66A6]/10 px-3 py-1 rounded-full">
                    <Flame className="h-3 w-3 mr-1" />
                    <span>
                      Hot
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#95FF66]/20 text-[#95FF66] font-bold text-xl relative">
                    <svg className="w-16 h-16 absolute top-0 left-0 transform -rotate-90">
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
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-white/80">
                <Download className="mr-2 h-4 w-4" />
                Resources
              </Button>
              <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-white/80">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-[#95FF66]/30 text-[#95FF66] hover:bg-[#95FF66]/10"
                onClick={handleCertificateClick}
              >
                <Medal className="mr-2 h-4 w-4" />
                Certificate
              </Button>
              <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-white/80 ml-auto">
                <Bell className="mr-2 h-4 w-4" />
                Notify
              </Button>
            </div>
          </div>
          
          {/* Certificate Preview */}
          {showCertificate && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in p-4">
              <div className="bg-gray-900 border border-[#95FF66]/30 p-8 rounded-lg max-w-2xl w-full relative glass">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 hover:bg-white/10"
                  onClick={() => setShowCertificate(false)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-[#95FF66]">Certificate of Completion</h3>
                  <p className="text-gray-400 mb-6">Complete all modules to unlock your certificate</p>
                  <div className="border-4 border-dashed border-gray-700 p-6 rounded-lg bg-gray-800/50">
                    <div className="text-center">
                      <BadgeCheck className="mx-auto h-16 w-16 text-[#95FF66] mb-4" />
                      <h4 className="text-xl font-bold">Certificate Preview</h4>
                      <p className="text-gray-400 mt-2">This is how your certificate will look when you complete the track</p>
                      <div className="mt-6 bg-gray-700/30 h-32 rounded flex items-center justify-center">
                        <p className="text-gray-500">Certificate will be unlocked when all modules are completed</p>
                      </div>
                      <p className="mt-6 text-xs text-gray-500">Progress: {getProgressPercentage()}% Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Learning Path Overview */}
          <div className="glass p-4 rounded-lg mb-8 overflow-hidden border border-white/10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-white flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-[#95FF66]" />
                Learning Path
              </h2>
              <Button variant="ghost" size="sm" className="text-sm">View Detailed Path</Button>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-7 w-0.5 bg-gray-700"></div>
              <div className="space-y-6">
                {track.modules.map((module, index) => (
                  <div key={module.id} className="flex items-start relative animate-fade-in group" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className={`z-10 w-4 h-4 rounded-full ${
                      isModuleCompleted(module.id) 
                        ? "bg-[#95FF66]" 
                        : index === completedModules.length ? "bg-white pulse-glow" : "bg-gray-700"
                    } mt-1 relative`}>
                      {/* Animated pulse effect around the current module */}
                      {index === completedModules.length && (
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-full animate-ping"></span>
                      )}
                    </div>
                    <div className="ml-6 group-hover:translate-x-1 transition-transform duration-300">
                      <h3 className="text-sm font-medium text-white flex items-center">
                        {module.title}
                        {isModuleCompleted(module.id) && (
                          <CheckCircle className="ml-2 h-3 w-3 text-[#95FF66]" />
                        )}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">2 hours • 6 topics</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleReviewModule(module.id)}
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Top Learners Section */}
          <div className="glass p-4 rounded-lg mb-8 overflow-hidden border border-white/10">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-medium text-white flex items-center">
                <Award className="mr-2 h-5 w-5 text-[#95FF66]" />
                Top Learners
              </h2>
              <Button variant="ghost" size="sm" className="text-sm">View All</Button>
            </div>
            
            <div className="flex overflow-x-auto pb-2 gap-3 scrollbar-none">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="flex-shrink-0 flex flex-col items-center w-20 hover-scale">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mb-2 relative overflow-hidden">
                    {/* Simulated user avatar */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800`}></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#95FF66] rounded-full border-2 border-background z-10"></div>
                  </div>
                  <span className="text-xs text-white truncate w-full text-center">User {index + 1}</span>
                  <span className="text-[10px] text-gray-400">{90 - index * 5}% complete</span>
                  
                  <div className="mt-1 flex items-center">
                    <span className="text-[10px] text-[#95FF66] flex items-center">
                      <Trophy className="h-2 w-2 mr-0.5" />
                      #{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements Section */}
          <div className="glass p-4 rounded-lg mb-8 overflow-hidden border border-white/10">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-medium text-white flex items-center">
                <BadgeCheck className="mr-2 h-5 w-5 text-[#95FF66]" />
                Achievements
              </h2>
              <Button variant="ghost" size="sm" className="text-sm">View All</Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: 'Fast Learner', icon: Zap },
                { title: 'Code Explorer', icon: BookOpen },
                { title: 'Problem Solver', icon: Sparkles },
                { title: 'Dedicated Student', icon: Medal }
              ].map((achievement, index) => (
                <div key={index} className={`p-3 rounded-lg flex flex-col items-center ${
                  index < completedModules.length ? 'bg-[#95FF66]/10 border border-[#95FF66]/20' : 'bg-white/5 border border-white/10 opacity-50'
                } hover-scale relative overflow-hidden`}>
                  {/* Background decoration */}
                  {index < completedModules.length && (
                    <div className="absolute -right-8 -bottom-8 w-16 h-16 bg-[#95FF66]/5 rounded-full"></div>
                  )}
                  
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${
                    index < completedModules.length ? 'bg-[#95FF66]/20 text-[#95FF66]' : 'bg-white/10 text-white/30'
                  }`}>
                    <achievement.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-center font-medium relative z-10">{achievement.title}</span>
                  
                  {index < completedModules.length && (
                    <span className="absolute top-1 right-1 text-[8px] bg-[#95FF66]/20 text-[#95FF66] px-1.5 py-0.5 rounded-full">
                      Earned
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Modules Section with Tabs */}
          <div className="mb-6">
            <Tabs defaultValue="modules" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Course Content</h2>
                <TabsList className="bg-gray-800/70">
                  <TabsTrigger value="modules" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Modules
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
                    <Download className="h-4 w-4 mr-2" />
                    Resources
                  </TabsTrigger>
                  <TabsTrigger value="notes" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
                    <PenSquare className="h-4 w-4 mr-2" />
                    Notes
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="mb-4">
                <Input 
                  placeholder="Search modules..." 
                  className="bg-gray-800/30 border-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <TabsContent value="modules" className="mt-0">
                {/* Modules Accordion */}
                <Accordion type="multiple" className="w-full space-y-4">
                  {filteredModules.map((module, index) => (
                    <AccordionItem 
                      key={module.id} 
                      value={module.id}
                      className={`glass backdrop-blur-md border-none rounded-lg overflow-hidden transition-all duration-300 animate-fade-in hover:shadow-[0_0_15px_rgba(149,255,102,0.1)]`}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <AccordionTrigger className="flex justify-between py-4 px-6 hover:no-underline group">
                        <div className="flex items-center">
                          {isModuleCompleted(module.id) ? (
                            <div className="w-8 h-8 flex items-center justify-center bg-[#95FF66]/20 rounded-full mr-3 group-hover:scale-110 transition-transform">
                              <CheckCircle className="h-5 w-5 text-[#95FF66]" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full mr-3 group-hover:scale-110 transition-transform">
                              <span className="text-white/70 text-sm">{index + 1}</span>
                            </div>
                          )}
                          <div className="text-left">
                            <h3 className="font-medium text-white">{module.title}</h3>
                            <p className="text-xs text-gray-400 mt-1">2 hours • 6 topics</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className={`mr-2 ${isModuleBookmarked(module.id) ? 'text-[#95FF66]' : 'text-gray-400'} transition-colors`}
                            onClick={(e) => toggleBookmarkModule(module.id, e)}
                          >
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className={`mr-2 ${isModuleLiked(module.id) ? 'text-[#FF66A6]' : 'text-gray-400'} transition-colors`}
                            onClick={(e) => toggleLikeModule(module.id, e)}
                          >
                            <Heart className={`h-4 w-4 ${isModuleLiked(module.id) ? 'fill-[#FF66A6]' : ''}`} />
                          </Button>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-0">
                        <p className="mb-4 text-gray-400">{module.description}</p>
                        
                        <div className="mb-4 space-y-2">
                          <div className="flex items-center text-sm text-white">
                            <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
                            <span>Interactive tutorials and lessons</span>
                          </div>
                          <div className="flex items-center text-sm text-white">
                            <CheckCircle className="h-4 w-4 mr-2 text-gray-500" />
                            <span>Hands-on exercises and challenges</span>
                          </div>
                          <div className="flex items-center text-sm text-white">
                            <Download className="h-4 w-4 mr-2 text-gray-500" />
                            <span>Downloadable resources and code examples</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          <Button
                            onClick={() => handleCompleteModule(module.id)}
                            variant="secondary"
                            className="group"
                          >
                            {isModuleCompleted(module.id) ? (
                              <>
                                <CheckCircle className="mr-2 h-4 w-4 text-[#95FF66] group-hover:text-white transition-colors" /> 
                                Mark Incomplete
                              </>
                            ) : (
                              <>
                                <CheckCircle className="mr-2 h-4 w-4" /> 
                                Complete
                              </>
                            )}
                          </Button>
                          <Button 
                            variant="outline" 
                            className="text-[#95FF66] border-[#95FF66] hover:bg-[#95FF66]/10 group"
                            onClick={() => handleReviewModule(module.id)}
                          >
                            <BookOpen className="mr-2 h-4 w-4" />
                            <span>Review Module</span>
                            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            className="text-white/70 hover:text-white"
                          >
                            <Share2 className="mr-2 h-4 w-4" />
                            <span>Share</span>
                          </Button>
                          <Button 
                            variant="ghost" 
                            className="text-white/70 hover:text-white"
                          >
                            <PenSquare className="mr-2 h-4 w-4" />
                            <span>Take Notes</span>
                          </Button>
                          <Button 
                            variant="ghost" 
                            className="text-white/70 hover:text-white"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            <span>Download</span>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="resources" className="mt-0">
                <div className="glass p-6 rounded-lg">
                  <div className="text-center mb-6">
                    <Download className="h-12 w-12 text-[#95FF66] mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-white">Course Resources</h3>
                    <p className="text-gray-400">Access all materials and downloads for this course</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Cheat Sheets', 'Code Examples', 'Design Assets', 'Project Files'].map((resource, idx) => (
                      <Card key={idx} className="bg-gray-800/50 border border-white/5 hover:border-[#95FF66]/20 transition-colors">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-[#95FF66]" />
                            {resource}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs text-gray-400">
                          <p>Essential resources for your learning journey</p>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-[#95FF66] hover:bg-[#95FF66]/10"
                            onClick={handleDownloadResources}
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
              
              <TabsContent value="notes" className="mt-0">
                <div className="glass p-6 rounded-lg">
                  <div className="text-center mb-6">
                    <PenSquare className="h-12 w-12 text-[#95FF66] mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-white">Your Notes</h3>
                    <p className="text-gray-400">Keep track of important concepts</p>
                  </div>
                  
                  <div className="bg-gray-800/50 border border-white/5 p-4 rounded-lg mb-4">
                    <p className="text-gray-300 italic">You haven't created any notes yet.</p>
                  </div>
                  
                  <Button className="w-full">
                    <PenSquare className="h-4 w-4 mr-2" />
                    Create New Note
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* New Recommended Section */}
          <div className="glass p-6 rounded-lg mb-8 border border-white/10">
            <h2 className="text-lg font-medium text-white flex items-center mb-4">
              <Gift className="mr-2 h-5 w-5 text-[#95FF66]" />
              Recommended Next Steps
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gray-800/30 border border-white/5 hover:border-[#95FF66]/20 transition-colors overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#95FF66]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#95FF66]/10 transition-colors"></div>
                
                <CardHeader>
                  <CardTitle className="text-sm">Continue Your Learning</CardTitle>
                  <CardDescription>Resume where you left off</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-gray-400">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                      <BookOpen className="h-4 w-4 text-[#95FF66]" />
                    </div>
                    <div>
                      <p className="text-white text-sm">{track.modules[completedModules.length]?.title}</p>
                      <p className="text-xs">Next module in sequence</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-[#95FF66] hover:bg-[#95FF66]/10 group w-full justify-start"
                    onClick={() => handleReviewModule(track.modules[completedModules.length]?.id)}
                  >
                    <span>Continue Learning</span>
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-gray-800/30 border border-white/5 hover:border-[#95FF66]/20 transition-colors overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#95FF66]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#95FF66]/10 transition-colors"></div>
                
                <CardHeader>
                  <CardTitle className="text-sm">Join the Community</CardTitle>
                  <CardDescription>Connect with fellow learners</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-gray-400">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                      <UserCircle className="h-4 w-4 text-[#95FF66]" />
                    </div>
                    <div>
                      <p className="text-white text-sm">Developer Community</p>
                      <p className="text-xs">150+ active members</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10 group w-full justify-start">
                    <span>Join Now</span>
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          
          {/* Notification Toast */}
          {notification && (
            <div className="fixed bottom-4 right-4 bg-[#95FF66] text-black px-4 py-2 rounded-md shadow-lg animate-fade-in z-50">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                {notification}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TrackDetails;
