import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter} from 'next/router'
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
import ShowMoreContent from '@/components/ShowMoreContent'
// !VA Styles
import * as styles from '../styles/Home.module.scss'

const Home = ( {posts}) => {
  // !VA Log out the posts exported from the getStaticProps function below 
  const router = useRouter()

  const [activeIndex, setActiveIndex] = useState(0)


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
          {/* Top level parent container for all community elements - spans the entire page width to allow the marquee elements to extend to the device borders. */}
          <div className={styles.community}>

            <h2 className={styles.community_head}>Feeling Overwhelmed?</h2>
            {/* <h3 className={styles.community_subhead}>Laryngeal Paralysis in Dogs Quick FAQs</h3> */}

            {/* !VA Container for the individual community question animations */}
            {/* !VA I used this technique: https://stackoverflow.com/questions/45847392/pure-css-continuous-horizontal-text-scroll-without-break. There was also a codepen I leaned on but I can't find it now.  */}
            {/* !VA This technique makes it very hard to switch directions and I don't have time to deal with it right now. */}
            {/* !VA There is a copy of each marquee to ensure that it reaches across the entire device width.  */}
            <div className={styles.community_questions}>
              {/* First scrolling animation  */}
              <div className={styles.marquee_wrapper1}>
                <div className={styles.marquee1}>
                  <p>
                  <Link href='#whatisgolpp' className={styles.link_community}>What is GOLPP?</Link> <Link href='#sideeffectsofsurgery' className={styles.link_community}>What are the side effects of surgery?</Link> <Link href='#causesoflaryngealparalysis' className={styles.link_community}>What causes laryngeal paralysis?</Link> <Link href='#surgerystentdifference'  className={styles.link_community}>What&lsquo;s the difference between surgery and stent?</Link> <Link href='#typesofsurgery'  className={styles.link_community}>Are there other kinds of surgery besides tieback?</Link> <Link href='#costofsurgery' className={styles.link_community}>How much does tieback surgery cost?</Link>&nbsp;
                  </p>
                  <p>
                  <Link href='#whatisgolpp' className={styles.link_community}>What is GOLPP?</Link> <Link href='#sideeffectsofsurgery' className={styles.link_community}>What are the side effects of surgery?</Link> <Link href='#causesoflaryngealparalysis' className={styles.link_community}>What causes laryngeal paralysis?</Link> <Link href='#surgerystentdifference'  className={styles.link_community}>What&lsquo;s the difference between surgery and stent?</Link> <Link href='#typesofsurgery'  className={styles.link_community}>Are there other kinds of surgery besides tieback?</Link> <Link href='#costofsurgery' className={styles.link_community}>How much does tieback surgery cost?</Link>&nbsp;
                  </p>
                </div>
              </div>
              {/* Second scrolling animation  */}
              <div className={styles.marquee_wrapper2}>
                <div className={styles.marquee2}>
                    <p>
                      <Link href='#dangersofaspirationpneumonia' className={styles.community_link}>How dangerous is aspiration pneumonia?&nbsp;</Link>
                      <Link href='#lpgroupsonfacebook' className={styles.community_link}>Are there Lar Par groups on Facebook?&nbsp;</Link>
                      <Link href='#whichbreedsdoeslpaffect' className={styles.community_link}>Which breeds does Lar Par affect?&nbsp;</Link>
                      <Link href='#uptodateinfo' className={styles.community_link}>Where can I get up-to-date information about Lar Par?&nbsp;</Link>
                      <Link href='#specialistdiagnosis' className={styles.community_link}>Why do I need a specialist diagnosis?&nbsp;</Link>&nbsp;
                      <Link href='#breathingemergency' className={styles.community_link}>What do I do in a breathing emergency?</Link>&nbsp;
                    </p>
                    <p>
                      <Link href='#dangersofaspirationpneumonia' className={styles.community_link}>How dangerous is aspiration pneumonia? </Link>
                      <Link href='#lpgroupsonfacebook' className={styles.community_link}>Are there Lar Par groups on Facebook? </Link>
                      <Link href='#whichbreedsdoeslpaffect' className={styles.community_link}>Which breeds does Lar Par affect?</Link>
                      <Link href='#uptodateinfo' className={styles.community_link}>Where can I get up-to-date information about Lar Par?</Link>
                      <Link href='#specialistdiagnosis' className={styles.community_link}>Why do I need a specialist diagnosis?</Link>&nbsp;
                      <Link href='#breathingemergency' className={styles.community_link}>What do I do in a breathing emergency?</Link>
                    </p>
                </div>
              </div>
              {/* Third scrolling animation  */}
              <div className={styles.marquee_wrapper3}>
                <div className={styles.marquee3}>
                  <p>
                    <Link href='#lpdogsgettingexcited' className={styles.community_link}>Is it bad for my Lar Par dog to get excited?</Link>&nbsp;
                    <Link href='#prolonginglife' className={styles.community_link}>Is prolonging life the best thing for my Lar Par dog?</Link>&nbsp;
                    <Link href='#veterinarianadvice' className={styles.community_link}>Why does my primary veterinarian advise against surgery?</Link>&nbsp;
                    <Link href='#stentmortality' className={styles.community_link}>Has any dog every died from a stent implant?</Link>&nbsp;
                    <Link href='#lpcure' className={styles.community_link}>Is there a cure for Lar Par?</Link>
                    <Link href='#stentavailablity' className={styles.community_link}>Is the stent treatment available where I live?</Link>
                         &nbsp;
                    </p>
                    <p>
                    <Link href='#lpdogsgettingexcited' className={styles.community_link}>Is it bad for my Lar Par dog to get excited?</Link>&nbsp;
                    <Link href='#prolonginglife' className={styles.community_link}>Is prolonging life the best thing for my Lar Par dog?</Link>&nbsp;
                    <Link href='#veterinarianadvice' className={styles.community_link}>Why does my primary veterinarian advise against surgery?</Link>&nbsp;
                    <Link href='#stentmortality' className={styles.community_link}>Has any dog every died from a stent implant?</Link>&nbsp;
                    <Link href='#lpcure' className={styles.community_link}>Is there a cure for Lar Par?</Link>&nbsp;
                    <Link href='#stentavailablity' className={styles.community_link}>Is the stent treatment available where I live?</Link>
                         &nbsp;
                    </p>
                </div>
              </div>
              {/* Fourth scrolling animation  */}
              <div className={styles.marquee_wrapper4}>
                <div className={styles.marquee4}>
                  <p>
                    <Link href='#feedinglpdogs' className={styles.community_link}>What should I feed my Lar Par dog?</Link>&nbsp;
                    <Link href='#whatisbveap' className={styles.community_link}>What is BVEAP surgery?</Link>&nbsp;
                    <Link href='#lpprogression' className={styles.community_link}>How long before my dog&lsquo;s Lar Par gets really bad?</Link>&nbsp;
                    <Link href='#whatisstridor' className={styles.community_link}>What&lsquo;s stridor?</Link>&nbsp;
                    <Link href='#areallsurgeonsequal' className={styles.community_link}>Are all surgeons equally skilled at tieback surgery?</Link>&nbsp;
                    <Link href='#apwithoutsurgery' className={styles.community_link}>Can Lar Par dogs get aspiration pneumonia without surgery?</Link>&nbsp;
                       &nbsp; 
                  </p>
                  <p>
                    <Link href='#feedinglpdogs' className={styles.community_link}>What should I feed my Lar Par dog?</Link>&nbsp;
                    <Link href='#whatisbveap' className={styles.community_link}>What is BVEAP surgery?</Link>&nbsp;
                    <Link href='#lpprogression' className={styles.community_link}>How long before my dog&lsquo;s Lar Par gets really bad?</Link>&nbsp;
                    <Link href='#whatisstridor' className={styles.community_link}>What&lsquo;s stridor?</Link>&nbsp;
                    <Link href='#areallsurgeonsequal' className={styles.community_link}>Are all surgeons equally skilled at tieback surgery?</Link>&nbsp;
                    <Link href='#apwithoutsurgery' className={styles.community_link}>Can Lar Par dogs get aspiration pneumonia without surgery?</Link>&nbsp;
                       &nbsp; 
                  </p>
                </div>
              </div>
              {/* Fifth scrolling animation  */}
              <div className={styles.marquee_wrapper5}>
                <div className={styles.marquee5}>
                  <p>
                    <Link href='#lpsupplements' className={styles.community_link}>Are there supplements that can help my Lar Par dog?</Link>&nbsp;
                    <Link href='#howtobesure' className={styles.community_link}>How can I be sure my dog has Lar Par?</Link>&nbsp;
                    <Link href='#lpaccupuncture' className={styles.community_link}>Can accupuncture help with Lar Par?</Link>&nbsp;
                    <Link href='#diagnosiscost' className={styles.community_link}>How much does the specialist diagnosis cost?</Link>&nbsp;
                    <Link href='#doesxrayshowlp' className={styles.community_link}>Can a regular X-ray tell if my dog has Lar Par?</Link>&nbsp;
                  </p>
                  <p>
                    <Link href='#lpsupplements' className={styles.community_link}>Are there supplements that can help my Lar Par dog?</Link>&nbsp;
                    <Link href='#howtobesure' className={styles.community_link}>How can I be sure my dog has Lar Par?</Link>&nbsp;
                    <Link href='#lpaccupuncture' className={styles.community_link}>Can accupuncture help with Lar Par?</Link>&nbsp;
                    <Link href='#diagnosiscost' className={styles.community_link}>How much does the specialist diagnosis cost?</Link>&nbsp;
                    <Link href='#' className={styles.community_link}>Can a regular X-ray tell if my dog has Lar Par?</Link>&nbsp;
                  </p>
                </div>
              </div>
            </div>


            <div className={styles.community_content}>
              <h3 className={styles.community_cta}>
                <Link href='/social' className={styles.community_cta}>Join the Community!</Link>
              </h3>
              <Link href='/social' className='link-dark'>
                <Image 
                  src={JoinUsIcon} 
                  className={styles.community_icon} 
                  alt="Join the Lar Par Community" 
                />
              </Link>
              <div className={styles.community_text}>
                <p className={styles.content_text}>
                How can you make the best decision about your dog&rsquo;s Lar Par when you have so many questions and when so many people &mdash; even veterinarians &mdash; seem to be saying different things? 
                </p>
                <p className={styles.content_text}>
                Your Lar Par decisions depend on your personal circumstances and your individual dog, so the best place to find guidance is the community of people like you who have first-hand experience, information, and insights to share. You can connect with thousands of people worldwide by <Link href='/social' className={styles.community_link}>joining our growing network of Facebook groups worldwide</Link>. 
                </p>
                <p className={styles.content_text}>
                  You can click on any question in the scrolling marquee text above to go straight to the <Link href='#quickfaqs' className={styles.community_link}>Laryngeal Paralysis/GOLPP Quick FAQs</Link> at the bottom of this page.
                </p>
              </div>
              
            </div>

          </div>
        </div>
      </section>


      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.main}>
            <h1 className={styles.main_head}>Laryngeal Paralysis in Dogs: <span 
            className="mobile-show-inline"><br /></span>The 21st Century Guide</h1>
            <h2 className={styles.main_subhead}>Your Lar Par Dog&rsquo;s Best Friend</h2>
            <p className={styles.content_text}>Lar Par dogs&rsquo; best friends are the people who love them enough to make informed choices for them. This website is devoted to providing reliable, up-to-date information so that people can make the best decisions for their beloved canine companions who suffer from laryngeal paralysis.   </p>

            <h2 className={styles.main_subhead}>Lar Par: The Deadly Little Defect</h2>
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
              become paralyzed and flaccid, blocking the airway. It&lsquo;s a neurological defect &mdash; the nerves that control the muscles of the larynx stop working. Lar Par dogs can be otherwise perfectly healthy but because of this deadly little defect, they can&lsquo;t get enough air to sustain a quality life. That&lsquo;s the way it was with our black Lab Miss B, but we swore that when Miss B&rsquo;s time came, it wouldn&rsquo;t be for something as menial as that. To learn more about our battle to keep Miss B alive and breathing, go to <Link href="/stories" className="link" target="_blank">Miss B&rsquo;s Incredible Stent&nbsp;Journey&nbsp;<FaArrowCircleRight className="read_more_svg"/></Link>
            </p>
            <h2 className={styles.main_subhead}>The Non-Surgical Alternative</h2>
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

            <h2 className={styles.main_subhead}>
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
                Lar Par Guide
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
              You can also find links to pertinent research and informational websites from respected institution on the <Link href="/patients/links" className='link'>Research Links and More Info</Link> page. You can explore a dog lover&lsquo;s perspective on Lar Par-related topics in the <Link href="/blog" className='link'>News</Link> section. 
            </p>
            <p className={styles.content_text}>
              Thank you for visiting LarParLife.com.  People want a more moderate treatment path for their beloved canine companions, a third way between surgery and deteriorating quality of life. It&rsquo;s time for this affordable, life-saving alternative to move into the mainstream of veterinary care.  
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.main}>
            <h2 href="" className={styles.main_head}>Laryngeal Paralysis in Dogs <span className='mobile-show-inline'><br /></span> Quick FAQs</h2>
            <p className={styles.content_text}>
              Here are some frequently-asked questions about laryngeal paralysis/GOLPP in dogs. For more detailed answers, visit our <Link href='#' className='link-dark'>21st Century Guide to Laryngeal Paralysis </Link> or join the <Link href='#' className='link-dark'>Lar Par community on Facebook</Link>. 
            </p>
            <div className={styles.quick_faqs}>
              {/* MARQUEE TEXT SECTION 1 */}
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What is GOLPP?'
                  anchor='whatisgolpp'
                  index={1}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                    <span className='semibold'>GOLPP</span> stands for <span className='semibold-italic'>Geteriatric Onset Laryngeal Paralysis and Polyneuropathy</span>, which is a long way of saying that some dogs’ nervous systems begin to weaken when they reach a certain age. As a result, the muscles no longer receive the signals from the brain that tell them what to do. Most often, the larynx is the first thing to become paralyzed. Then, the hind end becomes progressively weaker. See the <Link href='/allabout' className='link-dark'>Lar Par Guide</Link> to learn more and to find links to detailed explanations on veterinary websites. 
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
            

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What are the side effects of surgery?'
                  anchor='sideeffectsofsurgery'
                  index={2}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Although surgery for laryngeal paralysis in most cases results in positive outcomes, there is a significant risk of complications, some of which can be very serious or fatal. Possible complications include aspiration pneumonia, anesthesia intolerance, suture failure, and infection at the incision site. These risks factors have been studied extensively in the 40 years since LP surgeries first were developed. For more information, see the research studies linked to on the <Link href='/patients/links' className='link-dark'>Research and Website Links</Link> page of the <Link href='/allabout' className='link-dark'>Lar Par Guide</Link>. 
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
            

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What causes laryngeal paralysis?'
                  anchor='causesoflaryngealparalysis'
                  index={3}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Veterinary science distinguishes between acquired and congenital laryngeal paralysis. Acquired LP can be caused by age-related neurological degeneration, trauma to the neck or throat, or other factors related to injury or disease. Congenital LP is present at birth and generally has a genetic or breed-specific component. In both cases, it can be treated with surgery or a stent implant, however with age-related neurological degeneration, the polyneuropathy will progress even if the laryngeal paralysis is treated. For more information see the <Link href='/allabout' className='link-dark'>Lar Par Guide</Link>.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
            
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What&lsquo;s the difference between surgery and stent?'
                  anchor='surgerystentdifference'
                  index={4}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Surgery is an invasive procedure that entails modifying the physical structure of the larynx to enlarge the airway through the paralyzed larynx. The stent implant is a minimally invasive procedure that entails placing a physical body between the paralyzed parts of the larynx to create an artifical airway. For more information, see the <Link href='/patients/treatment' className='link-dark'>Treatment Options</Link> topic in the <Link href='#' className='link-dark'>Lar Par Guide</Link>.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Are there other kinds of surgery besides tieback?'
                  anchor='typesofsurgery'
                  index={5}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='How much does tieback surgery cost?'
                  anchor='costofsurgery'
                  index={6}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* MARQUEE TEXT SECTION 2 */}
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='How dangerous is aspiration pneumonia?'
                  anchor='dangersofaspirationpneumonia'
                  index={7}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Are there Lar Par groups on Facebook?'
                  anchor='lpgroupsonfacebook'
                  index={8}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Which breeds does Lar Par affect?'
                  anchor='whichbreedsdoeslpaffect'
                  index={9}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Where can I get up-to-date information about Lar Par?'
                  anchor='uptodateinfo'
                  index={10}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Why do I need a specialist diagnosis?'
                  anchor='specialistdiagnosis'
                  index={11}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}


              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What do I do in a breathing emergency?'
                  anchor='breathingemergency'
                  index={12}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* MARQUEE TEXT SECTION 3 */}  
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Is it bad for my Lar Par dog to get excited?'
                  anchor='lpdogsgettingexcited'
                  index={13}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}


              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Is prolonging life the best thing for my Lar Par dog?'
                  anchor='prolonginglife'
                  index={14}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Why does my primary veterinarian advise against surgery?'
                  anchor='veterinarianadvice'
                  index={15}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Has any dog every died from a stent implant?'
                  anchor='stentmortality'
                  index={16}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Is there a cure for Lar Par?'
                  anchor='lpcure'
                  index={17}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Is the stent treatment available where I live?'
                  anchor='stentavailablity'
                  index={18}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime atque placeat esse quisquam ex aliquid, recusandae illo, molestias iste molestiae mollitia assumenda neque quos dolore vel qui velit blanditiis dicta?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}


              {/* MARQUEE TEXT SECTION 4 */}
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What should I feed my Lar Par dog?'
                  anchor='feedinglpdogs'
                  index={19}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rem voluptas quas quaerat iste quos eligendi voluptatibus. Harum nulla nostrum quisquam! Numquam accusamus beatae minima laboriosam, voluptatibus nostrum a alias?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What is BVEAP surgery?'
                  anchor='whatisbveap'
                  index={20}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rem voluptas quas quaerat iste quos eligendi voluptatibus. Harum nulla nostrum quisquam! Numquam accusamus beatae minima laboriosam, voluptatibus nostrum a alias?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='How long before my dog&lsquo;s Lar Par gets really bad?'
                  anchor='lpprogression'
                  index={21}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rem voluptas quas quaerat iste quos eligendi voluptatibus. Harum nulla nostrum quisquam! Numquam accusamus beatae minima laboriosam, voluptatibus nostrum a alias?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}                  

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What is stridor?'
                  anchor='whatisstridor'
                  index={22}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rem voluptas quas quaerat iste quos eligendi voluptatibus. Harum nulla nostrum quisquam! Numquam accusamus beatae minima laboriosam, voluptatibus nostrum a alias?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Are all surgeons equally skilled at tieback surgery?'
                  anchor='areallsurgeonsequal'
                  index={23}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rem voluptas quas quaerat iste quos eligendi voluptatibus. Harum nulla nostrum quisquam! Numquam accusamus beatae minima laboriosam, voluptatibus nostrum a alias?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Can Lar Par dogs get aspiration pneumonia without surgery?'
                  anchor='apwithoutsurgery'
                  index={24}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rem voluptas quas quaerat iste quos eligendi voluptatibus. Harum nulla nostrum quisquam! Numquam accusamus beatae minima laboriosam, voluptatibus nostrum a alias?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}


              {/* MARQUEE TEXT SECTION 5 */}
                {/* ShowMoreComponent content start */}
                <div className={styles.content_text}>
                <ShowMoreContent
                  title='Are there supplements that can help my Lar Par dog?'
                  anchor='lpsupplements'
                  index={25}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rem voluptas quas quaerat iste quos eligendi voluptatibus. Harum nulla nostrum quisquam! Numquam accusamus beatae minima laboriosam, voluptatibus nostrum a alias?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='How can I be sure my dog has Lar Par?'
                  anchor='howtobesure'
                  index={26}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rem voluptas quas quaerat iste quos eligendi voluptatibus. Harum nulla nostrum quisquam! Numquam accusamus beatae minima laboriosam, voluptatibus nostrum a alias?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}


              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Can accupuncture help with Lar Par?'
                  anchor='lpaccupuncture'
                  index={27}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rem voluptas quas quaerat iste quos eligendi voluptatibus. Harum nulla nostrum quisquam! Numquam accusamus beatae minima laboriosam, voluptatibus nostrum a alias?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='How much does the specialist diagnosis cost?'
                  anchor='diagnosiscost'
                  index={28}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rem voluptas quas quaerat iste quos eligendi voluptatibus. Harum nulla nostrum quisquam! Numquam accusamus beatae minima laboriosam, voluptatibus nostrum a alias?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Can a regular X-ray tell if my dog has Lar Par?'
                  anchor='doesxrayshowlp'
                  index={29}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rem voluptas quas quaerat iste quos eligendi voluptatibus. Harum nulla nostrum quisquam! Numquam accusamus beatae minima laboriosam, voluptatibus nostrum a alias?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}       

            </div> 


            <p className={styles.content_text}>
              Laryngeal paralysis and GOLPP in dogs is a complex topic, and you&lsquo;re bound to encounter people with strong opinions that aren&lsquo;t always based on accurate information. The purpose of this site is to collect current, verifiable information on laryngeal paralysis and GOLPP into one place. We&lsquo;ve done the research and can provide references to published sources for everything you read here. If you believe information on this site is inaccurate, please contact us via our <Link href='/contact' className='link-dark'>Contact page</Link> or <Link href='/social' className='link-dark'>social media</Link>. 
            </p>
            <p className={styles.content_text}>
              &nbsp;
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