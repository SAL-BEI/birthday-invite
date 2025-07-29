import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NameInput from './components/NameInput';
import Invitation from './components/Invitation';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NameInput />} />
        <Route path="/invitation/:name" element={<Invitation />} />
      </Routes>
    </Router>
  );
}

export default App;
