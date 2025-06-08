import './css/Footer.css'; 
import React from 'react';

const Footer = () => {
      return (
        <footer className="bg-gray-100 p-8 text-gray-600">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">EventSmart</h3>
              <p className="mb-2">The smart way to discover, manage, and attend events that matter to you.</p>
              <div className="flex space-x-2">
                <span>facebook</span> <span>twitter</span> <span>linkedin</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">For Attendees</h3>
              <ul className="space-y-1">
                <li>Browse Events</li>
                <li>Get Tickets</li>
                <li>My Account</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">For Organizers</h3>
              <ul className="space-y-1">
                <li>Create Events</li>
                <li>Pricing</li>
                <li>Resources</li>
                <li>Success Stories</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul className="space-y-1">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>© 2025 EventSmart. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <span>Privacy Policy</span> <span>Terms of Service</span> <span>Cookie Policy</span>
            </div>
          </div>
        </footer>
      );
    };
export default Footer;