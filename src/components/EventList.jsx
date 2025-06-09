import React from 'react';
import EventCard from './EventCard';
import Button from './Button';
import './css/EventList.css';
import eventsData from '../data/eventsData'; // Import mock data as fallback

const EventList = () => {
  const [events, setEvents] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchEvents = async (pageNum) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/api/events/upcoming?page=${pageNum}&limit=6`);
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
      setEvents(prev => [...prev, ...data.events]);
      setHasMore(data.hasMore);
    } catch (err) {
      console.error('Falling back to mock data:', err);
      // Fallback to mock data if API fails
      const startIndex = 0;
      const endIndex = pageNum * 6;
      setEvents(eventsData.slice(startIndex, endIndex));
      setHasMore(endIndex < eventsData.length);
      setError(null); // Clear error if we successfully fall back
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchEvents(1);
  }, []);

  return (
    <div className="event-list">
      <h1 className="text-3xl font-bold text-center mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-8">
          <Button onClick={() => fetchEvents(page + 1)} disabled={loading}>
            {loading ? 'Loading...' : 'Load More Events'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventList;
