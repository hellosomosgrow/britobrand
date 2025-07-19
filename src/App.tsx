import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Projects from './views/Projects';
import Header from './components/Header';
import ProjectDetail from './views/ProjectDetail';
import Contact from './views/Contact';

function App() {
  return (
    <Router>
      <div className="my-4 space-y-4 flex flex-col flex-grow px-3">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyectos/:projectId" element={<ProjectDetail />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
