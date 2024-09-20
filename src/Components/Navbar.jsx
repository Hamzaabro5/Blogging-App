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

    <a class="btn btn-ghost text-xl"><Link to="">Blogging App</Link></a>
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

        <div class="avatar">
              <Link to="profile">
      <div class="ring-success ring-offset-base-300 w-10 ms-10 me-2 rounded-full ring ring-offset-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/1200px-Windows_10_Default_Profile_Picture.svg.png" />
      </div>
              </Link>
        </div>
    </div>

    </>
  )
}

export default Navbar