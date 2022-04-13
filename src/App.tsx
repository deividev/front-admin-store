import React  from 'react';
import { useState, useEffect } from 'react'


import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import LoginComponent from './components/login/LoginComponent';
import RegisterComponent from './components/register/RegisterComponent';

function App() {
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(true);
  }, []);

  return (
    <Router>
      <Routes>
        {!isLogged && <Route path="/" element={<Navigate to="/login"/>}/> } 
        <Route path="/" element={  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <h1 className="text-3xl font-bold text-blue-600">Paco</h1>
          <p className="foo-text">
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
        </div>} 
        />
        <Route path="login" element={<LoginComponent />} />
      </Routes>
    </Router>
  )
}

export default App
