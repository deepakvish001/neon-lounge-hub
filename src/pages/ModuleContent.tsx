
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
                <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full hover:bg-white/10 transition-colors">
                  <Users className="h-3 w-3 mr-1" />
                  <span>Beginner Friendly</span>
                </div>
              </div>
            </div>
            
            {/* Progress circle */}
            <div className="relative h-20 w-20 shrink-0">
              <svg className="h-20 w-20 transform -rotate-90" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  className="stroke-white/5 fill-none" 
                  strokeWidth="8" 
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  className="stroke-[#95FF66] fill-none" 
                  strokeWidth="8"
                  strokeDasharray={`${progress * 2.83} 283`} 
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-md font-bold text-white">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content area with sidebar and content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left sidebar with sections */}
        <div className="md:col-span-1">
          <div className="sticky top-6">
            <div className="glass rounded-lg border border-white/10 overflow-hidden mb-4">
              <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
                <h3 className="font-medium">Module Contents</h3>
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search..."
                    className="pl-8 bg-white/5 border-white/10 h-8 text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <ScrollArea className="h-[400px]">
                <div className="p-2">
                  {filteredSections.map((section) => (
                    <button
                      key={section.id}
                      className={`w-full text-left rounded-md px-3 py-2 mb-1 text-sm flex items-center justify-between transition-colors ${
                        activeSection === section.id
                          ? "bg-[#95FF66]/20 text-[#95FF66]"
                          : "text-gray-300 hover:bg-white/5"
                      }`}
                      onClick={() => setActiveSection(section.id)}
                    >
                      <span className="truncate">{section.title}</span>
                      {completedSections.includes(section.id) && (
                        <CheckCircle className="h-4 w-4 text-[#95FF66] shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>
            
            {/* Study timer */}
            <div className="glass rounded-lg border border-white/10 overflow-hidden mb-4">
              <div className="p-4 bg-white/5 border-b border-white/10">
                <h3 className="font-medium flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Study Timer
                </h3>
              </div>
              <div className="p-4">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold">
                    {String(studyTimer.minutes).padStart(2, '0')}:{String(studyTimer.seconds).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={toggleTimer}
                    className="flex items-center"
                  >
                    {studyTimer.isActive ? (
                      <>
                        <PauseCircle className="h-4 w-4 mr-1" /> Pause
                      </>
                    ) : (
                      <>
                        <PlayCircle className="h-4 w-4 mr-1" /> Start
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={resetTimer}
                    className="flex items-center"
                  >
                    <RotateCcw className="h-4 w-4 mr-1" /> Reset
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Quick notes */}
            <div className="glass rounded-lg border border-white/10 overflow-hidden">
              <div className="p-4 bg-white/5 border-b border-white/10">
                <h3 className="font-medium flex items-center">
                  <PenTool className="h-4 w-4 mr-2" />
                  Quick Notes
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <Input
                    placeholder="Add a note..."
                    className="bg-white/5 border-white/10"
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={addNote} 
                  size="sm" 
                  className="w-full bg-white/10 hover:bg-white/20 text-white mb-3"
                >
                  <PenTool className="h-4 w-4 mr-1" /> Save Note
                </Button>
                
                <ScrollArea className="h-[200px]">
                  <div className="space-y-3">
                    {notes.map(note => (
                      <div key={note.id} className="p-3 bg-white/5 rounded-md text-sm">
                        <p className="text-gray-200">{note.content}</p>
                        <div className="flex justify-between mt-2 text-xs text-gray-400">
                          <span>{note.section}</span>
                          <span>{note.timestamp}</span>
                        </div>
                      </div>
                    ))}
                    {notes.length === 0 && (
                      <div className="text-center text-gray-400 py-8">
                        <FileText className="h-12 w-12 mx-auto mb-2 opacity-20" />
                        <p>No notes yet</p>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="md:col-span-3">
          <Tabs 
            defaultValue="content" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="glass rounded-lg border border-white/10 overflow-hidden"
          >
            <div className="p-1 bg-white/5 border-b border-white/10">
              <TabsList className="grid grid-cols-4 bg-transparent">
                <TabsTrigger 
                  value="content"
                  className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Content
                </TabsTrigger>
                <TabsTrigger 
                  value="exercises"
                  className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
                >
                  <Code className="h-4 w-4 mr-2" />
                  Exercises
                </TabsTrigger>
                <TabsTrigger 
                  value="playground"
                  className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
                >
                  <TerminalSquare className="h-4 w-4 mr-2" />
                  Playground
                </TabsTrigger>
                <TabsTrigger 
                  value="resources"
                  className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Resources
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Content tab */}
            <TabsContent value="content" className="m-0">
              <div ref={contentRef} className="p-6">
                {isLoading ? (
                  <div className="flex justify-center py-12">
                    <Loader className="h-8 w-8 animate-spin text-[#95FF66]" />
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">
                      {htmlCssContent[activeSection]?.title || additionalContent[activeSection]?.title || "Content Coming Soon"}
                    </h2>
                    
                    {(htmlCssContent[activeSection]?.content || additionalContent[activeSection]?.content) ? (
                      <div 
                        className="prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ 
                          __html: htmlCssContent[activeSection]?.content || additionalContent[activeSection]?.content 
                        }} 
                      />
                    ) : (
                      <div className="text-center py-12">
                        <FileText className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                        <h3 className="text-xl font-medium mb-2">Content is being developed</h3>
                        <p className="text-gray-400 mb-4">
                          This section will be available soon. Please check back later.
                        </p>
                        <Button variant="outline">
                          <BookmarkPlus className="h-4 w-4 mr-2" />
                          Get notified when available
                        </Button>
                      </div>
                    )}
                    
                    {/* Navigation buttons */}
                    <div className="flex justify-between mt-12 pt-6 border-t border-white/10">
                      {/* Previous section */}
                      {sections.findIndex(s => s.id === activeSection) > 0 && (
                        <Button
                          variant="outline"
                          onClick={() => {
                            const currentIndex = sections.findIndex(s => s.id === activeSection);
                            if (currentIndex > 0) {
                              setActiveSection(sections[currentIndex - 1].id);
                            }
                          }}
                          className="flex items-center"
                        >
                          <ChevronLeft className="h-4 w-4 mr-1" />
                          Previous
                        </Button>
                      )}
                      
                      {/* Mark as completed */}
                      <Button
                        onClick={() => {
                          if (!completedSections.includes(activeSection)) {
                            setCompletedSections(prev => [...prev, activeSection]);
                            toast({
                              title: "Section completed!",
                              description: "Great job! Keep up the good work.",
                              variant: "default",
                            });
                          }
                        }}
                        className="bg-[#95FF66] text-black hover:bg-[#95FF66]/90"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        {completedSections.includes(activeSection) ? "Completed" : "Mark as Complete"}
                      </Button>
                      
                      {/* Next section */}
                      {sections.findIndex(s => s.id === activeSection) < sections.length - 1 && (
                        <Button
                          variant="outline"
                          onClick={() => {
                            const currentIndex = sections.findIndex(s => s.id === activeSection);
                            if (currentIndex < sections.length - 1) {
                              setActiveSection(sections[currentIndex + 1].id);
                            }
                          }}
                          className="flex items-center"
                        >
                          Next
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </TabsContent>
            
            {/* Exercises tab */}
            <TabsContent value="exercises" className="m-0">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">Practical Exercises</h2>
                
                {exercises.length > 0 ? (
                  <div className="space-y-4">
                    {exercises.map((exercise, index) => (
                      <div 
                        key={index}
                        className="glass p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                      >
                        <h3 className="text-lg font-medium mb-2">{exercise.title}</h3>
                        <p className="text-gray-400 mb-3">{exercise.description}</p>
                        <div className="flex flex-wrap justify-between">
                          <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full mb-2">
                            <Award className="h-3 w-3 mr-1" />
                            <span>{exercise.difficulty}</span>
                          </div>
                          <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full mb-2">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{exercise.estimatedTime}</span>
                          </div>
                          <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white">
                            <Code className="h-4 w-4 mr-1" /> Start Exercise
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Code className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-xl font-medium mb-2">Exercises coming soon</h3>
                    <p className="text-gray-400">
                      We're preparing hands-on exercises for this module.
                    </p>
                  </div>
                )}
                
                {/* Interactive quiz */}
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Knowledge Check</h2>
                  
                  {quizCompleted ? (
                    <div className="text-center py-8 bg-white/5 rounded-lg border border-white/10">
                      <CheckCircle className="h-16 w-16 mx-auto mb-4 text-[#95FF66]" />
                      <h3 className="text-xl font-medium mb-2">Quiz Completed!</h3>
                      <p className="text-gray-400 mb-4">
                        You've successfully completed the quiz.
                      </p>
                      <Button onClick={() => {
                        setQuizCompleted(false);
                        setCurrentQuiz(0);
                        setSelectedAnswer(null);
                        setShowQuizResult(false);
                      }}>
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Retake Quiz
                      </Button>
                    </div>
                  ) : (
                    <div className="glass p-6 rounded-lg border border-white/10">
                      <h3 className="text-lg font-medium mb-4">Question {currentQuiz + 1} of {quizData.length}</h3>
                      <p className="mb-4">{quizData[currentQuiz].question}</p>
                      
                      <div className="space-y-2 mb-6">
                        {quizData[currentQuiz].options.map((option, index) => (
                          <button
                            key={index}
                            className={`w-full text-left p-3 rounded-md transition-colors ${
                              selectedAnswer === option
                                ? showQuizResult
                                  ? option === quizData[currentQuiz].correctAnswer
                                    ? "bg-green-500/20 border border-green-500/50"
                                    : "bg-red-500/20 border border-red-500/50"
                                  : "bg-[#95FF66]/20 border border-[#95FF66]/50"
                                : "bg-white/5 border border-white/10 hover:bg-white/10"
                            }`}
                            onClick={() => !showQuizResult && setSelectedAnswer(option)}
                            disabled={showQuizResult}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                      
                      {showQuizResult && (
                        <div className={`p-4 rounded-md mb-6 ${
                          selectedAnswer === quizData[currentQuiz].correctAnswer
                            ? "bg-green-500/20 border border-green-500/50"
                            : "bg-red-500/20 border border-red-500/50"
                        }`}>
                          <p className="font-medium mb-1">
                            {selectedAnswer === quizData[currentQuiz].correctAnswer
                              ? "Correct!"
                              : "Incorrect"}
                          </p>
                          <p className="text-sm">{quizData[currentQuiz].explanation}</p>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          onClick={() => {
                            if (currentQuiz > 0) {
                              setCurrentQuiz(currentQuiz - 1);
                              setSelectedAnswer(null);
                              setShowQuizResult(false);
                            }
                          }}
                          disabled={currentQuiz === 0}
                        >
                          <ChevronLeft className="h-4 w-4 mr-1" />
                          Previous
                        </Button>
                        
                        {!showQuizResult ? (
                          <Button
                            onClick={() => selectedAnswer && setShowQuizResult(true)}
                            disabled={!selectedAnswer}
                            className="bg-[#95FF66] text-black hover:bg-[#95FF66]/90"
                          >
                            Check Answer
                          </Button>
                        ) : (
                          <Button
                            onClick={() => {
                              if (currentQuiz < quizData.length - 1) {
                                setCurrentQuiz(currentQuiz + 1);
                                setSelectedAnswer(null);
                                setShowQuizResult(false);
                              } else {
                                setQuizCompleted(true);
                              }
                            }}
                            className="bg-[#95FF66] text-black hover:bg-[#95FF66]/90"
                          >
                            {currentQuiz < quizData.length - 1 ? (
                              <>
                                Next Question
                                <ChevronRight className="h-4 w-4 ml-1" />
                              </>
                            ) : (
                              <>
                                Complete Quiz
                                <CheckCircle className="h-4 w-4 ml-1" />
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            {/* Code playground tab */}
            <TabsContent value="playground" className="m-0">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">Interactive Code Playground</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Code editor */}
                  <div className="glass rounded-lg border border-white/10 overflow-hidden">
                    <div className="p-2 bg-white/5 border-b border-white/10">
                      <TabsList className="bg-transparent">
                        <TabsTrigger 
                          value="html"
                          onClick={() => setActiveCodeTab("html")}
                          className={`data-[state=active]:bg-white/10 data-[state=active]:text-white ${
                            activeCodeTab === "html" ? "bg-white/10 text-white" : ""
                          }`}
                        >
                          HTML
                        </TabsTrigger>
                        <TabsTrigger 
                          value="css"
                          onClick={() => setActiveCodeTab("css")}
                          className={`data-[state=active]:bg-white/10 data-[state=active]:text-white ${
                            activeCodeTab === "css" ? "bg-white/10 text-white" : ""
                          }`}
                        >
                          CSS
                        </TabsTrigger>
                      </TabsList>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-2"
                        onClick={handleCopyCode}
                      >
                        {copied ? <CheckCircle className="h-4 w-4 text-[#95FF66]" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                    
                    <div className="p-4 bg-black/30 h-[300px] font-mono text-sm">
                      <textarea
                        className="w-full h-full bg-transparent resize-none focus:outline-none text-green-400"
                        value={activeCodeTab === "html" ? codePlayground.html : codePlayground.css}
                        onChange={(e) => handleCodeChange(activeCodeTab, e.target.value)}
                        spellCheck={false}
                      />
                    </div>
                  </div>
                  
                  {/* Preview */}
                  <div className="glass rounded-lg border border-white/10 overflow-hidden">
                    <div className="p-2 bg-white/5 border-b border-white/10 flex justify-between items-center">
                      <h3 className="text-sm font-medium">Preview</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setShowPreview(!showPreview)}
                      >
                        {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    
                    {showPreview ? (
                      <div className="p-4 bg-white h-[300px] overflow-auto">
                        <iframe
                          title="Code preview"
                          className="w-full h-full border-0"
                          srcDoc={renderCodePreview()}
                        />
                      </div>
                    ) : (
                      <div className="p-4 bg-white/5 h-[300px] flex items-center justify-center">
                        <div className="text-center">
                          <Eye className="h-8 w-8 mb-2 mx-auto text-gray-400" />
                          <p>Preview hidden</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-2"
                            onClick={() => setShowPreview(true)}
                          >
                            Show Preview
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-3">Code Samples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      className="glass p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors text-left"
                      onClick={() => {
                        setCodePlayground({
                          html: '<div class="flex-container">\n  <div class="flex-item">Item 1</div>\n  <div class="flex-item">Item 2</div>\n  <div class="flex-item">Item 3</div>\n</div>',
                          css: '.flex-container {\n  display: flex;\n  justify-content: space-between;\n  background-color: #f0f0f0;\n  padding: 20px;\n}\n\n.flex-item {\n  background-color: #95FF66;\n  padding: 20px;\n  border-radius: 4px;\n  color: #222;\n  font-weight: bold;\n}'
                        });
                        setActiveCodeTab("html");
                      }}
                    >
                      <h4 className="font-medium mb-1">Flexbox Example</h4>
                      <p className="text-sm text-gray-400">A simple flexbox layout with three items</p>
                    </button>
                    
                    <button
                      className="glass p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors text-left"
                      onClick={() => {
                        setCodePlayground({
                          html: '<div class="grid-container">\n  <div class="grid-item">1</div>\n  <div class="grid-item">2</div>\n  <div class="grid-item">3</div>\n  <div class="grid-item">4</div>\n  <div class="grid-item">5</div>\n  <div class="grid-item">6</div>\n</div>',
                          css: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  background-color: #f0f0f0;\n  padding: 20px;\n}\n\n.grid-item {\n  background-color: #95FF66;\n  padding: 20px;\n  border-radius: 4px;\n  text-align: center;\n  color: #222;\n  font-weight: bold;\n}'
                        });
                        setActiveCodeTab("html");
                      }}
                    >
                      <h4 className="font-medium mb-1">Grid Example</h4>
                      <p className="text-sm text-gray-400">A 3-column grid layout with 6 items</p>
                    </button>
                    
                    <button
                      className="glass p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors text-left"
                      onClick={() => {
                        setCodePlayground({
                          html: '<button class="animated-button">Hover Me</button>',
                          css: '.animated-button {\n  background-color: #95FF66;\n  color: #222;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 4px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n\n.animated-button:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 5px 15px rgba(149, 255, 102, 0.4);\n}'
                        });
                        setActiveCodeTab("html");
                      }}
                    >
                      <h4 className="font-medium mb-1">CSS Animation</h4>
                      <p className="text-sm text-gray-400">Button with hover animation effect</p>
                    </button>
                    
                    <button
                      className="glass p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors text-left"
                      onClick={() => {
                        setCodePlayground({
                          html: '<div class="card">\n  <h2 class="card-title">Card Title</h2>\n  <p class="card-content">This is a responsive card component that uses CSS variables.</p>\n  <button class="card-button">Learn More</button>\n</div>',
                          css: ':root {\n  --primary-color: #95FF66;\n  --text-color: #222;\n  --bg-color: white;\n  --radius: 8px;\n}\n\n.card {\n  background-color: var(--bg-color);\n  border-radius: var(--radius);\n  padding: 20px;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n}\n\n.card-title {\n  color: var(--text-color);\n  margin-top: 0;\n}\n\n.card-content {\n  color: #666;\n}\n\n.card-button {\n  background-color: var(--primary-color);\n  color: var(--text-color);\n  border: none;\n  padding: 8px 16px;\n  border-radius: calc(var(--radius) / 2);\n  cursor: pointer;\n}'
                        });
                        setActiveCodeTab("html");
                      }}
                    >
                      <h4 className="font-medium mb-1">CSS Variables</h4>
                      <p className="text-sm text-gray-400">Card component using CSS custom properties</p>
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Resources tab */}
            <TabsContent value="resources" className="m-0">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
                
                <div className="space-y-6">
                  {/* Documentation links */}
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      External Resources
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {resources.map((resource, index) => (
                        <a
                          key={index}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass p-4 rounded-lg border border-white/10 hover:border-[#95FF66]/30 transition-colors group"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium mb-1 group-hover:text-[#95FF66] transition-colors">{resource.title}</h4>
                              <p className="text-sm text-gray-400">{resource.type}</p>
                            </div>
                            <div className="bg-white/5 rounded-full p-2 group-hover:bg-[#95FF66]/20 transition-colors">
                              <ExternalLink className="h-4 w-4 group-hover:text-[#95FF66] transition-colors" />
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  {/* Flashcards */}
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Study Flashcards
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {id: 1, front: "What does CSS stand for?", back: "Cascading Style Sheets"},
                        {id: 2, front: "What are the main components of the Box Model?", back: "Content, Padding, Border, and Margin"},
                        {id: 3, front: "What is the purpose of semantic HTML?", back: "To give meaning to web content, making it more accessible and SEO-friendly"},
                        {id: 4, front: "What's the difference between inline and block elements?", back: "Block elements start on a new line and take up the full width, while inline elements only take up as much width as necessary"}
                      ].map(card => (
                        <div 
                          key={card.id}
                          className={`glass rounded-lg border border-white/10 h-[150px] transition-all duration-500 cursor-pointer ${
                            isFlipped[card.id] ? "bg-[#95FF66]/10" : "bg-transparent"
                          }`}
                          onClick={() => toggleFlip(card.id)}
                        >
                          <div className="p-4 flex items-center justify-center h-full">
                            <div className="text-center">
                              {isFlipped[card.id] ? (
                                <p>{card.back}</p>
                              ) : (
                                <p className="font-medium">{card.front}</p>
                              )}
                              <p className="text-xs text-gray-400 absolute bottom-2 left-0 right-0">
                                Click to {isFlipped[card.id] ? "flip back" : "reveal answer"}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* AI Assistant */}
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Bot className="h-5 w-5 mr-2" />
                      AI Learning Assistant
                    </h3>
                    
                    <Button 
                      onClick={() => setShowAiAssistant(!showAiAssistant)}
                      variant="outline"
                      className="mb-4"
                    >
                      {showAiAssistant ? "Hide Assistant" : "Show Assistant"}
                    </Button>
                    
                    {showAiAssistant && (
                      <div className="glass rounded-lg border border-white/10 overflow-hidden">
                        <div className="p-4 bg-white/5 border-b border-white/10">
                          <h4 className="font-medium">Ask a question about HTML/CSS</h4>
                        </div>
                        
                        <div className="p-4">
                          <div className="flex gap-2 mb-4">
                            <Input
                              value={aiAssistantMessage}
                              onChange={(e) => setAiAssistantMessage(e.target.value)}
                              placeholder="e.g., What's the difference between flex and grid?"
                              className="bg-white/5 border-white/10"
                            />
                            <Button onClick={submitAiQuestion}>
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="space-y-4 max-h-[300px] overflow-y-auto">
                            {aiResponses.map((response, index) => (
                              <div key={index} className="rounded-lg">
                                <div className="bg-white/5 p-3 rounded-t-lg">
                                  <p className="font-medium text-white">{response.question}</p>
                                </div>
                                <div className="bg-white/10 p-3 rounded-b-lg">
                                  <p className="text-gray-200">{response.answer}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Discussion section */}
          <div className="glass rounded-lg border border-white/10 overflow-hidden mt-6">
            <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
              <h3 className="font-medium flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                Discussion
              </h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowDiscussion(!showDiscussion)}
              >
                {showDiscussion ? "Hide" : "Show"}
              </Button>
            </div>
            
            {showDiscussion && (
              <div className="p-4">
                <div className="mb-4">
                  <textarea
                    placeholder="Share your thoughts or ask a question..."
                    className="w-full p-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-[#95FF66]/50 resize-none h-[100px]"
                    value={discussionInput}
                    onChange={(e) => setDiscussionInput(e.target.value)}
                  />
                  <div className="flex justify-end mt-2">
                    <Button size="sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Post Comment
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {discussions.map(discussion => (
                    <div key={discussion.id} className="p-4 rounded-md bg-white/5">
                      <div className="flex items-start gap-3">
                        <img 
                          src={discussion.avatar} 
                          alt={discussion.user} 
                          className="h-8 w-8 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{discussion.user}</h4>
                            <span className="text-xs text-gray-400">{discussion.time}</span>
                          </div>
                          <p className="mt-1 text-gray-200">{discussion.content}</p>
                          <div className="flex items-center mt-2 gap-4">
                            <button className="text-xs text-gray-400 flex items-center">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              Like ({discussion.likes})
                            </button>
                            <button className="text-xs text-gray-400 flex items-center">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              Reply
                            </button>
                          </div>
                          
                          {/* Replies */}
                          {discussion.replies && discussion.replies.length > 0 && (
                            <div className="mt-3 pl-4 border-l border-white/10 space-y-3">
                              {discussion.replies.map(reply => (
                                <div key={reply.id} className="pt-3">
                                  <div className="flex items-start gap-2">
                                    <img 
                                      src={reply.avatar} 
                                      alt={reply.user} 
                                      className="h-6 w-6 rounded-full"
                                    />
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <h5 className="font-medium text-sm">{reply.user}</h5>
                                        <span className="text-xs text-gray-400">{reply.time}</span>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-200">{reply.content}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Module navigation */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevModule && (
              <button 
                onClick={() => navigate(`/modules/${prevModule.id}`)}
                className="glass p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors text-left flex items-center"
              >
                <ChevronLeft className="h-5 w-5 mr-3" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Previous Module</p>
                  <h4 className="font-medium">{prevModule.title}</h4>
                </div>
              </button>
            )}
            
            {nextModule && (
              <button 
                onClick={() => navigate(`/modules/${nextModule.id}`)}
                className="glass p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors text-left flex items-center justify-between"
              >
                <div className="text-right">
                  <p className="text-sm text-gray-400 mb-1">Next Module</p>
                  <h4 className="font-medium">{nextModule.title}</h4>
                </div>
                <ChevronRight className="h-5 w-5 ml-3" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
