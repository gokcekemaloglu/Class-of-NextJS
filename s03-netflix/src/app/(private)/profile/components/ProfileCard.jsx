import React from 'react'

const ProfileCard = ({resim, isim}) => {
  return (
    <div>
    
      <div>
        <img src={resim} alt="resim" />
      </div>

      <div>
        <h2>{isim}</h2>
      </div>

    </div>
  )
}

export default ProfileCard