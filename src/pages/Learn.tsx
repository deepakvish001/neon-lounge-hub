
import React from "react";
import { useNavigate } from "react-router-dom";
import { tracks } from "@/constants";
import { BookOpen, Clock, Users, Award, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Learn = () => {
  const navigate = useNavigate();

  // Featured courses - hardcoded for now
  const featuredCourses = [
    {
      id: "modern-html-css",
      title: "Modern HTML & CSS",
      track: "Frontend Development",
      students: 4826,
      rating: 4.8,
      modules: 12,
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      id: "javascript-fundamentals",
      title: "JavaScript Fundamentals",
      track: "Frontend Development",
      students: 3254,
      rating: 4.7,
      modules: 15,
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      id: "react-basics",
      title: "React Basics",
      track: "Frontend Development",
      students: 2980,
      rating: 4.9,
      modules: 8,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=300&h=200&q=80"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      {/* Hero section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#95FF66] to-green-400 bg-clip-text text-transparent">
          Elevate Your Coding Skills
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Browse our comprehensive learning tracks designed to take you from beginner to professional. 
          Master the latest technologies with hands-on projects and expert guidance.
        </p>
      </div>

      {/* Learning Tracks section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-[#95FF66]" />
            Learning Tracks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div 
              key={track.id}
              className="bg-gray-800/50 p-6 rounded-lg border border-white/10 hover:border-[#95FF66]/30 transition-all duration-300 cursor-pointer group"
              onClick={() => navigate(`/track/${track.id}`)}
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#95FF66] transition-colors">
                {track.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm line-clamp-2">{track.description}</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center mr-4">
                  <Clock className="h-4 w-4 mr-1.5 text-gray-500" />
                  <span>{track.totalDuration || "8+ hours"}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1.5 text-gray-500" />
                  <span>{track.modules.length} modules</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {track.instructor?.avatar && (
                    <img 
                      src={track.instructor.avatar} 
                      alt={track.instructor.name} 
                      className="w-8 h-8 rounded-full mr-2 object-cover" 
                    />
                  )}
                  <div>
                    <p className="text-white text-sm">{track.instructor?.name || "Expert Instructor"}</p>
                    <p className="text-xs text-gray-500">{track.instructor?.title || "Senior Developer"}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                  View Track
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Award className="mr-2 h-5 w-5 text-[#95FF66]" />
            Featured Courses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <div 
              key={course.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-white/10 hover:border-[#95FF66]/30 transition-all duration-300 group"
              onClick={() => navigate(`/module/${course.id}`)}
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-2 right-2 bg-black/60 text-[#95FF66] text-xs py-1 px-2 rounded-full flex items-center">
                  <Star className="h-3 w-3 mr-1 fill-[#95FF66] text-[#95FF66]" />
                  {course.rating}
                </div>
              </div>
              
              <div className="p-5">
                <div className="text-xs text-[#95FF66] mb-2">{course.track}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#95FF66] transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Users className="h-3.5 w-3.5 mr-1 text-gray-500" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-3.5 w-3.5 mr-1 text-gray-500" />
                    <span>{course.modules} modules</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="w-2/3">
                    <div className="text-xs text-gray-400 mb-1">Course completion</div>
                    <Progress value={30} className="h-1.5 bg-gray-700" indicatorClassName="bg-[#95FF66]" />
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#95FF66] hover:bg-[#95FF66]/10">
                    Start
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Learn;
