
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
  ChevronRight
} from "lucide-react";

const TrackDetails = () => {
  const { trackId } = useParams();
  const navigate = useNavigate();
  const track = tracks.find((track) => track.id === trackId);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleCompleteModule = (moduleId: string) => {
    setCompletedModules((prev) => {
      if (prev.includes(moduleId)) {
        return prev.filter((id) => id !== moduleId);
      } else {
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

  const getProgressPercentage = () => {
    return track.modules.length > 0 
      ? Math.round((completedModules.length / track.modules.length) * 100) 
      : 0;
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
          {/* Track Header with Progress Bar */}
          <div className="glass p-6 rounded-lg mb-8 backdrop-blur-md border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{track.title}</h1>
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
                </div>
              </div>
              
              <div className="shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#95FF66]/20 text-[#95FF66] font-bold text-xl">
                    {getProgressPercentage()}%
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
          </div>
          
          {/* Top Learners Section */}
          <div className="glass p-4 rounded-lg mb-8 overflow-hidden">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-medium text-white flex items-center">
                <Award className="mr-2 h-5 w-5 text-[#95FF66]" />
                Top Learners
              </h2>
              <Button variant="ghost" size="sm" className="text-sm">View All</Button>
            </div>
            
            <div className="flex overflow-x-auto pb-2 gap-3 scrollbar-none">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="flex-shrink-0 flex flex-col items-center w-20">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mb-2 relative">
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#95FF66] rounded-full border-2 border-background"></div>
                  </div>
                  <span className="text-xs text-white truncate w-full text-center">User {index + 1}</span>
                  <span className="text-[10px] text-gray-400">{90 - index * 5}% complete</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Modules Accordion */}
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Course Modules</h2>
          
          <Accordion type="multiple" className="w-full space-y-4">
            {track.modules.map((module, index) => (
              <AccordionItem 
                key={module.id} 
                value={module.id}
                className={`glass backdrop-blur-md border-none rounded-lg overflow-hidden transition-all duration-300 animate-fade-in`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <AccordionTrigger className="flex justify-between py-4 px-6 hover:no-underline">
                  <div className="flex items-center">
                    {isModuleCompleted(module.id) ? (
                      <div className="w-8 h-8 flex items-center justify-center bg-[#95FF66]/20 rounded-full mr-3">
                        <CheckCircle className="h-5 w-5 text-[#95FF66]" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full mr-3">
                        <span className="text-white/70 text-sm">{index + 1}</span>
                      </div>
                    )}
                    <div className="text-left">
                      <h3 className="font-medium text-white">{module.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">2 hours • 6 topics</p>
                    </div>
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
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      )}
    </div>
  );
};

export default TrackDetails;
