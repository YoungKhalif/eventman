import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './css/Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here (e.g., navigate to search results page)
    console.log('Search:', searchTerm, location);
  };

  return (
    <header className="bg-white shadow-md p-4">
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
            <Button type="submit">Find Events</Button>
          </form>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/browse-events" className="text-gray-600 hover:text-gray-800">Browse Events</Link></li>
          <li><Link to="/create-event" className="text-gray-600 hover:text-gray-800">Create Event</Link></li>
          <li><Link to="/help" className="text-gray-600 hover:text-gray-800">Help</Link></li>
          <li><Link to="/sign-in" className="text-gray-600 hover:text-gray-800">Sign In</Link></li>
          <li><Link to="/sign-up" className="text-gray-600 hover:text-gray-800">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;