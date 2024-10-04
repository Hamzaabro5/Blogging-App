import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase/firebasemethods'
import { getAllData } from '../Firebase/firebasemethods'

const Home = () => {
  const [alldata, setData] = useState([])

  useEffect(() => {
    onAuthStateChanged(auth, async () => {
        let getBlogsFromDb = await getAllData("blogs")
        setData([...getBlogsFromDb])
        console.log(getBlogsFromDb);
    })
  }, [])



  return (
    <>
     <div className='bg-white'>
     <h1 className='text-7xl text-center my-10 font-black mb-14 tracking-wider text-error'>All Blogs</h1>
        {alldata.length > 0 ? alldata.map((item, index) => {
                return <div key={index} className="card m-5 p-5 border overflow-hidden">
          <div class="avatar mb-5">
                <div class="w-10 rounded-full">
                  <img src="https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png" />
                </div>
              </div>
            <h1 className='text-4xl font-bold'> {item.title}</h1>
            <p className='mt-3 truncate text-xl'>{item.description}</p>
            <div className='mt-5'>
            <button className='btn btn-sm btn-accent btn-outline'>View all from this user</button>
            </div>
          </div>
        }) : <div className="flex w-full flex-col gap-4 mt-5">
        <div className="skeleton h-72 w-full"></div>
        <div className="skeleton h-14 w-28"></div>
        <div className="skeleton h-14 w-full"></div>
        <div className="skeleton h-14 w-full"></div>
      </div> 
      }
      </div>
    </>
  )
}

export default Home
