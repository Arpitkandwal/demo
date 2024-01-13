// src/components/Navbar.js
import React from 'react';
import LanguageSelector from './Language';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-sky-950 z-10">
      <div className="flex items-center justify-between">
      <div className="flex-grow">
        <LanguageSelector />
      </div>

</div>
    </nav>
  );
};
 
export default Navbar;
