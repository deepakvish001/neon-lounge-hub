
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { tracks } from "@/constants";
import { 
  ArrowLeft, BookOpen, Code, ExternalLink, BookmarkPlus, CheckCircle, Copy, 
  ThumbsUp, Star, Coffee, Clock, Search, Download, Share2, Award, 
  Lightbulb, FileText, MessageSquare, Users, Play, ChevronRight, ChevronLeft
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
    };
  }, [moduleId]);

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
      description: liked 
        ? "Your feedback has been removed." 
        : "We're glad you found this content helpful.",
      variant: "default",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Content downloading...",
      description: "The module content will be available offline soon.",
      variant: "default",
    });
  };

  const handleShare = () => {
    // Simulate sharing functionality
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied to clipboard!",
      description: "You can now share this module with others.",
      variant: "default",
    });
  };

  const submitDiscussion = () => {
    if (discussionInput.trim()) {
      const newDiscussion = {
        id: discussions.length + 1,
        user: "You",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=50&h=50&q=80",
        content: discussionInput,
        likes: 0,
        time: "Just now",
        replies: []
      };
      setDiscussions([newDiscussion, ...discussions]);
      setDiscussionInput("");
      toast({
        title: "Comment posted!",
        description: "Your comment has been added to the discussion.",
        variant: "default",
      });
    }
  };

  const submitQuizAnswer = () => {
    setShowQuizResult(true);
    if (selectedAnswer === quizData[currentQuiz].correctAnswer) {
      toast({
        title: "Correct answer!",
        description: "Well done! You selected the right answer.",
        variant: "default",
      });
    } else {
      toast({
        title: "Incorrect answer",
        description: "Try again or check the explanation for more information.",
        variant: "default",
      });
    }
  };

  const nextQuiz = () => {
    if (currentQuiz < quizData.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setSelectedAnswer(null);
      setShowQuizResult(false);
    } else {
      setQuizCompleted(true);
      toast({
        title: "Quiz completed!",
        description: "Great job completing the quiz!",
        variant: "default",
      });
    }
  };

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
        
        <div className="glass p-6 rounded-lg backdrop-blur-md border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center">
                <h1 className="text-3xl font-bold text-white mb-2 flowing-gradient">{module.title}</h1>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`ml-2 transition-colors ${bookmarked ? 'text-[#95FF66]' : 'text-gray-400'}`}
                  onClick={handleBookmark}
                >
                  <BookmarkPlus className={`h-5 w-5 ${bookmarked ? 'fill-[#95FF66]' : ''}`} />
                </Button>
              </div>
              <p className="text-gray-400 mb-4">{module.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>2 hours</span>
                </div>
                <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full">
                  <BookOpen className="h-3 w-3 mr-1" />
                  <span>{sections.length} Topics</span>
                </div>
                <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full">
                  <Code className="h-3 w-3 mr-1" />
                  <span>{exercises.length} Exercises</span>
                </div>
                <div className="flex items-center text-xs text-[#95FF66] bg-[#95FF66]/10 px-3 py-1 rounded-full">
                  <Star className="h-3 w-3 mr-1 fill-[#95FF66]" />
                  <span>Beginner Friendly</span>
                </div>
                <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full">
                  <Users className="h-3 w-3 mr-1" />
                  <span>2,145 Learners</span>
                </div>
                <div className="flex items-center text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  <span>{discussions.length} Discussions</span>
                </div>
              </div>
            </div>
            
            <div className="shrink-0">
              <div className="flex items-center gap-3">
                <div className="course-completion-ring">
                  <svg className="w-16 h-16" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" 
                      className="stroke-gray-700" 
                      strokeWidth="2" />
                    <circle cx="18" cy="18" r="16" fill="none" 
                      className="stroke-[#95FF66]" 
                      strokeWidth="2" 
                      strokeDasharray="100" 
                      strokeDashoffset={100 - Math.round(progress)} />
                    <text x="18" y="18" textAnchor="middle" dy=".3em" 
                      className="fill-[#95FF66] font-bold text-xs">
                      {Math.round(progress)}%
                    </text>
                  </svg>
                </div>
                <div className="text-sm">
                  <div className="text-white">Your Progress</div>
                  <div className="text-gray-400">{completedSections.length}/{sections.length} topics</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mt-4">
            <div
              className="bg-gradient-to-r from-[#4CAF50] to-[#95FF66] h-full transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Quick action buttons */}
          <div className="flex mt-6 gap-2 flex-wrap">
            <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white/10" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
            <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white/10" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
            <Button 
              variant={liked ? "default" : "outline"} 
              size="sm" 
              className={liked ? "bg-[#95FF66] text-black hover:bg-[#95FF66]/90" : "border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10"}
              onClick={handleLike}
            >
              <ThumbsUp className="h-4 w-4 mr-1" />
              {liked ? "Liked" : "Like"}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/5 border-white/10 hover:bg-white/10 ml-auto"
              onClick={() => setViewMode(viewMode === "normal" ? "focus" : "normal")}
            >
              {viewMode === "normal" ? "Focus Mode" : "Normal Mode"}
            </Button>
          </div>
        </div>

        {/* Module navigation */}
        <div className="flex justify-between mt-4">
          {prevModule ? (
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-400 hover:text-white"
              onClick={() => navigate(`/module/${prevModule.id}`)}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              {prevModule.title}
            </Button>
          ) : <div></div>}
          
          {nextModule && (
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-400 hover:text-white"
              onClick={() => navigate(`/module/${nextModule.id}`)}
            >
              {nextModule.title}
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>
      </div>
      
      {isLoading ? (
        <div className="space-y-4">
          <div className="h-8 w-48 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 w-full max-w-md bg-gray-700 rounded animate-pulse"></div>
          <div className="h-64 bg-gray-800/50 rounded-lg animate-pulse mt-6"></div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar with topics */}
          <div className={`md:w-1/4 glass rounded-lg p-4 h-fit backdrop-blur-md border border-white/10 ${viewMode === "focus" ? "hidden" : ""}`}>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              />
            </div>
            
            <div className="space-y-1">
              <Button 
                variant="ghost" 
                size="sm"
                className={`w-full justify-start ${showOverview ? 'bg-white/10' : ''}`}
                onClick={() => setShowOverview(!showOverview)}
              >
                <FileText className="h-4 w-4 mr-2" />
                Module Overview
              </Button>
              
              <div className="pt-2 pb-1">
                <div className="text-xs uppercase text-gray-500 font-semibold px-3 py-1">Topics</div>
              </div>
              
              {filteredSections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  size="sm"
                  className={`w-full justify-start ${activeSection === section.id ? 'bg-white/10' : ''}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.title}
                  {completedSections.includes(section.id) && (
                    <CheckCircle className="h-3 w-3 ml-auto text-[#95FF66]" />
                  )}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Main content area */}
          <div className="md:flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="glass rounded-lg overflow-hidden backdrop-blur-md border border-white/10">
              <TabsList className="w-full rounded-none bg-transparent border-b border-white/10 p-0">
                <TabsTrigger 
                  value="content" 
                  className="rounded-none data-[state=active]:bg-white/5 data-[state=active]:shadow-none py-3 flex-1"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Content
                </TabsTrigger>
                <TabsTrigger 
                  value="exercises" 
                  className="rounded-none data-[state=active]:bg-white/5 data-[state=active]:shadow-none py-3 flex-1"
                >
                  <Code className="h-4 w-4 mr-2" />
                  Exercises
                </TabsTrigger>
                <TabsTrigger 
                  value="quiz" 
                  className="rounded-none data-[state=active]:bg-white/5 data-[state=active]:shadow-none py-3 flex-1"
                >
                  <Award className="h-4 w-4 mr-2" />
                  Quiz
                </TabsTrigger>
                <TabsTrigger 
                  value="resources" 
                  className="rounded-none data-[state=active]:bg-white/5 data-[state=active]:shadow-none py-3 flex-1"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Resources
                </TabsTrigger>
                <TabsTrigger 
                  value="discuss" 
                  className="rounded-none data-[state=active]:bg-white/5 data-[state=active]:shadow-none py-3 flex-1"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Discuss
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="content" className="p-6 focus:outline-none">
                {showOverview ? (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold">Module Overview</h2>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="bg-white/5 border-white/10 hover:bg-white/10"
                        onClick={() => setShowOverview(false)}
                      >
                        Start Learning
                      </Button>
                    </div>
                    
                    <p className="text-gray-400">
                      This module will teach you the fundamentals of modern HTML5 and CSS3. You'll learn how to structure your web pages semantically, create responsive layouts, and add style and interactivity using the latest CSS techniques.
                    </p>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-2">Topics Covered</h3>
                      <ul className="space-y-2">
                        {sections.map((section) => (
                          <li key={section.id} className="flex items-center">
                            <div className={`w-4 h-4 rounded-full mr-3 ${completedSections.includes(section.id) ? 'bg-[#95FF66]' : 'bg-gray-700'}`}></div>
                            <span>{section.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-2">What You'll Build</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        <div className="glass p-3 rounded-lg">
                          <h4 className="font-medium text-[#95FF66]">Responsive Layouts</h4>
                          <p className="text-sm text-gray-400">Create fluid designs that work on all devices</p>
                        </div>
                        <div className="glass p-3 rounded-lg">
                          <h4 className="font-medium text-[#95FF66]">Modern Navigation</h4>
                          <p className="text-sm text-gray-400">Build accessible navigation components</p>
                        </div>
                        <div className="glass p-3 rounded-lg">
                          <h4 className="font-medium text-[#95FF66]">CSS Animations</h4>
                          <p className="text-sm text-gray-400">Add engaging animations to your pages</p>
                        </div>
                        <div className="glass p-3 rounded-lg">
                          <h4 className="font-medium text-[#95FF66]">Custom Properties</h4>
                          <p className="text-sm text-gray-400">Create maintainable stylesheets with CSS variables</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-bold">{htmlCssContent[activeSection]?.title || sections.find(s => s.id === activeSection)?.title}</h2>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-400 hover:text-white"
                          onClick={handleCopyCode}
                        >
                          <Copy className={`h-4 w-4 ${copied ? 'text-[#95FF66]' : ''}`} />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-400 hover:text-white"
                          onClick={() => handleSectionComplete(activeSection)}
                        >
                          <CheckCircle className={`h-4 w-4 ${completedSections.includes(activeSection) ? 'text-[#95FF66] fill-[#95FF66]' : ''}`} />
                        </Button>
                      </div>
                    </div>
                    
                    <div 
                      className="content-area"
                      ref={contentRef}
                      dangerouslySetInnerHTML={{
                        __html: htmlCssContent[activeSection]?.content || 
                              additionalContent[activeSection]?.content || 
                              '<div class="text-center py-8"><p>Content is being developed. Check back soon!</p></div>'
                      }}
                    />
                    
                    <div className="flex justify-between mt-8">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/5 border-white/10 hover:bg-white/10"
                        onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === activeSection);
                          if (currentIndex > 0) {
                            setActiveSection(sections[currentIndex - 1].id);
                          }
                        }}
                        disabled={sections.findIndex(s => s.id === activeSection) === 0}
                      >
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Previous
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/5 border-white/10 hover:bg-white/10"
                        onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === activeSection);
                          if (currentIndex < sections.length - 1) {
                            setActiveSection(sections[currentIndex + 1].id);
                            if (!completedSections.includes(activeSection)) {
                              handleSectionComplete(activeSection);
                            }
                          }
                        }}
                        disabled={sections.findIndex(s => s.id === activeSection) === sections.length - 1}
                      >
                        Next
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="exercises" className="p-6 focus:outline-none">
                <h2 className="text-2xl font-bold mb-6">Practice Exercises</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {exercises.map((exercise, index) => (
                    <div key={index} className="glass p-5 rounded-lg hover:bg-white/10 transition-colors">
                      <h3 className="font-bold text-lg mb-2">{exercise.title}</h3>
                      <p className="text-gray-400 mb-4">{exercise.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="badge badge-success">{exercise.difficulty}</span>
                          <span className="text-xs text-gray-500 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {exercise.estimatedTime}
                          </span>
                        </div>
                        <Button size="sm" className="bg-[#4CAF50] hover:bg-[#3d9140] text-white">
                          Start Exercise
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="quiz" className="p-6 focus:outline-none">
                <h2 className="text-2xl font-bold mb-6">Test Your Knowledge</h2>
                
                {quizCompleted ? (
                  <div className="glass p-8 rounded-lg text-center">
                    <h3 className="text-xl font-bold text-[#95FF66] mb-4">Quiz Completed!</h3>
                    <p className="mb-6">Great job! You've completed the quiz for this module.</p>
                    <Button
                      onClick={() => {
                        setQuizCompleted(false);
                        setCurrentQuiz(0);
                        setSelectedAnswer(null);
                        setShowQuizResult(false);
                      }}
                      className="bg-[#4CAF50] hover:bg-[#3d9140] text-white"
                    >
                      Retake Quiz
                    </Button>
                  </div>
                ) : (
                  <div className="glass p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">Question {currentQuiz + 1} of {quizData.length}</h3>
                      <span className="text-xs bg-white/10 rounded-full px-3 py-1">
                        {Math.round((currentQuiz / quizData.length) * 100)}% Complete
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-medium mb-4">{quizData[currentQuiz].question}</h4>
                    
                    <div className="space-y-3 mb-6">
                      {quizData[currentQuiz].options.map((option, idx) => (
                        <div
                          key={idx}
                          className={`
                            p-3 border rounded-lg cursor-pointer transition-colors
                            ${selectedAnswer === option 
                              ? (showQuizResult 
                                ? (option === quizData[currentQuiz].correctAnswer 
                                  ? 'border-green-500 bg-green-500/10' 
                                  : 'border-red-500 bg-red-500/10')
                                : 'border-[#95FF66] bg-[#95FF66]/5') 
                              : 'border-white/10 hover:border-white/30'}
                          `}
                          onClick={() => !showQuizResult && setSelectedAnswer(option)}
                        >
                          {option}
                          {showQuizResult && option === quizData[currentQuiz].correctAnswer && (
                            <CheckCircle className="h-4 w-4 float-right text-green-500" />
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {showQuizResult && (
                      <div className={`p-4 rounded-lg mb-6 ${selectedAnswer === quizData[currentQuiz].correctAnswer ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                        <h5 className="font-medium mb-2">Explanation:</h5>
                        <p>{quizData[currentQuiz].explanation}</p>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      {!showQuizResult ? (
                        <Button
                          onClick={submitQuizAnswer}
                          disabled={!selectedAnswer}
                          className="bg-[#4CAF50] hover:bg-[#3d9140] text-white"
                        >
                          Submit Answer
                        </Button>
                      ) : (
                        <Button
                          onClick={nextQuiz}
                          className="bg-[#4CAF50] hover:bg-[#3d9140] text-white"
                        >
                          {currentQuiz < quizData.length - 1 ? 'Next Question' : 'Finish Quiz'}
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="resources" className="p-6 focus:outline-none">
                <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      key={index}
                      className="flex items-start p-4 glass rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="bg-white/10 p-2 rounded mr-4">
                        <ExternalLink className="h-5 w-5 text-[#95FF66]" />
                      </div>
                      <div>
                        <h3 className="font-medium">{resource.title}</h3>
                        <p className="text-sm text-gray-400">{resource.type}</p>
                      </div>
                      <div className="ml-auto">
                        <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                          External Link
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="discuss" className="p-6 focus:outline-none">
                <h2 className="text-2xl font-bold mb-6">Community Discussion</h2>
                
                <div className="glass p-4 rounded-lg mb-6">
                  <h3 className="font-medium mb-2">Add to the conversation</h3>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder:text-gray-500 min-h-24 focus:outline-none focus:ring-1 focus:ring-[#95FF66]"
                    placeholder="Share your thoughts, questions, or insights..."
                    value={discussionInput}
                    onChange={(e) => setDiscussionInput(e.target.value)}
                  ></textarea>
                  <div className="flex justify-end mt-3">
                    <Button 
                      onClick={submitDiscussion} 
                      disabled={!discussionInput.trim()}
                      className="bg-[#4CAF50] hover:bg-[#3d9140] text-white"
                    >
                      Post Comment
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {discussions.map((discussion) => (
                    <div key={discussion.id} className="glass rounded-lg p-4">
                      <div className="flex items-start mb-4">
                        <img 
                          src={discussion.avatar} 
                          alt={discussion.user} 
                          className="w-10 h-10 rounded-full mr-3" 
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">{discussion.user}</h4>
                            <span className="text-xs text-gray-500">{discussion.time}</span>
                          </div>
                          <p className="mt-2 text-gray-300">{discussion.content}</p>
                          
                          <div className="flex items-center mt-3 space-x-4">
                            <button className="text-xs text-gray-500 flex items-center hover:text-white">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              {discussion.likes} {discussion.likes === 1 ? 'Like' : 'Likes'}
                            </button>
                            <button className="text-xs text-gray-500 flex items-center hover:text-white">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {discussion.replies && discussion.replies.length > 0 && (
                        <div className="ml-12 space-y-4 mt-2 pt-2 border-t border-white/10">
                          {discussion.replies.map((reply) => (
                            <div key={reply.id} className="flex items-start">
                              <img 
                                src={reply.avatar} 
                                alt={reply.user} 
                                className="w-8 h-8 rounded-full mr-3" 
                              />
                              <div>
                                <div className="flex items-center">
                                  <h5 className="font-medium text-sm">{reply.user}</h5>
                                  <span className="text-xs text-gray-500 ml-2">{reply.time}</span>
                                </div>
                                <p className="mt-1 text-sm text-gray-300">{reply.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleContent;
