import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const CaptainLogout = () => {
    const token = localStorage.getItem('token');
    console.log("Token from localStorage:", token); // Debug: Check if token exists
    const navigate = useNavigate();
  
    useEffect(() => {
      axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log("Logout response:", response.data); // Debug: Check response
        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
    }, [navigate]);
  
    return <div>CaptainLogout</div>;
  };

export default CaptainLogout
