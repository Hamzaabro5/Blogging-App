import { onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { auth } from '../Firebase/firebasemethods';

function Profile() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      // ...
    } else {
      // alert(`You are not logged in Please logged in first to access Profile.`)
      window.location = `./login`
    }
  });

  return (
    <>
    <h1 className='text-7xl font-bold text-center mt-5 mb-10 tracking-wider'>Profile</h1>
    <div className='bg-red-50 py-10'>
      {/* <img src="https://firebasestorage.googleapis.com/v0/b/blogging-app-61c5a.appspot.com/o/hamzaabro%40gmail.com?alt=media&token=705e1292-7395-4789-b125-c3a4f9897bac" width="300px" alt="" /> */}
    </div>
    </>
  )
}

export default Profile