import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar></Navbar>
          Hey! I'm Aranza Ortega
    </Router>
  );
}

export default App;
