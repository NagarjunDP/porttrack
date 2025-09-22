import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import StudentDashboard from './pages/StudentDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import Journey from './pages/Journey';
import WallOfFame from './pages/WallOfFame';
import Hackathons from './pages/Hackathons';
import Portfolio from './pages/Portfolio';
import BlockchainVerification from './pages/BlockchainVerification';
import Onboarding from './pages/Onboarding';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        {/* Background Particles */}
        <div className="particles fixed inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <Navbar />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/wall-of-fame" element={<WallOfFame />} />
              <Route path="/hackathons" element={<Hackathons />} />
              <Route path="/portfolio/:id" element={<Portfolio />} />
              <Route path="/blockchain-verification" element={<BlockchainVerification />} />
            </Routes>
          </AnimatePresence>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

