const ContactUs = () => (
  <div className="page">
    <h1>Contact Us</h1>
    <address>
      Email: support@eventapp.com<br />
      Phone: (555) 123-4567<br />
      Address: 123 Event Street, San Francisco, CA
    </address>
    <form>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
);

export default ContactUs;