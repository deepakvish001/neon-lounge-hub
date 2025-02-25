import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Battle = () => {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const difficulty = searchParams.get("difficulty");

  useEffect(() => {
    // Initialize battle with selected options
    console.log("Starting battle with:", { topic, difficulty });
  }, [topic, difficulty]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="glass p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-[#95FF66] mb-4">
          {topic?.charAt(0).toUpperCase() + topic?.slice(1)} Battle
        </h1>
        <p className="text-gray-400 mb-6">
          Difficulty: {difficulty?.charAt(0).toUpperCase() + difficulty?.slice(1)}
        </p>
        <div className="text-white">
          Loading challenge...
        </div>
      </div>
    </div>
  );
};

export default Battle;
