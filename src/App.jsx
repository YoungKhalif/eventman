import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events/:id" element={<EventDetailPage />} />
            <Route path="/create-event" element={<div>Create Event Page (To be implemented)</div>} />
            <Route path="/learn-more" element={<div>Learn More Page (To be implemented)</div>} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/browse-events" element={<div>Browse Events Page (To be implemented)</div>} />
            <Route path="/help" element={<div>Help Page (To be implemented)</div>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;