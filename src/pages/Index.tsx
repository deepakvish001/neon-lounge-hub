
import { Header } from "@/components/Header";
import { GameModeCard } from "@/components/GameModeCard";
import { Button } from "@/components/ui/button";
import { Zap, Code, Target, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleStartMatch = () => {
    navigate('/battle');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent neon-glow">
            Welcome to Battle Online
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Join the ultimate coding battle experience
          </p>
          <Button 
            onClick={handleStartMatch}
            className="bg-[#95FF66] hover:bg-[#95FF66]/80 transition-colors text-black text-lg px-8 py-6 float"
          >
            Start Match
          </Button>
        </div>
      </section>

      {/* Practice Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-md mx-auto glass p-8 rounded-lg">
          <div className="flex items-center gap-2 mb-6">
            <Code className="w-6 h-6 text-[#95FF66]" />
            <h2 className="text-xl">I want to practice</h2>
          </div>
          
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal hover:bg-[#95FF66]/10 hover:text-[#95FF66]"
            >
              Graphs
            </Button>
            <Button
              onClick={handleStartMatch}
              className="w-full justify-start text-left font-normal bg-[#95FF66]/10 text-[#95FF66] hover:bg-[#95FF66]/20"
            >
              Start Battle
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
