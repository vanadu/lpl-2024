import React from 'react'
import { useState, useRef, useEffect, useContext } from 'react'
import { SitenavContext} from './NavBar'
import {usePathname} from 'next/navigation'
import {useRouter} from 'next/router'
import IconBar  from './IconBar'


import Link from 'next/link'
// import Navlink from 'next/link'
import Image from 'next/image'

// !VA Icons
import { FaHome } from 'react-icons/fa'
import { FaChevronDown } from "react-icons/fa";

import * as styles from '../styles/Header.module.scss'

const MainNav = () => {

  // !VA 2024 removing...no workie
  // const [mainIsActive, setMainIsActive ] = useState(true)
  // const [mainHasActive, setMainHasActive ] = useState(false)
  const [isChecked, setChecked ] = useState(false)
  const checkRef = useRef(null)
  const homeRef = useRef(null)

  // !VA 2024 removing...no workie
  const mainRef = useRef()
  // VA! 2024 homeRef is deprecated because the Home button is no more
    // !VA 2024 removing...no workie. IO'm not sure whether this is what broke the whole thing...
  // !VA 2024 removing...no workie
  // const pathname = usePathname()
  // const router = useRouter()
  // const [shown, setShown] = useContext(SitenavContext);
  

  // !VA When a menu item is clicked, close the mobile menu
  const handleClick = (e) => {
    console.log('HERE');
    // !VA If the hamburger menu is checked, ie. the mobile menu is open, clicking on a menu item in the menu will uncheck the menu and go to the clicked link target.
    isChecked ? setChecked(false) : null;

    // !VA Handle add/remove active class for the clicked elements
    // !VA 2024 THe Home button is no more, so just reset the main menu items 
    // !VA If the home button is clicked
    // if (e.target === homeRef.current) {
      // !VA Add the active class to the Home button
      // e.target.classList.add('active')
    // !VA If a menu item is clicked
    // } else {
      // !VA Remove the  active class from the Home button
      // homeRef.current.classList.remove('active')
    // }
    // !VA Now reset all the menu items to inactive and make the current click target active
    // resetMainMenu(e);
  }
  // !VA Function to reset the main menu and make the current click target active
  const resetMainMenu = (e) => {
    const mainNavItems = Object.values(mainRef.current.children)
    mainNavItems.forEach(el => {
      el.firstChild.classList.remove('active');
    });
    e.target.classList.add('active');
  }

  // !VA onChange is fired when the checked status of the input changes.
  const onChangeEvent=(e)=> {
    setChecked(e.target.checked)
  }
  
  return (
    <>

        <div className={styles.nav_menu}>
          {/* When the input is clicked, fire onChangeEvent and toggle the input's checked status  */}
          <input className={styles.checkbox} type="checkbox" checked={isChecked} onChange= {(e) => onChangeEvent(e)} ref={checkRef} />
          {/* This is the first line in the burger or the slash in the X */}
          <span className={styles.menu_span}></span>
          {/* This is the first line in the burger and has nothing in the */}
          <span className={styles.menu_span}></span>
          {/* This is the third line in the burger or the backslash line in the X */}
          <span className={styles.menu_span}></span>


          <ul 
          // className={styles.nav_main_list}
          className={styles.nav_menu_items}
          ref={mainRef}
          >

            {/* VA! 2024 removing the home icon, the logo works for the home link */}
            {/* <li>
              <Link
                href='/'
                // className={[styles.nav_main_home_icon].join(' ')}
                className={styles.nav_main_home_icon}
                // ref={homeRef}
                onClick = {handleClick}
                aria-label = 'Go to Home page'
                >
                <FaHome />
              </Link>
            </li> */}
            <li
              className={styles.nav_main_list_item}
              ref={homeRef}
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
                Main Menu
                  <FaChevronDown 
                  className={styles.nav_dropdown_icon}
                  />
              </Link>
            </li>
            <li className={styles.blob}>
              <IconBar />
            </li>
          </ul>

        </div>
    </>
  )
}

export default MainNav