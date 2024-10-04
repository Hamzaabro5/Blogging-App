import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from '../Firebase/firebasemethods';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [data, Setdata] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
              const uid = user.uid
                    const q = query(collection(db, "users"), where("id", "==", user.uid));
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        console.log(doc.data());
                        Setdata(doc.data())
                    });
                    console.log(user);
            } else {
            // alert('User not found | Please Login First');
            navigate(`/login`)
            }
        })
    }, [])

    return (
        <>
                <h1 className='text-center text-5xl my-5 font-bold'>My Profile</h1>
            <section className="text-gray-600 body-font container mx-auto p-2"> 
                <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col" bis_skin_checked={1}>
                    <h1 className="title-font sm:text-5xl text-2xl mb-4 font-medium text-gray-900">Full Name: <span>{data.fullName}</span></h1>
                    <h1 className="title-font sm:text-5xl text-2xl my-4 font-medium text-gray-900">Email: <span>{data.email}</span></h1>
                    <img className="lg:w-2/6 md:w-3/6 w-3/6 mb-10 object-cover object-center rounded-lg border-l-pink-900 mt-5" alt="profile_image" src={data.profileImage}/>
                </div>
            </section>


        </>
    )
}

export default Profile