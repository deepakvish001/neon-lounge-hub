
import { Timer, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const Battle = () => {
  const [code, setCode] = useState(`# Write your Python code here
def find_num(arr):
    arr.sort()`);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      {/* Header */}
      <div className="glass border-b border-white/10 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-[#95FF66]" />
          <span className="text-[#95FF66]">Battling:</span>
          <span>kevin liu</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass px-3 py-1.5 rounded-md flex items-center gap-2">
            <Timer className="w-4 h-4 text-[#95FF66]" />
            <span className="text-[#95FF66] font-mono">04:51</span>
          </div>
          <div className="glass px-3 py-1.5 rounded-md text-sm">
            30 total tests
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-4 p-4 h-[calc(100vh-56px)]">
        {/* Code Editor */}
        <div className="glass rounded-lg overflow-hidden flex flex-col">
          <div className="p-3 flex items-center gap-2 border-b border-white/10">
            <Code className="w-4 h-4 text-[#95FF66]" />
            <span>Editor</span>
          </div>
          <div className="flex-1 p-4 font-mono text-sm bg-[#1E1E1E]">
            <div className="relative">
              {code.split('\n').map((line, i) => (
                <div key={i} className="flex">
                  <span className="w-8 text-gray-500 text-right pr-4">{i + 1}</span>
                  <span className="flex-1">{line}</span>
                </div>
              ))}
              <div className="absolute top-[72px] left-[116px] w-0.5 h-5 bg-white/50 animate-pulse" />
            </div>
          </div>
          <Button 
            className="m-4 bg-[#95FF66] hover:bg-[#95FF66]/80 text-black font-medium"
          >
            Run Code
          </Button>
        </div>

        {/* Problem Description and Progress */}
        <div className="flex flex-col gap-4">
          <div className="glass rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-4 h-4 text-[#95FF66]" />
              <h2 className="text-lg">Find the Missing Number in an Array</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Given an array of integers from 1 to n with one number missing, write a function
              to find the missing number.
            </p>
            <div className="mb-4">
              <h3 className="text-[#95FF66] mb-2">Examples:</h3>
              <div className="glass rounded-md p-3 mb-3 font-mono text-sm">
                <div className="text-gray-400 mb-1">Input:</div>
                <div>[1, 2, 4, 5, 6]</div>
                <div className="text-gray-400 mt-2 mb-1">Output:</div>
                <div>3</div>
              </div>
              <div className="glass rounded-md p-3 font-mono text-sm">
                <div className="text-gray-400 mb-1">Input:</div>
                <div>[3, 7, 1, 2, 8, 4, 5]</div>
                <div className="text-gray-400 mt-2 mb-1">Output:</div>
                <div>6</div>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-[#95FF66]" />
              <h2>Battle Progress</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Your Progress</span>
                  <span>0%</span>
                </div>
                <Progress value={0} className="h-2 bg-white/10" />
                <div className="text-right text-xs text-gray-400 mt-1">0 / 30 tests passed</div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>kevin liu's Progress</span>
                  <span>0%</span>
                </div>
                <Progress value={0} className="h-2 bg-white/10" />
                <div className="text-right text-xs text-gray-400 mt-1">0 / 30 tests passed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battle;
