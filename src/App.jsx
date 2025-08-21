import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import ScrollToTop from './components/utils/ScrollToTop';
import Navbar from './components/header/navbar';
import PageHeader from './components/header/PageHeader';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Institucional from './pages/Institucional';
import Projetos from './pages/Projetos';
import Start from './pages/Start';
import './App.css';

const WithHeaderLayout = ({ children }) => (
  <>
    <PageHeader />
    {children}
  </>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<WithHeaderLayout><Home /></WithHeaderLayout>} />
            <Route path="/institucional" element={<WithHeaderLayout><Institucional /></WithHeaderLayout>} />
            <Route path="/projetos" element={<WithHeaderLayout><Projetos /></WithHeaderLayout>} />
            <Route path="/start" element={<Start />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;