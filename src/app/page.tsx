"use client";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import ExperienceSection from "@/components/ExperianceSection";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Separator from "@/components/Separator";
import SkillsSection from "@/components/SkillsSection";
import React from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { useState } from "react";
import Taskbar from "@/components/Taskbar";
import Graph from "@/components/Graph";

const page = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <div className="w-full bg-[repeating-linear-gradient(45deg,#000_0px,#000_7px,#1C1C1F_7px,#1C1C1F_8px)]">
          <Container>
            <div className="text-white">
              <Navbar />
              <HeroSection />


              <Heading heading="Stack" />
              <SkillsSection />
              
              <Separator />
              <Heading heading="Projects" showButton buttonLink="/projects" />
              <ProjectsSection />
              <Separator />
              <Heading heading="Experience" />
              <ExperienceSection
                logo="/conduit.png"
                title="Storeshoppy Pvt. Ltd"
                // link="https://conduitcommerce.com/"
                type="Software Developer"
                highlights={[
                  "Designed, developed, and deployed full-stack applications to enhance business workflows and user engagement.",
                  "Led the integration of APIs and third-party services to add functionality and streamline operations.",
                  "Worked closely with cross-functional teams to align technical solutions with business objectives."
                ]}
                skills={["React JS", "JavaScript", "Tailwind", "API", "Context API", "Redux", "React Native", "Figma", "Bootstrap", "NodeJS", "Express", "MongoDB", "Postman", "Razorpay", "Next.js"]}
              />
              <ExperienceSection
                color="orange-500"
                logo="/conduit.png"
                link="https://mach5.io/"
                title="Storeshoppy Pvt. Ltd"
                type="Front End Developer Intern"
                highlights={[
                  "Worked as a Frontend Developer, transforming Figma design into fully responsive, high-performance website ",
                  "Tackled challenges in new project implementations by researching and applying modern web development practices.",
                  "Collaborated closely with team leads to strategize and implement UI/UX designs, ensuring user-centric experiences.",
                ]}
                skills={["React JS", "JavaScript", "Tailwind", "API", "Context API", "Figma", "Bootstrap", "NodeJS"]}
              />
              <Separator />
              <Heading heading="Github Graph" />
              <Graph />
              <Separator />
              <Heading heading="About Me" />
              <About />
              <Separator />
              <ContactSection />
            </div>
          </Container>
        </div>
      )}
      {loading || <Taskbar />}

    </>
  );
};

export default page;
