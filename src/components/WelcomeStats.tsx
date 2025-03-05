
import React from 'react';
import { 
  Activity, Award, Calendar, CheckCircle, Clock, 
  Star, Target, TrendingUp, Trophy 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WelcomeStats = () => {
  const userStats = {
    activeStreak: 5,
    completedChallenges: 23,
    ranking: 'Gold',
    skillLevel: 'Intermediate',
    lastActive: 'Today',
    nextMilestone: 'Complete 25 challenges'
  };

  return (
    <div className="glass p-6 rounded-lg mb-8 border border-white/10 overflow-hidden animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Welcome back, Developer!</h2>
          <p className="text-muted-foreground">
            Continue your coding journey and level up your skills
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10">
            <Calendar className="mr-2 h-4 w-4" />
            Daily Challenge
          </Button>
          <Button className="bg-[#95FF66] hover:bg-[#95FF66]/80 text-black">
            <Activity className="mr-2 h-4 w-4" />
            Resume Learning
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
        <Card className="bg-gray-800/30 border-white/5 hover:shadow-[0_0_10px_rgba(149,255,102,0.1)] transition-shadow">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#95FF66]/10 p-2 rounded-full mb-2 text-[#95FF66]">
                <Activity className="h-5 w-5" />
              </div>
              <div className="text-xs text-gray-400">Active Streak</div>
              <div className="text-white text-lg font-medium">{userStats.activeStreak} days</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800/30 border-white/5 hover:shadow-[0_0_10px_rgba(149,255,102,0.1)] transition-shadow">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#7366ff]/10 p-2 rounded-full mb-2 text-[#7366ff]">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="text-xs text-gray-400">Completed</div>
              <div className="text-white text-lg font-medium">{userStats.completedChallenges}</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800/30 border-white/5 hover:shadow-[0_0_10px_rgba(149,255,102,0.1)] transition-shadow">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#FF66A6]/10 p-2 rounded-full mb-2 text-[#FF66A6]">
                <Trophy className="h-5 w-5" />
              </div>
              <div className="text-xs text-gray-400">Ranking</div>
              <div className="text-white text-lg font-medium">{userStats.ranking}</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800/30 border-white/5 hover:shadow-[0_0_10px_rgba(149,255,102,0.1)] transition-shadow">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-orange-500/10 p-2 rounded-full mb-2 text-orange-400">
                <Star className="h-5 w-5" />
              </div>
              <div className="text-xs text-gray-400">Skill Level</div>
              <div className="text-white text-lg font-medium">{userStats.skillLevel}</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800/30 border-white/5 hover:shadow-[0_0_10px_rgba(149,255,102,0.1)] transition-shadow">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-500/10 p-2 rounded-full mb-2 text-teal-400">
                <Clock className="h-5 w-5" />
              </div>
              <div className="text-xs text-gray-400">Last Active</div>
              <div className="text-white text-lg font-medium">{userStats.lastActive}</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800/30 border-white/5 hover:shadow-[0_0_10px_rgba(149,255,102,0.1)] transition-shadow">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-500/10 p-2 rounded-full mb-2 text-purple-400">
                <Target className="h-5 w-5" />
              </div>
              <div className="text-xs text-gray-400">Next Milestone</div>
              <div className="text-white text-lg font-medium text-xs">{userStats.nextMilestone}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WelcomeStats;
