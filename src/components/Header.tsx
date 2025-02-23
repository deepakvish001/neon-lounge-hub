
import { Button } from "@/components/ui/button";
import { UserCircle, LogOut } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent neon-glow">
            NeonLounge
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="hover:bg-primary/20 hover:text-primary transition-colors"
          >
            Join Game
          </Button>
          <Button
            onClick={handleSignOut}
            className="bg-primary hover:bg-primary/80 transition-colors flex items-center gap-2"
          >
            <LogOut size={20} />
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
};
