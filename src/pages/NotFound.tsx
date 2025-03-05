
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-16rem)] p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 opacity-20 blur-xl rounded-full"></div>
            <AlertTriangle size={80} className="text-red-500 animate-pulse" />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">404</h1>
        <p className="text-xl text-gray-400 mb-6">
          Oops! We couldn't find the page you're looking for.
        </p>
        <p className="text-gray-500 mb-8">
          The page at <span className="font-mono bg-black/30 px-2 py-1 rounded">{location.pathname}</span> might have been moved, deleted, or never existed.
        </p>
        <Button asChild className="bg-[#95FF66] hover:bg-[#95FF66]/80 text-black">
          <Link to="/" className="flex items-center gap-2">
            <Home size={18} />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
