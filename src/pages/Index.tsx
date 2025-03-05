import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Code, Zap, Target, Crown, Trophy, Book, Users, Star, MessagesSquare, 
  BrainCircuit, Rocket, ChevronRight, Database, Globe, 
  ArrowRight, LineChart, BookOpen, Calendar, Briefcase, Clock, 
  FileCode, TrendingUp, Sparkles, Blocks, LockOpen, Bot, Video,
  CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import WelcomeStats from "@/components/WelcomeStats";
import ContinueLearning from "@/components/ContinueLearning";
import WeeklyChallenges from "@/components/WeeklyChallenges";
import { CareerPathSection } from "@/components/CareerPathSection";

const Index = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [activeTab, setActiveTab] = useState("popular");
  const [showPremiumFeatures, setShowPremiumFeatures] = useState(false);

  const handleStartMatch = () => {
    setIsDialogOpen(true);
  };

  const handleStartBattle = () => {
    if (topic && difficulty) {
      navigate('/battle');
      setIsDialogOpen(false);
    }
  };

  // Popular track data
  const popularTracks = [
    {
      title: "System Design",
      description: "Learn to design scalable distributed systems",
      icon: Globe,
      students: 5200,
      rating: 4.9,
      modules: 15,
      slug: "system-design",
    },
    {
      title: "Algorithms Mastery",
      description: "Master fundamental algorithms and problem-solving techniques",
      icon: BrainCircuit,
      students: 4800,
      rating: 4.8,
      modules: 12,
      slug: "algorithms-mastery",
    },
    {
      title: "Frontend Development",
      description: "Modern web development with React and TypeScript",
      icon: Code,
      students: 6300,
      rating: 4.7,
      modules: 14,
      slug: "frontend-development",
    },
    {
      title: "Database Management",
      description: "Database design, optimization, and administration",
      icon: Database,
      students: 3900,
      rating: 4.6,
      modules: 10,
      slug: "database-management",
    }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      title: "System Design Hackathon",
      date: "May 15, 2024",
      time: "10:00 AM - 6:00 PM",
      participants: 150,
      type: "Competition",
    },
    {
      title: "Algorithm Strategies Webinar",
      date: "May 22, 2024",
      time: "2:00 PM - 4:00 PM",
      participants: 500,
      type: "Webinar",
    },
    {
      title: "Code Battle Championship",
      date: "June 5, 2024",
      time: "9:00 AM - 5:00 PM",
      participants: 300,
      type: "Tournament",
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer at Google",
      content: "The Algorithm challenges helped me ace my technical interviews. I highly recommend this platform to anyone looking to improve their coding skills.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Systems Engineer at Amazon",
      content: "The system design course transformed my understanding of scalable architecture. The real-time battles were incredibly engaging and improved my problem-solving skills.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Software Architect at Microsoft",
      content: "This platform has been instrumental in my career growth. The challenging problems and competitive environment pushed me to become a better developer.",
      avatar: "ER",
    }
  ];

  // Achievement stats
  const achievements = [
    {
      title: "Challenges Completed",
      count: "250K+",
      icon: CheckCircle,
    },
    {
      title: "Job Placements",
      count: "12K+",
      icon: Briefcase,
    },
    {
      title: "Competition Winners",
      count: "5K+",
      icon: Trophy,
    },
    {
      title: "Countries Reached",
      count: "120+",
      icon: Globe,
    }
  ];

  // New workshop data
  const workshops = [
    {
      title: "Advanced Algorithm Techniques",
      instructor: "Dr. Jane Smith",
      duration: "4 hours",
      level: "Advanced",
      date: "June 15, 2024",
      participants: 120,
      icon: BrainCircuit,
    },
    {
      title: "System Design Fundamentals",
      instructor: "Mark Johnson",
      duration: "3 hours",
      level: "Intermediate",
      date: "June 20, 2024", 
      participants: 95,
      icon: Blocks,
    },
    {
      title: "Competitive Coding Strategies",
      instructor: "Alex Chen",
      duration: "2 hours",
      level: "All Levels",
      date: "June 25, 2024",
      participants: 150,
      icon: Code,
    }
  ];

  // Coding tips data
  const codingTips = [
    {
      title: "Use descriptive variable names",
      description: "Clear naming helps readability and maintainability of your code.",
      icon: FileCode,
    },
    {
      title: "Test edge cases",
      description: "Always check boundary conditions to ensure robust solutions.",
      icon: CheckCircle,
    },
    {
      title: "Optimize early, but not prematurely",
      description: "Focus on correctness first, then improve performance where needed.",
      icon: TrendingUp,
    },
    {
      title: "Learn keyboard shortcuts",
      description: "Mastering your IDE shortcuts can significantly boost productivity.",
      icon: Sparkles,
    }
  ];

  // Premium features
  const premiumFeatures = [
    {
      title: "AI Code Review",
      description: "Get personalized feedback on your code from our AI assistant.",
      icon: Bot,
    },
    {
      title: "Private Tournaments",
      description: "Create and host your own coding competitions with friends or colleagues.",
      icon: Trophy, 
    },
    {
      title: "Advanced Analytics",
      description: "Deep insights into your coding performance and progress over time.",
      icon: LineChart,
    },
    {
      title: "Interview Preparation",
      description: "Tailored practice for technical interviews at top companies.",
      icon: Briefcase,
    }
  ];

  // Battle arena data
  const battleArenaData = [
    {
      title: "Daily Challenges",
      description: "New coding problems every day to keep your skills sharp",
      icon: Calendar,
      participants: 2500,
    },
    {
      title: "Team Battles",
      description: "Collaborate with friends to solve complex problems",
      icon: Users,
      participants: 1800,
    },
    {
      title: "Speed Coding",
      description: "Race against time to solve problems quickly",
      icon: Clock,
      participants: 3200,
    }
  ];

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      {/* Hero Section - Modified with improved animations */}
      <section className="relative pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-8 inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-[#95FF66] blur-3xl opacity-20 rounded-full animate-pulse"></div>
                <BrainCircuit className="w-20 h-20 text-[#95FF66] mx-auto relative animate-float" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#95FF66] to-[#67B346] bg-clip-text text-transparent animate-fade-in">
              Level Up Your Coding Skills
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Join the ultimate platform for competitive programming. Challenge others,
              learn from real-time battles, and climb the global rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                onClick={handleStartMatch}
                className="bg-[#95FF66] hover:bg-[#95FF66]/80 transition-colors text-black text-lg px-8 py-6 animate-float"
              >
                Start Battle Now
              </Button>
              <Button 
                variant="outline"
                className="border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10 text-lg px-8 py-6"
              >
                Practice Mode
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Stats Section - New Addition */}
      <div className="container mx-auto px-4">
        <WelcomeStats />
      </div>

      {/* Continue Learning Section - New Addition */}
      <div className="container mx-auto px-4">
        <ContinueLearning />
      </div>

      {/* Weekly Challenges Section - New Addition */}
      <div className="container mx-auto px-4">
        <WeeklyChallenges />
      </div>

      {/* Career Path Section - New Addition */}
      <div className="container mx-auto px-4">
        <CareerPathSection />
      </div>

      {/* Battle Dialog - Keep unchanged */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#1C1C1C] border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              Choose Your Battle
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Topic</label>
              <Select value={topic} onValueChange={setTopic}>
                <SelectTrigger className="w-full bg-black/50 border-white/10 text-white">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent className="bg-[#1C1C1C] border-white/10">
                  <SelectItem value="algorithms">Algorithms</SelectItem>
                  <SelectItem value="data-structures">Data Structures</SelectItem>
                  <SelectItem value="system-design">System Design</SelectItem>
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="databases">Databases</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Difficulty</label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger className="w-full bg-black/50 border-white/10 text-white">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent className="bg-[#1C1C1C] border-white/10">
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="sm:justify-center gap-2">
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              className="border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10"
            >
              Cancel
            </Button>
            <Button
              onClick={handleStartBattle}
              disabled={!topic || !difficulty}
              className="bg-[#95FF66] hover:bg-[#95FF66]/80 text-black"
            >
              Start Battle
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Stats Section - Modified with improved styling */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-stagger">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#95FF66] mb-2">10K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#95FF66] mb-2">5K+</div>
              <div className="text-muted-foreground">Daily Battles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#95FF66] mb-2">500+</div>
              <div className="text-muted-foreground">Coding Challenges</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#95FF66] mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks Section - Modified with improved animations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#95FF66] mb-2">Popular Learning Tracks</h2>
              <p className="text-muted-foreground">Start your journey with our curated learning paths</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button 
                onClick={() => navigate('/learn')} 
                variant="outline" 
                className="border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10"
              >
                View All Tracks <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-stagger">
            {popularTracks.map((track, index) => (
              <Card 
                key={index} 
                className="glass border-white/10 hover:border-[#95FF66]/50 transition-all group hover-scale"
                onClick={() => navigate(`/track/${track.slug}`)}
              >
                <CardHeader className="space-y-1">
                  <div className="p-2 w-12 h-12 rounded-lg bg-[#95FF66]/10 flex items-center justify-center mb-2 group-hover:bg-[#95FF66]/20 transition-colors">
                    <track.icon className="w-6 h-6 text-[#95FF66]" />
                  </div>
                  <CardTitle className="text-xl">{track.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {track.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {track.students.toLocaleString()} students
                    </div>
                    <div className="flex items-center">
                      <Book className="w-4 h-4 mr-1" />
                      {track.modules} modules
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full bg-black/20 hover:bg-[#95FF66]/20 hover:text-[#95FF66] border border-white/10 transition-all">
                    Explore Track <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - Unchanged */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#95FF66]">Why Choose Code Battles?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-lg hover-scale">
              <Zap className="w-10 h-10 text-[#95FF66] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Battles</h3>
              <p className="text-muted-foreground">Challenge opponents in live coding matches and see who can solve problems faster.</p>
            </div>
            <div className="glass p-6 rounded-lg hover-scale">
              <Target className="w-10 h-10 text-[#95FF66] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practice Mode</h3>
              <p className="text-muted-foreground">Sharpen your skills with our extensive collection of coding problems.</p>
            </div>
            <div className="glass p-6 rounded-lg hover-scale">
              <Crown className="w-10 h-10 text-[#95FF66] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Rankings</h3>
              <p className="text-muted-foreground">Compete for the top spot on our worldwide leaderboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section - Unchanged */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#95FF66] mb-2">Upcoming Events</h2>
              <p className="text-muted-foreground">Join our live events and coding competitions</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button 
                variant="outline" 
                className="border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10"
              >
                View All Events <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index}
                className="glass border-white/10 hover:border-[#95FF66]/50 transition-all hover-scale"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="p-2 w-12 h-12 rounded-lg bg-[#95FF66]/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-[#95FF66]" />
                    </div>
                    <span className="px-3 py-1 text-xs rounded-full bg-[#95FF66]/10 text-[#95FF66]">
                      {event.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl mt-4">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {event.participants} participants expected
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#95FF66] hover:bg-[#95FF66]/90 text-black transition-all">
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Battle Arena Section - Unchanged */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#95FF66] mb-2">Battle Arena</h2>
              <p className="text-muted-foreground">Compete with developers worldwide in exciting coding battles</p>
            </div>
            <Button 
              variant="outline" 
              className="mt-4 md:mt-0 border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10"
            >
              View All Battles <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {battleArenaData.map((arena, index) => (
              <Card 
                key={index}
                className="glass border-white/10 hover:border-[#95FF66]/50 transition-all hover-scale"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="p-2 w-12 h-12 rounded-lg bg-[#95FF66]/10 flex items-center justify-center">
                      <arena.icon className="w-6 h-6 text-[#95FF66]" />
                    </div>
                    <span className="px-3 py-1 text-xs rounded-full bg-[#95FF66]/10 text-[#95FF66]">
                      {arena.participants}+ users
                    </span>
                  </div>
                  <CardTitle className="text-xl mt-4">{arena.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{arena.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#95FF66] hover:bg-[#95FF66]/90 text-black transition-all">
                    Join Battle
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Workshops Section - Unchanged */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#95FF66] mb-2">Live Workshops</h2>
              <p className="text-muted-foreground">Enhance your skills with interactive sessions by industry experts</p>
            </div>
            <Button 
              variant="outline" 
              className="mt-4 md:mt-0 border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10"
            >
              View All Workshops <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <Card 
                key={index}
                className="glass border-white/10 hover:border-[#95FF66]/50 transition-all hover-scale"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="p-2 w-12 h-12 rounded-lg bg-[#95FF66]/10 flex items-center justify-center">
                      <workshop.icon className="w-6 h-6 text-[#95FF66]" />
                    </div>
                    <span className="px-3 py-1 text-xs rounded-full bg-[#95FF66]/10 text-[#95FF66]">
                      {workshop.level}
                    </span>
                  </div>
                  <CardTitle className="text-xl mt-4">{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      Instructor: {workshop.instructor}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration: {workshop.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {workshop.participants} registered
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#95FF66] hover:bg-[#95FF66]/90 text-black transition-all">
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths - Unchanged */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#95FF66]">Learning Paths</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-lg text-center hover-scale">
              <Book className="w-8 h-8 text-[#95FF66] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Algorithms</h3>
              <p className="text-sm text-muted-foreground">Master fundamental algorithms</p>
            </div>
            <div className="glass p-6 rounded-lg text-center hover-scale">
              <Code className="w-8 h-8 text-[#95FF66] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Data Structures</h3>
              <p className="text-sm text-muted-foreground">Learn essential data structures</p>
            </div>
            <div className="glass p-6 rounded-lg text-center hover-scale">
              <Trophy className="w-8 h-8 text-[#95FF66] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Competition</h3>
              <p className="text-sm text-muted-foreground">Practice competitive coding</p>
            </div>
            <div className="glass p-6 rounded-lg text-center hover-scale">
              <Rocket className="w-8 h-8 text-[#95FF66] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">System Design</h3>
              <p className="text-sm text-muted-foreground">Build scalable systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Tips Section - Unchanged */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#95FF66]">Pro Coding Tips</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {codingTips.map((tip, index) => (
              <div key={index} className="glass p-6 rounded-lg hover-scale">
                <div className="w-12 h-12 mx-auto bg-[#95FF66]/10 rounded-full flex items-center justify-center mb-4">
                  <tip.icon className="w-6 h-6 text-[#95FF66]" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{tip.title}</h3>
                <p className="text-sm text-center text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button 
              variant="outline" 
              className="border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10"
            >
              View All Tips <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Resources Section - Unchanged */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#95FF66]">Learning Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive collection of resources to enhance your coding journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-lg hover-scale">
              <BookOpen className="w-10 h-10 text-[#95FF66] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-muted-foreground mb-4">Comprehensive guides and references for various programming topics.</p>
              <Button variant="outline" className="w-full border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10">
                View Docs
              </Button>
            </div>
            <div className="glass p-6 rounded-lg hover-scale">
              <Video className="w-10 h-10 text-[#95FF66] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
              <p className="text-muted-foreground mb-4">Step-by-step video lessons from expert instructors.</p>
              <Button variant="outline" className="w-full border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10">
                Watch Now
              </Button>
            </div>
            <div className="glass p-6 rounded-lg hover-scale">
              <Blocks className="w-10 h-10 text-[#95FF66] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Code Examples</h3>
              <p className="text-muted-foreground mb-4">Real-world examples and sample projects to learn from.</p>
              <Button variant="outline" className="w-full border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10">
                Browse Examples
              </Button>
            </div>
            <div className="glass p-6 rounded-lg hover-scale">
              <MessagesSquare className="w-10 h-10 text-[#95FF66] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
              <p className="text-muted-foreground mb-4">Connect with other developers to share knowledge and get help.</p>
              <Button variant="outline" className="w-full border-[#95FF66] text-[#95FF66] hover:bg-[#95FF66]/10">
                Join Discussion
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section - Unchanged */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#95FF66]">Our Achievements</h2>
          <div className="glass p-8 rounded-lg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-[#95FF66]/10 rounded-full flex items-center justify-center mb-4">
                    <achievement.icon className="w-8 h-8 text-[#95FF66]" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{achievement.count}</div>
                  <div className="text-muted-foreground">{achievement.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Unchanged */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#95FF66]">What Our Users Say</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Hear from developers who have improved their skills with our platform
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass p-6 rounded-lg hover-scale">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#95FF66]/20 flex items-center justify-center text-[#95FF66] font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#95FF66] fill-[#95FF66]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
