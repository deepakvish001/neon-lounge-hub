
import React from 'react';
import { Briefcase, Rocket, Star, ChevronRight, BarChart, Award, Code, Layout, Settings, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const CareerPathSection = () => {
  const careerPaths = [
    {
      title: "Frontend Developer",
      level: "Entry to Mid-Level",
      description: "Build user interfaces and implement designs using HTML, CSS, and JavaScript frameworks.",
      skills: ["HTML/CSS", "JavaScript", "React", "Responsive Design"],
      salary: "$70,000 - $110,000",
      demand: 92,
      icon: Code
    },
    {
      title: "UI/UX Engineer",
      level: "Mid-Level",
      description: "Bridge the gap between design and development, creating visually appealing and functional user experiences.",
      skills: ["UI Design", "Prototyping", "CSS Animation", "User Testing"],
      salary: "$85,000 - $130,000",
      demand: 88,
      icon: Layout
    },
    {
      title: "Frontend Architect",
      level: "Senior Level",
      description: "Design scalable frontend systems and lead implementation of complex user interfaces.",
      skills: ["Architecture Patterns", "Performance", "Team Leadership", "Advanced JS"],
      salary: "$120,000 - $160,000",
      demand: 85,
      icon: Settings
    }
  ];

  return (
    <div className="glass p-6 rounded-lg mb-8 border border-white/10 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Briefcase className="mr-2 h-5 w-5 text-[#95FF66]" />
          Career Pathways
        </h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-[#95FF66] hover:bg-[#95FF66]/10"
        >
          Explore All Careers
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {careerPaths.map((path, index) => (
          <Card 
            key={index}
            className="bg-gray-800/30 border border-white/5 hover:border-[#95FF66]/20 transition-all duration-300 animate-fade-in hover:shadow-[0_0_15px_rgba(149,255,102,0.1)] overflow-hidden relative group"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardHeader className="pb-2">
              <div className="flex items-start gap-3">
                <div className="bg-[#95FF66]/10 p-2 rounded-md text-[#95FF66]">
                  <path.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-white group-hover:text-[#95FF66] transition-colors text-lg">
                    {path.title}
                  </CardTitle>
                  <CardDescription>{path.level}</CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-2">
              <p className="text-sm text-gray-400 mb-3">
                {path.description}
              </p>
              
              <div className="mb-3">
                <div className="text-xs text-white/70 mb-1">Key Skills:</div>
                <div className="flex flex-wrap gap-1">
                  {path.skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div>
                  <div className="text-xs text-white/70">Salary Range:</div>
                  <div className="text-white">{path.salary}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-white/70">Market Demand:</div>
                  <div className="flex items-center">
                    <span className="text-[#95FF66] mr-1">{path.demand}%</span>
                    <BarChart className="h-3 w-3 text-[#95FF66]" />
                  </div>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full mt-3 text-[#95FF66] hover:bg-[#95FF66]/10"
              >
                View Career Details
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-5 p-4 rounded-lg bg-gradient-to-r from-[#95FF66]/5 to-[#95FF66]/10 border border-[#95FF66]/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <div className="bg-[#95FF66]/20 p-3 rounded-full mr-4">
            <Rocket className="h-6 w-6 text-[#95FF66]" />
          </div>
          <div>
            <h3 className="text-white font-medium">Need career guidance?</h3>
            <p className="text-sm text-gray-400">Get personalized career advice from industry experts</p>
          </div>
        </div>
        <Button className="whitespace-nowrap" variant="educational">
          <Zap className="mr-1 h-4 w-4" />
          Connect with Mentor
        </Button>
      </div>
    </div>
  );
};
