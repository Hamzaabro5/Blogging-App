  import React from 'react'
  import { Link } from 'react-router-dom'
  import {signOutUser } from '../Firebase/firebasemethods';

  function Navbar() {

    function userLogout() {
      signOutUser()
      alert('Logged Out');
      navigate('/login')
  }

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
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 py-5 gap-3 shadow">
        <li className='text-black font-bold'><a className='text-xl'><Link to=''>Home</Link></a></li>
        <li className='text-black font-bold'><a className='text-xl'><Link to='dashboard'>Dashboard</Link></a></li>
        <li class="text-black font-bold"><a className='text-xl'><Link to='register'>Sign Up</Link></a></li>
        <li class="text-black font-bold"><a className='text-xl'><Link to='login'>Login</Link></a></li>
        <li class="text-black font-bold"><a className='text-xl' onClick={userLogout}>Logout</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl"><Link to="">Blogging App</Link></a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
      <li className='text-xl'><a><Link to=''>Home</Link></a></li>
      <li className='text-xl'><a><Link to='dashboard'>Dashboard</Link></a></li>
      </ul>
    </div>
    <div class="navbar-end gap-3">
    <button className='btn btn-outline  text-white hidden lg:flex'><Link to='register'>Sign Up</Link></button>
    <button className='btn btn-outline btn-accent text-white hidden lg:flex'><Link to='login'>Login</Link></button>
    <button onClick={userLogout } className='btn btn-outline btn-error hidden lg:flex ms-10'>Logout</button>
    <div class="avatar">
                <Link to="profile">
        <div class="ring-success ring-offset-base-300 w-10 ms-10 me-2 rounded-full ring ring-offset-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/1200px-Windows_10_Default_Profile_Picture.svg.png" />
        </div>
                </Link>
          </div>
    </div>
      </div>





      </>
    )
  }

  export default Navbar