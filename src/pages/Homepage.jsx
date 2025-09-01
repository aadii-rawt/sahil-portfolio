import HeroSection from '../components/Hero'
import MainCard from '../components/MainCard'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'

const Homepage = () => {
    return (
        <div className='min-h-screen flex gap-12 max-w-[90%] items-center justify-center px-6 py-6 md:py-6 mx-auto'>

            <div className='fixed top-[14%] left-[8%]'>
                <MainCard />
            </div>
            <div className='w-[55%] ml-auto'>
                <HeroSection />
                <ProjectsSection />
                <SkillsSection/>
            
            </div>
        </div>
    )
}

export default Homepage