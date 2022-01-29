import { createContext, useState, useEffect } from 'react';
const themes = {
  dark: {
    backgroundColor: '#171717',
    secondaryBackgroundColor: '#383838',
    titleColor: 'white',
    actionButtonBackgroundColor: '#2b2b2b',
    actionButtonTextColor: 'white',
    cardPlateBackgroundColor: '#2b2b2b',
  },
  light: {
    backgroundColor: '#e3e3e3',
    secondaryBackgroundColor: 'white',
    titleColor: '#383838',
    actionButtonBackgroundColor: '#transparent',
    actionButtonTextColor: '#383838',
    cardPlateBackgroundColor: '#c4c4c4',
  },
};

const setCSSVariables = theme => {
  for (let value in theme) {
    document.documentElement.style.setProperty(`--${value}`, theme[value]);
  }
};

export const ThemeSelectorContext = createContext({
  themeName: 'dark',
});

const ThemeContext = ({ children }) => {
  const [themeName, setThemeName] = useState('dark');
  const [theme, setTheme] = useState(themes[themeName]);
  const [isLight, setIsLight] = useState(null);

  const toggleTheme = () => {
    if (theme === themes.dark) setLightTheme();
    else setDarkTheme();
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme || storedTheme === 'dark') setDarkTheme();
    else setLightTheme();
    setCSSVariables(theme);
  });
  function setDarkTheme() {
    setTheme(themes.dark);
    setIsLight(false);
    setThemeName('dark');
    localStorage.setItem('theme', 'dark');
  }
  function setLightTheme() {
    setTheme(themes.light);
    setThemeName('light');
    setIsLight(true);
    localStorage.setItem('theme', 'light');
  }
  return (
    <ThemeSelectorContext.Provider value={{ themeName, toggleTheme, isLight }}>
      {children}
    </ThemeSelectorContext.Provider>
  );
};

export default ThemeContext;