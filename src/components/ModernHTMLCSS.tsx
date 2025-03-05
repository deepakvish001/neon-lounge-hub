
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Code, 
  FileText, 
  Sparkles, 
  CheckCircle, 
  PanelRight, 
  PanelLeft,
  Layers,
  GitBranch,
  MessagesSquare,
  LightbulbIcon,
  Video,
  Monitor,
  Trophy,
  Clock,
  AlertCircle
} from "lucide-react";
import { Module } from "@/constants";

interface ModernHTMLCSSProps {
  moduleData?: Module;
}

const ModernHTMLCSS = ({ moduleData }: ModernHTMLCSSProps) => {
  const [activeSection, setActiveSection] = useState("media-queries");
  const [showExercise, setShowExercise] = useState(false);

  // Mock user progress data
  const userProgress = {
    completed: ["intro-responsive", "media-queries"],
    inProgress: ["mobile-first"],
    completion: 32,
    timeSpent: "4h 45m",
    lastAccessed: "2 days ago",
    exercises: 4,
    currentStreak: 3
  };

  return (
    <div className="w-full animate-fade-in">
      {/* Header with Title and Progress Overview */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Code className="text-[#95FF66]" />
              {moduleData?.title || "Modern HTML & CSS"}
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              {moduleData?.description || "Master the building blocks of modern web development with HTML5 and CSS3, including responsive design, flexbox, grid, and more."}
            </p>
          </div>
          
          <div className="mt-4 sm:mt-0 flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <GitBranch size={18} />
              Fork
            </Button>
            <Button variant="educational" className="flex items-center gap-2">
              <BookOpen size={18} />
              Continue Learning
            </Button>
          </div>
        </div>
      </div>

      {/* Course Stats and Progress */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-4 border border-secondary/50 hover:border-[#95FF66]/30 transition-all">
          <div className="flex items-center gap-3">
            <div className="bg-secondary/30 p-2 rounded-full">
              <Trophy size={20} className="text-[#95FF66]" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Completion</p>
              <p className="text-xl font-semibold">{userProgress.completion}%</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 border border-secondary/50 hover:border-[#95FF66]/30 transition-all">
          <div className="flex items-center gap-3">
            <div className="bg-secondary/30 p-2 rounded-full">
              <Clock size={20} className="text-[#95FF66]" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Time Spent</p>
              <p className="text-xl font-semibold">{userProgress.timeSpent}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 border border-secondary/50 hover:border-[#95FF66]/30 transition-all">
          <div className="flex items-center gap-3">
            <div className="bg-secondary/30 p-2 rounded-full">
              <FileText size={20} className="text-[#95FF66]" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Exercises</p>
              <p className="text-xl font-semibold">{userProgress.exercises} completed</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 border border-secondary/50 hover:border-[#95FF66]/30 transition-all">
          <div className="flex items-center gap-3">
            <div className="bg-secondary/30 p-2 rounded-full">
              <Sparkles size={20} className="text-[#95FF66]" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Current Streak</p>
              <p className="text-xl font-semibold">{userProgress.currentStreak} days</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Course Progress */}
      <Card className="p-6 mb-8 border-2 border-[#95FF66]/20 hover:border-[#95FF66]/40 transition-all shadow-glow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Sparkles className="text-[#95FF66]" size={20} />
            Your Learning Journey
          </h2>
          <span className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">{userProgress.completion}% Complete</span>
        </div>
        <Progress value={userProgress.completion} className="h-2 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#95FF66]/20 p-2 rounded-full">
              <CheckCircle size={18} className="text-[#95FF66]" />
            </div>
            <div>
              <p className="font-medium">HTML Fundamentals</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#95FF66]/20 p-2 rounded-full">
              <CheckCircle size={18} className="text-[#95FF66]" />
            </div>
            <div>
              <p className="font-medium">CSS Basics</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-secondary/50 p-2 rounded-full">
              <FileText size={18} className="text-[#95FF66]" />
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
          <div className="flex items-center gap-3">
            <div className="bg-secondary/50 p-2 rounded-full">
              <FileText size={18} className="text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">CSS Variables</p>
              <p className="text-sm text-muted-foreground">Not started</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-secondary/50 p-2 rounded-full">
              <FileText size={18} className="text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">CSS Animations</p>
              <p className="text-sm text-muted-foreground">Not started</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border border-secondary p-0 overflow-hidden animate-slide-up">
            {/* Tabs for different content types */}
            <div className="flex border-b border-secondary">
              <button 
                className={`py-3 px-5 flex items-center gap-2 transition-colors ${!showExercise ? 'border-b-2 border-[#95FF66] text-[#95FF66] font-medium' : 'text-muted-foreground'}`}
                onClick={() => setShowExercise(false)}
              >
                <BookOpen size={18} />
                Lesson Content
              </button>
              <button 
                className={`py-3 px-5 flex items-center gap-2 transition-colors ${showExercise ? 'border-b-2 border-[#95FF66] text-[#95FF66] font-medium' : 'text-muted-foreground'}`}
                onClick={() => setShowExercise(true)}
              >
                <Code size={18} />
                Practice Exercise
              </button>
            </div>
            
            <div className="p-6">
              {!showExercise ? (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <FileText className="text-[#95FF66]" size={20} />
                      Media Queries
                    </h2>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock size={14} className="mr-1" />
                        <span>15 min read</span>
                      </div>
                      <div className="h-4 w-px bg-secondary mx-2"></div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MessagesSquare size={14} className="mr-1" />
                        <span>2 comments</span>
                      </div>
                    </div>
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
                    <Button variant="secondary" className="flex items-center gap-2">
                      <PanelLeft size={16} />
                      Previous Lesson
                    </Button>
                    <Button variant="educational" className="flex items-center gap-2">
                      Next Lesson
                      <PanelRight size={16} />
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <Code className="text-[#95FF66]" size={20} />
                      Exercise: Media Query Practice
                    </h2>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <AlertCircle size={14} className="mr-1" />
                        <span>Difficulty: Medium</span>
                      </div>
                      <div className="h-4 w-px bg-secondary mx-2"></div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock size={14} className="mr-1" />
                        <span>Est. time: 20 min</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border border-border p-6 bg-secondary/30 mb-6">
                    <div className="flex items-center justify-center h-[300px] flex-col gap-4">
                      <Code size={48} className="text-[#95FF66] animate-pulse" />
                      <h3 className="text-xl font-medium">Practice exercises are being developed</h3>
                      <p className="text-muted-foreground text-center">We're creating hands-on exercises to help you master media queries.</p>
                      <p className="text-[#95FF66] font-medium">Check back soon!</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
          
          <Card className="border border-secondary p-6 mt-6 animate-slide-up delay-100">
            <div className="flex items-center gap-2 mb-4">
              <LightbulbIcon className="text-[#95FF66]" />
              <h2 className="text-xl font-semibold">Tips & Best Practices</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/30 rounded-lg border border-secondary hover:border-[#95FF66]/30 transition-all">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Monitor size={16} className="text-[#95FF66]" />
                  Responsive Testing
                </h3>
                <p className="text-sm text-muted-foreground">Always test your responsive designs on actual devices, not just browser resize.</p>
              </div>
              
              <div className="p-4 bg-secondary/30 rounded-lg border border-secondary hover:border-[#95FF66]/30 transition-all">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Sparkles size={16} className="text-[#95FF66]" />
                  Mobile First
                </h3>
                <p className="text-sm text-muted-foreground">Start with mobile layouts and progressively enhance for larger screens.</p>
              </div>
              
              <div className="p-4 bg-secondary/30 rounded-lg border border-secondary hover:border-[#95FF66]/30 transition-all">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Code size={16} className="text-[#95FF66]" />
                  Breakpoint Strategy
                </h3>
                <p className="text-sm text-muted-foreground">Choose breakpoints based on content needs, not specific devices.</p>
              </div>
              
              <div className="p-4 bg-secondary/30 rounded-lg border border-secondary hover:border-[#95FF66]/30 transition-all">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <AlertCircle size={16} className="text-[#95FF66]" />
                  Accessibility
                </h3>
                <p className="text-sm text-muted-foreground">Ensure your responsive designs remain accessible on all screen sizes.</p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
          <Card className="border border-secondary p-6 animate-slide-up delay-100">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="text-[#95FF66]" />
              <h2 className="text-xl font-semibold">Module Contents</h2>
            </div>
            
            <ul className="space-y-2">
              <li className="p-3 rounded-md bg-secondary/30 flex items-center gap-3 hover:bg-secondary/50 transition-colors cursor-pointer">
                <div className="bg-[#95FF66]/20 p-1.5 rounded-full">
                  <CheckCircle size={16} className="text-[#95FF66]" />
                </div>
                <span>Introduction to Responsive Design</span>
              </li>
              <li 
                className={`p-3 rounded-md ${activeSection === "media-queries" ? "bg-[#95FF66]/10 border border-[#95FF66]/30" : "bg-secondary/30"} flex items-center gap-3 hover:bg-[#95FF66]/20 transition-colors cursor-pointer`}
                onClick={() => setActiveSection("media-queries")}
              >
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
              <li className="p-3 rounded-md bg-secondary/30 flex items-center gap-3 hover:bg-secondary/50 transition-colors cursor-pointer opacity-60">
                <div className="bg-secondary p-1.5 rounded-full">
                  <FileText size={16} />
                </div>
                <span>CSS Grid Layouts</span>
              </li>
              <li className="p-3 rounded-md bg-secondary/30 flex items-center gap-3 hover:bg-secondary/50 transition-colors cursor-pointer opacity-60">
                <div className="bg-secondary p-1.5 rounded-full">
                  <FileText size={16} />
                </div>
                <span>Flexbox Layouts</span>
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
              <Video className="text-[#95FF66]" />
              <h2 className="text-xl font-semibold">Video Resources</h2>
            </div>
            
            <div className="space-y-4">
              <div className="rounded-lg border border-secondary overflow-hidden group cursor-pointer hover:border-[#95FF66]/30 transition-all">
                <div className="aspect-video bg-secondary/50 relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#95FF66]/20 flex items-center justify-center group-hover:bg-[#95FF66]/30 transition-all">
                      <div className="w-4 h-4 border-t-2 border-r-2 border-transparent border-l-2 border-b-2 border-[#95FF66] rounded-full animate-spin"></div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Video loading...</p>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm">Media Queries Explained</h3>
                  <p className="text-xs text-muted-foreground mt-1">10:25 • Responsive Design Series</p>
                </div>
              </div>
              
              <div className="rounded-lg border border-secondary overflow-hidden group cursor-pointer hover:border-[#95FF66]/30 transition-all opacity-60">
                <div className="aspect-video bg-secondary/50 relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                      <span className="sr-only">Play</span>
                      <div className="ml-1 w-0 h-0 border-t-[8px] border-b-[8px] border-r-0 border-l-[12px] border-transparent border-l-white/70"></div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Coming soon</p>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm">Flexbox vs Grid</h3>
                  <p className="text-xs text-muted-foreground mt-1">8:37 • Layout Systems</p>
                </div>
              </div>
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
              <li className="flex items-center gap-2 p-2 hover:bg-secondary/20 rounded transition-colors">
                <FileText size={16} className="text-[#95FF66]" />
                <a href="#" className="text-[#95FF66] hover:underline">Responsive Design Principles</a>
              </li>
              <li className="flex items-center gap-2 p-2 hover:bg-secondary/20 rounded transition-colors">
                <FileText size={16} className="text-[#95FF66]" />
                <a href="#" className="text-[#95FF66] hover:underline">CSS Variables Tutorial</a>
              </li>
            </ul>
            
            <Button variant="outline" className="w-full mt-4 text-[#95FF66] border-[#95FF66]/30 hover:bg-[#95FF66]/10">
              View All Resources
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModernHTMLCSS;
