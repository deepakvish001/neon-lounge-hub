
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, BookOpen, Code, ExternalLink, Bookmark, ArrowLeft } from "lucide-react";
import { tracks } from "@/constants";

const ModuleContent = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("content");
  const [activeTopic, setActiveTopic] = useState("introduction");
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Find the module data
  let module;
  let track;
  
  for (const t of tracks) {
    const found = t.modules.find(m => m.id === moduleId);
    if (found) {
      module = found;
      track = t;
      break;
    }
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [moduleId, activeTopic]);

  if (!module) {
    return <div className="container mx-auto py-8">Module not found</div>;
  }

  // Modern HTML & CSS content
  const topics = [
    { id: "introduction", title: "Introduction to HTML5" },
    { id: "semantic", title: "Semantic HTML" },
    { id: "flex-grid", title: "Flexbox & Grid" },
    { id: "responsive", title: "Responsive Design" },
    { id: "variables", title: "CSS Variables" },
    { id: "animations", title: "CSS Animations" }
  ];

  const toggleBookmark = (topicId: string) => {
    setBookmarked(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const updateProgress = () => {
    // Simulate progression tracking
    setProgress(prev => {
      const newProgress = Math.min(prev + 20, 100);
      return newProgress;
    });
  };

  const topicContent = {
    introduction: {
      content: (
        <div className="prose text-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#95FF66]">Introduction to HTML5</h2>
            <Button 
              variant="ghost" 
              className="hover:bg-[#95FF66]/10 hover:text-[#95FF66]"
              onClick={() => toggleBookmark("introduction")}
            >
              <Bookmark className={`h-5 w-5 ${bookmarked.includes("introduction") ? "fill-[#95FF66] text-[#95FF66]" : ""}`} />
            </Button>
          </div>
          
          <h3 className="text-[#4CAF50] font-semibold mt-6 mb-3">HTML5 Basics</h3>
          <p>HTML5 is the latest evolution of the standard that defines HTML. It includes new elements and attributes that reflect typical usage on modern websites.</p>
          
          <div className="bg-black/30 p-4 my-4 rounded-lg border border-[#95FF66]/30">
            <h4 className="text-[#95FF66] mb-2">Pro Tip</h4>
            <p className="text-sm">Always use semantic HTML elements to improve accessibility and SEO of your websites.</p>
          </div>
          
          <h3 className="text-[#4CAF50] font-semibold mt-6 mb-3">Document Structure</h3>
          <p>A basic HTML5 document structure looks like this:</p>
          
          <pre className="bg-gray-800 p-4 rounded-md text-white overflow-x-auto shadow-[0_0_15px_rgba(149,255,102,0.1)] border border-gray-700">
            <code>
              <span className="code-html">&lt;!DOCTYPE html&gt;</span>{"\n"}
              <span className="code-html">&lt;html lang="en"&gt;</span>{"\n"}
              <span className="code-html">&lt;head&gt;</span>{"\n"}
              {"  "}<span className="code-html">&lt;meta charset="UTF-8"&gt;</span>{"\n"}
              {"  "}<span className="code-html">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</span>{"\n"}
              {"  "}<span className="code-html">&lt;title&gt;</span>Document Title<span className="code-html">&lt;/title&gt;</span>{"\n"}
              <span className="code-html">&lt;/head&gt;</span>{"\n"}
              <span className="code-html">&lt;body&gt;</span>{"\n"}
              {"  "}<span className="code-html">&lt;h1&gt;</span>Hello World<span className="code-html">&lt;/h1&gt;</span>{"\n"}
              <span className="code-html">&lt;/body&gt;</span>{"\n"}
              <span className="code-html">&lt;/html&gt;</span>{"\n"}
            </code>
          </pre>
          
          <div className="mt-6 flex justify-end">
            <Button onClick={updateProgress} className="bg-[#95FF66] text-black hover:bg-[#95FF66]/80">
              <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Complete
            </Button>
          </div>
        </div>
      ),
      exercises: (
        <div className="prose text-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#95FF66]">Exercises</h2>
            <div className="text-xs px-3 py-1 bg-[#95FF66]/20 text-[#95FF66] rounded-full">Interactive</div>
          </div>
          
          <div className="space-y-6">
            <div className="glass p-4 rounded-lg hover-scale transition-all duration-300">
              <h3 className="text-[#4CAF50] font-semibold mb-3">Exercise 1</h3>
              <p className="mb-4">Create a simple HTML5 document with a header, main content section, and footer.</p>
              <div className="flex justify-between items-center">
                <Button variant="secondary" size="sm">Start</Button>
                <span className="text-xs text-gray-400">Estimated time: 10 min</span>
              </div>
            </div>
            
            <div className="glass p-4 rounded-lg hover-scale transition-all duration-300">
              <h3 className="text-[#4CAF50] font-semibold mb-3">Exercise 2</h3>
              <p className="mb-4">Add metadata tags to optimize your document for search engines.</p>
              <div className="flex justify-between items-center">
                <Button variant="secondary" size="sm">Start</Button>
                <span className="text-xs text-gray-400">Estimated time: 8 min</span>
              </div>
            </div>
          </div>
        </div>
      ),
      resources: (
        <div className="prose text-white">
          <h2 className="text-2xl font-bold text-[#95FF66] mb-4">Learning Resources</h2>
          
          <div className="space-y-4">
            <div className="glass p-4 rounded-lg transition-all duration-300 flex items-start hover:bg-white/10">
              <BookOpen className="text-[#95FF66] mr-3 shrink-0 mt-1" />
              <div>
                <h3 className="text-[#4CAF50] font-semibold mb-1">MDN Web Docs: HTML5 Guide</h3>
                <p className="text-sm text-gray-300 mb-2">Comprehensive documentation on HTML5 features and usage.</p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer" className="text-xs inline-flex items-center text-[#95FF66] hover:underline">
                  Visit Resource <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
            
            <div className="glass p-4 rounded-lg transition-all duration-300 flex items-start hover:bg-white/10">
              <Code className="text-[#95FF66] mr-3 shrink-0 mt-1" />
              <div>
                <h3 className="text-[#4CAF50] font-semibold mb-1">W3C HTML5 Specification</h3>
                <p className="text-sm text-gray-300 mb-2">Official specification document for HTML5 standards.</p>
                <a href="https://www.w3.org/TR/html5/" target="_blank" rel="noopener noreferrer" className="text-xs inline-flex items-center text-[#95FF66] hover:underline">
                  Visit Resource <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
            
            <div className="glass p-4 rounded-lg transition-all duration-300 flex items-start hover:bg-white/10">
              <BookOpen className="text-[#95FF66] mr-3 shrink-0 mt-1" />
              <div>
                <h3 className="text-[#4CAF50] font-semibold mb-1">HTML5 Doctor</h3>
                <p className="text-sm text-gray-300 mb-2">Articles and tutorials on HTML5 semantic elements and best practices.</p>
                <a href="http://html5doctor.com/" target="_blank" rel="noopener noreferrer" className="text-xs inline-flex items-center text-[#95FF66] hover:underline">
                  Visit Resource <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    },
    semantic: {
      content: (
        <div className="prose text-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#95FF66]">Semantic HTML</h2>
            <Button 
              variant="ghost" 
              className="hover:bg-[#95FF66]/10 hover:text-[#95FF66]"
              onClick={() => toggleBookmark("semantic")}
            >
              <Bookmark className={`h-5 w-5 ${bookmarked.includes("semantic") ? "fill-[#95FF66] text-[#95FF66]" : ""}`} />
            </Button>
          </div>
          
          <h3 className="text-[#4CAF50] font-semibold mt-6 mb-3">Semantic HTML Elements</h3>
          <p>Semantic HTML introduces elements that clearly describe their meaning to both the browser and the developer:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
              <code className="block">
                <span className="code-html">&lt;header&gt;</span>
              </code>
              <p className="text-sm mt-2">Document or section header</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
              <code className="block">
                <span className="code-html">&lt;nav&gt;</span>
              </code>
              <p className="text-sm mt-2">Navigation links</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
              <code className="block">
                <span className="code-html">&lt;main&gt;</span>
              </code>
              <p className="text-sm mt-2">Main content</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
              <code className="block">
                <span className="code-html">&lt;article&gt;</span>
              </code>
              <p className="text-sm mt-2">Independent, self-contained content</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
              <code className="block">
                <span className="code-html">&lt;section&gt;</span>
              </code>
              <p className="text-sm mt-2">Standalone section</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
              <code className="block">
                <span className="code-html">&lt;aside&gt;</span>
              </code>
              <p className="text-sm mt-2">Content tangentially related to the content</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
              <code className="block">
                <span className="code-html">&lt;footer&gt;</span>
              </code>
              <p className="text-sm mt-2">Document or section footer</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
              <code className="block">
                <span className="code-html">&lt;figure&gt;</span>
              </code>
              <p className="text-sm mt-2">Self-contained content, like illustrations</p>
            </div>
          </div>
          
          <div className="bg-black/30 p-4 my-4 rounded-lg border border-[#95FF66]/30">
            <h4 className="text-[#95FF66] mb-2">Why Use Semantic HTML?</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Improved accessibility for screen readers</li>
              <li>Better SEO ranking and indexing</li>
              <li>Easier code maintenance and readability</li>
              <li>More consistent rendering across browsers</li>
            </ul>
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button onClick={updateProgress} className="bg-[#95FF66] text-black hover:bg-[#95FF66]/80">
              <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Complete
            </Button>
          </div>
        </div>
      ),
      exercises: (
        <div className="prose text-white">
          <h3 className="text-[#4CAF50] font-semibold mb-3">Exercise</h3>
          <p>Convert a div-based layout to use semantic HTML elements.</p>
        </div>
      ),
      resources: (
        <div className="prose text-white">
          <h3 className="text-[#4CAF50] font-semibold mb-3">Recommended Resources</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>MDN Web Docs: HTML Elements Reference</li>
            <li>HTML5 Semantic Elements Guide</li>
          </ul>
        </div>
      )
    },
    // Add content for other topics as needed
  };

  return (
    <div className="container mx-auto py-8 animate-fade-in">
      {/* Navigation */}
      <div className="flex justify-between mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate(`/track/${track?.id}`)}
          className="flex items-center hover:bg-white/5 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Track
        </Button>
      </div>
      
      {/* Module Header with Progress */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{module.title}</h1>
        <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-[#4CAF50] to-[#95FF66] h-full transition-all duration-1000 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>Progress</span>
          <span>{progress}% Complete</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Topics sidebar */}
        <div className="md:col-span-1 glass p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Topics</h2>
          <ul className="space-y-2">
            {topics.map((topic) => (
              <li key={topic.id} className="animate-fade-in" style={{animationDelay: `${topics.indexOf(topic) * 0.1}s`}}>
                <button
                  onClick={() => setActiveTopic(topic.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 flex justify-between items-center ${
                    activeTopic === topic.id 
                      ? "bg-[#95FF66]/20 text-[#95FF66]" 
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <span>{topic.title}</span>
                  {bookmarked.includes(topic.id) && (
                    <Bookmark className="h-4 w-4 fill-[#95FF66] text-[#95FF66]" />
                  )}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 p-4 rounded-lg bg-[#4CAF50]/10 border border-[#4CAF50]/20">
            <h3 className="text-[#95FF66] text-sm font-medium mb-2">Need Help?</h3>
            <p className="text-xs text-gray-300 mb-3">Having trouble with the content? Use these resources to get additional help.</p>
            <Button variant="ghost" size="sm" className="w-full text-white/70 hover:text-white border border-white/10">
              Access Community Forum
            </Button>
          </div>
        </div>
        
        {/* Content area */}
        <div className="md:col-span-3">
          {isLoading ? (
            <div className="glass p-6 rounded-lg h-[400px] flex items-center justify-center">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-8 w-40 bg-gray-700 rounded mb-4"></div>
                <div className="h-4 w-60 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 w-52 bg-gray-700 rounded"></div>
              </div>
            </div>
          ) : (
            <div className="glass p-6 rounded-lg animate-fade-in">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-4 bg-gray-800/50 p-1">
                  <TabsTrigger value="content" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">Content</TabsTrigger>
                  <TabsTrigger value="exercises" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">Exercises</TabsTrigger>
                  <TabsTrigger value="resources" className="data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]">Resources</TabsTrigger>
                </TabsList>
                
                <TabsContent value="content" className="prose text-white">
                  {topicContent[activeTopic as keyof typeof topicContent]?.content || (
                    <div>Content for this topic is under development.</div>
                  )}
                </TabsContent>
                
                <TabsContent value="exercises">
                  {topicContent[activeTopic as keyof typeof topicContent]?.exercises || (
                    <div className="text-gray-400">Exercises for this topic are under development.</div>
                  )}
                </TabsContent>
                
                <TabsContent value="resources">
                  {topicContent[activeTopic as keyof typeof topicContent]?.resources || (
                    <div className="text-gray-400">Resources for this topic are under development.</div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
