
import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <span className="text-white/60 text-sm">© 2024 NeonLounge. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hover:text-[#95FF66]">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-[#95FF66]">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center space-x-4 text-sm text-white/60">
            <a href="#" className="hover:text-[#95FF66]">Privacy Policy</a>
            <a href="#" className="hover:text-[#95FF66]">Terms of Service</a>
            <a href="#" className="hover:text-[#95FF66]">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
