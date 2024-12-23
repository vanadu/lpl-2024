import React from 'react'
import { useState, useRef, useEffect, useContext } from 'react'
import {usePathname} from 'next/navigation'
import {useRouter} from 'next/router'
import IconBar  from './IconBar'


import Link from 'next/link'
// import Navlink from 'next/link'
import Image from 'next/image'

// !VA Icons
import { FaHome } from 'react-icons/fa'
import { FaChevronRight } from "react-icons/fa";
// import { FaAnglesRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

import * as styles from '../styles/Header.module.scss'
const MainNav = ( ) => {
  
  /* !VA  2024 Removing any residuals from the 2023 version navbar, including anything related to highlighting the active item on the menu, i.e. highlighting menu item corresponding to the currently displayed page. It never worked right anyway and with the new modern menu design it's not even necessary. Doesn't work on mobile anyway because it's not relevant for a hamburger menu. Old news. The last commit that had all that stuff was '55c87f9 Social page formatting all devices', in case you need to find it. */

  const [isChecked, setChecked ] = useState(false)
  const checkRef = useRef(null)


  // !VA When a menu item is clicked, close the mobile menu
  const handleClick = (e) => {
    console.log('HERE');
    // !VA If the hamburger menu is checked, ie. the mobile menu is open, clicking on a menu item in the menu will uncheck the menu and go to the clicked link target.
    isChecked ? setChecked(false) : null;
  }
  

  // !VA onChange is fired when the checked status of the input changes.
  const onChangeEvent=(e)=> {
    setChecked(e.target.checked)
  }
  
  return (
    <>
      {/* !VA This is the parent container for the ul containing the individual menu items */}
      <div className={styles.nav_menu}>

        {/* Mobile Menu Background Semicircle: https://codepen.io/xram/pen/DjbWbb  */}
        <div className={[styles.mobile_menu_bg, styles.mobile_menu_bg_top, styles.mobile_menu_bg_bottom].join(' ')}>
          &nbsp;
        </div>

        
        {/* When the input is clicked, fire onChangeEvent and toggle the input's checked status  */}
        <input className={styles.checkbox} type="checkbox" checked={isChecked} onChange= {(e) => onChangeEvent(e)} ref={checkRef} />
        {/* This is the first line in the burger or the slash in the X */}
        <span className={styles.menu_span}></span>
        {/* This is the first line in the burger and has nothing in the */}
        <span className={styles.menu_span}></span>
        {/* This is the third line in the burger or the backslash line in the X */}
        <span className={styles.menu_span}></span>

        {/* !VA Tjos is the parent container for the actual individual menu items. Eventually this should move to a separate container, i.e. MainNavItems.js */}
        <ul 
        // className={styles.nav_main_list}
        className={styles.nav_menu_items}
        >

          {/* VA! 2024 removing the home icon and using the word Home */}
  
          <li
            className={styles.nav_main_list_item}
            // ref={homeRef}
            >
            <Link
              href='/'
              // className={[styles.nav_text].join(' ')}   
              onClick = {handleClick}             
              >
              Home
            </Link>
          </li>
          <li
            className={styles.nav_main_list_item}
            // ref={ref}
            >
            <Link
              href='/whystent'
              // className={[styles.nav_text].join(' ')}   
              onClick = {handleClick}             
              >
              Why Stent?
            </Link>
          </li>
          <li 
            className={styles.nav_main_list_item}
            // ref={ref}
            >
            <Link
              // key={item.text}
              href='/stories'
              // className={[styles.nav_text, ' active'].join('')}
              // className={[styles.nav_text].join('')}
              onClick = {handleClick}
              >Stories
            </Link>
          </li>
          <li 
            className={styles.nav_main_list_item}
            // ref={ref}
            >
            <Link
              // key={item.text}
              href='/blog'
              // className={[styles.nav_text, ' active'].join('')}
              // className={[styles.nav_text].join('')}
              onClick = {handleClick}
              >News
            </Link>
          </li>
          <li 
            key='dvms'
            className={styles.nav_main_list_item}
            >
            <Link
              href='/allabout'
              // className={[styles.nav_text].join(' ')}
              onClick = {handleClick}
              >
              Lar Par Guide
                <FaChevronRight 
                className={styles.nav_dropdown_icon}
                />
            </Link>
          </li>
          <li className={styles.icon_bar_menu_item}>
            <IconBar/>
          </li>
        </ul>

      </div>
    </>
  )
}

export default MainNav