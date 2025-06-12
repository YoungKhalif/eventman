const BrowseEvents = () => {
  // Sample data - replace with real API calls
  const events = [
    { id: 1, name: "Concert", date: "2023-12-15" },
    { id: 2, name: "Tech Conference", date: "2024-01-20" }
  ];

  return (
    <div className="page">
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <button>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseEvents;