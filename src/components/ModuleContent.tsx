
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Code,
  Coffee,
  Copy,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Heart,
  Info,
  Lightbulb,
  PlayCircle,
  Star,
  Timer,
  Zap,
  MessageCircle
} from "lucide-react";

const ModuleContent = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("content");
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [studyTime, setStudyTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedCodeTab, setSelectedCodeTab] = useState("html");
  const [activeQuizAnswer, setActiveQuizAnswer] = useState<string | null>(null);
  const [showQuizFeedback, setShowQuizFeedback] = useState(false);
  const [notesInput, setNotesInput] = useState("");
  const [savedNotes, setSavedNotes] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  // Load module data and simulate loading
  useEffect(() => {
    setIsLoading(true);
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [moduleId]);

  // Study timer
  useEffect(() => {
    let interval: number | null = null;
    
    if (isTimerRunning) {
      interval = window.setInterval(() => {
        setStudyTime(prev => prev + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  // Format time for display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Mock sections for the Modern HTML & CSS module
  const sections = [
    {
      title: "Introduction to Modern HTML",
      description: "Learn about the latest HTML features and best practices",
      content: (
        <div className="space-y-6 animate-fade-in prose">
          <h3>Welcome to Modern HTML</h3>
          <p>
            Modern HTML leverages the latest features of HTML5 to create more semantic, 
            accessible, and powerful web experiences. This module will guide you through 
            the essential concepts and techniques.
          </p>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-white/10">
            <p className="text-white/80 text-center">
              <Info className="h-5 w-5 inline-block mr-2 text-[#95FF66]" />
              Full content is being developed. Check back soon for a comprehensive guide to Modern HTML!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "CSS Layout Techniques",
      description: "Master flexbox, grid, and responsive design",
      content: (
        <div className="space-y-6 animate-fade-in prose">
          <h3>Modern CSS Layout</h3>
          <p>
            CSS has evolved tremendously with powerful layout systems like Flexbox and Grid,
            making complex layouts simpler and more intuitive to implement.
          </p>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-white/10">
            <p className="text-white/80 text-center">
              <Info className="h-5 w-5 inline-block mr-2 text-[#95FF66]" />
              Full content is being developed. Check back soon for detailed CSS layout techniques!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Responsive Design Principles",
      description: "Create websites that work on any device",
      content: (
        <div className="space-y-6 animate-fade-in prose">
          <h3>Building Responsive Websites</h3>
          <p>
            Responsive design ensures your websites look and function well on devices of all sizes,
            from mobile phones to large desktop monitors.
          </p>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-white/10">
            <p className="text-white/80 text-center">
              <Info className="h-5 w-5 inline-block mr-2 text-[#95FF66]" />
              Full content is being developed. Check back soon for comprehensive responsive design guides!
            </p>
          </div>
        </div>
      )
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "Which CSS property is used to create a flexible box layout?",
      options: ["display: block", "display: flex", "display: grid", "display: inline"],
      correctAnswer: "display: flex"
    }
  ];

  const handleStartTimer = () => {
    setIsTimerRunning(true);
  };

  const handlePauseTimer = () => {
    setIsTimerRunning(false);
  };

  const handleResetTimer = () => {
    setStudyTime(0);
    setIsTimerRunning(false);
  };

  const handleSaveNote = () => {
    if (notesInput.trim()) {
      setSavedNotes([...savedNotes, notesInput]);
      setNotesInput("");
    }
  };

  const handleQuizAnswer = (answer: string) => {
    setActiveQuizAnswer(answer);
    setShowQuizFeedback(true);
    
    // If correct answer, update progress
    if (answer === quizQuestions[0].correctAnswer) {
      setProgress(Math.min(progress + 10, 100));
    }
  };

  // Navigation between sections
  const goToNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    }
  };

  const goToPrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <div className="w-12 h-12 border-4 border-[#95FF66] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-400">Loading module content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 animate-fade-in">
      {/* Module Header */}
      <div className="glass mb-8 rounded-lg p-6 border border-white/10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#95FF66]/10 rounded-full filter blur-3xl subtle-bg-animation"></div>
        
        <Button 
          variant="ghost" 
          onClick={() => navigate("/learn")}
          className="mb-4 flex items-center hover:bg-white/5"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to All Modules
        </Button>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center">
              Modern HTML & CSS
              <Badge className="ml-2 bg-[#95FF66]/20 text-[#95FF66] border-none">
                <Zap className="h-3 w-3 mr-1" />
                In Progress
              </Badge>
            </h1>
            <p className="text-gray-400 mt-2">
              Master the latest HTML5 and CSS3 techniques for modern web development
            </p>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="bg-white/5 text-white/70 px-3 py-1 rounded-full text-xs flex items-center">
                <BookOpen className="h-3 w-3 mr-1" />
                3 Lessons
              </div>
              <div className="bg-white/5 text-white/70 px-3 py-1 rounded-full text-xs flex items-center">
                <Timer className="h-3 w-3 mr-1" />
                2 hours
              </div>
              <div className="bg-white/5 text-white/70 px-3 py-1 rounded-full text-xs flex items-center">
                <Code className="h-3 w-3 mr-1" />
                Interactive Examples
              </div>
            </div>
          </div>
          
          <div className="shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#95FF66]/20 text-[#95FF66] font-bold text-xl relative">
                <svg className="w-16 h-16 absolute top-0 left-0 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="#222836"
                    strokeWidth="4"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="#95FF66"
                    strokeWidth="4"
                    strokeDasharray={2 * Math.PI * 28}
                    strokeDashoffset={2 * Math.PI * 28 * (1 - progress / 100)}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <span className="relative z-10">{progress}%</span>
              </div>
              <div className="text-sm">
                <div className="text-white">Your Progress</div>
                <div className="text-gray-400">{progress > 0 ? 'In progress' : 'Just started'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar - Mobile: Horizontal tabs, Desktop: Vertical sidebar */}
        <div className="md:col-span-1">
          <div className="glass rounded-lg border border-white/10 p-4 sticky top-8">
            <h2 className="text-xl font-bold mb-4 text-white">Module Content</h2>
            
            <div className="space-y-2">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    currentSection === index 
                      ? "bg-[#95FF66]/20 text-[#95FF66]" 
                      : "hover:bg-white/5 text-white/70"
                  } flex items-center justify-between group`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                      currentSection === index 
                        ? "bg-[#95FF66]/30" 
                        : "bg-white/10"
                    }`}>
                      <span className="text-xs">{index + 1}</span>
                    </div>
                    <span className="text-sm">{section.title}</span>
                  </div>
                  {currentSection === index && (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
              ))}
            </div>
            
            <Separator className="my-4 bg-white/10" />
            
            {/* Additional Module Resources */}
            <h3 className="text-sm font-medium text-white/80 mb-3">Resources</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/70 text-sm flex items-center transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download Materials
              </button>
              <button className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/70 text-sm flex items-center transition-colors">
                <FileText className="h-4 w-4 mr-2" />
                Reference Guide
              </button>
              <button className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white/70 text-sm flex items-center transition-colors">
                <ExternalLink className="h-4 w-4 mr-2" />
                Additional Resources
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="md:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="content" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
                <BookOpen className="h-4 w-4 mr-2" />
                Content
              </TabsTrigger>
              <TabsTrigger value="code" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
                <Code className="h-4 w-4 mr-2" />
                Examples
              </TabsTrigger>
              <TabsTrigger value="quiz" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
                <CheckCircle className="h-4 w-4 mr-2" />
                Quiz
              </TabsTrigger>
              <TabsTrigger value="notes" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
                <FileText className="h-4 w-4 mr-2" />
                Notes
              </TabsTrigger>
            </TabsList>
            
            {/* Content Tab */}
            <TabsContent value="content" className="mt-0 animate-fade-in">
              <div className="glass rounded-lg border border-white/10 p-6">
                <h2 className="text-2xl font-bold mb-1">{sections[currentSection].title}</h2>
                <p className="text-gray-400 mb-6">{sections[currentSection].description}</p>
                
                <div className="mt-6">
                  {sections[currentSection].content}
                </div>
                
                {/* Navigation buttons */}
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={goToPrevSection} 
                    disabled={currentSection === 0}
                    className="border-white/10 hover:bg-white/5"
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous Section
                  </Button>
                  <Button 
                    variant={currentSection === sections.length - 1 ? "educational" : "outline"} 
                    onClick={goToNextSection}
                    disabled={currentSection === sections.length - 1}
                    className={currentSection === sections.length - 1 ? "" : "border-white/10 hover:bg-white/5"}
                  >
                    {currentSection === sections.length - 1 ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Complete Module
                      </>
                    ) : (
                      <>
                        Next Section
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
              
              {/* Flashcard */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-white">Knowledge Check</h3>
                <div 
                  className={`flashcard ${flashcardFlipped ? 'flipped' : ''}`} 
                  onClick={() => setFlashcardFlipped(!flashcardFlipped)}
                >
                  <div className="flashcard-inner">
                    <div className="flashcard-front">
                      <h4 className="text-lg font-medium">What does the CSS 'display: flex' property do?</h4>
                      <p className="text-sm text-gray-400 mt-2">Click to reveal answer</p>
                    </div>
                    <div className="flashcard-back">
                      <p>The 'display: flex' property enables a flex context for all its direct children, creating a flexible box layout that allows responsive elements that can expand and shrink.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Study Timer */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-white">Study Timer</h3>
                <div className="glass rounded-lg border border-white/10 p-4">
                  <div className="study-timer">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleStartTimer}
                      disabled={isTimerRunning}
                      className="border-white/10 hover:bg-white/5"
                    >
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Start
                    </Button>
                    <div className="timer-display">{formatTime(studyTime)}</div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handlePauseTimer}
                      disabled={!isTimerRunning}
                      className="border-white/10 hover:bg-white/5"
                    >
                      <Coffee className="h-4 w-4 mr-2" />
                      Pause
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleResetTimer}
                      className="ml-2 border-white/10 hover:bg-white/5"
                    >
                      <Timer className="h-4 w-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* AI Assistant */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-white">AI Learning Assistant</h3>
                <div className="ai-assistant">
                  <div className="ai-assistant-header">
                    <div className="ai-assistant-avatar">
                      <Lightbulb className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-white">Learning Assistant</span>
                  </div>
                  <p className="text-white/80 text-sm mt-2">
                    Need help understanding Modern HTML & CSS concepts? I'm here to assist with explanations and examples!
                  </p>
                  <div className="mt-3 flex">
                    <Button variant="educational" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Ask for Help
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Code Examples Tab */}
            <TabsContent value="code" className="mt-0 animate-fade-in">
              <div className="glass rounded-lg border border-white/10 p-6">
                <h2 className="text-2xl font-bold mb-6">Interactive Code Examples</h2>
                
                <div className="code-playground">
                  <div className="code-playground-header">
                    <div className="code-playground-tabs">
                      <div 
                        className={`code-playground-tab ${selectedCodeTab === 'html' ? 'active' : ''}`}
                        onClick={() => setSelectedCodeTab('html')}
                      >
                        HTML
                      </div>
                      <div 
                        className={`code-playground-tab ${selectedCodeTab === 'css' ? 'active' : ''}`}
                        onClick={() => setSelectedCodeTab('css')}
                      >
                        CSS
                      </div>
                      <div 
                        className={`code-playground-tab ${selectedCodeTab === 'result' ? 'active' : ''}`}
                        onClick={() => setSelectedCodeTab('result')}
                      >
                        Result
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-white/70">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {selectedCodeTab === 'html' && (
                    <div className="code-playground-editor">
                      <pre><code className="code-html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern HTML Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="container">
    <h1>Welcome to Modern HTML</h1>
    <p>This is a simple example of modern HTML5 markup.</p>
    
    <section class="features">
      <div class="feature">
        <h2>Semantic HTML</h2>
        <p>Using the right tags for the right purpose.</p>
      </div>
      <div class="feature">
        <h2>Accessibility</h2>
        <p>Making web content accessible to everyone.</p>
      </div>
    </section>
  </main>
</body>
</html>`}
                      </code></pre>
                    </div>
                  )}
                  
                  {selectedCodeTab === 'css' && (
                    <div className="code-playground-editor">
                      <pre><code className="code-css">
{`.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

.features {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.feature {
  flex: 1;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Responsive design */
@media (max-width: 768px) {
  .features {
    flex-direction: column;
  }
}`}
                      </code></pre>
                    </div>
                  )}
                  
                  {selectedCodeTab === 'result' && (
                    <div className="code-playground-preview">
                      <div className="bg-white text-black p-4 rounded">
                        <h1 className="text-xl font-bold text-gray-800 mb-2">Welcome to Modern HTML</h1>
                        <p className="text-gray-600 mb-4">This is a simple example of modern HTML5 markup.</p>
                        
                        <div className="space-y-4 md:flex md:gap-4 md:space-y-0">
                          <div className="bg-gray-100 p-4 rounded shadow-sm flex-1">
                            <h2 className="text-lg font-semibold text-gray-800 mb-1">Semantic HTML</h2>
                            <p className="text-gray-600">Using the right tags for the right purpose.</p>
                          </div>
                          <div className="bg-gray-100 p-4 rounded shadow-sm flex-1">
                            <h2 className="text-lg font-semibold text-gray-800 mb-1">Accessibility</h2>
                            <p className="text-gray-600">Making web content accessible to everyone.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <p className="text-white/70 text-sm">
                    Try modifying the code above to see how HTML and CSS work together to create
                    modern web layouts.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            {/* Quiz Tab */}
            <TabsContent value="quiz" className="mt-0 animate-fade-in">
              <div className="glass rounded-lg border border-white/10 p-6">
                <h2 className="text-2xl font-bold mb-6">Knowledge Check Quiz</h2>
                
                <div className="space-y-6">
                  {quizQuestions.map((quiz, index) => (
                    <div key={index} className="space-y-4">
                      <h3 className="text-lg font-medium">{quiz.question}</h3>
                      
                      <div className="space-y-2">
                        {quiz.options.map((option) => (
                          <div 
                            key={option}
                            onClick={() => handleQuizAnswer(option)}
                            className={`quiz-option p-3 rounded-lg border cursor-pointer transition-all ${
                              activeQuizAnswer === option
                                ? option === quiz.correctAnswer
                                  ? "border-[#95FF66] bg-[#95FF66]/10"
                                  : "border-red-500 bg-red-500/10"
                                : "border-white/10 hover:border-white/30"
                            }`}
                          >
                            {option}
                            
                            {showQuizFeedback && activeQuizAnswer === option && (
                              option === quiz.correctAnswer ? (
                                <span className="ml-2 text-[#95FF66]">✓ Correct!</span>
                              ) : (
                                <span className="ml-2 text-red-400">✗ Incorrect</span>
                              )
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {showQuizFeedback && activeQuizAnswer !== quiz.correctAnswer && (
                        <div className="bg-[#95FF66]/10 p-3 rounded-lg text-sm">
                          <p className="text-white">
                            <Info className="h-4 w-4 inline-block mr-2 text-[#95FF66]" />
                            The correct answer is: <span className="text-[#95FF66] font-medium">{quiz.correctAnswer}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <Button 
                    variant="educational" 
                    className="mt-4" 
                    onClick={() => {
                      setActiveQuizAnswer(null);
                      setShowQuizFeedback(false);
                    }}
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Try Another Question
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* Notes Tab */}
            <TabsContent value="notes" className="mt-0 animate-fade-in">
              <div className="glass rounded-lg border border-white/10 p-6">
                <h2 className="text-2xl font-bold mb-6">Your Notes</h2>
                
                <div className="note-editor">
                  <div className="note-editor-header">
                    <h3 className="text-lg font-medium">Add a New Note</h3>
                  </div>
                  <textarea
                    value={notesInput}
                    onChange={(e) => setNotesInput(e.target.value)}
                    placeholder="Type your notes here..."
                    className="note-editor-input"
                  />
                  <div className="mt-3 flex justify-end">
                    <Button variant="educational" onClick={handleSaveNote}>
                      <FileText className="mr-2 h-4 w-4" />
                      Save Note
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-medium">Saved Notes</h3>
                  
                  {savedNotes.length === 0 ? (
                    <div className="note-card">
                      <p className="text-white/70 italic">No notes yet. Add your first note above!</p>
                    </div>
                  ) : (
                    savedNotes.map((note, index) => (
                      <div key={index} className="note-card">
                        <div className="note-timestamp">
                          {new Date().toLocaleDateString()}
                        </div>
                        <p>{note}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
