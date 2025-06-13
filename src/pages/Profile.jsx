import React from 'react';

const Profile = () => (
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-4">
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body text-center p-4">
            <div className="position-relative d-inline-block mb-3">
              <img 
                src="https://ui-avatars.com/api/?name=John+Doe&background=0D6EFD&color=fff&size=128" 
                className="rounded-circle" 
                alt="Profile"
                width="128"
                height="128"
              />
              <button className="btn btn-sm btn-primary position-absolute bottom-0 end-0 rounded-circle">
                <i className="bi bi-camera"></i>
              </button>
            </div>
            <h3 className="mb-1">John Doe</h3>
            <p className="text-muted mb-3">john@example.com</p>
            <div className="d-flex justify-content-center gap-2 mb-4">
              <span className="badge bg-primary-subtle text-primary">Premium Member</span>
              <span className="badge bg-success-subtle text-success">Verified</span>
            </div>
            
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary">
                <i className="bi bi-ticket-perforated me-2"></i>My Tickets
              </button>
              <button className="btn btn-outline-secondary">
                <i className="bi bi-calendar-event me-2"></i>My Events
              </button>
            </div>
          </div>
        </div>
        
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <h5 className="mb-3">Account Statistics</h5>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span className="text-muted">Events Attended</span>
              <span className="fw-medium">24</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span className="text-muted">Tickets Purchased</span>
              <span className="fw-medium">42</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span className="text-muted">Member Since</span>
              <span className="fw-medium">Jan 15, 2023</span>
            </div>
            <div className="d-flex justify-content-between pt-2">
              <span className="text-muted">Account Status</span>
              <span className="badge bg-success">Active</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-lg-8">
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-header bg-white border-0 py-3">
            <h2 className="mb-0">My Profile</h2>
            <p className="text-muted mb-0">Manage your personal information and settings</p>
          </div>
          <div className="card-body p-4">
            <form>
              <div className="mb-4">
                <h5 className="mb-3">Personal Information</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="firstName" 
                      defaultValue="John" 
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="lastName" 
                      defaultValue="Doe" 
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      defaultValue="john@example.com" 
                      required 
                    />
                    <div className="form-text">We'll never share your email with anyone else</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="phone" 
                      placeholder="(555) 123-4567" 
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="address" 
                      placeholder="123 Main Street" 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="city" className="form-label">City</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="city" 
                      placeholder="San Francisco" 
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <select className="form-select" id="state">
                      <option>Select State</option>
                      <option selected>California</option>
                      <option>New York</option>
                      <option>Texas</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">Zip Code</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="zip" 
                      placeholder="94105" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="mb-3">Notification Preferences</h5>
                <div className="form-check mb-2">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="eventUpdates" 
                    defaultChecked 
                  />
                  <label className="form-check-label" htmlFor="eventUpdates">
                    Event updates and announcements
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="ticketReminders" 
                    defaultChecked 
                  />
                  <label className="form-check-label" htmlFor="ticketReminders">
                    Ticket purchase reminders
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="promotional" 
                    defaultChecked 
                  />
                  <label className="form-check-label" htmlFor="promotional">
                    Promotional offers and discounts
                  </label>
                </div>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="partnerOffers" 
                  />
                  <label className="form-check-label" htmlFor="partnerOffers">
                    Partner offers and recommendations
                  </label>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="mb-3">Change Password</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="currentPassword" className="form-label">Current Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="currentPassword" 
                      placeholder="Enter current password" 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="newPassword" 
                      placeholder="Create new password" 
                    />
                    <div className="form-text">Minimum 8 characters with numbers</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="confirmPassword" 
                      placeholder="Confirm new password" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="d-flex justify-content-end gap-2 pt-3">
                <button type="button" className="btn btn-outline-secondary px-4">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary px-4">
                  <i className="bi bi-save me-2"></i>Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="card shadow-sm border-0">
          <div className="card-header bg-white border-0 py-3">
            <h5 className="mb-0">Account Security</h5>
          </div>
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h6 className="mb-0">Two-Factor Authentication</h6>
                <p className="text-muted mb-0 small">Add an extra layer of security to your account</p>
              </div>
              <div className="form-check form-switch">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="twoFactorSwitch" 
                />
                <label className="form-check-label" htmlFor="twoFactorSwitch"></label>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-0">Recent Devices</h6>
                <p className="text-muted mb-0 small">Manage devices that have accessed your account</p>
              </div>
              <button className="btn btn-sm btn-outline-primary">
                View Devices
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;