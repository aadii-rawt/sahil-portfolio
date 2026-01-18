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
        description="Gather is an AI-powered forms app that lets you create complete forms from a single prompt."
        image="/gather-mockup1.png"
        url="https://gatherforms.vercel.app"
      />
      <ProjectsCard
        title="Moneylyst"
        description="Insightful Finance Tracker, Effortlessly monitor and manage all your expenses."
        image="/moneylyst-mockup.png"
          url="https://moneylyst.in"
      />
      <ProjectsCard
        title="Multiplayer Chess"
        description="A multiplayer chess game that features real time play between two players and allows users to review their past games"
        image="/chess-mockup.png"
        url="https://wechess.netlify.app"
      />
      <ProjectsCard
        title="Github Wrapped"
        description="GitHub Wrapped – Generate a personalized, year-in-review summary of your GitHub activity."
        image="/wrapped-mockup.png"
        url="https://git-wrapped.dotdazzle.in"
      />
    </>
  );
};

export default ProjectsSection;
