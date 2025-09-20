// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eskooly from "../../Assests/eskooly.png"
import "./Login.css"

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  localStorage.setItem('username', 'Abhishek');
  localStorage.setItem('password', '12345');

  const handleLogin = () => {
    // Retrieve stored credentials from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if the entered credentials match the stored values
    if (username === storedUsername && password === storedPassword) {
      // Update the parent component to indicate the user is logged in
      setIsLoggedIn(true);

      // Redirect or perform other actions upon successful login
      // For simplicity, we'll just log a success message for now
      console.log('Login successful!');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <img src={eskooly} style={{width: "117px",
    margin: "19px"}}/>
      <form
        className="border border-grey position-absolute top-50 start-50 translate-middle p-5 shadow-lg p-3 mb-5 bg-white rounded"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form1Example1">
            Email address:
            <input
              type="text"
              id="form1Example1"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="email"
            />
          </label>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form1Example2">
            Password:
            <input
              type="password"
              id="form1Example2"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </label>
        </div>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <Link to="/">Forgot Password</Link>
        <Link className="p-4" to="/SignUp">
          Sign up
        </Link>
        <br />

        <button type="submit" className="btn btn-primary btn-block m-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;