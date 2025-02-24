
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Command, Lock, Mail, User } from "lucide-react";

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
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="glass w-full max-w-md p-8 rounded-lg space-y-8">
          {/* Logo */}
          <div className="text-center space-y-2">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-[#95FF66] blur-xl opacity-20 rounded-full"></div>
              <Command className="w-12 h-12 text-[#95FF66] mx-auto animate-spin-slow" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-sm text-gray-400">
              {isSignUp
                ? "Join the ultimate coding platform"
                : "Sign in to continue your journey"}
            </p>
          </div>

          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#95FF66] hover:bg-[#95FF66]/80 text-black font-medium h-11"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">◌</span>
                  {isSignUp ? "Creating Account..." : "Signing In..."}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {isSignUp ? "Create Account" : "Sign In"}
                </span>
              )}
            </Button>
          </form>

          {/* Switch Auth Mode */}
          <div className="text-center">
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

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 pt-8">
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-[#95FF66] mb-2">🚀</div>
              <div className="text-sm font-medium text-white">Real-time Battles</div>
            </div>
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-[#95FF66] mb-2">🏆</div>
              <div className="text-sm font-medium text-white">Global Rankings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
