import { motion } from "framer-motion";
import { dropIn, stagger } from "../utils/motions";
import React from "react";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationOutline, IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

const MainCard = () => {
    return (
        <motion.div
            variants={dropIn(0.1, -22)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-fit"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
            {/* Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#8B5CF6]/40 via-fuchsia-500/20 to-transparent blur-2xl" />

            <div className="relative xl:w-[30rem] sm:w-[100%] w-[90%] min-w-[315px]  mx-auto md:] rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-800 p-6 md:p-7 shadow-2xl border border-white/10 overflow-hidden">
                {/* Corner Accent */}
                <motion.div
                    variants={dropIn(0.15, -16)}
                    className="absolute -top-28 -right-28 h-56 w-56 rounded-full bg-gradient-to-tr from-[#7C3AED]/30 to-fuchsia-500/20 blur-3xl"
                />

                {/* Header Row */}
                <motion.div
                    variants={stagger(0.06, 0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                >
                    <motion.div variants={dropIn(0, -14)} className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-zinc-700/60 grid place-items-center">
                            {/* <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5.5 5.5l4.2 4.2M14.3 14.3l4.2 4.2M18.5 5.5l-4.2 4.2M9.7 14.3l-4.2 4.2" />
                            </svg> */}
                            <img src="/batman.jpg" alt="" className="rounded-lg" />
                        </div>
                        <div>
                            <p className="text-zinc-400 text-xs uppercase tracking-widest">Software Developer</p>
                            <p className="font-semibold text-[#8B5CF6]">Sahil Rathore</p>
                        </div>
                    </motion.div>

                    <motion.span
                        variants={dropIn(0.05, -10)}
                        className="rounded-full sm:block hidden bg-[#7C3AED]/20 text-[#E9D5FF] text-xs px-3 py-1 border border-[#7C3AED]/40"
                    >
                        Available for Freelance
                    </motion.span>
                </motion.div>

                {/* Showcase Tile */}
                <motion.div
                    variants={dropIn(0.12, -18)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-6 aspect-[16/12] rounded-2xl bg-zinc-900/60 border border-white/10 overflow-hidden relative"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/10 via-transparent to-fuchsia-500/10" />
                    <div className="absolute left-4 top-4 rounded-xl bg-black/40 backdrop-blur px-3 py-1 text-xs text-zinc-400 border border-white/10">
                        Concept • Dashboard
                    </div>
                    <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-xl bg-black/50 backdrop-blur px-3 py-1 border border-white/10">
                        <div className="sm:h-6 sm:w-6 w-4 h-4 rounded-full bg-gradient-to-tr from-[#7C3AED] to-fuchsia-500" />
                        <span className="sm:text-sm text-xs text-zinc-400">Neon Theme</span>
                    </div>

                    <motion.div
                        className="absolute inset-0 grid place-items-center"
                        variants={dropIn(0.18, -12)}
                    >
                        <div className="h-24 w-24 rounded-2xl border border-white/10 bg-zinc-800/60 shadow-inner grid place-items-center rotate-6">
                            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-fuchsia-500" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Row */}
                <motion.div
                    variants={stagger(0.05, 0.05)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-6 flex items-center justify-between"
                >
                    <motion.div variants={dropIn(0, -10)} className="flex -space-x-3">
                        {[<IoLogoJavascript />, <FaReact />, <FaNodeJs />, <SiMongodb />].map(i => (
                            <div key={i} className="" >
                                <div className=" border text-zinc-300 border-[#6529cd] text-2xl border-white/10 bg-zinc-700/60 rounded-full p-1">
                                    {i}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={dropIn(0.04, -10)} className="flex items-center gap-1 text-sm text-zinc-300">
                        <IoLocationOutline className="text-base" /> Delhi
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={stagger(0.06, 0.08)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-6 flex items-center justify-center text-[#7C3AED] gap-6 text-3xl"
                >
                    <motion.a variants={dropIn(0, -10)} href="https://github.com/sahillrathore" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </motion.a>
                    <motion.a variants={dropIn(0.03, -10)} href="https://instagram.com/sahill_rathore" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </motion.a>
                    <motion.a variants={dropIn(0.06, -10)} href="https://www.linkedin.com/in/sahil-rathore123/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MainCard;
