import { useState, useEffect } from 'react';
import { setToLocalStorage, getFromLocalStorage } from '../storage';

export const useTheme = () => {
  //get all themes from local Storage
  const themes = getFromLocalStorage('allThemes');
  //setting default theme
  const [theme, setTheme] = useState(themes.data.default);
  const [themeLoaded, setThemeLoaded] = useState(false);

  //function that selects theme
  const setCurrentTheme = (theme) => {
    //set to local storage first
    setToLocalStorage('theme', theme);
    setTheme(theme);
  };

  //function to get all fonts;
  const getFonts = () => {
    const allFonts = [];

    for (let theme in themes.data) {
      allFonts.push(themes.data[theme].font);
    }

    return allFonts;
  };

  //set local theme on mount

  useEffect(() => {
    const localTheme = getFromLocalStorage('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data.default);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setCurrentTheme, getFonts };
};
