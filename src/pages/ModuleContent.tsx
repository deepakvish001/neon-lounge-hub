
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, Code, CheckCircle, ArrowLeft, 
  ArrowRight, PlayCircle, FileText, Download,
  LayoutList, MessageSquare, ChevronRight
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ModuleContent = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState("introduction");
  const [showCodeExplanation, setShowCodeExplanation] = useState(false);

  // Modern HTML & CSS curriculum topics
  const topics = [
    { id: "introduction", title: "Introduction to HTML & CSS", completed: true },
    { id: "html-basics", title: "HTML Fundamentals", completed: true },
    { id: "css-basics", title: "CSS Fundamentals", completed: true },
    { id: "layout", title: "CSS Layout Models", completed: false },
    { id: "flexbox", title: "Flexbox Layout", completed: false },
    { id: "grid", title: "CSS Grid", completed: false },
    { id: "responsive", title: "Responsive Design", completed: false },
    { id: "animation", title: "CSS Animations", completed: false },
    { id: "variables", title: "CSS Variables", completed: false },
    { id: "accessibility", title: "Web Accessibility", completed: false },
  ];

  // Current topic content (simple example with HTML/CSS content)
  const topicContent = {
    introduction: {
      title: "Introduction to HTML & CSS",
      content: (
        <div className="space-y-6">
          <p>
            HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the two core technologies for building web pages. HTML provides the structure of the page, and CSS provides the visual and aural layout.
          </p>
          <h3 className="text-xl font-semibold">What is HTML?</h3>
          <p>
            HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as CSS and scripting languages such as JavaScript.
          </p>
          <div className="bg-black rounded-lg p-4 my-4">
            <pre className="text-sm text-white">
              <code>{`<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is my first HTML page.</p>
</body>
</html>`}</code>
            </pre>
          </div>
          <h3 className="text-xl font-semibold">What is CSS?</h3>
          <p>
            CSS is a style sheet language used for describing the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
          </p>
          <div className="bg-black rounded-lg p-4 my-4">
            <pre className="text-sm text-white">
              <code>{`body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
}

h1 {
  color: #4CAF50;
  text-align: center;
}`}</code>
            </pre>
          </div>
        </div>
      ),
      exercises: [
        {
          id: 1,
          title: "Create a Basic HTML Structure",
          description: "Create an HTML document with a proper DOCTYPE, html, head, and body tags. Include a title, heading, and paragraph.",
          difficulty: "Beginner"
        },
        {
          id: 2,
          title: "Style Your HTML Page",
          description: "Add CSS to your HTML page to change font colors, background, and center align your heading.",
          difficulty: "Beginner"
        }
      ],
      resources: [
        {
          title: "MDN Web Docs - HTML Basics",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
          type: "Documentation"
        },
        {
          title: "MDN Web Docs - CSS Basics",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
          type: "Documentation"
        },
        {
          title: "HTML & CSS Crash Course",
          url: "#",
          type: "Video"
        }
      ]
    },
    "html-basics": {
      title: "HTML Fundamentals",
      content: (
        <div className="space-y-6">
          <p>
            HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page.
          </p>
          <h3 className="text-xl font-semibold">HTML Elements</h3>
          <p>
            An HTML element is defined by a start tag, some content, and an end tag. Elements can be nested inside other elements, creating the structure of an HTML document.
          </p>
          <div className="bg-black rounded-lg p-4 my-4">
            <pre className="text-sm text-white">
              <code>{`<h1>This is a heading</h1>
<p>This is a paragraph with <a href="https://example.com">a link</a>.</p>
<img src="image.jpg" alt="Description of image">`}</code>
            </pre>
          </div>
          <h3 className="text-xl font-semibold">Semantic HTML</h3>
          <p>
            Semantic HTML is the use of HTML markup to reinforce the semantics or meaning of the content. Semantic elements clearly describe their meaning both to the browser and the developer.
          </p>
          <div className="bg-black rounded-lg p-4 my-4">
            <pre className="text-sm text-white">
              <code>{`<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
</main>

<footer>
  <p>Copyright © 2024</p>
</footer>`}</code>
            </pre>
          </div>
        </div>
      ),
      exercises: [
        {
          id: 1,
          title: "Create a Semantic Web Page",
          description: "Build a simple webpage using semantic HTML elements like header, nav, main, article, and footer.",
          difficulty: "Intermediate"
        },
        {
          id: 2,
          title: "HTML Forms Challenge",
          description: "Create a registration form with various input types like text, email, password, and checkbox.",
          difficulty: "Intermediate"
        }
      ],
      resources: [
        {
          title: "HTML Elements Reference",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
          type: "Documentation"
        },
        {
          title: "Semantic HTML Guide",
          url: "#",
          type: "Article"
        },
        {
          title: "HTML Forms Tutorial",
          url: "#",
          type: "Video"
        }
      ]
    },
    "css-basics": {
      title: "CSS Fundamentals",
      content: (
        <div className="space-y-6">
          <p>
            CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the visual appearance of HTML elements on screen, defining things like colors, fonts, spacing, and positioning.
          </p>
          <h3 className="text-xl font-semibold">CSS Selectors</h3>
          <p>
            CSS selectors are patterns used to select the HTML element(s) you want to style.
          </p>
          <div className="bg-black rounded-lg p-4 my-4">
            <pre className="text-sm text-white">
              <code>{`/* Element selector */
p {
  color: blue;
}

/* Class selector */
.highlight {
  background-color: yellow;
}

/* ID selector */
#header {
  font-size: 24px;
}

/* Descendant selector */
article p {
  line-height: 1.6;
}`}</code>
            </pre>
          </div>
          <h3 className="text-xl font-semibold">The Box Model</h3>
          <p>
            The CSS box model describes the rectangular boxes that are generated for elements in the document tree and laid out according to the visual formatting model.
          </p>
          <div className="bg-black rounded-lg p-4 my-4">
            <pre className="text-sm text-white">
              <code>{`.box {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 5px solid #333;
  margin: 30px;
}`}</code>
            </pre>
          </div>
        </div>
      ),
      exercises: [
        {
          id: 1,
          title: "Selector Challenge",
          description: "Practice using different CSS selectors to style specific elements on a webpage.",
          difficulty: "Beginner"
        },
        {
          id: 2,
          title: "Box Model Exercise",
          description: "Create a layout of boxes with different padding, border, and margin values to understand the box model.",
          difficulty: "Intermediate"
        }
      ],
      resources: [
        {
          title: "CSS Reference",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
          type: "Documentation"
        },
        {
          title: "CSS Box Model Explained",
          url: "#",
          type: "Article"
        },
        {
          title: "CSS Selectors In-Depth",
          url: "#",
          type: "Video"
        }
      ]
    }
  };

  // Dynamically get current topic content
  const currentTopic = topicContent[selectedTopic as keyof typeof topicContent] || topicContent.introduction;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Bar */}
      <div className="bg-[#4CAF50] text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-[#45a049]"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Track
          </Button>
          <h1 className="text-xl font-semibold">Modern HTML & CSS</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Badge className="bg-white text-[#4CAF50]">Module 1</Badge>
          <div className="text-sm">Progress: 30%</div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar - Topics */}
          <div className="md:w-1/4">
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-[#4CAF50]">Topics</h2>
              <div className="space-y-2">
                {topics.map((topic) => (
                  <div 
                    key={topic.id}
                    className={`
                      flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors
                      ${selectedTopic === topic.id ? 'bg-[#4CAF50]/10 border-l-4 border-[#4CAF50]' : 'hover:bg-gray-100'}
                    `}
                    onClick={() => setSelectedTopic(topic.id)}
                  >
                    <div className="flex items-center">
                      {topic.completed ? (
                        <CheckCircle className="h-5 w-5 text-[#4CAF50] mr-2" />
                      ) : (
                        <div className="h-5 w-5 border-2 border-gray-300 rounded-full mr-2" />
                      )}
                      <span className={selectedTopic === topic.id ? 'font-medium' : ''}>{topic.title}</span>
                    </div>
                    {selectedTopic === topic.id && (
                      <ChevronRight className="h-5 w-5 text-[#4CAF50]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-[#4CAF50]">Module Info</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <LayoutList className="h-4 w-4 text-gray-500 mr-2" />
                  <span>10 lessons</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-gray-500 mr-2" />
                  <span>15 exercises</span>
                </div>
                <div className="flex items-center">
                  <PlayCircle className="h-4 w-4 text-gray-500 mr-2" />
                  <span>5 video tutorials</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 text-gray-500 mr-2" />
                  <span>Community support</span>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/10 w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resources
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:w-3/4">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[#4CAF50]">{currentTopic.title}</h2>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <ArrowLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      Next
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="content">
                  <TabsList className="mb-6">
                    <TabsTrigger value="content" className="data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Content
                    </TabsTrigger>
                    <TabsTrigger value="exercises" className="data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white">
                      <Code className="h-4 w-4 mr-2" />
                      Exercises
                    </TabsTrigger>
                    <TabsTrigger value="resources" className="data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white">
                      <FileText className="h-4 w-4 mr-2" />
                      Resources
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="content" className="mt-0">
                    <div className="prose max-w-none">
                      {currentTopic.content}
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <Button variant="outline" className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/10">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous Lesson
                      </Button>
                      <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white">
                        Next Lesson
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="exercises" className="mt-0">
                    <div className="space-y-6">
                      {currentTopic.exercises && currentTopic.exercises.map((exercise) => (
                        <div key={exercise.id} className="border rounded-lg p-4 hover:border-[#4CAF50] transition-colors">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-lg">{exercise.title}</h3>
                              <p className="text-gray-600 mt-1">{exercise.description}</p>
                            </div>
                            <Badge variant="outline" className="text-[#4CAF50] border-[#4CAF50]">
                              {exercise.difficulty}
                            </Badge>
                          </div>
                          <div className="mt-4">
                            <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white">
                              Start Exercise
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="resources" className="mt-0">
                    <div className="space-y-4">
                      {currentTopic.resources && currentTopic.resources.map((resource, index) => (
                        <a 
                          key={index} 
                          href={resource.url}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center p-4 border rounded-lg hover:border-[#4CAF50] transition-colors"
                        >
                          {resource.type === "Documentation" && (
                            <FileText className="h-5 w-5 text-[#4CAF50] mr-3" />
                          )}
                          {resource.type === "Video" && (
                            <PlayCircle className="h-5 w-5 text-[#4CAF50] mr-3" />
                          )}
                          {resource.type === "Article" && (
                            <BookOpen className="h-5 w-5 text-[#4CAF50] mr-3" />
                          )}
                          <div>
                            <h3 className="font-medium">{resource.title}</h3>
                            <p className="text-sm text-gray-500">{resource.type}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
