// SkillsSection.tsx (or .jsx)
import React from "react";
import { motion } from "framer-motion";
import { dropIn, stagger } from "../utils/motions"; // <- reuse helpers

const skills = [
    { title: "ReactJS", img: "/react.png" },
    { title: "Node JS", img: "/node.jpg" },
    { title: "MongoDB", img: "/mongo.png" },
    { title: "NextJS", img: "/next.png" },
    { title: "React Native", img: "/native.png" },
    { title: "Firebase", img: "/firebase.png" },
    { title: "Redux", img: "/redux.png" },
    { title: "TailwindCSS", img: "/tailwind.png" },
    { title: "Figma", img: "/figma.avif" },
    { title: "Postman", img: "/postman.png" },
    { title: "MaterialUI", img: "/material ui.png" }, // <- avoid spaces in filenames
    { title: "Framer Motion", img: "/framer.png" },
];

const SkillsSection = () => {
    return (
        <section className="py-6">
            {/* Heading */}
            <motion.h1
                variants={dropIn(0, -28)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                className="font-semibold tracking-tight text-4xl sm:text-6xl md:text-6xl py-6 px-6"
            >
                <span className="blok text-white">Top-Tier</span>
                <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#a452f6]">
                        Technologies
                    </span>
                </span>
            </motion.h1>

            {/* Grid */}
            <motion.div
                variants={stagger(0.08, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-2 px-6"
            >
                {skills.map((s, i) => (
                    <SkillCard key={s.title + i} title={s.title} img={s.img} />
                ))}
            </motion.div>
        </section>
    );
};

const SkillCard = ({ title, img }) => {
    return (
        <motion.div
            variants={dropIn(0, -18)}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="p-3 rounded-xl flex sm:flex-row flex-col items-center gap-4 cursor-pointer
                 bg-zinc-800/80 border border-white/10 hover:bg-[#8B5CF6]/90 hover:border-[#8B5CF6]/50
                 backdrop-blur-sm"
        >
            <img
                src={img}
                alt={title}
                className="w-14 h-14 rounded-lg object-contain bg-white/90"
                loading="lazy"
            />
            <p className="text-white text-center font-semibold text-lg md:text-xl tracking-tight">
                {title}
            </p>
        </motion.div>
    );
};

export default SkillsSection;
