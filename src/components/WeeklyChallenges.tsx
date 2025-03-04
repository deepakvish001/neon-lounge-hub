
import React from 'react';
import { 
  Award, Calendar, ChevronRight, Clock, Flame, 
  Target, Trophy, Users, Zap 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const WeeklyChallenges = () => {
  const navigate = useNavigate();
  
  const challenges = [
    {
      id: "array-manipulation",
      title: "Array Manipulation Challenge",
      description: "Optimize array operations for performance",
      difficulty: "Medium",
      participants: 342,
      deadline: "2 days left",
      xp: 250,
      badges: ["Algorithms", "Arrays"],
      isHot: true,
    },
    {
      id: "css-grid-challenge",
      title: "CSS Grid Master",
      description: "Create a responsive layout using CSS Grid",
      difficulty: "Easy",
      participants: 516,
      deadline: "4 days left",
      xp: 150,
      badges: ["Frontend", "CSS"],
      isHot: false,
    },
    {
      id: "db-optimization",
      title: "Database Query Optimization",
      description: "Optimize SQL queries for a large dataset",
      difficulty: "Hard",
      participants: 187,
      deadline: "3 days left",
      xp: 350,
      badges: ["Database", "Performance"],
      isHot: true,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Easy": return "bg-green-500/20 text-green-400";
      case "Medium": return "bg-yellow-500/20 text-yellow-400";
      case "Hard": return "bg-red-500/20 text-red-400";
      default: return "bg-blue-500/20 text-blue-400";
    }
  };

  return (
    <div className="glass p-6 rounded-lg mb-8 border border-white/10 overflow-hidden animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Target className="mr-2 h-5 w-5 text-[#95FF66]" />
          Weekly Challenges
        </h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-[#95FF66] hover:bg-[#95FF66]/10"
          onClick={() => navigate('/battle')}
        >
          View All Challenges
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {challenges.map((challenge, index) => (
          <div 
            key={challenge.id}
            className="bg-gray-800/30 p-5 rounded-lg border border-white/10 hover:border-[#95FF66]/20 transition-all duration-300 animate-fade-in hover:shadow-[0_0_15px_rgba(149,255,102,0.1)] cursor-pointer group"
            style={{ animationDelay: `${index * 150}ms` }}
            onClick={() => navigate(`/battle?challenge=${challenge.id}`)}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="bg-[#95FF66]/10 p-2 rounded-md text-[#95FF66] group-hover:bg-[#95FF66]/20 transition-colors">
                <Trophy className="h-5 w-5" />
              </div>
              
              <div className="flex gap-2">
                <Badge variant="outline" className={getDifficultyColor(challenge.difficulty)}>
                  {challenge.difficulty}
                </Badge>
                
                {challenge.isHot && (
                  <Badge variant="outline" className="bg-orange-500/20 text-orange-400 flex items-center gap-1">
                    <Flame className="h-3 w-3" />
                    Hot
                  </Badge>
                )}
              </div>
            </div>
            
            <h3 className="font-medium text-white group-hover:text-[#95FF66] transition-colors mb-1">
              {challenge.title}
            </h3>
            <p className="text-xs text-gray-400 mb-3">{challenge.description}</p>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {challenge.badges.map((badge, i) => (
                <span key={i} className="text-xs bg-white/5 px-2 py-0.5 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
              <div className="flex items-center">
                <Users className="h-3.5 w-3.5 mr-1" />
                <span>{challenge.participants} participants</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>{challenge.deadline}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center text-xs">
                <Award className="h-3.5 w-3.5 mr-1 text-[#95FF66]" />
                <span className="text-[#95FF66]">{challenge.xp} XP</span>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-[#95FF66] hover:bg-[#95FF66]/10"
              >
                <Zap className="mr-1 h-4 w-4" />
                Join Challenge
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyChallenges;
