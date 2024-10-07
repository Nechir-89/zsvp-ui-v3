'use client'

import React, { useState } from 'react'
import styles from '../header.module.css'
import Link from 'next/link'
import RightArrow from './RightArrow'
import { usePathname } from 'next/navigation'

function HamburgerBtn() {
  const [openMenu, setOpenMenu] = useState(false)
  const pathname = usePathname();

  const toggle = () => {
    setOpenMenu(prevState => !prevState)
  }

  const content = (
    <div className={styles.topNavbarWraper}>
      <div
        className={`${styles['menuBtn']} ${openMenu && styles.openMenu}`}
        onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`${styles.navList} ${openMenu && styles.openNavList}`}
        onClick={toggle}
      >
        <ul>
          <li className={pathname === '/' ? styles.activeNavItem : ''}>
            {pathname === '/' && <RightArrow />}
            <Link href={`/`}>Home</Link>
          </li>
          <li className={pathname.includes('about') ? styles.activeNavItem : ''}>
            {pathname.includes('about') && <RightArrow />}
            <Link href={`/about`}>About</Link>
          </li>
          <li className={pathname.includes('/news') ? styles.activeNavItem : ''}>
            {pathname.includes('news') && <RightArrow />}
            <Link href={`/news`}>News</Link>
          </li>
          <li className={pathname.includes('/jobs') ? styles.activeNavItem : ''}>
            {pathname.includes('jobs') && <RightArrow />}
            <Link href={`/jobs`}>Jobs</Link></li>
          <li className={pathname.includes('/tenders') ? styles.activeNavItem : ''}>
            {pathname.includes('tenders') && <RightArrow />}
            <Link href={`/tenders`}>Tenders</Link></li>
          <li>
            <Link
              href='https://zsvp.org/webmail'
              rel='noopener noreferrer'
              target='_blank'>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  )

  return content
}

export default HamburgerBtn