import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import IconBar from './IconBar'
import NavBar from './NavBar'
import logo from '../../public/img-lpl-logo.png'
import * as styles from '../styles/Header.module.scss'


/* !VA  2024.04.08 useHeaderBricks_01
  * copied /bricks into /public
  * copied HeaderBrick.js into /components
  * Commented out div.header_img_box
  * import HeaderBrick from ../components
  * import all HeaderBrick images
  * install motion.div
  * import { motion }
  * Copy CBE CSS: bricks_container, bricks_slider, bricks, brick_img
  * Copy webp brick images into /public/bricks
  * Remove old header img and code 

*/

import { motion } from 'framer-motion'

import HeaderBrick from '../components/HeaderBrick'
import HeaderBrick01 from '../../public/bricks/img-brick-01.webp'
import HeaderBrick02 from '../../public/bricks/img-brick-02.webp'
import HeaderBrick03 from '../../public/bricks/img-brick-03.webp'
import HeaderBrick04 from '../../public/bricks/img-brick-04.webp'
import HeaderBrick05 from '../../public/bricks/img-brick-05.webp'
import HeaderBrick06 from '../../public/bricks/img-brick-06.webp'
import HeaderBrick07 from '../../public/bricks/img-brick-07.webp'
import HeaderBrick08 from '../../public/bricks/img-brick-08.webp'
import HeaderBrick09 from '../../public/bricks/img-brick-09.webp'
import HeaderBrick10 from '../../public/bricks/img-brick-10.webp'
import HeaderBrick11 from '../../public/bricks/img-brick-11.webp'
import HeaderBrick12 from '../../public/bricks/img-brick-12.webp'
// import Placeholder from '../../public/bricks/placeholder'
// import Placeholder from '../../public/bricks/placeholder'




const Header = () => {
  return (
    <>
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image 
          src={logo} 
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className={styles.logo_img} alt="LarParLife Logo" 
        />
      </div>
      
      <div className={styles.nav_container}>


        <div className={styles.nav_menu}>
          {/* <!--<h3 class="title">BLOOM</h3>--> */}
          <input className={styles.checkbox} type="checkbox" />
          {/* This is the first line in the burger or the slash in the X */}
          <span className={styles.menu_span}></span>
          {/* This is the first line in the burger and has nothing in the */}
          <span className={styles.menu_span}></span>
          {/* This is the third line in the burger or the backslash line in the X */}
          <span className={styles.menu_span}></span>
          <ul className={styles.nav_menu_items}>
              <li><a href="#" className={styles.menu_link}>Home</a></li>

              <li><a href="#" className={styles.menu_link}>About</a></li>

              <li><a href="#" className={styles.menu_link}>Blog</a></li>

              <li><a href="#" className={styles.menu_link}>Contact Us</a></li>
          </ul>
        </div>
      </div>



    </div>
    </>
  )
}

export default Header