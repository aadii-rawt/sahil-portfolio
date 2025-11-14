import React from "react";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section className="bg-black text-gray-300 font-space-grotesk">
      <div className="px-4 sm:px-[5%] mt-0 py-6">
        <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I’m a Full Stack Developer and App Developer based in India, 
          I blend design thinking with technical expertise to create intuitive and scalable
          digital solutions.
        </p>

        <p className="mb-6 sm:mb-10 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
         Blending design insight with full-stack expertise, I bring together aesthetics and functionality to deliver clean, purposeful digital experiences. My workflow is rooted in user-centered design and reliable development practices, ensuring smooth execution from concept to launch.
        </p>

        <div className="flex flex-wrap justify-center sm:justify-start gap-6 py-2 sm:py-4">
          <a
            href="https://github.com/Sahillrathore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
          <a
            href="https://linkedin.com/in/sahil-rathore123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
          {/* <a
            href="https://leetcode.com/u/shrek07/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            Leetcode <ArrowUpRight size={16} />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
