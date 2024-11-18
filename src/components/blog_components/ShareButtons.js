import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'



const ShareButtons = () => {
  return (
    <div className='post-sharebar'>
        <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" className='post-sharebar-item' target="_blank">
          <FaFacebookSquare className='post-sharebar-item-icon'  />
          Share LarParLife On Facebook
        </a>
    </div>
  )
}

export default ShareButtons