
import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { tracks } from "@/constants";
import { 
  ArrowLeft, BookOpen, Code, ExternalLink, BookmarkPlus, CheckCircle, Copy, 
  ThumbsUp, Star, Coffee, Clock, Search, Download, Share2, Award, 
  Lightbulb, FileText, MessageSquare, Users, Play, ChevronRight, ChevronLeft,
  Moon, Sun, Code2, Terminal, Paperclip, PenTool, ScreenShare, Monitor, Sparkles,
  Zap, Keyboard, Layers, RotateCcw, Maximize2, Settings
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  const [viewMode, setViewMode] = useState("normal");
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

  const module = tracks.flatMap(track => track.modules).find(m => m.id === moduleId);
  const moduleIndex = module ? tracks.find(track => track.modules.includes(module))?.modules.indexOf(module) : -1;
  const track = tracks.find(track => track.modules.includes(module));
  
  const nextModule = moduleIndex !== -1 && moduleIndex < (track?.modules.length || 0) - 1 
    ? track?.modules[moduleIndex + 1] 
    : null;
  
  const prevModule = moduleIndex !== -1 && moduleIndex > 0 
    ? track?.modules[moduleIndex - 1] 
    : null;
  
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

  const [theme, setTheme] = useState("dark");
  const [playgroundCode, setPlaygroundCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    header {
      background-color: #95FF66;
      padding: 20px;
      border-radius: 8px;
    }
    .container {
      display: flex;
      gap: 20px;
      margin-top: 20px;
    }
    .card {
      flex: 1;
      padding: 15px;
      border-radius: 8px;
      background-color: #f5f5f5;
    }
  </style>
</head>
<body>
  <header>
    <h1>My Webpage</h1>
    <p>Built with modern HTML & CSS</p>
  </header>
  <div class="container">
    <div class="card">
      <h2>Section 1</h2>
      <p>This is content for section 1.</p>
    </div>
    <div class="card">
      <h2>Section 2</h2>
      <p>This is content for section 2.</p>
    </div>
  </div>
</body>
</html>`);
  const [playgroundResult, setPlaygroundResult] = useState("");
  const [playgroundView, setPlaygroundView] = useState("split");
  const [codeFont, setCodeFont] = useState("monospace");
  const [codeFontSize, setCodeFontSize] = useState(14);
  const [keyboardShortcutsVisible, setKeyboardShortcutsVisible] = useState(false);
  const [activePracticeChallenge, setActivePracticeChallenge] = useState(null);
  const [showAiHelper, setShowAiHelper] = useState(false);
  const [aiHelperPrompt, setAiHelperPrompt] = useState("");
  const [aiHelperResponse, setAiHelperResponse] = useState("");
  const [showCodeReference, setShowCodeReference] = useState(false);
  const [downloadFormat, setDownloadFormat] = useState("pdf");
  const [animationSpeed, setAnimationSpeed] = useState(1);
  
  const practiceChallengeSets = [
    {
      id: "flex-layout",
      title: "Flexbox Layout Challenge",
      description: "Create a responsive navbar using flexbox",
      difficulty: "Intermediate",
      initialCode: `<div class="navbar">
  <!-- Add your navbar items here using flexbox -->
</div>

<style>
  .navbar {
    /* Your flexbox styles here */
  }
</style>`,
      expectedOutput: {
        properties: ["display: flex", "justify-content", "align-items"],
        structure: ["navbar", "nav-item"]
      },
      hints: [
        "Start with display: flex on the container",
        "Use justify-content to space items",
        "Consider how the navbar should behave on small screens"
      ]
    },
    {
      id: "grid-gallery",
      title: "CSS Grid Gallery",
      description: "Create an image gallery with CSS Grid",
      difficulty: "Advanced",
      initialCode: `<div class="gallery">
  <div class="gallery-item">Item 1</div>
  <div class="gallery-item">Item 2</div>
  <div class="gallery-item">Item 3</div>
  <div class="gallery-item">Item 4</div>
  <div class="gallery-item">Item 5</div>
  <div class="gallery-item">Item 6</div>
</div>

<style>
  .gallery {
    /* Your grid styles here */
  }
  
  .gallery-item {
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    padding: 20px;
    text-align: center;
  }
</style>`,
      expectedOutput: {
        properties: ["display: grid", "grid-template-columns", "gap"],
        structure: ["gallery", "gallery-item"]
      },
      hints: [
        "Use display: grid on the container",
        "Try repeat() and auto-fit/auto-fill for responsive columns",
        "Add gap property for spacing between items"
      ]
    }
  ];
  
  const keyboardShortcuts = [
    { key: "Ctrl + B", description: "Toggle bookmark" },
    { key: "Ctrl + D", description: "Toggle dark/light mode" },
    { key: "Ctrl + ↑/↓", description: "Navigate between sections" },
    { key: "Ctrl + S", description: "Save notes" },
    { key: "Ctrl + F", description: "Focus search" },
    { key: "Ctrl + P", description: "Open code playground" },
    { key: "Ctrl + E", description: "Toggle exercise view" },
    { key: "Ctrl + Q", description: "Open quiz" },
    { key: "Esc", description: "Close modals" }
  ];
  
  const referenceGuides = [
    {
      title: "HTML5 Tags Cheat Sheet",
      description: "Quick reference for all HTML5 semantic tags",
      format: "PDF",
      size: "245 KB"
    },
    {
      title: "CSS Flexbox Guide",
      description: "Complete visual guide to Flexbox properties",
      format: "PDF",
      size: "320 KB"
    },
    {
      title: "CSS Grid Interactive Reference",
      description: "Interactive grid properties with examples",
      format: "Interactive",
      size: "Online"
    },
    {
      title: "Responsive Design Breakpoints",
      description: "Common breakpoints and device sizes",
      format: "PNG",
      size: "180 KB"
    },
    {
      title: "CSS Animation Cookbook",
      description: "Ready-to-use animation snippets",
      format: "PDF",
      size: "410 KB"
    }
  ];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (Math.random() * 5);
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 3000);

    setActiveSection("introduction");
    setShowOverview(false);
    setFeedback(null);
    setActiveTab("content");
    
    try {
      setPlaygroundResult(playgroundCode);
    } catch (e) {
      console.error("Error in code preview:", e);
    }
    
    const handleKeyDown = (e) => {
      if (e.ctrlKey) {
        switch (e.key) {
          case 'b':
            e.preventDefault();
            setBookmarked(!bookmarked);
            break;
          case 'd':
            e.preventDefault();
            setTheme(theme === 'dark' ? 'light' : 'dark');
            break;
          case 'p':
            e.preventDefault();
            setActiveTab("playground");
            break;
          case 'f':
            e.preventDefault();
            const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement | null;
            searchInput?.focus();
            break;
          default:
            break;
        }
      } else if (e.key === 'Escape') {
        setKeyboardShortcutsVisible(false);
        setShowCodeReference(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [moduleId, bookmarked, theme, playgroundCode]);

  const runPlaygroundCode = () => {
    try {
      setPlaygroundResult(playgroundCode);
      toast({
        title: "Code updated!",
        description: "Your code has been executed and preview updated.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Code error!",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  const resetPlaygroundCode = () => {
    setPlaygroundCode(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    header {
      background-color: #95FF66;
      padding: 20px;
      border-radius: 8px;
    }
    .container {
      display: flex;
      gap: 20px;
      margin-top: 20px;
    }
    .card {
      flex: 1;
      padding: 15px;
      border-radius: 8px;
      background-color: #f5f5f5;
    }
  </style>
</head>
<body>
  <header>
    <h1>My Webpage</h1>
    <p>Built with modern HTML & CSS</p>
  </header>
  <div class="container">
    <div class="card">
      <h2>Section 1</h2>
      <p>This is content for section 1.</p>
    </div>
    <div class="card">
      <h2>Section 2</h2>
      <p>This is content for section 2.</p>
    </div>
  </div>
</body>
</html>`);
    toast({
      title: "Code reset!",
      description: "The playground code has been reset to the default example.",
      variant: "default",
    });
  };

  const handleDownloadContent = (format) => {
    switch (format) {
      case 'pdf':
        toast({
          title: "PDF downloading...",
          description: "Your content is being prepared as a PDF document.",
          variant: "default",
        });
        break;
      case 'md':
        toast({
          title: "Markdown downloading...",
          description: "Your content is being prepared as a Markdown file.",
          variant: "default",
        });
        break;
      case 'html':
        toast({
          title: "HTML downloading...",
          description: "Your content is being prepared as an HTML file.",
          variant: "default",
        });
        break;
      default:
        break;
    }
  };

  const generateAiResponse = () => {
    if (!aiHelperPrompt.trim()) return;
    
    setAiHelperResponse("Based on your question, I'd recommend using CSS Grid for this layout. Grid is ideal for 2D layouts and would work well for your described design. Start with `display: grid` on the container and then use `grid-template-columns` to define your column structure. For responsive behavior, consider using `minmax()` and `auto-fit`.");
    
    toast({
      title: "AI response generated",
      description: "The AI assistant has provided a response to your question.",
      variant: "default",
    });
  };
  
  const handleCopyCode = () => {
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

  const handleSectionComplete = (sectionId) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId]);
      toast({
        title: "Section completed!",
        description: "Your progress has been updated.",
        variant: "default",
      });
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    toast({
      title: liked ? "Feedback removed" : "Thanks for your feedback!",
      description: liked ? "Your feedback has been removed." : "We appreciate your feedback!",
      variant: "default",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Module Content</h1>
      <p>This component is under development. Check back soon for the complete content!</p>
    </div>
  );
};

export default ModuleContent;
