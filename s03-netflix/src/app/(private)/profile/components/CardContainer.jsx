"use client"
import React from 'react'
import ProfileCard from './ProfileCard'
import { useAuthContext } from '@/context/AuthContext'

const profilResim = [
  "/images/default-blue.png",
  "/images/default-red.png",
  "/images/default-slate.png",
  "/images/default-green.png"
]

const CardContainer = () => {
  // profil card da 4 resim basılacak, ilk resmin altına kullanıcı ismimiz gitsin dedik
  const {currentUser} = useAuthContext()
  return (
    
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
      {
        profilResim.map((resim, index)=>(
          <ProfileCard key={index}
            resim={resim}
            isim={ (index == 0 && currentUser) ? currentUser?.displayName : `Guest-${index+1}` }
          />
        ))
      }
    </div>
  )
}

export default CardContainer