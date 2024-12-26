import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()

  const { user, setUser } = useContext(UserDataContext)
  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }
    console.log(userData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData
      );
      console.log('Response received:', response);
  
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }

    setEmail('')
    setPassword('')
  }
  

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      {/* Top Section */}
      <div>
        <img
          className='w-16'
          src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
          alt='Uber Logo'
        />
        
        {/* Login Form */}
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='flex flex-col gap-4 mt-10'>
          <h3 className='text-lg font-medium'>What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] rounded w-full text-lg px-4 py-2 placeholder:text-base'
            type='email'
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium'>Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] rounded w-full text-lg px-4 py-2 placeholder:text-base'
            type='password'
            placeholder='password'
          />

          <button
            className='bg-black font-semibold text-white text-lg rounded w-full px-4 py-2 mt-4 mb-3'
            type='submit'
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className='text-center font-semibold'>
          New here?{' '}
          <Link to='/signup' className='text-blue-600'>
            Create new Account
          </Link>
        </p>
      </div>

      {/* Captain Login Button */}
      <div>
        <Link
          to='/captain-login'
          className='flex items-center justify-center mb-5 bg-green-700 font-semibold text-white text-lg rounded w-full px-4 py-2'
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
