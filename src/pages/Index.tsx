
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Code, Zap, Target, Crown, Github, Trophy, Book, Users, Star, MessagesSquare, BrainCircuit, RocketLaunch } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleStartMatch = () => {
    navigate('/battle');
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-8 inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-[#95FF66] blur-3xl opacity-20 rounded-full"></div>
                <BrainCircuit className="w-20 h-20 text-[#95FF66] mx-auto relative" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#95FF66] to-[#67B346] bg-clip-text text-transparent neon-glow">
              Level Up Your Coding Skills
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join the ultimate platform for competitive programming. Challenge others,
              learn from real-time battles, and climb the global rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleStartMatch}
                className="bg-[#95FF66] hover:bg-[#95FF66]/80 transition-colors text-black text-lg px-8 py-6 float"
              >
                Start Battle Now
              </Button>
              <Button 
                variant="outline"
                className="border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10 text-lg px-8 py-6"
              >
                Practice Mode
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#95FF66] mb-2">10K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#95FF66] mb-2">5K+</div>
              <div className="text-muted-foreground">Daily Battles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#95FF66] mb-2">500+</div>
              <div className="text-muted-foreground">Coding Challenges</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#95FF66] mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
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

      {/* Learning Paths */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#95FF66]">Learning Paths</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-lg text-center hover-scale">
              <Book className="w-8 h-8 text-[#95FF66] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Algorithms</h3>
              <p className="text-sm text-muted-foreground">Master fundamental algorithms</p>
            </div>
            <div className="glass p-6 rounded-lg text-center hover-scale">
              <Code className="w-8 h-8 text-[#95FF66] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Data Structures</h3>
              <p className="text-sm text-muted-foreground">Learn essential data structures</p>
            </div>
            <div className="glass p-6 rounded-lg text-center hover-scale">
              <Trophy className="w-8 h-8 text-[#95FF66] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Competition</h3>
              <p className="text-sm text-muted-foreground">Practice competitive coding</p>
            </div>
            <div className="glass p-6 rounded-lg text-center hover-scale">
              <RocketLaunch className="w-8 h-8 text-[#95FF66] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">System Design</h3>
              <p className="text-sm text-muted-foreground">Build scalable systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#95FF66]">Join Our Community</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Connect with fellow developers, share solutions, and learn from the best in our thriving community.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#95FF66]" />
                    <span>10,000+ Active Members</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-[#95FF66]" />
                    <span>4.9/5 Average Rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessagesSquare className="w-5 h-5 text-[#95FF66]" />
                    <span>24/7 Community Support</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[#95FF66] blur-3xl opacity-10 rounded-full"></div>
                <div className="glass p-6 rounded-lg relative">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#95FF66]/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-[#95FF66]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">"Great platform for learning and competing!"</p>
                        <p className="text-sm font-semibold mt-1">- Sarah K.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#95FF66]/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-[#95FF66]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">"The real-time battles are incredibly engaging!"</p>
                        <p className="text-sm font-semibold mt-1">- Michael R.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      <footer className="bg-[#0C0C0C] border-t border-white/10">
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
