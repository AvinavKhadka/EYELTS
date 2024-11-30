import { useState, useEffect } from 'react';

export const useProgress = () => {
  const [progress, setProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('ieltsProgress');
    return saved ? JSON.parse(saved) : {
      Reading: 0,
      Writing: 0,
      Speaking: 0,
      Listening: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('ieltsProgress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (skill: string, value: number) => {
    setProgress(prev => ({
      ...prev,
      [skill]: Math.min(Math.max(value, 0), 100)
    }));
  };

  return { progress, updateProgress };
};