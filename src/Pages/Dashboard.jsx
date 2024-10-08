import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { auth, getData, sendData } from '../Firebase/firebasemethods'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const [blogs, setBlogs] = useState([])
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()


  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      const blogsData = await getData("blogs", user.uid)
        setBlogs([...blogsData])
        console.log(user);
        
    } else {
      navigate(`/login`)
    }
  });

  const sendDatatoFirestore = async (data) => {
    console.log(data)
    setLoading(true)
    try {
      const response = await sendData({
        title: data.title,
        description: data.description,
        uid: auth.currentUser.uid,
      }, 'blogs')
      reset()
      setTimeout(() => {
        window.location.reload()
      }, 1000);
      blogs.push({
        title: data.title,
        description: data.description,
        uid: auth.currentUser.uid,
      })
      setBlogs([...blogs])
      console.log(response);
      alert(`Published!`)

    } catch (error) {
      console.error(error)
    }
  }
 
  
  return (
    <>

    <div className='text-center bg-base-200 py-14 mt-5 mx-auto rounded-3xl'>
      <h1 className='text-6xl font-black mb-10 tracking-wider text-error'>DashBoard</h1>
      <form onSubmit={handleSubmit(sendDatatoFirestore)} className='m-5'>
      <input className=' input input-bordered input-md input-primary w-full max-w-xs text-xl' type="text" placeholder='Blogs Title' {...register("title", { required: true })} /> <br />
        {errors.title && <span className='text-error font-bold'>This field is required*</span>}
        <br />
        <textarea className='textarea textarea-bordered textarea-primary w-full max-w-xs mt-5 text-lg' cols='25' rows=' 5' placeholder='Blogs Description' {...register("description", { required: true })} ></textarea> <br />
        {errors.description && <span className='text-error font-bold'>This field is required*</span>}<br /><br />
        { loading ? (
      <h1 className="loading loading-lg text-center btn btn-info btn-outline mt-5 text-lg"></h1>
    )
    :
    ( <button className='btn btn-info btn-outline mt-5 text-lg' type='submit'>Publish Blog</button>)}
      </form>
    </div>


    <h1 className='text-center font-black my-10 text-5xl text-error underline tracking-wider'>My Blogs</h1>
      <div>
        {blogs.length > 0 ? blogs.map((item, index) => {
          return <div key={index} className="card m-5 p-5 border overflow-hidden">
              <div className="avatar mb-5">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            <h1 className='text-4xl font-bold'> {item.title}</h1>
            <p className='mt-3 truncate text-xl'>{item.description}</p>
            <div className='mt-5'>
            <button className='btn btn-sm btn-accent btn-outline'>View More</button>
            </div>
          </div>
        }) : <h1 className='text-3xl pt-10 font-bold'>No blogs are availible at a time.</h1>}
      </div>
    </>
  )
}

export default Dashboard