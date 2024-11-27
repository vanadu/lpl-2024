import React, { useState, useRef, useEffect } from 'react'
import BottomNavTop from './BottomNavTop'
import BottomNavBack from './BottomNavBack'
import BottomNavMenu from './BottomNavMenu'

const BottomNav = () => {
  
  /* !VA   */
  let windowHeight = null;
  let windowSize = null;

  const [stickyClass, setStickyClass] = useState('');
  const navRef = useRef(null)

  const stickNavbar = () => {
    if (window !== undefined) {
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  return (
    <>
      <div className={`bottom-nav ${stickyClass}`} ref={navRef}>
        <div className="bottom-nav-items">
          {/* <BottomNavBack /> */}
          <BottomNavTop />
          {/* <BottomNavMenu /> */}
        </div>
      </div>
    </>
  )
}

export default BottomNav