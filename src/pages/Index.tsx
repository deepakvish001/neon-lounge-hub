
import { Header } from "@/components/Header";
import { GameModeCard } from "@/components/GameModeCard";
import { ActiveGameCard } from "@/components/ActiveGameCard";
import { Button } from "@/components/ui/button";
import { Zap, Swords, Target, Crown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent neon-glow">
            Welcome to NeonLounge
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Join the ultimate gaming experience where strategy meets excitement
          </p>
          <Button className="bg-primary hover:bg-primary/80 transition-colors text-lg px-8 py-6 float">
            Start a Match
          </Button>
        </div>
      </section>

      {/* Quick Game Modes */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8">Quick Game Modes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GameModeCard
            title="Quick Match"
            description="Jump into a fast-paced game with random players"
            icon={<Zap size={32} />}
          />
          <GameModeCard
            title="Ranked Battle"
            description="Compete in ranked matches to climb the leaderboard"
            icon={<Crown size={32} />}
          />
          <GameModeCard
            title="Practice Mode"
            description="Hone your skills against AI opponents"
            icon={<Target size={32} />}
          />
          <GameModeCard
            title="Tournament"
            description="Join or create tournaments with custom rules"
            icon={<Swords size={32} />}
          />
        </div>
      </section>

      {/* Active Games */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8">Active Games</h2>
        <div className="grid gap-4 max-w-3xl">
          <ActiveGameCard
            title="Tournament Finals"
            players={6}
            maxPlayers={8}
          />
          <ActiveGameCard
            title="Casual Match"
            players={3}
            maxPlayers={4}
          />
          <ActiveGameCard
            title="Ranked Game"
            players={2}
            maxPlayers={2}
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
