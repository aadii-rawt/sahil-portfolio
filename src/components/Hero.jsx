import MainCard from "./MainCard";


export default function HeroSection() {
    return (

        <section className=" text-white">
            <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
                {/* Heading */}
                <div className="max-w-4xl">
                    <h1 className="font-bold tracking-tight text-4xl sm:text-6xl md:text-7xl ">
                        <span className="block">Transforming Your</span>
                        <span className="block">Ideas into{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#a452f6]">
                                Reality
                            </span>
                        </span>
                    </h1>

                    <p className="mt-6 text-zinc-400 text-base !leading-[1.4] md:text-lg max-w-3xl">
                        Passionate about creating intuitive and engaging user experiences. Specialize in
                        transforming ideas into beautifully crafted products.
                    </p>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
                    <div>
                        <div className="text-6xl font-semibold">+1</div>
                        <div className="mt-2 text-zinc-400 text-sm uppercase tracking-wide">Years of<br />Experience</div>
                    </div>
                    <div>
                        <div className="text-6xl font-semibold">+15</div>
                        <div className="mt-2 text-zinc-400 text-sm uppercase tracking-wide">Projects<br />Completed</div>
                    </div>
                    <div>
                        <div className="text-6xl font-semibold">+45</div>
                        <div className="mt-2 text-zinc-400 text-sm uppercase tracking-wide">Technologies<br />Used</div>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-10 flex items-center gap-6">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-lg transition 
                       bg-[#7C3AED] hover:bg-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/60"
                    >
                        Let's Talk
                    </a>

                    <a
                        href="#work"
                        className="inline-flex items-center gap-2 text-base font-medium text-zinc-200 hover:text-white"
                    >
                        <span>My Work</span>
                        <span aria-hidden>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
