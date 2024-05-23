import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../public/nodejs-icon.svg'
function Navbar() {
  return (
    <div className='h-12 shadow-md flex justify-between items-center'>
      <div className='ml-[2vw]'>
        <img src={logo} alt='logo' className='w-8 h-8'/>
      </div>
      <div className='hidden sm:flex mr-72'>
        <ul className='flex gap-10'>
            <NavLink to={'/'}  className={({isActive})=>isActive?"text-blue-900 font-bold border-b-2 border-blue-900":""}><li>Home</li></NavLink>
            <NavLink to={'/about'}  className={({isActive})=>{return isActive?"text-blue-900 font-bold border-b-2 border-blue-900":""}}><li>About</li></NavLink>
            <NavLink to={'/skill'}  className={({isActive})=>{return isActive?"text-blue-900 font-bold border-b-2 border-blue-900":""}}><li>Skill</li></NavLink>
            <NavLink to={'/education'}  className={({isActive})=>{return isActive?"text-blue-900 font-bold border-b-2 border-blue-900":""}}><li>Education</li></NavLink>
            <NavLink to={'/work'}  className={({isActive})=>{return isActive?"text-blue-900 font-bold border-b-2 border-blue-900":""}}><li>Work</li></NavLink>
            <NavLink to={'/contact'}  className={({isActive})=>{return isActive?"text-blue-900 font-bold border-b-2 border-blue-900":""}}><li>Contact</li></NavLink>
        </ul>
      </div>
      <div className='flex flex-col items-center sm:hidden mr-4'>
        <div>
          <div className='w-6 h-0.5 bg-gray-700 my-1'></div>
          <div className='w-6 h-0.5 bg-gray-700 my-1'></div>
          <div className='w-6 h-0.5 bg-gray-700 my-1'></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
