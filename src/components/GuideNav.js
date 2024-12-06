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
          {/* About item */}
          <div className={styles.dropdown_content}>
            <i className={styles.db3} tabindex="1"></i>
            <div className={styles.guide_menu_item_block}>
              <Link href='/patients' 
                className={styles.mi}>
                <h2 className={styles.guide_menu_item_text}>About LarPar</h2>
              </Link>
              <h3 className={styles.guide_menu_item_subtext}>Everything you need to know about laryngeal paralysis & GOLPP in dogs</h3>
            </div>
            {/* Treatment item */}
            <div className={styles.guide_menu_item_block}>
              <Link href='/patients/treatment' 
                className={styles.mi}>
                <h2 className={styles.guide_menu_item_text}>Treatment Options</h2>
              </Link>
              <h3 className={styles.guide_menu_item_subtext}>Treatment options for laryngeal paralysis & GOLPP</h3>
            </div>
            {/* Research and Info item */}
            <div className={styles.guide_menu_item_block}>
              <Link href='/patients/links' 
                className={styles.mi}>
                <h2 className={styles.guide_menu_item_text}>Research &amp; Info</h2>
              </Link>
              <h3 className={styles.guide_menu_item_subtext}>Links to research and veterinary websites</h3>
            </div>
            {/* DVMs item */}
            <div className={styles.guide_menu_item_block}>
              <Link href='/dvms' 
                className={styles.mi}>
                <h2 className={styles.guide_menu_item_text}>Stent Info for DVMs</h2>
              </Link>
              <h3 className={styles.guide_menu_item_subtext}>Information for DVMs about the stent procedure for Lar Par</h3>
            </div>
            {/* News and Notes item */}
            <div className={styles.guide_menu_item_block}>
              <Link href='/blog' 
                className={styles.mi}>
                <h2 className={styles.guide_menu_item_text}>Lar Par News &amp; Notes</h2>
              </Link>
              <h3 className={styles.guide_menu_item_subtext}>News and information from the world of laryngeal paralysis in dogs</h3>
            </div>
            {/* Contact & Community */}
            <div className={styles.guide_menu_item_block}>
              <Link href='/blog' 
                className={styles.mi}>
                <h2 className={styles.guide_menu_item_text}>Contact &amp; Community</h2>
              </Link>
              <h3 className={styles.guide_menu_item_subtext}>Ways to contact us and join the international Lar Par community</h3>
            </div>

          </div>
        </div>


      </div>
    </>
  )
}

export default GuideNav