import { motion } from "framer-motion";
import { dropIn, stagger } from "../utils/motions";
import MainCard from "./MainCard";

export default function HeroSection() {
    return (
        <section className="text-white">
            <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
                {/* Heading */}
                <motion.div
                    variants={stagger(0.1, 0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="max-w-4xl"
                >
                    <motion.h1
                        variants={dropIn(0, -28)}
                        className="font-bold tracking-tight text-4xl sm:text-6xl md:text-7xl"
                    >
                        <span className="block">Transforming Your</span>
                        <span className="block">
                            Ideas into{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#a452f6]">
                                Reality
                            </span>
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={dropIn(0.08, -20)}
                        className="mt-6 text-zinc-400 text-base !leading-[1.4] md:text-lg max-w-3xl"
                    >
                        Passionate about creating intuitive and engaging user experiences. Specialize in
                        transforming ideas into beautifully crafted products.
                    </motion.p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={stagger(0.12, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl"
                >
                    {[
                        { n: "+1", t: 'Years of Experience' },
                        { n: "+15", t: 'Projects Completed' },
                        { n: "+45", t: 'Technologies Used' },
                    ].map((s, i) => (
                        <motion.div key={i} variants={dropIn(0, -18)}>
                            <div className="text-6xl font-semibold">{s.n}</div>
                            <div
                                className="mt-2 text-zinc-400 text-sm uppercase tracking-wide"
                                dangerouslySetInnerHTML={{ __html: s.t }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                    variants={stagger(0.08, 0.15)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-10 flex items-center gap-6"
                >
                    <motion.a
                        variants={dropIn(0.05)}
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-lg  bg-[#7C3AED] hover:bg-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/60"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Let&apos;s Talk
                    </motion.a>

                    <motion.a
                        variants={dropIn(0.05)}
                        href="#work"
                        className="inline-flex items-center gap-2 text-base font-medium text-zinc-200 hover:text-white"
                        whileHover={{ x: 2 }}
                    >
                        <span>My Work</span>
                        <span aria-hidden>→</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
