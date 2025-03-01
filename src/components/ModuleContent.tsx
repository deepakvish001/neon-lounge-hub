
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { tracks } from '@/constants';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Download, 
  Heart, 
  Share2, 
  Bookmark,
  AlertCircle,
  Copy,
  ExternalLink
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ModuleContent = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState<string | null>(null);
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [selectedTab, setSelectedTab] = useState('content');
  const [copied, setCopied] = useState(false);

  // Find the module from all tracks
  const moduleInfo = React.useMemo(() => {
    for (const track of tracks) {
      const module = track.modules.find(m => m.id === moduleId);
      if (module) {
        return { module, track };
      }
    }
    return null;
  }, [moduleId]);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [moduleId]);

  useEffect(() => {
    // Update reading progress based on scroll position
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      
      const progress = Math.min(100, Math.round((scrollTop / scrollHeight) * 100));
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    setNotification(bookmarked ? 'Bookmark removed' : 'Module bookmarked!');
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLike = () => {
    setLiked(!liked);
    setNotification(liked ? 'Like removed' : 'You liked this module!');
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    setNotification('Resources are being prepared for download!');
    setTimeout(() => setNotification(null), 3000);
  };

  if (!moduleInfo) {
    return <div className="container mx-auto py-8">Module not found</div>;
  }

  const { module, track } = moduleInfo;

  return (
    <div className="container mx-auto py-8 animate-fade-in">
      {/* Fixed reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#4CAF50] to-[#95FF66] transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>
      
      <Button 
        variant="ghost" 
        onClick={() => navigate(`/track/${track.id}`)}
        className="flex items-center hover:bg-white/5 transition-colors mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to {track.title}
      </Button>
      
      {isLoading ? (
        <div className="space-y-4">
          <div className="h-8 w-48 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 w-full max-w-md bg-gray-700 rounded animate-pulse"></div>
          <div className="h-64 bg-gray-800/50 rounded-lg animate-pulse mt-6"></div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          {/* Module Header */}
          <div className="mb-6 relative">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-white">{module.title}</h1>
              <div className="flex space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`${bookmarked ? 'text-[#95FF66]' : 'text-gray-400'} hover:text-[#95FF66] transition-colors`}
                  onClick={handleBookmark}
                >
                  <Bookmark className={`h-5 w-5 ${bookmarked ? 'fill-[#95FF66]' : ''}`} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`${liked ? 'text-[#FF66A6]' : 'text-gray-400'} hover:text-[#FF66A6] transition-colors`}
                  onClick={handleLike}
                >
                  <Heart className={`h-5 w-5 ${liked ? 'fill-[#FF66A6]' : ''}`} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => setNotification('Module shared!')}
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center mt-2 text-sm text-gray-400">
              <div className="flex items-center mr-4">
                <Clock className="h-4 w-4 mr-1" />
                <span>2 hours</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                <span>6 topics</span>
              </div>
            </div>
            
            <p className="mt-4 text-gray-300">{module.description}</p>
            
            {/* Reading time indicator */}
            <div className="mt-4 flex items-center text-sm">
              <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-[#95FF66] h-full transition-all duration-300 ease-out"
                  style={{ width: `${readingProgress}%` }} 
                ></div>
              </div>
              <span className="ml-3 text-gray-400 w-16 text-right">{readingProgress}% read</span>
            </div>
          </div>
          
          {/* Module Tabs */}
          <Tabs 
            defaultValue="content" 
            value={selectedTab} 
            onValueChange={setSelectedTab}
            className="mt-6"
          >
            <TabsList className="w-full bg-gray-800/70 p-1">
              <TabsTrigger 
                value="content" 
                className="flex-1 data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Content
              </TabsTrigger>
              <TabsTrigger 
                value="resources" 
                className="flex-1 data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]"
              >
                <Download className="h-4 w-4 mr-2" />
                Resources
              </TabsTrigger>
              <TabsTrigger 
                value="discussion" 
                className="flex-1 data-[state=active]:bg-[#95FF66]/20 data-[state=active]:text-[#95FF66]"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Discussion
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="mt-6">
              {/* Module Content */}
              {module.content ? (
                <div className="prose prose-invert max-w-none content-area stagger-fade-in">
                  <div dangerouslySetInnerHTML={{ __html: module.content }} />
                </div>
              ) : (
                <div className="glass rounded-lg p-8 text-center">
                  <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">Content Coming Soon</h3>
                  <p className="text-gray-400">This module is under development. Check back later!</p>
                </div>
              )}
              
              {/* Code blocks with copy functionality */}
              <div className="mt-8">
                <div className="relative">
                  <pre className="code-block custom-scrollbar overflow-x-auto">
                    <code className="language-html">
                      {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Your content here -->
</body>
</html>`}
                    </code>
                  </pre>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="absolute top-2 right-2 text-gray-400 hover:text-white bg-black/20"
                    onClick={() => handleCopyCode(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Your content here -->
</body>
</html>`)}
                  >
                    {copied ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              {/* Interactive elements */}
              <div className="mt-12 glass p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Practice Exercise</h3>
                <p className="text-gray-300 mb-4">Try creating a simple HTML structure with semantic elements.</p>
                <div className="flex space-x-4 mt-6">
                  <Button className="hover:shadow-[0_0_15px_rgba(149,255,102,0.3)] transition-shadow">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Start Exercise
                  </Button>
                  <Button variant="outline" className="border-white/10 hover:bg-white/5">
                    <Download className="mr-2 h-4 w-4" />
                    Download Starter Files
                  </Button>
                </div>
              </div>
              
              {/* Related content */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-4">Related Content</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {track.modules.filter(m => m.id !== moduleId).slice(0, 2).map((relatedModule) => (
                    <Card key={relatedModule.id} className="bg-gray-800/30 border-white/5 hover:border-[#95FF66]/20 transition-all hover:-translate-y-1 duration-300">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">{relatedModule.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-xs text-gray-400">{relatedModule.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-[#95FF66] hover:bg-[#95FF66]/10 w-full justify-start"
                          onClick={() => navigate(`/module/${relatedModule.id}`)}
                        >
                          <BookOpen className="h-3 w-3 mr-1" />
                          View Module
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Next/Previous navigation */}
              <div className="mt-12 flex justify-between">
                <Button 
                  variant="outline" 
                  className="border-white/10 hover:bg-white/5"
                  onClick={() => navigate(`/track/${track.id}`)}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Track
                </Button>
                <Button
                  className="bg-[#95FF66] text-black hover:bg-[#95FF66]/90"
                  onClick={() => {
                    setNotification('Module completed!');
                    setTimeout(() => navigate(`/track/${track.id}`), 1000);
                  }}
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Complete Module
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="mt-6">
              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Module Resources</h3>
                <p className="text-gray-300 mb-6">Download additional resources to support your learning.</p>
                
                <div className="space-y-4">
                  {['Cheat Sheet', 'Code Examples', 'Exercise Files', 'Reference Guide'].map((resource, idx) => (
                    <div key={idx} className="bg-gray-800/50 border border-white/10 rounded-lg p-4 flex justify-between items-center hover:border-[#95FF66]/20 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                          <Download className="h-5 w-5 text-gray-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{resource}</h4>
                          <p className="text-gray-400 text-sm">PDF, 2.4MB</p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-[#95FF66] hover:bg-[#95FF66]/10"
                        onClick={handleDownload}
                      >
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">External Resources</h3>
                  <div className="space-y-3">
                    {[
                      { title: 'MDN Web Docs - HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                      { title: 'CSS-Tricks Flexbox Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
                      { title: 'Web.dev - Learn CSS', url: 'https://web.dev/learn/css/' }
                    ].map((link, idx) => (
                      <a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center p-3 bg-gray-800/30 hover:bg-gray-800/50 rounded-lg text-gray-300 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{link.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="discussion" className="mt-6">
              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Discussion Forum</h3>
                <p className="text-gray-300 mb-6">Join the conversation about this module.</p>
                
                <div className="bg-gray-800/50 border border-white/10 rounded-lg p-6 text-center">
                  <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-white mb-2">Discussion Coming Soon</h4>
                  <p className="text-gray-400 mb-4">Our community forum will be available shortly.</p>
                  <Button 
                    variant="secondary"
                    onClick={() => setNotification('You will be notified when discussions are available!')}
                  >
                    Notify Me
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
      
      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-[#95FF66] text-black px-4 py-2 rounded-md shadow-lg animate-fade-in z-50">
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 mr-2" />
            {notification}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleContent;
