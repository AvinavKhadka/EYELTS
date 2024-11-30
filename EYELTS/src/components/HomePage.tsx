import { Logo } from './Logo'
import { SkillCard } from './SkillCard'
import { ProgressSection } from './ProgressSection'
import { NavLinks } from './NavLinks'
import { useProgress } from '../hooks/useProgress'
import { DropdownProvider } from '../context/DropdownContext'

export const HomePage = () => {
  const { progress } = useProgress();
  
  const skills = [
    {
      title: "Reading",
      description: "Enhance your reading comprehension skills with academic texts and passages.",
      icon: "reading",
    },
    {
      title: "Writing",
      description: "Master essay writing and improve your written communication skills.",
      icon: "writing",
    },
    {
      title: "Speaking",
      description: "Practice pronunciation and develop fluent English speaking abilities.",
      icon: "speaking",
    },
    {
      title: "Listening",
      description: "Train your ear to understand different accents and speaking speeds.",
      icon: "listening",
    },
  ] as const;

  return (
    <DropdownProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
        <header className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 shadow-lg shadow-purple-900/20">
          <div className="container mx-auto px-6 sm:px-8 py-6">
            <div className="flex justify-between items-center">
              <Logo />
              <NavLinks />
            </div>
          </div>
        </header>
        
        <main className="container mx-auto px-6 sm:px-8 py-16 pb-32">
          <h2 className="text-4xl font-bold text-center leading-relaxed mb-4 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 bg-clip-text text-transparent drop-shadow-sm">
            Hit That 9 For That Foreign Dime
          </h2>
          <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 font-medium text-lg mb-12 max-w-2xl mx-auto">
            Prepare for success with our comprehensive IELTS training modules. 
            Choose your area of focus and start your journey to achieving your target score.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch flex-wrap lg:flex-nowrap mb-32 px-4">
            {skills.map((skill) => (
              <div 
                key={skill.title}
                className="transition-all duration-300 w-full md:w-auto"
              >
                <SkillCard
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                />
              </div>
            ))}
          </div>

          <ProgressSection progress={progress} />
        </main>
      </div>
    </DropdownProvider>
  )
}