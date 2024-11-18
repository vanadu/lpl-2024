import React from 'react'
import Link from 'next/link'
import { FaArrowCircleLeft } from 'react-icons/fa'
// import * as styles from '../styles/Blog.module.scss'
import * as styles from '../../styles/Blog.module.scss'


const ButtonBackToPostListing = () => {
  return (
    <>
      <div className={styles.blog_nav_button}>
        <FaArrowCircleLeft className={styles.go_button_svg}/>
        <Link href='/blog' >&nbsp;Back To Post Listing</Link> 
      </div>
    </>
  )
}

export default ButtonBackToPostListing