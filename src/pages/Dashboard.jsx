const Dashboard = () => {
  // Sample data
  const upcomingEvents = [
    { id: 1, name: "Music Festival", date: "2023-12-20" }
  ];

  return (
    <div className="page">
      <h1>Attendee Dashboard</h1>
      <section>
        <h2>Upcoming Events</h2>
        <ul>
          {upcomingEvents.map(event => (
            <li key={event.id}>
              {event.name} - {event.date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;