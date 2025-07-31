import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Institucional from './pages/Institucional';
import Projetos from './pages/Projetos';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institucional" element={<Institucional />} />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
