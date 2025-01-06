import { useRouter } from 'next/navigation'
import React from 'react'

const ProfileCard = ({resim, isim}) => {
  let router = useRouter()
  return (
    // tıklanınca movies yoluyla movies in page ine git
    <div className="w-44 mx-auto cursor-pointer group"
      onClick={()=>router.push("/movies")}
    >

      <div className="w-44 h-44 rounded-md border-2 border-transparent group-hover:border-white overflow-hidden ">
        <img src={resim} alt="profile" className='w-max h-max object-contain'/>
      </div>

      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white ">
        <h2>{isim}</h2>
      </div>

    </div>
  )
}

export default ProfileCard