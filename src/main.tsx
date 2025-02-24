import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './assets/styles/globals.css'

const htmlElement = document.getElementById('root');
const root = ReactDOM.createRoot(htmlElement as HTMLElement);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
