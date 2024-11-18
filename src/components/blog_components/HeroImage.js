import React from 'react'
import Image from 'next/image'

const HeroImage = ({ src, alt }) => {
  return (
    <div className='post-hero'>
      <Image 
        src={src} 
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className='post-hero-image' alt="LarParLife.com" 
      />
    </div>
  )
}

export default HeroImage