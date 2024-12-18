import Link from 'next/link'
import Image from 'next/image'
import LarParNewsIcon from '/public/icon-larpar-news.png'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'
import { FaYoutube } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { FaExclamationCircle } from 'react-icons/fa'
import { IoPawSharp } from 'react-icons/io5'
import { FaHome } from 'react-icons/fa'
import * as styles from '../styles/Header.module.scss'


const IconBar = () => {

  // !VA Commented out the Home, Stories, For Patients and For DVMs Links below 2023.09.24. 
  return (
    <>
      <div className={styles.icon_bar}>
        <div className={styles.icons}>

        {/* <Link
          href='/'
          className={styles.icon}>
          <FaHome />
        </Link> */}
        
        {/* 
        VA! 2024
        <Link 
          href='/blog'
          className={styles.icon} 
          aria-label='Visit Our Blog'
          >
          <Image src={LarParNewsIcon}
            alt="Lar Par Dog Blog" />
        </Link> */}
        <Link 
          href='https://www.youtube.com/channel/UCwHwkfSqDlO6MJejPrxzW0A'
          className={styles.icon} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Our Youtube channel">
          <FaYoutube />
        </Link>
        <Link 
          href='/social' 
          className={styles.icon} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Our Facebook Group">
          <FaFacebookF />
        </Link>
        <Link
          href='/contact'
          className={styles.icon} 
          aria-label="Contact Us"
          >
          <MdMail />
        </Link>


        </div>
      </div>
    </>
  )
}

export default IconBar
