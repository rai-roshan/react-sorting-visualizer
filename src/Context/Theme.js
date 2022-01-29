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

const setCSSVariables = themeName => {
  console.log(themeName);
  for (let value in themes[themeName]) {
    console.log(value);
    document.documentElement.style.setProperty(`--${value}`, themes[themeName][value]);
  }
};

export const ThemeSelectorContext = createContext({
  themeName: 'dark',
});

const ThemeContext = ({ children }) => {
  const [themeName, setThemeName] = useState('dark');

  function toggleTheme() {
    if (themeName === 'dark') {
      localStorage.setItem('theme', 'light');
      setThemeName('light');
    }
    else {
      localStorage.setItem('theme', 'dark');
      setThemeName('dark');
    }
  }

  function isLight() {
    if(themeName==='dark')
      return false;
    return true;
  }


  useEffect(() => {
    setCSSVariables(themeName);
  },[themeName]);

  return (
    <ThemeSelectorContext.Provider value={{ toggleTheme, isLight }}>
      {children}
    </ThemeSelectorContext.Provider>
  );
};

export default ThemeContext;