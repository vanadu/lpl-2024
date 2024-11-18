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
    <div className={styles.header}>
            {/* HeaderBricks  */}
            <div className={styles.bricks_container}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 1, delay: 1 }}
              >

                <div className={styles.bricks_slider}>
                  <div className={styles.bricks}>
                        
                    <HeaderBrick src={HeaderBrick01} className={styles.brick_img} alt="Senior Boxer Dog" />
                    <HeaderBrick src={HeaderBrick02} className={styles.brick_img} alt="Senior Mixed Breed Dog" />
                    <HeaderBrick src={HeaderBrick03} className={styles.brick_img} alt="Senior Retriever Mix Dog" />
                    <HeaderBrick src={HeaderBrick04} className={styles.brick_img} alt="Senior Golden Retriever Dog" />
                    <HeaderBrick src={HeaderBrick05} className={styles.brick_img} alt="Senior Lab Mix Dog" />
                    <HeaderBrick src={HeaderBrick06} className={styles.brick_img} alt="Senior Weimeraner Dog" />
                    <HeaderBrick src={HeaderBrick07} className={styles.brick_img} alt="Senior White Mixed Breed Dog " />
                    <HeaderBrick src={HeaderBrick08} className={styles.brick_img} alt="Senior Labrador Mix Dog" />
                    {/* Unique bricks */}
                    <HeaderBrick src={HeaderBrick09} className={styles.brick_img} alt="Senior Great Dane Dog" />
                    <HeaderBrick src={HeaderBrick10} className={styles.brick_img} alt="Senior Mixed Breed Dog" />
                    <HeaderBrick src={HeaderBrick11} className={styles.brick_img} alt="Senior Black Lab Dog" />
                    <HeaderBrick src={HeaderBrick12} className={styles.brick_img} alt="Senior Golden Retriever Dog" />
                    
                  </div>
                </div>

              </motion.div>
            </div>

      <div className={styles.header_content}>
        <div className={styles.logo}>
          <Link 
            href='/'
            aria-label='Go to Home page'
            >
            <Image 
              src={logo} 
              // width="0"
              // height="0"
              // sizes="100vw"
              // style={{ width: '100%', height: 'auto' }}
              className={styles.logo_img}
              alt="LarPar Life Logo" 
            />
          </Link>
          {/* VA! 2024 */}
          <div className={styles.slug}>
            <p>The21st Century Guide To Laryngeal Paralysis in Dogs
            </p>
          </div>
        </div>

        <div className={styles.icon_bar}>
          <IconBar />
        </div>
      </div>
      {/* VA! The container is in the NavBar component, along with the context provider, which needs the container to work. It's not ideal that the NavBar component has no direct parent here but I guess it doesn't need one. */}
      <NavBar />
    </div>
  )
}

export default Header