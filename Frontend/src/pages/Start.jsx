import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="bg-cover bg-[url(https://i.pinimg.com/736x/9d/1e/d4/9d1ed45e6f4614fd5686493a9d49e84d.jpg)] h-screen pt-8 w-full flex justify-between flex-col">
      <img
        className="w-16 ml-8"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="bg-white pb-10 py-5 px-5">
        <h2 className="text-2xl font-bold">Getting Started with Uber</h2>
        <Link
          to="/login"
          className="flex items-center justify-between w-full bg-black text-white py-3 px-4 rounded mt-2"
        >
          <span className="flex-grow text-center font-semibold text-lg">Continue</span>
          <i className="ri-arrow-right-line font-bold text-lg"></i>
        </Link>
      </div>
    </div>
  );
};

export default Start;
