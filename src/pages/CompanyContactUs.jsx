import 'bootstrap/dist/css/bootstrap.min.css';
// import './ContactUs.css';

const ContactUs = () => (
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h1 className="text-center mb-4">Contact Smart Event Solutions</h1>
        <p className="text-center text-muted mb-5">
          We're here to help with your event registration and ticketing needs. Reach out to us!
        </p>

        <div className="row">
          {/* Contact Information */}
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Get in Touch</h5>
                <address className="text-muted">
                  <strong>Email:</strong> <a href="mailto:support@smartevents.com">support@smartevents.com</a><br />
                  <strong>Phone:</strong> <a href="tel:+15551234567">(555) 123-4567</a><br />
                  <strong>Address:</strong> 123 Event Street, San Francisco, CA 94105<br />
                  <strong>Hours:</strong> Mon-Fri, 9 AM - 5 PM PST
                </address>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Send Us a Message</h5>
                <form noValidate>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                    <div className="invalid-feedback">Please enter your name.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                    <div className="invalid-feedback">Please enter a valid email address.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <div className="invalid-feedback">Please enter your message.</div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;