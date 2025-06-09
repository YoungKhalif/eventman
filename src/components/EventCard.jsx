import React from 'react'
import { Link } from 'react-router-dom';
import formatDate from '../utils/formatDate';

function EventCard({ event }) {
  const category = 'Conference';
  const bannerUrl = `https://via.placeholder.com/300x150?text=${encodeURIComponent(event.title)}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="banner">
        <img src={bannerUrl} alt={event.title} className="w-full h-40 object-cover" />
      </div>
      <div className="p-4">
        <span className="text-sm text-gray-600">{category}</span>
        <div className="text-sm text-gray-700 mt-1">{formatDate(event.start_date)}</div>
        <div className="text-sm text-gray-700">{event.venue}</div>
        <h2 className="text-lg font-semibold mt-2">{event.title}</h2>
        <div className="text-md font-bold text-black mt-1">${event.ticket_price}</div>
        <p className="text-gray-600 mt-2 line-clamp-3">{event.description}</p>
        <Link to={`/events/${event.id}`}>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
