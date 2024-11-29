import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import * as styles from '../../styles/Blog.module.scss'


const PostListing = ({post}) => {
  // console.log('post :>> ');
  // console.log(post);
  return (
    <>
      <div className={styles.post_listing}>
        <Link href={`/blog/${post.slug}`} className={styles.post_listing_link} passHref>
          {/* <h2 className={styles.post_listing_topic}>{post.frontmatter.topic}</h2> */}
          <div className={styles.post_listing_content}>
            {/* !VA 2024 removed 'Topic' header and the 'posted on'...wasted space */}
            {/* <p className={styles.post_listing_topic}>Topic: {post.frontmatter.topic}</p> */}
            {/* <p className={styles.post_listing_date}>Posted on: {post.frontmatter.date}</p> */}
            <p className={styles.post_listing_date}>{post.frontmatter.date}</p>
            {/* !VA 2024 We don't need the image in the listing */}
            {/* <figure className={styles.post_listing_figure}>
              <Image 
                src={post.frontmatter.cover_image} 
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className={styles.post_listing_figure_image} alt="Lar Par Life Blog Feature Image" />
            </figure> */}
            <h3 className={styles.post_listing_title}>{post.frontmatter.title}</h3>
            <p className={styles.post_listing_excerpt}>
              {post.frontmatter.excerpt}
            </p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default PostListing