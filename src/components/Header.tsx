
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";

export const Header = () => {
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
          <Button className="bg-primary hover:bg-primary/80 transition-colors flex items-center gap-2">
            <UserCircle size={20} />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};
