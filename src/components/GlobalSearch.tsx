
import React, { useState } from 'react';
import { 
  Command, CommandEmpty, CommandGroup, CommandInput, 
  CommandItem, CommandList, CommandSeparator 
} from '@/components/ui/command';
import { 
  Book, Code, FileCode, Flame, Gamepad2, 
  Search, Trophy, Users 
} from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  type: 'course' | 'challenge' | 'user' | 'module';
  path: string;
  icon: React.ElementType;
}

const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  // Mock search results
  const searchResults: SearchResult[] = [
    // Courses
    { id: '1', title: 'React Fundamentals', type: 'course', path: '/track/react-fundamentals', icon: Book },
    { id: '2', title: 'System Design Basics', type: 'course', path: '/track/system-design', icon: Book },
    { id: '3', title: 'Algorithms Deep Dive', type: 'course', path: '/track/algorithms', icon: Book },
    
    // Challenges
    { id: '4', title: 'Array Manipulation Challenge', type: 'challenge', path: '/battle?challenge=array-manipulation', icon: Trophy },
    { id: '5', title: 'CSS Grid Master', type: 'challenge', path: '/battle?challenge=css-grid-challenge', icon: Trophy },
    
    // Modules
    { id: '6', title: 'Managing State with Context API', type: 'module', path: '/module/context-api', icon: FileCode },
    { id: '7', title: 'Database Sharding Techniques', type: 'module', path: '/module/db-sharding', icon: FileCode },
    
    // Users
    { id: '8', title: 'Sarah Johnson', type: 'user', path: '/leaderboard?user=sarah', icon: Users },
    { id: '9', title: 'Michael Chen', type: 'user', path: '/leaderboard?user=michael', icon: Users },
  ];

  const filteredResults = value 
    ? searchResults.filter(result => 
        result.title.toLowerCase().includes(value.toLowerCase())
      )
    : searchResults;

  const handleSelect = (selectedItem: SearchResult) => {
    setOpen(false);
    navigate(selectedItem.path);
  };

  // Keyboard shortcut to open search
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 border-white/10 bg-white/5"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2 text-[#95FF66]" />
        <span className="hidden xl:inline-flex text-muted-foreground">
          Search... 
        </span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border border-white/10 bg-black px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 bg-[#1C1C1C] border-white/10">
          <Command className="bg-transparent">
            <CommandInput 
              placeholder="Search for courses, challenges, users..." 
              value={value}
              onValueChange={setValue}
              className="border-none focus:ring-0 text-white"
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Courses">
                {filteredResults
                  .filter(item => item.type === 'course')
                  .map(item => (
                    <CommandItem 
                      key={item.id}
                      value={item.id}
                      onSelect={() => handleSelect(item)}
                      className="flex items-center gap-2 text-white hover:bg-white/5"
                    >
                      <Book className="h-4 w-4 text-[#95FF66]" />
                      {item.title}
                    </CommandItem>
                  ))
                }
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Challenges">
                {filteredResults
                  .filter(item => item.type === 'challenge')
                  .map(item => (
                    <CommandItem 
                      key={item.id}
                      value={item.id}
                      onSelect={() => handleSelect(item)}
                      className="flex items-center gap-2 text-white hover:bg-white/5"
                    >
                      <Trophy className="h-4 w-4 text-[#FF66A6]" />
                      {item.title}
                    </CommandItem>
                  ))
                }
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Modules">
                {filteredResults
                  .filter(item => item.type === 'module')
                  .map(item => (
                    <CommandItem 
                      key={item.id}
                      value={item.id}
                      onSelect={() => handleSelect(item)}
                      className="flex items-center gap-2 text-white hover:bg-white/5"
                    >
                      <FileCode className="h-4 w-4 text-blue-400" />
                      {item.title}
                    </CommandItem>
                  ))
                }
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Users">
                {filteredResults
                  .filter(item => item.type === 'user')
                  .map(item => (
                    <CommandItem 
                      key={item.id}
                      value={item.id}
                      onSelect={() => handleSelect(item)}
                      className="flex items-center gap-2 text-white hover:bg-white/5"
                    >
                      <Users className="h-4 w-4 text-orange-400" />
                      {item.title}
                    </CommandItem>
                  ))
                }
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GlobalSearch;
