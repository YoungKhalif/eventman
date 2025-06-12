const SignUp = () => (
  <div className="page">
    <h1>Sign Up</h1>
    <form>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Create Account</button>
    </form>
  </div>
);

export default SignUp;