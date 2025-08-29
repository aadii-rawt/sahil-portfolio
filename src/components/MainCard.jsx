import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GrLocationPin } from 'react-icons/gr';
import { IoLocationOutline } from 'react-icons/io5';

const MainCard = () => {
    return (

        <div className="relative w-fit">
            {/* Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#8B5CF6]/40 via-fuchsia-500/20 to-transparent blur-2xl" />

            <div className="relative w-[30rem] min-h-[35rem] rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-800 p-6 md:p-7 shadow-2xl border border-white/10 overflow-hidden">
                {/* Corner Accent */}
                <div className="absolute -top-28 -right-28 h-56 w-56 rounded-full bg-gradient-to-tr from-[#7C3AED]/30 to-fuchsia-500/20 blur-3xl" />

                {/* Header Row */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-zinc-700/60 grid place-items-center">
                            {/* Spark icon */}
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5.5 5.5l4.2 4.2M14.3 14.3l4.2 4.2M18.5 5.5l-4.2 4.2M9.7 14.3l-4.2 4.2" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-zinc-400 text-xs uppercase tracking-widest">Software Developer</p>
                            <p className="font-semibold text-[#8B5CF6]">Sahil Rathore</p>
                        </div>
                    </div>
                    <span className="rounded-full bg-[#7C3AED]/20 text-[#E9D5FF] text-xs px-3 py-1 border border-[#7C3AED]/40">
                        Available for Freelance
                    </span>
                </div>

                {/* Showcase Tile */}
                <div className="mt-6 aspect-[16/12] rounded-2xl bg-zinc-900/60 border border-white/10 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/10 via-transparent to-fuchsia-500/10" />

                    <div className="absolute left-4 top-4 rounded-xl bg-black/40 backdrop-blur px-3 py-1 text-xs text-zinc-400 border border-white/10">
                        Concept • Dashboard
                    </div>
                    <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-xl bg-black/50 backdrop-blur px-3 py-1 border border-white/10">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-[#7C3AED] to-fuchsia-500" />
                        <span className="text-sm text-zinc-400">Neon Theme</span>
                    </div>

                    {/* Center illustration */}
                    <div className="absolute inset-0 grid place-items-center">
                        <div className="h-24 w-24 rounded-2xl border border-white/10 bg-zinc-800/60 shadow-inner grid place-items-center rotate-6">
                            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-fuchsia-500" />
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="mt-6 flex items-center justify-between">
                    <div className="flex -space-x-3">
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} className="h-8 w-8 rounded-full border border-white/10 bg-zinc-700/60" />
                        ))}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-zinc-300">
                        {/* <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg> */}
                        {/* 4.9/5 (46 projects) */}
                        <IoLocationOutline className='text-base' /> Delhi

                    </div>
                </div>

                <div className='mt-6 flex items-center justify-center text-[#7C3AED] gap-6 text-3xl'>
                    <a href="https://github.com/sahillrathore" target='_blank'>
                        <FaGithub />
                    </a>
                    <a href="https://instagram.com/sahill_rathore" target='_blank'>
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/sahil-rathore123/" target='_blank'>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainCard