import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as themes from './theme/schema.json';
import { setToLocalStorage } from './utils/storage';
import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './utils/hooks/useTheme';
import WebFont from 'webfontloader';

const Index = () => {
  setToLocalStorage('allThemes', themes.default);
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded, theme]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
