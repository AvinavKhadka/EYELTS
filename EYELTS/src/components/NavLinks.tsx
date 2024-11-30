import { BookText } from 'lucide-react';

export const NavLinks = () => {
  return (
    <div className="flex items-center">
      <a
        href="#resources"
        className="flex items-center gap-2 px-4 py-2 text-purple-100 hover:text-white transition-all rounded-lg hover:bg-purple-800/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
      >
        <BookText className="w-4 h-4" />
        <span>Resources</span>
      </a>
    </div>
  );
};