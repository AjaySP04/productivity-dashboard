import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './Auth/Login';
import HomePage from './Auth/HomePage';
import { BACKEND_URL } from './config';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
 
  const handleLogout = () => {
    setCurrentUser(null)
    setIsLoggedIn(false)
    // Remove session cookie
    document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/user/me`, { withCredentials: true });
        // Set the current user state with the fetched user data
        setCurrentUser(response.data);
        setIsLoggedIn(true);

      } catch (error) {
        console.error('Error fetching user data:', error);
        // Redirect to the login page if there's an error fetching the user
        // return <Navigate to="/login" />;
      } finally {
        setLoading(false);
      }
    };
  
    // Fetch the current user when the component mounts
    fetchCurrentUser();
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} userName={currentUser?.name} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              loading ? (
                <div>Loading...</div>
              ) : isLoggedIn ? (
                <HomePage name={currentUser?.name} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
