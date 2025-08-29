import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsSection = () => {
    return (
        <div className='py-6'>
            <h1 className="font-semibold tracking-tight text-4xl sm:text-6xl md:text-6xl py-6 px-6">
                <span className="blok text-white">Recent </span>
                <span className="blck">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#a452f6]">
                        Projects
                    </span>
                </span>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                    <ProjectCard title='Dazzle UI' desc='Styling Library' img='/dora.png' link='https://dazzleui.netlify.app' />
                    <ProjectCard title='Forget Not' desc='Password Manager' img='/forgetnot.png' link='https://forgetnot.netlify.app/' />
                    <ProjectCard title='Moneylyst' desc='Finance Tracker' img='/moneylyst.png' link='https://moneylyst.in' />
                    <ProjectCard title='Dazzle UI' desc='Styling Library' img='/dora.png' link='https://dazzleui.netlify.app' />
                </div>
            </h1>
        </div>
    )
}

const ProjectCard = ({ title, desc, img, link }) => {
    return (
        <a href='https://dazzleui.netlify.app' target='_blank' className="w-full bg-zinc-900/60 rounded-3xl border border-white/10 group transition-transform cursor-pointer overflow-hidden">
            <div className=''>
                <img src={img} alt="projImg" className='min-h-48 w-full group-hover:scale-[1.05] transition-transform duration-300' />
            </div>

            <div className='p-4 pt-3'>
                <p className='text-xl font-semibold text-white group-hover:text-[#8B5CF6] transition-colors tracking-normal'>{title}</p>
                <p className='text-sm font-normal text-zinc-300 mt-1 tracking-wide'>{desc}</p>
            </div>
        </a>
    )
}

export default ProjectsSection