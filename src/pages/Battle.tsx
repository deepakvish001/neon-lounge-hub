
import { Timer, Code, Users, Play, CheckCircle, XCircle, Brain, Trophy, Shield, Sword, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Battle = () => {
  const [code, setCode] = useState(`# Write your Python code here
def find_lca(tree, p, q):
    # Write your code here`);
  
  // Added time state and timer effect
  const [timeLeft, setTimeLeft] = useState(182); // 3:02 in seconds
  const [activeTab, setActiveTab] = useState("problem");
  const [testResults, setTestResults] = useState<{ passed: boolean; message: string }[]>([]);
  
  // Timer effect
  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft]);
  
  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handleRunCode = () => {
    // Simulate test results
    const results = [
      { passed: true, message: "Test case 1 passed: Basic tree structure" },
      { passed: false, message: "Test case 2 failed: Expected 3, got None" }
    ];
    
    setTestResults(results);
    
    // Show toast notification
    const passedCount = results.filter(r => r.passed).length;
    if (passedCount === results.length) {
      toast.success("All tests passed! Great job!");
    } else {
      toast.error(`${passedCount}/${results.length} tests passed`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      {/* Header */}
      <div className="glass border-b border-white/10 px-4 py-3 flex justify-between items-center animate-fade-in">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-[#95FF66]" />
          <span className="text-[#95FF66]">Battling:</span>
          <span className="font-medium">William Lafond</span>
          <div className="ml-2 px-2 py-0.5 bg-white/10 rounded text-xs">Expert</div>
        </div>
        <div className="flex items-center gap-4">
          <div className={`glass px-3 py-1.5 rounded-md flex items-center gap-2 ${timeLeft < 60 ? 'animate-pulse text-red-500' : ''}`}>
            <Timer className={`w-4 h-4 ${timeLeft < 60 ? 'text-red-500' : 'text-[#95FF66]'}`} />
            <span className={`font-mono ${timeLeft < 60 ? 'text-red-500' : 'text-[#95FF66]'}`}>{formatTime(timeLeft)}</span>
          </div>
          <div className="glass px-3 py-1.5 rounded-md text-sm">
            2 total tests
          </div>
          <Button variant="outline" size="sm" className="bg-white/5 hover:bg-white/10 border-white/10">
            <Zap className="w-4 h-4 mr-1 text-[#95FF66]" />
            Use Hint
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-5 gap-4 p-4 h-[calc(100vh-56px)]">
        {/* Left Section (3/5) - Code Editor */}
        <div className="col-span-3 glass rounded-lg overflow-hidden flex flex-col animate-slide-in">
          <div className="p-3 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-[#95FF66]" />
              <span>Editor</span>
            </div>
            <div className="flex gap-2">
              <div className="text-xs px-2 py-0.5 bg-white/10 rounded">Python</div>
              <div className="text-xs px-2 py-0.5 bg-[#95FF66]/20 text-[#95FF66] rounded">Auto-Save On</div>
            </div>
          </div>
          <div className="flex-1 p-4 font-mono text-sm bg-[#1E1E1E] overflow-auto">
            <div className="relative">
              {code.split('\n').map((line, i) => (
                <div key={i} className="flex hover:bg-white/5">
                  <span className="w-8 text-gray-500 text-right pr-4 select-none">{i + 1}</span>
                  <span className="flex-1">{line}</span>
                </div>
              ))}
              <div className="absolute top-[72px] left-[116px] w-0.5 h-5 bg-white/50 animate-pulse" />
            </div>
          </div>
          <div className="p-4 bg-[#1c1c1c] border-t border-white/10 flex justify-between">
            <Button 
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-white/20"
            >
              Reset Code
            </Button>
            <Button 
              className="bg-[#95FF66] hover:bg-[#95FF66]/80 text-black font-medium"
              onClick={handleRunCode}
            >
              <Play className="w-4 h-4 mr-2" />
              Run Code
            </Button>
          </div>
        </div>

        {/* Right Section (2/5) - Problem Description and Progress */}
        <div className="col-span-2 flex flex-col gap-4 animate-slide-in" style={{ animationDelay: "0.1s" }}>
          {/* Tabs for Problem/Tests/Hints */}
          <Card className="glass border-none shadow-none">
            <Tabs defaultValue="problem" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full bg-white/5 border-b border-white/10">
                <TabsTrigger 
                  value="problem" 
                  className="flex-1 data-[state=active]:bg-white/10 data-[state=active]:shadow-none data-[state=active]:text-[#95FF66]"
                >
                  Problem
                </TabsTrigger>
                <TabsTrigger 
                  value="tests" 
                  className="flex-1 data-[state=active]:bg-white/10 data-[state=active]:shadow-none data-[state=active]:text-[#95FF66]"
                >
                  Test Results
                </TabsTrigger>
                <TabsTrigger 
                  value="hints" 
                  className="flex-1 data-[state=active]:bg-white/10 data-[state=active]:shadow-none data-[state=active]:text-[#95FF66]"
                >
                  Hints
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="problem" className="p-4 m-0">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-4 h-4 text-[#95FF66]" />
                  <h2 className="text-lg font-medium">Find the Lowest Common Ancestor in a Binary Tree</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  Write a function to find the lowest common ancestor (LCA) of two nodes in a binary tree. The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants.
                </p>
                
                <div className="mb-4">
                  <h3 className="text-[#95FF66] mb-2 flex items-center gap-1">
                    <Brain className="w-4 h-4" /> 
                    Problem Details:
                  </h3>
                  <ul className="list-disc pl-5 text-gray-300 space-y-1">
                    <li>All of the nodes' values will be unique.</li>
                    <li>p and q are different and both values will exist in the binary tree.</li>
                    <li>A node can be a descendant of itself according to the LCA definition.</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-[#95FF66] mb-2">Examples:</h3>
                  <div className="glass rounded-md p-3 mb-3 font-mono text-sm">
                    <div className="text-gray-400 mb-1">Input:</div>
                    <div>{`{tree: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p: 5, q: 1}`}</div>
                    <div className="text-gray-400 mt-2 mb-1">Output:</div>
                    <div>3</div>
                    <div className="text-gray-400 mt-2 mb-1">Explanation:</div>
                    <div>The LCA of nodes 5 and 1 is 3.</div>
                  </div>
                  
                  <div className="glass rounded-md p-3 font-mono text-sm">
                    <div className="text-gray-400 mb-1">Input:</div>
                    <div>{`{tree: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p: 5, q: 4}`}</div>
                    <div className="text-gray-400 mt-2 mb-1">Output:</div>
                    <div>5</div>
                    <div className="text-gray-400 mt-2 mb-1">Explanation:</div>
                    <div>The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.</div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="tests" className="p-4 m-0">
                <div className="flex items-center gap-2 mb-4">
                  <Play className="w-4 h-4 text-[#95FF66]" />
                  <h2 className="text-lg font-medium">Test Results</h2>
                </div>
                
                {testResults.length === 0 ? (
                  <div className="text-center py-6 text-gray-400">
                    <Play className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>Run your code to see test results</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {testResults.map((result, idx) => (
                      <div key={idx} className={`glass p-3 rounded-md border ${result.passed ? 'border-green-500/30' : 'border-red-500/30'}`}>
                        <div className="flex items-center gap-2">
                          {result.passed ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                          <span className={result.passed ? 'text-green-500' : 'text-red-500'}>
                            {result.message}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="hints" className="p-4 m-0">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-[#95FF66]" />
                  <h2 className="text-lg font-medium">Hints</h2>
                </div>
                
                <div className="mb-4">
                  <div className="glass rounded-md p-3 mb-3">
                    <h3 className="text-[#95FF66] text-sm mb-2">Hint 1: Approach</h3>
                    <p className="text-gray-300 text-sm">Think about traversing the tree and checking if both nodes are descendants of the current node.</p>
                    <Button size="sm" className="mt-2 bg-white/10 hover:bg-white/20 text-xs">
                      Reveal Hint
                    </Button>
                  </div>
                  
                  <div className="glass rounded-md p-3 mb-3">
                    <h3 className="text-[#95FF66] text-sm mb-2">Hint 2: Recursion</h3>
                    <p className="text-gray-300 text-sm">The solution likely involves a recursive approach.</p>
                    <Button size="sm" className="mt-2 bg-white/10 hover:bg-white/20 text-xs">
                      Reveal Hint
                    </Button>
                  </div>
                  
                  <div className="glass rounded-md p-3">
                    <h3 className="text-[#95FF66] text-sm mb-2">Hint 3: Base Cases</h3>
                    <p className="text-gray-300 text-sm">Consider what happens when the current node is null, p, or q.</p>
                    <Button size="sm" className="mt-2 bg-white/10 hover:bg-white/20 text-xs">
                      Reveal Hint
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
          
          {/* Battle Progress */}
          <Card className="glass border-none shadow-none">
            <CardHeader className="px-4 py-3 border-b border-white/10">
              <CardTitle className="text-base flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#95FF66]" />
                Battle Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2 items-center">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#95FF66]" />
                    <span>Your Progress</span>
                  </div>
                  <span className="text-[#95FF66]">50%</span>
                </div>
                <Progress value={50} className="h-2 bg-white/10" />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1 / 2 tests passed</span>
                  <span className="text-white/70">+25 XP</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2 items-center">
                  <div className="flex items-center gap-2">
                    <Sword className="w-4 h-4 text-red-400" />
                    <span>William Lafond's Progress</span>
                  </div>
                  <span className="text-red-400">50%</span>
                </div>
                <Progress value={50} className="h-2 bg-white/10" indicatorClassName="bg-red-400" />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1 / 2 tests passed</span>
                  <span className="text-white/70">+25 XP</span>
                </div>
              </div>
              
              <div className="pt-2 border-t border-white/10">
                <h3 className="text-sm font-medium mb-2">Battle Status:</h3>
                <div className="bg-white/5 rounded-md p-3 flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/20 rounded-full">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-sm">You're neck and neck!</div>
                    <div className="text-xs text-gray-400">First to solve both tests wins</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Battle;
