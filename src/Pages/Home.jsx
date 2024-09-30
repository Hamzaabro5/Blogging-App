import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase/firebasemethods'
import { getAllData } from '../Firebase/firebasemethods'
import Navbar from '../components/Navbar'

const Home = () => {
  const [alldata, setData] = useState([])

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('user login ha')
        let getBlogsFromDb = await getAllData("blogs")
        setData([...getBlogsFromDb])
        console.log(getBlogsFromDb);
      }
    })
  }, [])



  return (
    <>
     <div>
        {alldata.length > 0 ? alldata.map((item, index) => {
          return <div key={index} className="card m-5 p-5 border overflow-hidden">
            <h1 className='text-4xl font-bold'> {item.title}</h1>
            <p className='mt-5 truncate'>{item.description}</p>
            <div className='mt-5'>
            <button className='btn btn-sm btn-accent btn-outline'>View all from this user</button>
            </div>
          </div>
        }) :<div className="flex w-full flex-col gap-4 mt-5">
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