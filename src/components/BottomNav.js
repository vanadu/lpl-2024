import React, { useState, useEffect } from 'react'
import BottomNavTop from './BottomNavTop'
import BottomNavBack from './BottomNavBack'
import BottomNavMenu from './BottomNavMenu'

const BottomNav = () => {

  const [stickyClass, setStickyClass] = useState('');

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
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
      <div className={`bottom-nav ${stickyClass}`}>
        <div className="bottom-nav-items">
          <BottomNavBack />
          <BottomNavTop />
          <BottomNavMenu />
        </div>
      </div>
    </>
  )
}

export default BottomNav