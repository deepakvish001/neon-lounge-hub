
import { Github } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
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
  );
};
