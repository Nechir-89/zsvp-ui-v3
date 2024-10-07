'use client'
import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import removeSpace from '@/utils/helpers/removeSpace'
import Link from 'next/link'
// import { useRouter } from 'next/router';

type Props = {
  aboutItems: AboutItems,
  topPadding: string
}

export default function AboutNavigation({ aboutItems, topPadding }: Props) {
  const [urlHash, setUrlHash] = useState('');
  // const { asPath } = useRouter();

  // useEffect(()=>{
  //  const hash = asPath.split('#')[1];

  // }, []);

  useEffect(() => {
    setUrlHash(window.location.hash.replace(/\#/, ''))
  }, [])

  const handleClick = async () => {
    await setUrlHash(window.location.hash.replace(/\#/, ''))
  }

  return (
    <section className={styles.aboutNavigation} style={{ paddingTop: topPadding }}>
      {
        aboutItems.data?.map((item: AboutItem, index: number) => <div
          key={item.id}
          className={
            `${styles.aboutNavItem} ${urlHash === '' && index === 0 ?
              styles.activeNavItem :
              urlHash === removeSpace(item.attributes.title) ?
                styles.activeNavItem : styles.inactiveNavItem}`
          }
          id={`${item.id}`}
        >
          <Link
            href={`/about#${removeSpace(item.attributes.title)}`}
            onClick={handleClick}>
            {item.attributes.title}
          </Link>
        </div>
        )
      }
    </section>
  )
}
