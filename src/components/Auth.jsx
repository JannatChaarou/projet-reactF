import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actionCreators';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Import du logo

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      dispatch(login(username));
      navigate('/home');
    } else {
      setError('Please enter a username and password');
    }
  };

  return (
    <div className="body-Auth">      
        <img
          src={logo}
          alt="Logo"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
      <h2 className='title-Auth'>Stay Organized, Achieve More: Your Tasks, Your Way!</h2>
      <div className="auth-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
        <a href="/register" className="register-link">
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default Auth;
