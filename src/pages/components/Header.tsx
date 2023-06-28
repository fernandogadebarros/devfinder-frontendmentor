import Moon from 'media/Moon';
import Sun from 'media/Sun';
import useTheme from 'useTheme';

export default function Header() {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="header">
      <span className="header--logo">devfinder</span>
      <button onClick={toggleTheme} className="header--button-theme ">
        {theme === 'light' ? 'Dark' : 'Light'}
        {theme !== 'dark' ? <Moon size={22} className="" /> : <Sun size={22} />}
      </button>
    </header>
  );
}
