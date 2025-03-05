
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

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
                  <MessageSquare className="h-3 w-3 mr-1" />
                  <span>{discussions.length} Discussions</span>
                </div>
              </div>
            </div>
            
            <div className="frost-card p-4 flex flex-col items-center relative">
              <div className="absolute -top-3 right-3">
                <span className="badge badge-success text-xs">In Progress</span>
              </div>
              <div className="mb-2 relative w-16 h-16">
                <svg className="progress-ring" width="64" height="64">
                  <circle 
                    className="text-gray-700"
                    stroke="currentColor" 
                    strokeWidth="4"
                    fill="transparent" 
                    r="26" 
                    cx="32" 
                    cy="32" 
                  />
                  <circle 
                    className="text-[#95FF66]"
                    stroke="currentColor" 
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="transparent" 
                    r="26" 
                    cx="32" 
                    cy="32" 
                    style={{
                      strokeDasharray: `${2 * Math.PI * 26}`,
                      strokeDashoffset: `${2 * Math.PI * 26 * (1 - progress / 100)}`,
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-medium">{Math.round(progress)}%</span>
                </div>
              </div>
              <div className="mt-1 text-sm text-gray-400">Module Progress</div>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-3 w-full border-dashed border-white/20 text-white/70 hover:text-white hover:bg-white/5"
                onClick={() => setShowProgressDetails(!showProgressDetails)}
              >
                {showProgressDetails ? "Hide Details" : "View Details"}
              </Button>
            </div>
          </div>
          
          {showProgressDetails && (
            <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="frost-card p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Completed Sections</span>
                    <span className="text-xs text-white/70">{completedSections.length}/{sections.length}</span>
                  </div>
                  <Progress value={(completedSections.length / sections.length) * 100} className="h-1.5" />
                </div>
                <div className="frost-card p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Exercises</span>
                    <span className="text-xs text-white/70">0/{exercises.length}</span>
                  </div>
                  <Progress value={0} className="h-1.5" />
                </div>
                <div className="frost-card p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Quiz Score</span>
                    <span className="text-xs text-white/70">-</span>
                  </div>
                  <Progress value={0} className="h-1.5" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Main content and sidebar */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar for sections navigation */}
        {viewMode !== "focus" && (
          <div className="lg:w-64 flex-shrink-0 order-2 lg:order-1">
            <div className="frost-card p-4 rounded-lg sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Module Content</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full hover:bg-white/5"
                  onClick={() => setShowOverview(!showOverview)}
                >
                  {showOverview ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </Button>
              </div>
              
              <div className="relative mb-4">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                <Input
                  placeholder="Search topics..."
                  className="pl-9 bg-white/5 border-white/10 focus-visible:ring-[#95FF66]/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyUp={(e) => {
                    if (e.key === "Escape") setSearchQuery("");
                    if (e.key === "Enter" && filteredSections.length) {
                      setSearchInProgress(true);
                      setTimeout(() => {
                        setActiveSection(filteredSections[0].id);
                        setSearchQuery("");
                        setSearchInProgress(false);
                      }, 400);
                    }
                  }}
                />
                {searchInProgress && (
                  <Loader className="w-4 h-4 absolute right-3 top-2.5 text-white/70 animate-spin" />
                )}
              </div>
              
              <ScrollArea className="h-[calc(100vh-220px)]">
                <ul className={searchQuery ? "opacity-70" : ""}>
                  {filteredSections.map((section, index) => (
                    <li 
                      key={section.id}
                      className={`
                        relative py-2 pl-7 pr-2 rounded-md mb-1 transition-colors cursor-pointer
                        ${activeSection === section.id ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                      `}
                      onClick={() => setActiveSection(section.id)}
                    >
                      <span className="absolute left-1.5 top-2.5 w-3 flex justify-center">
                        {completedSections.includes(section.id) ? (
                          <CheckCircle className="w-3 h-3 text-[#95FF66]" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-white/30 block mt-[2px]" />
                        )}
                      </span>
                      <span className="block text-sm">
                        {section.title}
                      </span>
                      
                      {activeSection === section.id && showOverview && (
                        <div className="mt-2 pl-2 text-xs space-y-1 text-white/70 border-l border-white/10">
                          <p>- Introduction</p>
                          <p>- Key Concepts</p>
                          <p>- Code Examples</p>
                          <p>- Best Practices</p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </div>
        )}
        
        {/* Main content area */}
        <div className="flex-1 order-1 lg:order-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="content" className="data-[state=active]:bg-white/10">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Content</span>
              </TabsTrigger>
              <TabsTrigger value="exercises" className="data-[state=active]:bg-white/10">
                <Code className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Exercises</span>
              </TabsTrigger>
              <TabsTrigger value="quiz" className="data-[state=active]:bg-white/10">
                <HelpCircle className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Quiz</span>
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-white/10">
                <FileText className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Resources</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="space-y-6 animate-fade-in">
              <div className="frost-card p-6 rounded-lg relative">
                {/* Enhanced toolbar */}
                <div className="absolute right-4 top-4 flex gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                          onClick={() => setPreferredContentStyle(
                            preferredContentStyle === "visual" ? "code" : 
                            preferredContentStyle === "code" ? "text" : "visual"
                          )}
                        >
                          {preferredContentStyle === "visual" ? (
                            <Palette className="h-4 w-4" />
                          ) : preferredContentStyle === "code" ? (
                            <TerminalSquare className="h-4 w-4" />
                          ) : (
                            <FileText className="h-4 w-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Toggle content style: {preferredContentStyle}</p>
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
                          onClick={() => {
                            const el = document.getElementById("content-section");
                            if (el) {
                              if (document.fullscreenElement) {
                                document.exitFullscreen();
                              } else {
                                el.requestFullscreen();
                              }
                            }
                          }}
                        >
                          <Maximize className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Fullscreen</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                
                <div id="content-section">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold flowing-gradient">
                      {htmlCssContent[activeSection]?.title || 
                       additionalContent[activeSection]?.title || 
                       "Introduction"}
                    </h2>
                    
                    <div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className={`h-8 w-8 rounded-full ${copied ? 'text-[#95FF66]' : 'text-gray-400'} hover:text-white hover:bg-white/10`}
                              onClick={handleCopyCode}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Copy code</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  
                  <div className="prose content-area">
                    {htmlCssContent[activeSection] ? (
                      <div dangerouslySetInnerHTML={{ 
                        __html: htmlCssContent[activeSection].content 
                      }} />
                    ) : additionalContent[activeSection] ? (
                      <div dangerouslySetInnerHTML={{ 
                        __html: additionalContent[activeSection].content 
                      }} />
                    ) : (
                      <div className="py-10 text-center">
                        <div className="inline-block rounded-full p-3 bg-white/5 mb-4">
                          <Sparkles className="h-8 w-8 text-[#95FF66]" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Content is being developed</h3>
                        <p className="text-white/70 max-w-md mx-auto">
                          This section is currently under development. Check back soon for updates!
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Interactive code playground - only show for certain sections */}
                  {['cssLayout', 'cssVariables', 'animations'].includes(activeSection) && (
                    <div className="mt-8 pt-8 border-t border-white/10 animate-fade-in">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Interactive Playground</h3>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs h-8 border-white/10 hover:bg-white/5"
                          onClick={() => setShowPreview(!showPreview)}
                        >
                          {showPreview ? (
                            <>
                              <EyeOff className="h-3 w-3 mr-1" />
                              Hide Preview
                            </>
                          ) : (
                            <>
                              <Eye className="h-3 w-3 mr-1" />
                              Show Preview
                            </>
                          )}
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="frost-card rounded-lg p-4">
                          <div className="flex border-b border-white/10 mb-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`rounded-none border-b-2 ${
                                activeCodeTab === 'html' 
                                  ? 'border-[#95FF66] text-white' 
                                  : 'border-transparent text-gray-400'
                              }`}
                              onClick={() => setActiveCodeTab('html')}
                            >
                              HTML
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`rounded-none border-b-2 ${
                                activeCodeTab === 'css' 
                                  ? 'border-[#95FF66] text-white' 
                                  : 'border-transparent text-gray-400'
                              }`}
                              onClick={() => setActiveCodeTab('css')}
                            >
                              CSS
                            </Button>
                          </div>
                          
                          <Textarea
                            value={codePlayground[activeCodeTab]}
                            onChange={(e) => handleCodeChange(activeCodeTab, e.target.value)}
                            className="bg-black/30 font-mono text-sm resize-none h-60 border-white/5 focus-visible:ring-[#95FF66]/20"
                            spellCheck={false}
                          />
                        </div>
                        
                        {showPreview && (
                          <div className="frost-card rounded-lg overflow-hidden h-[330px]">
                            <div className="bg-gray-800 text-gray-300 text-xs p-2 font-mono">Preview</div>
                            <iframe
                              title="Code Preview"
                              srcDoc={renderCodePreview()}
                              className="w-full h-[calc(100%-30px)] bg-white border-0"
                              sandbox="allow-scripts"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Interactive flashcards - only show for certain sections */}
                  {['semanticHtml', 'cssVariables', 'responsiveDesign'].includes(activeSection) && (
                    <div className="mt-8 pt-8 border-t border-white/10 animate-fade-in">
                      <h3 className="text-lg font-semibold mb-4">Flashcards</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Sample flashcards */}
                        {[
                          { id: 1, front: "What are CSS Variables?", back: "Also known as CSS Custom Properties, they are entities defined by developers that contain specific values to be reused throughout a document." },
                          { id: 2, front: "How to define a CSS variable?", back: "--variable-name: value;" },
                          { id: 3, front: "How to use a CSS variable?", back: "var(--variable-name, fallback-value)" }
                        ].map(card => (
                          <div 
                            key={card.id}
                            className={`card-flip-container h-40 cursor-pointer`}
                            onClick={() => toggleFlip(card.id)}
                          >
                            <div className={`card-flip ${isFlipped[card.id] ? 'transform rotate-y-180' : ''}`}>
                              <div className="card-flip-front frost-card p-4 flex items-center justify-center text-center">
                                <h4 className="font-medium leading-tight">{card.front}</h4>
                              </div>
                              <div className="card-flip-back frost-card p-4 bg-white/10 flex items-center justify-center text-center">
                                <p className="text-sm">{card.back}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Study timer */}
                  <div className="mt-8 pt-6 border-t border-white/10 animate-fade-in">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-[#95FF66]" />
                        Focus Timer
                      </h3>
                      
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs h-8 border-white/10 hover:bg-white/5"
                          onClick={toggleTimer}
                        >
                          {studyTimer.isActive ? (
                            <>
                              <PauseCircle className="h-3 w-3 mr-1" />
                              Pause
                            </>
                          ) : (
                            <>
                              <PlayCircle className="h-3 w-3 mr-1" />
                              Start
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs h-8 border-white/10 hover:bg-white/5"
                          onClick={resetTimer}
                        >
                          <RotateCcw className="h-3 w-3 mr-1" />
                          Reset
                        </Button>
                      </div>
                    </div>
                    
                    <div className="frost-card p-6 mt-4 flex flex-col items-center neon-border-pulse">
                      <div className="text-4xl font-mono mb-4">
                        {String(studyTimer.minutes).padStart(2, '0')}:{String(studyTimer.seconds).padStart(2, '0')}
                      </div>
                      <p className="text-white/70 text-sm mb-4">Focus on studying without distractions</p>
                      <div className="flex items-center gap-2 text-xs text-white/50">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#95FF66] animate-pulse"></div>
                        {studyTimer.isActive ? "Timer running" : "Timer paused"}
                      </div>
                    </div>
                  </div>
                  
                  {/* Personal notes section */}
                  <div className="mt-8 pt-6 border-t border-white/10 animate-fade-in">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <PenTool className="w-4 h-4 mr-2 text-[#95FF66]" />
                        Personal Notes
                      </h3>
                    </div>
                    
                    <div className="frost-card p-4 mb-4">
                      <Textarea
                        placeholder="Add your notes for this section..."
                        className="bg-black/20 resize-none h-24 border-white/5 focus-visible:ring-[#95FF66]/20 mb-3"
                        value={noteInput}
                        onChange={(e) => setNoteInput(e.target.value)}
                      />
                      <div className="flex justify-end">
                        <Button
                          className="bg-[#95FF66]/20 text-[#95FF66] hover:bg-[#95FF66]/30"
                          onClick={addNote}
                          disabled={!noteInput.trim()}
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save Note
                        </Button>
                      </div>
                    </div>
                    
                    {notes.length > 0 && (
                      <div className="space-y-3">
                        {notes.filter(note => note.section === activeSection).map(note => (
                          <div key={note.id} className="frost-card p-3 text-sm hover:bg-white/5 transition-colors">
                            <div className="mb-1 text-white/60 text-xs flex justify-between">
                              <span>
                                {note.timestamp}
                              </span>
                              <Button variant="ghost" size="icon" className="h-5 w-5 text-white/40 hover:text-white/60 -mt-1 -mr-1">
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                            <p>{note.content}</p>
                          </div>
                        ))}
                        
                        {!notes.filter(note => note.section === activeSection).length && (
                          <div className="text-center py-6 text-white/50 text-sm italic">
                            No notes for this section yet
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* AI assistant for content section */}
                  <div className="mt-8 pt-6 border-t border-white/10 animate-fade-in">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Bot className="w-4 h-4 mr-2 text-[#95FF66]" />
                        AI Learning Assistant
                      </h3>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs h-8 border-white/10 hover:bg-white/5"
                        onClick={() => setShowAiAssistant(!showAiAssistant)}
                      >
                        {showAiAssistant ? "Hide" : "Show"}
                      </Button>
                    </div>
                    
                    {showAiAssistant && (
                      <div className="frost-card p-4">
                        <div className="flex gap-3 mb-4">
                          <Textarea
                            placeholder="Ask anything about HTML & CSS..."
                            className="bg-black/20 resize-none h-12 border-white/5 focus-visible:ring-[#95FF66]/20"
                            value={aiAssistantMessage}
                            onChange={(e) => setAiAssistantMessage(e.target.value)}
                          />
                          <Button
                            className="bg-[#95FF66]/20 text-[#95FF66] hover:bg-[#95FF66]/30 px-3 shrink-0"
                            onClick={submitAiQuestion}
                            disabled={!aiAssistantMessage.trim()}
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
                          {aiResponses.map((item, index) => (
                            <div key={index} className="frost-card p-3 text-sm">
                              <div className="font-medium mb-1 flex items-center text-[#95FF66]">
                                <Brain className="w-3 h-3 mr-1" />
                                Q: {item.question}
                              </div>
                              <div className="pl-4 border-l border-white/10 text-white/80 mt-2">
                                {item.answer}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content navigation */}
                  <div className="mt-8 pt-6 border-t border-white/10 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sections.indexOf(sections.find(s => s.id === activeSection)) > 0 && (
                        <Button
                          variant="outline"
                          className="flex items-center justify-start border-white/10 hover:bg-white/5"
                          onClick={() => {
                            const currentIndex = sections.findIndex(s => s.id === activeSection);
                            if (currentIndex > 0) {
                              setActiveSection(sections[currentIndex - 1].id);
                            }
                          }}
                        >
                          <ChevronLeft className="w-4 h-4 mr-2" />
                          <div className="text-left">
                            <div className="text-xs text-white/50">Previous</div>
                            <div className="font-medium">
                              {sections[sections.findIndex(s => s.id === activeSection) - 1]?.title}
                            </div>
                          </div>
                        </Button>
                      )}
                      
                      {sections.indexOf(sections.find(s => s.id === activeSection)) < sections.length - 1 && (
                        <Button
                          variant="outline"
                          className={`flex items-center justify-end border-white/10 hover:bg-white/5 ${
                            sections.indexOf(sections.find(s => s.id === activeSection)) === 0 ? 'md:col-start-2' : ''
                          }`}
                          onClick={() => {
                            const currentIndex = sections.findIndex(s => s.id === activeSection);
                            if (currentIndex < sections.length - 1) {
                              setActiveSection(sections[currentIndex + 1].id);
                            }
                          }}
                        >
                          <div className="text-right">
                            <div className="text-xs text-white/50">Next</div>
                            <div className="font-medium">
                              {sections[sections.findIndex(s => s.id === activeSection) + 1]?.title}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  {/* Discussion section */}
                  <div className="mt-8 pt-6 border-t border-white/10 animate-fade-in">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-[#95FF66]" />
                        Discussion
                      </h3>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs h-8 border-white/10 hover:bg-white/5"
                        onClick={() => setShowDiscussion(!showDiscussion)}
                      >
                        {showDiscussion ? "Hide" : "Show"}
                      </Button>
                    </div>
                    
                    {showDiscussion && (
                      <>
                        <div className="frost-card p-4 mb-4">
                          <Textarea
                            placeholder="Share your thoughts or questions about this section..."
                            className="bg-black/20 resize-none h-24 border-white/5 focus-visible:ring-[#95FF66]/20 mb-3"
                            value={discussionInput}
                            onChange={(e) => setDiscussionInput(e.target.value)}
                          />
                          <div className="flex justify-end">
                            <Button
                              className="bg-[#95FF66]/20 text-[#95FF66] hover:bg-[#95FF66]/30"
                              disabled={!discussionInput.trim()}
                            >
                              <Send className="w-4 h-4 mr-2" />
                              Post Comment
                            </Button>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          {discussions.map(discussion => (
                            <div key={discussion.id} className="frost-card p-4">
                              <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-full overflow-hidden shrink-0">
                                  <img 
                                    src={discussion.avatar} 
                                    alt={discussion.user}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <div className="font-medium text-white">{discussion.user}</div>
                                      <div className="text-xs text-white/50">{discussion.time}</div>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-white/5">
                                      <ThumbsUp className={`h-4 w-4 ${liked ? 'text-[#95FF66] fill-[#95FF66]' : ''}`} />
                                    </Button>
                                  </div>
                                  <div className="mt-2 text-sm">{discussion.content}</div>
                                  
                                  {discussion.replies && discussion.replies.length > 0 && (
                                    <div className="mt-3 pl-4 border-l-2 border-white/10 space-y-3">
                                      {discussion.replies.map(reply => (
                                        <div key={reply.id} className="flex items-start gap-3">
                                          <div className="h-6 w-6 rounded-full overflow-hidden shrink-0">
                                            <img 
                                              src={reply.avatar} 
                                              alt={reply.user}
                                              className="h-full w-full object-cover"
                                            />
                                          </div>
                                          <div>
                                            <div className="flex items-baseline">
                                              <div className="font-medium text-sm text-white">{reply.user}</div>
                                              <div className="text-xs text-white/50 ml-2">{reply.time}</div>
                                            </div>
                                            <div className="mt-1 text-sm">{reply.content}</div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  
                                  <div className="mt-3 flex gap-2">
                                    <Button variant="ghost" size="sm" className="h-7 px-2 text-xs hover:bg-white/5">
                                      Reply
                                    </Button>
                                    <Button variant="ghost" size="sm" className="h-7 px-2 text-xs hover:bg-white/5">
                                      Share
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Content feedback */}
                  <div className="mt-8 pt-6 border-t border-white/10 animate-fade-in text-center">
                    <h3 className="text-sm font-medium mb-3">Was this content helpful?</h3>
                    <div className="flex justify-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`border-white/10 hover:bg-white/5 ${feedback === 'yes' ? 'bg-white/10 text-[#95FF66]' : ''}`}
                        onClick={() => setFeedback('yes')}
                      >
                        <ThumbsUp className="w-4 h-4 mr-2" />
                        Yes
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`border-white/10 hover:bg-white/5 ${feedback === 'no' ? 'bg-white/10 text-red-400' : ''}`}
                        onClick={() => setFeedback('no')}
                      >
                        <ThumbsUp className="w-4 h-4 mr-2 transform rotate-180" />
                        No
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="exercises" className="animate-fade-in">
              <div className="frost-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 flowing-gradient">Practice Exercises</h2>
                
                <div className="space-y-4">
                  {exercises.map((exercise, index) => (
                    <div 
                      key={index}
                      className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors hover-scale"
                    >
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-white">{exercise.title}</h3>
                        <Badge variant="outline" className="bg-white/5 text-[#95FF66] border-[#95FF66]/20">
                          {exercise.difficulty}
                        </Badge>
                      </div>
                      <p className="text-white/70 mt-2 text-sm">{exercise.description}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="text-xs text-white/50 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {exercise.estimatedTime}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs border-white/10 hover:bg-white/5"
                        >
                          Start Exercise
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {exercises.length === 0 && (
                  <div className="py-10 text-center">
                    <div className="inline-block rounded-full p-3 bg-white/5 mb-4">
                      <Sparkles className="h-8 w-8 text-[#95FF66]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Exercises are being developed</h3>
                    <p className="text-white/70 max-w-md mx-auto">
                      Hands-on exercises for this module are coming soon. Check back later!
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="quiz" className="animate-fade-in">
              <div className="frost-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 flowing-gradient">Knowledge Check</h2>
                
                {quizData.length > 0 ? (
                  <>
                    {!quizCompleted ? (
                      <div>
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-white">Question {currentQuiz + 1} of {quizData.length}</h3>
                            <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10">
                              {Math.round((currentQuiz / quizData.length) * 100)}% Complete
                            </Badge>
                          </div>
                          <Progress value={(currentQuiz / quizData.length) * 100} className="h-1" />
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="text-lg font-medium mb-4">{quizData[currentQuiz].question}</h3>
                          
                          <div className="space-y-3">
                            {quizData[currentQuiz].options.map((option, index) => (
                              <div 
                                key={index}
                                className={`
                                  quiz-option ${selectedAnswer === option ? 'selected' : ''}
                                  ${showQuizResult && option === quizData[currentQuiz].correctAnswer ? 'correct' : ''}
                                  ${showQuizResult && selectedAnswer === option && option !== quizData[currentQuiz].correctAnswer ? 'incorrect' : ''}
                                `}
                                onClick={() => !showQuizResult && setSelectedAnswer(option)}
                              >
                                {option}
                                
                                {showQuizResult && option === quizData[currentQuiz].correctAnswer && (
                                  <CheckCircle className="h-5 w-5 text-green-500 ml-2 inline" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {showQuizResult && (
                          <div className={`p-4 rounded-md mb-6 ${
                            selectedAnswer === quizData[currentQuiz].correctAnswer 
                              ? 'bg-green-500/10 border border-green-500/20' 
                              : 'bg-red-500/10 border border-red-500/20'
                          }`}>
                            <p className="font-medium mb-2">
                              {selectedAnswer === quizData[currentQuiz].correctAnswer 
                                ? 'Correct!' 
                                : 'Incorrect!'
                              }
                            </p>
                            <p className="text-sm">{quizData[currentQuiz].explanation}</p>
                          </div>
                        )}
                        
                        <div className="flex justify-between">
                          <Button
                            variant="outline"
                            className="border-white/10 hover:bg-white/5"
                            onClick={() => {
                              if (currentQuiz > 0) {
                                setCurrentQuiz(currentQuiz - 1);
                                setSelectedAnswer(null);
                                setShowQuizResult(false);
                              }
                            }}
                            disabled={currentQuiz === 0}
                          >
                            Previous
                          </Button>
                          
                          {!showQuizResult ? (
                            <Button
                              className="bg-[#95FF66]/20 text-[#95FF66] hover:bg-[#95FF66]/30"
                              onClick={() => setShowQuizResult(true)}
                              disabled={!selectedAnswer}
                            >
                              Check Answer
                            </Button>
                          ) : (
                            <Button
                              className="bg-[#95FF66] text-black hover:bg-[#95FF66]/80"
                              onClick={() => {
                                if (currentQuiz < quizData.length - 1) {
                                  setCurrentQuiz(currentQuiz + 1);
                                  setSelectedAnswer(null);
                                  setShowQuizResult(false);
                                } else {
                                  setQuizCompleted(true);
                                }
                              }}
                            >
                              {currentQuiz < quizData.length - 1 ? 'Next Question' : 'Complete Quiz'}
                            </Button>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-10">
                        <div className="inline-block rounded-full p-3 bg-[#95FF66]/10 mb-4">
                          <Award className="h-8 w-8 text-[#95FF66]" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Quiz Completed!</h3>
                        <p className="text-white/70 max-w-md mx-auto mb-6">
                          You've successfully completed this module's knowledge check.
                        </p>
                        <Button
                          className="bg-[#95FF66] text-black hover:bg-[#95FF66]/80"
                          onClick={() => {
                            setQuizCompleted(false);
                            setCurrentQuiz(0);
                            setSelectedAnswer(null);
                            setShowQuizResult(false);
                          }}
                        >
                          Retake Quiz
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="py-10 text-center">
                    <div className="inline-block rounded-full p-3 bg-white/5 mb-4">
                      <Sparkles className="h-8 w-8 text-[#95FF66]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Quiz is being developed</h3>
                    <p className="text-white/70 max-w-md mx-auto">
                      Test your knowledge with interactive quizzes coming soon!
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="space-y-6 animate-fade-in">
              <div className="frost-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 flowing-gradient">Additional Resources</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resources.map((resource, index) => (
                    <a 
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors hover-scale flex justify-between items-center"
                    >
                      <div>
                        <div className="font-medium text-white mb-1">{resource.title}</div>
                        <Badge variant="outline" className="bg-white/5 border-white/10 text-xs">
                          {resource.type}
                        </Badge>
                      </div>
                      <ExternalLink className="h-4 w-4 text-white/50" />
                    </a>
                  ))}
                </div>
                
                {resources.length === 0 && (
                  <div className="py-10 text-center">
                    <div className="inline-block rounded-full p-3 bg-white/5 mb-4">
                      <Sparkles className="h-8 w-8 text-[#95FF66]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Resources are being curated</h3>
                    <p className="text-white/70 max-w-md mx-auto">
                      We're gathering the best resources for this module. Check back soon!
                    </p>
                  </div>
                )}
                
                {/* Download section */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="font-semibold mb-4">Downloads</h3>
                  
                  <div className="space-y-3">
                    <a 
                      href="#"
                      className="flex items-center justify-between p-3 border border-white/10 rounded-md hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded bg-white/5 flex items-center justify-center mr-3">
                          <FileText className="h-5 w-5 text-[#95FF66]" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">HTML CSS Cheat Sheet</div>
                          <div className="text-xs text-white/50">PDF • 2.4 MB</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                      </Button>
                    </a>
                    
                    <a 
                      href="#"
                      className="flex items-center justify-between p-3 border border-white/10 rounded-md hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded bg-white/5 flex items-center justify-center mr-3">
                          <Code className="h-5 w-5 text-[#95FF66]" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Starter Code Templates</div>
                          <div className="text-xs text-white/50">ZIP • 1.8 MB</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
                
                {/* Community forums */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Community Forums</h3>
                    <Button variant="outline" size="sm" className="text-xs border-white/10 hover:bg-white/5">
                      View All
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 border border-white/10 rounded-md hover:bg-white/5 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Flexbox vs CSS Grid</h4>
                        <Badge variant="outline" className="bg-white/5 text-xs border-white/10">
                          <Users className="h-3 w-3 mr-1" /> 24 users
                        </Badge>
                      </div>
                      <p className="text-sm text-white/70 mb-2">A discussion about when to use Flexbox versus CSS Grid for different layout challenges.</p>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-white/50">Last active 2 hours ago</div>
                        <Button variant="ghost" size="sm" className="text-xs h-7 px-2 hover:bg-white/5">
                          Join Discussion
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-3 border border-white/10 rounded-md hover:bg-white/5 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">CSS Variables Best Practices</h4>
                        <Badge variant="outline" className="bg-white/5 text-xs border-white/10">
                          <Users className="h-3 w-3 mr-1" /> 18 users
                        </Badge>
                      </div>
                      <p className="text-sm text-white/70 mb-2">Share your techniques for organizing and using CSS custom properties effectively.</p>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-white/50">Last active 1 day ago</div>
                        <Button variant="ghost" size="sm" className="text-xs h-7 px-2 hover:bg-white/5">
                          Join Discussion
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Related modules */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="font-semibold mb-4">Related Modules</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                      <h4 className="font-medium mb-1">Modern JavaScript Basics</h4>
                      <p className="text-sm text-white/70 mb-3">Learn the fundamentals of modern JavaScript to complement your HTML & CSS skills.</p>
                      <Button variant="outline" size="sm" className="w-full border-white/10 hover:bg-white/5">
                        View Module
                      </Button>
                    </div>
                    
                    <div className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                      <h4 className="font-medium mb-1">Responsive Web Design</h4>
                      <p className="text-sm text-white/70 mb-3">Take a deep dive into creating websites that work well on all devices and screen sizes.</p>
                      <Button variant="outline" size="sm" className="w-full border-white/10 hover:bg-white/5">
                        View Module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Module navigation */}
      <div className="mt-10 pt-6 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevModule && (
            <Button
              variant="outline"
              className="flex items-center justify-start border-white/10 hover:bg-white/5"
              onClick={() => navigate(`/module/${prevModule.id}`)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <div className="text-left">
                <div className="text-xs text-white/50">Previous Module</div>
                <div className="font-medium">{prevModule.title}</div>
              </div>
            </Button>
          )}
          
          {nextModule && (
            <Button
              variant="outline"
              className={`flex items-center justify-end border-white/10 hover:bg-white/5 ${
                !prevModule ? 'md:col-start-2' : ''
              }`}
              onClick={() => navigate(`/module/${nextModule.id}`)}
            >
              <div className="text-right">
                <div className="text-xs text-white/50">Next Module</div>
                <div className="font-medium">{nextModule.title}</div>
              </div>
              <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
