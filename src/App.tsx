import React  from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link, Navigate, Routes } from 'react-router-dom';


import logo from './logo.svg'
import './App.css'
import LoginComponent from './components/login/LoginComponent';

function App() {
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(false);
  }, []);

  return (
    <div className="App">
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
      <main>
      
      <Routes>
          <Route path="login" element={<LoginComponent />} />
          {/* {isLogged ? <Navigate to="/"/>  : <Navigate to="/login" />} */}
          {/* <Route path="/login" element={<LoginComponent />}/> */}

          {/* { isLogged
          ?  <Navigate replace to="/" />
          :  <Navigate replace to="login" />
        } */}
      </Routes>

      </main>
    </div>
  )
}

export default App
