import React from 'react';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MySkills from './Pages/MySkills';
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
          <Route path="/myskills" element={<MySkills />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
