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

const GuideNav = () => {

  return (
    <>
      <div className={styles.guide_nav}>

        <div className={styles.dropdown} tabindex="1">
          <i className={styles.db2} tabindex="1"></i>
          <a className={styles.dropbtn}>All Topics</a>
          <div className={styles.dropdown_content}>
            <i className={styles.db3} tabindex="1"></i>
            <div className={styles.blob}>
              <Link href='/patients' 
                // className={styles.mi}>
                className={[styles.mi, styles.patients].join(' ')}>
                <h2>About LarPar</h2>
              </Link>
              <h3>Costs &bull; Crash Course &bull; FAQs</h3>
            </div>
            <Link href='/patients/treatment' 
              className={styles.mi}>
              Treatment Options
            </Link>
            <Link href='/patients/links' 
              className={styles.mi}>
              Research &amp; Info
            </Link>
            <Link href='/dvms' 
              className={styles.mi}>
              Stent Info for DVMS
            </Link>
            <Link href='/blob' 
              className={styles.mi}>
              Lar Par News &amp; Notes 
            </Link>
            <Link href='/contact' 
              className={styles.mi}>
              Contact &amp; Community
            </Link>
          </div>
        </div>

        <div className={styles.navitem}>
          <Link 
            href='/' 
            className='link-dark'>
            Link
            <LuArrowUpWideNarrow />
          </Link>

        </div>

      </div>
    </>
  )
}

export default GuideNav