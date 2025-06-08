import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';


const SignInPage = () => <div>Sign In Page (To be implemented)</div>;
const SignUpPage = () => <div>Sign Up Page (To be implemented)</div>;

function App() {
  return (
    <BrowserRouter>
      <Header />
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
