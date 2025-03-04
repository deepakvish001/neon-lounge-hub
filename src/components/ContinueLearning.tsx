
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, ChevronRight, Clock, Code, 
  Database, Globe, BrainCircuit
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ContinueLearning = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      id: "react-fundamentals",
      title: "React Fundamentals",
      description: "Master React with hooks, context and more",
      progress: 65,
      lastModule: "Managing State with Context API",
      timeRemaining: "2h 15m",
      icon: Code,
      totalModules: 12,
      completedModules: 8,
    },
    {
      id: "system-design",
      title: "System Design Basics",
      description: "Learn to design scalable systems",
      progress: 30,
      lastModule: "Database Sharding Techniques",
      timeRemaining: "4h 45m",
      icon: Globe,
      totalModules: 10,
      completedModules: 3,
    },
    {
      id: "algorithms",
      title: "Algorithms Deep Dive",
      description: "Advanced algorithms and problem solving",
      progress: 15,
      lastModule: "Dynamic Programming Introduction",
      timeRemaining: "8h 20m",
      icon: BrainCircuit,
      totalModules: 15,
      completedModules: 2,
    }
  ];

  return (
    <div className="glass p-6 rounded-lg mb-8 border border-white/10 overflow-hidden animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <BookOpen className="mr-2 h-5 w-5 text-[#95FF66]" />
          Continue Learning
        </h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-[#95FF66] hover:bg-[#95FF66]/10"
          onClick={() => navigate('/learn')}
        >
          View All Courses
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div 
            key={course.id}
            className="bg-gray-800/30 p-5 rounded-lg border border-white/10 hover:border-[#95FF66]/20 transition-all duration-300 animate-fade-in hover:shadow-[0_0_15px_rgba(149,255,102,0.1)] cursor-pointer group"
            style={{ animationDelay: `${index * 150}ms` }}
            onClick={() => navigate(`/track/${course.id}`)}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#95FF66]/10 p-2 rounded-md text-[#95FF66] group-hover:bg-[#95FF66]/20 transition-colors">
                <course.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-white group-hover:text-[#95FF66] transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-400">{course.description}</p>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Progress</span>
                <span className="text-[#95FF66]">{course.progress}%</span>
              </div>
              <Progress
                value={course.progress}
                className="h-1.5 bg-gray-700"
                indicatorClassName="bg-gradient-to-r from-[#95FF66] to-[#67B346]"
              />
            </div>
            
            <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
              <div className="flex items-center">
                <BookOpen className="h-3.5 w-3.5 mr-1" />
                <span>{course.completedModules}/{course.totalModules} modules</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>{course.timeRemaining} left</span>
              </div>
            </div>
            
            <div className="text-xs text-gray-400">
              <p className="mb-1">Last completed:</p>
              <p className="text-white text-sm truncate">{course.lastModule}</p>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full mt-3 text-[#95FF66] hover:bg-[#95FF66]/10 group-hover:bg-[#95FF66]/10"
            >
              Resume Learning
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueLearning;
