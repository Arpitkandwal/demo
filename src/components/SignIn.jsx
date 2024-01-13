// SignIn.js
import React, { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('guest');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Reset form and error state
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="">
      <form onSubmit={handleSignIn} className="p-6 bg-white border rounded-md shadow-md">
        <div className="mb-4">
          Please enter your administrator login and password.
        </div>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Username"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Password"
          />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
