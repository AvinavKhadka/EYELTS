import { ProgressBar } from './ProgressBar'
import { useDropdownContext } from '../context/DropdownContext';

interface ProgressSectionProps {
  progress: Record<string, number>;
}

const skillGradients = {
  Reading: {
    text: "from-pink-600 via-purple-600 to-purple-700",
    progress: "from-pink-500 via-purple-500 to-purple-600"
  },
  Writing: {
    text: "from-purple-600 via-pink-600 to-purple-700",
    progress: "from-purple-500 via-pink-500 to-purple-600"
  },
  Speaking: {
    text: "from-fuchsia-600 via-purple-600 to-pink-600",
    progress: "from-fuchsia-500 via-purple-500 to-pink-500"
  },
  Listening: {
    text: "from-purple-600 via-fuchsia-600 to-pink-600",
    progress: "from-purple-500 via-fuchsia-500 to-pink-500"
  }
};

export const ProgressSection = ({ progress }: ProgressSectionProps) => {
  const { isAnyDropdownVisible } = useDropdownContext();

  return (
    <div 
      className={`mt-16 max-w-xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-purple-500/10 p-6 border border-purple-200/50 hover:shadow-purple-500/20 transition-all duration-300 transform ${
        isAnyDropdownVisible ? 'translate-y-32' : 'translate-y-0'
      }`}
    >
      <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 text-transparent bg-clip-text">
        Your Progress
      </h3>
      <div className="flex flex-col space-y-4">
        {Object.entries(progress).map(([skill, value]) => (
          <div key={skill} className="bg-white/50 px-4 py-3 rounded-lg border border-purple-100/50 hover:border-purple-200/50 transition-colors duration-300">
            <h4 className={`text-sm font-medium bg-gradient-to-r ${skillGradients[skill as keyof typeof skillGradients].text} bg-clip-text text-transparent mb-1`}>
              {skill}
            </h4>
            <ProgressBar 
              progress={value} 
              gradientClasses={skillGradients[skill as keyof typeof skillGradients].progress}
            />
          </div>
        ))}
      </div>
    </div>
  )
}