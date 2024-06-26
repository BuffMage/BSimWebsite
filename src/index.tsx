import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Button, ChakraBaseProvider, ColorModeContext, ColorModeProvider, ColorModeScript, DarkMode, extendBaseTheme } from '@chakra-ui/react';

/* const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

document.getElementById('body')?.setAttribute("style", "height:100%");

root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode='light'/>
    <App />
  </React.StrictMode>
); */

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <>
    <ColorModeProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </ColorModeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
