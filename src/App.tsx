import React from 'react';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';
import TestimonialComponent from './Components/Home/TestimonialComponent';
import ExperiencePage from './Pages/ExperiencePage';
import ProjectsPage from './Pages/ProjectsPage';
import ResumePage from './Pages/ResumePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <TestimonialComponent />
      </Router>
    </div>
  );
}

export default App;
