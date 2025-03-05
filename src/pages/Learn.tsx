
import React from "react";
import ModernHTMLCSS from "@/components/ModernHTMLCSS";
import { tracks } from "@/constants";

const Learn = () => {
  // Find the HTML & CSS module data from the tracks
  const frontendTrack = tracks.find(track => track.id === "frontend-development");
  const htmlCssModule = frontendTrack?.modules.find(module => module.id === "modern-html-css");

  return (
    <div className="container mx-auto px-4 py-8">
      <ModernHTMLCSS moduleData={htmlCssModule} />
    </div>
  );
};

export default Learn;
