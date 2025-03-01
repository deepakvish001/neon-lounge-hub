
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { tracks } from "@/constants";
import { ArrowLeft, BookOpen, Code, ExternalLink, BookmarkPlus, CheckCircle, Copy, ThumbsUp, Star, Coffee, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const ModuleContent = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("content");
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("introduction");

  // Find the module across all tracks
  const module = tracks.flatMap(track => track.modules).find(m => m.id === moduleId);
  
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
    { id: "animations", title: "Animations & Transitions" }
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
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const filteredSections = searchQuery 
    ? sections.filter(section => 
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (htmlCssContent[section.id]?.content && 
         htmlCssContent[section.id].content.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : sections;

  return (
    <div className="container mx-auto py-6 animate-fade-in">
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
                <h1 className="text-3xl font-bold text-white mb-2">{module.title}</h1>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`ml-2 transition-colors ${bookmarked ? 'text-[#95FF66]' : 'text-gray-400'}`}
                  onClick={handleBookmark}
                >
                  <BookmarkPlus className="h-5 w-5" />
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
              </div>
            </div>
            
            <div className="shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#95FF66]/20 text-[#95FF66] font-bold text-xl">
                  {Math.round(progress)}%
                </div>
                <div className="text-sm">
                  <div className="text-white">Your Progress</div>
                  <div className="text-gray-400">{Math.round(progress / (100/sections.length))}/{sections.length} topics</div>
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
          <div className="md:w-1/4 glass rounded-lg p-4 h-fit backdrop-blur-md border border-white/10">
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
              {filteredSections.map((section) => (
                <button
                  key={section.id}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === section.id
                      ? "bg-[#95FF66]/20 text-[#95FF66]"
                      : "text-white hover:bg-white/5"
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <div className="flex items-center justify-between">
                    <span>{section.title}</span>
                    {section.id === "introduction" && (
                      <CheckCircle className="h-4 w-4 text-[#95FF66]" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#4CAF50]/10 rounded-md border border-[#4CAF50]/20">
              <div className="flex items-center text-[#95FF66] mb-2">
                <Coffee className="h-4 w-4 mr-2" />
                <span className="font-medium">Learning Tip</span>
              </div>
              <p className="text-sm text-gray-300">Try to apply what you learn immediately by building small projects, and review concepts regularly to reinforce your understanding.</p>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="md:w-3/4">
            <Tabs defaultValue="content" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="mb-6 bg-black/30 w-full justify-start">
                <TabsTrigger value="content" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Content
                </TabsTrigger>
                <TabsTrigger value="exercises" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
                  <Code className="h-4 w-4 mr-2" />
                  Exercises
                </TabsTrigger>
                <TabsTrigger value="resources" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Resources
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="content" className="glass p-6 rounded-lg backdrop-blur-md border border-white/10 scale-in">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">{htmlCssContent[activeSection]?.title || "Content"}</h2>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/5 border-white/10 hover:bg-white/10"
                      onClick={handleCopyCode}
                    >
                      {copied ? <CheckCircle className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                      {copied ? "Copied" : "Copy Code"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#95FF66] text-[#95FF66]"
                    >
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful
                    </Button>
                  </div>
                </div>
                
                <div 
                  className="content-area"
                  dangerouslySetInnerHTML={{ __html: htmlCssContent[activeSection]?.content || "" }}
                />
              </TabsContent>
              
              <TabsContent value="exercises" className="glass p-6 rounded-lg backdrop-blur-md border border-white/10 scale-in">
                <h2 className="text-2xl font-bold text-white mb-6">Practice Exercises</h2>
                <div className="space-y-4">
                  {exercises.map((exercise, index) => (
                    <div 
                      key={index} 
                      className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-white">{exercise.title}</h3>
                          <p className="text-gray-400 mt-1">{exercise.description}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#95FF66]/20 text-[#95FF66]">
                            {exercise.difficulty}
                          </span>
                          <span className="text-xs text-gray-400 mt-2">
                            {exercise.estimatedTime}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" size="sm" className="text-[#95FF66] border-[#95FF66]">
                          Start Exercise
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="glass p-6 rounded-lg backdrop-blur-md border border-white/10 scale-in">
                <h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {resources.map((resource, index) => (
                    <div 
                      key={index}
                      className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium text-white">{resource.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                          {resource.type}
                        </span>
                      </div>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#95FF66] hover:underline flex items-center mt-2"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Visit Resource
                      </a>
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
