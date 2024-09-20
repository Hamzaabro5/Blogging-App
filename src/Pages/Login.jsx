import React, { useRef } from 'react'
import { useForm } from "react-hook-form"
import { loginUser } from '../Firebase/firebasemethods'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const loginUserFromFirebase = async (data) => {
    console.log(data)
    try {
      const userLogin = await loginUser({
        email: data.email,
        password: data.password
      })
      console.log(userLogin)
      navigate('/')

    } catch (error) {
      console.error(error)
      alert(`User Not Found!`)
    }
  }
  return (
    <div className='text-center'>
      <h1 className='text-6xl font-bold mt-5 mb-24 tracking-wider'>Login</h1>
      <form onSubmit={handleSubmit(loginUserFromFirebase)}>
        <input className='input input-bordered input-md input-primary w-full max-w-xs text-xl' type="email" placeholder='Email' {...register("email", { required: true })} /><br />
        {errors.email && <span className='text-error font-semibold'>This field is required</span>}
         <br />
        <input className='input input-bordered input-md input-primary w-full max-w-xs text-xl mt-5' type="password" placeholder='Password' {...register("password", { required: true })} /><br />
        {errors.password && <span className='text-error font-semibold'>This field is required</span>}
         <br />
        <button className='btn btn-success btn-outline mt-3 text-lg' type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login