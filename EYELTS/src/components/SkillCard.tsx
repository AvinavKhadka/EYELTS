import { BookOpen, Pencil, Mic, Headphones } from 'lucide-react'
import { SkillDropdown } from './SkillDropdown'
import { useDropdownContext } from '../context/DropdownContext';

interface SkillCardProps {
  title: string;
  description: string;
  icon: "reading" | "writing" | "speaking" | "listening";
}

const iconMap = {
  reading: BookOpen,
  writing: Pencil,
  speaking: Mic,
  listening: Headphones,
}

const dropdownOptions = {
  "Reading": ["Academic Practice", "General Practice", "Tips"],
  "Writing": ["Task 1: Academic", "Task 1: General", "Task 2: Essay", "Vocabulary", "Tips"],
  "Speaking": ["Practice", "Vocabulary", "Tips"],
  "Listening": ["Practice", "Tips"],
};

export const SkillCard = ({ title, description, icon }: SkillCardProps) => {
  const Icon = iconMap[icon]
  const hasDropdown = dropdownOptions[title]?.length > 0;
  const { setIsAnyDropdownVisible } = useDropdownContext();
  
  return (
    <div 
      className="relative group z-10 hover:z-20"
      onMouseEnter={() => setIsAnyDropdownVisible(true)}
      onMouseLeave={() => setIsAnyDropdownVisible(false)}
    >
      <div 
        className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-[280px] h-[220px] hover:-translate-y-1 transform hover:ring-2 hover:ring-purple-400/50 hover:shadow-purple-500/20 before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-100/50 before:via-transparent before:to-pink-100/50 before:rounded-xl before:opacity-0 before:transition-opacity hover:before:opacity-100"
      >
        <div className="w-12 h-12 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 animate-pulse-subtle shadow-lg shadow-purple-800/30">
          <Icon className="w-6 h-6 text-purple-50 transform group-hover:scale-110 transition-transform" />
        </div>

        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
          {title}
        </h3>
        <p className="bg-gradient-to-r from-pink-700 to-purple-700 bg-clip-text text-transparent font-medium text-sm">
          {description}
        </p>
      </div>
      
      {hasDropdown && (
        <SkillDropdown 
          options={dropdownOptions[title]}
          skill={title}
        />
      )}
    </div>
  )
}