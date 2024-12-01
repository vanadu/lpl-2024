import React from 'react'
import Link from 'next/link'
// !VA React Icons
import { LuArrowUpWideNarrow } from "react-icons/lu";
import { MdReadMore } from "react-icons/md";


// !VA Style modules
import * as styles from '../styles/Light.module.scss'

const GuideNav = () => {
  return (
    <>

<div className={styles.guide_nav}>
        <div className={styles.guide_nav_items}>
          <Link href='/allabout'>
            <div className={styles.guide_nav_item}>
                <LuArrowUpWideNarrow 
                  className={styles.guide_nav_items_icon}
                />
                <span className='mobile-hide-inline'>Lar Par Guide</span> All Topics
            </div>
          </Link>
          <Link href='/patients/treatment/stent' className='link-dark'>
            <div className={styles.guide_nav_item}>
                <span className='mobile-hide-inline'>Learn</span>About Stents
                <MdReadMore
                  className={styles.guide_nav_items_icon}
                />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default GuideNav