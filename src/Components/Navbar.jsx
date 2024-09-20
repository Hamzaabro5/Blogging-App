import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div class="navbar bg-primary text-white">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
    </div>
    <a class="btn btn-ghost text-xl">Blogging App</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li className='text-xl'><a><Link to=''>Home</Link></a></li>
      <li className='text-xl'><a><Link to='dashboard'>Dashboard</Link></a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn btn-outline btn-md text-white mx-2"><Link to='register'>Sign Up</Link></a>
    <a class="btn btn-outline btn-success btn-md text-white mx-2"><Link to='login'>Login</Link></a>
  </div>
    </div>
    </>
  )
}

export default Navbar