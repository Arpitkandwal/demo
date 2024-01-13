// Body.js
import React from 'react';
import SignIn from './SignIn';

const Body = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-sky-800 to-indigo-950 flex flex-col items-center'>
      <img
        src="/header_logo.png"
        alt="Logo"
        className='mt-40 max-w-full max-h-full mb-4'
      />
      <div className="mt-8">
        <SignIn />
      </div>
    </div>
  );
};

export default Body;
