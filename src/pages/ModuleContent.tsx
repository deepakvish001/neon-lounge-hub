
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tracks } from "@/constants";

const ModuleContent = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("content");
  const [activeTopic, setActiveTopic] = useState("introduction");

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

  const topicContent = {
    introduction: {
      content: (
        <div className="prose text-white">
          <h3 className="text-[#4CAF50] font-semibold mt-6 mb-3">HTML5 Basics</h3>
          <p>HTML5 is the latest evolution of the standard that defines HTML. It includes new elements and attributes that reflect typical usage on modern websites.</p>
          
          <h3 className="text-[#4CAF50] font-semibold mt-6 mb-3">Document Structure</h3>
          <p>A basic HTML5 document structure looks like this:</p>
          
          <pre className="bg-gray-800 p-4 rounded-md text-white overflow-x-auto">
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
        </div>
      ),
      exercises: (
        <div className="prose text-white">
          <h3 className="text-[#4CAF50] font-semibold mb-3">Exercise 1</h3>
          <p>Create a simple HTML5 document with a header, main content section, and footer.</p>
          
          <h3 className="text-[#4CAF50] font-semibold mt-6 mb-3">Exercise 2</h3>
          <p>Add metadata tags to optimize your document for search engines.</p>
        </div>
      ),
      resources: (
        <div className="prose text-white">
          <h3 className="text-[#4CAF50] font-semibold mb-3">Recommended Resources</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>MDN Web Docs: HTML5 Guide</li>
            <li>W3C HTML5 Specification</li>
            <li>HTML5 Doctor</li>
          </ul>
        </div>
      )
    },
    semantic: {
      content: (
        <div className="prose text-white">
          <h3 className="text-[#4CAF50] font-semibold mt-6 mb-3">Semantic HTML Elements</h3>
          <p>Semantic HTML introduces elements that clearly describe their meaning to both the browser and the developer:</p>
          
          <pre className="bg-gray-800 p-4 rounded-md text-white overflow-x-auto">
            <code>
              <span className="code-html">&lt;header&gt;</span> - Document or section header{"\n"}
              <span className="code-html">&lt;nav&gt;</span> - Navigation links{"\n"}
              <span className="code-html">&lt;main&gt;</span> - Main content{"\n"}
              <span className="code-html">&lt;article&gt;</span> - Independent, self-contained content{"\n"}
              <span className="code-html">&lt;section&gt;</span> - Standalone section{"\n"}
              <span className="code-html">&lt;aside&gt;</span> - Content tangentially related to the content{"\n"}
              <span className="code-html">&lt;footer&gt;</span> - Document or section footer{"\n"}
            </code>
          </pre>
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
    <div className="container mx-auto py-8">
      {/* Navigation */}
      <div className="flex justify-between mb-6">
        <Button variant="ghost" onClick={() => navigate(`/track/${track?.id}`)}>
          Back to Track
        </Button>
      </div>
      
      <h1 className="text-3xl font-bold text-white mb-4">{module.title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Topics sidebar */}
        <div className="md:col-span-1 glass p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Topics</h2>
          <ul className="space-y-2">
            {topics.map((topic) => (
              <li key={topic.id}>
                <button
                  onClick={() => setActiveTopic(topic.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg transition ${
                    activeTopic === topic.id 
                      ? "bg-[#95FF66]/20 text-[#95FF66]" 
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {topic.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Content area */}
        <div className="md:col-span-3 glass p-6 rounded-lg">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="exercises">Exercises</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
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
      </div>
    </div>
  );
};

export default ModuleContent;
