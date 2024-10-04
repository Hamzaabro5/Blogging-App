import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth, db, signOutUser } from '../Firebase/firebasemethods';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

  function Navbar() {

    function userLogout() {
      signOutUser()
      alert('Logged Out');
      navigate('/login')
  }

  const [userData, setuserData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
                const q = query(collection(db, "users"), where("id", "==", user.uid));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.data());
                    setuserData(doc.data())
                });
                console.log(user);
                return
        }
    })
}, [])

    return (
      <>
      <div className="navbar bg-primary text-white">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabIndex="0" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 py-5 gap-5 shadow">
        <Link to=''><li className='text-black font-bold text-xl'>Home</li></Link>
        <Link to='dashboard'><li className='text-black font-bold text-xl'>Dashboard</li></Link>
        <Link to='register'><li className="text-black font-bold text-xl">Sign Up</li></Link>
        <Link to='login'><li className="text-black font-bold text-xl">Login</li></Link>
        <li className="text-black font-bold text-xl"  onClick={userLogout}>Logout</li>
        </ul>
      </div>
      <Link to=""><h1 className="btn btn-ghost text-xl">Blogging App</h1></Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-5">
      <Link to=''><li className='text-xl btn btn-outline text-white'>Home</li></Link>
      <Link to='dashboard'><li className='text-xl btn btn-outline text-white'>Dashboard</li></Link>
      </ul>
    </div>
    <div className="navbar-end gap-3">
    <Link to='register'> <button className='btn btn-outline btn-warning  text-white hidden lg:flex'>Sign Up</button></Link> 
    <Link to='login'><button className='btn btn-outline btn-accent text-white hidden lg:flex'>Login</button></Link>
    <button onClick={userLogout } className='btn btn-outline btn-error hidden lg:flex ms-10'>Logout</button>
    <div className="avatar">
                <Link to="profile">
        <div className="ring-success ring-offset-base-300 w-12 h-12 ms-10 me-2 rounded-full ring ring-offset-2">
          <img className='rounded-full' src={userData.profileImage} />
        </div>
                </Link>
          </div>
    </div>
      </div>





      </>
    )
  }

  export default Navbar











