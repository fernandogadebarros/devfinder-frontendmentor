import { useState, useEffect } from 'react';

const useTheme = (): [string, () => void] => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = (): void => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  return [theme, toggleTheme];
};

export default useTheme;
