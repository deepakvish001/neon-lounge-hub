
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Code, Zap, Lock } from "lucide-react";

export default function Auth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        toast.success("Check your email for the confirmation link!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0C0C0C]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#95FF66] to-[#67B346] bg-clip-text text-transparent neon-glow mb-4">
            Code Battles
          </h1>
          <p className="text-muted-foreground text-lg">
            Join the ultimate coding competition platform
          </p>
        </div>
      </div>

      {/* Featured Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass p-6 rounded-lg text-center">
            <Zap className="w-8 h-8 text-[#95FF66] mx-auto mb-3" />
            <h3 className="text-[#95FF66] font-semibold mb-2">Real-time Battles</h3>
            <p className="text-muted-foreground text-sm">Compete in live coding challenges</p>
          </div>
          <div className="glass p-6 rounded-lg text-center">
            <Code className="w-8 h-8 text-[#95FF66] mx-auto mb-3" />
            <h3 className="text-[#95FF66] font-semibold mb-2">Practice Mode</h3>
            <p className="text-muted-foreground text-sm">Sharpen your coding skills</p>
          </div>
          <div className="glass p-6 rounded-lg text-center">
            <Lock className="w-8 h-8 text-[#95FF66] mx-auto mb-3" />
            <h3 className="text-[#95FF66] font-semibold mb-2">Secure Platform</h3>
            <p className="text-muted-foreground text-sm">Safe and private environment</p>
          </div>
        </div>
      </div>

      {/* Auth Form Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="glass w-full max-w-md p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-[#95FF66] to-[#67B346] bg-clip-text text-transparent">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-background/50 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-background/50 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#95FF66] hover:bg-[#95FF66]/80 text-black font-medium"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Button
              variant="link"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#95FF66] hover:text-[#95FF66]/80"
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#95FF66] mb-4">
            Ready to Start Coding?
          </h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of developers improving their skills through competitive programming.
          </p>
          <Button
            onClick={() => setIsSignUp(true)}
            className="bg-[#95FF66] hover:bg-[#95FF66]/80 text-black"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
}
