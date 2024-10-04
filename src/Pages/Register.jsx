import React, { useRef, useState } from 'react'
import { signUpUser, uploadImage } from '../Firebase/firebasemethods'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Register = () => {
  const fullName = useRef()
  const email = useRef()
  const password = useRef()
  const profileImage = useRef()
  const {reset} = useForm()

  const navigate = useNavigate();
  const [loading , setLoading] = useState(false)

  const loginUserFromFirebase = async (event) => {
    setLoading(true)
    event.preventDefault()
    console.log(email.current.value)
    console.log(password.current.value)
    console.log(fullName.current.value)
    console.log(profileImage.current.files[0])
    const userProfileImageUrl = await uploadImage(profileImage.current.files[0], email.current.value)
    try {
      const userData = await signUpUser({
        email: email.current.value,
        password: password.current.value,
        fullName: fullName.current.value,
        profileImage: userProfileImageUrl
      })
      
      alert(`Welcome ${fullName.current.value}`)
      navigate(`/`)
      console.log(userData);

    } catch (error) {
      reset()
      setTimeout(() => {
        window.location.reload()
      }, 1000);
      console.error(error);
      alert(error)
    }
    

  }
  return (
    <div className='text-center bg-base-200 py-16 mt-20 mx-auto rounded-3xl'>
      <h1 className='text-6xl font-black mb-14 tracking-wider text-error'>Signup</h1>
      <form onSubmit={loginUserFromFirebase}>
        <input className='input input-bordered input-lg input-primary w-full max-w-xs' type="text" placeholder='Full Name' ref={fullName}/><br /><br />
        <input className='input input-bordered input-lg input-primary w-full max-w-xs' type="email" placeholder='Email Address' ref={email}/><br /><br />
        <input className='input input-bordered input-lg input-primary w-full max-w-xs' type="password" placeholder='Password' ref={password}/><br /><br />
        <input className="file-input file-input-bordered file-input-primary w-full max-w-xs" type="file" placeholder='enter your profile picture' ref={profileImage}/><br /><br />
        
        { loading ? (
      <h1 className="loading loading-lg text-center btn btn-success btn-outline text-lg"></h1>
    )
    :
    (<button className='btn btn-success btn-outline' type='submit'>Signup</button>)}

      </form>
      <h1 className='font-bold text-xl mt-5'>Already a User? <Link to="/login" className="text-blue-700 underline">Login</Link></h1>
    </div>
  )
}

export default Register