import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Home from './components/Home';
import About from './components/About';
import TodoList from './components/TodoList';
import Header from './components/Header';
import './App.css';


const App = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <Router>
      {isAuthenticated && <Header />}
      
      <Routes>
        <Route path="/auth" element={isAuthenticated ? <Navigate to="/home" /> : <Auth />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/auth" />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/auth" />} />
        <Route path="/todos" element={isAuthenticated ? <TodoList /> : <Navigate to="/auth" />} />
        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/auth"} />} />
      </Routes>
    </Router>
  );
};

export default App;
