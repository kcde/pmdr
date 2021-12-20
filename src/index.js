import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './GlobalStyles';
import WebFont from 'webfontloader';

const Index = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Kumbh Sans', 'Roboto Slab', 'Space Mono'],
      },
    });
  }, []);
  return (
    <>
      <GlobalStyles />
      <App />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
