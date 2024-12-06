import React from 'react'
import {useState, useEffect} from 'react'
import Link from 'next/link'
// !VA React Icons
import { LuArrowUpWideNarrow } from "react-icons/lu";
import { MdReadMore } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineGridView } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";

// !VA 2024
import { GuidenavContext } from '@/components/Contexts'

// !VA Style modules
import * as styles from '../styles/Light.module.scss'

const GuideNav = ({ item, link }) => {


  useEffect(() => {

    if (link === null) {
      console.log('LINK IS NULL');
    } else {
      console.log('link', link)
    }

  });




  return (
    <>
        <div className={styles.guide_nav}>
          {/* <p>{link}</p> */}
          <div className={styles.guide_nav_items}>
            <Link href='/allabout'>
              <div className={styles.guide_nav_item}>
                <CiGrid41
                  className={styles.guide_nav_items_icon}
                />
                &nbsp;All Topics
              </div>
            </Link>
            { link !== null ? 
            <Link href={link}>
              <div className={styles.guide_nav_item}>
                {item}
                <MdReadMore
                  className={styles.guide_nav_items_icon}
                />
              </div>
            </Link> 
            : 
            <div className={styles.guide_nav_item}>
              {item}
            </div>
          }
          </div>
        </div>
    </>
  )
}

export default GuideNav