import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import formatDate from '../utils/formatDate';
import './css/EventCard.css'; 

const EventCard = ({ event }) => {
  const category = event.category || 'Conference';
  const bannerUrl = event.image || `https://via.placeholder.com/300x150?text=${encodeURIComponent(event.title)}`;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="banner">
        <img src={bannerUrl} alt={event.title} className="w-full h-40 object-cover" />
      </div>
      <div className="p-4">
        <span className="text-sm text-gray-600">{category}</span>
        <div className="text-sm text-gray-700 mt-1">{formatDate(event.date)}</div>
        <div className="text-sm text-gray-700">{event.location}</div>
        <h2 className="text-lg font-semibold mt-2">{event.title}</h2>
        <p className="text-gray-600 mt-2 line-clamp-3">{event.description}</p>
        <Link to={`/events/${event.id}`}>
          <Button>View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;