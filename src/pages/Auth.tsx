
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Command, Lock, Mail, User, UserPlus, KeyRound, Loader2 } from "lucide-react";

export default function Auth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (isSignUp) {
      if (!formData.username) {
        toast.error("Username is required");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        return false;
      }
      if (formData.password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
      }
    }
    if (!formData.email) {
      toast.error("Email is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              username: formData.username,
            }
          }
        });
        if (error) throw error;
        toast.success("Check your email for the confirmation link!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
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
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#95FF66] opacity-[0.15] blur-[128px] rounded-full" />
      </div>

      <div className="relative glass w-full max-w-md p-8 rounded-xl space-y-8 border border-white/10">
        {/* Logo Section */}
        <div className="text-center space-y-3">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-[#95FF66] blur-xl opacity-20 rounded-full"></div>
            <Command className="w-14 h-14 text-[#95FF66] mx-auto animate-spin-slow" />
          </div>
          <h2 className="text-3xl font-bold text-white">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-gray-400">
            {isSignUp
              ? "Join our community of developers"
              : "Sign in to continue coding"}
          </p>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {isSignUp && (
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
            </div>

            {isSignUp && (
              <div className="relative">
                <KeyRound className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-[#95FF66] hover:bg-[#95FF66]/80 text-black font-medium h-11"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                {isSignUp ? "Creating Account..." : "Signing In..."}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                {isSignUp ? <UserPlus className="w-5 h-5" /> : <User className="w-5 h-5" />}
                {isSignUp ? "Create Account" : "Sign In"}
              </span>
            )}
          </Button>
        </form>

        {/* Switch Auth Mode */}
        <div className="text-center">
          <Button
            variant="link"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setFormData({
                email: "",
                password: "",
                confirmPassword: "",
                username: "",
              });
            }}
            className="text-[#95FF66] hover:text-[#95FF66]/80"
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 glass rounded-lg hover:bg-white/10 transition-colors">
            <div className="text-[#95FF66] mb-2">🚀</div>
            <div className="text-sm font-medium text-white">Real-time Battles</div>
            <p className="text-xs text-gray-400 mt-1">Challenge other developers</p>
          </div>
          <div className="text-center p-4 glass rounded-lg hover:bg-white/10 transition-colors">
            <div className="text-[#95FF66] mb-2">🏆</div>
            <div className="text-sm font-medium text-white">Global Rankings</div>
            <p className="text-xs text-gray-400 mt-1">Climb the leaderboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
