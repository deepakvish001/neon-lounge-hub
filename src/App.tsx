
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Battle from "./pages/Battle";
import { Header } from "./components/Header";
import Leaderboard from "./pages/Leaderboard";
import Learn from "./pages/Learn";
import TrackDetails from "./pages/TrackDetails";
import ModuleContent from "./pages/ModuleContent";

const queryClient = new QueryClient();

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<boolean | null>(null);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(!!session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (session === null) {
    return null;
  }

  return session ? <>{children}</> : <Navigate to="/auth" replace />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-[#0C0C0C] flex flex-col">
            <Header />
            <main className="flex-1 pt-16">
              <Toaster />
              <Sonner />
              <Routes>
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <Index />
                    </PrivateRoute>
                  }
                />
                <Route path="/auth" element={<Auth />} />
                <Route
                  path="/battle"
                  element={
                    <PrivateRoute>
                      <Battle />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/leaderboard"
                  element={
                    <PrivateRoute>
                      <Leaderboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/learn"
                  element={
                    <PrivateRoute>
                      <Learn />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/track/:trackId"
                  element={
                    <PrivateRoute>
                      <TrackDetails />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/module/:moduleId"
                  element={
                    <PrivateRoute>
                      <ModuleContent />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
