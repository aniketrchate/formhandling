import React, { useState } from 'react';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate authentication (replace with your actual authentication logic)
    if (userId === 'aniket' && password === 'aniket') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
    <h1 className="text-center mt-5">Login</h1>
    <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
      <label htmlFor="userId" className="form-label mt-3">
        User ID:
      </label>
      <input
        type="text"
        id="userId"
        name="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
        className="form-control"
      />
      <label htmlFor="password" className="form-label mt-3">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="form-control"
      />
      <button type="submit" className="btn btn-primary mt-3">
        Login
      </button>
    </form>
    {isLoggedIn && <p className="welcome-message text-success mt-3">Welcome {userId}</p>}
  </div>
);
};

export default Login;