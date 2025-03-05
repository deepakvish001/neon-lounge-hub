
import React from 'react';
import { Clock, Award, CheckCircle, Star, ChevronRight, Bookmark, Coffee, Brain, BookOpen, Zap, Trophy } from 'lucide-react';
import { Module } from '@/constants';
import { Button } from '@/components/ui/button';

interface LearningJourneyProps {
  modules: Module[];
  completedModules: string[];
}

export const LearningJourney: React.FC<LearningJourneyProps> = ({ modules, completedModules }) => {
  // Determine the next module to study
  const nextModuleIndex = modules.findIndex(module => !completedModules.includes(module.id));
  const nextModule = nextModuleIndex >= 0 ? modules[nextModuleIndex] : null;
  
  // Calculate overall progress
  const progressPercentage = modules.length > 0 
    ? Math.round((completedModules.length / modules.length) * 100) 
    : 0;

  // Calculate estimated time to complete the track
  const estimatedRemainingHours = (modules.length - completedModules.length) * 2;
  
  // Milestones based on progress
  const milestones = [
    { threshold: 0, title: "Beginning Your Journey", icon: Coffee, achieved: true },
    { threshold: 20, title: "Building Foundations", icon: Brain, achieved: progressPercentage >= 20 },
    { threshold: 50, title: "Halfway Champion", icon: Star, achieved: progressPercentage >= 50 },
    { threshold: 75, title: "Advanced Skills Unlocked", icon: Award, achieved: progressPercentage >= 75 },
    { threshold: 100, title: "Master Developer", icon: CheckCircle, achieved: progressPercentage >= 100 }
  ];
  
  // Find current milestone
  const currentMilestone = [...milestones].reverse().find(milestone => milestone.achieved);
  
  // Find next milestone
  const nextMilestone = milestones.find(milestone => !milestone.achieved);

  return (
    <div className="space-y-6">
      {/* Current Progress with improved alignment and animations */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Progress Circle with enhanced animation */}
        <div className="relative flex-shrink-0 animate-[pulse_4s_ease-in-out_infinite]">
          <div className="w-28 h-28 flex items-center justify-center rounded-full bg-[#95FF66]/10 text-[#95FF66] font-bold text-2xl relative">
            <svg className="w-28 h-28 absolute top-0 left-0 transform -rotate-90 course-completion-ring">
              <circle
                cx="56"
                cy="56"
                r="52"
                fill="none"
                stroke="#222836"
                strokeWidth="6"
              />
              <circle
                cx="56"
                cy="56"
                r="52"
                fill="none"
                stroke="#95FF66"
                strokeWidth="6"
                strokeDasharray={2 * Math.PI * 52}
                strokeDashoffset={2 * Math.PI * 52 * (1 - progressPercentage / 100)}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <span className="relative z-10 text-3xl">{progressPercentage}%</span>
          </div>
          
          {/* Radial decorations with pulsing effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-[#95FF66]/20 animate-[pulse_3s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-[#95FF66]/10 animate-[pulse_4s_ease-in-out_infinite]"></div>
        </div>
        
        <div className="flex-grow space-y-4 text-center md:text-left">
          {/* Current Status with enhanced visuals */}
          {currentMilestone && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-center md:justify-start mb-2">
                <div className="bg-[#95FF66]/20 p-3 rounded-full text-[#95FF66] mr-3">
                  <currentMilestone.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-medium">{currentMilestone.title}</h3>
                  <p className="text-gray-400 text-sm">
                    You've completed {completedModules.length} out of {modules.length} modules.
                    {estimatedRemainingHours > 0 && ` About ${estimatedRemainingHours} hours to go!`}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Next Module Card - Redesigned */}
          {nextModule && (
            <div className="bg-gray-800/50 p-5 rounded-lg border border-white/10 animate-fade-in hover:border-[#95FF66]/30 transition-all duration-300 group">
              <h4 className="text-white text-sm font-medium mb-3 flex items-center">
                <Zap className="h-4 w-4 mr-2 text-[#95FF66]" />
                Continue Your Learning Path
              </h4>
              <div className="flex items-center">
                <div className="bg-[#95FF66]/10 rounded-md p-3 mr-4">
                  <BookOpen className="h-5 w-5 text-[#95FF66]" />
                </div>
                <div className="flex-grow">
                  <div className="text-white font-medium group-hover:text-[#95FF66] transition-colors">{nextModule.title}</div>
                  <div className="text-xs text-gray-400 mt-1 line-clamp-2">{nextModule.description}</div>
                  
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{nextModule.duration || "2 hours"}</span>
                    </div>
                    {nextModule.level && (
                      <div className={`px-2 py-0.5 rounded-full text-xs flex items-center ${
                        nextModule.level === 'beginner' ? 'bg-blue-500/20 text-blue-400' :
                        nextModule.level === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {nextModule.level.charAt(0).toUpperCase() + nextModule.level.slice(1)}
                      </div>
                    )}
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-[#95FF66] hover:bg-[#95FF66]/10 self-start group-hover:translate-x-1 transition-transform"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
          
          {/* Completion Message with enhanced design */}
          {nextModule === null && (
            <div className="bg-[#95FF66]/10 p-5 rounded-lg border border-[#95FF66]/30 animate-fade-in">
              <h4 className="text-[#95FF66] text-lg font-medium mb-3 flex items-center">
                <Trophy className="h-6 w-6 mr-3" />
                Learning Track Completed!
              </h4>
              <p className="text-white text-sm">
                Congratulations! You've mastered all modules in this track. Consider reviewing content to reinforce your knowledge or explore new advanced tracks to continue your learning journey.
              </p>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="border-[#95FF66]/30 text-[#95FF66] hover:bg-[#95FF66]/10">
                  Get Certificate
                </Button>
                <Button variant="outline" size="sm" className="border-white/10 text-white/80 hover:bg-white/5">
                  Share Achievement
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Milestones with enhanced visuals */}
      <div className="pt-4">
        <h3 className="text-white font-medium mb-5 flex items-center">
          <Award className="h-5 w-5 mr-2 text-[#95FF66]" />
          Learning Milestones
        </h3>
        
        <div className="relative">
          {/* Progress Bar with improved visuals */}
          <div className="absolute top-4 left-3 right-3 h-1.5 bg-gray-700/70 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-[#4CAF50] to-[#95FF66] rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          {/* Milestone Points with enhanced hover effects */}
          <div className="flex justify-between relative pt-5">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center w-20 transition-transform hover:scale-110 group"
                style={{ marginLeft: index === 0 ? 0 : 'auto' }}
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 transition-colors duration-300
                    ${milestone.achieved 
                      ? 'bg-[#95FF66]/20 text-[#95FF66]' 
                      : 'bg-gray-700/70 text-gray-500 group-hover:bg-gray-700'}`}
                >
                  <milestone.icon className="h-4 w-4" />
                </div>
                <div 
                  className={`text-xs text-center mt-2 font-medium transition-colors duration-300
                    ${milestone.achieved ? 'text-white/80' : 'text-white/40 group-hover:text-white/60'}`}
                >
                  {milestone.threshold}%
                </div>
                <div className="hidden group-hover:block absolute -bottom-16 bg-black/80 text-white text-xs p-2 rounded whitespace-nowrap left-1/2 transform -translate-x-1/2 z-20">
                  {milestone.title}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Next Milestone with improved design */}
        {nextMilestone && (
          <div className="mt-8 bg-white/5 p-4 rounded-lg border border-white/10 text-center hover:border-white/20 transition-colors duration-300">
            <div className="text-sm text-gray-400 mb-1">Next milestone:</div>
            <div className="text-white flex items-center justify-center gap-2">
              <nextMilestone.icon className="h-4 w-4 text-[#95FF66]" /> 
              <span className="font-medium">{nextMilestone.title}</span>
              <span className="text-sm text-[#95FF66] bg-[#95FF66]/10 px-2 rounded-full">
                {nextMilestone.threshold}%
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
