
import { Button } from "@/components/ui/button";
import { LogOut, Command, Gamepad2, Code2, Trophy, Book } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      navigate("/auth");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0C0C0C]/95 backdrop-blur-md border-b border-[#95FF66]/10">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <Command className="w-8 h-8 text-[#95FF66] animate-spin-slow" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#95FF66] to-[#67B346] bg-clip-text text-transparent hover-scale transition-transform">
              NeonLounge
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Button
              variant="ghost"
              className="flex items-center gap-2 hover:bg-[#95FF66]/10 hover:text-[#95FF66] transition-all"
              onClick={() => navigate('/')}
            >
              <Code2 size={18} />
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-2 hover:bg-[#95FF66]/10 hover:text-[#95FF66] transition-all"
              onClick={() => navigate('/battle')}
            >
              <Gamepad2 size={18} />
              Battle
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-2 hover:bg-[#95FF66]/10 hover:text-[#95FF66] transition-all"
              onClick={() => navigate('/leaderboard')}
            >
              <Trophy size={18} />
              Leaderboard
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-2 hover:bg-[#95FF66]/10 hover:text-[#95FF66] transition-all"
              onClick={() => navigate('/learn')}
            >
              <Book size={18} />
              Learn
            </Button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hover:bg-[#95FF66]/10 hover:text-[#95FF66] transition-all hidden sm:flex"
            >
              Join Game
            </Button>
            <Button
              onClick={handleSignOut}
              className="bg-[#95FF66] hover:bg-[#95FF66]/80 text-black transition-all flex items-center gap-2 hover-scale"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
