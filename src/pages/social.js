import React from 'react'
import Link from 'next/link'

// !VA Icons
import { FaFacebook } from "react-icons/fa";

// !VA Styles
import * as styles from '../styles/Light.module.scss'

const Social = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>The Canine Laryngeal Paralysis/GOLPP  Community</h1>
          </div>
          <h2 className={styles.content_head}>What is the Lar Par community?</h2>
          <p className={styles.content_text}>
            The Lar Par community is the collective of people whose lives have been impacted by canine laryngeal paralysis/GOLPP. If your beloved companion has or has had this horrible disease, you&rsquo;re a member of the community even if you choose to remain silent or anonymous. But if you want to connect with others, the best way is to join one of our growing international network of Facebook groups.
          </p>
          <h2 className={styles.content_head}>The Open Community</h2>
          <p className={styles.content_text}>
            A truly open community embraces and respects all members regardless of their difference. Each community member&rsquo;s dog is unique and individual, and each community member has unique circumstances that inform their decisions. For some of us, our personal circumstances sadly limit our available options. A true community accepts this with compassion and understanding and without judgment. There a lot of Facebook groups that deal with canine laryngeal paralysis and GOLPP, but three stand out as being open, unbiased, and supportive of free speech.
          </p>
          <h2 className={styles.content_head}>The Lar Par Community Network</h2>
          <p className={styles.content_text}>
            The Lar Par Community network has three Facebook groups active in English and German to serve the international Lar Par community:
          </p>
          <h3 className={styles.content_subhead}>Lar Par/GOLPP International Facebook Group</h3>
          <p className={styles.content_text}>
            This open public group is a positive environment that supports free speech for all people with Lar Par dogs, regardless of personal circumstances.  
            Learn more...
          </p>
          <div className={styles.social_links}> 
            <div className={styles.social_link}>
              <div className={styles.social_link_item}>
                <Link href='#' className='link-dark'>
                  <FaFacebook
                    className={styles.social_icon}
                  />
                  <p className={styles.social_icon_caption}>
                    Lar Par/GOLPP International Group (English language)
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.social_link}>
              <div className={styles.social_link_item}>
                <Link href='#' className='link-dark'>
                  <FaFacebook
                    className={styles.social_icon}
                  />
                  Diese Gruppe ist eine oeffentliche, positive Umgebung zum offenen Austausch von Informationen und Erfahrung in bezug auf Kehlkopflaehmung und GOLPP. 
                  Learn more...  
                </Link>
              </div>
            </div>
            <div className={styles.social_link}>
              <div className={styles.social_link_item}>
                <Link href='#' className='link-dark'>
                  <FaFacebook
                    className={styles.social_icon}
                  />
                  This group was founded in 2022 to advocate for and inform about the safe stent alternative for canine laryngeal paralysis, because information about this procedure continues to be suppressed in other Lar Par Facebook groups and the veterinary establishment.
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Social