import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { MDXProvider } from '@mdx-js/react'
// !VA We don't need serialize here, it's in [slug].js and is only use in getStaticProps
// import { serialize } from 'next-mdx-remote/serialize'
// !VA Next packages
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'

import { FaFacebookSquare } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'
// !VA Custom Components
import ButtonBackToPostListing from './ButtonBackToPostListing'
import ButtonNextPost from './ButtonNextPost'
import HeroImage from './HeroImage'
import ShareButtons from './ShareButtons'
import Youtube from '../Youtube'
// import Pic from '../../../public/img-abtvet-stents.jpg'
import Disclaimer from './Disclaimer'

// !VA Style module
import * as styles from '../../styles/Blog.module.scss'

// const components = { Image, HeroImage, Disclaimer };
// !VA You don't have to include native Next components in the components object, just custom components
const components = { HeroImage, Disclaimer, Youtube, ShareButtons, Link };

const Post = ({ serializedContent }) => {
 
  const { frontmatter } = serializedContent
  const meta_title = `${frontmatter.meta_title}`
  const meta_description = `${frontmatter.meta_description}`
  const meta_canonical = `${frontmatter.meta_canonical}`
  return (
    <MDXProvider components={{ 
      HeroImage,
      Disclaimer,
      Youtube,
      ShareButtons,
      Link

    }}>

      <NextSeo 
        title={`${meta_title}`}
        description={`${meta_description}`}
        canonical={`${meta_canonical}`}
        />
      <div className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.post_content}>
            <div className={styles.post_nav}>
              {/* <HeroImage src={Pic} /> */}
              <ButtonBackToPostListing />
              {/* <ButtonNextPost /> */}
            </div>
            {/* <NextPost /> */}
            <div className='post'>
              <MDXRemote {...serializedContent} components={components} />
            </div>
          </div>
        </div>
      </div>
    </MDXProvider>
  )
}

export default Post