
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Module, tracks } from "@/constants";
import { Clock, Users, BookOpen, Award, ChevronLeft, Play, FileText, Code, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ModuleContent = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState<Module | null>(null);
  const [progress, setProgress] = useState(25); // Simulated progress
  const [trackId, setTrackId] = useState<string | null>(null);

  useEffect(() => {
    // Find the module in all tracks
    for (const track of tracks) {
      const foundModule = track.modules.find(m => m.id === moduleId);
      if (foundModule) {
        setModule(foundModule);
        setTrackId(track.id);
        break;
      }
    }
  }, [moduleId]);

  if (!module) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Module not found</h2>
        <Button onClick={() => navigate('/learn')} variant="default">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Learning
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      {/* Back button */}
      <Button 
        variant="ghost" 
        className="mb-6 text-gray-400 hover:text-white" 
        onClick={() => navigate(`/track/${trackId}`)}
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Track
      </Button>

      {/* Module header */}
      <div className="mb-8 md:flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-white">{module.title}</h1>
          <p className="text-gray-400 mb-4 max-w-2xl">{module.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {module.tags?.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
            {module.level && (
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-1.5 text-gray-500" />
                <span className="capitalize">{module.level} level</span>
              </div>
            )}
            {module.duration && (
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1.5 text-gray-500" />
                <span>{module.duration}</span>
              </div>
            )}
            {module.topics && (
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1.5 text-gray-500" />
                <span>{module.topics} topics</span>
              </div>
            )}
            {module.popularity && (
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1.5 text-gray-500" />
                <span>{module.popularity}% satisfaction</span>
              </div>
            )}
          </div>

          {module.lastUpdated && (
            <div className="text-xs text-gray-500">
              Last updated: {module.lastUpdated}
            </div>
          )}
        </div>

        <div className="mt-6 md:mt-0">
          <Button className="bg-[#95FF66] hover:bg-[#85ef56] text-black font-medium">
            <Play className="mr-2 h-4 w-4" /> Continue Learning
          </Button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Your progress</span>
          <span className="text-sm font-medium text-[#95FF66]">{progress}% complete</span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-800" indicatorClassName="bg-[#95FF66]" />
      </div>

      {/* Main content tabs */}
      <Tabs defaultValue="lesson" className="mb-12">
        <TabsList className="bg-gray-800/50 border-b border-gray-700">
          <TabsTrigger value="lesson" className="data-[state=active]:text-[#95FF66] data-[state=active]:border-[#95FF66]">
            <FileText className="h-4 w-4 mr-2" /> Lesson
          </TabsTrigger>
          <TabsTrigger value="exercises" className="data-[state=active]:text-[#95FF66] data-[state=active]:border-[#95FF66]">
            <Code className="h-4 w-4 mr-2" /> Exercises
          </TabsTrigger>
          <TabsTrigger value="resources" className="data-[state=active]:text-[#95FF66] data-[state=active]:border-[#95FF66]">
            <Download className="h-4 w-4 mr-2" /> Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lesson" className="pt-6">
          {module.content ? (
            <div className="prose prose-invert max-w-none"
                 dangerouslySetInnerHTML={{ __html: module.content }}
            ></div>
          ) : (
            <div className="text-center py-12 border border-dashed border-gray-700 rounded-lg">
              <BookOpen className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-400 mb-2">Content is being developed</h3>
              <p className="text-gray-500">Check back soon for the full content of this lesson.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="exercises" className="pt-6">
          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 text-xs mr-2">1</span>
                  Build a Responsive Navbar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Create a responsive navigation bar that collapses into a hamburger menu on mobile devices.</p>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-gray-400 border-gray-600">
                    <Clock className="mr-1 h-3 w-3" /> 45 minutes
                  </Badge>
                  <Button variant="outline" className="text-[#95FF66] border-[#95FF66] hover:bg-[#95FF66]/10">
                    Start Exercise
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 text-xs mr-2">2</span>
                  CSS Grid Layout Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Create a complex grid layout for a dashboard interface using CSS Grid.</p>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-gray-400 border-gray-600">
                    <Clock className="mr-1 h-3 w-3" /> 60 minutes
                  </Badge>
                  <Button variant="outline" className="text-[#95FF66] border-[#95FF66] hover:bg-[#95FF66]/10">
                    Start Exercise
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 text-xs mr-2">3</span>
                  <CheckCircle className="mr-2 h-4 w-4 text-[#95FF66]" /> CSS Animation Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Build an interactive card with hover effects and animations.</p>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-gray-400 border-gray-600">
                    <Clock className="mr-1 h-3 w-3" /> 30 minutes
                  </Badge>
                  <Button variant="ghost" className="text-gray-400" disabled>
                    Completed
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="pt-6">
          <div className="space-y-6">
            <div className="bg-gray-800/40 rounded-lg p-6 border border-gray-700/50">
              <h3 className="text-xl font-medium text-white mb-4">Video Resources</h3>
              
              {module.videoUrl ? (
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg mb-4">
                  <iframe 
                    src={module.videoUrl} 
                    className="absolute top-0 left-0 w-full h-full" 
                    title="Video tutorial"
                    frameBorder="0" 
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="border border-dashed border-gray-700 rounded-lg p-8 text-center mb-4">
                  <Play className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">Video resources coming soon.</p>
                </div>
              )}
              
              <div className="space-y-2">
                <a href="#" className="flex items-center p-3 hover:bg-gray-700/30 rounded-md text-gray-300 hover:text-white transition-colors">
                  <Play className="h-4 w-4 mr-2 text-[#95FF66]" /> 
                  Introduction to CSS Grid
                </a>
                <a href="#" className="flex items-center p-3 hover:bg-gray-700/30 rounded-md text-gray-300 hover:text-white transition-colors">
                  <Play className="h-4 w-4 mr-2 text-[#95FF66]" /> 
                  Advanced Flexbox Techniques
                </a>
                <a href="#" className="flex items-center p-3 hover:bg-gray-700/30 rounded-md text-gray-300 hover:text-white transition-colors">
                  <Play className="h-4 w-4 mr-2 text-[#95FF66]" /> 
                  CSS Animation Workshop
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800/40 rounded-lg p-6 border border-gray-700/50">
              <h3 className="text-xl font-medium text-white mb-4">Downloadable Resources</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center p-3 hover:bg-gray-700/30 rounded-md text-gray-300 hover:text-white transition-colors">
                  <Download className="h-4 w-4 mr-2 text-[#95FF66]" /> 
                  Module Cheat Sheet (PDF)
                </a>
                <a href="#" className="flex items-center p-3 hover:bg-gray-700/30 rounded-md text-gray-300 hover:text-white transition-colors">
                  <Download className="h-4 w-4 mr-2 text-[#95FF66]" /> 
                  Exercise Starter Files (ZIP)
                </a>
                <a href="#" className="flex items-center p-3 hover:bg-gray-700/30 rounded-md text-gray-300 hover:text-white transition-colors">
                  <Download className="h-4 w-4 mr-2 text-[#95FF66]" /> 
                  CSS Reference Guide (PDF)
                </a>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Additional resources section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">Learning Path</h2>
        <Separator className="mb-4 bg-gray-800" />
        
        <div className="space-y-3">
          <div className="flex items-center bg-gray-800/30 p-4 rounded-lg border-l-4 border-[#95FF66]">
            <div className="flex-shrink-0 mr-3">
              <CheckCircle className="h-5 w-5 text-[#95FF66]" />
            </div>
            <div className="flex-grow">
              <h3 className="text-white text-md font-medium">Modern HTML & CSS</h3>
              <p className="text-gray-400 text-sm">Current module</p>
            </div>
            <Badge variant="default" className="bg-[#95FF66]/20 text-[#95FF66] hover:bg-[#95FF66]/30 ml-auto">
              In Progress
            </Badge>
          </div>
          
          <div className="flex items-center bg-gray-800/30 p-4 rounded-lg border-l-4 border-gray-700">
            <div className="flex-shrink-0 mr-3 w-5 h-5 flex items-center justify-center">
              <span className="text-gray-400">2</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-white text-md font-medium">JavaScript Fundamentals</h3>
              <p className="text-gray-400 text-sm">Next recommended module</p>
            </div>
            <Button variant="ghost" size="sm" className="ml-auto text-gray-400 hover:text-white">
              Preview
            </Button>
          </div>
          
          <div className="flex items-center bg-gray-800/30 p-4 rounded-lg border-l-4 border-gray-700">
            <div className="flex-shrink-0 mr-3 w-5 h-5 flex items-center justify-center">
              <span className="text-gray-400">3</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-white text-md font-medium">React Basics</h3>
              <p className="text-gray-400 text-sm">Upcoming module</p>
            </div>
            <Button variant="ghost" size="sm" className="ml-auto text-gray-400 hover:text-white">
              Preview
            </Button>
          </div>
        </div>
      </section>

      {/* Tips section */}
      <section>
        <h2 className="text-xl font-bold text-white mb-4">Learning Tips</h2>
        <Separator className="mb-4 bg-gray-800" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gray-800/40 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg text-white">Practice Regularly</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Building websites regularly is the best way to improve your HTML & CSS skills. Try to code something small every day.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/40 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg text-white">Inspect Real Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Use browser developer tools to inspect how your favorite websites are built. This is a great way to learn professional techniques.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ModuleContent;
