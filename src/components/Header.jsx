import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actionCreators';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'; 

const Header = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth');
  };

  return (
    isAuthenticated && (
      <nav
        style={{
          padding: '10px',
          background: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '15px',
          }}
        />
        <div>
          <Link to="/home" style={{ marginRight: '10px' }}>
            Home
          </Link>
          <Link to="/about" style={{ marginRight: '10px' }}>
            About
          </Link>
          <button onClick={handleLogout} style={{ marginLeft: '10px' }}>
            Logout
          </button>
        </div>
      </nav>
    )
  );
};

export default Header;
