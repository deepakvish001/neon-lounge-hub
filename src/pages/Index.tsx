
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Code, Zap, Target, Crown, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleStartMatch = () => {
    navigate('/battle');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#95FF66] to-[#67B346] bg-clip-text text-transparent neon-glow">
            Code Battles Reimagined
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Challenge yourself and others in real-time coding battles. 
            Learn, compete, and improve your skills.
          </p>
          <Button 
            onClick={handleStartMatch}
            className="bg-[#95FF66] hover:bg-[#95FF66]/80 transition-colors text-black text-lg px-8 py-6 float"
          >
            Start Match
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#95FF66]">Why Choose Code Battles?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-lg hover-scale">
              <Zap className="w-10 h-10 text-[#95FF66] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Battles</h3>
              <p className="text-muted-foreground">Challenge opponents in live coding matches and see who can solve problems faster.</p>
            </div>
            <div className="glass p-6 rounded-lg hover-scale">
              <Target className="w-10 h-10 text-[#95FF66] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practice Mode</h3>
              <p className="text-muted-foreground">Sharpen your skills with our extensive collection of coding problems.</p>
            </div>
            <div className="glass p-6 rounded-lg hover-scale">
              <Crown className="w-10 h-10 text-[#95FF66] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Rankings</h3>
              <p className="text-muted-foreground">Compete for the top spot on our worldwide leaderboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto glass p-8 rounded-lg">
            <div className="flex items-center gap-2 mb-6">
              <Code className="w-6 h-6 text-[#95FF66]" />
              <h2 className="text-xl">Ready to Practice?</h2>
            </div>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal hover:bg-[#95FF66]/10 hover:text-[#95FF66]"
              >
                Data Structures
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal hover:bg-[#95FF66]/10 hover:text-[#95FF66]"
              >
                Algorithms
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal hover:bg-[#95FF66]/10 hover:text-[#95FF66]"
              >
                Dynamic Programming
              </Button>
              <Button
                onClick={handleStartMatch}
                className="w-full justify-start text-left font-normal bg-[#95FF66]/10 text-[#95FF66] hover:bg-[#95FF66]/20"
              >
                Start Battle
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#95FF66]">Ready to Begin?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are improving their coding skills through competitive programming.
          </p>
          <Button 
            onClick={handleStartMatch}
            className="bg-[#95FF66] hover:bg-[#95FF66]/80 transition-colors text-black text-lg px-8 py-6"
          >
            Start Your First Battle
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#95FF66]">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-[#95FF66]">Our Story</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#95FF66]">Team</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#95FF66]">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#95FF66]">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-[#95FF66]">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#95FF66]">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#95FF66]">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#95FF66]">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-[#95FF66]">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#95FF66]">Terms</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-[#95FF66]">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#95FF66]">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-[#95FF66] flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Code Battles. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
