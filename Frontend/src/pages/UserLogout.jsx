import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// export const UserLogout = () => {
//     const token = localStorage.getItem('token');
//     const navigate = useNavigate();    

//     useEffect(() => {
//         // If no token exists, navigate to login directly (optional)
//         if (!token) {
//             navigate('/login');
//             return;
//         }

//         // Make the logout request when the component is mounted
//         axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
//             headers: { 
//                 Authorization: `Bearer ${token}` 
//             } 
//         })
//         .then((response) => {
//             if (response.status === 200) {
//                 localStorage.removeItem('token'); // Remove token after successful logout
//                 navigate('/login'); // Redirect to login page
//             }
//         })
//         .catch((error) => {
//             console.error('Logout failed:', error);
//             // You can optionally handle the error here (e.g., show an error message to the user)
//         });
//     }, [token, navigate]); // Empty dependencies array means this effect runs once when the component is mounted

//     return (
//         <div>UserLogout</div>
//     );
// };

// export default UserLogout;


export const UserLogout = () => {
  const token = localStorage.getItem('token');
  console.log("Token from localStorage:", token); // Debug: Check if token exists
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
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

  return <div>UserLogout</div>;
};

export default UserLogout;
