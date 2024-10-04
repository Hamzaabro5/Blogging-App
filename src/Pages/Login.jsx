import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { loginUser } from '../Firebase/firebasemethods'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)

  const loginUserFromFirebase = async (data) => {
    try {
    setLoading(true)  
    const userLogin = await loginUser({
      email: data.email,
      password: data.password
    })
    console.log(data)

    console.log(userLogin)
    navigate('/')
     

    } catch (error) {
      reset()
    setTimeout(() => {
      window.location.reload()
    }, 1000);
      console.error(error)
      alert(`Incorrect Information`)
    }
  }
  return (
    <div className='text-center bg-base-200 py-20 mt-20 mx-auto rounded-3xl'>
      <h1 className='text-6xl font-black mb-14 tracking-wider text-error'>Login</h1>
      <form onSubmit={handleSubmit(loginUserFromFirebase)}>
        <input className='input input-bordered input-md input-primary w-full max-w-xs text-xl' type="email" placeholder='Email' {...register("email", { required: true })} /><br />
        {errors.email && <span className='text-error font-semibold'>This field is required</span>}
         <br />
        <input className='input input-bordered input-md input-primary w-full max-w-xs text-xl mt-5' type="password" placeholder='Password' {...register("password", { required: true })} /><br />
        {errors.password && <span className='text-error font-semibold'>This field is required</span>}
         <br />
         { loading ? (
      <h1 className="loading loading-lg text-center btn btn-success btn-outline text-lg"></h1>
    )
    :
    (<button className='btn btn-success btn-outline' type='submit'>Login</button>)}
      </form>
      <h1 className='font-bold text-xl mt-5'>Not a User? <Link to="/register" className="text-blue-700 underline">Register</Link></h1>
    </div>
  )
}

export default Login