
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  Clock,
  Calendar,
  TrendingUp,
  Award
} from 'lucide-react';

interface ProgressStatsProps {
  completedModules: number;
  totalModules: number;
  estimatedCompletionTime: number;
}

export const ProgressStats: React.FC<ProgressStatsProps> = ({ 
  completedModules,
  totalModules,
  estimatedCompletionTime
}) => {
  // Calculate more dynamic stats
  const progressPercentage = Math.round((completedModules / totalModules) * 100) || 0;

  // Time estimates
  const hoursPerWeek = 5; // Assumed study hours per week
  const weeksToComplete = estimatedCompletionTime > 0 
    ? Math.ceil(estimatedCompletionTime / hoursPerWeek) 
    : 0;
  
  // Estimated completion date
  const today = new Date();
  const completionDate = new Date(today);
  completionDate.setDate(today.getDate() + (weeksToComplete * 7));
  const formattedCompletionDate = completionDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric' 
  });
  
  return (
    <div className="glass p-4 rounded-lg mb-8 border border-white/10 overflow-hidden animate-fade-in">
      <h2 className="text-lg font-medium text-white flex items-center mb-4">
        <BarChart3 className="mr-2 h-5 w-5 text-[#95FF66]" />
        Your Learning Analytics
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Modules Progress */}
        <Card className="bg-gray-800/30 border-white/5 hover:shadow-[0_0_10px_rgba(149,255,102,0.1)] transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="bg-[#95FF66]/10 p-2 rounded-lg text-[#95FF66]">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Modules Completed</div>
                <div className="text-white text-lg font-medium">{completedModules}/{totalModules}</div>
                <div className="text-xs text-[#95FF66]">{progressPercentage}% Complete</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Time Remaining */}
        <Card className="bg-gray-800/30 border-white/5 hover:shadow-[0_0_10px_rgba(149,255,102,0.1)] transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="bg-[#7366ff]/10 p-2 rounded-lg text-[#7366ff]">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Time Remaining</div>
                <div className="text-white text-lg font-medium">{estimatedCompletionTime}h</div>
                <div className="text-xs text-[#7366ff]">~{weeksToComplete} {weeksToComplete === 1 ? 'week' : 'weeks'} at 5h/week</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estimated Completion */}
        <Card className="bg-gray-800/30 border-white/5 hover:shadow-[0_0_10px_rgba(149,255,102,0.1)] transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="bg-orange-500/10 p-2 rounded-lg text-orange-400">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Est. Completion</div>
                <div className="text-white text-lg font-medium">{formattedCompletionDate}</div>
                <div className="text-xs text-orange-400">Keep up the good work!</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
