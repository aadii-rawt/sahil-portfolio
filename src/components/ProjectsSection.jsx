import React from "react";
import { motion } from "framer-motion";
import { dropIn, stagger } from "../utils/motions";

const ProjectsSection = () => {
    return (
        <div className="py-6" id="work">
            <motion.h1
                variants={dropIn(0, -30)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                className="font-semibold tracking-tight text-4xl sm:text-6xl md:text-6xl py-6 px-6"
            >
                <span className="blok text-white">Recent </span>
                <span className="blck">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#a452f6]">
                        Projects
                    </span>
                </span>
            </motion.h1>

            {/* Grid of project cards */}
            <motion.div
                variants={stagger(0.12, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-6"
            >
                <ProjectCard
                    title="Dazzle UI"
                    desc="Styling Library"
                    img="/dora.png"
                    link="https://dazzleui.netlify.app"
                />
                <ProjectCard
                    title="Forget Not"
                    desc="Password Manager"
                    img="/forgetnot.png"
                    link="https://forgetnot.netlify.app/"
                />
                <ProjectCard
                    title="Moneylyst"
                    desc="Finance Tracker"
                    img="/moneylyst.png"
                    link="https://moneylyst.in"
                />
                <ProjectCard
                    title="Dazzle UI"
                    desc="Styling Library"
                    img="/dora.png"
                    link="https://dazzleui.netlify.app"
                />
            </motion.div>
        </div>
    );
};

const ProjectCard = ({ title, desc, img, link }) => {
    return (
        <motion.a
            variants={dropIn(0, -20)}
            href={link}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-zinc-900/60 rounded-3xl border border-white/10 group transition-transform cursor-pointer overflow-hidden"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
        >
            <div>
                <img
                    src={img}
                    alt="projImg"
                    className="min-h-48 w-full group-hover:scale-[1.05] transition-transform duration-300"
                />
            </div>

            <div className="p-4 pt-3">
                <p className="text-xl font-semibold text-white group-hover:text-[#8B5CF6] transition-colors tracking-normal">
                    {title}
                </p>
                <p className="text-sm font-normal text-zinc-300 mt-1 tracking-wide">
                    {desc}
                </p>
            </div>
        </motion.a>
    );
};
export default ProjectsSection;