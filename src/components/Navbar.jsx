import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/nodejs-icon.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='h-16 shadow-md flex justify-between items-center px-4 bg-white z-50 relative'>
      <div className='flex items-center'>
        <img src={logo} alt='logo' className='w-10 h-10' />
        <span className='ml-3 text-xl font-bold text-gray-800'>My Portfolio</span>
      </div>

      {/* Desktop Menu */}
      <div className='hidden sm:flex items-center'>
        <ul className='flex gap-8'>
          <NavLink to={'/'} className={({ isActive }) => isActive ? "text-blue-700 font-bold border-b-2 border-blue-700" : "text-gray-600 hover:text-blue-700"}><li>Home</li></NavLink>
          <NavLink to={'/about'} className={({ isActive }) => isActive ? "text-blue-700 font-bold border-b-2 border-blue-700" : "text-gray-600 hover:text-blue-700"}><li>About</li></NavLink>
          <NavLink to={'/projects'} className={({ isActive }) => isActive ? "text-blue-700 font-bold border-b-2 border-blue-700" : "text-gray-600 hover:text-blue-700"}><li>Projects</li></NavLink>
          <NavLink to={'/skill'} className={({ isActive }) => isActive ? "text-blue-700 font-bold border-b-2 border-blue-700" : "text-gray-600 hover:text-blue-700"}><li>Skills</li></NavLink>
          <NavLink to={'/education'} className={({ isActive }) => isActive ? "text-blue-700 font-bold border-b-2 border-blue-700" : "text-gray-600 hover:text-blue-700"}><li>Education</li></NavLink>
          <NavLink to={'/work'} className={({ isActive }) => isActive ? "text-blue-700 font-bold border-b-2 border-blue-700" : "text-gray-600 hover:text-blue-700"}><li>Work</li></NavLink>
          <NavLink to={'/contact'} className={({ isActive }) => isActive ? "text-blue-700 font-bold border-b-2 border-blue-700" : "text-gray-600 hover:text-blue-700"}><li>Contact</li></NavLink>
        </ul>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className='sm:hidden'>
        <button onClick={toggleMenu} className='text-gray-700 focus:outline-none'>
          <div className={`w-6 h-0.5 bg-gray-700 my-1 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-700 my-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-700 my-1 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className='flex flex-col items-center p-4'>
          <NavLink to={'/'} onClick={toggleMenu} className='py-2 text-lg text-gray-700 hover:text-blue-700'><li>Home</li></NavLink>
          <NavLink to={'/about'} onClick={toggleMenu} className='py-2 text-lg text-gray-700 hover:text-blue-700'><li>About</li></NavLink>
          <NavLink to={'/skill'} onClick={toggleMenu} className='py-2 text-lg text-gray-700 hover:text-blue-700'><li>Skills</li></NavLink>
          <NavLink to={'/education'} onClick={toggleMenu} className='py-2 text-lg text-gray-700 hover:text-blue-700'><li>Education</li></NavLink>
          <NavLink to={'/work'} onClick={toggleMenu} className='py-2 text-lg text-gray-700 hover:text-blue-700'><li>Work</li></NavLink>
          <NavLink to={'/projects'} onClick={toggleMenu} className='py-2 text-lg text-gray-700 hover:text-blue-700'><li>Projects</li></NavLink>
          <NavLink to={'/contact'} onClick={toggleMenu} className='py-2 text-lg text-gray-700 hover:text-blue-700'><li>Contact</li></NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
