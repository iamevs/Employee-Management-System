import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import ContextProvider from "./components/context/ContextProvider";

const rootElement = document.getElementById('root');
const root  = createRoot (rootElement);

root.render(
  <StrictMode>
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
  </StrictMode>
  ,
  document.getElementById('root')
);

