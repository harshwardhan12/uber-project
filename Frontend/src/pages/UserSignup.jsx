import React, { useState } from 'react';
import { data, Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserSignup = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ userData, setUserData ] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext);
  const [showPassword, setShowPassword] = useState(false);

  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      fullname: {
        firstname: firstName,
        lastname: lastName
      }
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      // const data = response.data
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
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

          <h3 className='text-lg font-medium'>Enter your name</h3>
          <div className='flex gap-4'>
            <input className='bg-[#eeeeee] rounded w-full text-lg px-4 py-2 placeholder:text-base' required value={firstName} onChange={(e) => {
              setFirstName(capitalizeFirstLetter(e.target.value))
            }} type="text" placeholder='First Name' />
            <input className='bg-[#eeeeee] rounded w-full text-lg px-4 py-2 placeholder:text-base' value={lastName} onChange={(e) => {
              setLastName(capitalizeFirstLetter(e.target.value))
            }} type="text" placeholder='Last Name' />
          </div>
         
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
          <div className='relative'>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] rounded w-full text-lg px-4 py-2 placeholder:text-base'
            type={showPassword ? "text" : "password"}
            placeholder='password'
          />
          <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              <img
                src={
                  showPassword
                    ? "/src/assets/icons/show.png"
                    : "/src/assets/icons/hide.png"
                }
                alt={showPassword ? "Hide password" : "Show password"}
                className="w-4 h-4"
              />
          </button>

          </div>

          <button
            className='bg-black font-semibold text-white text-lg rounded w-full px-4 py-2 mt-4 mb-3'
            type='submit'
          >
            Create new account
          </button>
        </form>

        {/* Signup Link */}
        <p className='text-center font-semibold'>
          Already have an account?{' '}
          <Link to='/login' className='text-blue-600'>
            Login here
          </Link>
        </p>
      </div>
      <p className='text-sm'>This site is protected by reCAPTCHA and the <span className='text-blue-600 underline '>Google Privacy Policy</span> and <span className='text-blue-600 underline'>Terms of Service</span> apply </p>

    </div>
  );
}

export default UserSignup