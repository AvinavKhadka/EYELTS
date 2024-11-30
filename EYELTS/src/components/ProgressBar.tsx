interface ProgressBarProps {
  progress: number;
  gradientClasses: string;
}

export const ProgressBar = ({ progress, gradientClasses }: ProgressBarProps) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <div className="w-full">
      <div className="flex justify-end text-xs text-gray-500 mb-1">
        <span>{clampedProgress}%</span>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div 
          className={`h-full bg-gradient-to-r ${gradientClasses} transition-all duration-300 shadow-lg shadow-purple-500/20`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  )
}