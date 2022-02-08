import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './GlobalStyles';
import WebFont from 'webfontloader';
import TimerState from './context/TimerState';

const Index = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          'Kumbh Sans:400,500,600,700',
          'Roboto Slab:400,500,600,700',
          'Space Mono:400,500,600,700',
        ],
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
    <TimerState>
      <Index />
    </TimerState>
  </React.StrictMode>,
  document.getElementById('root')
);
