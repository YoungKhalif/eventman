const OrganizerDashboard = () => {
  const stats = {
    totalEvents: 12,
    attendees: 340,
    revenue: "$8,240"
  };

  return (
    <div className="page">
      <h1>Organizer Dashboard</h1>
      <div className="stats">
        <p>Events: {stats.totalEvents}</p>
        <p>Attendees: {stats.attendees}</p>
        <p>Revenue: {stats.revenue}</p>
      </div>
    </div>
  );
};

export default OrganizerDashboard;