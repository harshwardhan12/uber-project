import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);

    const CaptainData = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, CaptainData);

    console.log(response);

    if (response.status === 200) {
      const data = response.data;
      console.log(data);
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    console.log(CaptainData);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      {/* Top Section */}
      <div>
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />

        {/* Login Form */}
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col gap-4 mt-10"
        >
          <h3 className="text-lg font-medium">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] rounded w-full text-lg px-4 py-2 placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium">Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] rounded w-full text-lg px-4 py-2 placeholder:text-base"
            type="password"
            placeholder="password"
          />

          <button
            className="bg-black font-semibold text-white text-lg rounded w-full px-4 py-2 mt-4 mb-3"
            type="submit"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center font-semibold">
          Join a fleet?{' '}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>

      {/* Captain Login Button */}
      <div>
        <Link
          to="/login"
          className="flex items-center justify-center mb-5 bg-orange-700 font-semibold text-white text-lg rounded w-full px-4 py-2"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
