'use client'

import { usePathname } from 'next/navigation';
import React from 'react'
import styles from './header.module.css'
import Link from 'next/link';

export default function FlatNavbar() {
  
  const pathname = usePathname();
  return (
    <ul>
      <li className={pathname === '/' ? styles.activeNavItem : ''}>
        <Link href={`/`}>Home</Link>
      </li>
      <li className={pathname.includes('about') ? styles.activeNavItem : ''}>
        <Link href={`/about`}>About</Link>
      </li>
      <li className={pathname.includes('/news') ? styles.activeNavItem : ''}>
        <Link href={`/news`}>News</Link>
      </li>
      <li className={pathname.includes('/jobs') ? styles.activeNavItem : ''}>
        <Link href={`/jobs`}>Jobs</Link></li>
      <li className={pathname.includes('/tenders') ? styles.activeNavItem : ''}>
        <Link href={`/tenders`}>Tenders</Link></li>
      <li>
        <Link
          href='https://zsvp.org/webmail'
          rel='noopener noreferrer'
          target='_blank'>Login</Link>
      </li>
    </ul>
  )
}
