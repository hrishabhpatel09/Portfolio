import React from 'react'
import Typed from 'typed.js';
import dp from '../assets/profile.jpg';

function Home() {
  return (
    <div className='sm:grid sm:grid-cols-2'>
      <div className='sm:text-6xl text flex flex-col sm:pl-12 justify-center text-4xl ml-8 h-72 pt-24 mb-16'>
        <p className='sm:mb-4'>Hi There,</p>
        <div className='flex mb-4'>
          <p className='sm:mr-4 mr-2'>I'm Hrishabh</p>
          <p className='text-orange-600'>Patel</p>
        </div>
        <div className='flex mb-4'>
        <p className='sm:text-3xl font-thin text-2xl mr-2'>I am a </p>
        <p className='sm:text-3xl font-thin text-2xl text-red-700'>Web developer </p>
        </div>
        <button className='text-sm sm:w-32 bg-blue-800 text-white px-3 py-1 rounded-md w-36'>Download Resume</button>
      </div>
      <div className='flex items-center sm:justify-center sm:h-[70vh] sm:ml-24 justify-center'>
        <div className='rounded-[50%] sm:h-72 sm:w-72 border-2 overflow-hidden h-56 w-56'>
          <img src={dp}/></div>
      </div>
    </div>
  )
}

export default Home
