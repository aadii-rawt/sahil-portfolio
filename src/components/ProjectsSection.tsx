import React from "react";
import Image from "next/image";
import ProjectsCard from "./ProjectsCard";

const ProjectsSection = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b-2 border-[#1C1C1F] bg-black ">
    
      </div>

      <ProjectsCard
        title="Gather"
        description="Gather is an AI-powered forms builder."
        image="/gather.png"
        url="https://gatherforms.vercel.app"
      />
      <ProjectsCard
        title="Moneylyst"
        description="Insightful Finance Tracker."
        image="/moneylyst.png"
          url="https://moneylyst.in"
      />
      <ProjectsCard
        title="Multiplayer Chess"
        description="Chess Game Website."
        image="/chess.png"
        url="https://wechess.netlify.app"
      />
      <ProjectsCard
        title="Github Wrapped"
        description="Yearly summary of github profile."
        image="/gitwrapped.png"
        url="https://git-wrapped.dotdazzle.in"
      />
    </>
  );
};

export default ProjectsSection;
