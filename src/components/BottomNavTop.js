import React from 'react'
// import Link from 'next/link'
// import {useRouter}from 'next/router'
import { useState, useEffect } from 'react'

// !VA React Icons
import { MdVerticalAlignTop } from 'react-icons/md'


const BottomNavTop = () => {

  // !VA IMPORTANT: I couldn't figure out how to get this to scroll on iOS on the first tap. It requires two taps, but ONLY for window.scrollTo. Create any other function and it works on the first tap. But it iOS just does not recognize the first tap on these BottomNav functions. 
  const scrollTop = ( ) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
     <div
        id="go-to-top"
        className="go-to-top half-circle"
        onClick={scrollTop}
        >
        <div className="bottom-nav-content">
          <div className="bottom-nav-icon">
            <MdVerticalAlignTop className='bottom-nav-icon-svg'/>
          </div>
          <div className="mobile-hide bottom-nav-text">
            Top
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomNavTop