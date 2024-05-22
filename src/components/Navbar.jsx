import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-12 shadow-md flex justify-around items-center'>
      <div>logo</div>
      <div className='hidden sm:flex'>
        <ul className='flex gap-10'>
            <NavLink to={'/'}  className={({isActive})=>isActive?"text-blue-900 font-bold border-b-2 border-blue-900":""}><li>Home</li></NavLink>
            <NavLink to={'/about'}  className={({isActive})=>{return isActive?"text-blue-900 font-bold border-b-2 border-blue-900":""}}><li>About</li></NavLink>
            <NavLink to={'/skill'}  className={({isActive})=>{return isActive?"text-blue-900 font-bold border-b-2 border-blue-900":""}}><li>Skill</li></NavLink>
            <NavLink to={'/education'}  className={({isActive})=>{return isActive?"text-blue-900 font-bold border-b-2 border-blue-900":""}}><li>Education</li></NavLink>
            <NavLink to={'/work'}  className={({isActive})=>{return isActive?"text-blue-900 font-bold border-b-2 border-blue-900":""}}><li>Work</li></NavLink>
            <NavLink to={'/contact'}  className={({isActive})=>{return isActive?"text-blue-900 font-bold border-b-2 border-blue-900":""}}><li>Contact</li></NavLink>
        </ul>
      </div>
      <div className='flex flex-col items-center sm:hidden mr-0'>
        Hamburger
      </div>
    </div>
  )
}

export default Navbar
