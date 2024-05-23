import React from 'react'
import {Link} from 'react-router-dom'
import dp from '../assets/profile.jpg';
import instagram from '../assets/instagram.svg'
import linkedIn from '../assets/linkedIn.svg'
import github from '../assets/github.svg'
function Home() {
  return (
    <div className='sm:grid sm:grid-cols-2 flex flex-col'>
      <div className='sm:text-6xl text flex flex-col sm:pl-12 justify-center text-4xl ml-8 h-72 pt-2 mb-16 order-2 sm:order-1 sm:pt-48'>
        <p className='sm:mb-4'>Hi There,</p>
        <div className='flex mb-4'>
          <p className='sm:mr-4 mr-2'>I'm Hrishabh</p>
          <p className='text-orange-600'>Patel</p>
        </div>
        <div className='flex mb-4'>
        <p className='sm:text-3xl font-thin text-2xl mr-2'>I am a </p>
        <p className='sm:text-3xl font-thin text-2xl text-red-700'>Web developer </p>
        </div>
        <button className='text-sm sm:w-32 bg-blue-800 text-white px-3 py-1 rounded-md w-36'><a href="/">Download Resume</a></button>
        {/* clickable links from here */}
        <div className='mt-6 flex gap-4'>
          <a href="https://www.linkedin.com/in/hrishabh-patel-a15379289/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt='instagram' className='h-10' /></a>
          <a href="https://github.com/hrishabhpatel09" target="_blank" rel="noopener noreferrer"><img src={github} alt='instagram' className='h-10' /></a>
          <a href="https://www.instagram.com/hrishabh_patel09/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt='instagram' className='h-10' /></a>
        </div>
      </div>
      <div className='flex items-center sm:justify-center sm:h-[70vh] sm:ml-24 justify-center mt-6 sm:order-1 sm:mt-0'>
      <div className='rounded-[50%] sm:h-72 sm:w-72 border-2 overflow-hidden h-56 w-56'>
          <img src={dp}/></div>
      </div>
    </div>
  )
}

export default Home
