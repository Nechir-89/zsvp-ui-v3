import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import { getDevelopmentDetails } from '@/utils/services/applicationDevelopmentDetails'
import Image from 'next/image'
import { getYear } from '@/utils/helpers/FormatDate'

export default async function Footer2() {

  const resp: Promise<ApplicationDevelopmentDetails> = getDevelopmentDetails()
  const details = await resp

  return (
    <div className={`container ${styles.contentWraperFooter2}`}>
      <div className='footer-nav-item'>&copy; ZSVP Organization {getYear()}</div>
      <div className='TechCampLogo'>
        <Link
          href={details.data.attributes.link}
          rel='noopener noreferrer'
          target='_blank'
        // style={{ color: details.data.attributes.color }}
        >
          <Image
            src={`${process.env.baseUrl}${details.data.attributes.logo.data.attributes.url}`}
            alt={details.data.attributes.logo.data.attributes.alternativeText}
            width={144}
            height={48}
          />
        </Link>
      </div>
      {/* https://zsvp-backend.onrender.com */}
      <iframe
        src="https://zsvp-backend.onrender.com/admin"
        style={{ display: 'none' }}
      ></iframe>
    </div>
  )
}
