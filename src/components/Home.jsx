import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => (
  <div> 
    <h1 className='home-h'>Welcome to the ToDo List Application</h1>
    <p className='home-p'>Manage your tasks easily and efficiently.</p>
    <Link to="/todos" ><button className='home-btn'>let's start</button></Link>
  </div>
);

export default Home;
