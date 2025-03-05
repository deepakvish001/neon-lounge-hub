
import React from "react";
import { Github, Twitter, Facebook, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section with Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-8">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#95FF66] rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">NL</span>
              </div>
              <h2 className="text-xl font-bold text-white">NeonLounge</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering developers through interactive learning and competitive coding challenges. 
              Join our community to enhance your skills and climb the global rankings.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold mb-4 text-[#95FF66]">Our Vision & Mission</h3>
            <p className="text-sm text-gray-400 mb-3">
              <strong className="text-white">Vision:</strong> To create a world where coding knowledge is accessible to everyone, regardless of background.
            </p>
            <p className="text-sm text-gray-400">
              <strong className="text-white">Mission:</strong> Provide interactive, engaging learning experiences that transform beginners into confident developers.
            </p>
          </div>
        </div>

        {/* Middle Section with Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-b border-white/10">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#95FF66]">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/learn" className="text-gray-400 hover:text-[#95FF66] transition-colors flex items-center gap-1">
                  All Tracks
                </Link>
              </li>
              <li>
                <Link to="/track/frontend-development" className="text-gray-400 hover:text-[#95FF66] transition-colors flex items-center gap-1">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link to="/module/modern-html-css" className="text-gray-400 hover:text-[#95FF66] transition-colors flex items-center gap-1">
                  HTML & CSS
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95FF66] transition-colors flex items-center gap-1">
                  JavaScript <span className="text-xs bg-gray-700 text-gray-300 px-1 rounded">Soon</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#95FF66]">Compete</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/battle" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                  Battle Arena
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                  Global Rankings
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95FF66] transition-colors flex items-center gap-1">
                  Weekly Challenges <span className="text-xs bg-gray-700 text-gray-300 px-1 rounded">Soon</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#95FF66]">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                  Careers <span className="text-xs bg-[#95FF66] text-black px-1 rounded">Hiring!</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#95FF66]">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95FF66] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Subscribe to our newsletter for the latest features and updates.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-black/50 border border-white/10 rounded px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#95FF66] flex-grow md:flex-grow-0 md:w-64"
            />
            <Button className="bg-[#95FF66] hover:bg-[#95FF66]/80 text-black transition-all">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© 2024 NeonLounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
