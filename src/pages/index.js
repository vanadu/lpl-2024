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
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'
import { MdMail } from 'react-icons/md'
import { FaPaw } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'

import CommunityIcon from '../../public/img-lpl-community.png'
import MissBHome from '../../public/img-miss-b-home.jpg'
import StentArgentineHome from '../../public/img-stent-argentine-home.webp'
// !VA Components
import Layout from '@/components/Layout'
import BottomNav from '../components/BottomNav'
// !VA Styles
import * as styles from '../styles/Home.module.scss'

const Home = ( {posts}) => {
  // !VA Log out the posts exported from the getStaticProps function below 
  const router = useRouter()

  // !VA This is to get rid of the 'hydration error' that appears because the timer outputs a different time at on client vs server, or at least that's the way I understand it. Then, in the h4 contining the rendered timer, output it conditionally if hydrated = true
  // !VA https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  },[])

  const calculateTimeLeft = () => {
    let difference = +new Date() - new Date('09/09/2022');
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
      d: Math.floor(difference / (1000 * 60 * 60 * 24)),
      h: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2,0),
      m: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2,0),
      s: Math.floor((difference / 1000) % 60).toString().padStart(2,0),
      };
    }
    return timeLeft;
  } 

  const [ timeLeft, setTimeLeft ] = useState(calculateTimeLeft());

  // const handleLink = (e) => {
  //   console.log('handleLink running');
  //   console.log('router.pathname :>> ');
  //   console.log(router.pathname);
  // } 

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerAbbreviated = [];
  const timerFullWords = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerAbbreviated.push(
      <span>
        {timeLeft[interval]}{interval}{" "}
      </span>
    );
  });

  let output = '';
  Object.keys(timeLeft).forEach((interval) => {
    switch (true) {
      case interval === 'd':
        output = ' days'
        break;
      case interval === 'm':
        output = ' minutes and'
        break;
      case interval === 'h':
        output = ' hours'
        break;
      case interval === 's':
        output = ' seconds'
        break;
      default:
        break;
    }

    timerFullWords.push(
      <span>
        {timeLeft[interval]}{output}{" "}
      </span>
    );
  });

  return (
    <>
      <NextSeo 
        title="Lar Par: 21st Century Guide to Laryngeal Paralysis in Dogs"
        description="Love your dog? Learn all about laryngeal paralysis symptoms, surgery, stent and treatment alternatives."
        canonical="https://larparlife.com"
        />
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.two_column_content}>
            <div className={styles.hero}>
              <div className={styles.hero_head}>
                <p className={styles.hero_head_heading}>LarPar?<br /><span className={styles.font_massive}>Life!</span></p>

                {hydrated&& <p className={styles.hero_head_timer}>&ndash; {timerAbbreviated.length ? timerAbbreviated : null} &ndash;</p>}

              </div>
              <div className={styles.hero_video}>
                {/* You have to comment this out for dev if you're using Chrome because you get strange errors. It's a Vimeo problem */}
                <iframe className={styles.hero_video_frame} title="Do Laryngeal Stents for LarPar Work?" src="https://player.vimeo.com/video/774914281?h=0a34926c18&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_&amp;dnt=1" />

                   
                <div className={styles.hero_video_sharebar}>
                  <figcaption className=''>
                    <div className='hero_video_sharebar_item'>
                      <p className='hero_video-sharebar-label'>Share on:</p>
                    </div>
                  </figcaption>
                                        
                  <div className='hero_video_sharebar_item'>
                    <a href='https://youtu.be/bB0aCPxL168' target="_blank" rel="noopener noreferrer" aria-label="Visit Us On Youtube"><TfiYoutube className={styles.icon} /></a>
                  </div>
                    
                  <div className='hero_video_sharebar_item'>
                    <a href='https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.larparlife.com%2F' target="_blank" rel="noopener noreferrer" aria-label="Visit Us On Facebook"><FaFacebookSquare className={styles.icon} /></a>
                  </div>
                    
                  <div className='hero_video_sharebar_item'>
                    <a href='https://twitter.com/intent/tweet
                      ?url=https%3A%2F%2Fwww.larparlife.com
                      &text=NEW+Non-Surgical+Treatment+For+LarPar+(GOLPP)!
                      &hashtags=larpar,seniordogs,laryngealparalysis,golpp,larparlife' target="_blank" rel="noopener noreferrer" aria-label="Visit Us On X (Twitter)"><FaTwitterSquare className={styles.icon} /></a>
                  </div>
                    
                  <div className='hero_video_sharebar_item'>
                    <Link href='/contact' aria-label='Contact Us'>
                      <MdMail className={styles.icon} />
                    </Link>
                  </div>
                </div>
              </div>
              <hr/>
            </div>

            <div className={styles.community}>
                <h2 className={styles.community_heading}>Feeling Overwhelmed?</h2>

                <figure className={styles.figure}>
                  <Image 
                    src={CommunityIcon} 
                    // width="0"
                    // height="0"
                    // sizes="100vw"
                    // style={{ width: '100%', height: 'auto' }}
                    className={styles.community_icon} 
                    alt="Miss B Haven" 
                  />
                </figure>
                <h3 className={styles.community_cta}>Join the Community!</h3>
                <div className={styles.community_text}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue  nulla ut justo rutrum consequat. Aliquam eget tincidunt ex. Donec  bibendum risus at.</p>
                </div>

                <div className={styles.community_questions}>
                  <p className={styles.tertiary}>Can my primary veterinarian treat Lar Par? What are the risk factors of tieback surgery? Can my dog suffocate from Lar Par? What does Lar Par sound like? What happens if I don&lsquo;t do anything about my dog&lsquo;s Lar Par?</p>
                  <p className={styles.accent}>What is GOLPP? What are the side effects of surgery? What causes laryngeal paralysis? What&lsquo;s the difference between surgery and stent?Are there other kinds of surgery besides tieback? How much does tieback surgery cost?
                  <p className={styles.primary}>How dangerous is aspiration pneumonia? What are the side effects of surgery? Which breeds does Lar Par affect? Where can I get up-to-date information about Lar Par? Why do I need a specialist diagnosis? What do I do in a breathing emergency? </p>
                  </p>
                  <p className={styles.tertiary}>Is it bad for my Lar Par dog to get excited? Is prolonging life the best thing for my Lar Par dog? Why does my primary veterinarian advise against surgery? Has any dog every died from a stent implant? Is there a cure for Lar Par? Is the stent treatment available where I live?</p>
                  <p className={styles.accent}>What do I feed my Lar Par dog? What is BVEAP surgery? How long before my dog&lsquo;s Lar Par gets really bad? What&lsquo;s stridor? Are all surgeons equally skilled at tieback surgery? Can Lar Par dogs get aspiration pneumonia without surgery?  </p>
                  <p className={styles.primary}>Are there supplements that can help my Lar Par dog? How can I be sure my dog has Lar Par? Can accupuncture help with Lar Par? How much does the specialist diagnosis cost? Can a regular X-ray tell if my dog has Lar Par?</p>


                </div>


            </div>


            <div className={styles.content}>
              {/* <h1 className={styles.content_head}>The 21st Century Guide to <span className="mobile-show-inline"><br /></span>Laryngeal Paralysis in Dogs</h1> */}
              <h2 className={styles.content_subhead}>The Lar Par Dog&lsquo;s Best Friend</h2>
              <p className={styles.content_text}>Lar Par dogs&rsquo; best friends are the people who love them enough to make informed choices for them. This website is devoted to providing reliable, up-to-date information so that people can make the best decisions for their beloved canine companions who suffer from laryngeal paralysis.   </p>
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
              <h2 className={styles.content_subhead}>Lar Par: The Deadly Little Defect</h2>
              <p className={styles.content_text}> 
                With laryngeal paralysis, the larynx (the &lsquo;voicebox&rsquo; that dogs use to bark) stops working properly. The parts that are supposed to open and close to let air through 
                become paralyzed and flaccid, blocking the airway. It&lsquo;s a neurological defect &mdash; the nerves that control the muscles of the larynx stop working. Lar Par dogs can be otherwise perfectly healthy but because of this deadly little defect, they can&lsquo;t get enough air to sustain a quality life. That&lsquo;s the way it was with our black Lab Miss B, but we swore that when Miss B&rsquo;s time came, it wouldn&rsquo;t be for something as menial as that. To learn more about our battle to keep Miss B alive and breathing, go to <Link href="/stories" className="link" target="_blank">Miss B&rsquo;s Incredible Stent Journey&nbsp;<FaArrowCircleRight className="read_more_svg"/></Link>
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