import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { tracks } from "@/constants";
import { 
  ArrowLeft, BookOpen, Code, ExternalLink, BookmarkPlus, CheckCircle, Copy, 
  ThumbsUp, Star, Coffee, Clock, Search, Download, Share2, Award, 
  Lightbulb, FileText, MessageSquare, Users, Play, ChevronRight, ChevronLeft,
  Sun, Moon, Maximize, Minimize, BookMarked, Eye, EyeOff, PenTool, Save,
  RotateCcw, Send, Sparkles, Palette, Zap, Bot, Brain, Loader, X, Plus, 
  TerminalSquare, PlayCircle, PauseCircle, HelpCircle
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

const ModuleContent = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("content");
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("introduction");
  const [completedSections, setCompletedSections] = useState(["introduction"]);
  const [showOverview, setShowOverview] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [liked, setLiked] = useState(false);
  const [viewMode, setViewMode] = useState("normal"); // normal, focus, or presentation
  const [fontSize, setFontSize] = useState("medium");
  const [showDiscussion, setShowDiscussion] = useState(false);
  const [discussionInput, setDiscussionInput] = useState("");
  const [discussions, setDiscussions] = useState([
    { 
      id: 1, 
      user: "Sarah Johnson", 
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=50&h=50&q=80",
      content: "Great explanation of flexbox! This helped me understand the concept much better.",
      likes: 4,
      time: "2 days ago",
      replies: [
        {
          id: 101,
          user: "David Lee",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=50&h=50&q=80",
          content: "I agree! The visual examples really made it click for me.",
          time: "1 day ago"
        }
      ]
    }
  ]);
  
  // New state variables for enhanced features
  const [theme, setTheme] = useState("dark");
  const [codePlayground, setCodePlayground] = useState({
    html: "<div class=\"box\">Hello World</div>",
    css: ".box {\n  background-color: #95FF66;\n  padding: 20px;\n  border-radius: 8px;\n  color: #222;\n  font-weight: bold;\n  text-align: center;\n}"
  });
  const [activeCodeTab, setActiveCodeTab] = useState("html");
  const [showPreview, setShowPreview] = useState(true);
  const [isFlipped, setIsFlipped] = useState({});
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);
  const [studyTimer, setStudyTimer] = useState({ minutes: 25, seconds: 0, isActive: false });
  const [timerInterval, setTimerInterval] = useState(null);
  const [showAiAssistant, setShowAiAssistant] = useState(false);
  const [aiAssistantMessage, setAiAssistantMessage] = useState("");
  const [aiResponses, setAiResponses] = useState([
    {
      question: "What's the difference between flex and grid?",
      answer: "Flexbox is designed for one-dimensional layouts (rows OR columns), while Grid is designed for two-dimensional layouts (rows AND columns). Use Flexbox for simple layouts and component alignment, and Grid for complex grid-based layouts."
    }
  ]);
  const [showHighlightOptions, setShowHighlightOptions] = useState(false);
  const [highlightColor, setHighlightColor] = useState("#95FF66");
  const [preferredContentStyle, setPreferredContentStyle] = useState("visual"); // visual, code, or text
  const [showProgressDetails, setShowProgressDetails] = useState(false);
  const [searchInProgress, setSearchInProgress] = useState(false);

  // Find the module across all tracks
  const module = tracks.flatMap(track => track.modules).find(m => m.id === moduleId);
  const moduleIndex = module ? tracks.find(track => track.modules.includes(module))?.modules.indexOf(module) : -1;
  const track = tracks.find(track => track.modules.includes(module));
  
  // Get next and previous modules
  const nextModule = moduleIndex !== -1 && moduleIndex < (track?.modules.length || 0) - 1 
    ? track?.modules[moduleIndex + 1] 
    : null;
  
  const prevModule = moduleIndex !== -1 && moduleIndex > 0 
    ? track?.modules[moduleIndex - 1] 
    : null;
  
  // Generate HTML & CSS content for the Modern HTML & CSS module
  const htmlCssContent = moduleId === "modern-html-css" ? {
    introduction: {
      title: "Introduction to Modern HTML & CSS",
      content: `
        <div class="prose">
          <p>Modern HTML and CSS have evolved significantly over the years, providing powerful tools for creating responsive, accessible, and visually appealing websites.</p>
          
          <h3>Key Concepts You'll Learn</h3>
          <ul>
            <li>Semantic HTML5 elements</li>
            <li>CSS Grid and Flexbox layouts</li>
            <li>CSS Variables (Custom Properties)</li>
            <li>Responsive design with media queries</li>
            <li>CSS animations and transitions</li>
            <li>Modern CSS selectors and pseudo-classes</li>
          </ul>
          
          <p>This module focuses on modern best practices that are widely supported across browsers.</p>
        </div>
      `
    },
    semanticHtml: {
      title: "Semantic HTML5",
      content: `
        <div class="prose">
          <p>Semantic HTML gives meaning to your markup so browsers and developers can better understand your content.</p>
          
          <h3>Why Semantic HTML Matters</h3>
          <p>Semantic HTML improves:</p>
          <ul>
            <li>Accessibility for screen readers</li>
            <li>SEO and search engine rankings</li>
            <li>Code readability and maintenance</li>
          </ul>
          
          <h3>Common Semantic Elements</h3>
          <pre><code><span class="code-html">&lt;header&gt;</span> - Page header or section header
<span class="code-html">&lt;nav&gt;</span> - Navigation links
<span class="code-html">&lt;main&gt;</span> - Main content area
<span class="code-html">&lt;article&gt;</span> - Self-contained content
<span class="code-html">&lt;section&gt;</span> - Thematic grouping of content
<span class="code-html">&lt;aside&gt;</span> - Sidebar or tangential content
<span class="code-html">&lt;footer&gt;</span> - Page footer or section footer</code></pre>
        </div>
      `
    },
    cssLayout: {
      title: "Modern CSS Layout",
      content: `
        <div class="prose">
          <p>Modern CSS offers powerful layout systems with Flexbox and Grid that make complex layouts simpler to implement.</p>
          
          <h3>Flexbox</h3>
          <p>Flexbox is designed for one-dimensional layouts (rows or columns):</p>
          <pre><code><span class="code-css">.container</span> {
  <span class="code-property">display</span>: <span class="code-value">flex</span>;
  <span class="code-property">justify-content</span>: <span class="code-value">space-between</span>;
  <span class="code-property">align-items</span>: <span class="code-value">center</span>;
}</code></pre>
          
          <h3>CSS Grid</h3>
          <p>Grid is designed for two-dimensional layouts (rows and columns):</p>
          <pre><code><span class="code-css">.container</span> {
  <span class="code-property">display</span>: <span class="code-value">grid</span>;
  <span class="code-property">grid-template-columns</span>: <span class="code-value">repeat(3, 1fr)</span>;
  <span class="code-property">gap</span>: <span class="code-value">1rem</span>;
}</code></pre>
        </div>
      `
    },
    cssVariables: {
      title: "CSS Custom Properties",
      content: `
        <div class="prose">
          <p>CSS Variables (Custom Properties) allow you to define reusable values in your stylesheets.</p>
          
          <h3>Defining and Using CSS Variables</h3>
          <pre><code><span class="code-css">:root</span> {
  <span class="code-property">--primary-color</span>: <span class="code-value">#95FF66</span>;
  <span class="code-property">--secondary-color</span>: <span class="code-value">#4CAF50</span>;
  <span class="code-property">--spacing-unit</span>: <span class="code-value">8px</span>;
}

<span class="code-css">.button</span> {
  <span class="code-property">background-color</span>: <span class="code-value">var(--primary-color)</span>;
  <span class="code-property">padding</span>: <span class="code-value">calc(var(--spacing-unit) * 2)</span>;
}</code></pre>
          
          <h3>Benefits of CSS Variables</h3>
          <ul>
            <li>Easier theming and dark mode implementation</li>
            <li>Better organization of repeated values</li>
            <li>Can be manipulated with JavaScript</li>
            <li>Can be scoped to specific components</li>
          </ul>
        </div>
      `
    },
    responsiveDesign: {
      title: "Responsive Design",
      content: `
        <div class="prose">
          <p>Responsive design ensures your website looks good on all devices and screen sizes.</p>
          
          <h3>Media Queries</h3>
          <pre><code><span class="code-css">/* Mobile first approach */</span>
<span class="code-css">.container</span> {
  <span class="code-property">width</span>: <span class="code-value">100%</span>;
}

<span class="code-css">/* Tablet and above */</span>
<span class="code-css">@media (min-width: 768px)</span> {
  <span class="code-css">.container</span> {
    <span class="code-property">width</span>: <span class="code-value">750px</span>;
  }
}</code></pre>
          
          <h3>Modern Responsive Approaches</h3>
          <ul>
            <li>CSS Grid with auto-fit/auto-fill for responsive layouts</li>
            <li>Clamp() for fluid typography and spacing</li>
            <li>Container queries (newer feature)</li>
            <li>Viewport units (vw, vh, vmin, vmax)</li>
          </ul>
        </div>
      `
    },
    animations: {
      title: "CSS Animations & Transitions",
      content: `
        <div class="prose">
          <p>CSS animations and transitions add life to your web pages without JavaScript.</p>
          
          <h3>CSS Transitions</h3>
          <pre><code><span class="code-css">.button</span> {
  <span class="code-property">background-color</span>: <span class="code-value">#95FF66</span>;
  <span class="code-property">transition</span>: <span class="code-value">background-color 0.3s ease</span>;
}

<span class="code-css">.button:hover</span> {
  <span class="code-property">background-color</span>: <span class="code-value">#4CAF50</span>;
}</code></pre>
          
          <h3>CSS Animations</h3>
          <pre><code><span class="code-css">@keyframes fadeIn</span> {
  <span class="code-property">from</span> {
    <span class="code-property">opacity</span>: <span class="code-value">0</span>;
    <span class="code-property">transform</span>: <span class="code-value">translateY(10px)</span>;
  }
  <span class="code-property">to</span> {
    <span class="code-property">opacity</span>: <span class="code-value">1</span>;
    <span class="code-property">transform</span>: <span class="code-value">translateY(0)</span>;
  }
}

<span class="code-css">.element</span> {
  <span class="code-property">animation</span>: <span class="code-value">fadeIn 0.5s ease-out forwards</span>;
}</code></pre>
        </div>
      `
    }
  } : {};

  const sections = moduleId === "modern-html-css" ? [
    { id: "introduction", title: "Introduction" },
    { id: "semanticHtml", title: "Semantic HTML5" },
    { id: "cssLayout", title: "Modern CSS Layout" },
    { id: "cssVariables", title: "CSS Variables" },
    { id: "responsiveDesign", title: "Responsive Design" },
    { id: "animations", title: "Animations & Transitions" },
    { id: "accessibility", title: "Web Accessibility" },
    { id: "cssFrameworks", title: "CSS Frameworks" },
    { id: "bestPractices", title: "Best Practices" }
  ] : [];

  // Generate exercise content
  const exercises = moduleId === "modern-html-css" ? [
    {
      title: "Build a Semantic Structure",
      description: "Create a webpage with proper semantic HTML5 elements for a blog post.",
      difficulty: "Beginner",
      estimatedTime: "20 minutes"
    },
    {
      title: "Flexbox Navigation Bar",
      description: "Implement a responsive navigation bar using Flexbox.",
      difficulty: "Intermediate",
      estimatedTime: "30 minutes"
    },
    {
      title: "CSS Grid Photo Gallery",
      description: "Create a responsive photo gallery using CSS Grid.",
      difficulty: "Intermediate",
      estimatedTime: "45 minutes"
    },
    {
      title: "Theme Switcher with CSS Variables",
      description: "Implement a light/dark theme switcher using CSS Custom Properties and JavaScript.",
      difficulty: "Advanced",
      estimatedTime: "60 minutes"
    }
  ] : [];

  // Resources
  const resources = moduleId === "modern-html-css" ? [
    {
      title: "MDN Web Docs - HTML",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      type: "Documentation"
    },
    {
      title: "MDN Web Docs - CSS",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      type: "Documentation"
    },
    {
      title: "CSS-Tricks Flexbox Guide",
      url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      type: "Tutorial"
    },
    {
      title: "CSS-Tricks Grid Guide",
      url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
      type: "Tutorial"
    },
    {
      title: "Web.dev Learn CSS",
      url: "https://web.dev/learn/css/",
      type: "Course"
    }
  ] : [];

  // New content for added sections
  const additionalContent = {
    accessibility: {
      title: "Web Accessibility",
      content: `
        <div class="prose">
          <p>Web accessibility ensures that websites and applications are usable by people with disabilities.</p>
          
          <h3>Key Accessibility Principles</h3>
          <ul>
            <li>Provide text alternatives for non-text content</li>
            <li>Create content that can be presented in different ways</li>
            <li>Make all functionality available from a keyboard</li>
            <li>Give users enough time to read and use content</li>
            <li>Make text readable and understandable</li>
          </ul>
          
          <h3>ARIA Attributes</h3>
          <pre><code><span class="code-html">&lt;button 
  aria-label="Close" 
  aria-describedby="desc"
&gt;
  ✕
&lt;/button&gt;
&lt;div id="desc" class="sr-only"&gt;Close the dialog&lt;/div&gt;</span></code></pre>
          
          <h3>Color Contrast</h3>
          <p>Ensure sufficient color contrast between text and its background:</p>
          <pre><code><span class="code-css">.accessible-text</span> {
  <span class="code-property">color</span>: <span class="code-value">#333</span>;
  <span class="code-property">background-color</span>: <span class="code-value">#f8f8f8</span>;
  <span class="code-comment">/* Contrast ratio of at least 4.5:1 for normal text */</span>
}</code></pre>
        </div>
      `
    },
    cssFrameworks: {
      title: "CSS Frameworks",
      content: `
        <div class="prose">
          <p>CSS frameworks provide pre-written, standardized CSS code to help speed up development.</p>
          
          <h3>Popular CSS Frameworks</h3>
          <ul>
            <li>Tailwind CSS - Utility-first framework</li>
            <li>Bootstrap - Component-based framework</li>
            <li>Bulma - Modern CSS framework based on Flexbox</li>
            <li>Foundation - Advanced responsive front-end framework</li>
          </ul>
          
          <h3>Tailwind CSS Example</h3>
          <pre><code><span class="code-html">&lt;div class="flex items-center justify-between p-4 bg-white shadow rounded-lg"&gt;
  &lt;h2 class="text-xl font-bold text-gray-800"&gt;Card Title&lt;/h2&gt;
  &lt;button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"&gt;
    Click Me
  &lt;/button&gt;
&lt;/div&gt;</span></code></pre>
          
          <h3>When to Use a Framework</h3>
          <p>Consider using a CSS framework when:</p>
          <ul>
            <li>You need to rapidly prototype a project</li>
            <li>You want consistent styling across your application</li>
            <li>You're working with a team and need standardization</li>
            <li>You need responsive layouts without building them from scratch</li>
          </ul>
        </div>
      `
    },
    bestPractices: {
      title: "Best Practices",
      content: `
        <div class="prose">
          <p>Follow these best practices to create maintainable and efficient CSS code.</p>
          
          <h3>CSS Organization</h3>
          <ul>
            <li>Use a consistent naming convention (e.g., BEM)</li>
            <li>Group related styles together</li>
            <li>Comment your complex code</li>
            <li>Split CSS into logical files</li>
          </ul>
          
          <h3>BEM Naming Convention</h3>
          <pre><code><span class="code-css">/* Block component */</span>
<span class="code-css">.card</span> { }

<span class="code-css">/* Element that depends on the block */</span> 
<span class="code-css">.card__title</span> { }
<span class="code-css">.card__image</span> { }

<span class="code-css">/* Modifier that changes the style of the block */</span>
<span class="code-css">.card--featured</span> { }</code></pre>
          
          <h3>Performance Tips</h3>
          <ul>
            <li>Avoid deeply nested selectors</li>
            <li>Use shorthand properties when possible</li>
            <li>Minimize use of !important</li>
            <li>Optimize for rendering performance (prefer opacity/transform over other properties)</li>
          </ul>
          
          <h3>Media Query Best Practices</h3>
          <pre><code><span class="code-css">/* Mobile first approach */</span>
<span class="code-css">.element</span> {
  <span class="code-property">width</span>: <span class="code-value">100%</span>;
}

<span class="code-css">/* Tablet */</span>
<span class="code-css">@media (min-width: 768px)</span> {
  <span class="code-css">.element</span> {
    <span class="code-property">width</span>: <span class="code-value">50%</span>;
  }
}

<span class="code-css">/* Desktop */</span>
<span class="code-css">@media (min-width: 1024px)</span> {
  <span class="code-css">.element</span> {
    <span class="code-property">width</span>: <span class="code-value">33.33%</span>;
  }
}</code></pre>
        </div>
      `
    }
  };

  // Interactive quiz data
  const quizData = [
    {
      question: "Which CSS property is used to define a flexible container?",
      options: ["flex", "flexible", "flexbox", "display-flex"],
      correctAnswer: "flex",
      explanation: "The `display: flex` property is used to create a flexible container."
    },
    {
      question: "Which HTML5 element represents the main content of a document?",
      options: ["<header>", "<main>", "<section>", "<article>"],
      correctAnswer: "<main>",
      explanation: "The <main> element represents the main content of a document."
    },
    {
      question: "Which CSS unit is relative to the font-size of the root element?",
      options: ["px", "em", "rem", "vh"],
      correctAnswer: "rem",
      explanation: "The 'rem' unit is relative to the font-size of the root element (html)."
    }
  ];
  
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Simulate progress tracking
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (Math.random() * 5);
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 3000);

    // Reset states when module changes
    setActiveSection("introduction");
    setShowOverview(false);
    setFeedback(null);
    setActiveTab("content");

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [moduleId]);

  // New effect for study timer
  useEffect(() => {
    if (studyTimer.isActive) {
      const interval = setInterval(() => {
        setStudyTimer(prevTimer => {
          if (prevTimer.seconds === 0) {
            if (prevTimer.minutes === 0) {
              // Timer finished
              clearInterval(interval);
              toast({
                title: "Study session completed!",
                description: "Great job! Take a short break before continuing.",
                variant: "default",
              });
              return { ...prevTimer, isActive: false };
            }
            return { minutes: prevTimer.minutes - 1, seconds: 59, isActive: true };
          }
          return { ...prevTimer, seconds: prevTimer.seconds - 1 };
        });
      }, 1000);
      
      setTimerInterval(interval);
      return () => clearInterval(interval);
    }
  }, [studyTimer.isActive, toast]);

  if (!module) {
    return <div>Module not found</div>;
  }

  const handleCopyCode = () => {
    // Simulate code copying
    setCopied(true);
    toast({
      title: "Code copied to clipboard!",
      description: "You can now paste the code into your project.",
      variant: "default",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    toast({
      title: bookmarked ? "Bookmark removed" : "Bookmark added!",
      description: bookmarked 
        ? "Module removed from your bookmarks." 
        : "This module has been added to your bookmarks.",
      variant: "default",
    });
  };

  // Handle code playground
  const handleCodeChange = (type, value) => {
    setCodePlayground(prev => ({ ...prev, [type]: value }));
  };

  const renderCodePreview = () => {
    try {
      return `
        <html>
          <head>
            <style>${codePlayground.css}</style>
          </head>
          <body style="margin:0;padding:16px;font-family:sans-serif;">
            ${codePlayground.html}
          </body>
        </html>
      `;
    } catch (error) {
      return `<div style="color:red;padding:20px;">Error rendering preview</div>`;
    }
  };

  // Handle flashcard flip
  const toggleFlip = (id) => {
    setIsFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Handle notes
  const addNote = () => {
    if (noteInput.trim()) {
      const newNote = {
        id: Date.now(),
        content: noteInput,
        timestamp: new Date().toLocaleString(),
        section: activeSection
      };
      setNotes([newNote, ...notes]);
      setNoteInput("");
      toast({
        title: "Note saved!",
        description: "Your note has been saved successfully.",
        variant: "default",
      });
    }
  };

  // Handle study timer
  const toggleTimer = () => {
    setStudyTimer(prev => ({ ...prev, isActive: !prev.isActive }));
  };

  const resetTimer = () => {
    setStudyTimer({ minutes: 25, seconds: 0, isActive: false });
    if (timerInterval) clearInterval(timerInterval);
  };

  // Handle AI assistant
  const submitAiQuestion = () => {
    if (aiAssistantMessage.trim()) {
      toast({
        title: "Question submitted",
        description: "The AI assistant is processing your question...",
        variant: "default",
      });
      
      // Simulate AI response
      setTimeout(() => {
        const newResponse = {
          question: aiAssistantMessage,
          answer: getSimulatedAiResponse(aiAssistantMessage)
        };
        setAiResponses([newResponse, ...aiResponses]);
        setAiAssistantMessage("");
      }, 1500);
    }
  };

  const getSimulatedAiResponse = (question) => {
    // Simple simulated responses based on keywords
    if (question.toLowerCase().includes("flexbox")) {
      return "Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces. Key properties include display: flex, justify-content, align-items, and flex-direction.";
    } else if (question.toLowerCase().includes("grid")) {
      return "CSS Grid Layout is a two-dimensional layout system designed for complex layouts. It works with both rows and columns, making it different from flexbox which is one-dimensional. Key properties include display: grid, grid-template-columns, grid-template-rows, and grid-gap.";
    } else if (question.toLowerCase().includes("semantics") || question.toLowerCase().includes("semantic")) {
      return "Semantic HTML elements clearly describe their meaning to both the browser and the developer. Examples include <header>, <footer>, <article>, and <section>. Using semantic elements improves accessibility, SEO, and code readability.";
    } else {
      return "That's a great question about HTML/CSS! The key to mastering web development is understanding the fundamentals and practicing regularly. Would you like me to provide more specific information or examples about this topic?";
    }
  };

  // Filter sections based on search query
  const filteredSections = searchQuery 
    ? sections.filter(section => 
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (htmlCssContent[section.id]?.content && 
         htmlCssContent[section.id].content.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : sections;

  return (
    <div className={`container mx-auto py-6 animate-fade-in ${viewMode === "focus" ? "max-w-2xl" : ""}`}>
      {/* Header with navigation and module info */}
      <div className="flex flex-col mb-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="flex items-center w-fit mb-4 hover:bg-white/5 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Track
        </Button>
        
        <div className="glass p-6 rounded-lg backdrop-blur-md border border-white/10 relative animate-fade-in">
          {/* Theme toggle in top-right corner */}
          <div className="absolute top-4 right-4 flex items-center space-x-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle {theme === "dark" ? "light" : "dark"} mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    onClick={() => setViewMode(viewMode === "normal" ? "focus" : "normal")}
                  >
                    {viewMode === "normal" ? <Maximize className="h-4 w-4" /> : <Minimize className="h-4 w-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle {viewMode === "normal" ? "focus" : "normal"} mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center">
                <h1 className="text-3xl font-bold text-white mb-2 flowing-gradient animate-pulse">{module.title}</h1>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`ml-2 transition-colors ${bookmarked ? 'text-[#95FF66]' : 'text-gray-400'}`}
                  onClick={handleBookmark}
                >
                  {bookmarked ? 
                    <BookMarked className="h-5 w-5 fill-[#95FF66]" /> : 
                    <BookmarkPlus className="h-5 w-5" />
                  }
                </Button>
              </div>
              <p className="text-gray-400 mb-4">{module.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full hover:bg-white/10 transition-colors">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>2 hours</span>
                </div>
                <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full hover:bg-white/10 transition-colors">
                  <BookOpen className="h-3 w-3 mr-1" />
                  <span>{sections.length} Topics</span>
                </div>
                <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full hover:bg-white/10 transition-colors">
                  <Code className="h-3 w-3 mr-1" />
                  <span>{exercises.length} Exercises</span>
                </div>
                <div className="flex items-center text-xs text-[#9
