
import React from 'react';
import { Clock, Award, CheckCircle, Star, ChevronRight, Bookmark, Coffee, Brain, BookOpen } from 'lucide-react';
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
      {/* Current Progress */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Progress Circle */}
        <div className="relative flex-shrink-0">
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#95FF66]/10 text-[#95FF66] font-bold text-2xl relative">
            <svg className="w-24 h-24 absolute top-0 left-0 transform -rotate-90 course-completion-ring">
              <circle
                cx="48"
                cy="48"
                r="44"
                fill="none"
                stroke="#222836"
                strokeWidth="6"
              />
              <circle
                cx="48"
                cy="48"
                r="44"
                fill="none"
                stroke="#95FF66"
                strokeWidth="6"
                strokeDasharray={2 * Math.PI * 44}
                strokeDashoffset={2 * Math.PI * 44 * (1 - progressPercentage / 100)}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <span className="relative z-10">{progressPercentage}%</span>
          </div>
          
          {/* Radial decorations */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[#95FF66]/20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-[#95FF66]/10"></div>
        </div>
        
        <div className="flex-grow space-y-4 text-center md:text-left">
          {/* Current Status */}
          {currentMilestone && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-center md:justify-start mb-2">
                <div className="bg-[#95FF66]/20 p-2 rounded-full text-[#95FF66] mr-2">
                  <currentMilestone.icon className="h-5 w-5" />
                </div>
                <h3 className="text-white text-lg font-medium">{currentMilestone.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">
                You've completed {completedModules.length} out of {modules.length} modules.
                {estimatedRemainingHours > 0 && ` Approximately ${estimatedRemainingHours} hours remaining.`}
              </p>
            </div>
          )}
          
          {/* Next Module */}
          {nextModule && (
            <div className="bg-gray-800/30 p-4 rounded-lg border border-white/5 animate-fade-in">
              <h4 className="text-white text-sm font-medium mb-2">Next up in your journey:</h4>
              <div className="flex items-center">
                <div className="bg-white/10 rounded-md p-2 mr-3">
                  <BookOpen className="h-4 w-4 text-[#95FF66]" />
                </div>
                <div className="flex-grow">
                  <div className="text-white">{nextModule.title}</div>
                  <div className="text-xs text-gray-400">{nextModule.description.substring(0, 60)}...</div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-[#95FF66] hover:bg-[#95FF66]/10"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          
          {/* Completion Message */}
          {nextModule === null && (
            <div className="bg-[#95FF66]/10 p-4 rounded-lg border border-[#95FF66]/30 animate-fade-in">
              <h4 className="text-[#95FF66] text-sm font-medium mb-2 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Congratulations!
              </h4>
              <p className="text-white text-sm">
                You've completed all modules in this track. Consider reviewing content or exploring new tracks.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Milestones */}
      <div className="pt-4">
        <h3 className="text-white font-medium mb-4 flex items-center">
          <Award className="h-4 w-4 mr-2 text-[#95FF66]" />
          Learning Milestones
        </h3>
        
        <div className="relative">
          {/* Progress Bar */}
          <div className="absolute top-3 left-2 right-2 h-1 bg-gray-700 rounded-full">
            <div 
              className="h-full bg-[#95FF66] rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          {/* Milestone Points */}
          <div className="flex justify-between relative pt-4">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center w-16"
                style={{ marginLeft: index === 0 ? 0 : 'auto' }}
              >
                <div 
                  className={`w-6 h-6 rounded-full flex items-center justify-center relative z-10 
                    ${milestone.achieved 
                      ? 'bg-[#95FF66]/20 text-[#95FF66]' 
                      : 'bg-gray-700/50 text-gray-500'}`}
                >
                  <milestone.icon className="h-3 w-3" />
                </div>
                <div 
                  className={`text-[10px] text-center mt-1 
                    ${milestone.achieved ? 'text-white/70' : 'text-white/30'}`}
                >
                  {milestone.threshold}%
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Next Milestone */}
        {nextMilestone && (
          <div className="mt-6 bg-white/5 p-3 rounded-lg border border-white/10 text-center">
            <div className="text-xs text-gray-400">Next milestone:</div>
            <div className="text-white text-sm">{nextMilestone.title} at {nextMilestone.threshold}%</div>
          </div>
        )}
      </div>
    </div>
  );
};
