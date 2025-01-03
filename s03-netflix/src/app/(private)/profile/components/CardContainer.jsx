import React from 'react'
import ProfileCard from './ProfileCard'

const profilResim = [
  "/images/default-blue.png",
  "/images/default-red.png",
  "/images/default-slate.png",
  "/images/default-green.png"
]

const CardContainer = () => {
  return (
    // ProfileCard
    <div>
      {
        profilResim.map((resim, index)=>(
          <ProfileCard key={index}
            resim={resim}
            isim={`Guest-${index+1}`}
          />
        ))
      }
    </div>
  )
}

export default CardContainer