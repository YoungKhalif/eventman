import React from 'react';
import EventCard from './EventCard';
import Button from './Button';
import eventsData from '../data/eventsData';
import './css/EventList.css'; 

const EventList = () => {
  const [events, setEvents] = React.useState(eventsData.slice(0, 6));
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(eventsData.length > 6);
  const [loading, setLoading] = React.useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const nextPage = page + 1;
      const newEvents = eventsData.slice(0, nextPage * 6);
      setEvents(newEvents);
      setPage(nextPage);
      setHasMore(newEvents.length < eventsData.length);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-8">
          <Button onClick={loadMore} disabled={loading}>
            {loading ? 'Loading...' : 'Load More Events'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventList;