import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
  };

  return (
    <header className="header">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold text-gray-800">EventSmart</Link>
          <form onSubmit={handleSearch} className="flex space-x-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by event name or keyword"
              className="border p-2 rounded"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="border p-2 rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Find Events
            </button>
          </form>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/browse-events">Browse Events</Link></li>
          <li><Link to="/create-event">Create Event</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/sign-in">Sign In</Link></li>
          <li><Link to="/sign-up">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;