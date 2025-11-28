"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    name: "React",
    icon: (
      <img src="/react.svg" alt="" />
    ),
  },
  {
    name: "React Native",
    icon: (
      <img src="/react.svg" alt="" />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <img src="/javascript.svg" alt="" />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <img src="/typescript.svg" alt="" />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <img src="/nextj.png" alt="" className="bg-white rounded-full" />
    ),
  },

  {
    name: "Tailwind",
    icon: (
      <img src="/tailwind.svg" alt="" />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <img src="/nodejs.svg" alt="" />
    ),
  },
  {
    name: "Express.js",
    icon: (
      <img src="/express.svg" alt="" className="bg-white rounded-full" />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <img src="/mongo.svg" alt="" />
    ),
  },
  {
    name: "Firebase",
    icon: (
      <img src="/firebase.svg" alt="" />
    ),
  },
  {
    name: "Figma",
    icon: (
      <img src="/figma.svg" alt="" />
    ),
  },
  {
    name: "Git",
    icon: (
      <img src="/git.svg" alt="" />
    ),
  },
  {
    name: "Github",
    icon: (
      <img src="/github.svg" alt="" className="bg-white rounded-full" />
    ),
  },
  {
    name: "AWS",
    icon: (
      <img src="/aws.svg" alt="" className="bg-white rounded-full" />
    ),
  },
  {
    name: "Digital Ocean",
    icon: (
      <img src="/digitalocean.svg" alt="" className="bg-white rounded-full" />
    ),
  },
  {
    name: "Prisma",
    icon: (
      <img src="/prisma.svg" alt="" className="bg-white rounded-full" />
    ),
  },
  {
    name: "Neon DB",
    icon: (
      <img src="/neondb.png" alt="" className="bg-white rounded-full" />
    ),
  },
];

const SkillsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="font-space-grotesk bg-black px-[5%] py-12 sm:py-16">
      <div className="relative flex flex-wrap gap-x-3 gap-y-8 md:gap-x-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="cursor-default flex items-center justify-center gap-2 rounded-full border border-[#282828] bg-[#0F0F0F] px-4 py-1.5 text-xs text-gray-200 transition-all hover:border-gray-600 sm:px-4 sm:py-2 sm:text-sm md:text-base">
              <div className="h-8 w-8 sm:h-8  sm:w-8">{skill.icon}</div>
              {skill.name}
            </div>

            <AnimatePresence>
              {hovered === index && (
                <motion.div
                  initial={{ opacity: 0, y: 0, scale: 0.9 }}
                  animate={{ opacity: 1, y: -90, scale: 1 }}
                  exit={{ opacity: 0, y: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className="absolute left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center"
                >
                  <div className="h-10 w-10 sm:h-10 sm:w-10">{skill.icon}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
