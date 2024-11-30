import { useNavigate } from 'react-router-dom';

interface SkillDropdownProps {
  options: string[];
  skill?: string;
}

export const SkillDropdown = ({ options, skill }: SkillDropdownProps) => {
  const navigate = useNavigate();

  const handleOptionClick = (option: string) => {
    if (option === 'Tips' && skill) {
      const path = `/${skill.toLowerCase()}/tips`;
      navigate(path);
    }
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 translate-y-2">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-purple-100 w-[280px]">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors font-medium"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};