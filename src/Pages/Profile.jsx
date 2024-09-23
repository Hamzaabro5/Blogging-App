import { onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { auth } from '../Firebase/firebasemethods';

function Profile() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      // ...
    } else {
      alert(`You are not logged in Please logged in first to access Profile.`)
      window.location = `./login`
    }
  });
  return (
    <>
    <h1 className='text-6xl font-bold text-center mt-2'>Profile</h1>
    </>
  )
}

export default Profile