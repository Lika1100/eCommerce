import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import "./styles/styles.scss";
import "./configs/configureMobX.ts";
import { BrowserRouter } from 'react-router-dom';
import App from './App/App.tsx';




ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter>< App /></BrowserRouter></React.StrictMode>)
