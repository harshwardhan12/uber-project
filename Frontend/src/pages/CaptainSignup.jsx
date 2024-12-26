import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");

  const [ vehicleColor, setVehicleColor ] = useState("");
  const [ vehiclePlate, setVehiclePlate ] = useState("");
  const [ vehicleCapacity, setVehicleCapacity ] = useState("");
  const [ vehicleType, setVehicleType ] = useState("");
  const [ captainData, setCaptainData ] = useState({});

  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const [ showPassword, setShowPassword ] = useState(false);

  // Capitalize First Letter Function
  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newCaptain = {
      email: email,
      password: password,
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      newCaptain
    );
    console.log(response);

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
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
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-2 mt-10"
        >
          <h3 className="text-lg font-medium">Enter your name</h3>
          <div className="flex gap-4">
            <input
              className="bg-[#eeeeee] rounded w-full text-lg px-4 py-2 placeholder:text-base"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(capitalizeFirstLetter(e.target.value));
              }}
              type="text"
              placeholder="First Name"
            />
            <input
              className="bg-[#eeeeee] rounded w-full text-lg px-4 py-2 placeholder:text-base"
              value={lastName}
              onChange={(e) => {
                setLastName(capitalizeFirstLetter(e.target.value));
              }}
              type="text"
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-lg font-medium">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] rounded w-full text-lg px-4 py-2 placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium">Enter password</h3>
          <div className="relative">
            <input
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-[#eeeeee] rounded w-full text-lg px-4 py-2 placeholder:text-base"
              type={showPassword ? "text" : "password"}
              placeholder="password"
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

          {/* Vehicle Details */}
          <h3 className="text-lg font-medium">Vehicle Details</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Vehicle Color */}
            <div>
              {/* <label className='text-base font-medium'>Vehicle Color</label> */}
              <input
                className="bg-[#eeeeee] rounded w-full text-base px-4 py-2 placeholder:text-base"
                value={vehicleColor}
                onChange={(e) =>
                  setVehicleColor(capitalizeFirstLetter(e.target.value))
                }
                type="text"
                placeholder="Vehicle Color"
              />
            </div>

            {/* Vehicle Plate */}
            <div>
              {/* <label className='text-base font-medium'>Vehicle Plate</label> */}
              <input
                className="bg-[#eeeeee] rounded w-full text-base px-4 py-2 placeholder:text-base"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value.toUpperCase())}
                type="text"
                placeholder="Vehicle Plate"
              />
            </div>

            {/* Vehicle Capacity */}
            <div>
              {/* <label className='text-base font-medium'>Vehicle Capacity</label> */}
              <input
                className="bg-[#eeeeee] rounded w-full text-base px-4 py-2 placeholder:text-base"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                type="number"
                placeholder="Vehicle Capacity"
              />
            </div>

            {/* Vehicle Type */}
            <div>
              {/* <label className='text-base font-medium'>Vehicle Type</label> */}
              <select
                className="bg-[#eeeeee] rounded w-full text-base px-4 py-2"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="" disabled>
                  Select Vehicle
                </option>{" "}
                {/* Placeholder option */}
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Moto</option>
              </select>
            </div>
          </div>

          <button
            className="bg-black font-semibold text-white text-lg rounded w-full px-4 py-2 mt-4 mb-3"
            type="submit"
          >
            Create captain account
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center font-semibold">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>

      {/* <p className='text-sm'>This site is protected by reCAPTCHA and the <span className='text-blue-600 underline '>Google Privacy Policy</span> and <span className='text-blue-600 underline'>Terms of Service</span> apply </p> */}
    </div>
  );
};

export default CaptainSignup;
