
import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Code, 
  FileText, 
  Sparkles, 
  CheckCircle, 
  PanelRight, 
  PanelLeft,
  Layers
} from "lucide-react";

const ModernHTMLCSS = () => {
  return (
    <div className="w-full animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Code className="text-[#95FF66]" />
          Modern HTML & CSS
        </h1>
        <p className="text-muted-foreground">Master the building blocks of modern web development</p>
      </div>

      {/* Course Progress */}
      <Card className="p-6 mb-8 border-2 border-[#95FF66]/20 hover:border-[#95FF66]/40 transition-all shadow-glow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Sparkles className="text-[#95FF66]" size={20} />
            Your Learning Journey
          </h2>
          <span className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">25% Complete</span>
        </div>
        <Progress value={25} className="h-2 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-3">
            <div className="bg-secondary p-2 rounded-full">
              <CheckCircle size={18} className="text-[#95FF66]" />
            </div>
            <div>
              <p className="font-medium">HTML Fundamentals</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-secondary p-2 rounded-full">
              <CheckCircle size={18} className="text-[#95FF66]" />
            </div>
            <div>
              <p className="font-medium">CSS Basics</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-secondary/50 p-2 rounded-full">
              <FileText size={18} className="text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">Responsive Design</p>
              <p className="text-sm text-muted-foreground">In progress</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-secondary/50 p-2 rounded-full">
              <FileText size={18} className="text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">CSS Grid & Flexbox</p>
              <p className="text-sm text-muted-foreground">Not started</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border border-secondary p-6 animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-[#95FF66]" />
              <h2 className="text-xl font-semibold">Current Module: Responsive Design</h2>
            </div>
            
            <div className="rounded-lg border border-border p-6 bg-secondary/30 mb-6">
              <div className="flex items-center justify-center h-[300px] flex-col gap-4">
                <Sparkles size={48} className="text-[#95FF66] animate-pulse" />
                <h3 className="text-xl font-medium">Content is being developed</h3>
                <p className="text-muted-foreground text-center">Our team is working hard to bring you the best learning experience.</p>
                <p className="text-[#95FF66] font-medium">Check back soon!</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors">
                <PanelLeft size={16} />
                Previous Lesson
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#95FF66] text-primary-foreground hover:bg-[#95FF66]/80 transition-colors">
                Next Lesson
                <PanelRight size={16} />
              </button>
            </div>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
          <Card className="border border-secondary p-6 animate-slide-up delay-100">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="text-[#95FF66]" />
              <h2 className="text-xl font-semibold">Module Contents</h2>
            </div>
            
            <ul className="space-y-4">
              <li className="p-3 rounded-md bg-secondary/30 flex items-center gap-3 hover:bg-secondary/50 transition-colors cursor-pointer">
                <div className="bg-[#95FF66]/20 p-1.5 rounded-full">
                  <CheckCircle size={16} className="text-[#95FF66]" />
                </div>
                <span>Introduction to Responsive Design</span>
              </li>
              <li className="p-3 rounded-md bg-[#95FF66]/10 border border-[#95FF66]/30 flex items-center gap-3 hover:bg-[#95FF66]/20 transition-colors cursor-pointer">
                <div className="bg-[#95FF66]/20 p-1.5 rounded-full">
                  <FileText size={16} className="text-[#95FF66]" />
                </div>
                <span className="font-medium">Media Queries</span>
              </li>
              <li className="p-3 rounded-md bg-secondary/30 flex items-center gap-3 hover:bg-secondary/50 transition-colors cursor-pointer opacity-60">
                <div className="bg-secondary p-1.5 rounded-full">
                  <FileText size={16} />
                </div>
                <span>Mobile-First Approach</span>
              </li>
              <li className="p-3 rounded-md bg-secondary/30 flex items-center gap-3 hover:bg-secondary/50 transition-colors cursor-pointer opacity-60">
                <div className="bg-secondary p-1.5 rounded-full">
                  <FileText size={16} />
                </div>
                <span>Viewport Units</span>
              </li>
              <li className="p-3 rounded-md bg-secondary/30 flex items-center gap-3 hover:bg-secondary/50 transition-colors cursor-pointer opacity-60">
                <div className="bg-secondary p-1.5 rounded-full">
                  <FileText size={16} />
                </div>
                <span>Responsive Images</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-secondary/20 rounded-lg border border-secondary">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Sparkles size={16} className="text-[#95FF66]" />
                Quick Tip
              </h3>
              <p className="text-sm text-muted-foreground">Always test your responsive designs across multiple devices to ensure a consistent user experience.</p>
            </div>
          </Card>
          
          <Card className="border border-secondary p-6 mt-6 animate-slide-up delay-300">
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-[#95FF66]" />
              <h2 className="text-xl font-semibold">Resources</h2>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-2 p-2 hover:bg-secondary/20 rounded transition-colors">
                <FileText size={16} className="text-[#95FF66]" />
                <a href="#" className="text-[#95FF66] hover:underline">CSS Grid Cheatsheet</a>
              </li>
              <li className="flex items-center gap-2 p-2 hover:bg-secondary/20 rounded transition-colors">
                <FileText size={16} className="text-[#95FF66]" />
                <a href="#" className="text-[#95FF66] hover:underline">Flexbox Guide</a>
              </li>
              <li className="flex items-center gap-2 p-2 hover:bg-secondary/20 rounded transition-colors">
                <FileText size={16} className="text-[#95FF66]" />
                <a href="#" className="text-[#95FF66] hover:underline">Media Query Examples</a>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModernHTMLCSS;
