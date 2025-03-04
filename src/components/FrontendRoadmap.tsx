
import React from 'react';
import { Check, ChevronRight } from 'lucide-react';

interface FrontendRoadmapProps {
  completedModules: string[];
}

export const FrontendRoadmap: React.FC<FrontendRoadmapProps> = ({ completedModules }) => {
  const roadmapSteps = [
    {
      id: "step-1",
      title: "HTML & CSS Fundamentals",
      skills: ["HTML5 Semantics", "CSS3 Properties", "Responsive Design"],
      modules: ["modern-html-css"]
    },
    {
      id: "step-2",
      title: "JavaScript Core",
      skills: ["ES6+", "DOM Manipulation", "Asynchronous JS"],
      modules: ["javascript-fundamentals"]
    },
    {
      id: "step-3",
      title: "Frontend Frameworks",
      skills: ["React", "Components", "State Management"],
      modules: ["react-basics", "advanced-react"]
    },
    {
      id: "step-4",
      title: "Advanced CSS",
      skills: ["Animations", "CSS Architecture", "Modern Layouts"],
      modules: ["css-animations"]
    },
    {
      id: "step-5",
      title: "Web Accessibility & Performance",
      skills: ["ARIA", "Performance Optimization", "Best Practices"],
      modules: ["web-accessibility"]
    }
  ];

  const isStepCompleted = (step) => {
    return step.modules.every(moduleId => completedModules.includes(moduleId));
  };

  const isStepInProgress = (step) => {
    return step.modules.some(moduleId => completedModules.includes(moduleId)) && 
           !step.modules.every(moduleId => completedModules.includes(moduleId));
  };

  return (
    <div className="py-4">
      <div className="flex flex-col md:flex-row gap-3 overflow-x-auto pb-4">
        {roadmapSteps.map((step, index) => {
          const completed = isStepCompleted(step);
          const inProgress = isStepInProgress(step);
          
          return (
            <div 
              key={step.id} 
              className={`
                relative flex-1 min-w-[200px] p-4 rounded-lg border 
                ${completed ? 'bg-[#95FF66]/10 border-[#95FF66]/30' : 
                  inProgress ? 'bg-[#7366ff]/10 border-[#7366ff]/30' : 
                  'bg-white/5 border-white/10'} 
                transition-all duration-300 hover:shadow-md group
              `}
            >
              {/* Connect lines between steps */}
              {index < roadmapSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-1.5 w-3 h-0.5 bg-gray-700 z-10"></div>
              )}
              {index > 0 && (
                <div className="hidden md:block absolute top-1/2 -left-1.5 w-3 h-0.5 bg-gray-700 z-10"></div>
              )}
              
              {/* Status indicator */}
              <div className="flex items-center mb-3">
                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center mr-2
                  ${completed ? 'bg-[#95FF66]/20 text-[#95FF66]' : 
                    inProgress ? 'bg-[#7366ff]/20 text-[#7366ff]' : 
                    'bg-white/10 text-white/70'}
                `}>
                  {completed ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <span className="text-xs">{index + 1}</span>
                  )}
                </div>
                <h3 className={`text-sm font-medium ${
                  completed ? 'text-[#95FF66]' : 
                  inProgress ? 'text-[#7366ff]' : 
                  'text-white'
                }`}>
                  {step.title}
                </h3>
              </div>
              
              {/* Skills list */}
              <ul className="ml-8 space-y-1 mb-3">
                {step.skills.map((skill, idx) => (
                  <li key={idx} className="text-xs text-gray-400 flex items-center">
                    <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
              
              {/* Status badge */}
              <div className="mt-auto">
                {completed ? (
                  <div className="text-xs text-[#95FF66] bg-[#95FF66]/10 p-1 px-2 rounded-full inline-flex items-center">
                    <Check className="h-3 w-3 mr-1" />
                    Completed
                  </div>
                ) : inProgress ? (
                  <div className="text-xs text-[#7366ff] bg-[#7366ff]/10 p-1 px-2 rounded-full inline-flex items-center">
                    <span className="animate-pulse mr-1">●</span>
                    In Progress
                  </div>
                ) : (
                  <div className="text-xs text-white/50 bg-white/5 p-1 px-2 rounded-full">
                    Not Started
                  </div>
                )}
              </div>
              
              {/* Hover state indicator */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center bg-black/60 rounded-lg transition-opacity">
                <div className="text-white text-sm flex items-center">
                  View Details
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
