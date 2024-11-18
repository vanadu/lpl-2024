import React from 'react'
import {useState} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

import * as styles from '../../styles/Header.module.scss'


// !VA I don't readdy un

const MainNavItems = ( { items, setIsActive } ) => {
  // !VA Initialize the usePathname hook which gets the current route path
  const pathname = usePathname();
  // const [isActive, setIsActive] = useState(null);

  return (
    <>
      <div className={styles.nav_main}>
        <ul 
          className={styles.nav_main_list}
          >

          {items.map( item=> (
              <li 
              key={item.id}
              className={styles.nav_main_list_item}
              onClick={() => setIsActive(true)}
              // ref={ref}
              >
              <Link
                // key={item.text}
                href={item.url}
                className={pathname.includes(`${item.url}`) ? 'active ' + [styles.nav_text, styles.saga_prologue].join(' ') : [styles.nav_text, styles.saga_prologue].join(' ')}
                >{item.text}
              </Link>
            </li>
           ))}

        </ul>
      </div>      

    </> 
    )
}

export default MainNavItems