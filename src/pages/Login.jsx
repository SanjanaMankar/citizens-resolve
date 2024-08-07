import React, { useState } from 'react';


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="h-screen flex items-center bg-[#4c82a3] justify-center ">
      <div className="absolute inset-0">
        <img src alt="Background" className="object-cover w-full h-full  " />
      </div>
      <form onSubmit={handleSubmit} className=" bg-[#003049] p-6 rounded-xl shadow-md w-80 z-10"> 
        <h2 className="text-2xl mb-4 text-white">Login</h2>
        <div className="mb-4">
          <label className="block mb-1 text-white">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-gray-300 p-2 rounded outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 border-gray-300 p-2 rounded outline-none focus:border-blue-400"
          />
        </div>
        <button type="submit" className="w-28 bg-[#3790c8] text-white py-1 rounded-lg ml-20 hover:bg-[#003049]">
          Login
        </button>
        <div className="mt-4 text-center">
          <span className="text-white">Create New Account? </span>
          <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
