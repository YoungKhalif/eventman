import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './css/CtaSection.css'; 

const CtaSection = () => {
      return (
        <section className="bg-gray-800 text-white p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Are You an Event Organizer?</h2>
          <p className="mb-4">Create and manage your events with our powerful platform. Get access to attendee management, ticketing, and analytics tools.</p>
          <div className="space-x-4">
            <Link to="/create-event"><Button>Create an Event</Button></Link>
            <Link to="/learn-more"><Button variant="secondary">Learn More</Button></Link>
          </div>
        </section>
      );
    };
    
    export default CtaSection;