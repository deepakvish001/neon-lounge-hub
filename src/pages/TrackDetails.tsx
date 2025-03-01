import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { tracks } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, CheckCircle } from "lucide-react";

const TrackDetails = () => {
  const { trackId } = useParams();
  const navigate = useNavigate();
  const track = tracks.find((track) => track.id === trackId);

  if (!track) {
    return <div>Track not found</div>;
  }

  const [completedModules, setCompletedModules] = useState<string[]>([]);

  const handleCompleteModule = (moduleId: string) => {
    setCompletedModules((prev) => {
      if (prev.includes(moduleId)) {
        return prev.filter((id) => id !== moduleId);
      } else {
        return [...prev, moduleId];
      }
    });
  };

  const isModuleCompleted = (moduleId: string) => {
    return completedModules.includes(moduleId);
  };

  const handleReviewModule = (moduleId: string) => {
    navigate(`/module/${moduleId}`);
  };

  return (
    <div className="container mx-auto py-8">
      <Button variant="ghost" onClick={() => navigate("/")}>
        Back to Tracks
      </Button>
      <h1 className="text-3xl font-bold text-white mb-4">{track.title}</h1>
      <p className="text-gray-400 mb-6">{track.description}</p>

      <Accordion type="multiple" className="w-full">
        {track.modules.map((module) => (
          <AccordionItem key={module.id} value={module.id}>
            <AccordionTrigger className="flex justify-between py-4">
              <div className="flex items-center">
                {isModuleCompleted(module.id) ? (
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                ) : (
                  <Plus className="mr-2 h-5 w-5" />
                )}
                {module.title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 text-gray-400">{module.description}</p>
              <div className="flex justify-between">
                <Button
                  onClick={() => handleCompleteModule(module.id)}
                  variant="secondary"
                >
                  {isModuleCompleted(module.id) ? "Mark Incomplete" : "Complete"}
                </Button>
                <Button 
                  variant="outline" 
                  className="text-[#95FF66] border-[#95FF66] hover:bg-[#95FF66]/10"
                  onClick={() => handleReviewModule(module.id)}
                >
                  Review
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TrackDetails;
