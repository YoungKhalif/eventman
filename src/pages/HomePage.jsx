import React from 'react';
import EventList from '../components/EventList';
import CtaSection from '../components/CtaSection';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="bg-gray-100 p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Discover Amazing Events Near You</h1>
        <p className="text-gray-600 mb-4">Join thousands of people attending conferences, workshops, concerts, and more with our Smart Event Management System.</p>
      </div>
      <EventList />
      <CtaSection />
    </div>
  );
}

export default HomePage;