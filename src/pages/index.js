import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'
// !VA Markdown Blog Imports
// !VA ---------------------
// !VA fs can't be imported into React. But next.js knows that in conjunction with getStaticProps the file system can be accessed.
import fs from 'fs'
// !VA We also need to use the path module to be able to navigate the local file system
import path from 'path'
import matter from 'gray-matter'
// import PostListing from '../components/blog_components/PostListing'
// !VA Icons
import { FaArrowCircleRight } from 'react-icons/fa'

import JoinUsIcon from '../../public/img-lpl-community.png'
import MissBHome from '../../public/img-miss-b-home.jpg'
import StentArgentineHome from '../../public/img-stent-argentine-home.webp'
import MockHeroVideo from '../../public/MOCK-hero-video.png'

// !VA Components
import Layout from '@/components/Layout'
import BottomNav from '../components/BottomNav'
// !VA Styles
import * as styles from '../styles/Home.module.scss'

const Home = ( {posts}) => {
  // !VA Log out the posts exported from the getStaticProps function below 
  const router = useRouter()

  


  return (
    <>
      <NextSeo 
        title="Lar Par: 21st Century Guide to Laryngeal Paralysis in Dogs"
        description="Love your dog? Learn all about laryngeal paralysis symptoms, surgery, stent and treatment alternatives."
        canonical="https://larparlife.com"
        />
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.hero_content}>
            <div className={styles.hero}>
              <div className={styles.hero_head}>
                <p className={styles.hero_head_heading}>
                    Lar Par?
                </p>
                <p className={styles.hero_head_emphasis}>
                  LIFE!
                </p>
              </div>
              <div className={styles.hero_video}>
                <Image 
                  src={MockHeroVideo} 
                  // width="0"
                  // height="0"
                  // sizes="100vw"
                  // style={{ width: '100%', height: 'auto' }}
                  className={styles.mock_hero_video} 
                  alt="Mock Hero Video" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.section_content}>


          <div className={styles.community_content}>



            <div className={styles.community}>
              <h2 className={styles.community_heading}>Feeling Overwhelmed?</h2>

              <figure className={styles.figure}>
                <Image 
                  src={JoinUsIcon} 
                  // width="0"
                  // height="0"
                  // sizes="100vw"
                  // style={{ width: '100%', height: 'auto' }}
                  className={styles.community_icon} 
                  alt="Join the Lar Par Community" 
                />
              </figure>
              <h3 className={styles.community_cta}>Join the Community!</h3>
              <div className={styles.community_text}>
                <p>Laryngeal Paralysis in dogs is hard to deal with. Sometimes you need to just talk about it with people who know what you&lsquo;re going through. That&lsquo;s where we can help by sharing experiences, giving support, and helpful info that only other Lar Par dog parents can provide.</p>
              </div>


            </div>


            {/* Container for the individual community question animations */}
            <div className={styles.community_questions}>
              {/* First scrolling animation  */}
              <div className={styles.marquee_wrapper1}>
                <div className={styles.marquee1}>
                  <p>
                  What is GOLPP? What are the side effects of surgery? What causes laryngeal paralysis? What&lsquo;s the difference between surgery and stent?Are there other kinds of surgery besides tieback? How much does tieback surgery cost?&nbsp;
                  </p>
                  <p>
                  What is GOLPP? What are the side effects of surgery? What causes laryngeal paralysis? What&lsquo;s the difference between surgery and stent?Are there other kinds of surgery besides tieback? How much does tieback surgery cost?&nbsp;
                  </p>
                </div>
              </div>
              {/* Second scrolling animation  */}
              <div className={styles.marquee_wrapper2}>
                <div className={styles.marquee2}>
                    <p>
                    How dangerous is aspiration pneumonia? What are the side effects of surgery? Which breeds does Lar Par affect? Where can I get up-to-date information about Lar Par? Why do I need a specialist diagnosis? What do I do in a breathing emergency?&nbsp;
                    </p>
                    <p>
                    How dangerous is aspiration pneumonia? What are the side effects of surgery? Which breeds does Lar Par affect? Where can I get up-to-date information about Lar Par? Why do I need a specialist diagnosis? What do I do in a breathing emergency?&nbsp;
                    </p>
                </div>
              </div>
              {/* Third scrolling animation  */}
              <div className={styles.marquee_wrapper3}>
                <div className={styles.marquee3}>
                  <p>
                    Is it bad for my Lar Par dog to get excited? Is prolonging life the best thing for my Lar Par dog? Why does my primary veterinarian advise against surgery? Has any dog every died from a stent implant? Is there a cure for Lar Par? Is the stent treatment available where I live?&nbsp;
                    </p>
                    <p>
                    Is it bad for my Lar Par dog to get excited? Is prolonging life the best thing for my Lar Par dog? Why does my primary veterinarian advise against surgery? Has any dog every died from a stent implant? Is there a cure for Lar Par? Is the stent treatment available where I live?&nbsp;
                    </p>
                </div>
              </div>
              {/* Fourth scrolling animation  */}
              <div className={styles.marquee_wrapper4}>
                <div className={styles.marquee4}>
                  <p>
                  What should I feed my Lar Par dog? What is BVEAP surgery? How long before my dog&lsquo;s Lar Par gets really bad? What&lsquo;s stridor? Are all surgeons equally skilled at tieback surgery? Can Lar Par dogs get aspiration pneumonia without surgery?&nbsp; 
                  </p>
                  <p>
                  What should I feed my Lar Par dog? What is BVEAP surgery? How long before my dog&lsquo;s Lar Par gets really bad? What&lsquo;s stridor? Are all surgeons equally skilled at tieback surgery? Can Lar Par dogs get aspiration pneumonia without surgery?&nbsp;
                  </p>
                </div>
              </div>
              {/* Fifth scrolling animation  */}
              <div className={styles.marquee_wrapper5}>
                <div className={styles.marquee5}>
                  <p>
                    Are there supplements that can help my Lar Par dog? How can I be sure my dog has Lar Par? Can accupuncture help with Lar Par? How much does the specialist diagnosis cost? Can a regular X-ray tell if my dog has Lar Par?&nbsp;
                  </p>
                  <p>
                    Are there supplements that can help my Lar Par dog? How can I be sure my dog has Lar Par? Can accupuncture help with Lar Par? How much does the specialist diagnosis cost? Can a regular X-ray tell if my dog has Lar Par?&nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.main}>
            {/* <h1 className={styles.content_head}>The 21st Century Guide to <span className="mobile-show-inline"><br /></span>Laryngeal Paralysis in Dogs</h1> */}
            <h2 className={styles.content_subhead}>Your Lar Par Dog&rsquo;s Best Friend</h2>
            <p className={styles.content_text}>Lar Par dogs&rsquo; best friends are the people who love them enough to make informed choices for them. This website is devoted to providing reliable, up-to-date information so that people can make the best decisions for their beloved canine companions who suffer from laryngeal paralysis.   </p>

            <h2 className={styles.content_subhead}>Lar Par: The Deadly Little Defect</h2>
            <figure className={styles.figure_small}>
              <Image 
                src={MissBHome} 
                // width="0"
                // height="0"
                // sizes="100vw"
                // style={{ width: '100%', height: 'auto' }}
                className={styles.figure_small_image} 
                alt="Miss B Haven" 
              />
              <figcaption className={styles.figure_small_caption}>Miss B Haven</figcaption>
            </figure>
            <p className={styles.content_text}> 
              With laryngeal paralysis, the larynx (the &lsquo;voicebox&rsquo; that dogs use to bark) stops working properly. The parts that are supposed to open and close to let air through 
              become paralyzed and flaccid, blocking the airway. It&lsquo;s a neurological defect &mdash; the nerves that control the muscles of the larynx stop working. Lar Par dogs can be otherwise perfectly healthy but because of this deadly little defect, they can&lsquo;t get enough air to sustain a quality life. That&lsquo;s the way it was with our black Lab Miss B, but we swore that when Miss B&rsquo;s time came, it wouldn&rsquo;t be for something as menial as that. To learn more about our battle to keep Miss B alive and breathing, go to <Link href="/stories" className="link" target="_blank">Miss B&rsquo;s Incredible Stent&&nbsp;Journey&nbsp;<FaArrowCircleRight className="read_more_svg"/></Link>
            </p>
            <h2 className={styles.content_subhead}>The Non-Surgical Alternative</h2>
            <p className={styles.content_text}> 
              You may have heard that the only veterinary procedure to treat dogs with <Link href='https://www.vet.cornell.edu/departments/riney-canine-health-center/canine-health-information/laryngeal-paralysis' className='link'>laryngeal paralysis (Lar Par)</Link> or <Link href='https://cvm.msu.edu/scs/research-initiatives/golpp/living-with-golpp' className='link'>GOLPP (geriatric-onset laryngeal paralysis and polyneuropathy) </Link> is <span className='bold italic'>expensive surgery with a risk of complications</span>. 
            </p> 

            <p className={styles.content_text}> 
              But there&rsquo;s another veterinary procedure&nbsp;&mdash; one that&rsquo;s kept dogs around the world breathing normally for years &mdash; and we want the whole world to know about it. 
            </p>

            <figure className={styles.figure_small}>
              <Image 
                src={StentArgentineHome} 
                // width="0"
                // height="0"
                // sizes="100vw"
                // style={{ width: '100%', height: 'auto' }}
                className={styles.figure_small_image} 
                alt="Silicone Laryngeal Stent" 
              />
              <figcaption className={styles.figure_small_caption}>Silicone Laryngeal Stent</figcaption>
            </figure>
            
            <p className={styles.content_text}>
              This procedure is called the <span className='italic'>laryngeal stent</span> &mdash; placing a stent prothesis in the larynx that allows the dog to breathe. <a href="https://medical-dictionary.thefreedictionary.com/stenting" className='link' target="_blank" rel="noreferrer noopener">Stenting</a> has been used in human medicine for decades and is often used in animals for other conditions.</p>

            <h2 className={styles.content_subhead}>
              Where To Go From Here
            </h2>
            <p className={styles.content_text}>
              If you&rsquo;ve noticed a change in your dog&rsquo;s breathing recently and want to know more about it, go to the&nbsp;
              <Link 
                href='/allabout' 
                className='link' 
                // This is unused, I put it in here to log the click event
                // onClick={ (e) => handleLink(e) }
                >
                Main Menu
                </Link> to see all the available topics.
            </p>
            <p className={styles.content_text}>
              Learn about 5 good reasons to love the stent procedure for canine laryngeal paralysis on the <Link href='/whystent' className='link'>Why Stent?</Link> page. 
            </p>

            <p className={styles.content_text}>
              To read the inspirational stories about the stent treatment for laryngeal paralysis in dogs, go to the  <Link href='/stories' className='link'>Stories</Link> pages.
            </p>
            <p className={styles.content_text}>
              If you&rsquo;re a DVM seeking research info and procedural details about the laryngeal stent implant for laryngeal paralysis, visit the <Link href='/dvms' className='link'>Info for DVMs</Link> section.
            </p>
            <p className={styles.content_text}>
              You can also find links to pertinent research and informational websites from respected institution on the <Link href="/patients/links" className='link'>Research Links and More Info</Link> page. You can explore a dog lover&lsquo;s perspective on Lar Par-related topics in the <Link href="/blog" className='link'>Lar Par Dog Blog</Link> section. 
            </p>
            <p className={styles.content_text}>
              Thank you for visiting LarParLife.com.  People want a more moderate treatment path for their beloved canine companions, a third way between surgery and deteriorating quality of life. It&rsquo;s time for this affordable, life-saving alternative to move into the mainstream of veterinary care.  
            </p>
          </div>
          </div>
      </section>
    </>
  )
}

export default Home

export async function getStaticProps() {
  // !VA use the fs module to get an array of the files in the posts folder
  const files = fs.readdirSync((path.join('src/posts')))
  // !VA When you log the files, it won't show in the browser, but will show in the terminal because this is server-side
  // !VA Get slug and front matter from posts array
  const posts = files.map(filename => {
    // !VA Create slug
    const slug = filename.replace('.md', '')
    // !VA Get frontmatter. readFileSync also comes from the fs module
    const markdownWithMeta = fs.readFileSync(path.join('src/posts', filename), 'utf-8')
    // !VA This logs out an object with the markdown including metadata, i.e. frontmatter to the terminal

    // !VA Now we wrap the post object in a matter object from the gray-matter package. Destructure out the data from the matter object and rename it 'frontmatter'. data is the metadata in the Markdown file.
    const { data:frontmatter} = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })

  // !VA Now, this logs out an array containing the slug and the frontmatter for each post to the terminal
  // !VA Now we're passing the posts object to the Home component via props
  return {
    props: {
      posts: posts,
    }
  }
}