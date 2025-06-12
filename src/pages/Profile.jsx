const Profile = () => (
  <div className="page">
    <h1>My Profile</h1>
    <form>
      <label>Name: <input type="text" defaultValue="John Doe" /></label>
      <label>Email: <input type="email" defaultValue="john@example.com" /></label>
      <label>Password: <input type="password" placeholder="New Password" /></label>
      <button type="submit">Update Profile</button>
    </form>
  </div>
);

export default Profile;