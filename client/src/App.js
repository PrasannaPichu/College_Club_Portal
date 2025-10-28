import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClubDetailPage from './pages/ClubDetailPage';
import LoginPage from './pages/LoginPage'; // <-- ADD THIS
import AdminDashboard from './pages/AdminDashboard'; // <-- ADD THIS
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/club/:id" element={<ClubDetailPage />} />
        <Route path="/login" element={<LoginPage />} /> {/* <-- ADD THIS */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} /> {/* <-- ADD THIS */}
      </Routes>
    </Router>
  );
}
export default App;