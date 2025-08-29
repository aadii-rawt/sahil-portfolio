import React from 'react'

const skills = [
    { title: 'ReactJS', img: '/react.png' },
    { title: 'Node JS', img: '/node.jpg' },
    { title: 'MongoDB', img: '/mongo.png' },
    { title: 'NextJS', img: '/next.png' },
    { title: 'React Native', img: '/native.png' },
    { title: 'Firebase', img: '/firebase.png' },
    { title: 'Redux', img: '/redux.png' },
    { title: 'TailwindCSS', img: '/tailwind.png' },
    { title: 'Figma', img: '/figma.avif' },
    { title: 'Postman', img: '/postman.png' },
    { title: 'MaterialUI', img: '/material ui.png' },
    { title: 'Framer Motion', img: '/framer.png' },
]

const SkillsSection = () => {
    return (
        <div>
            <h1 className="font-semibold tracking-tight text-4xl sm:text-6xl md:text-6xl py-6 px-6">
                <span className="blok text-white">Top-Tier  </span>
                <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#a452f6]">
                        Technologies
                    </span>
                </span>

                <div className='grid grid-cols-2 md:grid-cols-2 gap-6 mt-6'>
                    {
                        skills.map((skill)=>(
                            <SkillCard title={skill.title} img={skill.img} />
                        ))
                    }
                </div>
               
            </h1>
        </div>
    )
}

const SkillCard = ({ title, desc, img, link }) => {
    return (
        <div className='p-3 rounded-lg flex bg-zinc-800 items-center transition-colors duration-300 gap-4 cursor-pointer hover:bg-[#8B5CF6]'>
            <img src={img} alt="skillImg" className='w-16 h-16 rounded-lg bg-white' />
            <div>
                <p className='text-white font-semibold text-xl tracking-tight'>{title}</p>
                {/* <p>{}</p> */}
            </div>
        </div>
    )
}

export default SkillsSection