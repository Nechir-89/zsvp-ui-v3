import { getSocialMedias } from '@/utils/services/socialMedias'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './header.module.css'
import { Suspense } from 'react'
// import Alert from './Alert';
import HamburgerBtn from './hamburgerBtn/HamburgerBtn';
import FlatNavbar from './FlatNavbar';

export default async function Navbar() {
  const socialMedias: Promise<SocialMedias> = getSocialMedias();
  const medias = await socialMedias
  
  const content = (
    <header className={`${styles.header}`}>
      <Suspense>
        {/* <Alert /> */}
      </Suspense>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <Link href='/' className={`${styles.logo}`}>
            <Image
              src="/logo262.png"
              alt="ZSVP Organization Logo"
              fill={true}
              priority={true}
              className={'logo'}
            />
          </Link>
        </div>
        <div id={styles['social-icons-and-menu-btns']}>
          <div className={styles.menuItems}>
            <FlatNavbar />
          </div>
          <div id={styles['social-icons']}>
            {
              medias?.data?.map(media => <Link
                href={media.attributes.link}
                target='_blank' key={media.id}
                rel='noopener noreferrer'
              >
                <Image
                  src={`${process.env.baseUrl}${media.attributes.logo.data.attributes.url}`}
                  alt={`${media.attributes.title}`}
                  fill={true}
                  priority={true}
                />
              </Link>
              )
            }
          </div>
          <HamburgerBtn />
        </div>
      </nav>
    </header>
  )

  return content
}
