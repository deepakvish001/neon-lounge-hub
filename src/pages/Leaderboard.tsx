
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Crown, Star, ArrowUp, ArrowDown, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/Header";

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("overall");

  const { data: leaderboardData, isLoading } = useQuery({
    queryKey: ['leaderboard', timeFilter, category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('rating', { ascending: false })
        .limit(100);

      if (error) throw error;
      return data;
    },
  });

  const filteredData = leaderboardData?.filter(player =>
    player.username?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-[#95FF66] blur-[100px] opacity-20 rounded-full"></div>
            <Trophy className="w-16 h-16 text-[#95FF66] mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#95FF66] to-[#67B346] bg-clip-text text-transparent neon-glow">
              Global Rankings
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Compete with the best programmers worldwide and climb the ranks to glory
            </p>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            <Input
              placeholder="Search players..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-black/50 border-white/10 text-white placeholder:text-gray-500"
              prefix={<Search className="w-4 h-4 text-gray-500" />}
            />
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="bg-black/50 border-white/10 text-white">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C1C1C] border-white/10">
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="day">Today</SelectItem>
              </SelectContent>
            </Select>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-black/50 border-white/10 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C1C1C] border-white/10">
                <SelectItem value="overall">Overall</SelectItem>
                <SelectItem value="algorithms">Algorithms</SelectItem>
                <SelectItem value="data-structures">Data Structures</SelectItem>
                <SelectItem value="web-dev">Web Development</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Leaderboard Table */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="glass rounded-xl overflow-hidden border border-white/10">
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#95FF66]"></div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-black/50">
                    <tr className="text-left">
                      <th className="py-4 px-6 text-gray-400 font-medium">Rank</th>
                      <th className="py-4 px-6 text-gray-400 font-medium">Player</th>
                      <th className="py-4 px-6 text-gray-400 font-medium">Rating</th>
                      <th className="py-4 px-6 text-gray-400 font-medium">Wins</th>
                      <th className="py-4 px-6 text-gray-400 font-medium">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData?.map((player, index) => (
                      <tr 
                        key={player.id}
                        className="hover:bg-white/5 transition-colors animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <td className="py-4 px-6">
                          {index + 1 <= 3 ? (
                            <div className="flex items-center gap-2">
                              {index + 1 === 1 && <Crown className="w-5 h-5 text-yellow-500" />}
                              {index + 1 === 2 && <Star className="w-5 h-5 text-gray-400" />}
                              {index + 1 === 3 && <Trophy className="w-5 h-5 text-amber-600" />}
                              <span className="font-bold">{index + 1}</span>
                            </div>
                          ) : (
                            index + 1
                          )}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#95FF66]/20 flex items-center justify-center">
                              {player.avatar_url ? (
                                <img 
                                  src={player.avatar_url} 
                                  alt={player.username} 
                                  className="w-8 h-8 rounded-full"
                                />
                              ) : (
                                <Users className="w-4 h-4 text-[#95FF66]" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{player.username}</div>
                              <div className="text-sm text-gray-400">{player.full_name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-mono font-bold text-[#95FF66]">
                            {player.rating}
                          </span>
                        </td>
                        <td className="py-4 px-6">{player.matches_won}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-1">
                            {Math.random() > 0.5 ? (
                              <ArrowUp className="w-4 h-4 text-green-500" />
                            ) : (
                              <ArrowDown className="w-4 h-4 text-red-500" />
                            )}
                            <span>{Math.floor(Math.random() * 100)}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
